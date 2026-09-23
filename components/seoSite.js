// Centralne źródło danych SEO dla całego serwisu BIALGRUZ.
// Wszystkie adresy, telefony i dane firmy trzymamy w jednym miejscu,
// żeby JSON-LD, sitemap i metadata były spójne.

export const SITE_URL = "https://bialgruz.pl";

export const COMPANY = {
  name: "BIALGRUZ",
  legalName: "BIALGRUZ Sp. z o.o.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  email: "biuro@bialgruz.pl",
  phone: "+48799091000",
  // Wszystkie numery telefonów — używane w JSON-LD i stopce danych kontaktowych.
  phones: ["+48799091000", "+48799092000", "+48799093000"],
  streetAddress: "Porosły-Kolonia 12M",
  postalCode: "16-070",
  city: "Choroszcz",
  region: "Podlaskie",
  country: "PL",
  vatID: "PL9662143186",
  taxID: "9662143186",
  regon: "386987837",
  krs: "0000859137",
  bdo: "000672099",
  foundingDate: "2020",
  socials: {
    facebook: "https://www.facebook.com/share/1CfuwctQBm/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/bialgruz?igsh=MXR3anZpN2F1eHd6OQ==",
    tiktok: "https://www.tiktok.com/@bialgruz?_r=1&_t=ZN-97hsQbrEjli",
  },
  // Obszar działania — miasto + okolice.
  geo: { latitude: 53.139465, longitude: 23.169119 },
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "20:00" },
    { days: ["Saturday"], opens: "08:00", closes: "15:00" },
  ],
  // Główne miasta obsługiwane — używane w areaServed i LocalBusiness.
  areaServed: [
    "Białystok",
    "Wasilków",
    "Czarna Białostocka",
    "Sokółka",
    "Łomża",
    "Augustów",
    "Bielsk Podlaski",
    "Grajewo",
    "Zambrów",
    "Hajnówka",
    "Łapy",
    "Siemiatycze",
    "Choroszcz",
    "Supraśl",
    "Zabłudów",
  ],
};

// Buduje absolutny URL na podstawie ścieżki względnej.
export function abs(path = "/") {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

// Konwersja godzin otwarcia do formatu schema.org OpeningHoursSpecification.
function openingHoursSpec() {
  return COMPANY.openingHours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
    opens: h.opens,
    closes: h.closes,
  }));
}

// Schemat LocalBusiness (LocalBusiness -> HomeAndConstructionBusiness).
// To najważniejszy schemat — mówi Google czym jest firma, gdzie działa i czym się zajmuje.
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    description:
      "Wynajem toalet przenośnych, kontenerów i big bagów na odpady budowlane. Transport, serwis, wywóz i legalna utylizacja w regionie Białegostoku i całym Podlasiu.",
    url: COMPANY.url,
    logo: COMPANY.logo,
    image: COMPANY.image,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    vatID: COMPANY.vatID,
    taxID: COMPANY.taxID,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.streetAddress,
      postalCode: COMPANY.postalCode,
      addressLocality: COMPANY.city,
      addressRegion: COMPANY.region,
      addressCountry: COMPANY.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.geo.latitude,
      longitude: COMPANY.geo.longitude,
    },
    areaServed: COMPANY.areaServed.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: openingHoursSpec(),
    sameAs: Object.values(COMPANY.socials),
    priceRange: "$$",
    currenciesAccepted: "PLN",
    paymentAccepted: "Przelew, BLIK, Przelewy24",
    knowsAbout: [
      "wynajem toalet przenośnych",
      "wynajem kontenerów na gruz",
      "big bag na odpady budowlane",
      "wywóz gruzu",
      "utylizacja odpadów budowlanych",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usługi BIALGRUZ",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wynajem toalet przenośnych" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wynajem kontenerów na odpady" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wynajem worków Big-Bag" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wywóz gruzu i utylizacja odpadów" } },
      ],
    },
  };
}

// Schemat WebSite z akcją wyszukiwania (sitelinks searchbox) i wskazaniem wydawcy.
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: COMPANY.url,
    name: COMPANY.name,
    inLanguage: "pl-PL",
    publisher: { "@id": `${SITE_URL}/#business` },
  };
}

// Schemat Service dla pojedynczej usługi (podstrona ofertowa).
export function serviceSchema({ name, description, path, serviceType, offers } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: serviceType || name,
    url: abs(path),
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: COMPANY.areaServed.map((c) => ({ "@type": "City", name: c })),
    ...(offers
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "PLN",
            ...offers,
          },
        }
      : {}),
  };
}

// Schemat FAQPage — pytania i odpowiedzi widoczne również na stronie.
export function faqSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}

// Schemat BreadcrumbList — nawigacja okruszkowa.
export function breadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

// Generuje komplet schematów dla strony: LocalBusiness + WebSite + dowolne dodatkowe.
export function buildGraph(extra = []) {
  return [localBusinessSchema(), websiteSchema(), ...extra];
}
