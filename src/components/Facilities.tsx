import Image from "next/image";
import { Landmark, MapPin, CheckCircle } from "lucide-react";
import { villageData } from "@/data/content";

export default function Facilities() {
  return (
    <section id="fasilitas" className="py-20 md:py-28 bg-cream-soft relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-light text-forest text-xs font-semibold tracking-wider uppercase mb-3">
            <Landmark className="w-3.5 h-3.5 text-sage" />
            <span>{villageData.sections.facilities.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight mb-5">
            {villageData.sections.facilities.title}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
            {villageData.sections.facilities.description}
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {villageData.facilities.map((fac) => (
            <div
              key={fac.id}
              className="bg-white rounded-3xl overflow-hidden border border-sand shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-52 w-full overflow-hidden">
                {/* Ganti gambar melalui imageUrl pada daftar facilities di src/data/content.ts. */}
                <Image
                  src={fac.imageUrl}
                  alt={fac.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-white/95 text-forest">
                  {fac.category}
                </span>
              </div>

              {/* Card Body */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
