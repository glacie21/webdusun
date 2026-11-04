import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import type { AgendaItem, NewsItem } from "@/data/content";
import { villageData } from "@/data/content";
import { dateParts, formatLongDate } from "@/lib/dates";

// Kartu kabar dan baris agenda, dipakai di beranda (NewsAgenda.tsx)
// dan di halaman /kabar.

export function NewsCard({ item }: Readonly<{ item: NewsItem }>) {
  return (
    <article className="bg-white rounded-3xl border border-sand p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
        <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-sage-light text-forest">
          {item.category}
        </span>
        <time dateTime={item.date} className="text-xs text-charcoal-muted">
          {formatLongDate(item.date)}
        </time>
      </div>
      <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal leading-snug mb-2">{item.title}</h3>
      {item.summary && <p className="text-sm text-charcoal-muted font-light leading-relaxed">{item.summary}</p>}
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-forest-dark"
        >
          {villageData.sections.news.readMoreLabel}
          <ArrowUpRight className="w-4 h-4 text-earth" />
        </a>
      )}
    </article>
  );
}

export function AgendaRow({ item, muted = false }: Readonly<{ item: AgendaItem; muted?: boolean }>) {
  const { day, month, weekday } = dateParts(item.date);
  return (
    <li className={`flex gap-4 items-start ${muted ? "opacity-70" : ""}`}>
      {/* Kotak kalender */}
      <div
        className={`w-16 shrink-0 rounded-2xl text-center py-2 ${
          muted ? "bg-sand/60 text-charcoal" : "bg-forest text-white"
        }`}
      >
        <p className="font-serif text-2xl font-bold leading-none">{day}</p>
        <p className="text-[11px] uppercase tracking-wider mt-1 opacity-90">{month}</p>
      </div>
      <div className="pt-0.5 min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-earth-dark">{weekday}</p>
        <h3 className="font-semibold text-charcoal leading-snug">{item.title}</h3>
        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-charcoal-muted">
          {item.time && (
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-sage" />
              {item.time}
            </span>
          )}
          {item.place && (
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-sage" />
              {item.place}
            </span>
          )}
        </div>
      </div>
    </li>
  );
}
