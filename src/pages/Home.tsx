import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CornerBracket from "@/components/CornerBracket";
import ArrowLink from "@/components/ArrowLink";
import TypingText from "@/components/TypingText";
import { useAnimation } from "@/contexts/AnimationContext";
import artworksData from "@/data/artworks.json";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { useParallaxCarousel } from "@/hooks/useParallaxCarousel";
const Home = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const {
    setHeroTypingComplete
  } = useAnimation();
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [darkCarouselApi, setDarkCarouselApi] = useState<CarouselApi>();
  const carouselRef = useParallaxCarousel(carouselApi);
  const darkCarouselRef = useParallaxCarousel(darkCarouselApi);
  const iiiMateriaCollection = artworksData.collections.find(c => c.id === "iii-materia");
  const artworks = iiiMateriaCollection?.artworks || [];
  const rysunki = artworksData.rysunki || [];

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
        <div className="flex items-start gap-6 max-w-[574px]">
          <CornerBracket />
          <img src="/artworks/profile.jpg" alt="Bogna Bartkowiak" className="w-[114px] h-[174px] object-cover flex-shrink-0" />
          <p className="flex-1 text-sm font-normal leading-[125%] uppercase animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            Jestem absolwentką Akademii Sztuk Pięknych w Katowicach i lekarzem, która w swoich obrazach bada
            niewidzialne warstwy istnienia, łącząc doświadczenie medyczne, artystyczną intuicję i Trzecią Materię.
          </p>
          <CornerBracket />
        </div>
      </section>

      {/* Main Hero Text */}
      <section className="max-w-[1648px] mx-auto px-9 py-0 mt-[42px]">
        <div className="flex flex-col gap-8 py-8">
          <h1 className="text-[32px] md:text-[72px] font-medium leading-[100%] tracking-[-0.02em] uppercase max-w-none">
            {sessionStorage.getItem("heroAnimationComplete") === "true" ? "Co sprawia, że jesteśmy ożywieni? Co kieruje naszym istnieniem, jeśli wykraczamy poza myśli i widzialną materię?" : <TypingText text="Co sprawia, że jesteśmy ożywieni? Co kieruje naszym istnieniem, jeśli wykraczamy poza myśli i widzialną materię?" speed={25} delay={300} pauseAt={33} pauseDuration={2300} onComplete={handleAnimationComplete} />}
          </h1>
        </div>
      </section>

      {/* Gallery Section */}
      {typingComplete && <>
          <section ref={carouselRef} className="max-w-[1648px] mx-auto mt-[100px] mb-8 animate-fade-in">
            <div className="flex justify-end px-9 mb-6">
              <ArrowLink to="/collections/iii-materia">Przejdź do pełnej kolekcji</ArrowLink>
            </div>

            {/* Draggable Carousel Gallery */}
            <Carousel setApi={setCarouselApi} opts={{
          align: "start",
          loop: false,
          dragFree: true
        }} className="w-full">
              <CarouselContent className="px-9 gap-1">
                {artworks.slice(0, 10).map(artwork => <CarouselItem key={artwork.id} className="basis-auto pl-0">
                    <img src={artwork.image} alt={artwork.title} className="w-[404px] h-[539px] object-cover" draggable={false} />
                  </CarouselItem>)}
              </CarouselContent>
            </Carousel>

            {/* Description Section */}
            <div className="px-9 pt-9 pb-[78px] flex items-start gap-16">
              <CornerBracket />
              <p className="flex-1 text-base font-light leading-[125%] tracking-[-0.02em] text-foreground/90 animate-fade-in" style={{
            animationDelay: "0.4s"
          }}>
                Moja praca zaczyna się tam, gdzie kończy się język. Od zawsze fascynowało mnie to, czego nie da się
                nazwać: momenty pomiędzy oddechami, przestrzenie wewnątrz ciała, ciche impulsy świadomości. Jako lekarka
                przez lata uczyłam się patrzeć na człowieka przez pryzmat anatomii i nauki. Jako malarka — przez pryzmat
                intuicji, symbolu i doświadczenia.
              </p>
              <CornerBracket />
              <p className="flex-1 text-base font-light leading-[125%] tracking-[-0.02em] text-foreground/90 animate-fade-in" style={{
            animationDelay: "0.6s"
          }}>
                Kolekcja Trzeciej Materii powstała z potrzeby zrozumienia tego, co niewidzialne, a jednak fundamentalne.
                To mój osobisty sposób badania energii, która kieruje nami, zanim pojawi się myśl, ruch czy decyzja.
                Interesuje mnie stan pomiędzy materią a świadomością, wszędzie tam, gdzie ciało przestaje być tylko
                biologią, a staje się nośnikiem czegoś znacznie subtelniejszego.
              </p>
            </div>
          </section>

          {/* Collection Title */}
          <section className="max-w-[1648px] mx-auto px-9">
            <div className="flex items-start gap-2 justify-between">
              <div>
                <h2 className="text-[32px] font-normal leading-[110%] tracking-[-0.02em] uppercase animate-fade-in" style={{
              animationDelay: "0.2s"
            }}>
                  [III MATERIA]
                </h2>
              </div>
              <p className="text-2xl font-light leading-[110%] tracking-[-0.04em] uppercase">2023</p>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="max-w-[1648px] mx-auto px-9 py-[100px]">
            <div className="flex justify-end items-center self-stretch py-[24px]">
              <div className="flex justify-between items-start flex-1">
                <div className="flex w-full md:w-[565.801px] flex-col items-start gap-0.5">
                  <div className="w-full text-foreground font-medium text-2xl leading-[110%] tracking-[-0.96px] uppercase animate-fade-in" style={{
                animationDelay: "0.1s"
              }}>
                    Trzecia Materia istnieje.
                  </div>
                  <div className="text-muted-foreground font-normal text-2xl leading-[110%] tracking-[-0.96px] uppercase animate-fade-in" style={{
                animationDelay: "0.3s"
              }}>
                    Nie jest ciałem.
                  </div>
                  <div className="text-muted-foreground font-normal text-2xl leading-[110%] tracking-[-0.96px] uppercase animate-fade-in" style={{
                animationDelay: "0.5s"
              }}>
                    Nie jest myślą.
                  </div>
                  <div className="text-foreground font-medium text-2xl leading-[110%] tracking-[-0.96px] uppercase animate-fade-in" style={{
                animationDelay: "0.7s"
              }}>
                    To to, co sprawia, że jesteśmy.
                  </div>
                </div>
                <svg className="w-[21.6px] h-[22.12px] fill-current" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.6 2.4H0V0H21.6V2.4Z" fill="currentColor" />
                  <path d="M19.184 22.12V0.519999H21.584V22.12H19.184Z" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Two Column Images */}
            <div className="flex flex-col md:flex-row gap-16 mb-9">
              <div className="flex-1 flex flex-col gap-6">
                <img src="/artworks/collections/iii-materia/materia-01.jpg" alt="Materia I" className="w-full aspect-[756/894] object-cover" />
                <p className="text-2xl font-light leading-[110%] tracking-[-0.02em] uppercase text-muted-foreground text-center">
                  [cz. I | 2023]
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-6">
                <img src="/artworks/collections/iii-materia/materia-02.jpg" alt="Materia II" className="w-full aspect-[756/820] object-cover" />
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
          {/* Philosophy Section */}
          <section className="max-w-[1648px] mx-auto px-9 py-[100px]">
            <div className="flex  justify-end items-center self-stretch py-[24px]">
              <div className="flex justify-between items-start flex-1">
                <div className="flex w-[565.801px] flex-col items-start gap-0.5">
                  <div className="w-[579px] text-foreground font-medium text-2xl leading-[110%] tracking-[-0.96px] uppercase animate-fade-in" style={{
                animationDelay: "0.1s"
              }}>
                    Pojawia się w momentach, których nie potrafimy uchwycić
                  </div>
                  <div className="text-muted-foreground font-normal text-2xl leading-[110%] tracking-[-0.96px] uppercase animate-fade-in" style={{
                animationDelay: "0.3s"
              }}>
                    w bezdechu między jednym a drugim impulsem.
                  </div>
                  <div className="text-muted-foreground font-normal text-2xl leading-[110%] tracking-[-0.96px] uppercase animate-fade-in" style={{
                animationDelay: "0.5s"
              }}>
                    W cichym pulsie, który nie należy do fizjologii.
                  </div>
                  <div className="text-foreground font-medium text-2xl leading-[110%] tracking-[-0.96px] uppercase animate-fade-in" style={{
                animationDelay: "0.7s"
              }}>
                    W świetle, które rozprasza logikę.
                  </div>
                </div>
                <svg className="w-[21.6px] h-[22.12px] fill-current" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.6 2.4H0V0H21.6V2.4Z" fill="currentColor" />
                  <path d="M19.184 22.12V0.519999H21.584V22.12H19.184Z" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div className="flex px-0 items-center gap-16 self-stretch">
              <img src="/artworks/collections/iii-materia/materia-03.jpg" alt="Materia III" className="w-full md:w-[743px] aspect-square object-cover" />
              <div className="flex flex-col justify-center items-start gap-3">
                <p className="text-2xl font-light leading-[110%] tracking-[-0.48px] uppercase text-center text-muted-foreground">
                  [cz. III]
                </p>
                <ArrowLink to="/collections/iii-materia">PRzejdź do pełnej kolekcji</ArrowLink>
              </div>
            </div>

            <div className="flex px-0 justify-between items-center self-stretch py-[24px]">
              <CornerBracket />
              <CornerBracket />
            </div>
          </section>

          {/* Section IV */}
          <section className="max-w-[1648px] mx-auto px-9 py-[100px] flex flex-col items-start gap-6">
            <div className="flex px-0 items-center self-stretch">
              <div className="flex flex-col justify-center items-end gap-8 flex-1">
                <p className="w-full md:w-[599px] text-2xl font-normal leading-[110%] tracking-[-0.48px] uppercase">
                  <span className="text-foreground">
                    Wejście w Trzecią Materię nie wymaga wiary.{"\n"}Wymaga uważności.{" "}
                  </span>
                  <span className="opacity-45">
                    Ciszy.{"\n"}
                    {"\n"}
                  </span>
                  <span className="text-foreground">
                    Zgody na to, że rzeczywistość jest większa niż to, czego dotykamy.
                  </span>
                </p>
              </div>
            </div>

            <div className="flex px-0 justify-end items-center gap-16 self-stretch">
              <div className="flex flex-col justify-center items-start gap-3">
                <p className="text-2xl font-light leading-[110%] tracking-[-0.48px] uppercase text-center text-muted-foreground">
                  [cz. IV | 2023]
                </p>
                <ArrowLink to="/collections/iii-materia">PRzejdź do pełnej kolekcji</ArrowLink>
              </div>
              <img src="/artworks/collections/iii-materia/materia-04.jpg" alt="Materia IV" className="w-full md:w-[640px] aspect-square md:aspect-auto md:h-[698px] object-cover" />
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
                  {[...rysunki, ...artworksData.artefakty, ...artworksData.instalacje].slice(0, 8).map(artwork => <CarouselItem key={artwork.id} className="basis-auto pl-0">
                      <div className="relative">
                        <img src={artwork.image} alt={artwork.title} className="w-[404px] h-[539px] object-cover" draggable={false} />
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
              <div className="flex justify-between items-start flex-1">
                <CornerBracket />
                <p className="w-[579px] text-2xl font-medium leading-[110%] tracking-[-0.48px] uppercase animate-fade-in" style={{
              animationDelay: "0.2s"
            }}>
                  To nie jest opowieść o mistyce. To opowieść o strukturze istnienia, która nie mieści się w ciele ani w
                  myśli, a mimo to kieruje jednym i drugim.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row px-0 items-start gap-[42px] self-stretch">
              <div className="flex flex-col items-start gap-6 flex-1">
                <img src="/artworks/collections/iii-materia/materia-05.jpg" alt="Materia V" className="w-full h-auto md:h-[832px] self-stretch object-cover" />
                <div className="flex items-center gap-3">
                  <p className="text-2xl font-light leading-[110%] tracking-[-0.48px] uppercase text-center text-muted-foreground">
                    [cz. V | 2023]
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center items-start gap-6 flex-1">
                <img src="/artworks/collections/iii-materia/materia-06.jpg" alt="Materia VI" className="w-full h-auto md:h-[907px] self-stretch object-cover" />
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
                <p className="self-stretch text-2xl font-medium leading-[110%] tracking-[-0.96px] uppercase animate-fade-in" style={{
              animationDelay: "0.2s"
            }}>
                  To energia, która nie domaga się dowodu. Odsłania się tylko tym, którzy potrafią słuchać inaczej.
                </p>
              </div>
              <div className="flex justify-between items-center self-stretch">
                <div className="flex items-center gap-3">
                  <p className="text-2xl font-light leading-[110%] tracking-[-0.48px] uppercase text-center text-muted-foreground">
                    [cz. VII | 2023]
                  </p>
                </div>
                <ArrowLink to="/collections/iii-materia">PRzejdź do pełnej kolekcji</ArrowLink>
              </div>
            </div>

            <div className="flex px-9 flex-col justify-end items-start gap-16 self-stretch">
              <img src="/artworks/collections/iii-materia/materia-07.jpg" alt="Materia VII" className="h-[788px] self-stretch aspect-[2/1] object-cover" />
            </div>

            <div className="flex px-9 justify-between items-end self-stretch">
              <div className="flex flex-col justify-center items-start gap-8 flex-1">
                <p className="self-stretch text-2xl font-medium leading-[110%] tracking-[-0.96px] uppercase">
                  Jesteśmy zbudowani z tkanek, emocji i wspomnień, a jednak każdy z nas nosi w sobie coś, czego nie da
                  się nazwać.
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
                  Pod skórą miesza się kosmos.
                  {"\n"}
                  {"\n"}W strukturze komórek drga echo tego,
                  {"\n"}
                  {"\n"}co tworzy galaktyki i zapadające się gwiazdy.
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
              <img src="/artworks/collections/iii-materia/materia-08.jpg" alt="Materia VIII" className="w-full h-auto aspect-[1051/788] object-cover" />
            </div>

            <div className="flex px-9 items-center self-stretch">
              <div className="flex flex-col justify-center items-center gap-8 flex-1">
                <p className="text-base font-normal leading-[110%] tracking-[-0.32px] uppercase text-center animate-fade-in" style={{
              animationDelay: "0.4s"
            }}>
                  Mikro i makro nie są przeciwieństwami.Są tą samą historią, opowiedzianą innym językiem.
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
                <p className="w-[579px] text-2xl font-normal leading-[110%] tracking-[-0.48px] uppercase">
                  <span className="font-medium animate-fade-in" style={{
                animationDelay: "0.1s"
              }}>
                    Trzecia Materia jest w każdym z nas. Pulsuje, porusza, prowadzi.{"\n"}
                  </span>
                  <span className="opacity-50 animate-fade-in" style={{
                animationDelay: "0.3s"
              }}>
                    Jest początkiem i echem.{"\n"}
                  </span>
                  <span className="font-medium animate-fade-in" style={{
                animationDelay: "0.5s"
              }}>
                    Mostem między światłem a ciemnością. Naszą własną, ukrytą nieskończonością.
                  </span>
                </p>
                <CornerBracket />
              </div>
            </div>

            <div className="flex px-9 items-start gap-[42px] self-stretch">
              <div className="flex flex-col justify-center items-start gap-6 flex-1">
                <img src="/artworks/collections/iii-materia/materia-09.jpg" alt="Materia IX" className="h-[654.14px] self-stretch aspect-[767/654.14] object-cover" />
                <div className="flex items-center gap-3">
                  <p className="text-2xl font-light leading-[110%] tracking-[-0.48px] uppercase text-center text-muted-foreground">
                    [cz. IX | 2023]
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-6 flex-1">
                <img src="/artworks/collections/iii-materia/materia-10.jpg" alt="Materia X" className="h-[958.75px] self-stretch aspect-[767/958.75] object-cover" />
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
    </div>;
};
export default Home;