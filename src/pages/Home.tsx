import CornerBracket from "@/components/CornerBracket";
import ArrowLink from "@/components/ArrowLink";
import artworksData from "@/data/artworks.json";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
const Home = () => {
  const iiiMateriaCollection = artworksData.collections.find(c => c.id === "iii-materia");
  const artworks = iiiMateriaCollection?.artworks || [];
  const rysunki = artworksData.rysunki || [];
  return <div className="min-h-screen bg-background">
      {/* Hero Bio Section */}
      <section className="max-w-[1648px] mx-auto px-9 py-0">
        <div className="flex items-start gap-6 max-w-[574px]">
          <CornerBracket />
          <img src="/artworks/profile.jpg" alt="Bogna Bartkowiak" className="w-[114px] h-[174px] object-cover flex-shrink-0" />
          <p className="flex-1 text-sm font-normal leading-[125%] uppercase">
            Jestem absolwentką Akademii Sztuk Pięknych w Katowicach i lekarzem, która w swoich obrazach bada niewidzialne warstwy istnienia, łącząc doświadczenie medyczne, artystyczną intuicję i Trzecią Materię.
          </p>
          <CornerBracket />
        </div>
      </section>

      {/* Main Hero Text */}
      <section className="max-w-[1648px] mx-auto px-9 py-0 mt-[42px]">
        <div className="flex flex-col gap-8">
          <h1 className="text-[72px] font-medium leading-[100%] tracking-[-0.02em] uppercase max-w-none">
            Co sprawia, że jesteśmy ożywieni? Co kieruje naszym istnieniem, jeśli wykraczamy poza myśli i widzialną materię?
          </h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-[1648px] mx-auto mt-[100px] mb-8">
        <div className="flex justify-end px-9 mb-6">
          <ArrowLink to="/collections/iii-materia">
            Przejdź do pełnej kolekcji
          </ArrowLink>
        </div>
        
        {/* Draggable Carousel Gallery */}
        <Carousel opts={{
        align: "start",
        loop: false,
        dragFree: true
      }} className="w-full">
          <CarouselContent className="px-9 gap-1">
            {artworks.map(artwork => <CarouselItem key={artwork.id} className="basis-auto pl-0">
                <img src={artwork.image} alt={artwork.title} className="w-[404px] h-[539px] object-cover" draggable={false} />
              </CarouselItem>)}
          </CarouselContent>
        </Carousel>

        {/* Description Section */}
        <div className="px-9 pt-9 pb-[78px] flex items-start gap-16">
          <CornerBracket />
          <p className="flex-1 text-base font-light leading-[125%] tracking-[-0.02em] text-foreground/90">
            Moja praca zaczyna się tam, gdzie kończy się język. Od zawsze fascynowało mnie to, czego nie da się nazwać: momenty pomiędzy oddechami, przestrzenie wewnątrz ciała, ciche impulsy świadomości. Jako lekarka przez lata uczyłam się patrzeć na człowieka przez pryzmat anatomii i nauki. Jako malarka — przez pryzmat intuicji, symbolu i doświadczenia.
          </p>
          <CornerBracket />
          <p className="flex-1 text-base font-light leading-[125%] tracking-[-0.02em] text-foreground/90">
            Kolekcja Trzeciej Materii powstała z potrzeby zrozumienia tego, co niewidzialne, a jednak fundamentalne. To mój osobisty sposób badania energii, która kieruje nami, zanim pojawi się myśl, ruch czy decyzja. Interesuje mnie stan pomiędzy materią a świadomością, wszędzie tam, gdzie ciało przestaje być tylko biologią, a staje się nośnikiem czegoś znacznie subtelniejszego.
          </p>
          <CornerBracket />
          <p className="flex-1 text-base font-light leading-[125%] tracking-[-0.02em] text-foreground/90">
            Malując, szukam drżeń, napięć, pęknięć i światła — nie w świecie zewnętrznym, ale w tych głębokich, wewnętrznych przestrzeniach, które każdy z nas nosi w sobie. Moje obrazy są śladami własnych poszukiwań. Mapami, które nie prowadzą do jednego celu, lecz do momentu spotkania ze sobą.
          </p>
        </div>
      </section>

      {/* Collection Title */}
      <section className="max-w-[1648px] mx-auto px-9">
        <div className="flex items-start gap-2 justify-between">
          <div>
            <h2 className="text-[64px] font-normal leading-[110%] tracking-[-0.02em] uppercase">
              [III MATERIA]
            </h2>
          </div>
          <p className="text-2xl font-light leading-[110%] tracking-[-0.04em] uppercase">
            2023
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-[1648px] mx-auto px-9 py-[100px]">
        <div className="flex justify-between items-start mb-9">
          <p className="max-w-[579px] text-2xl leading-[110%] tracking-[-0.04em] uppercase">
            <span className="font-medium">Trzecia Materia istnieje.</span>
            <span className="opacity-50"> Nie jest ciałem. Nie jest myślą.</span>
            <span className="font-medium"> To to, co sprawia, że jesteśmy.</span>
          </p>
          <CornerBracket />
        </div>

        {/* Two Column Images */}
        <div className="flex gap-16 mb-9">
          <div className="flex-1 flex flex-col gap-6">
            <img src={artworks[0]?.image || "/placeholder.svg"} alt={artworks[0]?.title || "Materia I"} className="w-full aspect-[756/894] object-cover" />
            <p className="text-2xl font-light leading-[110%] tracking-[-0.02em] uppercase text-muted-foreground text-center">
              [cz. I | 2023]
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <img src={artworks[1]?.image || "/placeholder.svg"} alt={artworks[1]?.title || "Materia II"} className="w-full aspect-[756/820] object-cover" />
            <p className="text-2xl font-light leading-[110%] tracking-[-0.02em] uppercase text-muted-foreground text-center">
              [cz. II | 2023]
            </p>
          </div>
        </div>

        {/* Decorative Brackets */}
        <div className="flex justify-between">
          <CornerBracket />
          <CornerBracket />
        </div>
      </section>

      {/* Section III */}
      <section className="max-w-[1648px] mx-auto px-9 py-[100px]">
        <div className="flex items-start gap-8 mb-9">
          <p className="text-2xl leading-[110%] tracking-[-0.04em] uppercase">
            <span className="font-medium">Pojawia się w momentach, których nie potrafimy uchwycić —</span>
            <span className="opacity-50"> w bezdechu między jednym a drugim impulsem.</span>
            <span className="font-medium"> W cichym pulsie, który nie należy do fizjologii. W świetle, które rozprasza logikę.</span>
          </p>
          <CornerBracket />
        </div>

        <div className="flex gap-16">
          <img src={artworks[2]?.image || "/placeholder.svg"} alt={artworks[2]?.title || "Materia III"} className="w-[743px] h-[743px] object-cover flex-shrink-0" />
          <div className="flex flex-col justify-center gap-3">
            <p className="text-2xl font-light leading-[110%] tracking-[-0.02em] uppercase text-muted-foreground">
              [cz. III]
            </p>
            <ArrowLink to="/collections/iii-materia">
              Przejdź do pełnej kolekcji
            </ArrowLink>
          </div>
        </div>

        <div className="flex justify-between mt-9">
          <CornerBracket />
          <CornerBracket />
        </div>
      </section>

      {/* Dark Section - Other Works */}
      <section className="max-w-[1648px] mx-auto">
        <div className="bg-secondary px-9 pt-[30px] pb-9 flex flex-col gap-16">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-6 pl-16">
              <h2 className="text-[64px] font-medium leading-[110%] tracking-[-0.04em] uppercase text-secondary-foreground">
                [GRAFIKI]
              </h2>
              <ArrowLink to="/tworczość/rysunki" className="text-white">
                Przejdź do pełnej kolekcji
              </ArrowLink>
            </div>
            <div className="flex justify-center opacity-50">
              <h3 className="text-[64px] font-medium leading-[110%] tracking-[-0.04em] uppercase text-secondary-foreground">
                [ARTEFAKTY]
              </h3>
            </div>
            <div className="flex justify-center opacity-50">
              <h3 className="text-[64px] font-medium leading-[110%] tracking-[-0.04em] uppercase text-secondary-foreground">
                [INSTALACJE]
              </h3>
            </div>
          </div>

          {/* Horizontal Gallery */}
          <div className="flex gap-3">
            {rysunki.slice(0, 6).map(artwork => <img key={artwork.id} src={artwork.image} alt={artwork.title} className="flex-1 aspect-[253/283] object-cover" />)}
          </div>
        </div>
      </section>

      {/* Final Philosophy Sections */}
      
    </div>;
};
export default Home;