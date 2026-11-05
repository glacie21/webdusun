import type { MetadataRoute } from "next";
import { villageData } from "@/data/content";
import { colors } from "@/lib/theme";

const { site, identity } = villageData;

// Web app manifest: nama dan warna yang dipakai saat website ditambahkan
// ke layar utama HP ("Tambahkan ke Layar Utama"). Diambil dari content.ts.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.title,
    short_name: identity.shortName,
    description: site.description,
    lang: "id",
    start_url: "/",
    display: "standalone",
    background_color: colors.cream,
    theme_color: colors.forest,
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
