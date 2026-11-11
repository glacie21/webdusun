// Pengaturan grid kartu bersama. Sengaja tanpa "use client" supaya bisa dipakai
// baik oleh komponen server maupun komponen client.

// Class untuk kartu pertama di grid 1 kolom (HP), 2 kolom (md), dan 3 kolom (lg).
// Kartu pertama dilebarkan bila jumlah kartu menyisakan ruang kosong di baris
// terakhir. Contoh 5 kartu di grid 3 kolom: baris pertama 1 kartu lebar + 1 kartu,
// baris kedua 3 kartu. Begitu juga di grid 2 kolom pada tablet.
export function firstCardSpan(count: number) {
  const wideOnTablet = count % 2 === 1;
  const wideOnDesktop = count % 3 === 2;
  if (wideOnDesktop) return wideOnTablet ? "md:col-span-2" : "lg:col-span-2";
  return wideOnTablet ? "md:col-span-2 lg:col-span-1" : "";
}

// Ukuran gambar untuk kartu yang memakai firstCardSpan, supaya kartu lebar
// mendapat foto yang cukup tajam.
export function cardImageSizes(isWide: boolean) {
  return isWide
    ? "(max-width: 1200px) 100vw, 66vw"
    : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";
}
