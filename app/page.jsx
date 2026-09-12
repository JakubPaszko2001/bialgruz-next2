import SiteNav from "@/components/SiteNav";
import HomePanels from "@/components/HomePanels";

export default function HomePage() {
  return (
    <>
            <SiteNav />
      <div className="snap-home mt-16 flex h-[calc(100vh-4rem)] flex-col snap-y snap-mandatory overflow-y-scroll">
        <HomePanels />
      </div>
    </>
  );
}
