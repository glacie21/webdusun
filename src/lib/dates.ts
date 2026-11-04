// Pengolah tanggal untuk kabar dan agenda. Semua perhitungan memakai
// zona waktu Sukomangun (WIB), apa pun zona waktu server atau pengunjung.

const TIME_ZONE = "Asia/Jakarta";

// Mengubah "2026-11-08" atau "08/11/2026" (format Google Sheets Indonesia)
// menjadi "2026-11-08". Mengembalikan "" jika tidak dikenali.
export function normalizeDate(value: string): string {
  const iso = /^(\d{4})-(\d{1,2})-(\d{1,2})/.exec(value);
  if (iso) return `${iso[1]}-${iso[2].padStart(2, "0")}-${iso[3].padStart(2, "0")}`;

  const dmy = /^(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})/.exec(value);
  if (dmy) return `${dmy[3]}-${dmy[2].padStart(2, "0")}-${dmy[1].padStart(2, "0")}`;

  return "";
}

// Tanggal hari ini di WIB, format "2026-11-04".
export function todayInWib(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TIME_ZONE }).format(new Date());
}

// Tengah hari WIB dipakai supaya tanggal tidak bergeser saat diformat.
const toDate = (isoDate: string) => new Date(`${isoDate}T12:00:00+07:00`);

// "2026-11-08" → "8 November 2026".
export function formatLongDate(isoDate: string): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: TIME_ZONE,
  }).format(toDate(isoDate));
}

// "2026-11-08" → { day: "8", month: "Nov", weekday: "Minggu" } untuk kotak kalender.
export function dateParts(isoDate: string) {
  const date = toDate(isoDate);
  const part = (options: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat("id-ID", { ...options, timeZone: TIME_ZONE }).format(date);
  return {
    day: part({ day: "numeric" }),
    month: part({ month: "short" }),
    weekday: part({ weekday: "long" }),
  };
}
