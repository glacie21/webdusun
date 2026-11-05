import { CheckCircle, Clock, Tent, Wallet } from "lucide-react";
import { villageData } from "@/data/content";
import { whatsappLink } from "@/lib/whatsapp";
import { fillTemplate } from "@/lib/text";
import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import SampleNote from "@/components/ui/SampleNote";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { staggerDelay } from "@/components/motion/presets";

const { contact, visitPackages } = villageData;
const text = villageData.sections.visit;

// Paket kunjungan / wisata edukasi. Isinya dari villageData.visitPackages,
// tombolnya membuka WhatsApp pengurus (villageData.contact.whatsapp).
export default function VisitPackages() {
  return (
    <section id="kunjungan" className="py-20 md:py-28 bg-cream-soft relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={Tent}
          badge={text.badge}
          title={text.title}
          description={text.description}
          className="mb-14"
        >
          {/* Kosongkan sections.visit.sampleNote setelah paket disepakati warga. */}
          {text.sampleNote && (
            <Reveal delay={0.2} className="mt-5">
              <SampleNote text={text.sampleNote} />
            </Reveal>
          )}
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visitPackages.map((pkg, index) => {
            const askUrl = whatsappLink(contact.whatsapp, fillTemplate(text.askMessage, { paket: pkg.title }));
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

                <WhatsAppButton href={askUrl} label={text.askButtonLabel} unavailableLabel={text.askUnavailableLabel} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
