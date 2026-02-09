import { useParams, Navigate } from "react-router-dom";
import artworksData from "@/data/artworks.json";
import MasonryArtworkGrid from "@/components/MasonryArtworkGrid";

const CollectionDetail = () => {
  const { id } = useParams();
  const collection = artworksData.collections.find(c => c.id === id);

  if (!collection) {
    return <Navigate to="/collections" replace />;
  }

  // Separate artworks by type
  const paintings = collection.artworks.filter(a => a.id.startsWith("materia-") || a.id.startsWith("obraz-"));
  const grafiki = collection.artworks.filter(a => a.id.startsWith("grafika-"));
  const artefakty = collection.artworks.filter(a => a.id.startsWith("artefakt-"));

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 md:px-9 py-20">
        <h1 className="mb-16">{collection.title}</h1>
        
        {/* Paintings */}
        {paintings.length > 0 && (
          <MasonryArtworkGrid 
            artworks={paintings} 
            categoryDescription={`${collection.description} — ${collection.year}`}
          />
        )}

        {/* Grafiki */}
        {grafiki.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16 uppercase">Grafiki</h2>
            <MasonryArtworkGrid 
              artworks={grafiki} 
              category="grafiki"
            />
          </div>
        )}

        {/* Artefakty */}
        {artefakty.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16 uppercase">Artefakty</h2>
            <MasonryArtworkGrid 
              artworks={artefakty} 
              category="artefakty"
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default CollectionDetail;
