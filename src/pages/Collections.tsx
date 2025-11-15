import { Link } from "react-router-dom";
import artworksData from "@/data/artworks.json";

const Collections = () => {
  const { collections } = artworksData;

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <h1 className="mb-16">KOLEKCJE</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.id}`}
              className="group"
            >
              <div className="brutalist-border-medium overflow-hidden mb-6">
                <div className="aspect-[4/3] bg-muted"></div>
              </div>
              <h2 className="mb-4 group-hover:underline underline-offset-8 decoration-4">
                {collection.title}
              </h2>
              <p className="text-lg mb-2">{collection.description}</p>
              <p className="text-sm font-bold">{collection.year}</p>
            </Link>
          ))}
          
          {/* Placeholder for future collections */}
          <div className="brutalist-border-medium p-12 flex items-center justify-center bg-muted">
            <p className="text-2xl font-bold text-muted-foreground text-center">
              KOLEJNE KOLEKCJE<br />WKRÓTCE
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;
