import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://letsprinkleai.com";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin", "/dashboard"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
