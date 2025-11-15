import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-5xl">
          <h1 className="mb-8">
            BOGNA<br />
            BARTKOWIAK
          </h1>
          <div className="brutalist-border-medium inline-block">
            <p className="text-xl md:text-2xl font-bold p-6 max-w-2xl">
              Malarka, artystka wizualna eksplorująca granice materiału, formy i przestrzeni
            </p>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="container mx-auto px-4 py-20 brutalist-border-medium bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12">NAJNOWSZA KOLEKCJA</h2>
          
          <Link 
            to="/collections/iii-materia"
            className="block group"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="brutalist-border-medium overflow-hidden">
                <div className="aspect-square bg-background"></div>
              </div>
              <div>
                <h3 className="mb-4 group-hover:underline underline-offset-8 decoration-4">
                  III MATERIA
                </h3>
                <p className="text-lg mb-6 leading-relaxed">
                  Eksploracja materialności i tekstury w kontekście współczesnego malarstwa. 
                  Seria prac badających relację między powierzchnią a głębią.
                </p>
                <div className="brutalist-border-medium inline-flex items-center gap-2 px-6 py-3 font-bold uppercase hover:bg-foreground hover:text-background transition-colors">
                  Zobacz kolekcję
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { title: "OBRAZY", path: "/tworczość/obrazy" },
            { title: "ARTEFAKTY", path: "/tworczość/artefakty" },
            { title: "RYSUNKI", path: "/tworczość/rysunki" },
            { title: "INSTALACJE", path: "/tworczość/instalacje" }
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="brutalist-border-medium aspect-square flex items-center justify-center text-center hover:bg-foreground hover:text-background transition-colors group"
            >
              <h3 className="text-2xl">{link.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
