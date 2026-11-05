// Membersihkan nomor WhatsApp: "0812-3456-7890" atau "+62 812..." → "6281234567890".
export function normalizeWhatsapp(value: string): string {
  const digits = value.replace(/\D/g, "");
  return digits.startsWith("0") ? `62${digits.slice(1)}` : digits;
}

// Tautan yang membuka obrolan WhatsApp dengan pesan yang sudah terisi.
// Mengembalikan null jika nomornya kosong.
export function whatsappLink(number: string | undefined, message: string): string | null {
  const clean = normalizeWhatsapp(number ?? "");
  if (!clean) return null;
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
}

// Tautan untuk membagikan pesan lewat WhatsApp; pengunjung memilih sendiri penerimanya.
export function whatsappShareLink(message: string): string {
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}
