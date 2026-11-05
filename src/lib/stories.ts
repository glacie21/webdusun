import { villageData } from "@/data/content";

// Alamat halaman cerita, misalnya /cerita/dari-tanah-untuk-kehidupan.
export const storyPath = (slug: string) => `/cerita/${slug}`;

export const findStory = (slug: string) => villageData.editorialStories.find((story) => story.slug === slug);
