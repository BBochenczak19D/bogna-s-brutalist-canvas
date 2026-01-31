import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ImageLightbox from "@/components/ImageLightbox";

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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedArtwork = selectedIndex !== null ? artworks[selectedIndex] : null;

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < artworks.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

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
          {artworks.map((artwork, index) => {
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
                onClick={() => setSelectedIndex(index)}
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
      {selectedArtwork && selectedIndex !== null && (
        <ImageLightbox
          image={selectedArtwork.image}
          title={selectedArtwork.title}
          details={`${selectedArtwork.medium} | ${selectedArtwork.dimensions} | ${selectedArtwork.year}`}
          onClose={() => setSelectedIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={selectedIndex > 0}
          hasNext={selectedIndex < artworks.length - 1}
        />
      )}
    </>
  );
};

export default MasonryArtworkGrid;
