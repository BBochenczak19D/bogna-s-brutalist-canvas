import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";

const images = [
  { src: "/artworks/seans-artystyczny/seans-08.jpg", title: "Seans artystyczny" },
  { src: "/artworks/seans-artystyczny/seans-01.jpg", title: "Seans artystyczny" },
  { src: "/artworks/seans-artystyczny/seans-06.jpg", title: "Seans artystyczny" },
  { src: "/artworks/seans-artystyczny/seans-09.jpg", title: "Seans artystyczny" },
  { src: "/artworks/seans-artystyczny/seans-02.png", title: "Seans artystyczny" },
  { src: "/artworks/seans-artystyczny/seans-04.png", title: "Seans artystyczny" },
  { src: "/artworks/seans-artystyczny/seans-03.png", title: "Seans artystyczny" },
  { src: "/artworks/seans-artystyczny/seans-07.jpg", title: "Seans artystyczny" },
  { src: "/artworks/seans-artystyczny/seans-05.png", title: "Seans artystyczny" },
];

// 4 video placeholders — will be replaced with actual video files
const videos = [
  { id: 1, label: "I" },
  { id: 2, label: "II" },
  { id: 3, label: "III" },
  { id: 4, label: "IV" },
];

const SeansArtystyczny = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
  };
  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) setSelectedIndex(selectedIndex + 1);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white/80">
      {/* Hero */}
      <section className="pt-32 pb-16 px-8 md:px-16 max-w-[1400px] mx-auto">
        <p className="text-xs tracking-[0.4em] text-white/30 uppercase mb-6">Twórczość</p>
        <h1 className="text-4xl md:text-6xl font-normal uppercase tracking-tight text-white/90 leading-[1.05] mb-8">
          Seans<br />Artystyczny
        </h1>
        <div className="w-12 h-px bg-white/20 mb-8" />
        <p className="text-sm md:text-base font-light text-white/40 max-w-[500px] leading-relaxed tracking-wide">
          Performatywne spotkanie z materią, dźwiękiem i obrazem.<br />
          Praca wideo i grafika cyfrowa.
        </p>
      </section>

      {/* Videos section */}
      <section className="px-8 md:px-16 mb-24 max-w-[1400px] mx-auto">
        <p className="text-xs tracking-[0.4em] text-white/20 uppercase mb-10">Wideo</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="group relative aspect-video bg-white/[0.02] border border-white/[0.06] overflow-hidden flex items-center justify-center">
              {/* Subtle noise texture overlay */}
              <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />
              {/* Play icon */}
              <div className="relative flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors duration-500">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="ml-1">
                    <path d="M5 3.5L14 9L5 14.5V3.5Z" fill="white" fillOpacity="0.4" />
                  </svg>
                </div>
                <span className="text-xs tracking-[0.3em] text-white/20 uppercase">
                  Wideo {video.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Graphics gallery */}
      <section className="px-8 md:px-16 mb-32 max-w-[1400px] mx-auto">
        <p className="text-xs tracking-[0.4em] text-white/20 uppercase mb-10">Grafiki</p>
        <div className="flex flex-wrap gap-6 justify-center">
          {images.map((img, index) => (
            <div
              key={index}
              className="cursor-pointer group flex-grow flex-shrink basis-[280px] max-w-[420px] aspect-square bg-black overflow-hidden border border-white/[0.04] hover:border-white/[0.12] transition-colors duration-500"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <ImageLightbox
          image={images[selectedIndex].src}
          title=""
          details=""
          onClose={() => setSelectedIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={selectedIndex > 0}
          hasNext={selectedIndex < images.length - 1}
        />
      )}
    </div>
  );
};

export default SeansArtystyczny;
