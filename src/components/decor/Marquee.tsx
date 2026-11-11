import { Leaf } from "lucide-react";
import { villageData } from "@/data/content";

// Pita kata yang berjalan pelan, berisi hal-hal yang menjadi ciri Sukomangun.
// Daftar katanya diatur di villageData.sections.marquee pada content.ts.
// Hanya hiasan: semua kata ini sudah ada di bagian lain halaman, jadi pita
// disembunyikan dari pembaca layar.
export default function Marquee() {
  const { items } = villageData.sections.marquee;

  const renderItems = (copy: number) =>
    items.map((item) => (
      <li key={`${copy}-${item}`} className="flex items-center gap-6 sm:gap-8 pr-6 sm:pr-8">
        <span className="font-serif italic text-xl sm:text-2xl md:text-3xl whitespace-nowrap">{item}</span>
        <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-earth shrink-0" />
      </li>
    ));

  return (
    <div aria-hidden="true" className="bg-cream py-6 sm:py-8 overflow-hidden">
      {/* Pita sedikit dimiringkan dan dilebarkan supaya ujungnya tidak terlihat */}
      <div className="bg-forest text-cream-soft -rotate-[1.5deg] w-[104%] -ml-[2%] py-4 sm:py-5 shadow-lg">
        {/* Berhenti saat disorot mouse supaya katanya bisa dibaca */}
        <ul className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {renderItems(1)}
          {renderItems(2)}
        </ul>
      </div>
    </div>
  );
}
