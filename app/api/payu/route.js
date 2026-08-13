// PayU REST API — tworzenie zamówienia (server-side). Zwraca redirectUri do bramki płatności.
const POS_ID = process.env.PAYU_POS_ID || "4428509";
const CLIENT_ID = process.env.PAYU_CLIENT_ID || "4428509";
const CLIENT_SECRET = process.env.PAYU_CLIENT_SECRET || "c7cec8c9181603d1e4c958065917b325";
const BASE = process.env.PAYU_BASE || "https://secure.payu.com"; // produkcja; sandbox: https://secure.snd.payu.com

async function getToken() {
  const res = await fetch(`${BASE}/pl/standard/user/oauth/authorize`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
  });
  const data = await res.json();
  if (!data.access_token) throw new Error("PayU OAuth: brak tokenu");
  return data.access_token;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { amount, description, email, phone, firstName, lastName, orderRef, continueUrl } = body;

    const grosze = Math.round(Number(amount) * 100);
    if (!grosze || grosze < 1) {
      return Response.json({ error: "Nieprawidłowa kwota" }, { status: 400 });
    }

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";
    const origin = new URL(request.url).origin;

    const token = await getToken();

    const orderPayload = {
      notifyUrl: `${origin}/api/payu/notify`,
      continueUrl: continueUrl || `${origin}/?platnosc=ok`,
      customerIp: ip,
      merchantPosId: POS_ID,
      description: description || "Zamówienie BIALGRUZ",
      currencyCode: "PLN",
      totalAmount: String(grosze),
      extOrderId: orderRef || `BIAL-${Date.now()}`,
      buyer: {
        email: email || "kontakt@bialgruz.pl",
        phone: phone || "",
        firstName: firstName || "",
        lastName: lastName || "",
        language: "pl",
      },
      products: [{ name: description || "Usługa BIALGRUZ", unitPrice: String(grosze), quantity: "1" }],
    };

    const res = await fetch(`${BASE}/api/v2_1/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(orderPayload),
      redirect: "manual", // PayU zwraca 302 z JSON { redirectUri, orderId }
    });

    const data = await res.json().catch(() => ({}));
    if (data.redirectUri) {
      return Response.json({ redirectUri: data.redirectUri, orderId: data.orderId });
    }
    return Response.json({ error: "PayU: brak redirectUri", detail: data }, { status: 502 });
  } catch (err) {
    console.error("PayU error:", err);
    return Response.json({ error: err.message || "Błąd PayU" }, { status: 500 });
  }
}
