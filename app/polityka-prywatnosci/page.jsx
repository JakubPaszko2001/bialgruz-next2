import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import Rodo from "@/components/Rodo";

export const metadata = {
  title: "Polityka prywatności – BIALGRUZ",
  description:
    "Polityka prywatności BIALGRUZ sp. z o.o. – informacje o administratorze danych, przetwarzaniu danych osobowych oraz wykorzystaniu plików cookies.",
};

const DATA = [
  {
    lead: "1. Administrator danych",
    body: "Administratorem danych osobowych pozyskiwanych za pośrednictwem Serwisu https://bialgruz.pl/ jest BIALGRUZ Sp. z o.o. z siedzibą w Porosły-Kolonia, 12M, poczta Choroszcz – Porosły, województwo podlaskie, zarejestrowana w Sądzie Rejonowym w Białymstoku, XII Wydział Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS: 0000859137, NIP: 9662143186, REGON: 386987837, nr BDO: 000672099, adres e-mail: biuro@bialgruz.pl.",
  },
  {
    lead: "2. Dane przetwarzane w związku z zamówieniami",
    body: "W celu obsługi zapytań, realizacji zamówień na wynajem toalet przenośnych, kontenerów i big bagów, wystawienia dokumentów oraz kontaktu w sprawach umownych, przetwarzamy dane podane w formularzu zamówienia, m.in.: imię i nazwisko, adres miejsca realizacji usługi, numer telefonu oraz adres e-mail, a w przypadku przedsiębiorców – również dane firmowe.",
  },
  {
    lead: "3. Podstawy prawne i cele przetwarzania",
    body: "Dane przetwarzane są w celu zawarcia i realizacji umowy (art. 6 ust. 1 lit. b RODO), wykonania obowiązków prawnych, w tym podatkowych i ewidencyjnych w zakresie gospodarki odpadami (art. 6 ust. 1 lit. c RODO), obsługi reklamacji, dochodzenia roszczeń oraz ewentualnej obrony przed roszczeniami (uszasadniony interes Administratora – art. 6 ust. 1 lit. f RODO).",
  },
  {
    lead: "4. Odbiorcy danych",
    body: "Dane mogą być powierzane lub przekazywane podmiotom wspierającym działalność Administratora, w szczególności operatorom płatności (m.in. Przelewy24), dostawcom usług księgowych i IT, firmom wspierającym realizację usług (transport i utylizacja odpadów), a także podmiotom uprawnionym na podstawie przepisów prawa.",
  },
  {
    lead: "5. Okres przechowywania",
    body: "Dane przechowywane są przez okres realizacji umowy, a następnie przez okres wymagany przepisami prawa (np. podatkowymi i regulacjami o gospodarce odpadami) lub do czasu przedawnienia roszczeń.",
  },
  {
    lead: "6. Prawa użytkownika",
    body: "Przysługuje Ci prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych oraz wniesienia sprzeciwu wobec przetwarzania. W zakresie, w jakim przetwarzanie odbywa się na podstawie zgody, możesz ją wycofać w dowolnym momencie. Masz również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.",
  },
  {
    lead: "7. Profilowanie",
    body: "Dane osobowe nie podlegają zautomatyzowanemu podejmowaniu decyzji, w tym profilowaniu, w sposób wywołujący skutki prawne lub istotnie wpływający na sytuację użytkownika.",
  },
];

export default function PolitykaPrywatnosciPage() {
  return (
    <>
      <SiteNav />
      <main className="flex min-h-screen flex-col bg-ink-950 pt-16">
        <header className="border-b border-white/10 bg-ink-900 px-6 py-14 sm:px-[60px]">
          <div className="mx-auto w-full max-w-[900px]">
            <div className="mb-3 font-display text-[12px] font-bold uppercase tracking-[4px] text-brand-yellow">
              Dokumenty prawne
            </div>
            <h1 className="font-display text-[clamp(34px,5vw,52px)] font-black uppercase leading-[1.05] text-white">
              Polityka <span className="text-brand-yellow">prywatności</span>
            </h1>
            <p className="mt-4 max-w-[640px] text-[15px] leading-[1.7] text-white/55">
              Informacje o przetwarzaniu danych osobowych oraz wykorzystaniu plików cookies w serwisie
              BIALGRUZ (https://bialgruz.pl/).
            </p>
          </div>
        </header>

        <section className="flex-1 px-6 py-14 sm:px-[60px]">
          <div className="mx-auto w-full max-w-[900px] space-y-8 rounded-2xl border border-white/[0.06] bg-ink-900 px-6 py-8 sm:px-10 sm:py-10">
            {DATA.map((block) => (
              <div key={block.lead}>
                <h2 className="mb-2 font-display text-[16px] font-bold uppercase tracking-[1px] text-brand-yellow">
                  {block.lead}
                </h2>
                <p className="text-sm leading-relaxed text-gray-200">{block.body}</p>
              </div>
            ))}

            <div>
              <h2 className="mb-2 font-display text-[16px] font-bold uppercase tracking-[1px] text-brand-yellow">
                8. Pliki cookies i narzędzia analityczne
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-gray-200">
                Serwis – zgodnie z Regulaminem – wymaga przeglądarki z włączoną obsługą plików cookies i
                JavaScript. W Serwisie wykorzystywane są pliki cookies niezbędne do jego prawidłowego
                działania oraz narzędzia analityczne i marketingowe firm trzecich, w tym Google Tag Manager i
                Meta Pixel (Facebook Pixel), które mogą umożliwiać podmiotom trzecim zbieranie danych o
                aktywności w Serwisie w celach statystycznych i marketingowych. Szczegółowa klauzula
                informacyjna dotycząca przetwarzania danych osobowych znajduje się poniżej.
              </p>
              <div className="rounded-xl border border-white/[0.06] bg-ink-950 p-6">
                <Rodo />
              </div>
            </div>

            <p className="border-t border-white/10 pt-6 text-sm leading-relaxed text-gray-200">
              W sprawach dotyczących danych osobowych możesz skontaktować się z Administratorem pod adresem
              e-mail: <span className="text-brand-yellow">kontakt@bialgruz.pl</span> lub pisemnie na adres
              siedziby Administratora, a także telefonicznie pod numerami: 799 091 000 · 799 092 000 · 799 093 000.
            </p>
          </div>
        </section>

        <Footer copy="© 2025 BIALGRUZ. Wynajem toalet przenośnych, kontenerów i big bagów na odpady budowlane." />
      </main>
    </>
  );
}
