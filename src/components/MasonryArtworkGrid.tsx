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
}

const MasonryArtworkGrid = ({ artworks, categoryDescription }: MasonryArtworkGridProps) => {
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
            </div>
          );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedArtwork(null)}
        >
          <div className="brutalist-border max-w-6xl w-full max-h-[90vh] overflow-auto">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-muted p-8 flex items-center justify-center">
                {selectedArtwork.image ? (
                  <img
                    src={selectedArtwork.image}
                    alt={selectedArtwork.title}
                    className="max-w-full max-h-[70vh] object-contain"
                  />
                ) : (
                  <Skeleton className="w-full h-[70vh]" />
                )}
              </div>
              <div className="p-8 bg-background flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">{selectedArtwork.title}</h2>
                <div className="space-y-2 text-lg">
                  <p><span className="font-bold">Medium:</span> {selectedArtwork.medium}</p>
                  <p><span className="font-bold">Wymiary:</span> {selectedArtwork.dimensions}</p>
                  <p><span className="font-bold">Rok:</span> {selectedArtwork.year}</p>
                </div>
                <button
                  onClick={() => setSelectedArtwork(null)}
                  className="mt-8 brutalist-border-medium px-6 py-3 font-bold uppercase hover:bg-foreground hover:text-background transition-colors"
                >
                  Zamknij
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MasonryArtworkGrid;
