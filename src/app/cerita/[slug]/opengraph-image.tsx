import { villageData } from "@/data/content";
import { ogContentType, ogSize, renderOgImage } from "@/components/ogImage";

// Gambar pratinjau untuk setiap halaman cerita, berisi judul dan foto cerita.
// Tampilannya sama dengan gambar pratinjau beranda (src/components/ogImage.tsx).

export const alt = `Cerita dari ${villageData.identity.name}`;
export const size = ogSize;
export const contentType = ogContentType;

// Dibuat sekali saat build untuk setiap cerita, bukan setiap kali dibuka.
export function generateStaticParams() {
  return villageData.editorialStories.map((story) => ({ slug: story.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = villageData.editorialStories.find((item) => item.slug === slug);

  return renderOgImage({
    photoUrl: story?.imageUrl ?? villageData.site.ogImageUrl,
    eyebrow: villageData.sections.stories.badge,
    title: story?.title ?? villageData.identity.name,
    titleSize: 68,
    subtitle: story?.subtitle ?? villageData.identity.tagline,
  });
}
