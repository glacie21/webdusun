import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Statistics from "@/components/sections/Statistics";
import History from "@/components/sections/History";
import Potentials from "@/components/sections/Potentials";
import CommodityFlow from "@/components/sections/CommodityFlow";
import Products from "@/components/sections/Products";
import Community from "@/components/sections/Community";
import NewsAgenda from "@/components/sections/NewsAgenda";
import Facilities from "@/components/sections/Facilities";
import Gallery from "@/components/sections/Gallery";
import FeaturedStories from "@/components/sections/FeaturedStories";
import QuoteSection from "@/components/sections/QuoteSection";
import VisitPackages from "@/components/sections/VisitPackages";
import MapSection from "@/components/sections/MapSection";
import CtaSection from "@/components/sections/CtaSection";
import HillDivider from "@/components/decor/HillDivider";
import Marquee from "@/components/decor/Marquee";
import JsonLd from "@/components/ui/JsonLd";
import { homeJsonLd } from "@/lib/seo";

// Kabar, agenda, dan produk dari Google Sheets disegarkan paling lama setiap jam,
// dan agenda yang sudah lewat otomatis berpindah dari daftar "Agenda Mendatang".
export const revalidate = 3600;

// Urutan bagian beranda. Siluet bukit (HillDivider) menjadi peralihan
// ke dan dari bagian yang berlatar gelap.
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal">
      <JsonLd data={homeJsonLd} />
      <Navbar />

      <main id="konten" tabIndex={-1} className="flex-grow focus:outline-none">
        <Hero />
        <About />

        <HillDivider className="bg-cream text-forest" />
        <Statistics />
        <HillDivider className="bg-forest text-cream-soft" variant="rolling" flip />

        <History />
        <Marquee />
        <Potentials />
        <CommodityFlow />
        <Products />
        <Community />
        <NewsAgenda />
        <Facilities />

        <HillDivider className="bg-cream-soft text-forest-dark" flip />
        <Gallery />
        <HillDivider className="bg-forest-dark text-cream-soft" variant="rolling" />

        <FeaturedStories />
        <QuoteSection />
        <VisitPackages />
        <MapSection />
        <CtaSection />
        <HillDivider className="bg-forest text-forest-dark" variant="rolling" flip />
      </main>

      <Footer />
    </div>
  );
}
