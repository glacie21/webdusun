"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { villageData } from "@/data/content";

const { location, mapPoints } = villageData;
const { map } = villageData.sections;

// Peta Google Maps dengan pilihan titik penting (villageData.mapPoints).
// Memilih titik yang sudah berkoordinat akan memindahkan peta ke titik itu.
export default function MapViewer() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = mapPoints.find((point) => point.id === selectedId) ?? null;

  const coordinates = selected?.coordinates.replace(/\s/g, "");
  const embedUrl = coordinates
    ? `https://maps.google.com/maps?q=${encodeURIComponent(coordinates)}&z=17&output=embed`
    : location.mapsEmbedUrl;
  const placeName =
    selected && coordinates ? selected.name : `${location.dusun}, ${location.desa}, ${location.kecamatan}`;

  const chipClass = (active: boolean) =>
    `inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-colors ${
      active
        ? "bg-forest text-white border-forest"
        : "bg-white text-charcoal border-sand hover:border-sage hover:text-forest"
    }`;

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white flex flex-col">
      <div className="relative w-full bg-sage-light overflow-hidden">
        <iframe
          key={embedUrl}
          title={`Peta ${placeName}`}
          src={embedUrl}
          className="w-full h-[360px] sm:h-[420px] border-0 filter saturate-95"
          loading="lazy"
          allowFullScreen
        />

        {/* Kartu keterangan titik yang sedang ditampilkan */}
        <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-sand">
          <div className="flex items-center gap-2 text-xs font-semibold text-forest mb-1">
            <MapPin className="w-3.5 h-3.5 text-earth" />
            <span>{selected ? selected.name : `${location.dusun}, ${location.desa}`}</span>
          </div>
          <p className="text-[11px] text-charcoal-muted leading-tight font-light">
            {selected ? selected.description : `${location.kecamatan}, ${location.kabupaten}, ${location.provinsi}`}
          </p>
          {selected && !coordinates && (
            <p className="mt-2 text-[11px] text-earth-dark leading-tight">{map.pointNotSetNote}</p>
          )}
        </div>
      </div>

      {/* Pilihan titik penting */}
      {mapPoints.length > 0 && (
        <div className="p-4 bg-white border-t border-sand">
          <p className="text-xs font-semibold uppercase tracking-wider text-sage-dark mb-3">{map.pointsTitle}</p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              aria-pressed={selected === null}
              onClick={() => setSelectedId(null)}
              className={chipClass(selected === null)}
            >
              {map.allAreaLabel}
            </button>
            {mapPoints.map((point) => (
              <button
                key={point.id}
                type="button"
                aria-pressed={selectedId === point.id}
                onClick={() => setSelectedId(point.id)}
                className={chipClass(selectedId === point.id)}
              >
                <MapPin className="w-3.5 h-3.5 opacity-70" />
                {point.name}
              </button>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-charcoal-muted">{location.embedPlaceholderNote}</p>
        </div>
      )}
    </div>
  );
}
