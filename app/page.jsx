import SiteNav from "@/components/SiteNav";
import HomePanels from "@/components/HomePanels";

export default function HomePage() {
  return (
    <>
            <SiteNav />
      <main className="mt-16 flex flex-col">
        <HomePanels />
      </main>
    </>
  );
}

