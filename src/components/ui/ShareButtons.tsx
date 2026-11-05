"use client";

import { useEffect, useState } from "react";
import { Check, Link2, MessageCircle, Share2 } from "lucide-react";
import { villageData } from "@/data/content";
import { whatsappShareLink } from "@/lib/whatsapp";

const text = villageData.sections.share;

interface ShareButtonsProps {
  title: string;
  url: string;
  whatsappLabel: string;
}

// Tombol bagikan: WhatsApp, salin tautan, dan menu bagikan bawaan HP
// (hanya muncul di perangkat yang mendukungnya).
export default function ShareButtons({ title, url, whatsappLabel }: Readonly<ShareButtonsProps>) {
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    // Dicek setelah dimuat, karena navigator tidak tersedia saat render di server.
    const frame = requestAnimationFrame(() => setCanNativeShare(typeof navigator.share === "function"));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      // Browser menolak akses clipboard; abaikan.
    }
  };

  const nativeShare = () => {
    navigator.share({ title, url }).catch(() => {
      // Pengunjung membatalkan; tidak perlu apa-apa.
    });
  };

  const whatsappUrl = whatsappShareLink(`${title}\n${url}`);

  const secondary =
    "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-sand bg-white hover:border-sage hover:text-forest text-charcoal text-sm font-medium transition-colors";

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-forest hover:bg-forest-dark text-white text-sm font-medium transition-colors shadow-sm"
      >
        <MessageCircle className="w-4 h-4" />
        <span>{whatsappLabel}</span>
      </a>

      <button type="button" onClick={copyLink} className={secondary}>
        {copied ? <Check className="w-4 h-4 text-sage" /> : <Link2 className="w-4 h-4" />}
        <span aria-live="polite">{copied ? text.copiedLabel : text.copyLinkLabel}</span>
      </button>

      {canNativeShare && (
        <button type="button" onClick={nativeShare} className={secondary}>
          <Share2 className="w-4 h-4" />
          <span>{text.moreLabel}</span>
        </button>
      )}
    </div>
  );
}
