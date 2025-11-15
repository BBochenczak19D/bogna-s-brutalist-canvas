import { Link } from "react-router-dom";

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
      title: "INSTALACJE",
      path: "/tworczość/instalacje",
      description: "Instalacje przestrzenne"
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
              className="group"
            >
              <div className="brutalist-border-medium aspect-[4/3] flex flex-col items-center justify-center p-8 hover:bg-foreground hover:text-background transition-colors">
                <h2 className="mb-4">{category.title}</h2>
                <p className="text-lg text-center">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tworczość;
