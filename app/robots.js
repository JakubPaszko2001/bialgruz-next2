import { SITE_URL } from "@/components/seoSite";

export default function robots() {
  const base = SITE_URL;
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/kontenery/admin",
          "/toalety-przenosne/admin",
          "/umowa/",
          "/_next/",
        ],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
