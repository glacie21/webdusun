// Data terstruktur (JSON-LD) untuk mesin pencari seperti Google.
// Tidak terlihat oleh pengunjung, hanya dibaca oleh mesin pencari.
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Tanda "<" diganti supaya teks di dalam data tidak bisa menutup tag script.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
