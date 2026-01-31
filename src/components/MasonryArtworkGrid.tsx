import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Artwork {
  id: string;
  title: string;
  medium: string;
  dimensions: string;
  year: string;
  image: string;
}

interface MasonryArtworkGridProps {
  artworks: Artwork[];
  categoryDescription?: string;
  category?: string;
}

const MasonryArtworkGrid = ({ artworks, categoryDescription, category }: MasonryArtworkGridProps) => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  return (
    <>
      <div className="w-full mb-24">
        {categoryDescription && (
          <div className="flex justify-end mb-12">
            <p className="text-2xl font-medium tracking-tight max-w-[579px]">
              {categoryDescription}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-10 justify-center">
          {artworks.map((artwork) => {
            const isWideImage = artwork.id === "obraz-07";
            const isCenteredImage = artwork.id === "obraz-08";
            const isArtefaktOrGrafiki = category === "artefakty" || category === "grafiki";
            
            return (
              <div
                key={artwork.id}
                className={`cursor-pointer group ${
                  isWideImage 
                    ? "w-full" 
                    : isCenteredImage
                    ? "w-full max-w-[640px] mx-auto"
                    : "flex-grow flex-shrink basis-[300px] max-w-[400px]"
                }`}
                onClick={() => setSelectedArtwork(artwork)}
              >
                <div className={`w-full bg-muted relative overflow-hidden ${
                  isArtefaktOrGrafiki ? "h-[336px]" :
                  isWideImage ? "aspect-[2/1]" : isCenteredImage ? "aspect-[4/5]" : "aspect-[3/4]"
                }`}>
                {artwork.image ? (
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <Skeleton className="w-full h-full" />
                )}
              </div>
              {category !== "grafiki" && (
                <div className={`mt-4 ${(isWideImage || isCenteredImage) ? "text-center" : ""}`}>
                  <h3 className="text-lg font-normal tracking-tight uppercase text-foreground mb-1">
                    {artwork.title}
                  </h3>
                  <div className={`flex items-center gap-1 text-sm font-light text-muted-foreground ${
                    (isWideImage || isCenteredImage) ? "justify-center" : ""
                  }`}>
                    <span>{artwork.medium}</span>
                    <span className="tracking-tight">|</span>
                    <span>{artwork.dimensions}</span>
                    <span className="tracking-tight">|</span>
                    <span className="uppercase">{artwork.year}</span>
                  </div>
                </div>
              )}
            </div>
          );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedArtwork(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedArtwork(null)}
            className="absolute top-6 right-6 z-10 text-white/70 hover:text-white transition-colors"
            aria-label="Zamknij podgląd"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Image container */}
          <div 
            className="w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedArtwork.image ? (
              <img
                src={selectedArtwork.image}
                alt={selectedArtwork.title}
                className="max-w-[95vw] max-h-[90vh] object-contain"
                onClick={() => setSelectedArtwork(null)}
              />
            ) : (
              <Skeleton className="w-full h-[70vh]" />
            )}
          </div>

          {/* Artwork info at bottom */}
          <div className="absolute bottom-6 left-6 right-6 text-white/80 text-sm">
            <p className="font-medium text-white">{selectedArtwork.title}</p>
            <p className="text-white/60">{selectedArtwork.medium} | {selectedArtwork.dimensions} | {selectedArtwork.year}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MasonryArtworkGrid;
