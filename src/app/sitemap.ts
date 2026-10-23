import type { MetadataRoute } from "next";
import { villageData } from "@/data/content";

// Menghasilkan /sitemap.xml. Website ini hanya punya satu halaman.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: villageData.site.url,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
