import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, MessageCircle } from "lucide-react";
import { villageData } from "@/data/content";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

// Halaman untuk setiap cerita, misalnya /cerita/dari-tanah-untuk-kehidupan.
// Isinya diambil dari villageData.editorialStories di src/data/content.ts.
// Menambah cerita baru di sana otomatis membuat halaman barunya.

const { site, identity, editorialStories } = villageData;
const { stories } = villageData.sections;

type Props = { params: Promise<{ slug: string }> };

const findStory = (slug: string) => editorialStories.find((story) => story.slug === slug);

// Semua halaman cerita dibuat saat build. Alamat cerita lain akan menampilkan 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return editorialStories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const story = findStory((await params).slug);
  if (!story) return {};

  const title = `${story.title} — ${identity.shortName}`;
  const path = `/cerita/${story.slug}`;
  return {
    title,
    description: story.excerpt,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: story.excerpt,
      url: path,
      siteName: identity.shortName,
      locale: "id_ID",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: story.excerpt,
    },
  };
}

export default async function StoryPage({ params }: Props) {
  const story = findStory((await params).slug);
  if (!story) notFound();

  const url = `${site.url}/cerita/${story.slug}`;
  const shareUrl = `https://wa.me/?text=${encodeURIComponent(`${story.title}\n${url}`)}`;
  const otherStories = editorialStories.filter((item) => item.slug !== story.slug);

  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: story.title,
          alternativeHeadline: story.subtitle,
          description: story.excerpt,
          image: story.imageUrl,
          inLanguage: "id-ID",
          url,
          mainEntityOfPage: url,
          author: { "@type": "Organization", name: story.author },
          publisher: { "@type": "Organization", name: site.author },
          isPartOf: { "@type": "WebSite", name: identity.shortName, url: site.url },
        }}
      />

      {/* Foto sampul dan judul. id="hero" dipakai tombol "Kembali ke Atas" di Footer. */}
      <header id="hero" className="relative min-h-[70vh] flex flex-col text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={story.imageUrl}
            alt={story.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-black/45 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between gap-4">
          <Link href="/" className="group inline-flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center font-serif text-lg font-bold group-hover:bg-white/30 transition-colors">
              {identity.logoInitial}
            </span>
            <span className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold tracking-tight">
                {identity.shortName}
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-white/80">
                {identity.areaLabel}
              </span>
            </span>
          </Link>

          <Link
            href="/#cerita"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-sm text-white/90 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{stories.backLabel}</span>
          </Link>
        </div>

        <div className="relative z-10 flex-1 flex items-end">
          <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
            <p className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-earth-bright mb-4">
              {story.subtitle}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-5 text-balance">
              {story.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/80">
              <span>{story.author}</span>
              <span aria-hidden="true">·</span>
              <span>{story.date}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {story.readTime}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Isi cerita */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <p className="font-serif text-xl sm:text-2xl text-forest leading-relaxed mb-10">
            {story.excerpt}
          </p>
          <div className="space-y-6">
            {story.content.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg text-charcoal font-light leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Bagikan */}
          <div className="mt-14 pt-8 border-t border-sand flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="font-serif text-lg font-semibold text-charcoal">{stories.shareTitle}</p>
            <a
              href={shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-forest hover:bg-forest-dark text-white text-sm font-medium transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{stories.shareButtonLabel}</span>
            </a>
          </div>
        </article>

        {/* Cerita lainnya */}
        {otherStories.length > 0 && (
          <section className="bg-cream-soft border-t border-sand/80 py-14 md:py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-8">
                {stories.otherStoriesTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherStories.map((item) => (
                  <Link
                    key={item.id}
                    href={`/cerita/${item.slug}`}
                    className="group flex gap-4 bg-white rounded-3xl overflow-hidden border border-sand shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="relative w-32 sm:w-40 shrink-0">
                      <Image
                        src={item.imageUrl}
                        alt={item.imageAlt}
                        fill
                        sizes="160px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="py-5 pr-5 flex flex-col justify-center">
                      <p className="text-[11px] uppercase tracking-wider font-semibold text-earth-dark mb-1">
                        {item.date}
                      </p>
                      <h3 className="font-serif text-lg font-bold text-charcoal leading-snug group-hover:text-forest transition-colors mb-2">
                        {item.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
                        {stories.readMoreLabel}
                        <ArrowRight className="w-4 h-4 text-earth group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                href="/#cerita"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-forest-dark"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{stories.backLabel}</span>
              </Link>
            </div>
          </section>
        )}
      </main>

      <Footer basePath="/" />
    </div>
  );
}
