// Endpoint pomocniczy: Chrome DevTools odpytuje
// /.well-known/appspecific/com.chrome.devtools.json przy otwartych narzędziach.
// Zwracamy pustą odpowiedź 200, aby uniknąć błędów 404 w logach serwera.
export const dynamic = "force-static";

export function GET() {
  return new Response("{}", {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}
