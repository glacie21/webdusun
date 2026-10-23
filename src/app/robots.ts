import type { MetadataRoute } from "next";
import { villageData } from "@/data/content";

// Menghasilkan /robots.txt agar mesin pencari boleh mengindeks seluruh halaman.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${villageData.site.url}/sitemap.xml`,
  };
}
