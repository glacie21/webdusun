// Membaca tabel Google Sheets yang sudah "Dipublikasikan ke web" sebagai CSV.
// Baris pertama tabel dianggap judul kolom (misalnya: tanggal, judul, ringkasan).
// Judul kolom tidak peka huruf besar/kecil dan spasi di tepinya diabaikan.

// Data diambil ulang paling cepat setiap 10 menit, jadi perubahan di
// Google Sheets muncul di website dalam beberapa menit.
const REVALIDATE_SECONDS = 600;

// Mengurai teks CSV, termasuk isian bertanda kutip yang memuat koma atau baris baru.
export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (inQuotes) {
      if (char === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
    } else if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n" || char === "\r") {
      if (char === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }
  if (field !== "" || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

export type SheetRow = Record<string, string>;

// Mengambil tabel dan mengubah setiap baris menjadi objek { judulKolom: isi }.
// Mengembalikan null jika tautan kosong atau gagal dimuat, supaya pemanggil
// bisa memakai data cadangan dari content.ts.
export async function loadSheetRows(url: string): Promise<SheetRow[] | null> {
  if (!url) return null;
  try {
    const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!res.ok) return null;

    const [header, ...body] = parseCsv(await res.text());
    if (!header) return null;
    const keys = header.map((key) => key.trim().toLowerCase());

    return body
      .map((cells) => Object.fromEntries(keys.map((key, i) => [key, (cells[i] ?? "").trim()])))
      .filter((row) => Object.values(row).some((value) => value !== ""));
  } catch {
    return null;
  }
}
