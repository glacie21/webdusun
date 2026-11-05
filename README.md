# Cerita Sukomangun — Profil & Potensi Dusun Sukomangun

Website profil dusun yang modern, bersih, responsif, dan menyajikan storytelling kehidupan pedesaan Sukomangun. Dibuat khusus untuk memperkenalkan **Dusun Sukomangun, Desa Genito, Kecamatan Windusari, Kabupaten Magelang, Jawa Tengah**.

> **"Mengenal Sukomangun, Menjaga Cerita, Mengembangkan Potensi."**

---

## Fitur Utama & Struktur Halaman

1. **Sticky Adaptive Navbar**:
   - Transparan dengan efek kontras lembut pada hero section, berubah menjadi latar cream dengan blur halus saat digulir (*scroll*).
   - Menu navigasi lengkap (*Beranda, Tentang, Sejarah, Potensi, Alur Ketela, Kehidupan, Fasilitas, Galeri, Cerita, Lokasi*).
   - Tombol interaktif *Jelajahi Sukomangun* & menu hamburger responsif pada perangkat mobile.

2. **Hero Section (Lanskap Magelang)**:
   - Visual landscape perbukitan asri dengan tipografi serif elegan (*Playfair Display*).
   - Small badge *"DUSUN SUKOMANGUN"*, deskripsi puitis, dan indikator lokasi resmi Desa Genito, Windusari, Magelang.

3. **Tentang Sukomangun (Introduction)**:
   - Tata letak 2-kolom dengan potret kehidupan warga dan kartu interaktif modal *"Selengkapnya tentang Sukomangun"*.

4. **Informasi Ringkas (Quick Stats)**:
   - Penampilan minimalis data profil dusun: *01 Dusun Sukomangun, 02 RT dalam wilayah, 05 Potensi unggulan dusun, ∞ Cerita masyarakat yang terus berkembang*.

5. **Jejak Sejarah (Timeline)**:
   - Garis waktu horizontal (desktop) dan vertikal (mobile) yang mendokumentasikan fase perjalanan dusun dengan catatan arsip jujur tanpa mengarang data fiktif.

6. **Potensi yang Tumbuh dari Tanah Sukomangun**:
   - Kartu modern untuk **Pertanian**, **Cabai**, **Ketela**, **Peternakan**, dan **UMKM/Warung Warga** dilengkapi dengan popup modal detail interaktif.

7. **Alur Komoditas Ketela (Storytelling Visual)**:
   - Visualisasi alur 5 tahap: *Petani Sukomangun → Penampungan → Pencucian → Distribusi → Yogyakarta / Semarang*.

8. **Kehidupan yang Tumbuh Bersama (Community & Culture)**:
   - Galeri kegiatan masyarakat berdasar filter kategori (*Gotong Royong, Pertanian, Pendidikan TPQ, Pemuda Karang Taruna, Keagamaan, Sosial*).

9. **Fasilitas Penunjang Dusun**:
   - Informasi mengenai **TPQ Darul Huda**, **Posyandu**, **Fasilitas Umum**, **Jalan Dusun**, dan **Fasilitas Sosial**.

10. **Potret Sukomangun (Galeri Foto & Lightbox Interaktif)**:
    - Filter kategori galeri (*Semua, Masyarakat, Alam, Pertanian, Kegiatan, Fasilitas*).
    - Fitur popup Lightbox dengan navigasi *Next / Previous* dan penghitung foto.

11. **Editorial "Cerita dari Sukomangun"**:
    - 3 artikel bergaya majalah (*"Dari Tanah, Untuk Kehidupan"*, *"Gotong Royong yang Tetap Hidup"*, *"Menyimpan Cerita untuk Generasi Berikutnya"*) yang masing-masing punya halaman baca sendiri (`/cerita/nama-cerita`) lengkap dengan gambar pratinjau tautan.

12. **Quote Section**:
    - Kutipan bertema kehangatan dusun dengan latar lanskap alam berbalut *deep forest green*.

13. **Temukan Sukomangun (Peta & Lokasi Administratif)**:
    - Informasi alamat lengkap dan pratinjau peta Google Maps interaktif terintegrasi tombol langsung ke aplikasi Google Maps.

14. **Call To Action & Footer**:
    - Ajakan hangat berlatar hijau hutan dan footer 3 kolom rapi dengan tautan navigasi dan tahun hak cipta yang berganti otomatis.

15. **Etalase Produk Warga** (`#produk`): kartu produk dengan tombol *Pesan via WhatsApp* yang membuka obrolan dengan pesan terisi otomatis.

16. **Kabar & Agenda** (`#kabar` dan halaman `/kabar`): kabar terbaru dan agenda kegiatan. Agenda yang sudah lewat otomatis pindah ke daftar "Agenda yang Sudah Lewat".

17. **Paket Kunjungan** (`#kunjungan`): paket wisata edukasi dengan tombol *Tanyakan Jadwal* via WhatsApp.

18. **Ajakan Kirim Cerita**: kotak di bawah bagian Cerita yang mengarah ke Google Form (`contact.storyFormUrl`).

19. **Titik Penting di Peta**: tombol TPQ, Posyandu, dan lainnya di bawah peta. Peta pindah ke titik yang dipilih jika koordinatnya sudah diisi di `mapPoints`.

20. **Tombol Bagikan** di halaman cerita: WhatsApp, salin tautan, dan menu bagikan bawaan HP.

21. **Statistik Pengunjung**: Vercel Web Analytics (tanpa cookie). Aktifkan di dashboard Vercel: buka project → tab **Analytics** → **Enable**.

22. **Halaman Pendukung**:
    - Halaman 404 (alamat tidak ditemukan) dan halaman kesalahan dengan tombol *Coba Lagi*. Teksnya diatur di `sections.notFound` dan `sections.error`.
    - Tautan *Lewati ke konten utama* untuk pengguna keyboard (muncul saat menekan Tab pertama kali).
    - Ikon untuk layar utama HP (`src/app/icon.svg` dan `src/app/apple-icon.tsx`) serta manifest (`src/app/manifest.ts`).

---

## Palet Warna & Desain

Warna didefinisikan sekali sebagai token tema di `src/app/globals.css`, lalu dipakai di komponen dengan nama class Tailwind (misalnya `bg-forest`, `text-charcoal`). Untuk mengganti warna di seluruh website, cukup ubah nilai di `globals.css`.

| Token | Warna | Kegunaan |
| --- | --- | --- |
| `forest` | `#2F5D50` | Warna utama (Deep Forest Green) |
| `forest-dark` | `#1E3D34` | Footer, efek hover |
| `sage` | `#7A9B84` | Ikon dan dekorasi |
| `sage-dark` | `#55755F` | Teks kecil berwarna hijau |
| `earth` | `#B8895A` | Ikon dan dekorasi (Warm Earth) |
| `earth-dark` | `#8A6440` | Teks kecil berwarna coklat di latar terang |
| `earth-bright` | `#E3C49F` | Teks coklat di latar hijau tua atau gelap |
| `cream` | `#F7F5EF` | Latar halaman |
| `charcoal` | `#252525` | Teks utama |
| `charcoal-muted` | `#595959` | Teks paragraf |
| `sand` | `#E3DDD0` | Garis tepi kartu |

`sage` dan `earth` terlalu terang untuk dipakai sebagai teks (kontrasnya di bawah standar WCAG 4,5:1). Untuk teks, pakai varian `-dark` atau `-bright`.

Beberapa warna juga ditulis dalam kode hex di `src/lib/theme.ts`, untuk bagian yang tidak bisa memakai class Tailwind (gambar pratinjau tautan, ikon HP, manifest). Jika mengganti warna di `globals.css`, samakan juga di sana.

---

## Struktur Folder

```
src/
├── app/                 Halaman dan alamatnya (/, /kabar, /cerita/..., 404, error)
├── components/
│   ├── layout/          Navbar, Footer, baris atas halaman, tautan lewati
│   ├── sections/        Bagian-bagian beranda (Hero, Tentang, Potensi, Galeri, ...)
│   ├── ui/              Komponen kecil yang dipakai ulang (judul bagian, modal,
│   │                    tombol filter, tombol WhatsApp, logo, kartu kabar, ...)
│   ├── motion/          Animasi (Reveal, hitung naik, parallax, smooth scroll)
│   └── decor/           Hiasan (siluet bukit, garis kontur, pita kata berjalan)
├── data/
│   ├── content.ts       SEMUA teks, foto, dan angka website, ubah di sini
│   ├── types.ts         Bentuk data untuk content.ts
│   └── liveData.ts      Kabar, agenda, dan produk dari Google Sheets
├── lib/                 Fungsi bantu (tanggal, CSV, WhatsApp, SEO, warna, gambar pratinjau)
└── assets/fonts/        Huruf untuk gambar pratinjau tautan
```

---

## Struktur Data Terpisah

Seluruh data teks, foto, cerita, komoditas, fasilitas, dan narasi dipisahkan secara rapi di file:
`src/data/content.ts`

Pengurus dusun atau pengembang dapat dengan mudah memperbarui konten hanya dengan mengedit file tersebut tanpa perlu mengubah komponen antarmuka. Bagian penting di dalamnya:

- `site`: judul, deskripsi, domain, dan gambar pratinjau untuk Google serta WhatsApp/media sosial.
- `navLinks`: menu navigasi yang dipakai Navbar dan Footer.
- `identity` dan `sections`: teks serta foto untuk setiap bagian halaman.
- `sections.hero.greetings`: sapaan bahasa Jawa di Hero (*Sugeng enjang*, *Sugeng siang*, dan seterusnya) yang berganti sesuai jam di Sukomangun (WIB). Warna suasana foto Hero ikut berganti.
- `sections.marquee`: kata-kata pada pita berjalan di antara bagian Sejarah dan Potensi.
- `location`: alamat dan tautan Google Maps.

---

## Mengganti Foto dengan Foto Asli

Saat ini semua foto masih foto ilustrasi dari Unsplash. Untuk menggantinya:

1. Simpan foto asli di folder `public/foto/`, misalnya `public/foto/panen-ketela.jpg`. Gunakan nama file huruf kecil tanpa spasi.
2. Di `src/data/content.ts`, ganti `imageUrl` foto yang bersangkutan menjadi `"/foto/panen-ketela.jpg"`.
3. Sesuaikan juga `imageAlt` (deskripsi foto untuk pembaca layar) dan keterangan fotonya.
4. Setelah semua foto diganti, hapus atau ubah `sections.gallery.photoNote`, yaitu catatan "foto masih ilustrasi" di bagian Galeri.

Usahakan ukuran foto tidak lebih dari sekitar 2000 piksel di sisi terpanjang supaya halaman tetap cepat dimuat.

---

## Mengisi Kabar, Agenda, dan Produk dari Google Sheets

Kabar, agenda, dan produk bisa diperbarui pengurus dusun dari HP lewat Google Sheets, tanpa mengubah kode. Selama tautannya belum diisi, website menampilkan data contoh dari `content.ts` beserta catatan "Contoh tampilan".

1. Buat satu Google Sheets dengan tiga tab (lembar): **Kabar**, **Agenda**, dan **Produk**.
2. Isi baris pertama setiap tab dengan judul kolom berikut (huruf besar/kecil bebas):

   | Tab | Judul kolom |
   | --- | --- |
   | Kabar | `tanggal`, `judul`, `ringkasan`, `kategori`, `tautan` (opsional) |
   | Agenda | `tanggal`, `waktu`, `kegiatan`, `tempat` |
   | Produk | `nama`, `kategori`, `penjual`, `harga`, `deskripsi`, `foto` (opsional), `keterangan foto`, `whatsapp` (opsional) |

   Tanggal boleh ditulis `08/11/2026` atau `2026-11-08`. Nomor WhatsApp boleh ditulis `0812...`, nanti diubah otomatis ke format `62...`. Jika kolom `whatsapp` produk kosong, dipakai `contact.whatsapp`.
3. Buka menu **File → Bagikan → Publikasikan ke web**. Pilih tab **Kabar**, format **Nilai yang dipisahkan koma (.csv)**, lalu klik **Publikasikan**. Salin tautannya.
4. Ulangi untuk tab Agenda dan Produk.
5. Tempel ketiga tautan itu ke `sheets.newsCsvUrl`, `sheets.agendaCsvUrl`, dan `sheets.productsCsvUrl` di `src/data/content.ts`.

Setelah itu, perubahan di Google Sheets muncul di website dalam waktu paling lama sekitar satu jam, tanpa perlu deploy ulang. Data yang dipublikasikan bisa dibaca siapa saja, jadi jangan menaruh data pribadi warga di tabel ini.

Kalau nomor `contact.whatsapp` masih kosong, tombol pesan produk dan tombol paket kunjungan tampil sebagai "menyusul". Setelah paket kunjungan disepakati warga, kosongkan `sections.visit.sampleNote` supaya catatan "Contoh paket" hilang.

---

## Data yang Perlu Dikonfirmasi

Sebelum website diumumkan, mintalah pengurus dusun atau warga memeriksa:

- Jumlah RT (saat ini tertulis "02 RT").
- Tujuan distribusi ketela (Yogyakarta/Semarang) dan klaim tentang varietas serta proses penimbangan.
- Nama dan detail fasilitas (TPQ, Posyandu, dan lainnya).
- Titik lokasi peta. Saat ini peta menunjuk ke Desa Genito secara umum. Kalau titik Dusun Sukomangun sudah diketahui, ganti `location.mapsEmbedUrl` dan `location.mapsSearchUrl` di `content.ts` dengan koordinatnya. Format embed-nya `https://maps.google.com/maps?q=LINTANG,BUJUR&z=16&output=embed`, dengan LINTANG dan BUJUR diganti angka koordinat dari Google Maps.

---

## Menjalankan Project

```bash
# Menjalankan development server
npm run dev

# Membangun versi produksi
npm run build

# Menjalankan server produksi
npm run start
```

Akses website secara lokal di browser melalui: `http://localhost:3000`

---

## Deploy (Memasang Website Online)

Cara termudah adalah dengan [Vercel](https://vercel.com):

1. Masuk ke Vercel menggunakan akun GitHub.
2. Pilih **Add New → Project**, lalu pilih repository ini.
3. Biarkan pengaturan bawaan (Framework: Next.js), lalu klik **Deploy**.
4. Setelah selesai, Vercel memberi alamat seperti `nama-project.vercel.app`. Setiap kali ada perubahan di-merge ke branch `main`, website diperbarui otomatis.

Setelah domain final diketahui (alamat Vercel atau domain sendiri seperti `.desa.id`), ganti `site.url` di `src/data/content.ts`. Alamat ini dipakai untuk pratinjau tautan, `robots.txt`, dan `sitemap.xml`.

---

## Template Website Dusun / Kelurahan

Proyek ini juga disediakan sebagai contoh template website profil dusun atau kelurahan. Konten Sukomangun yang ada saat ini dapat dijadikan referensi dan disesuaikan dengan identitas, informasi, potensi, fasilitas, serta foto dusun atau kelurahan yang akan menggunakan template ini.
