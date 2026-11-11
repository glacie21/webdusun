import type { Metadata } from "next";
import { villageData } from "@/data/content";

const { site, identity, location } = villageData;

interface PageMetadataOptions {
  title: string;
  description: string;
  // Alamat halaman relatif terhadap domain, misalnya "/" atau "/kabar".
  path: string;
  type?: "website" | "article";
}

// Judul, deskripsi, alamat kanonik, dan pratinjau tautan (Open Graph & X)
// untuk satu halaman. Gambar pratinjaunya dibuat oleh opengraph-image.tsx.
export function pageMetadata({ title, description, path, type = "website" }: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: identity.shortName,
      locale: "id_ID",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// Data terstruktur (JSON-LD) beranda untuk Google: website ini, dan Dusun
// Sukomangun sebagai sebuah tempat beserta wilayah administratifnya.
export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: identity.shortName,
      description: site.description,
      inLanguage: "id-ID",
      about: { "@id": `${site.url}/#dusun` },
    },
    {
      "@type": "Place",
      "@id": `${site.url}/#dusun`,
      name: identity.name,
      description: identity.longDescription[0],
      url: site.url,
      hasMap: location.mapsSearchUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${location.dusun}, ${location.desa}`,
        addressLocality: location.kecamatan,
        addressRegion: location.provinsi,
        addressCountry: "ID",
      },
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: location.desa,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: location.kecamatan,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: location.kabupaten,
          },
        },
      },
    },
  ],
};
