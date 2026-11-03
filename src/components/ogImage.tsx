import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";
import { villageData } from "@/data/content";

// Pembuat gambar pratinjau tautan (WhatsApp, Facebook, X), dipakai bersama
// oleh src/app/opengraph-image.tsx (beranda) dan
// src/app/cerita/[slug]/opengraph-image.tsx (setiap halaman cerita).

const { identity } = villageData;

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/jpeg";

// Warna sama dengan token di globals.css.
const colors = {
  forestDark: "#1E3D34",
  earth: "#B8895A",
  earthBright: "#E3C49F",
  cream: "#F7F5EF",
};

const fontDir = join(process.cwd(), "src/assets/fonts");

// Foto latar bisa berupa URL (https://...) atau file di folder public (/foto/...).
// Jika gagal dimuat, gambar tetap dibuat dengan latar hijau polos.
async function loadPhoto(src: string) {
  try {
    if (src.startsWith("/")) {
      const file = await readFile(join(process.cwd(), "public", src));
      const type = src.endsWith(".png") ? "image/png" : "image/jpeg";
      return `data:${type};base64,${file.toString("base64")}`;
    }
    const res = await fetch(src, { headers: { Accept: "image/jpeg,image/png" } });
    if (!res.ok) return null;
    const type = res.headers.get("content-type") ?? "image/jpeg";
    return `data:${type};base64,${Buffer.from(await res.arrayBuffer()).toString("base64")}`;
  } catch {
    return null;
  }
}

interface OgImageOptions {
  photoUrl: string;
  // Teks kecil di atas judul.
  eyebrow: string;
  title: string;
  // Ukuran huruf judul. Kecilkan untuk judul yang panjang.
  titleSize: number;
  subtitle: string;
}

export async function renderOgImage({ photoUrl, eyebrow, title, titleSize, subtitle }: OgImageOptions) {
  const [photo, playfair, inter, interSemiBold] = await Promise.all([
    loadPhoto(photoUrl),
    readFile(join(fontDir, "PlayfairDisplay-Bold.woff")),
    readFile(join(fontDir, "Inter-Regular.woff")),
    readFile(join(fontDir, "Inter-SemiBold.woff")),
  ]);

  const png = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: colors.forestDark,
          fontFamily: "Inter",
          color: colors.cream,
        }}
      >
        {photo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            alt=""
            width={ogSize.width}
            height={ogSize.height}
            style={{ position: "absolute", top: 0, left: 0, objectFit: "cover" }}
          />
        )}

        {/* Lapisan hijau supaya teks tetap terbaca di atas foto */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(90deg, rgba(30,61,52,0.97) 0%, rgba(30,61,52,0.88) 48%, rgba(30,61,52,0.35) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
          }}
        >
          {/* Logo dan nama situs */}
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 16,
                border: "2px solid rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Playfair Display",
                fontSize: 32,
              }}
            >
              {identity.logoInitial}
            </div>
            <div style={{ fontFamily: "Playfair Display", fontSize: 30 }}>{identity.shortName}</div>
          </div>

          {/* Judul utama */}
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}>
            <div
              style={{
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: colors.earthBright,
                marginBottom: 18,
              }}
            >
              {eyebrow}
            </div>
            <div style={{ fontFamily: "Playfair Display", fontSize: titleSize, lineHeight: 1.05 }}>
              {title}
            </div>
            <div style={{ fontSize: 30, lineHeight: 1.4, marginTop: 24, color: "rgba(247,245,239,0.88)" }}>
              {subtitle}
            </div>
          </div>

          {/* Lokasi */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 48, height: 3, background: colors.earth }} />
            <div style={{ fontSize: 22, color: "rgba(247,245,239,0.8)" }}>{identity.subLocationText}</div>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Playfair Display", data: playfair, weight: 700, style: "normal" },
        { name: "Inter", data: inter, weight: 400, style: "normal" },
        { name: "Inter", data: interSemiBold, weight: 600, style: "normal" },
      ],
    }
  );

  // ImageResponse selalu menghasilkan PNG, yang untuk foto bisa lebih dari
  // 700 KB. Diubah ke JPEG supaya ringan, karena WhatsApp kadang tidak
  // menampilkan pratinjau jika gambarnya terlalu besar.
  const jpeg = await sharp(Buffer.from(await png.arrayBuffer()))
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  return new Response(new Uint8Array(jpeg), { headers: { "Content-Type": ogContentType } });
}
