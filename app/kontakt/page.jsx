import SiteNav from "@/components/SiteNav";
import ContactInfo from "@/components/ContactInfo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, abs } from "@/components/seoSite";

export const metadata = {
  title: "Kontakt",
  description:
    "Skontaktuj się z BIALGRUZ. Wynajem toalet przenośnych, kontenerów i big bagów na odpady budowlane w Białymstoku i okolicach. Tel. 799 091 000.",
  keywords: ["BIALGRUZ kontakt", "wynajem kontenerów Białystok", "toalety przenośne kontakt", "wywóz gruzu telefon"],
  alternates: { canonical: "/kontakt" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: abs("/kontakt"),
    siteName: "BIALGRUZ",
    title: "Kontakt – BIALGRUZ",
    description:
      "Wynajem toalet przenośnych, kontenerów i big bagów na odpady budowlane w Białymstoku i okolicach.",
    images: [{ url: "/logo.png", alt: "BIALGRUZ" }],
  },
};

const BREADCRUMBS = [
  { name: "Strona główna", path: "/" },
  { name: "Kontakt", path: "/kontakt" },
];

export default function KontaktPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Kontakt – BIALGRUZ",
            url: abs("/kontakt"),
          },
          breadcrumbSchema(BREADCRUMBS),
        ]}
      />
      {/* SiteNav ma wysokość 4rem (h-16) i jest fixed */}
      <SiteNav />
      <div className="flex min-h-[calc(100svh)] flex-col bg-ink-800 pt-16">
        <ContactInfo full />
      </div>
    </>
  );
}
