/* BIALGRUZ service worker — cache po stronie klienta dla szybszych powrotów na stronę */
//
// ZASADA: wersja cache jest wczytywana z /sw-version.json (generowanego przy każdym buildzie).
// Jeśli wersja się zmieni (nowy deploy), service worker:
//   1. usuwa WSZYSTKIE istniejące cache,
//   2. aktywuje się natychmiast (skipWaiting + clients.claim),
//   3. wymusza przeładowanie otwartych kart.
// Dzięki temu po każdym wdrożeniu klienci dostają świeże pliki bez ręcznego czyszczenia cache.
//
// DODATKOWO: pliki .html (m.in. szablony umów /Umowa.html, /UmowaKontener.html) NIE są
// nigdy cachowane — zawsze pobierane z sieci, żeby zmiana treści umowy była widoczna od razu.
const CACHE_PREFIX = "bialgruz";

// Wczytaj wersję buildu; jeśli się nie uda — użyj fallbacku z sygnaturą czasu.
async function getBuildVersion() {
  try {
    const res = await fetch("/sw-version.json", { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data && data.version) return String(data.version);
    }
        } catch {
    /* brak pliku / offline — użyj fallbacku */
        }
  return "fallback-" + Date.now();
  }

let CACHE = CACHE_PREFIX + "-pending";

// Instalacja — od razu aktywuj nową wersję
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

// Aktywacja — usuń WSZYSTKIE stare cache i ustaw aktualną wersję
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      CACHE = CACHE_PREFIX + "-" + (await getBuildVersion());

      const keys = await caches.keys();
      // Kasujemy wszystko, co nie jest aktualnym cache (również inne aplikacje / stare wersje).
      await Promise.all(
        keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
      );

      await self.clients.claim();
    })()
  );
});

// Wiadomość z klienta: natychmiast aktywuj nową wersję SW
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Tylko GET z tej samej domeny; pomijamy API i zewnętrzne (np. Supabase, Nominatim)
  if (req.method !== "GET" || url.origin !== self.location.origin) return;

  // Pliki .html (szablony umów i strony) NIE są cachowane — zawsze świeże z sieci.
  // Wyjątek: nawigacja (network-first z fallbackiem offline) obsługiwana niżej.
  if (url.pathname.endsWith(".html") && req.mode !== "navigate") {
    return; // oddajemy do sieci z pominięciem SW
  }

  const isStatic =
    url.pathname.startsWith("/_next/static/") ||
    /\.(png|jpg|jpeg|gif|webp|avif|svg|ico|woff|woff2|css|js)$/.test(url.pathname);

  if (isStatic) {
    // Statyczne zasoby: cache-first (są wersjonowane / rzadko się zmieniają)
    event.respondWith(
      caches.open(CACHE).then(async (cache) => {
        const hit = await cache.match(req);
        if (hit) return hit;
        const res = await fetch(req);
        if (res.ok) cache.put(req, res.clone());
        return res;
      })
    );
    return;
  }

  // Strony (HTML): network-first, z fallbackiem do cache offline
  if (req.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const res = await fetch(req);
          const cache = await caches.open(CACHE);
          cache.put(req, res.clone());
          return res;
        } catch {
          const cached = await caches.match(req);
          return cached || Response.error();
        }
      })()
    );
  }
});

