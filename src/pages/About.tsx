import { useEffect, useRef, useState } from "react";
import CornerBracket from "@/components/CornerBracket";
import ArrowLink from "@/components/ArrowLink";

const About = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section');
            if (id) {
              setVisibleSections((prev) => new Set([...prev, id]));
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    sectionRefs.current.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const registerSection = (id: string) => (el: HTMLElement | null) => {
    if (el) {
      sectionRefs.current.set(id, el);
    }
  };

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section - Full width image with overlay text */}
      <section 
        ref={registerSection('hero')}
        data-section="hero"
        className="relative min-h-[90vh] flex items-end"
      >
        <div className="absolute inset-0">
          <img 
            src="/about/bogna-03.jpg" 
            alt="Bogna Bartkowiak-Trepka w pracowni" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>
        <div className={`relative max-w-[1648px] mx-auto px-9 pb-16 md:pb-24 w-full transition-all duration-1000 ${isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-[40px] md:text-[72px] font-medium leading-[100%] tracking-[-0.02em] uppercase mb-6">
            Bogna Bartkowiak-Trepka
          </h1>
          <p className="text-lg md:text-xl font-light leading-[150%] max-w-[700px] italic">
            Artystka poruszająca się w przestrzeni wspólnej dla nauki, duchowości i sztuki
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section 
        ref={registerSection('intro')}
        data-section="intro"
        className="max-w-[1648px] mx-auto px-9 py-24 md:py-32"
      >
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center transition-all duration-1000 delay-200 ${isVisible('intro') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="order-2 md:order-1">
            <div className="flex items-start gap-6 mb-8">
              <CornerBracket className="hidden md:block flex-shrink-0" />
              <p className="text-base md:text-lg font-light leading-[160%] tracking-[-0.02em] text-foreground/90">
                Moja twórczość wyrasta z potrzeby poszukiwania odpowiedzi na pytania o przyczynę i sens istnienia oraz z fascynacji tym, co wymyka się materii, myśli i racjonalnemu poznaniu.
              </p>
            </div>
            <div className="flex items-start gap-6">
              <p className="text-base md:text-lg font-light leading-[160%] tracking-[-0.02em] text-foreground/90">
                Jestem również praktykującą lekarką. Studia medyczne pozwoliły mi zgłębiać anatomię i mechanizmy funkcjonowania ludzkiego ciała. Zamiast jednoznacznych odpowiedzi doświadczenie to przyniosło mi jednak kolejne pytania i wzmocniło świadomość, jak rozległy obszar rzeczywistości pozostaje poza granicami naszej wiedzy.
              </p>
              <CornerBracket className="hidden md:block flex-shrink-0" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="/about/bogna-02.jpg" 
              alt="Bogna Bartkowiak-Trepka - portret" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Between Science and Mystery */}
      <section 
        ref={registerSection('between')}
        data-section="between"
        className="bg-secondary text-secondary-foreground py-24 md:py-32 overflow-hidden"
      >
        <div className="max-w-[1648px] mx-auto px-9">
          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-12 items-center transition-all duration-1000 ${isVisible('between') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="lg:col-span-1">
              <img 
                src="/about/bogna-05.jpg" 
                alt="Bogna w ruchu - proces twórczy" 
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
            </div>
            <div className="lg:col-span-2 space-y-8">
              <p className="text-[24px] md:text-[36px] font-light leading-[130%] tracking-[-0.02em] italic">
                To właśnie w tej przestrzeni — pomiędzy naukową precyzją a tajemnicą — zakorzeniła się moja praktyka artystyczna.
              </p>
              <p className="text-base font-light leading-[160%] tracking-[-0.02em] text-secondary-foreground/80 max-w-[600px]">
                W swojej twórczości łączę doświadczenia lekarskie z poszukiwaniami tego, co niewyjaśnione i niewyjaśnialne. Badając granice pomiędzy tym, co fizyczne, a tym, co metafizyczne, tworzę własny język wizualny — próbę dialogu między intuicją, świadomością, materią i wewnętrzną energią.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working with Objects - Detail shots */}
      <section 
        ref={registerSection('objects')}
        data-section="objects"
        className="max-w-[1648px] mx-auto px-9 py-24 md:py-32"
      >
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 transition-all duration-1000 ${isVisible('objects') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="md:col-span-1 space-y-6">
            <img 
              src="/about/bogna-06.jpg" 
              alt="Praca z artefaktami - detal" 
              className="w-full h-auto object-cover"
            />
            <img 
              src="/about/bogna-07.jpg" 
              alt="Artefakty - zbliżenie" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:col-span-2 flex flex-col justify-center">
            <img 
              src="/about/bogna-04.jpg" 
              alt="Bogna pracująca z artefaktami" 
              className="w-full h-auto object-cover mb-8"
            />
            <p className="text-base font-light leading-[160%] tracking-[-0.02em] text-foreground/90 max-w-[600px]">
              Pracuję głównie z farbą olejną, lecz sięgam również po instalacje, grafikę, rzeźbę oraz nowe media. Tworzę sztukę, która nie tylko oddziałuje wizualnie, ale także zaprasza do pogłębionej refleksji nad naturą rzeczywistości, świadomości i istnienia.
            </p>
          </div>
        </div>
      </section>

      {/* III Materia Project Section */}
      <section 
        ref={registerSection('materia')}
        data-section="materia"
        className="border-t border-b border-foreground"
      >
        <div className="max-w-[1648px] mx-auto px-9 py-24 md:py-32">
          <div className={`transition-all duration-1000 ${isVisible('materia') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-[28px] md:text-[48px] font-medium leading-[110%] tracking-[-0.02em] uppercase mb-16">
              W poszukiwaniu III Materii
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div className="space-y-8">
                <p className="text-base font-light leading-[160%] tracking-[-0.02em] text-foreground/90">
                  Projekt <em className="font-medium">W poszukiwaniu III Materii</em> — obejmujący obrazy, grafiki, artefakty oraz seans 3D przeznaczony do prezentacji na ekranie sferycznym planetarium — jest rezultatem wieloletnich rozważań, poszukiwań filozoficznych oraz eksperymentów artystycznych prowadzonych na granicy percepcji.
                </p>
                <p className="text-base font-light leading-[160%] tracking-[-0.02em] text-foreground/90">
                  To także przekorna próba odnalezienia duszy człowieka w medycznych badaniach obrazowych oraz moja indywidualna interpretacja tego, co niewypowiedziane — zbliżenie się do Niewiadomej zarówno poprzez sam akt twórczy, jak i jego efekt.
                </p>
              </div>
              <div className="space-y-8">
                <p className="text-base font-light leading-[160%] tracking-[-0.02em] text-foreground/90">
                  Kolejne projekty stanowią kontynuację tych poszukiwań — są ich rozwinięciem, nawarstwieniem i dalszym eksplorowaniem idei Trzeciej Materii.
                </p>
                <ArrowLink to="/collections/iii-materia">
                  Zobacz kolekcję III Materia
                </ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Joy of Creation - Full width image section */}
      <section 
        ref={registerSection('joy')}
        data-section="joy"
        className="relative min-h-[70vh] flex items-center"
      >
        <div className="absolute inset-0">
          <img 
            src="/about/bogna-01.jpg" 
            alt="Bogna z artefaktem" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>
        <div className={`relative max-w-[1648px] mx-auto px-9 py-24 transition-all duration-1000 delay-300 ${isVisible('joy') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
          <blockquote className="max-w-[600px]">
            <p className="text-[22px] md:text-[32px] font-light leading-[140%] tracking-[-0.02em] italic mb-8">
              Tworzenie jest dla mnie źródłem radości i głębokiej satysfakcji. Obcowanie ze sztuką — zarówno w procesie twórczym, jak i w jego kontemplacji — daje mi poczucie spełnienia i wewnętrznej harmonii.
            </p>
            <p className="text-lg font-medium">
              To przestrzeń, w której czuję się najbardziej obecna i prawdziwa.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Artistic Manifesto */}
      <section 
        ref={registerSection('manifest')}
        data-section="manifest"
        className="bg-secondary text-secondary-foreground"
      >
        <div className="max-w-[1648px] mx-auto px-9 py-24 md:py-32">
          <div className={`transition-all duration-1000 ${isVisible('manifest') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-[20px] md:text-[32px] font-medium leading-[110%] tracking-[-0.02em] uppercase mb-16">
              Manifest artystyczny
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <blockquote className="relative pl-8 border-l-2 border-secondary-foreground/30">
                <p className="text-[18px] md:text-[22px] font-light leading-[150%] tracking-[-0.02em]">
                  "Sztuka jest dla mnie narzędziem badawczym, które pozwala poznać to, co istnieje poza naszym bezpośrednim doświadczeniem. W swojej twórczości poszukuję Trzeciej Materii - wymiaru, który nie jest ani fizyczny, ani mentalny, ale stanowi esencję naszego istnienia."
                </p>
              </blockquote>
              <blockquote className="relative pl-8 border-l-2 border-secondary-foreground/30">
                <p className="text-[18px] md:text-[22px] font-light leading-[150%] tracking-[-0.02em]">
                  "Wierzę, że poprzez sztukę możemy dotknąć tego, co niewyrażalne w języku nauki czy codziennej komunikacji. Moje obrazy są zapisem tych poszukiwań - zaproszeniem do spojrzenia głębiej, poza powierzchnię rzeczywistości."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-[1648px] mx-auto px-9 py-16 md:py-24">
        <h2 className="text-[20px] md:text-[32px] font-medium leading-[110%] tracking-[-0.02em] uppercase mb-12">
          Edukacja
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="flex items-start gap-6">
            <span className="text-[14px] font-medium text-muted-foreground min-w-[60px]">2024</span>
            <div>
              <p className="text-base font-medium">Specjalizacja z medycyny rodzinnej</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <span className="text-[14px] font-medium text-muted-foreground min-w-[60px]">2023</span>
            <div>
              <p className="text-base font-medium">Akademia Sztuk Pięknych w Katowicach</p>
              <p className="text-sm text-muted-foreground">Wydział Artystyczny, Kierunek: Grafika</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <span className="text-[14px] font-medium text-muted-foreground min-w-[60px]">2014</span>
            <div>
              <p className="text-base font-medium">Śląski Uniwersytet Medyczny w Katowicach</p>
              <p className="text-sm text-muted-foreground">Wydział Lekarski z Oddziałem Lekarsko-Dentystycznym, Kierunek: Lekarski</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibitions Section */}
      <section className="bg-muted">
        <div className="max-w-[1648px] mx-auto px-9 py-16 md:py-24">
          <h2 className="text-[20px] md:text-[32px] font-medium leading-[110%] tracking-[-0.02em] uppercase mb-12">
            Wystawy
          </h2>
          
          {/* Individual Exhibitions */}
          <div className="mb-16">
            <h3 className="text-[16px] md:text-[20px] font-medium uppercase mb-8 text-muted-foreground">
              Wystawy indywidualne
            </h3>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 border-b border-foreground/20 pb-6">
                <span className="text-[14px] font-medium text-muted-foreground min-w-[100px]">2023/2024</span>
                <div>
                  <p className="text-base font-medium">W POSZUKIWANIU TRZECIEJ MATERII</p>
                  <p className="text-sm text-muted-foreground">Seans artystyczny, Planetarium - Śląski Park Nauki, Chorzów</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 border-b border-foreground/20 pb-6">
                <span className="text-[14px] font-medium text-muted-foreground min-w-[100px]">2023</span>
                <div>
                  <p className="text-base font-medium">W POSZUKIWANIU TRZECIEJ MATERII</p>
                  <p className="text-sm text-muted-foreground">Wystawa kolekcji prac malarskich, Planetarium - Śląski Park Nauki, Chorzów</p>
                </div>
              </div>
            </div>
          </div>

          {/* Group Exhibitions */}
          <div>
            <h3 className="text-[16px] md:text-[20px] font-medium uppercase mb-8 text-muted-foreground">
              Wystawy zbiorowe
            </h3>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 border-b border-foreground/20 pb-6">
                <span className="text-[14px] font-medium text-muted-foreground min-w-[100px]">2024/25</span>
                <div>
                  <p className="text-base font-medium">RE-RECOVERY</p>
                  <p className="text-sm text-muted-foreground">Rondo Sztuki, Katowice</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 border-b border-foreground/20 pb-6">
                <span className="text-[14px] font-medium text-muted-foreground min-w-[100px]">2024/25</span>
                <div>
                  <p className="text-base font-medium">12. TRIENNALE GRAFIKI POLSKIEJ</p>
                  <p className="text-sm text-muted-foreground">Muzeum Śląskie, Katowice</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 border-b border-foreground/20 pb-6">
                <span className="text-[14px] font-medium text-muted-foreground min-w-[100px]">2023/2024</span>
                <div>
                  <p className="text-base font-medium">S.C.R.E.E.N.</p>
                  <p className="text-sm text-muted-foreground">Wystawa Pracowni Sitodruku ASP w Katowicach, Galeria Instytutu Sztuk Pięknych UR, Rzeszów</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 border-b border-foreground/20 pb-6">
                <span className="text-[14px] font-medium text-muted-foreground min-w-[100px]">2023</span>
                <div>
                  <p className="text-base font-medium">RAJZEFIBER</p>
                  <p className="text-sm text-muted-foreground">Wystawa prac dyplomowych ASP w Katowicach, BWA w Katowicach</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 border-b border-foreground/20 pb-6">
                <span className="text-[14px] font-medium text-muted-foreground min-w-[100px]">2022</span>
                <div>
                  <p className="text-base font-medium">TOŻ(TO)SAMO(TNO)ŚĆ</p>
                  <p className="text-sm text-muted-foreground">Wystawa koła grafiki Koszary grafki, Absurdalna, Katowice</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 border-b border-foreground/20 pb-6">
                <span className="text-[14px] font-medium text-muted-foreground min-w-[100px]">2020</span>
                <div>
                  <p className="text-base font-medium">PROSTE GESTY</p>
                  <p className="text-sm text-muted-foreground">BWA w Katowicach</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 pb-6">
                <span className="text-[14px] font-medium text-muted-foreground min-w-[100px]">2014</span>
                <div>
                  <p className="text-base font-medium">SITOTISK/SITODRUK</p>
                  <p className="text-sm text-muted-foreground">Wystawa Pracowni Serigrafii w Katowicach, Galeria Koridor, Ostrawa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="max-w-[1648px] mx-auto px-9 py-16 md:py-24">
          <h2 className="text-[20px] md:text-[32px] font-medium leading-[110%] tracking-[-0.02em] uppercase mb-12">
            Kontakt
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-sm uppercase text-secondary-foreground/60 mb-2">Email</p>
              <a 
                href="mailto:bartkowiakbogna@gmail.com" 
                className="text-base hover:underline transition-all duration-300"
              >
                bartkowiakbogna@gmail.com
              </a>
            </div>
            <div>
              <p className="text-sm uppercase text-secondary-foreground/60 mb-2">Instagram</p>
              <a 
                href="https://www.instagram.com/bogna_bartkowiak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-base hover:underline transition-all duration-300"
              >
                @bogna_bartkowiak
              </a>
            </div>
            <div>
              <p className="text-sm uppercase text-secondary-foreground/60 mb-2">YouTube</p>
              <a 
                href="https://www.youtube.com/watch?v=UKljf1XDh0k&list=PLjiSr4QYw7PzFWYJYW5cQstY7DQJzxyXG" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-base hover:underline transition-all duration-300"
              >
                Kanał artystyczny
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
