import { useParams, Navigate } from "react-router-dom";
import artworksData from "@/data/artworks.json";
import MasonryArtworkGrid from "@/components/MasonryArtworkGrid";

const categoryTitles: Record<string, string> = {
  "obrazy": "OBRAZY",
  "artefakty": "ARTEFAKTY",
  "rysunki": "RYSUNKI",
  "grafiki": "GRAFIKI"
};

const CategoryPage = () => {
  const { category } = useParams();
  
  if (!category || !categoryTitles[category]) {
    return <Navigate to="/tworczość" replace />;
  }

  const artworks = artworksData[category as keyof typeof artworksData] as any[];

  const categoryDescriptions: Record<string, string> = {
    "obrazy": "Kilka słów o malarstwie",
    "artefakty": "Kilka słów o artefaktach",
    "rysunki": "Kilka słów o rysunkach",
    "grafiki": "Kilka słów o grafikach"
  };

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 md:px-9 py-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-sm mb-16 uppercase">
          <span className="text-foreground">twórczość</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-24">
          {categoryTitles[category]}
        </h1>
        
        {artworks && artworks.length > 0 ? (
          <MasonryArtworkGrid 
            artworks={artworks} 
            categoryDescription={categoryDescriptions[category]}
            category={category}
          />
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
