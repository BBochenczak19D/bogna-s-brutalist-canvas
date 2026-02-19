import { Link } from "react-router-dom";

interface Category {
  title: string;
  path: string;
  description: string;
  dark?: boolean;
}

const Tworczość = () => {
  const categories = [
    {
      title: "OBRAZY",
      path: "/tworczość/obrazy",
      description: "Malarstwo olejne na płótnie"
    },
    {
      title: "ARTEFAKTY",
      path: "/tworczość/artefakty",
      description: "Prace w technikach mieszanych"
    },
    {
      title: "RYSUNKI",
      path: "/tworczość/rysunki",
      description: "Rysunki i szkice"
    },
    {
      title: "GRAFIKI",
      path: "/tworczość/grafiki",
      description: "Grafika cyfrowa i drukowana"
    },
    {
      title: "SEANS ARTYSTYCZNY",
      path: "/tworczość/seans-artystyczny",
      description: "Wideo i grafika cyfrowa",
      dark: true,
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <h1 className="mb-16">TWÓRCZOŚĆ</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className={`group ${category.dark ? "md:col-span-2" : ""}`}
            >
              {category.dark ? (
                <div className="relative aspect-[16/5] flex flex-col items-center justify-center p-8 overflow-hidden bg-[#050505] border border-white/10 hover:border-white/20 transition-all duration-500">
                  <img
                    src="/artworks/seans-artystyczny/seans-08.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="relative z-10 text-center">
                    <h2 className="mb-3 text-white tracking-widest">{category.title}</h2>
                    <p className="text-sm text-white/40 uppercase tracking-[0.3em]">{category.description}</p>
                  </div>
                </div>
              ) : (
                <div className="brutalist-border-medium aspect-[4/3] flex flex-col items-center justify-center p-8 hover:bg-foreground hover:text-background transition-colors">
                  <h2 className="mb-4">{category.title}</h2>
                  <p className="text-lg text-center">{category.description}</p>
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tworczość;
