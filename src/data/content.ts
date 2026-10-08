export interface VillageIdentity {
  name: string;
  shortName: string;
  subdistrict: string;
  district: string;
  regency: string;
  province: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  subLocationText: string;
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
  iconName: string;
  detail: string;
}

export interface CommunityLifeItem {
  id: string;
  title: string;
  category: "Pertanian" | "Gotong Royong" | "Kegiatan Pemuda" | "Pendidikan" | "Keagamaan" | "Kegiatan Sosial";
  description: string;
  imageUrl: string;
  imageAlt: string;
  aspect: "tall" | "wide" | "square";
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

export const villageData = {
  identity: {
    name: "Dusun Sukomangun",
    shortName: "Cerita Sukomangun",
    subdistrict: "Desa Genito",
    district: "Kecamatan Windusari",
    regency: "Kabupaten Magelang",
    province: "Jawa Tengah",
    tagline: "Mengenal Sukomangun, Menjaga Cerita, Mengembangkan Potensi.",
    shortDescription:
      "Di balik perbukitan Magelang, ada cerita yang terus hidup. Sukomangun bukan sekadar sebuah dusun, melainkan rajutan kehangatan, tradisi pertanian, dan gotong royong warga.",
    longDescription:
      "Dusun Sukomangun merupakan salah satu bagian dari Desa Genito, Kecamatan Windusari, Kabupaten Magelang. Kehidupan masyarakatnya tumbuh berdampingan dengan alam, aktivitas pertanian, gotong royong, serta berbagai kegiatan sosial yang menjadi bagian dari keseharian warga. Di balik aktivitas sehari-hari tersebut, Sukomangun memiliki potensi yang layak dikenal lebih luas, mulai dari hasil pertanian, kehidupan masyarakat, fasilitas pendidikan dan sosial, hingga cerita para warga yang menjadi bagian dari perjalanan dusun.",
    subLocationText: "Desa Genito · Kecamatan Windusari · Kabupaten Magelang",
  },

  quickStats: [
    {
      number: "01",
      label: "Dusun Sukomangun",
      description: "Wilayah pemukiman asri di lereng perbukitan Windusari, Magelang",
    },
    {
      number: "02",
      label: "RT dalam Wilayah",
      description: "Rukun Tetangga yang menjaga kerukunan dan kebersamaan warga",
    },
    {
      number: "03",
      label: "Potensi Pertanian",
      description: "Komoditas utama ketela, cabai, dan hasil bumi tanah subur",
    },
    {
      number: "∞",
      label: "Cerita Masyarakat",
      description: "Kearifan lokal dan nilai gotong royong yang terus berkembang",
    },
  ],

  historyMilestones: [
    {
      period: "Awal Mula Dusun",
      title: "Jejak Pemukiman di Perbukitan Windusari",
      description:
        "Cerita sejarah awal mula Sukomangun sedang dihimpun bersama para sesepuh dan tokoh masyarakat setempat untuk mendokumentasikan asal-usul penamaan serta generasi pertama pembuka wilayah.",
      status: "compiling",
    },
    {
      period: "Perkembangan Masyarakat",
      title: "Tumbuh Melalui Budaya Tani & Guyub Rukun",
      description:
        "Masyarakat Sukomangun secara turun-temurun mengolah lahan perbukitan yang subur, merawat mata air, dan melestarikan budaya sambatan serta gotong royong di setiap hajatan dusun.",
      status: "compiling",
    },
    {
      period: "Perkembangan Fasilitas",
      title: "Pembangunan Sarana Ibadah & Pendidikan Agama",
      description:
        "Kehadiran sarana keagamaan dan pendidikan seperti TPQ Darul Huda menjadi tonggak pembinaan generasi muda agar berakhlak mulia dan tetap mencintai tanah kelahirannya.",
      status: "compiling",
    },
    {
      period: "Kehidupan Saat Ini",
      title: "Menatap Masa Depan dengan Dokumentasi Digital",
      description:
        "Kini Sukomangun bergerak maju membuka jendela informasi digital agar potensi komoditas dan keramahan warganya dikenal luas tanpa meninggalkan akar budaya pedesaan.",
      status: "verified",
    },
  ],

  potentials: [
    {
      id: "pertanian",
      title: "Pertanian Subur",
      category: "Komoditas Pokok",
      tag: "Hasil Bumi",
      shortDescription:
        "Aktivitas pertanian menjadi denyut utama masyarakat dengan lahan terasering yang subur dan pengairan perbukitan yang terjaga.",
      fullDescription:
        "Mayoritas warga menggantungkan mata pencaharian pada sektor pertanian. Karakter tanah pegunungan yang gembur dan sejuk di kawasan Windusari menjadikan lahan di Sukomangun cocok untuk berbagai tanaman pangan dan hortikultura yang bernilai ekonomis tinggi.",
      highlightText: "Tanah gembur perbukitan dengan sistem pengairan alami pegunungan.",
      imageUrl:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Lanskap persawahan dan perbukitan hijau asri pedesaan",
    },
    {
      id: "cabai",
      title: "Komoditas Cabai",
      category: "Hortikultura",
      tag: "Komoditas Unggulan",
      shortDescription:
        "Cabai menjadi salah satu komoditas penting yang dibudidayakan warga dengan perawatan teliti di ladang lereng.",
      fullDescription:
        "Para petani Sukomangun aktif membudidayakan cabai merah dan cabai rawit. Iklim sejuk di lereng perbukitan memberikan kualitas buah yang segar dan berdaya simpan baik untuk pasar tradisional di Magelang dan sekitarnya.",
      highlightText: "Varietas unggulan dengan produktivitas tinggi dan pasokan rutin ke pasar.",
      imageUrl:
        "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Tanaman cabai merah segar di perkebunan warga",
    },
    {
      id: "ketela",
      title: "Ketela & Olahan Singkong",
      category: "Hasil Bumi Andalan",
      tag: "Komoditas Strategis",
      shortDescription:
        "Ketela memiliki alur distribusi terstruktur dari petani, tempat penampungan, hingga dikirim ke kota besar seperti Yogyakarta dan Semarang.",
      fullDescription:
        "Ketela menjadi salah satu tulang punggung ekonomi dusun. Mulai dari penanaman, pemanenan serentak, penampungan di tingkat lokal dusun, hingga proses pencucian bersih sebelum didistribusikan ke industri pangan dan pasar luar kota.",
      highlightText: "Memiliki rantai pasok terhubung langsung ke industri olahan kota besar.",
      imageUrl:
        "https://images.unsplash.com/photo-1592417817098-8f3d69109853?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Hasil panen ketela segar berkualitas dari kebun warga",
    },
    {
      id: "peternakan",
      title: "Peternakan Rakyat",
      category: "Penghasilan Tambahan",
      tag: "Sektor Pendukung",
      shortDescription:
        "Sebagian warga memelihara ternak seperti kambing dan sapi sebagai tabungan keluarga dan sumber pupuk kandang alami.",
      fullDescription:
        "Sektor peternakan rakyat dijalankan secara terintegrasi dengan pertanian. Pakan hijauan segar melimpah di tepi ladang, sementara kotoran ternak diolah kembali menjadi pupuk organik penyubur tanah kebun.",
      highlightText: "Sinergi alami antara peternakan rakyat dan pertanian ramah lingkungan.",
      imageUrl:
        "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Kambing dan sapi ternak di pemukiman pedesaan",
    },
    {
      id: "umkm",
      title: "UMKM & Warung Warga",
      category: "Ekonomi Mikro",
      tag: "Kemandirian Warga",
      shortDescription:
        "Warung kelontong dan usaha rumahan menjadi simpul pemenuhan kebutuhan harian dan ruang silaturahmi antarwarga.",
      fullDescription:
        "Aktivitas ekonomi lokal ditopang oleh warung-warung dusun yang menyediakan kebutuhan sembako, jajanan tradisional, hingga pulsa. Keberadaan warung juga berfungsi sebagai ruang sosial tempat bertukar kabar antartetangga.",
      highlightText: "Menjaga perputaran ekonomi lokal di dalam lingkungan dusun.",
      imageUrl:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Aktivitas warung lokal dan usaha rumahan masyarakat",
    },
  ],

  commodityFlow: [
    {
      step: 1,
      title: "Petani Sukomangun",
      actor: "Petani Lokal",
      description: "Budidaya ketela di lahan lereng perbukitan dan panen saat usia optimal umbi.",
      iconName: "Sprout",
      detail: "Tanah gembur menghasilkan ketela dengan tekstur empuk dan serat halus.",
    },
    {
      step: 2,
      title: "Penampungan",
      actor: "Pengepul Dusun",
      description: "Pengumpulan hasil panen dari kebun petani ke titik pos penampungan warga.",
      iconName: "Warehouse",
      detail: "Sortir awal kualitas umbi dan penimbangan transparan bersama warga.",
    },
    {
      step: 3,
      title: "Pencucian",
      actor: "Tenaga Kerja Warga",
      description: "Pembersihan tanah yang menempel menggunakan air pegunungan yang melimpah.",
      iconName: "Droplets",
      detail: "Proses higienis memastikan komoditas bersih dan siap olah industri.",
    },
    {
      step: 4,
      title: "Distribusi",
      actor: "Armada Angkut",
      description: "Pemuatan ke armada truk pengangkut dari Dusun Sukomangun menuju jalur utama.",
      iconName: "Truck",
      detail: "Jadwal pengiriman teratur menjaga kesegaran produk saat tiba di tujuan.",
    },
    {
      step: 5,
      title: "Yogyakarta / Semarang",
      actor: "Pasar & Industri Olahan",
      description: "Diterima oleh sentra pasar induk, pabrik camilan, dan produsen olahan singkong.",
      iconName: "Building2",
      detail: "Menyuplai kebutuhan pangan kota besar dan industri kuliner khas daerah.",
    },
  ],

  communityLife: [
    {
      id: "comm-1",
      title: "Semangat Sambatan & Gotong Royong",
      category: "Gotong Royong",
      description: "Tradisi saling membantu saat perbaikan jalan lingkungan, bedah rumah, maupun persiapan acara warga.",
      imageUrl:
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Warga pedesaan bersama-sama bergotong royong",
      aspect: "wide",
    },
    {
      id: "comm-2",
      title: "Keseharian Petani di Lereng Bukit",
      category: "Pertanian",
      description: "Sejak fajar menyingsing, para petani melangkah ke kebun dengan ketekunan merawat tanaman pangan.",
      imageUrl:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Petani pedesaan di sawah pada pagi hari",
      aspect: "tall",
    },
    {
      id: "comm-3",
      title: "Generasi Penerus Belajar Mengaji",
      category: "Pendidikan",
      description: "Suara riang anak-anak saat sore hari melangkahkan kaki menuju TPQ untuk belajar membaca Al-Qur'an.",
      imageUrl:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Anak-anak belajar dan menimba ilmu di lingkungan asri",
      aspect: "square",
    },
    {
      id: "comm-4",
      title: "Semangat Guyub Pemuda Dusun",
      category: "Kegiatan Pemuda",
      description: "Karang taruna dan pemuda dusun aktif menggerakkan kegiatan olahraga, seni, dan kepedulian lingkungan.",
      imageUrl:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Pemuda-pemudi berkumpul berdiskusi dan berkegiatan",
      aspect: "square",
    },
    {
      id: "comm-5",
      title: "Majelis Keagamaan & Silaturahmi",
      category: "Keagamaan",
      description: "Pengajian rutin dan peringatan hari besar keagamaan mempererat tali persaudaraan antarwarga.",
      imageUrl:
        "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Aktivitas silaturahmi keagamaan warga di masjid dusun",
      aspect: "wide",
    },
    {
      id: "comm-6",
      title: "Kegiatan Sosial & Kehangatan Ibu-Ibu PKK",
      category: "Kegiatan Sosial",
      description: "Pertemuan rutin kelompok dasawisma dan PKK untuk arisan, posyandu, dan pembinaan gizi keluarga.",
      imageUrl:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Ibu-ibu warga berkumpul dalam kegiatan sosial kemasyarakatan",
      aspect: "tall",
    },
  ] as CommunityLifeItem[],

  // Untuk mengganti foto fasilitas, ubah nilai imageUrl dan sesuaikan imageAlt pada setiap item.
  facilities: [
    {
      id: "fac-1",
      name: "TPQ Darul Huda",
      category: "Pendidikan & Keagamaan",
      description:
        "Wadah pendidikan Al-Qur'an dan akhlak bagi putra-putri Dusun Sukomangun dalam suasana kekeluargaan.",
      statusText: "Aktif melayani pembelajaran sore",
      locationNote: "Wilayah Dusun Sukomangun",
      imageUrl:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Sarana belajar TPQ anak-anak",
    },
    {
      id: "fac-2",
      name: "Posyandu Dusun",
      category: "Kesehatan Warga",
      description:
        "Layanan kesehatan berkala bagi balita, ibu hamil, serta lansia bersama bidan desa dan kader sukarela.",
      statusText: "Jadwal rutin bulanan",
      locationNote: "Pos Kesehatan Dusun",
      imageUrl:
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Aktivitas pelayanan kesehatan posyandu",
    },
    {
      id: "fac-3",
      name: "Fasilitas Umum & Pertemuan Warga",
      category: "Sarana Kemasyarakatan",
      description:
        "Ruang serbaguna dan tempat musyawarah untuk rembug warga, rapat RT, serta kegiatan sosial dusun.",
      statusText: "Digunakan bersama oleh warga",
      locationNote: "Titik kumpul warga Sukomangun",
      imageUrl:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Ruang pertemuan dan fasilitas bersama warga",
    },
    {
      id: "fac-4",
      name: "Jalan & Lingkungan Dusun",
      category: "Infrastruktur Lingkungan",
      description:
        "Akses jalan desa yang menghubungkan Sukomangun dengan pusat Desa Genito dan jalur penghubung Windusari.",
      statusText: "Terpelihara melalui gotong royong",
      locationNote: "Jalur utama dan jalan setapak dusun",
      imageUrl:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Akses jalan asri berpagar hijau di pedesaan",
    },
    {
      id: "fac-5",
      name: "Fasilitas Sosial Masyarakat",
      category: "Pelayanan Sosial",
      description:
        "Sarana inventaris dusun berupa peralatan tenda, perlengkapan masak bersama, dan kebutuhan hajatan warga.",
      statusText: "Dikelola pengurus RT",
      locationNote: "Gudang inventaris sosial dusun",
      imageUrl:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Sarana sosial dan perlengkapan kebersamaan warga",
    },
  ],

  gallery: [
    {
      id: "gal-1",
      title: "Kabut Pagi di Perbukitan Windusari",
      category: "Alam",
      caption: "Udara sejuk menyapa Dusun Sukomangun saat matahari baru terbit di balik perbukitan Magelang.",
      imageUrl:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Kabut pagi pegunungan dan panorama alam hijau",
    },
    {
      id: "gal-2",
      title: "Senyum Hangat Petani Sukomangun",
      category: "Masyarakat",
      caption: "Keramahan masyarakat desa yang selalu menyambut setiap tamu dengan sapaan hangat dan tulus.",
      imageUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Potret wajah warga desa dengan senyuman ramah",
    },
    {
      id: "gal-3",
      title: "Hamparan Lahan Pertanian Terasering",
      category: "Pertanian",
      caption: "Kearifan lokal petani dalam mengelola kemiringan lereng menjadi lahan produktif berkelanjutan.",
      imageUrl:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Sawah dan kebun terasering hijau subur",
    },
    {
      id: "gal-4",
      title: "Kegembiraan Santri di TPQ Darul Huda",
      category: "Kegiatan",
      caption: "Semangat generasi cilik Sukomangun memperdalam ilmu agama dan budi pekerti luhur.",
      imageUrl:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Anak-anak belajar bersama di TPQ",
    },
    {
      id: "gal-5",
      title: "Kebersamaan Kerja Bakti Lingkungan",
      category: "Masyarakat",
      caption: "Bahu membahu membersihkan saluran air dan merapikan pagar tanaman di sepanjang jalan dusun.",
      imageUrl:
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Warga berkumpul bekerja bakti di lingkungan dusun",
    },
    {
      id: "gal-6",
      title: "Tanaman Cabai Menjelang Masa Panen",
      category: "Pertanian",
      caption: "Buah cabai memerah di dahan, pertanda saat panen telah tiba bagi para petani hortikultura.",
      imageUrl:
        "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Cabai merah lebat di kebun lereng perbukitan",
    },
    {
      id: "gal-7",
      title: "Ruang Belajar dan Beribadah Warga",
      category: "Fasilitas",
      caption: "Kondisi bangunan TPQ dan tempat ibadah yang senantiasa dirawat kebersihannya oleh warga.",
      imageUrl:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Fasilitas pendidikan agama dan ruang serbaguna dusun",
    },
    {
      id: "gal-8",
      title: "Hasil Panen Ketela Segar Siap Kirim",
      category: "Pertanian",
      caption: "Ketela pilihan yang telah dibersihkan siap dimuat menuju sentra pengolahan di Yogyakarta dan Semarang.",
      imageUrl:
        "https://images.unsplash.com/photo-1592417817098-8f3d69109853?auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Ketela singkong bersih berjejer rapi di penampungan",
    },
  ] as GalleryPhoto[],

  editorialStories: [
    {
      id: "cerita-1",
      title: "Dari Tanah, Untuk Kehidupan",
      subtitle: "Ketekunan Petani Sukomangun Menjaga Denyut Pangan",
      author: "Dokumentasi Cerita Sukomangun",
      readTime: "4 menit baca",
      date: "September 2026",
      excerpt:
        "Melihat bagaimana tanah perbukitan Windusari dirawat dengan cinta, menghasilkan cabai dan ketela yang melintasi batas kota hingga ke meja makan keluarga perkotaan.",
      content: [
        "Fajar belum sepenuhnya merekah di langit timur Magelang ketika derap langkah para petani Sukomangun mulai terdengar di jalan setapak bebatuan. Membawa cangkul dan caping sederhana, mereka menuju lereng-lereng perbukitan yang diselimuti halimun tipis.",
        "Bagi masyarakat Sukomangun, tanah bukan semata-mata faktor produksi ekonomi. Tanah adalah titipan leluhur yang harus dirawat dengan penuh kehormatan. Sistem penanaman tumpang sari antara cabai, ketela, dan sayuran semusim lainnya dipraktikkan secara bijak demi menjaga keseimbangan hara alami tanah.",
        "Ketika musim panen ketela tiba, suasana dusun kian bergairah. Umbi-umbi berukuran besar diangkat dari tanah gembur, dikumpulkan di titik penampungan, lalu dibersihkan dengan air mengalir sebelum dijemput armada pengangkut menuju Yogyakarta dan Semarang.",
        "Setiap gigitan camilan olahan singkong di perkotaan bermula dari tetesan keringat jujur dan doa petani di perbukitan Sukomangun.",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Pemandangan sawah dan petani di pedesaan",
    },
    {
      id: "cerita-2",
      title: "Gotong Royong yang Tetap Hidup",
      subtitle: "Merawat Nilai Sambatan di Tengah Laju Zaman",
      author: "Dokumentasi Cerita Sukomangun",
      readTime: "3 menit baca",
      date: "September 2026",
      excerpt:
        "Di era serba individualis, Dusun Sukomangun membuktikan bahwa rasa kekeluargaan dan saling bantu antartetangga tetap menjadi fondasi paling kokoh dalam kehidupan bermasyarakat.",
      content: [
        "Di Dusun Sukomangun, tidak ada istilah warga yang menanggung beban sendirian. Ketika ada salah satu warga yang hendak mendirikan rumah atau membetulkan atap yang bocor, tanpa perlu diundang secara formal warga sekitar akan datang membawa tenaga, kopi hangat, dan kudapan sederhana.",
        "Istilah 'sambatan' bukan sekadar kata dalam kamus bahasa Jawa, melainkan laku hidup harian. Hubungan antarwarga tidak dihitung dengan nominal uang, melainkan diikat oleh kesadaran bahwa hidup bertetangga adalah saling melengkapi dan menguatkan.",
        "Pertemuan malam selapanan, kerja bakti membersihkan saluran irigasi, serta kehadiran ibu-ibu di dapur umum saat hajatan menunjukkan bahwa Sukomangun tetap merawat jiwa sejati pedesaan Indonesia.",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Gotong royong warga pedesaan",
    },
    {
      id: "cerita-3",
      title: "Menyimpan Cerita untuk Generasi Berikutnya",
      subtitle: "Pentingnya Jejak Digital dan Kearsipan Warga Dusun",
      author: "Dokumentasi Cerita Sukomangun",
      readTime: "4 menit baca",
      date: "September 2026",
      excerpt:
        "Website 'Cerita Sukomangun' hadir bukan hanya sebagai etalase, tetapi wadah arsip hidup agar anak-cucu dusun tahu asal-usul tanah tempat mereka dilahirkan.",
      content: [
        "Seringkali kekayaan cerita sebuah dusun lenyap ditelan waktu karena hanya tersimpan dalam ingatan lisan para sesepuh. Ketika generasi berganti, detail perjuangan dan kearifan masa lalu perlahan memudar.",
        "Inisiatif menghadirkan media digital 'Cerita Sukomangun' lahir dari kerinduan untuk mencatat apa yang ada hari ini: nama-nama fasilitas, alur kerja petani, tawa anak-anak di TPQ, hingga pesona lanskap yang menyelimuti permukiman.",
        "Dengan dokumentasi terbuka ini, pemuda yang merantau ke luar kota tetap memiliki jangkar pengingat kampung halaman, sementara masyarakat luas dapat mengenal lebih dekat potensi yang tersimpan di kaki perbukitan Windusari.",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Pendidikan anak-anak dan generasi penerus dusun",
    },
  ] as EditorialStory[],

  quote: {
    text: "Sebuah dusun bukan hanya tentang tempat tinggal, tetapi tentang orang-orang dan cerita yang membuatnya terasa seperti rumah.",
    source: "Kearifan Masyarakat Dusun Sukomangun",
    location: "Windusari, Magelang",
  },

  location: {
    dusun: "Dusun Sukomangun",
    desa: "Desa Genito",
    kecamatan: "Kecamatan Windusari",
    kabupaten: "Kabupaten Magelang",
    provinsi: "Jawa Tengah",
    mapsSearchUrl:
      "https://www.google.com/maps/search/?api=1&query=Dusun+Sukomangun+Genito+Windusari+Magelang",
    embedPlaceholderNote:
      "Area peta Dusun Sukomangun, Desa Genito, Kec. Windusari, Kab. Magelang, Jawa Tengah. Koordinat presisi dapat disematkan sesuai titik GPS resmi pemerintahan desa.",
    approxCoordinates: {
      label: "Kawasan Windusari, Magelang",
      latText: "-7.43 (Kawasan Windusari)",
      longText: "110.15 (Kawasan Magelang)",
    },
  },
};
