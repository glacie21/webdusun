import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { villageData } from "@/data/content";

// Ikon saat website disimpan ke layar utama iPhone/iPad. iOS tidak memakai
// icon.svg, jadi dibuatkan versi PNG dengan tampilan yang sama: huruf awal
// dusun (identity.logoInitial) di atas kotak hijau.

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const playfair = await readFile(join(process.cwd(), "src/assets/fonts/PlayfairDisplay-Bold.woff"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2F5D50",
          color: "#F7F5EF",
          fontFamily: "Playfair",
          fontSize: 112,
          fontWeight: 700,
          paddingBottom: 8,
        }}
      >
        {villageData.identity.logoInitial}
      </div>
    ),
    { ...size, fonts: [{ name: "Playfair", data: playfair, weight: 700, style: "normal" }] },
  );
}
