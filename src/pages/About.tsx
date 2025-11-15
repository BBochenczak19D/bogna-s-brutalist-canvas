const About = () => {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-16">O MNIE</h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="brutalist-border-medium aspect-[3/4] bg-muted"></div>
            
            <div className="md:col-span-2 space-y-6">
              <div className="brutalist-border-medium bg-background p-8">
                <h2 className="mb-6">BOGNA BARTKOWIAK</h2>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    Malarka i artystka wizualna, absolwentka Akademii Sztuk Pięknych. 
                    W swojej twórczości eksploruje granice między materią a formą, 
                    światłem a cieniem, abstrakcją a figuracją.
                  </p>
                  <p>
                    Jej prace charakteryzuje minimalistyczne podejście do koloru 
                    i silna ekspresja materiału. Interesuje ją proces tworzenia 
                    jako forma medytacji i dialogu z powierzchnią płótna.
                  </p>
                </div>
              </div>

              <div className="brutalist-border-medium bg-muted p-8">
                <h3 className="mb-4 text-2xl">WYKSZTAŁCENIE</h3>
                <ul className="space-y-2 text-lg">
                  <li className="font-bold">2020 — Akademia Sztuk Pięknych</li>
                  <li className="font-bold">2018 — Studia licencjackie</li>
                </ul>
              </div>

              <div className="brutalist-border-medium bg-muted p-8">
                <h3 className="mb-4 text-2xl">WYSTAWY</h3>
                <ul className="space-y-2 text-lg">
                  <li className="font-bold">2024 — "III Materia" Galeria Współczesna</li>
                  <li className="font-bold">2023 — Wystawa zbiorowa, Warszawa</li>
                  <li className="font-bold">2022 — "Powierzchnia" Galeria Sztuki</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="brutalist-border bg-foreground text-background p-8 text-center">
            <h3 className="mb-4 text-2xl">KONTAKT</h3>
            <p className="text-lg mb-2">
              <a href="mailto:kontakt@bognabartkowiak.pl" className="hover:underline">
                kontakt@bognabartkowiak.pl
              </a>
            </p>
            <p className="text-lg">
              Instagram: <a href="#" className="hover:underline">@bognabartkowiak</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
