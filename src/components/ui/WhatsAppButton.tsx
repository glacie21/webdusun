import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  // Tautan dari whatsappLink(). null = nomor belum diisi.
  href: string | null;
  label: string;
  // Teks pengganti selama nomor WhatsApp belum diisi.
  unavailableLabel: string;
  // Ukuran dan jarak, misalnya "mt-5 px-5 py-2.5".
  className?: string;
}

// Tombol hijau yang membuka obrolan WhatsApp. Selama nomornya belum ada,
// yang tampil adalah label abu-abu yang tidak bisa ditekan.
export default function WhatsAppButton({
  href,
  label,
  unavailableLabel,
  className = "px-5 py-3",
}: Readonly<WhatsAppButtonProps>) {
  const base = `inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium ${className}`;

  if (!href) {
    return (
      <span className={`${base} bg-sand/60 text-charcoal-muted`}>
        <MessageCircle className="w-4 h-4" />
        <span>{unavailableLabel}</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} bg-forest hover:bg-forest-dark text-white transition-colors`}
    >
      <MessageCircle className="w-4 h-4" />
      <span>{label}</span>
    </a>
  );
}
