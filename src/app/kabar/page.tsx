import type { Metadata } from "next";
import { CalendarDays, History, Megaphone, Newspaper } from "lucide-react";
import { villageData } from "@/data/content";
import { getAgenda, getNews } from "@/data/liveData";
import Footer from "@/components/layout/Footer";
import PageTopBar from "@/components/layout/PageTopBar";
import SampleNote from "@/components/ui/SampleNote";
import { AgendaRow, NewsCard } from "@/components/ui/NewsItems";
import { pageMetadata } from "@/lib/seo";

// Halaman /kabar: semua kabar dan agenda dusun.
// Datanya dari Google Sheets (lihat src/data/liveData.ts).

const text = villageData.sections.news;

export const revalidate = 3600;

// Jumlah agenda lama yang masih ditampilkan.
const PAST_AGENDA_LIMIT = 6;

export const metadata: Metadata = pageMetadata({
  title: text.pageTitle,
  description: text.description,
  path: "/kabar",
});

export default async function NewsPage() {
  const [news, agenda] = await Promise.all([getNews(), getAgenda()]);
  const isSample = news.isSample || agenda.isSample;

  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal">
      {/* id="hero" dipakai tombol "Kembali ke Atas" di Footer. */}
      <header id="hero" className="bg-forest-dark text-white">
        <PageTopBar backHref="/#kabar" backLabel={text.backLabel} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:pt-14 md:pb-20">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold tracking-wider uppercase text-earth-bright mb-4">
            <Megaphone className="w-3.5 h-3.5" />
            {text.badge}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
            {text.title}
          </h1>
          <p className="text-base sm:text-lg text-white/80 font-light max-w-2xl leading-relaxed">{text.description}</p>
        </div>
      </header>

      <main id="konten" tabIndex={-1} className="flex-grow focus:outline-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          {isSample && <SampleNote text={text.sampleNote} className="mb-10" />}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Semua kabar */}
            <section className="lg:col-span-7" aria-labelledby="semua-kabar">
              <h2 id="semua-kabar" className="flex items-center gap-2 font-serif text-2xl sm:text-3xl font-bold mb-6">
                <Newspaper className="w-6 h-6 text-earth" />
                {text.allNewsTitle}
              </h2>
              {news.items.length === 0 ? (
                <p className="text-sm text-charcoal-muted">{text.emptyNews}</p>
              ) : (
                <div className="space-y-5">
                  {news.items.map((item) => (
                    <NewsCard key={`${item.date}-${item.title}`} item={item} />
                  ))}
                </div>
              )}
            </section>

            {/* Agenda */}
            <aside className="lg:col-span-5 space-y-8">
              <section className="bg-white rounded-3xl border border-sand p-6 sm:p-8 shadow-sm" aria-labelledby="agenda-mendatang">
                <h2 id="agenda-mendatang" className="flex items-center gap-2 font-serif text-2xl font-bold mb-6">
                  <CalendarDays className="w-5 h-5 text-earth" />
                  {text.agendaTitle}
                </h2>
                {agenda.upcoming.length === 0 ? (
                  <p className="text-sm text-charcoal-muted">{text.emptyAgenda}</p>
                ) : (
                  <ul className="space-y-5">
                    {agenda.upcoming.map((item) => (
                      <AgendaRow key={`${item.date}-${item.title}`} item={item} />
                    ))}
                  </ul>
                )}
              </section>

              {agenda.past.length > 0 && (
                <section className="rounded-3xl border border-sand p-6 sm:p-8" aria-labelledby="agenda-lewat">
                  <h2 id="agenda-lewat" className="flex items-center gap-2 font-serif text-xl font-bold mb-6 text-charcoal-muted">
                    <History className="w-5 h-5 text-sage" />
                    {text.pastAgendaTitle}
                  </h2>
                  <ul className="space-y-5">
                    {agenda.past.slice(0, PAST_AGENDA_LIMIT).map((item) => (
                      <AgendaRow key={`${item.date}-${item.title}`} item={item} muted />
                    ))}
                  </ul>
                </section>
              )}
            </aside>
          </div>
        </div>
      </main>

      <Footer basePath="/" />
    </div>
  );
}
