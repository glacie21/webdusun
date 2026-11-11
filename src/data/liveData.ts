import { villageData } from "@/data/content";
import type { AgendaItem, NewsItem, ProductItem } from "@/data/types";
import { loadSheetRows, type SheetRow } from "@/lib/sheets";
import { normalizeDate, todayInWib } from "@/lib/dates";
import { normalizeWhatsapp } from "@/lib/whatsapp";

// Kabar, agenda, dan produk diambil dari Google Sheets (villageData.sheets).
// Jika tautannya kosong atau gagal dimuat, dipakai data contoh dari content.ts.
// `isSample` dipakai komponen untuk menampilkan catatan "contoh tampilan".
//
// Judul kolom yang dikenali di Google Sheets (tulis di baris pertama):
// - Kabar  : tanggal, judul, ringkasan, kategori, tautan
// - Agenda : tanggal, waktu, kegiatan, tempat
// - Produk : nama, kategori, penjual, harga, deskripsi, foto, keterangan foto, whatsapp

export interface LiveList<T> {
  items: T[];
  isSample: boolean;
}

async function fromSheet<T>(url: string, fallback: T[], toItem: (row: SheetRow, index: number) => T | null) {
  const rows = await loadSheetRows(url);
  if (!rows) return { items: fallback, isSample: true };
  return { items: rows.map((row, index) => toItem(row, index)).filter((item): item is T => item !== null), isSample: false };
}

const byDateDesc = (a: { date: string }, b: { date: string }) => b.date.localeCompare(a.date);
const byDateAsc = (a: { date: string }, b: { date: string }) => a.date.localeCompare(b.date);

export async function getNews(): Promise<LiveList<NewsItem>> {
  const list = await fromSheet(villageData.sheets.newsCsvUrl, villageData.news, (row) => {
    const date = normalizeDate(row["tanggal"] ?? "");
    if (!date || !row["judul"]) return null;
    return {
      date,
      title: row["judul"],
      summary: row["ringkasan"] ?? "",
      category: row["kategori"] || "Kabar",
      link: row["tautan"] || undefined,
    };
  });
  return { ...list, items: [...list.items].sort(byDateDesc) };
}

export async function getAgenda(): Promise<LiveList<AgendaItem> & { upcoming: AgendaItem[]; past: AgendaItem[] }> {
  const list = await fromSheet(villageData.sheets.agendaCsvUrl, villageData.agenda, (row) => {
    const date = normalizeDate(row["tanggal"] ?? "");
    if (!date || !row["kegiatan"]) return null;
    return { date, time: row["waktu"] ?? "", title: row["kegiatan"], place: row["tempat"] ?? "" };
  });
  const today = todayInWib();
  const sorted = [...list.items].sort(byDateAsc);
  return {
    ...list,
    items: sorted,
    upcoming: sorted.filter((item) => item.date >= today),
    past: sorted.filter((item) => item.date < today).reverse(),
  };
}

export async function getProducts(): Promise<LiveList<ProductItem>> {
  return fromSheet(villageData.sheets.productsCsvUrl, villageData.products, (row, index) => {
    if (!row["nama"]) return null;
    return {
      id: `produk-${index}`,
      name: row["nama"],
      category: row["kategori"] || "Produk Warga",
      seller: row["penjual"] ?? "",
      price: row["harga"] ?? "",
      description: row["deskripsi"] ?? "",
      // Tanpa foto, dipakai foto ketela sebagai pengganti.
      imageUrl: row["foto"] || villageData.products[0].imageUrl,
      imageAlt: row["keterangan foto"] || row["nama"],
      whatsapp: normalizeWhatsapp(row["whatsapp"] ?? "") || undefined,
    };
  });
}
