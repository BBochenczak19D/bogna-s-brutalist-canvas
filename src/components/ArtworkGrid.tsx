import { useState } from "react";

interface Artwork {
  id: string;
  title: string;
  medium: string;
  dimensions: string;
  year: string;
  image: string;
}

interface ArtworkGridProps {
  artworks: Artwork[];
}

const ArtworkGrid = ({ artworks }: ArtworkGridProps) => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artworks.map((artwork) => (
          <div
            key={artwork.id}
            className="brutalist-border-medium cursor-pointer hover:shadow-2xl transition-shadow"
            onClick={() => setSelectedArtwork(artwork)}
          >
            <div className="aspect-square bg-muted relative overflow-hidden">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-background">
              <h3 className="font-bold text-lg mb-1">{artwork.title}</h3>
              <p className="text-sm text-muted-foreground">{artwork.medium}</p>
              <p className="text-sm text-muted-foreground">{artwork.dimensions}</p>
              <p className="text-sm font-bold mt-2">{artwork.year}</p>
            </div>
          </div>
        ))}
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
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="max-w-full max-h-[70vh] object-contain"
                />
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

export default ArtworkGrid;
