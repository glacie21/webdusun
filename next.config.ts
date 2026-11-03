import type { NextConfig } from "next";

// Header keamanan dasar yang dikirim bersama setiap halaman.
// Tidak mengubah tampilan, hanya membatasi hal yang boleh dilakukan browser.
const securityHeaders = [
  // Browser tidak boleh menebak jenis file, harus sesuai yang dikirim server.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Website ini tidak boleh dimuat di dalam iframe situs lain (mencegah clickjacking).
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
  // Saat pengunjung membuka tautan ke situs lain, hanya nama domain yang ikut terkirim.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Website ini tidak memakai kamera, mikrofon, atau lokasi pengunjung.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // Selalu pakai HTTPS selama 2 tahun. Diabaikan browser saat dibuka lewat http://localhost.
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  // Sembunyikan header "X-Powered-By: Next.js".
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
