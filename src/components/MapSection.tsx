import { MapPin, Navigation, ExternalLink, Info, Compass } from "lucide-react";
import { villageData } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function MapSection() {
  const { map } = villageData.sections;
  const { location } = villageData;

  return (
    <section id="lokasi" className="py-20 md:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Administrative Information */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal y={16} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-light text-forest text-xs font-semibold tracking-wider uppercase">
              <Navigation className="w-3.5 h-3.5 text-sage" />
              <span>{map.badge}</span>
            </Reveal>

            <Reveal as="h2" delay={0.08} className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
              {map.title}
            </Reveal>

            <Reveal as="p" delay={0.16} className="text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
              {map.description}
            </Reveal>

            {/* Address Card */}
            <Reveal delay={0.24} className="bg-white p-6 sm:p-7 rounded-3xl border border-sand shadow-sm space-y-3">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-sage-light text-forest flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-charcoal">
                    {location.dusun}
                  </h3>
                  <p className="text-sm text-charcoal-muted mt-1 font-light leading-relaxed">
                    {location.desa}, {location.kecamatan}
                    <br />
                    {location.kabupaten}, {location.provinsi}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-sand flex items-center gap-2 text-xs text-sage-dark">
                <Info className="w-4 h-4 shrink-0" />
                <span>{map.addressNote}</span>
              </div>
            </Reveal>

            {/* Direct Google Maps Button */}
            <Reveal delay={0.32}>
              <a
                href={location.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-forest hover:bg-forest-dark text-white font-medium text-sm sm:text-base tracking-wide transition-all shadow-md hover:shadow-lg active:scale-98"
              >
                <Compass className="w-4 h-4" />
                <span>{map.mapsButtonLabel}</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
              </a>
            </Reveal>
          </div>

          {/* Right Column: Map Embed / Interactive Placeholder Map */}
          <Reveal delay={0.15} y={40} className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white min-h-[380px] sm:min-h-[440px] flex flex-col">
              {/* Stylized Map View / Embed */}
              <div className="relative flex-1 w-full bg-sage-light overflow-hidden">
                {/* Embed iframe query for Windusari, Magelang */}
                <iframe
                  title={`Peta ${location.dusun}, ${location.desa}, ${location.kecamatan}`}
                  src={location.mapsEmbedUrl}
                  className="w-full h-full min-h-[360px] border-0 filter saturate-95"
                  loading="lazy"
                  allowFullScreen
                />

                {/* Floating GPS card */}
                <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-sand">
                  <div className="flex items-center gap-2 text-xs font-semibold text-forest mb-1">
                    <MapPin className="w-3.5 h-3.5 text-earth" />
                    <span>{location.dusun}, {location.desa}</span>
                  </div>
                  <p className="text-[11px] text-charcoal-muted leading-tight font-light">
                    {location.kecamatan}, {location.kabupaten}, {location.provinsi}
                  </p>
                </div>
              </div>

              {/* Note bar */}
              <div className="p-4 bg-white border-t border-sand text-xs text-charcoal-muted flex items-center justify-between">
                <span>{location.embedPlaceholderNote}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
