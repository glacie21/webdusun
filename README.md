# Cerita Sukomangun — Profil & Potensi Dusun Sukomangun

Website profil dusun yang modern, bersih, responsif, dan menyajikan storytelling kehidupan pedesaan Indonesia yang hangat. Dibuat khusus untuk memperkenalkan **Dusun Sukomangun, Desa Genito, Kecamatan Windusari, Kabupaten Magelang, Jawa Tengah**.

> **"Mengenal Sukomangun, Menjaga Cerita, Mengembangkan Potensi."**

---

## 🌾 Fitur Utama & Struktur Halaman

1. **Sticky Adaptive Navbar**:
   - Transparan dengan efek kontras lembut pada hero section, berubah menjadi latar cream dengan blur halus saat digulir (*scroll*).
   - Menu navigasi lengkap (*Beranda, Tentang, Sejarah, Potensi, Alur Ketela, Kehidupan, Fasilitas, Galeri, Lokasi*).
   - Tombol interaktif *Jelajahi Sukomangun* & menu hamburger responsif pada perangkat mobile.

2. **Hero Section (Lanskap Magelang)**:
   - Visual landscape perbukitan asri dengan tipografi serif elegan (*Playfair Display*).
   - Small badge *"DUSUN SUKOMANGUN"*, deskripsi puitis, dan indikator lokasi resmi Desa Genito, Windusari, Magelang.

3. **Tentang Sukomangun (Introduction)**:
   - Tata letak 2-kolom dengan potret kehidupan warga dan kartu interaktif modal *"Selengkapnya tentang Sukomangun"*.

4. **Informasi Ringkas (Quick Stats)**:
   - Penampilan minimalis data otentik: *01 Dusun Sukomangun, 02 RT dalam wilayah, 03 Potensi pertanian masyarakat, ∞ Cerita masyarakat yang terus berkembang*.

5. **Jejak Sejarah (Timeline)**:
   - Garis waktu horizontal (desktop) dan vertikal (mobile) yang mendokumentasikan fase perjalanan dusun dengan catatan arsip jujur tanpa mengarang data fiktif.

6. **Potensi yang Tumbuh dari Tanah Sukomangun**:
   - Kartu modern untuk **Pertanian**, **Cabai**, **Ketela**, **Peternakan**, dan **UMKM/Warung Warga** dilengkapi dengan popup modal detail interaktif.

7. **Alur Komoditas Ketela (Storytelling Visual)**:
   - Visualisasi alur 5 tahap: *Petani Sukomangun → Penampungan → Pencucian → Distribusi → Yogyakarta / Semarang*.

8. **Kehidupan yang Tumbuh Bersama (Community & Culture)**:
   - Galeri kegiatan masyarakat berdasar filter kategori (*Gotong Royong, Pertanian, Pendidikan TPQ, Pemuda Karang Taruna, Keagamaan, Sosial*).

9. **Fasilitas Penunjang Dusun**:
   - Informasi terverifikasi mengenai **TPQ Darul Huda**, **Posyandu**, **Fasilitas Umum**, **Jalan Dusun**, dan **Fasilitas Sosial**.

10. **Potret Sukomangun (Galeri Foto & Lightbox Interaktif)**:
    - Filter kategori galeri (*Semua, Masyarakat, Alam, Pertanian, Kegiatan, Fasilitas*).
    - Fitur popup Lightbox dengan navigasi *Next / Previous* dan penghitung foto.

11. **Editorial "Cerita dari Sukomangun"**:
    - 3 artikel bergaya majalah (*"Dari Tanah, Untuk Kehidupan"*, *"Gotong Royong yang Tetap Hidup"*, *"Menyimpan Cerita untuk Generasi Berikutnya"*) dengan modal membaca cerita penuh.

12. **Quote Section**:
    - Kutipan bertema kehangatan dusun dengan latar lanskap alam berbalut *deep forest green*.

13. **Temukan Sukomangun (Peta & Lokasi Administratif)**:
    - Informasi alamat lengkap dan pratinjau peta Google Maps interaktif terintegrasi tombol langsung ke aplikasi Google Maps.

14. **Call To Action & Footer**:
    - Ajakan hangat berlatar hijau hutan dan footer 3 kolom rapi dengan tautan navigasi dan hak cipta 2026.

---

## 🎨 Palet Warna & Desain

- **Primary**: Deep Forest Green (`#2F5D50`)
- **Secondary**: Sage Green (`#7A9B84`)
- **Accent**: Warm Earth (`#B8895A`)
- **Background**: Cream / Off-White (`#F7F5EF`)
- **Text**: Dark Charcoal (`#252525`)
- **Card/White**: `#FFFFFF`

---

## 📁 Struktur Data Terpisah

Seluruh data teks, foto, cerita, komoditas, fasilitas, dan narasi dipisahkan secara rapi di file:
`src/data/content.ts`

Pengurus dusun atau pengembang dapat dengan mudah memperbarui konten hanya dengan mengedit file tersebut tanpa perlu mengubah komponen antarmuka.

---

## 🚀 Menjalankan Project

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

## 🏘️ Template Website Dusun / Kelurahan

Proyek ini juga disediakan sebagai contoh template website profil dusun atau kelurahan. Konten Sukomangun yang ada saat ini dapat dijadikan referensi dan disesuaikan dengan identitas, informasi, potensi, fasilitas, serta foto dusun atau kelurahan yang akan menggunakan template ini. Sebagian besar konten dapat diperbarui melalui `src/data/content.ts`.
