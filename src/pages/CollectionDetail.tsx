import { useParams, Navigate } from "react-router-dom";
import artworksData from "@/data/artworks.json";
import MasonryArtworkGrid from "@/components/MasonryArtworkGrid";

const CollectionDetail = () => {
  const { id } = useParams();
  const collection = artworksData.collections.find(c => c.id === id);

  if (!collection) {
    return <Navigate to="/collections" replace />;
  }

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <h1 className="mb-16">{collection.title}</h1>
        
        <MasonryArtworkGrid 
          artworks={collection.artworks} 
          categoryDescription={`${collection.description} — ${collection.year}`}
        />
      </section>
    </div>
  );
};

export default CollectionDetail;
