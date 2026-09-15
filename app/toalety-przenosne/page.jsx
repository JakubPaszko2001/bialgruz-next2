import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import { Hero, Strip, WhySection, StepsSection, Contact } from "@/components/subUI";
import OfferToilets from "@/components/OfferToilets";
import Packages from "@/components/Packages";
import OfferTransition from "@/components/OfferTransition";
import Locations from "@/components/Locations";
import ContactInfo from "@/components/ContactInfo";

export const metadata = {
  title: "Toalety przenośne – wynajem i serwis | BIALGRUZ",
  description:
    "Wynajem toalet przenośnych na budowy, eventy i imprezy plenerowe. Transport, serwis i opróżnianie w regionie Białegostoku.",
};

const phoneBlock = (
  <div className="flex flex-col gap-4 border-t border-white/[0.08] pt-6 md:flex-row md:items-stretch md:justify-center md:gap-6 lg:justify-start">
        {/* Sekcja telefonu */}
    <div className="flex items-center justify-center gap-3.5 md:justify-start">
      <a
        href="tel:799093000"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-[18px] text-ink-black shadow-lg transition-transform hover:scale-105"
        aria-label="Zadzwoń do nas"
      >
        📞
      </a>
      <div>
        <div className="text-[12px] font-semibold uppercase tracking-[1px] text-[#888]">
          Toalety przenośne
        </div>
        <a
          href="tel:799093000"
          className="block font-display text-[26px] font-bold leading-[1.25] tracking-[1px] text-white transition-colors hover:text-brand-yellow"
        >
          799 093 000
        </a>
      </div>
    </div>

    {/* Kanciasty DIV (bez zaokrągleń) z przejściem do kontenerów */}
        <div className="hidden md:flex">
      <Link
        href="/kontenery"
        className="group inline-flex h-full items-center justify-between gap-3 rounded-lg border border-white/15 bg-white/[0.07] py-2.5 pl-5 pr-4 backdrop-blur-md transition-all duration-300 hover:bg-brand-yellow lg:w-[224px]"
      >
        <span className="flex min-w-0 items-center gap-2.5">
          <span className="shrink-0 text-[16px] leading-none text-brand-yellow transition-colors group-hover:text-ink-black">📦</span>
          <span className="text-left leading-tight">
            <span className="block text-[9px] font-semibold uppercase tracking-[2px] text-white/50 transition-colors group-hover:text-ink-black/70">
              Zobacz też
            </span>
            <span className="font-display text-[13px] font-bold uppercase tracking-[1px] text-white transition-colors group-hover:text-ink-black sm:text-[14px]">
              KONTENERY
            </span>
          </span>
        </span>
        <span className="shrink-0 text-[16px] text-brand-yellow transition-transform group-hover:translate-x-1 group-hover:text-ink-black">
          →
        </span>
      </Link>
    </div>
        <div className="hidden md:flex">
      <Link
        href="/bigbag"
        className="group inline-flex h-full items-center justify-between gap-3 rounded-lg border border-white/15 bg-white/[0.07] py-2.5 pl-5 pr-4 backdrop-blur-md transition-all duration-300 hover:bg-brand-yellow lg:w-[224px]"
      >
        <span className="flex min-w-0 items-center gap-2.5">
          <span className="shrink-0 text-[16px] leading-none text-brand-yellow transition-colors group-hover:text-ink-black">🛍️</span>
          <span className="text-left leading-tight">
            <span className="block text-[9px] font-semibold uppercase tracking-[2px] text-white/50 transition-colors group-hover:text-ink-black/70">
              Zobacz też
            </span>
            <span className="font-display text-[13px] font-bold uppercase tracking-[1px] text-white transition-colors group-hover:text-ink-black sm:text-[14px]">
              BIG BAGI
            </span>
          </span>
        </span>
        <span className="shrink-0 text-[16px] text-brand-yellow transition-transform group-hover:translate-x-1 group-hover:text-ink-black">
          →
        </span>
      </Link>
    </div>
  </div>
  
);

export default function ToaletyPage() {
  return (
    <>
      <SiteNav
        orderHref="#zamow"
        links={[
          { label: "Oferta", href: "#oferta" },
          { label: "Dlaczego my", href: "#dlaczego" },
          { label: "Proces wynajmu", href: "#jak" },
          { label: "Zamów", href: "#zamow" },
          { label: "Lokalizacje", href: "#lokalizacje" },
          { label: "Kontakt", href: "#kontakt" },
        ]}
      />
      <OfferTransition from="right">
                <Hero
          activePage="toalety"
          titleGap
          titleTop="Toalety"
          titleBottom="przenośne"
          desc="Wynajem toalet przenośnych na budowy, eventy i imprezy plenerowe. Transport, serwis i opróżnianie — wszystko w jednej cenie, w całym regionie."
          badges={[
            { icon: "✓", label: <>Transport<br />w cenie</> },
            { icon: "↺", label: <>Serwis<br />i opróżnianie</> },
            { icon: "◉", label: <>Mycie<br />kabin</> },
          ]}
          primary={{ label: "Wybierz toaletę →", href: "#oferta" }}
          secondary={{ label: "Proces wynajmu", href: "#jak" }}
          phone={phoneBlock}
          image={{ src: "/toaleta-bialgruz.png", alt: "Toaleta przenośna BIALGRUZ", w: 500, h: 520 }}
          stats={[
            { num: "2000+", label: "Obsłużonych eventów", pos: "a" },
            { num: "24h", label: "Czas dostawy", pos: "b" },
          ]}
        />

        <Strip items={["Place budowy", "Eventy", "Imprezy plenerowe", "Wesela", "Festyny"]} />

        <OfferToilets />

        <Packages />

        <WhySection
          title={
            <>
              Czysto, terminowo
              <br />i <em className="not-italic text-brand-yellow">bez zmartwień</em>
            </>
          }
          features={[
            { title: "Transport w cenie", text: "Dowozimy i odbieramy toalety w umówionym terminie na terenie całego regionu — również w weekendy." },
            { title: "Serwis i opróżnianie", text: "Regularnie opróżniamy zbiorniki i uzupełniamy środki higieniczne — kabiny są zawsze gotowe do użycia." },
            { title: "Czystość i higiena", text: "Każda kabina jest myta i dezynfekowana przed wynajmem. Dbamy o komfort Twoich pracowników i gości." },
            { title: "Elastyczne pakiety", text: "Wynajmiesz toaletę na 7 dni lub na dłuższy okres — z wyposażeniem dopasowanym do Twoich potrzeb." },
          ]}
          image={{ src: "/toaleta-bialgruz3.png", alt: "Toaleta przenośna BIALGRUZ", hoverSrc: "/kibel-otwarty3.png" }}
        />

        <StepsSection
          sub="Prosty proces online — od formularza do dostarczonej toalety."
          steps={[
            { title: "Formularz online", text: "Wypełnij krótki formularz — wybierz typ toalety, okres wynajmu i termin." },
            { title: "Automatyczna wycena", text: "Cenę zobaczysz od razu na stronie — bez czekania na kontakt." },
            { title: "Dostawa", text: "Dowozimy toaletę we wskazane miejsce w uzgodnionym terminie." },
            { title: "Serwis i odbiór", text: "W trakcie wynajmu serwisujemy kabinę, a po zakończeniu odbieramy ją z miejsca." },
          ]}
        />

        <Contact mode="toalety" />
        <Locations />
        <ContactInfo />
        <Footer copy="© 2026 BIALGRUZ. Wynajem toalet przenośnych w regionie Białegostoku." />
      </OfferTransition>
    </>
  );
}