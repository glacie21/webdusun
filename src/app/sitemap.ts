import type { MetadataRoute } from "next";
import { villageData } from "@/data/content";

// Menghasilkan /sitemap.xml: beranda, halaman kabar, dan setiap halaman cerita.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: villageData.site.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${villageData.site.url}/kabar`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...villageData.editorialStories.map((story) => ({
      url: `${villageData.site.url}/cerita/${story.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
