import Link from "next/link";
import { ArrowRight, CalendarDays, Megaphone, Newspaper } from "lucide-react";
import { villageData } from "@/data/content";
import { getAgenda, getNews } from "@/data/liveData";
import Reveal from "@/components/Reveal";
import SampleNote from "@/components/SampleNote";
import { AgendaRow, NewsCard } from "@/components/NewsItems";
import { staggerDelay } from "@/components/motionPresets";

// Bagian "Kabar & Agenda" di beranda: 3 kabar terbaru dan 4 agenda terdekat.
// Datanya dari Google Sheets (lihat src/data/liveData.ts).
export default async function NewsAgenda() {
  const text = villageData.sections.news;
  const [news, agenda] = await Promise.all([getNews(), getAgenda()]);
  const latestNews = news.items.slice(0, 3);
  const nextAgenda = agenda.upcoming.slice(0, 4);
  const isSample = news.isSample || agenda.isSample;

  return (
    <section id="kabar" className="py-20 md:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <Reveal y={16} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-light text-forest text-xs font-semibold tracking-wider uppercase mb-3">
            <Megaphone className="w-3.5 h-3.5 text-sage" />
            <span>{text.badge}</span>
          </Reveal>
          <Reveal as="h2" delay={0.08} className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight mb-5">
            {text.title}
          </Reveal>
          <Reveal as="p" delay={0.16} className="text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
            {text.description}
          </Reveal>
          {isSample && (
            <Reveal delay={0.2} className="mt-5">
              <SampleNote text={text.sampleNote} />
            </Reveal>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Kabar terbaru */}
          <div className="lg:col-span-7">
            <h3 className="flex items-center gap-2 font-serif text-2xl font-bold text-charcoal mb-6">
              <Newspaper className="w-5 h-5 text-earth" />
              {text.newsTitle}
            </h3>
            {latestNews.length === 0 ? (
              <p className="text-sm text-charcoal-muted">{text.emptyNews}</p>
            ) : (
              <div className="space-y-5">
                {latestNews.map((item, index) => (
                  <Reveal key={`${item.date}-${item.title}`} delay={staggerDelay(index)}>
                    <NewsCard item={item} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>

          {/* Agenda terdekat */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-sand p-6 sm:p-8 shadow-sm">
              <h3 className="flex items-center gap-2 font-serif text-2xl font-bold text-charcoal mb-6">
                <CalendarDays className="w-5 h-5 text-earth" />
                {text.agendaTitle}
              </h3>
              {nextAgenda.length === 0 ? (
                <p className="text-sm text-charcoal-muted">{text.emptyAgenda}</p>
              ) : (
                <ul className="space-y-5">
                  {nextAgenda.map((item) => (
                    <AgendaRow key={`${item.date}-${item.title}`} item={item} />
                  ))}
                </ul>
              )}

              <Link
                href="/kabar"
                className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-forest hover:bg-forest-dark text-white text-sm font-medium transition-colors"
              >
                <span>{text.seeAllLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
