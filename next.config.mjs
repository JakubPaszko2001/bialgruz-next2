/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
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

