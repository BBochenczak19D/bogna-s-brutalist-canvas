import { useParams, Navigate } from "react-router-dom";
import artworksData from "@/data/artworks.json";
import ArtworkGrid from "@/components/ArtworkGrid";

const categoryTitles: Record<string, string> = {
  "obrazy": "OBRAZY",
  "artefakty": "ARTEFAKTY",
  "rysunki": "RYSUNKI",
  "instalacje": "INSTALACJE"
};

const CategoryPage = () => {
  const { category } = useParams();
  
  if (!category || !categoryTitles[category]) {
    return <Navigate to="/tworczość" replace />;
  }

  const artworks = artworksData[category as keyof typeof artworksData] as any[];

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <h1 className="mb-16">{categoryTitles[category]}</h1>
        
        {artworks && artworks.length > 0 ? (
          <ArtworkGrid artworks={artworks} />
        ) : (
          <div className="brutalist-border-medium p-12 text-center">
            <p className="text-2xl font-bold text-muted-foreground">
              Prace wkrótce dostępne
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default CategoryPage;
