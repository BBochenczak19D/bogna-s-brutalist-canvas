import { useParams, Navigate } from "react-router-dom";
import artworksData from "@/data/artworks.json";
import ArtworkGrid from "@/components/ArtworkGrid";

const CollectionDetail = () => {
  const { id } = useParams();
  const collection = artworksData.collections.find(c => c.id === id);

  if (!collection) {
    return <Navigate to="/collections" replace />;
  }

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mb-16">
          <h1 className="mb-8">{collection.title}</h1>
          <div className="brutalist-border-medium bg-muted p-8">
            <p className="text-xl leading-relaxed">{collection.description}</p>
            <p className="text-lg font-bold mt-4">{collection.year}</p>
          </div>
        </div>

        <ArtworkGrid artworks={collection.artworks} />
      </section>
    </div>
  );
};

export default CollectionDetail;
