import { Info } from "lucide-react";

// Catatan kecil "contoh tampilan" yang muncul selama sebuah bagian masih
// memakai data contoh. Hilang otomatis setelah data asli diisi.
export default function SampleNote({ text, className = "" }: Readonly<{ text: string; className?: string }>) {
  return (
    <p
      className={`inline-flex items-start gap-2 px-3.5 py-2 rounded-2xl bg-earth/10 border border-earth/25 text-xs text-earth-dark leading-relaxed ${className}`}
    >
      <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
      <span>{text}</span>
    </p>
  );
}
