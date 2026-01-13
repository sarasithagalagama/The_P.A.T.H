const locales = ["en", "si", "ta"];
const baseUrl =
  process.env.NEXT_PUBLIC_APP_URL || "https://thepathsl.sarasitha.me";

export default function sitemap() {
  const routes = [
    "",
    "/learn",
    "/quiz",
    "/leaders",
    "/issues",
    "/methodology",
    "/glossary",
  ];

  const sitemapEntries = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
