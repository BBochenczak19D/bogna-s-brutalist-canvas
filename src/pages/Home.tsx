import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import CornerBracket from "@/components/CornerBracket";
import ArrowLink from "@/components/ArrowLink";
import TypingText from "@/components/TypingText";
import ImageLightbox from "@/components/ImageLightbox";
import { useAnimation } from "@/contexts/AnimationContext";
import artworksData from "@/data/artworks.json";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { useParallaxCarousel } from "@/hooks/useParallaxCarousel";
import { noOrphans } from "@/lib/typography";

const Home = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [bioExpanded, setBioExpanded] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{src: string;title?: string;} | null>(null);
  const {
    setHeroTypingComplete
  } = useAnimation();
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [darkCarouselApi, setDarkCarouselApi] = useState<CarouselApi>();
  const carouselRef = useParallaxCarousel(carouselApi);
  const darkCarouselRef = useParallaxCarousel(darkCarouselApi);
  const iiiMateriaCollection = artworksData.collections.find((c) => c.id === "iii-materia");
  const artworks = iiiMateriaCollection?.artworks || [];
  const rysunki = artworksData.rysunki || [];

  const openLightbox = (src: string, title?: string) => {
    setLightboxImage({ src, title });
  };

  // Check if animations have already run in this session
  useEffect(() => {
    const hasAnimated = sessionStorage.getItem("heroAnimationComplete");
    if (hasAnimated === "true") {
      setTypingComplete(true);
      setHeroTypingComplete(true);
    }
  }, [setHeroTypingComplete]);
  const handleAnimationComplete = () => {
    setTypingComplete(true);
    setTimeout(() => {
      setHeroTypingComplete(true);
      sessionStorage.setItem("heroAnimationComplete", "true");
    }, 300);
  };
  return <div className="min-h-screen bg-background">
      {/* Hero Bio Section */}
      <section className={`max-w-[1648px] mx-auto px-9 py-0 pt-32 transition-opacity duration-700 ${typingComplete ? "opacity-100" : "opacity-0"}`}>
        <div className="items-start gap-6 max-w-[724px] flex flex-col md:flex-row">
          <div className="flex items-start gap-2 flex-shrink-0">
            <button
            onClick={() => setBioExpanded(!bioExpanded)}
            className="hidden md:flex items-start justify-center pt-1 flex-shrink-0 transition-transform duration-300 hover:scale-110"
            aria-label={bioExpanded ? "Zwiń" : "Rozwiń"}>
              {bioExpanded ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            <img
            alt="Bogna Bartkowiak"
            className={`object-cover flex-shrink-0 transition-all duration-500 ${bioExpanded ? "w-[114px] h-[174px]" : "w-[80px] h-[120px]"}`}
            src="/lovable-uploads/3f96b157-ec5e-4b05-b37f-0b44e7dfd18e.jpg" />
          </div>

          <div className={`overflow-hidden transition-all duration-500 max-h-[300px] opacity-100 ${bioExpanded ? "md:max-h-[300px] md:opacity-100" : "md:max-h-0 md:opacity-0"}`}>
            <p className="flex-1 text-sm font-normal leading-[125%] uppercase animate-fade-in italic" style={{
            animationDelay: "0.2s"
          }}>
              {noOrphans("Jestem absolwentką Akademii Sztuk Pięknych w Katowicach oraz lekarzem. W swojej twórczości badam niewidzialne warstwy istnienia, łącząc doświadczenia medyczne z artystyczną intuicją.")}
              <br />
              {noOrphans("Tworzenie jest dla mnie sposobem zbliżania się do Niewiadomej.")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Hero Text */}
      <section className="max-w-[1648px] mx-auto px-9 py-0 mt-[42px]">
        <div className="flex flex-col gap-8 py-0 md:py-8">
          <h1 className="text-[24px] md:text-[64px] font-medium leading-[100%] tracking-[-0.02em] uppercase max-w-none">
            {sessionStorage.getItem("heroAnimationComplete") === "true" ? noOrphans("Co sprawia, że jesteśmy ożywieni? Co kieruje naszym istnieniem, jeśli wykraczamy poza myśli i widzialną materię?") : <TypingText text="Co sprawia, że jesteśmy ożywieni? Co kieruje naszym istnieniem, jeśli wykraczamy poza myśli i widzialną materię?" speed={18} delay={200} pauseAt={33} pauseDuration={1800} onComplete={handleAnimationComplete} />}
          </h1>
        </div>
      </section>

      {/* Gallery Section */}
      {typingComplete && <>
          <section ref={carouselRef} className="max-w-[1648px] mx-auto mt-[100px] mb-8 animate-fade-in">
            <div className="flex justify-end px-9 mb-6">
              <ArrowLink to="/collections/iii-materia">{noOrphans("Przejdź do pełnej kolekcji")}</ArrowLink>
            </div>

            {/* Draggable Carousel Gallery */}
            <Carousel setApi={setCarouselApi} opts={{
          align: "start",
          loop: false,
          dragFree: true,
          watchDrag: true
        }} className="w-full">
              <CarouselContent className="px-9 gap-1">
                {artworks.slice(0, 10).map((artwork) => <CarouselItem key={artwork.id} className="basis-auto pl-0">
                    <div className="w-[236px] h-[312px] md:w-[376px] md:h-[500px] overflow-hidden">
                      <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  draggable={false}
                  onClick={() => openLightbox(artwork.image, artwork.title)} />

                    </div>
                  </CarouselItem>)}
              </CarouselContent>
            </Carousel>

            {/* Description Section */}
            <div className="px-9 pt-9 pb-[78px] items-start flex flex-col md:flex-row py-[24px] gap-[32px]">
              <CornerBracket />
              <p className="flex-1 text-base font-light leading-[125%] tracking-[-0.02em] text-foreground/90 animate-fade-in" style={{
            animationDelay: "0.4s"
          }}>
                {noOrphans("Moja praca zaczyna się tam, gdzie kończy się język. Od zawsze fascynowało mnie to, czego nie da się nazwać: momenty pomiędzy oddechami, przestrzenie wewnątrz ciała, ciche impulsy świadomości. Jako lekarka przez lata uczyłam się patrzeć na człowieka przez pryzmat anatomii i nauki. Jako malarka — przez pryzmat intuicji, symbolu i doświadczenia.")}
              </p>
              <CornerBracket />
              <p className="flex-1 text-base font-light leading-[125%] tracking-[-0.02em] text-foreground/90 animate-fade-in" style={{
            animationDelay: "0.6s"
          }}>
                {noOrphans("Kolekcja Trzeciej Materii powstała z potrzeby zrozumienia tego, co niewidzialne, a jednak fundamentalne. To mój osobisty sposób badania energii, która kieruje nami, zanim pojawi się myśl, ruch czy decyzja. Interesuje mnie stan pomiędzy materią a świadomością, wszędzie tam, gdzie ciało przestaje być tylko biologią, a staje się nośnikiem czegoś znacznie subtelniejszego.")}
              </p>
            </div>
          </section>

          {/* Collection Title */}
          <section className="max-w-[1648px] mx-auto px-9">
            <div className="flex items-start gap-2 justify-between">
              <div>
                <h2 className="text-[32px] font-normal leading-[110%] tracking-[-0.02em] uppercase animate-fade-in" style={{
              animationDelay: "0.2s"
            }}>III MATERIA

            </h2>
              </div>
              <p className="text-2xl font-light leading-[110%] tracking-[-0.04em] uppercase">2023</p>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="max-w-[1648px] mx-auto px-4 md:px-9 py-12 md:py-[100px]">
            <div className="flex justify-end items-center self-stretch py-4 md:py-[24px]">
              <div className="flex justify-between items-start flex-1 gap-4">
                <div className="flex w-full max-w-[565px] flex-col items-start gap-0.5">
                  <div className="w-full text-foreground font-medium text-lg md:text-2xl leading-[110%] tracking-[-0.96px] uppercase animate-fade-in" style={{
                animationDelay: "0.1s"
              }}>
                    {noOrphans("Trzecia Materia istnieje.")}
                  </div>
                  <div className="text-muted-foreground font-normal text-lg md:text-2xl leading-[110%] tracking-[-0.96px] uppercase animate-fade-in" style={{
                animationDelay: "0.3s"
              }}>
                    {noOrphans("Nie jest ciałem.")}
                  </div>
                  <div className="text-muted-foreground font-normal text-lg md:text-2xl leading-[110%] tracking-[-0.96px] uppercase animate-fade-in" style={{
                animationDelay: "0.5s"
              }}>
                    {noOrphans("Nie jest myślą.")}
                  </div>
                  <div className="text-foreground font-medium text-lg md:text-2xl leading-[110%] tracking-[-0.96px] uppercase animate-fade-in" style={{
                animationDelay: "0.7s"
              }}>
                    {noOrphans("To to, co sprawia, że jesteśmy.")}
                  </div>
                </div>
                <svg className="w-[21.6px] h-[22.12px] fill-current flex-shrink-0" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.6 2.4H0V0H21.6V2.4Z" fill="currentColor" />
                  <path d="M19.184 22.12V0.519999H21.584V22.12H19.184Z" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Two Column Images */}
            <div className="flex flex-col md:flex-row gap-16 mb-9">
              <div className="flex-1 flex flex-col gap-6">
                <img
              src="/artworks/collections/iii-materia/materia-01.jpg"
              alt="W poszukiwaniu III materii, cz. I"
              className="w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox("/artworks/collections/iii-materia/materia-01.jpg", "W poszukiwaniu III materii, cz. I")} />

                <p className="text-2xl font-light leading-[110%] tracking-[-0.02em] uppercase text-muted-foreground text-center">
                  [cz. I | 2023]
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-6">
                <img
              src="/artworks/collections/iii-materia/materia-02.jpg"
              alt="W poszukiwaniu III materii, cz. II"
              className="w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox("/artworks/collections/iii-materia/materia-02.jpg", "W poszukiwaniu III materii, cz. II")} />

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

          {/* Section III - cz3 */}
          <section className="max-w-[1648px] mx-auto px-4 md:px-9 py-12 md:py-[100px]">
            <div className="flex justify-end items-center self-stretch py-4 md:py-[24px]">
              <div className="flex justify-between items-start flex-1 gap-4">
                <div className="flex w-full max-w-[565px] flex-col items-start gap-0.5">
                  <div className="w-full text-foreground font-medium text-lg md:text-2xl leading-[110%] tracking-[-0.96px] uppercase animate-fade-in" style={{
                animationDelay: "0.1s"
              }}>
                    {noOrphans("Pojawia się w momentach, których nie potrafimy uchwycić")}
                  </div>
                  <div className="text-muted-foreground font-normal text-lg md:text-2xl leading-[110%] tracking-[-0.96px] uppercase animate-fade-in" style={{
                animationDelay: "0.3s"
              }}>
                    {noOrphans("w bezdechu między jednym a drugim impulsem.")}
                  </div>
                  <div className="text-muted-foreground font-normal text-lg md:text-2xl leading-[110%] tracking-[-0.96px] uppercase animate-fade-in" style={{
                animationDelay: "0.5s"
              }}>
                    {noOrphans("W cichym pulsie, który nie należy do fizjologii.")}
                  </div>
                  <div className="text-foreground font-medium text-lg md:text-2xl leading-[110%] tracking-[-0.96px] uppercase animate-fade-in" style={{
                animationDelay: "0.7s"
              }}>
                    {noOrphans("W świetle, które rozprasza logikę.")}
                  </div>
                </div>
                <svg className="w-[21.6px] h-[22.12px] fill-current flex-shrink-0" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.6 2.4H0V0H21.6V2.4Z" fill="currentColor" />
                  <path d="M19.184 22.12V0.519999H21.584V22.12H19.184Z" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col md:flex-row px-0 items-start md:items-center gap-6 md:gap-16 self-stretch">
              <img
            src="/artworks/collections/iii-materia/materia-03.jpg"
            alt="W poszukiwaniu III materii, cz. III"
            className="w-full md:w-[743px] h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openLightbox("/artworks/collections/iii-materia/materia-03.jpg", "W poszukiwaniu III materii, cz. III")} />

              <div className="flex flex-col justify-center items-start gap-3">
                <p className="text-lg md:text-2xl font-light leading-[110%] tracking-[-0.48px] uppercase text-muted-foreground">
                  [cz. III]
                </p>
                <ArrowLink to="/collections/iii-materia">{noOrphans("Przejdź do pełnej kolekcji")}</ArrowLink>
              </div>
            </div>

            <div className="flex px-0 justify-between items-center self-stretch py-[24px]">
              <CornerBracket />
              <CornerBracket />
            </div>
          </section>

          {/* Section IV */}
          <section className="max-w-[1648px] mx-auto px-4 md:px-9 py-12 md:py-[100px] flex flex-col items-start gap-6">
            <div className="flex px-0 items-center self-stretch">
              <div className="flex flex-col justify-center items-start md:items-end gap-8 flex-1">
                <p className="w-full max-w-[599px] text-lg md:text-2xl font-normal leading-[110%] tracking-[-0.48px] uppercase">
                  <span className="text-foreground">
                    {noOrphans("Wejście w Trzecią Materię nie wymaga wiary. Wymaga uważności.")}{" "}
                  </span>
                  <span className="opacity-45">
                    {"Ciszy."}
                    {"\n"}
                    {"\n"}
                  </span>
                  <span className="text-foreground">
                    {noOrphans("Zgody na to, że rzeczywistość jest większa niż to, czego dotykamy.")}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row px-0 justify-end items-start md:items-center gap-6 md:gap-16 self-stretch">
              <div className="flex flex-col justify-center items-start gap-3">
                <p className="text-lg md:text-2xl font-light leading-[110%] tracking-[-0.48px] uppercase text-muted-foreground">
                  [cz. IV | 2023]
                </p>
                <ArrowLink to="/collections/iii-materia">{noOrphans("Przejdź do pełnej kolekcji")}</ArrowLink>
              </div>
              <img
            src="/artworks/collections/iii-materia/materia-04.jpg"
            alt="W poszukiwaniu III materii, cz. IV"
            className="w-full md:w-[640px] aspect-square md:aspect-auto md:h-[698px] object-cover cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openLightbox("/artworks/collections/iii-materia/materia-04.jpg", "W poszukiwaniu III materii, cz. IV")} />

            </div>

            <div className="flex px-0 justify-between items-center self-stretch">
              <CornerBracket />
              <CornerBracket />
            </div>
          </section>

          {/* Dark Section - Other Works */}
          <section ref={darkCarouselRef} className="max-w-[1648px] mx-auto">
            <div className="bg-secondary px-9 pt-[30px] pb-9 flex flex-col gap-16">
              <div className="flex flex-col gap-3">
                <div className="flex">
                  <Link to="/tworczość/grafiki" className="text-2xl font-medium leading-[110%] tracking-[-0.04em] uppercase text-secondary-foreground hover:text-white transition-colors opacity-50 hover:opacity-100">
                    GRAFIKI
                  </Link>
                </div>
                <div className="flex">
                  <Link to="/tworczość/artefakty" className="text-2xl font-medium leading-[110%] tracking-[-0.04em] uppercase text-secondary-foreground hover:text-white transition-colors opacity-50 hover:opacity-100">
                    ARTEFAKTY
                  </Link>
                </div>
                <div className="flex">
                  <Link to="/tworczość/instalacje" className="text-2xl font-medium leading-[110%] tracking-[-0.04em] uppercase text-secondary-foreground hover:text-white transition-colors opacity-50 hover:opacity-100">
                    INSTALACJE
                  </Link>
                </div>
              </div>

              {/* Horizontal Carousel Gallery */}
              <Carousel setApi={setDarkCarouselApi} opts={{
            align: "start",
            loop: false,
            dragFree: true
          }} className="w-full">
                <CarouselContent className="gap-1">
                  {[...rysunki, ...artworksData.artefakty, ...artworksData.instalacje].slice(0, 8).map((artwork) => <CarouselItem key={artwork.id} className="basis-auto pl-0">
                      <div className="relative cursor-pointer" onClick={() => openLightbox(artwork.image, artwork.title)}>
                        <img src={artwork.image} alt={artwork.title} className="h-[400px] w-auto md:w-[404px] md:h-[539px] object-cover hover:opacity-90 transition-opacity" draggable={false} />
                        <div className="absolute bottom-4 left-4 text-white/80 text-sm">{artwork.title}</div>
                      </div>
                    </CarouselItem>)}
                </CarouselContent>
              </Carousel>
            </div>
          </section>

          {/* Final Philosophy Sections */}
          <section className="max-w-[1648px] mx-auto px-9 py-[100px] flex flex-col items-start gap-9">
            <div className="flex px-0 items-center self-stretch">
              <div className="flex flex-col md:flex-row justify-between items-start flex-1">
                <CornerBracket />
                <p style={{
              animationDelay: "0.2s"
            }} className="w-full max-w-[579px] text-lg md:text-2xl font-medium leading-[110%] tracking-[-0.48px] uppercase animate-fade-in py-4 md:py-[24px]">
                  {noOrphans("To nie jest opowieść o mistyce. To opowieść o strukturze istnienia, która nie mieści się w ciele ani w myśli, a mimo to kieruje jednym i drugim.")}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row px-0 items-start gap-[42px] self-stretch">
              <div className="flex flex-col items-start gap-6 flex-1">
                <img
              src="/artworks/collections/iii-materia/materia-05.jpg"
              alt="W poszukiwaniu III materii, cz. V"
              className="w-full h-auto md:h-[832px] self-stretch object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox("/artworks/collections/iii-materia/materia-05.jpg", "W poszukiwaniu III materii, cz. V")} />

                <div className="flex items-center gap-3">
                  <p className="text-2xl font-light leading-[110%] tracking-[-0.48px] uppercase text-center text-muted-foreground">
                    [cz. V | 2023]
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center items-start gap-6 flex-1">
                <img
              src="/artworks/collections/iii-materia/materia-06.jpg"
              alt="W poszukiwaniu III materii, cz. VI"
              className="w-full h-auto md:h-[907px] self-stretch object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox("/artworks/collections/iii-materia/materia-06.jpg", "W poszukiwaniu III materii, cz. VI")} />

                <div className="flex items-center gap-3">
                  <p className="text-2xl font-light leading-[110%] tracking-[-0.48px] uppercase text-center text-muted-foreground">
                    [cz. VI | 2023]
                  </p>
                </div>
              </div>
            </div>

            <div className="flex px-0 items-center self-stretch">
              <div className="flex w-[1208px] justify-between items-start self-stretch">
                <CornerBracket />
                <CornerBracket />
              </div>
            </div>
          </section>

          {/* CZ VII Section */}
          <section className="max-w-[1648px] mx-auto py-[100px] flex flex-col items-start gap-9">
            <div className="flex px-9 flex-col items-start gap-6 self-stretch">
              <div className="flex flex-col justify-center items-start gap-8 self-stretch">
                <p className="self-stretch text-lg md:text-2xl font-medium leading-[110%] tracking-[-0.96px] uppercase animate-fade-in" style={{
              animationDelay: "0.2s"
            }}>
                  {noOrphans("To energia, która nie domaga się dowodu. Odsłania się tylko tym, którzy potrafią słuchać inaczej.")}
                </p>
              </div>
              <div className="flex justify-between items-center self-stretch">
                <div className="flex items-center gap-3">
                  <p className="text-2xl font-light leading-[110%] tracking-[-0.48px] uppercase text-center text-muted-foreground">
                    [cz. VII | 2023]
                  </p>
                </div>
                <ArrowLink to="/collections/iii-materia">{noOrphans("Przejdź do pełnej kolekcji")}</ArrowLink>
              </div>
            </div>

            <div className="flex px-9 flex-col justify-end items-start gap-16 self-stretch">
              <img
            src="/artworks/collections/iii-materia/materia-07.jpg"
            alt="W poszukiwaniu III materii, cz. VII"
            className="w-full h-auto md:h-[788px] md:aspect-[2/1] object-cover cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openLightbox("/artworks/collections/iii-materia/materia-07.jpg", "W poszukiwaniu III materii, cz. VII")} />

            </div>

            <div className="flex px-9 justify-between items-end self-stretch">
              <div className="flex flex-col justify-center items-start gap-8 flex-1">
                <p className="self-stretch text-2xl font-medium leading-[110%] tracking-[-0.96px] uppercase">
                  {noOrphans("Jesteśmy zbudowani z tkanek, emocji i wspomnień, a jednak każdy z nas nosi w sobie coś, czego nie da się nazwać.")}
                </p>
              </div>
            </div>

            <div className="flex px-9 justify-between items-center self-stretch">
              <svg width="1576" height="23" viewBox="0 0 1576 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex justify-between items-start flex-1 self-stretch">
                <path d="M21.6 2.4H0V0H21.6V2.4Z" fill="currentColor" />
                <path d="M19.184 22.12V0.519999H21.584V22.12H19.184Z" fill="currentColor" />
                <path d="M1576 2.4H1554.4V0H1576V2.4Z" fill="currentColor" />
                <path d="M1573.58 22.12V0.519999H1575.98V22.12H1573.58Z" fill="currentColor" />
              </svg>
            </div>
          </section>

          {/* Section VIII - cz8 */}
          <section className="max-w-[1648px] mx-auto px-0 py-[100px] flex flex-col items-start gap-9">
            <div className="flex px-9 items-center self-stretch">
              <div className="flex flex-col justify-center items-center gap-8 flex-1">
                <p className="self-stretch text-2xl font-medium leading-[110%] tracking-[-0.96px] uppercase text-center animate-fade-in" style={{
              animationDelay: "0.2s"
            }}>
                  {noOrphans("Pod skórą miesza się kosmos.")}
                  {"\n"}
                  {"\n"}{noOrphans("W strukturze komórek drga echo tego,")}
                  {"\n"}
                  {"\n"}{noOrphans("co tworzy galaktyki i zapadające się gwiazdy.")}
                </p>
              </div>
            </div>

            <div className="flex px-9 items-center self-stretch">
              <div className="flex justify-center items-center flex-1">
                <div className="flex items-center gap-3">
                  <p className="text-2xl font-light leading-[110%] tracking-[-0.48px] uppercase text-center text-muted-foreground">
                    [cz. VIII | 2023]
                  </p>
                </div>
              </div>
            </div>

            <div className="flex px-9 flex-col justify-center items-center gap-16 self-stretch">
              <img
            src="/artworks/collections/iii-materia/materia-08.jpg"
            alt="W poszukiwaniu III materii, cz. VIII"
            className="w-full h-auto aspect-[1051/788] object-cover cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openLightbox("/artworks/collections/iii-materia/materia-08.jpg", "W poszukiwaniu III materii, cz. VIII")} />

            </div>

            <div className="flex px-9 items-center self-stretch">
              <div className="flex flex-col justify-center items-center gap-8 flex-1">
                <p className="text-base font-normal leading-[110%] tracking-[-0.32px] uppercase text-center animate-fade-in" style={{
              animationDelay: "0.4s"
            }}>
                  {noOrphans("Mikro i makro nie są przeciwieństwami. Są tą samą historią, opowiedzianą innym językiem.")}
                </p>
              </div>
            </div>

            <div className="flex px-9 items-center self-stretch">
              <svg width="1208" height="23" viewBox="0 0 1208 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex w-full justify-between items-start self-stretch">
                <path d="M21.6 2.4H0V0H21.6V2.4Z" fill="currentColor" />
                <path d="M19.184 22.12V0.519999H21.584V22.12H19.184Z" fill="currentColor" />
                <path d="M1208 2.4H1186.4V0H1208V2.4Z" fill="currentColor" />
                <path d="M1205.58 22.12V0.519999H1207.98V22.12H1205.58Z" fill="currentColor" />
              </svg>
            </div>
          </section>

          {/* Section IX & X - cz9 & cz10 */}
          <section className="max-w-[1648px] mx-auto py-[100px] flex flex-col items-start gap-9">
            <div className="flex px-9 justify-end items-center self-stretch">
              <div className="flex justify-between items-start flex-1">
                <p className="w-full max-w-[579px] text-lg md:text-2xl font-normal leading-[110%] tracking-[-0.48px] uppercase">
                  <span className="font-medium animate-fade-in" style={{
                animationDelay: "0.1s"
              }}>
                    {noOrphans("Trzecia Materia jest w każdym z nas. Pulsuje, porusza, prowadzi.")}
                    {"\n"}
                  </span>
                  <span className="opacity-50 animate-fade-in" style={{
                animationDelay: "0.3s"
              }}>
                    {noOrphans("Jest początkiem i echem.")}
                    {"\n"}
                  </span>
                  <span className="font-medium animate-fade-in" style={{
                animationDelay: "0.5s"
              }}>
                    {noOrphans("Mostem między światłem a ciemnością. Naszą własną, ukrytą nieskończonością.")}
                  </span>
                </p>
                <CornerBracket />
              </div>
            </div>

            <div className="px-9 items-start gap-[42px] self-stretch flex flex-col md:flex-row">
              <div className="flex flex-col justify-center items-start gap-6 flex-1">
                <img
              src="/artworks/collections/iii-materia/materia-09.jpg"
              alt="W poszukiwaniu III materii, cz. IX"
              className="w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox("/artworks/collections/iii-materia/materia-09.jpg", "W poszukiwaniu III materii, cz. IX")} />

                <div className="flex items-center gap-3">
                  <p className="text-2xl font-light leading-[110%] tracking-[-0.48px] uppercase text-center text-muted-foreground">
                    [cz. IX | 2023]
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-6 flex-1">
                <img
              src="/artworks/collections/iii-materia/materia-10.jpg"
              alt="W poszukiwaniu III materii, cz. X"
              className="w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox("/artworks/collections/iii-materia/materia-10.jpg", "W poszukiwaniu III materii, cz. X")} />

                <div className="flex items-center gap-3">
                  <p className="text-2xl font-light leading-[110%] tracking-[-0.48px] uppercase text-center text-muted-foreground">
                    [cz. x | 2023]
                  </p>
                </div>
              </div>
            </div>

            <div className="flex px-9 items-center self-stretch">
              <svg width="1208" height="23" viewBox="0 0 1208 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex w-[1208px] justify-between items-start self-stretch">
                <path d="M21.6 2.4H0V0H21.6V2.4Z" fill="currentColor" />
                <path d="M19.184 22.12V0.519999H21.584V22.12H19.184Z" fill="currentColor" />
                <path d="M1208 2.4H1186.4V0H1208V2.4Z" fill="currentColor" />
                <path d="M1205.58 22.12V0.519999H1207.98V22.12H1205.58Z" fill="currentColor" />
              </svg>
            </div>
          </section>
        </>}

      {/* Lightbox */}
      {lightboxImage &&
    <ImageLightbox
      image={lightboxImage.src}
      title={lightboxImage.title}
      onClose={() => setLightboxImage(null)} />

    }
    </div>;
};
export default Home;