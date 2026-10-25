import { ArrowUp, MapPin } from "lucide-react";
import { villageData } from "@/data/content";

// basePath diisi "/" saat Footer dipakai di luar beranda (misalnya halaman
// cerita), supaya menu "#tentang" dan lainnya mengarah ke "/#tentang".
export default function Footer({ basePath = "" }: { basePath?: string }) {
  return (
    <footer className="bg-forest-dark text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Kolom 1: Identitas Dusun */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-forest border border-white/20 text-cream-soft flex items-center justify-center font-serif text-lg font-bold">
                {villageData.identity.logoInitial}
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">
                {villageData.identity.shortName}
              </span>
            </div>
            <p className="text-sm text-white/80 font-light leading-relaxed max-w-sm">
              &ldquo;{villageData.sections.footer.tagline}&rdquo;
            </p>
            <p className="text-xs text-white/60 font-light">
              {villageData.sections.footer.description}
            </p>
          </div>

          {/* Kolom 2: Navigasi */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-serif text-base font-semibold uppercase tracking-wider text-earth-bright">
              {villageData.sections.footer.navTitle}
            </h2>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm font-light text-white/80">
              {villageData.navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={`${basePath}${item.href}`}
                    className="hover:text-cream-soft hover:underline underline-offset-4 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Lokasi Administratif */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="font-serif text-base font-semibold uppercase tracking-wider text-earth-bright">
              {villageData.sections.footer.locationTitle}
            </h2>
            <div className="space-y-1.5 text-sm font-light text-white/80">
              <div className="flex items-center gap-2 text-white font-medium">
                <MapPin className="w-4 h-4 text-earth" />
                <span>{villageData.location.dusun}</span>
              </div>
              <p className="pl-6">{villageData.location.desa}</p>
              <p className="pl-6">{villageData.location.kecamatan}</p>
              <p className="pl-6">{villageData.location.kabupaten}</p>
              <p className="pl-6">{villageData.location.provinsi}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-light">
          <p className="text-center sm:text-left">
            {villageData.sections.footer.copyright}
          </p>

          <a
            href="#hero"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors text-xs"
          >
            <span>{villageData.sections.footer.backToTopLabel}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
