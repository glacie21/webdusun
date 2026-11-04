import { CheckCircle, Clock, MessageCircle, Tent, Wallet } from "lucide-react";
import { villageData } from "@/data/content";
import { whatsappLink } from "@/lib/whatsapp";
import Reveal from "@/components/Reveal";
import SampleNote from "@/components/SampleNote";
import { staggerDelay } from "@/components/motionPresets";

// Paket kunjungan / wisata edukasi. Isinya dari villageData.visitPackages,
// tombolnya membuka WhatsApp pengurus (villageData.contact.whatsapp).
export default function VisitPackages() {
  const text = villageData.sections.visit;

  return (
    <section id="kunjungan" className="py-20 md:py-28 bg-cream-soft relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <Reveal y={16} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-light text-forest text-xs font-semibold tracking-wider uppercase mb-3">
            <Tent className="w-3.5 h-3.5 text-sage" />
            <span>{text.badge}</span>
          </Reveal>
          <Reveal as="h2" delay={0.08} className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight mb-5">
            {text.title}
          </Reveal>
          <Reveal as="p" delay={0.16} className="text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
            {text.description}
          </Reveal>
          {/* Kosongkan sections.visit.sampleNote setelah paket disepakati warga. */}
          {text.sampleNote && (
            <Reveal delay={0.2} className="mt-5">
              <SampleNote text={text.sampleNote} />
            </Reveal>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {villageData.visitPackages.map((pkg, index) => {
            const askUrl = whatsappLink(villageData.contact.whatsapp, text.askMessage.replace("{paket}", pkg.title));
            return (
              <Reveal
                key={pkg.id}
                delay={staggerDelay(index)}
                className="bg-white rounded-3xl border border-sand p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-[box-shadow,translate] duration-300 flex flex-col"
              >
                <div className="flex flex-wrap gap-2 mb-4 text-xs">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sage-light text-forest font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {pkg.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-earth/10 text-earth-dark font-medium">
                    <Wallet className="w-3.5 h-3.5" />
                    {pkg.priceNote}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-charcoal mb-2">{pkg.title}</h3>
                <p className="text-sm text-charcoal-muted font-light leading-relaxed mb-5">{pkg.description}</p>

                <p className="text-xs font-semibold uppercase tracking-wider text-sage-dark mb-2">{text.includesLabel}</p>
                <ul className="space-y-1.5 mb-6 flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                      <CheckCircle className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {askUrl ? (
                  <a
                    href={askUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-forest hover:bg-forest-dark text-white text-sm font-medium transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{text.askButtonLabel}</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-sand/60 text-charcoal-muted text-sm font-medium">
                    <MessageCircle className="w-4 h-4" />
                    <span>{text.askUnavailableLabel}</span>
                  </span>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
