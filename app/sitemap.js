export default function sitemap() {
  const base = "https://bialgruz.pl";
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/toalety-przenosne`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/kontenery`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/kontakt`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/regulamin`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/polityka-prywatnosci`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
