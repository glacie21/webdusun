// Garis kontur seperti pada peta ketinggian, sebagai tekstur samar di latar
// bagian berwarna gelap. Letakkan di dalam elemen induk yang memakai
// position relative, lalu atur warnanya dengan class text-*. Garis memudar
// di tepi atas dan bawah supaya tidak terpotong lurus di batas bagian.
const lines = Array.from({ length: 11 }, (_, i) => {
  const y = 14 + i * 30;
  // Setiap garis sedikit berbeda lengkungnya supaya terlihat alami.
  const a = 18 + ((i * 7) % 5) * 6;
  const b = 12 + ((i * 3) % 4) * 7;
  return `M-20,${y} C200,${y - a} 380,${y + b} 620,${y - b / 2} S1020,${y - a} 1200,${y + b / 2} S1420,${y - a / 2} 1460,${y}`;
});

export default function ContourLines({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 330"
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={`absolute inset-0 w-full h-full pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] ${className}`}
    >
      {lines.map((d) => (
        <path key={d} d={d} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}
