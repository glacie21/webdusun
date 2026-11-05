// Mengisi penanda {nama} di dalam teks dari content.ts.
// Contoh: fillTemplate("Foto {nomor} dari {jumlah}", { nomor: 2, jumlah: 12 })
// menghasilkan "Foto 2 dari 12".
export function fillTemplate(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}

// Nomor urut dua digit untuk penanda tahap: 1 → "01", 12 → "12".
export const twoDigits = (n: number) => String(n).padStart(2, "0");
