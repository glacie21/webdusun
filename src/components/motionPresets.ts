// Pengaturan gerak bersama. Sengaja tanpa "use client" supaya bisa dipakai
// baik oleh komponen server maupun komponen client.

// Kurva gerak: cepat di awal lalu melambat halus di akhir.
export const easeOut = [0.22, 1, 0.36, 1] as const;

// Jeda bertingkat untuk kartu dalam satu baris grid (maksimal 3 langkah,
// supaya kartu di baris bawah pada layar HP tidak menunggu terlalu lama).
export const staggerDelay = (index: number, step = 0.1) => (index % 3) * step;
