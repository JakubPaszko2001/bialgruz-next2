import SiteNav from "@/components/SiteNav";
import ContactInfo from "@/components/ContactInfo";

export const metadata = {
  title: "Kontakt – BIALGRUZ | Toalety przenośne, kontenery i big bagi",
  description:
    "Skontaktuj się z BIALGRUZ. Wynajem toalet przenośnych, kontenerów i big bagów na odpady budowlane w regionie Białegostoku i okolic.",
};

export default function KontaktPage() {
  return (
    <>
      {/* SiteNav ma wysokość 4rem (h-16) i jest fixed */}
      <SiteNav />
      <div className="flex min-h-[calc(100svh)] flex-col bg-ink-800 pt-16">
        <ContactInfo full />
      </div>
    </>
  );
}
