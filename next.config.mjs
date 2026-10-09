/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Service worker i plik wersji — ZAWSZE bez cache.
        // Bez tego przeglądarka trzyma stary sw.js i reset cache nie zadziała.
        source: "/:path(sw.js|sw-version.json)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, max-age=0",
          },
        ],
      },
      {
        // Szablony umów (HTML) — NIE cache'ujemy, żeby po zmianie treści umowy
        // (np. danych Zleceniobiorcy) użytkownicy zawsze dostawali aktualną wersję.
        source: "/:path(Umowa|UmowaKontener).html",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, must-revalidate",
          },
        ],
      },
      {
        // Strony podpisu umowy (/umowa/...) — też bez cache, bo zawierają dane zamówienia.
        source: "/umowa/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, must-revalidate",
          },
        ],
      },
      {
        // Obrazki, ikony i czcionki z /public — długi cache w przeglądarce klienta
        source: "/:path*.(png|jpg|jpeg|gif|webp|avif|svg|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        // Chrome DevTools odpytuje ten endpoint (.well-known/appspecific).
        // Zwracamy pustą odpowiedź 200, żeby nie zaśmiecać logów błędem 404.
        source: "/.well-known/appspecific/com.chrome.devtools.json",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/.well-known/appspecific/com.chrome.devtools.json",
        destination: "/api/devtools-probe",
      },
    ];
  },
};

export default nextConfig;

