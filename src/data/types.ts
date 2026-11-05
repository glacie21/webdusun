export interface VillageIdentity {
  name: string;
  shortName: string;
  subdistrict: string;
  district: string;
  regency: string;
  province: string;
  logoInitial: string;
  areaLabel: string;
  exploreLabel: string;
  tagline: string;
  shortDescription: string;
  longDescription: string[];
  subLocationText: string;
}

export interface HeroGreeting {
  fromHour: number;
  text: string;
  meaning: string;
  mood: "pagi" | "siang" | "sore" | "malam";
}

export interface QuickStat {
  number: string;
  label: string;
  description: string;
}

export interface HistoryMilestone {
  period: string;
  title: string;
  description: string;
  status: "verified" | "compiling";
}

export interface PotentialItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  shortDescription: string;
  fullDescription: string;
  highlightText: string;
  imageUrl: string;
  imageAlt: string;
}

export interface CommodityStep {
  step: number;
  title: string;
  actor: string;
  description: string;
  // Nama ikon tahap. Pilihan: Sprout, Warehouse, Droplets, Truck, Building2.
  iconName: "Sprout" | "Warehouse" | "Droplets" | "Truck" | "Building2";
  detail: string;
}

export interface CommunityLifeItem {
  id: string;
  title: string;
  category: "Pertanian" | "Gotong Royong" | "Kegiatan Pemuda" | "Pendidikan" | "Keagamaan" | "Kegiatan Sosial";
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface FacilityItem {
  id: string;
  name: string;
  category: string;
  description: string;
  statusText: string;
  locationNote?: string;
  imageUrl: string;
  imageAlt: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "Masyarakat" | "Alam" | "Pertanian" | "Kegiatan" | "Fasilitas";
  caption: string;
  imageUrl: string;
  imageAlt: string;
}

export interface EditorialStory {
  id: string;
  // Bagian akhir alamat halaman cerita, misalnya /cerita/dari-tanah-untuk-kehidupan.
  // Pakai huruf kecil dan tanda hubung, tanpa spasi.
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string[];
  imageUrl: string;
  imageAlt: string;
  date: string;
}

// Tanggal ditulis TAHUN-BULAN-HARI, misalnya "2026-11-08".
// (Dari Google Sheets, format HARI/BULAN/TAHUN seperti 08/11/2026 juga diterima.)
export interface NewsItem {
  date: string;
  title: string;
  summary: string;
  category: string;
  // Opsional: tautan ke info lengkap (Google Drive, Instagram, dan sebagainya).
  link?: string;
}

export interface AgendaItem {
  date: string;
  time: string;
  title: string;
  place: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  seller: string;
  price: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  // Nomor WhatsApp penjual (format 62...). Kosong = memakai contact.whatsapp.
  whatsapp?: string;
}

export interface VisitPackage {
  id: string;
  title: string;
  duration: string;
  description: string;
  includes: string[];
  priceNote: string;
}

export interface MapPoint {
  id: string;
  name: string;
  category: string;
  description: string;
  // Koordinat dari Google Maps, format "LINTANG,BUJUR", misalnya "-7.4321,110.1234".
  // Kosong = titik belum dipasang di peta.
  coordinates: string;
}

