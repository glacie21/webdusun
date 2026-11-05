import { villageData } from "@/data/content";

const { identity } = villageData;

const styles = {
  // Di atas foto atau latar gelap.
  glass: {
    mark: "bg-white/20 backdrop-blur-md text-white border border-white/30 group-hover:bg-white/30",
    name: "text-white",
    label: "text-white/80",
  },
  // Di atas latar terang (navbar setelah halaman digulir).
  solid: {
    mark: "bg-forest text-cream group-hover:bg-forest-dark",
    name: "text-charcoal",
    label: "text-sage-dark",
  },
};

// Logo website: kotak huruf awal, nama, dan keterangan wilayah.
// Letakkan di dalam tautan yang memakai class "group" supaya efek hover-nya jalan.
export default function SiteLogo({ variant = "glass" }: Readonly<{ variant?: keyof typeof styles }>) {
  const style = styles[variant];
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`w-9 h-9 rounded-xl flex items-center justify-center font-serif text-lg font-bold shadow-sm transition-all ${style.mark}`}
      >
        {identity.logoInitial}
      </span>
      <span className="flex flex-col">
        <span
          className={`font-serif text-lg md:text-xl font-bold tracking-tight whitespace-nowrap transition-colors ${style.name}`}
        >
          {identity.shortName}
        </span>
        <span className={`text-[10px] tracking-widest uppercase font-medium transition-colors ${style.label}`}>
          {identity.areaLabel}
        </span>
      </span>
    </span>
  );
}
