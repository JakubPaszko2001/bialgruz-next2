import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import { Hero, Strip, WhySection, StepsSection, Contact } from "@/components/subUI";
import OfferBigbag from "@/components/OfferBigbag";
import Packages from "@/components/Packages";
import OfferTransition from "@/components/OfferTransition";
import Locations from "@/components/Locations";
import ContactInfo from "@/components/ContactInfo";

export const metadata = {
    title: "Big Bagi 1 m³ na gruz i odpady budowlane – BIALGRUZ",
  description: "Wynajem worków Big-Bag 1 m³ na gruz oraz odpady budowlane. Dowóz, podstawienie, wywóz i legalna utylizacja w regionie.",
};

const phoneBlock = (
  <div className="flex flex-col gap-4 border-t border-white/[0.08] pt-6 md:flex-row md:items-stretch md:justify-center md:gap-6 lg:justify-start">
    <div className="flex items-center justify-center gap-3.5 md:justify-start">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-[18px] text-ink-black">📞</span>
      <div>
        <div className="text-[12px] uppercase tracking-[1px] text-[#888]">Big Bagi na odpady</div>
        <a href="tel:799091000" className="block font-display text-[26px] font-bold leading-[1.25] tracking-[1px] text-white transition-colors hover:text-brand-yellow">
          799 091 000
        </a>
        <a href="tel:799092000" className="block font-display text-[26px] font-bold leading-[1.25] tracking-[1px] text-white transition-colors hover:text-brand-yellow">
          799 092 000
        </a>
      </div>
    </div>

    {/* Przejścia do innych podstron (bez własnej podstrony kontenerów) */}
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
        href="/toalety-przenosne"
        className="group inline-flex h-full items-center justify-between gap-3 rounded-lg border border-white/15 bg-white/[0.07] py-2.5 pl-5 pr-4 backdrop-blur-md transition-all duration-300 hover:bg-brand-yellow lg:w-[224px]"
      >
        <span className="flex min-w-0 items-center gap-2.5">
          <span className="shrink-0 text-[16px] leading-none text-brand-yellow transition-colors group-hover:text-ink-black">🚻</span>
          <span className="text-left leading-tight">
            <span className="block text-[9px] font-semibold uppercase tracking-[2px] text-white/50 transition-colors group-hover:text-ink-black/70">
              Zobacz też
            </span>
            <span className="font-display text-[13px] font-bold uppercase tracking-[1px] text-white transition-colors group-hover:text-ink-black sm:text-[14px]">
              TOALETY
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

export default function BigbagPage() {
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
      <OfferTransition from="left">
        <Hero
          activePage="bigbag"
          titleTop="Big Bagi"
          titleBottom="na odpady"
          desc="Wynajem worków Big-Bag 1 m³ na gruz oraz odpady budowlane — idealne na mniejsze remonty i prace porządkowe. Dowóz, podstawienie, wywóz i legalna utylizacja w całym regionie."
          badges={[
            { icon: "✓", label: <>Szybki<br />dowóz</> },
            { icon: "↺", label: <>Wywóz i<br />utylizacja</> },
            { icon: "◉", label: <>Legalne<br />składowanie</> },
          ]}
          primary={{ label: "Wybierz Big Bag →", href: "#oferta" }}
          secondary={{ label: "Proces wynajmu", href: "#jak" }}
          phone={phoneBlock}
          image={{ src: "/bigbag3.png", alt: "Big Bag na gruz BIALGRUZ", w: 500, h: 520 }}
          stats={[
            { num: "1 m³", label: "Pojemność worka", pos: "a" },
            { num: "48h", label: "Odbiór po zgłoszeniu", pos: "b" },
          ]}
        />

        <Strip items={["Gruz i Beton", "Odpady Budowlane", "Ziemia i Piasek", "Odpady Zmieszane", "Big Bagi"]} />

                                <OfferBigbag />

        <Packages />

        <WhySection
          title={
            <>
              Elastyczne
              <br />i <em className="not-italic text-brand-yellow">wygodne</em>
            </>
          }
          features={[
            { title: "Dowóz na miejsce", text: "Przywozimy worek Big-Bag w uzgodnionym terminie na terenie całego regionu — również w weekendy." },
            { title: "Wypełniasz we własnym tempie", text: "Big Bag zostaje na miejscu tak długo, jak potrzebujesz — bez presji czasu i przestojów na budowie." },
            { title: "Szybki odbiór", text: "Po zgłoszeniu odbieramy pełny worek w ciągu 48h i przekazujemy odpady do legalnej utylizacji." },
            { title: "Pełna obsługa", text: "Dowóz, podstawienie, wywóz i utylizacja — wszystko w jednej cenie. Nie musisz się o nic martwić." },
          ]}
          image={{ src: "/bigbag3.png", alt: "Big Bag na gruz BIALGRUZ" }}
        />

        <StepsSection
          sub="Prosty proces online — od formularza do odebranego worka z odpadami."
          steps={[
            { title: "Formularz online", text: "Wypełnij krótki formularz na stronie — wybierz rodzaj odpadu i termin dostawy." },
            { title: "Automatyczna wycena", text: "Cenę zobaczysz od razu na stronie — wyliczana automatycznie, bez czekania na kontakt." },
            { title: "Dowóz i podstawienie", text: "Przywozimy worek Big-Bag we wskazanym miejscu w uzgodnionym terminie." },
            { title: "Odbiór", text: "Po zgłoszeniu odbieramy pełny worek i przekazujemy odpady do legalnej utylizacji." },
          ]}
        />

        <Contact mode="bigbag" />
        <Locations />
        <ContactInfo />
        <Footer copy="© 2025 BIALGRUZ. Wynajem worków Big-Bag 1 m³ na odpady budowlane." />
      </OfferTransition>
    </>
  );
}
