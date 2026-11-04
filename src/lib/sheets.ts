// Membaca tabel Google Sheets yang sudah "Dipublikasikan ke web" sebagai CSV.
// Baris pertama tabel dianggap judul kolom (misalnya: tanggal, judul, ringkasan).
// Judul kolom tidak peka huruf besar/kecil dan spasi di tepinya diabaikan.

// Data diambil ulang paling cepat setiap 10 menit, jadi perubahan di
// Google Sheets muncul di website dalam beberapa menit.
const REVALIDATE_SECONDS = 600;

// Membaca isian bertanda kutip yang dimulai di text[start] (tanda kutip pembuka).
// Di dalamnya, "" berarti satu tanda kutip. Mengembalikan isinya dan posisi
// karakter setelah tanda kutip penutup.
function readQuoted(text: string, start: number): { value: string; end: number } {
  let value = "";
  let i = start + 1;
  while (i < text.length) {
    if (text[i] !== '"') {
      value += text[i];
      i++;
    } else if (text[i + 1] === '"') {
      value += '"';
      i += 2;
    } else {
      return { value, end: i + 1 };
    }
  }
  return { value, end: i };
}

// Mengurai teks CSV, termasuk isian bertanda kutip yang memuat koma atau baris baru.
// Akhir baris boleh "\n" atau "\r\n" (format Google Sheets).
export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let i = 0;

  while (i < text.length) {
    const char = text[i];
    if (char === '"') {
      const quoted = readQuoted(text, i);
      field += quoted.value;
      i = quoted.end;
      continue;
    }
    if (char === "," || char === "\n") {
      row.push(field);
      field = "";
      if (char === "\n") {
        rows.push(row);
        row = [];
      }
    } else if (char !== "\r") {
      field += char;
    }
    i++;
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
