import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import Regulamin from "@/components/Regulamin";

export const metadata = {
  title: "Regulamin – BIALGRUZ",
  description:
    "Regulamin świadczenia usług BIALGRUZ sp. z o.o. – zasady wynajmu toalet przenośnych, kontenerów i big bagów oraz składania zamówień online.",
};

export default function RegulaminPage() {
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
              Regulamin <span className="text-brand-yellow">świadczenia usług</span>
            </h1>
            <p className="mt-4 max-w-[640px] text-[15px] leading-[1.7] text-white/55">
              Niniejszy Regulamin określa zasady korzystania z platformy internetowej BIALGRUZ
              (https://bialgruz.pl/) oraz świadczenia usług wynajmu toalet przenośnych, kontenerów i big bagów.
            </p>
          </div>
        </header>

        <section className="flex-1 px-6 py-14 sm:px-[60px]">
          <div className="mx-auto w-full max-w-[900px] rounded-2xl border border-white/[0.06] bg-ink-900 px-6 py-8 sm:px-10 sm:py-10">
            <Regulamin />
          </div>
        </section>

        <Footer copy="© 2025 BIALGRUZ. Wynajem toalet przenośnych, kontenerów i big bagów na odpady budowlane." />
      </main>
    </>
  );
}
