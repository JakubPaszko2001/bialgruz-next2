import { SITE_URL } from "@/components/seoSite";

// Rozbudowana mapa witryny. Next.js automatycznie wystawi ją pod /sitemap.xml.
// lastModified ustawiamy na datę builda — aktualizuje się przy każdym wdrożeniu.
export default function sitemap() {
  const base = SITE_URL;
  const now = new Date();

  // Podstrony główne serwisu.
  const pages = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/toalety-przenosne", changeFrequency: "weekly", priority: 0.9 },
    { path: "/kontenery", changeFrequency: "weekly", priority: 0.9 },
    { path: "/bigbag", changeFrequency: "weekly", priority: 0.9 },
    { path: "/kontakt", changeFrequency: "monthly", priority: 0.7 },
    { path: "/regulamin", changeFrequency: "yearly", priority: 0.3 },
    { path: "/polityka-prywatnosci", changeFrequency: "yearly", priority: 0.3 },
  ];

  return pages.map((p) => ({
    url: `${base}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
