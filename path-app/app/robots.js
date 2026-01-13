export default function robots() {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://thepathsl.sarasitha.me";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
