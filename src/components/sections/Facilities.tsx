import Image from "next/image";
import { Landmark, MapPin, CheckCircle } from "lucide-react";
import { villageData } from "@/data/content";
import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { staggerDelay } from "@/components/motion/presets";
import { cardImageSizes, firstCardSpan } from "@/lib/gridLayout";

const { facilities } = villageData;
const text = villageData.sections.facilities;

export default function Facilities() {
  const firstSpan = firstCardSpan(facilities.length);

  return (
    <section id="fasilitas" className="py-20 md:py-28 bg-cream-soft relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader icon={Landmark} badge={text.badge} title={text.title} description={text.description} />

        {/* Kartu fasilitas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, index) => (
            <Reveal
              key={fac.id}
              delay={staggerDelay(index)}
              className={`bg-white rounded-3xl overflow-hidden border border-sand shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-[box-shadow,translate] duration-300 flex flex-col group ${
                index === 0 ? firstSpan : ""
              }`}
            >
              {/* Foto */}
              <div className="relative h-52 w-full overflow-hidden">
                {/* Ganti gambar melalui imageUrl pada daftar facilities di src/data/content.ts. */}
                <Image
                  src={fac.imageUrl}
                  alt={fac.imageAlt}
                  fill
                  sizes={cardImageSizes(index === 0 && firstSpan !== "")}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-white/95 text-forest">
                  {fac.category}
                </span>
              </div>

              {/* Isi kartu */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-2 group-hover:text-forest transition-colors">
                    {fac.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed mb-4">
                    {fac.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-forest font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-sage shrink-0" />
                    <span>{fac.statusText}</span>
                  </div>

                  {fac.locationNote && (
                    <div className="flex items-center gap-2 text-xs text-charcoal-muted">
                      <MapPin className="w-3.5 h-3.5 text-earth shrink-0" />
                      <span>{fac.locationNote}</span>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
