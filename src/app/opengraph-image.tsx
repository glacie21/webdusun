import { villageData } from "@/data/content";
import { ogContentType, ogSize, renderOgImage } from "@/components/ogImage";

// Gambar pratinjau beranda yang muncul saat tautan website dibagikan di
// WhatsApp, Facebook, atau X. Dibuat otomatis saat build dari data di
// content.ts: foto latar dari site.ogImageUrl, judul dan lokasi dari identity.
// Tampilannya diatur di src/components/ogImage.tsx.

const { site, identity } = villageData;

export const alt = `${site.title}, dengan latar ${site.ogImageAlt.toLowerCase()}`;
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    photoUrl: site.ogImageUrl,
    eyebrow: identity.areaLabel,
    title: identity.name,
    titleSize: 92,
    subtitle: identity.tagline,
  });
}
