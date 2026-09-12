export default function robots() {
  const base = "https://bialgruz.pl";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/kontenery/admin", "/toalety-przenosne/admin", "/umowa/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
