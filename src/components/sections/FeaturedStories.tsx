import Image from "next/image";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { villageData } from "@/data/content";
import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { staggerDelay } from "@/components/motion/presets";
import StoryInvite from "@/components/ui/StoryInvite";
import { storyPath } from "@/lib/stories";

// Kartu cerita di beranda. Setiap kartu membuka halaman ceritanya sendiri
// (src/app/cerita/[slug]/page.tsx) supaya bisa dibagikan dan dicari di Google.
const { editorialStories } = villageData;
const text = villageData.sections.stories;

export default function FeaturedStories() {
  return (
    <section id="cerita" className="py-20 md:py-28 bg-cream-soft relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader icon={BookOpen} badge={text.badge} title={text.title} description={text.description} />

        {/* Kartu cerita */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {editorialStories.map((story, index) => (
            <Reveal
              as="article"
              key={story.id}
              delay={staggerDelay(index, 0.12)}
              className="relative bg-white rounded-3xl overflow-hidden border border-sand shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-[box-shadow,translate] duration-300 flex flex-col group focus-within:ring-2 focus-within:ring-forest"
            >
              {/* Foto */}
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

              {/* Isi kartu */}
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
                      href={storyPath(story.slug)}
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
                    <span>{text.readMoreLabel}</span>
                    <ArrowRight className="w-4 h-4 text-earth group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Ajakan mengirim cerita */}
        <StoryInvite />
      </div>
    </section>
  );
}
