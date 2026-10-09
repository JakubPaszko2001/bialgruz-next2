"use client";

import { useEffect } from "react";

// Klucz w localStorage, w którym trzymamy wersję buildu widzianą przez klienta.
const BUILD_KEY = "bialgruz_build_version";

// Globalna funkcja: pełny reset cache aplikacji. Można wywołać np. z panelu admina:
//   await window.resetAppCache();
// Usuwa Service Workery, wszystkie cache, localStorage/sessionStorage i przeładowuje stronę.
export async function resetAppCache() {
  try {
    if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((r) => r.unregister()));
    }
    if (typeof caches !== "undefined") {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    }
    if (typeof localStorage !== "undefined") localStorage.clear();
    if (typeof sessionStorage !== "undefined") sessionStorage.clear();
  } catch {
    /* ignoruj — i tak przeładujemy */
  }
  if (typeof window !== "undefined") window.location.reload();
}

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;

    // Wystaw funkcję globalnie, aby dało się jej użyć z dowolnego miejsca w UI.
    window.resetAppCache = resetAppCache;

    // W dev wyrejestruj SW i wyczyść cache — inaczej cache-first serwuje nieaktualne chunki _next/static
    if (process.env.NODE_ENV !== "production") {
      navigator.serviceWorker.getRegistrations().then((regs) => regs.forEach((r) => r.unregister()));
      if (typeof caches !== "undefined") {
        caches.keys().then((keys) => keys.forEach((k) => caches.delete(k)));
      }
      return;
    }

    // W produkcji: porównaj wersję buildu z zapamiętaną. Jeśli się zmieniła (nowy deploy),
    // wykonaj twardy reset cache i przeładuj stronę RAZ.
    const syncVersion = async () => {
      try {
        const res = await fetch("/sw-version.json", { cache: "no-store" });
        if (!res.ok) return;
        const { version } = await res.json();
        const seen = localStorage.getItem(BUILD_KEY);
        if (seen && seen !== version) {
          localStorage.setItem(BUILD_KEY, version);
          await resetAppCache();
          return;
        }
        localStorage.setItem(BUILD_KEY, version);
      } catch {
        /* offline / brak pliku — nic nie rób */
      }
    };
    syncVersion();

    const register = () => navigator.serviceWorker.register("/sw.js").catch(() => {});
    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });
  }, []);

  return null;
}
