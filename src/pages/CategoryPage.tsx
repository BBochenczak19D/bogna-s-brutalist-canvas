import { useParams, Navigate } from "react-router-dom";
import artworksData from "@/data/artworks.json";
import MasonryArtworkGrid from "@/components/MasonryArtworkGrid";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const categoryTitles: Record<string, string> = {
  "obrazy": "OBRAZY",
  "artefakty": "ARTEFAKTY",
  "rysunki": "RYSUNKI",
  "grafiki": "GRAFIKI",
  "instalacje": "INSTALACJE"
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
    "grafiki": "Kilka słów o grafikach",
    "instalacje": "Instalacje przestrzenne"
  };

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 md:px-9 py-20">
        <PageBreadcrumb items={[
          { label: "Twórczość", path: "/tworczość" },
          { label: categoryTitles[category] }
        ]} />

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
