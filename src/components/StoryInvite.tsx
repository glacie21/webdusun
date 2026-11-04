import { ArrowUpRight, PenLine } from "lucide-react";
import { villageData } from "@/data/content";
import { whatsappLink } from "@/lib/whatsapp";
import Reveal from "@/components/Reveal";

// Ajakan untuk warga dan perantau mengirim cerita atau foto lama.
// Tombolnya membuka Google Form (contact.storyFormUrl), atau WhatsApp
// pengurus jika formulir belum dibuat.
export default function StoryInvite() {
  const text = villageData.sections.storyInvite;
  const { contact } = villageData;
  const href = contact.storyFormUrl || whatsappLink(contact.whatsapp, text.title);

  return (
    <Reveal className="mt-14 rounded-3xl bg-forest text-white p-8 sm:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 relative overflow-hidden">
      <div aria-hidden="true" className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
      <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
        <PenLine className="w-6 h-6 text-earth-bright" />
      </div>
      <div className="flex-1 relative">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight mb-2">{text.title}</h3>
        <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed max-w-2xl">{text.description}</p>
      </div>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative shrink-0 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-cream-soft text-forest hover:bg-white font-medium text-sm transition-colors shadow-lg"
        >
          <span>{text.buttonLabel}</span>
          <ArrowUpRight className="w-4 h-4 text-earth" />
        </a>
      ) : (
        <span className="relative shrink-0 inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/25 text-white/75 text-sm font-medium">
          {text.unavailableLabel}
        </span>
      )}
    </Reveal>
  );
}
