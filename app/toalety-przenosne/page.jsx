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
  <div className="mt-6 flex items-center gap-3.5 border-t border-white/[0.08] pt-6">
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-[18px] text-ink-black">📞</span>
    <div>
      <div className="text-[12px] uppercase tracking-[1px] text-[#888]">Toalety przenośne</div>
      <a href="tel:799093000" className="block font-display text-[26px] font-bold leading-[1.25] tracking-[1px] text-white transition-colors hover:text-brand-yellow">
        799 093 000
      </a>
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
