import type { MetadataRoute } from "next";
import { villageData } from "@/data/content";
import { storyPath } from "@/lib/stories";

const { site, editorialStories } = villageData;

// Menghasilkan /sitemap.xml: beranda, halaman kabar, dan setiap halaman cerita.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/kabar`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...editorialStories.map((story) => ({
      url: `${site.url}${storyPath(story.slug)}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
