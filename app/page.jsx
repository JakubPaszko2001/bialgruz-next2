import SiteNav from "@/components/SiteNav";
import HomePanels from "@/components/HomePanels";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, buildGraph } from "@/components/seoSite";

export const metadata = {
  title: "BIALGRUZ – wynajem kontenerów, big-bagów i toalet przenośnych",
  description:
    "Wynajem toalet przenośnych, kontenerów i big bagów na odpady budowlane w Białymstoku i regionie. Szybkie podstawienie, wywóz i legalna utylizacja. Sprawdź ofertę i zamów online.",
  alternates: { canonical: "/" },
};

const homeOffers = [
  serviceSchema({
    name: "Wynajem toalet przenośnych",
    description:
      "Wynajem toalet przenośnych na budowy, eventy i imprezy plenerowe. Transport, serwis i opróżnianie w cenie.",
    path: "/toalety-przenosne",
  }),
  serviceSchema({
    name: "Wynajem kontenerów na odpady budowlane",
    description:
      "Kontenery 5 m³ i 7 m³ na gruz oraz odpady budowlane. Podstawienie, wywóz i legalna utylizacja.",
    path: "/kontenery",
  }),
  serviceSchema({
    name: "Wynajem worków Big-Bag 1 m³",
    description: "Worek Big-Bag 1 m³ na gruz i odpady budowlane. Dowóz, długie użytkowanie i szybki odbiór.",
    path: "/bigbag",
  }),
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildGraph(homeOffers)} />

      {/* SEO/H1: niewidoczny dla wzroku, czytelny dla robotów i czytników ekranu */}
      <h1 className="sr-only">
        BIALGRUZ – wynajem toalet przenośnych, kontenerów i big-bagów na odpady budowlane w Białymstoku i regionie
      </h1>

      <SiteNav />
      <main className="flex flex-col">
        <HomePanels />
      </main>
    </>
  );
}
