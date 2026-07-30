// Odbiór powiadomień PayU o statusie płatności (server→server).
// Weryfikuje podpis (drugi klucz MD5) i oznacza zamówienie jako opłacone.
import crypto from "crypto";
import { supabase } from "@/components/supabaseClient";

export const runtime = "nodejs";

const MD5 = process.env.PAYU_MD5 || "7a1357880fc7f78e5df98336f0e71754";

export async function POST(request) {
  try {
    const raw = await request.text();

    // Weryfikacja podpisu: md5(body + drugi_klucz) == signature z nagłówka OpenPayu-Signature
    const sigHeader = request.headers.get("openpayu-signature") || "";
    const provided = (sigHeader.match(/signature=([^;]+)/i) || [])[1] || "";
    const expected = crypto.createHash("md5").update(raw + MD5).digest("hex");
    if (provided && provided.toLowerCase() !== expected.toLowerCase()) {
      console.warn("PayU notify: niezgodny podpis");
      return new Response("OK", { status: 200 });
    }

    const body = JSON.parse(raw || "{}");
    const order = body.order || {};
    console.log("PayU notify:", order.extOrderId, order.status);

    if (order.status === "COMPLETED" && order.extOrderId) {
      // numerZlecenia jest unikalny; aktualizujemy w obu tabelach (dopasuje się tylko właściwa)
      for (const table of ["Zamówienia", "ToaletyZamowienia"]) {
        await supabase.from(table).update({ Status: "Opłacone" }).eq("numerZlecenia", order.extOrderId);
      }
    }

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("PayU notify error:", err);
    return new Response("OK", { status: 200 });
  }
}
