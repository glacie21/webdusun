import Image from "next/image";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { villageData } from "@/data/content";
import Reveal from "@/components/Reveal";
import { staggerDelay } from "@/components/motionPresets";

// Kartu cerita di beranda. Setiap kartu membuka halaman ceritanya sendiri
// (src/app/cerita/[slug]/page.tsx) supaya bisa dibagikan dan dicari di Google.
export default function FeaturedStories() {
  return (
    <section id="cerita" className="py-20 md:py-28 bg-cream-soft relative border-t border-sand/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal y={16} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-light text-forest text-xs font-semibold tracking-wider uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5 text-sage" />
            <span>{villageData.sections.stories.badge}</span>
          </Reveal>
          <Reveal as="h2" delay={0.08} className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight mb-4">
            {villageData.sections.stories.title}
          </Reveal>
          <Reveal as="p" delay={0.16} className="text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
            {villageData.sections.stories.description}
          </Reveal>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {villageData.editorialStories.map((story, index) => (
            <Reveal
              as="article"
              key={story.id}
              delay={staggerDelay(index, 0.12)}
              className="relative bg-white rounded-3xl overflow-hidden border border-sand shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-[box-shadow,translate] duration-300 flex flex-col group focus-within:ring-2 focus-within:ring-forest"
            >
              {/* Image Frame */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={story.imageUrl}
                  alt={story.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-forest uppercase tracking-wider">
                    {story.date}
                  </span>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-sage-dark mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {story.readTime}
                    </span>
                    <span>·</span>
                    <span>{story.author}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-charcoal mb-2 leading-snug group-hover:text-forest transition-colors">
                    {/* Lapisan ::after membuat seluruh kartu bisa diklik */}
                    <Link
                      href={`/cerita/${story.slug}`}
                      className="focus:outline-none after:absolute after:inset-0 after:content-['']"
                    >
                      {story.title}
                    </Link>
                  </h3>

                  <p className="text-xs uppercase tracking-wider font-semibold text-earth-dark mb-3">
                    {story.subtitle}
                  </p>

                  <p className="text-sm text-charcoal-muted font-light leading-relaxed mb-6">
                    {story.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand/70">
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-forest group-hover:text-forest-dark"
                  >
                    <span>{villageData.sections.stories.readMoreLabel}</span>
                    <ArrowRight className="w-4 h-4 text-earth group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
