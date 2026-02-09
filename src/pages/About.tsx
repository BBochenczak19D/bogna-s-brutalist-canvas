import CornerBracket from "@/components/CornerBracket";
import ArrowLink from "@/components/ArrowLink";
import { Instagram, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
const About = () => {
  return <div className="min-h-screen bg-background">
      {/* Hero Section - Inspired by reference layout */}
      <section className="max-w-[1648px] mx-auto px-4 md:px-9 pt-24 md:pt-32">
        {/* Name - Large uppercase */}
        <h1 className="text-6xl md:text-8xl font-bold uppercase leading-[0.9] tracking-[-0.03em] mb-4 lg:text-7xl">
          Bogna
Bartkowiak-Trepka 
        </h1>
        
        {/* Subtitle - Small text below name */}
        <p className="text-base md:text-lg text-foreground/70 mb-12 w-full">
          Jestem artystką poruszającą się w przestrzeni wspólnej dla nauki, duchowości i sztuki. Moja twórczość wyrasta z potrzeby poszukiwania odpowiedzi na pytania o przyczynę i sens istnienia.
        </p>

        {/* 4 Photos in a row */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 items-end">
          <div className="sm:flex-1">
            <img src="/about/bogna-02.jpg" alt="Bogna Bartkowiak - portret 1" className="w-full h-auto object-contain" />
          </div>
          <div className="sm:flex-1">
            <img src="/about/bogna-05.jpg" alt="Bogna Bartkowiak - portret 2" className="w-full h-auto object-contain" />
          </div>
          <div className="sm:flex-1">
            <img src="/about/bogna-04.jpg" alt="Bogna Bartkowiak - portret 3" className="w-full h-auto object-contain" />
          </div>
          <div className="sm:flex-1">
            <img src="/about/bogna-09.jpg" alt="Bogna Bartkowiak - portret 4" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* Contact info - Social links row */}
        <div className="flex flex-wrap items-center gap-8">
          <a href="https://www.instagram.com/bogna_bartkowiak" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-foreground/70 transition-colors group">
            <Instagram size={18} className="text-foreground/60 group-hover:text-foreground transition-colors" />
            <span>Instagram</span>
          </a>
          <a href="https://www.youtube.com/watch?v=UKljf1XDh0k&list=PLjiSr4QYw7PzFWYJYW5cQstY7DQJzxyXG" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-foreground/70 transition-colors group">
            <Youtube size={18} className="text-foreground/60 group-hover:text-foreground transition-colors" />
            <span>YouTube</span>
          </a>
          <a href="mailto:bartkowiakbogna@gmail.com" className="inline-flex items-center gap-2 text-sm hover:text-foreground/70 transition-colors group">
            <Mail size={18} className="text-foreground/60 group-hover:text-foreground transition-colors" />
            <span>bartkowiakbogna@gmail.com</span>
          </a>
        </div>
      </section>

      {/* Bio Section - Asymmetric Layout */}

      {/* Quote Section - Between Science and Mystery */}
      <section className="max-w-[1648px] mx-auto px-9 py-[100px]"></section>

      {/* Process & Manifesto Section - Redesigned */}
      <section className="max-w-[1648px] mx-auto px-4 md:px-9 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left - Large Image */}
          <div className="lg:col-span-5 w-fit">
            <img src="/about/bogna-09.jpg" alt="Bogna Bartkowiak z obrazem i rzeźbami" className="w-fit max-w-[600px] max-h-[564px] h-auto object-contain" />
          </div>

          {/* Center - Text Content */}
          <div className="lg:col-span-4 flex flex-col justify-center gap-[48px]">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Moja filozofia</span>
              <h3 className="text-2xl md:text-3xl font-medium leading-[120%] tracking-[-0.02em]">
                Między nauką a tajemnicą
              </h3>
            </div>

            <div className="relative pl-6 border-l-2 border-foreground/20">
              <p className="text-base font-light leading-[170%] tracking-[-0.01em] text-foreground/90 italic md:text-xl">
                W swojej twórczości łączę doświadczenia lekarskie z poszukiwaniami tego, co niewyjaśnione i
                niewyjaśnialne.
              </p>
            </div>

            <p className="text-sm leading-[170%] tracking-[-0.01em] text-foreground/70 md:text-lg">
              Badając granice pomiędzy tym, co fizyczne, a tym, co metafizyczne, tworzę własny język wizualny — próbę
              dialogu między intuicją, świadomością, materią i wewnętrzną energią.
            </p>

            <div className="flex items-center gap-4 mt-4">
              <div className="w-12 h-px bg-foreground/30" />
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Bogna Bartkowiak</span>
            </div>
          </div>

          {/* Right - Stacked Images */}
          <div className="lg:col-span-3 flex flex-col gap-4 items-center lg:items-start w-fit">
            <img src="/about/bogna-05.jpg" alt="Bogna w ruchu - proces twórczy" className="w-2/3 h-auto object-contain" />
            <img src="/about/bogna-04.jpg" alt="Praca z artefaktami" className="w-2/3 h-auto object-contain" />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-between mt-8">
          <CornerBracket />
          <CornerBracket />
        </div>
      </section>

      {/* III Materia Project Section */}
      <section className="relative overflow-hidden mt-[100px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/artworks/collections/iii-materia/materia-08.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-[1648px] mx-auto px-9 py-24 md:py-32">
          <h2 className="text-[28px] font-medium leading-[110%] tracking-[-0.02em] uppercase mb-16 text-white md:text-7xl">
            W poszukiwaniu III Materii
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <p className="font-light leading-[160%] tracking-[-0.02em] text-white/90 text-xl">
              Projekt <em className="font-medium">W poszukiwaniu III Materii</em> — obejmujący obrazy, grafiki,
              artefakty oraz seans 3D przeznaczony do prezentacji na ekranie sferycznym planetarium — jest rezultatem
              wieloletnich rozważań, poszukiwań filozoficznych oraz eksperymentów artystycznych prowadzonych na granicy
              percepcji.
            </p>
            <p className="font-light leading-[160%] tracking-[-0.02em] text-white/90 text-xl">
              To także przekorna próba odnalezienia duszy człowieka w medycznych badaniach obrazowych oraz moja
              indywidualna interpretacja tego, co niewypowiedziane — zbliżenie się do Niewiadomej zarówno poprzez sam
              akt twórczy, jak i jego efekt.
            </p>
          </div>
          <div className="mt-12 space-y-8">
            <p className="font-light leading-[160%] tracking-[-0.02em] text-white/90 text-4xl">
              Kolejne projekty stanowią kontynuację tych poszukiwań — są ich rozwinięciem, nawarstwieniem i dalszym
              eksplorowaniem idei Trzeciej Materii.
            </p>
            <ArrowLink to="/collections/iii-materia" className="text-white hover:text-white/70">
              Zobacz kolekcję III Materia
            </ArrowLink>
          </div>
        </div>
      </section>

      {/* Joy of Creation Section */}
      <section className="max-w-[1648px] mx-auto px-9 py-[100px]">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          {/* Text on left */}
          <div className="flex-1 flex flex-col gap-8 order-2 md:order-1">
            <div className="flex items-start gap-6">
              <CornerBracket className="hidden md:block flex-shrink-0" />
              <blockquote>
                <p className="text-[22px] font-light leading-[140%] tracking-[-0.02em] italic md:text-4xl">
                  Tworzenie jest dla mnie źródłem radości i głębokiej satysfakcji. Obcowanie ze sztuką — zarówno w
                  procesie twórczym, jak i w jego kontemplacji — daje mi poczucie spełnienia i wewnętrznej harmonii.
                </p>
              </blockquote>
            </div>
            <p className="text-lg font-medium text-foreground">
              To przestrzeń, w której czuję się najbardziej obecna i prawdziwa.
            </p>
          </div>
          {/* Image on right */}
          <div className="order-1 md:order-2 flex-shrink-0">
            <img src="/about/bogna-01.jpg" alt="Bogna z artefaktem" className="w-full md:w-auto md:max-w-[648px] md:max-h-[512px] h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Art & Reflection Section */}
      <section className="max-w-[1648px] mx-auto px-9 py-[100px]">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          {/* Image on left */}
          <div className="order-1 flex-shrink-0">
            <img alt="Bogna w pracowni" className="w-full md:w-auto md:max-w-[648px] md:max-h-[512px] h-auto object-contain" src="/lovable-uploads/3f303509-0d78-4508-bbd3-ec3dcc93f495.jpg" />
          </div>
          {/* Text on right */}
          <div className="flex-1 flex flex-col gap-8 order-2">
            <div className="flex items-start gap-6">
              <CornerBracket className="hidden md:block flex-shrink-0" />
              <blockquote>
                <p className="text-[22px] font-light leading-[140%] tracking-[-0.02em] italic md:text-4xl">
                  Pracuję głównie z farbą olejną, lecz sięgam również po instalacje, grafikę, rzeźbę oraz nowe media.
                </p>
              </blockquote>
            </div>
            <p className="text-lg font-medium text-foreground">
              Tworzę sztukę, która nie tylko oddziałuje wizualnie, ale także zaprasza do pogłębionej refleksji nad naturą rzeczywistości, świadomości i istnienia.
            </p>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="max-w-[1648px] mx-auto px-9 pb-[100px]">
        
      </section>

      {/* Artistic Manifesto - Dark Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/artworks/collections/iii-materia/materia-07.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-[1648px] mx-auto px-9 py-24 md:py-32">
          <h2 className="text-[20px] md:text-[32px] font-medium leading-[110%] tracking-[-0.02em] uppercase mb-16 text-white">
            Manifest artystyczny
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <blockquote className="relative pl-8 border-l-2 border-white/30">
              <p className="text-[18px] md:text-[22px] font-light leading-[150%] tracking-[-0.02em] text-white">
                "Sztuka jest dla mnie narzędziem badawczym, które pozwala poznać to, co istnieje poza naszym
                bezpośrednim doświadczeniem. W swojej twórczości poszukuję Trzeciej Materii - wymiaru, który nie jest
                ani fizyczny, ani mentalny, ale stanowi esencję naszego istnienia."
              </p>
            </blockquote>
            <blockquote className="relative pl-8 border-l-2 border-white/30">
              <p className="text-[18px] md:text-[22px] font-light leading-[150%] tracking-[-0.02em] text-white">
                "Wierzę, że poprzez sztukę możemy dotknąć tego, co niewyrażalne w języku nauki czy codziennej
                komunikacji. Moje obrazy są zapisem tych poszukiwań - zaproszeniem do spojrzenia głębiej, poza
                powierzchnię rzeczywistości."
              </p>
            </blockquote>
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
              <p className="text-sm text-muted-foreground">
                Wydział Lekarski z Oddziałem Lekarsko-Dentystycznym, Kierunek: Lekarski
              </p>
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
                  <p className="text-sm text-muted-foreground">
                    Seans artystyczny, Planetarium - Śląski Park Nauki, Chorzów
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 border-b border-foreground/20 pb-6">
                <span className="text-[14px] font-medium text-muted-foreground min-w-[100px]">2023</span>
                <div>
                  <p className="text-base font-medium">W POSZUKIWANIU TRZECIEJ MATERII</p>
                  <p className="text-sm text-muted-foreground">
                    Wystawa kolekcji prac malarskich, Planetarium - Śląski Park Nauki, Chorzów
                  </p>
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
                  <p className="text-sm text-muted-foreground">
                    Wystawa Pracowni Sitodruku ASP w Katowicach, Galeria Instytutu Sztuk Pięknych UR, Rzeszów
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 border-b border-foreground/20 pb-6">
                <span className="text-[14px] font-medium text-muted-foreground min-w-[100px]">2023</span>
                <div>
                  <p className="text-base font-medium">RAJZEFIBER</p>
                  <p className="text-sm text-muted-foreground">
                    Wystawa prac dyplomowych ASP w Katowicach, BWA w Katowicach
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 border-b border-foreground/20 pb-6">
                <span className="text-[14px] font-medium text-muted-foreground min-w-[100px]">2022</span>
                <div>
                  <p className="text-base font-medium">TOŻ(TO)SAMO(TNO)ŚĆ</p>
                  <p className="text-sm text-muted-foreground">
                    Wystawa koła grafiki Koszary grafki, Absurdalna, Katowice
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 border-b border-foreground/20 pb-6">
                <span className="text-[14px] font-medium text-muted-foreground min-w-[100px]">2020</span>
                <div>
                  <p className="text-base font-medium">PROSTE GESTY</p>
                  <p className="text-sm text-muted-foreground">BWA w Katowicach</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                <span className="text-[14px] font-medium text-muted-foreground min-w-[100px]">2014</span>
                <div>
                  <p className="text-base font-medium">SITOTISK/SITODRUK</p>
                  <p className="text-sm text-muted-foreground">
                    Wystawa Pracowni Serigrafii w Katowicach, Galeria Koridor, Ostrawa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      
    </div>;
};
export default About;