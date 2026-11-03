import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Statistics from "@/components/Statistics";
import History from "@/components/History";
import Potentials from "@/components/Potentials";
import CommodityFlow from "@/components/CommodityFlow";
import Community from "@/components/Community";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import FeaturedStories from "@/components/FeaturedStories";
import QuoteSection from "@/components/QuoteSection";
import MapSection from "@/components/MapSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import HillDivider from "@/components/HillDivider";
import Marquee from "@/components/Marquee";
import { villageData } from "@/data/content";

const { site, identity, location } = villageData;

// Data terstruktur untuk Google: website ini, dan Dusun Sukomangun sebagai
// sebuah tempat beserta wilayah administratifnya. Semua diambil dari content.ts.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: identity.shortName,
      description: site.description,
      inLanguage: "id-ID",
      about: { "@id": `${site.url}/#dusun` },
    },
    {
      "@type": "Place",
      "@id": `${site.url}/#dusun`,
      name: identity.name,
      description: identity.longDescription[0],
      url: site.url,
      hasMap: location.mapsSearchUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${location.dusun}, ${location.desa}`,
        addressLocality: location.kecamatan,
        addressRegion: location.provinsi,
        addressCountry: "ID",
      },
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: location.desa,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: location.kecamatan,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: location.kabupaten,
          },
        },
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal">
      <JsonLd data={jsonLd} />

      {/* Sticky Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Introduction / Tentang Sukomangun */}
        <About />

        {/* 3. Quick Information / Minimalist Statistics.
            Siluet bukit menjadi peralihan ke dan dari bagian berwarna gelap. */}
        <HillDivider className="bg-cream text-forest" />
        <Statistics />
        <HillDivider className="bg-forest text-cream-soft" variant="rolling" flip />

        {/* 4. Sejarah / Perjalanan Dusun */}
        <History />

        {/* Pita kata berjalan */}
        <Marquee />

        {/* 5. Potensi Dusun */}
        <Potentials />

        {/* 6. Alur Komoditas Ketela */}
        <CommodityFlow />

        {/* 7. Kehidupan Masyarakat & Kebudayaan */}
        <Community />

        {/* 8. Fasilitas Dusun */}
        <Facilities />

        {/* 9. Galeri Foto & Lightbox */}
        <HillDivider className="bg-cream-soft text-forest-dark" flip />
        <Gallery />
        <HillDivider className="bg-forest-dark text-cream-soft" variant="rolling" />

        {/* 10. Featured Editorial Stories */}
        <FeaturedStories />

        {/* 11. Quote Section */}
        <QuoteSection />

        {/* 12. Peta Wilayah & Lokasi */}
        <MapSection />

        {/* 13. Call To Action Section */}
        <CtaSection />
        <HillDivider className="bg-forest text-forest-dark" variant="rolling" flip />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
