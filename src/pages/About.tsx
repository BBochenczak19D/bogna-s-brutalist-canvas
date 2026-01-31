import CornerBracket from "@/components/CornerBracket";
import ArrowLink from "@/components/ArrowLink";
const About = () => {
  return <div className="min-h-screen bg-background">
      {/* Hero Section - Asymmetric Layout */}
      <section className="max-w-[1648px] mx-auto px-4 md:px-9 pt-24 md:pt-32">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-start">
          {/* Left - Image with Name & Quote */}
          <div className="w-full gap-6 flex flex-row">
            <div className="w-full max-w-[400px] aspect-[3/4]">
              <img src="/about/bogna-02.jpg" alt="Bogna Bartkowiak-Trepka - portret" className="w-full h-full object-cover" />
            </div>
            <div className="w-full flex flex-col gap-4 pr-[90px]">
              <h1 className="leading-[100%] tracking-[-0.02em] uppercase font-bold font-sans text-7xl">
                Bogna Bartkowiak-Trepka
              </h1>
              <p className="text-xs leading-[160%] tracking-[-0.02em] text-foreground/90 font-semibold md:text-base">
                Jestem artystką poruszającą się w przestrzeni wspólnej dla nauki, duchowości i sztuki. Moja twórczość
                wyrasta z potrzeby poszukiwania odpowiedzi na pytania o przyczynę i sens istnienia oraz z fascynacji
                tym, co wymyka się materii, myśli i racjonalnemu poznaniu.
              </p>
              <p className="text-xs leading-[160%] tracking-[-0.02em] text-foreground/90 md:text-base font-light">
                Jestem również praktykującą lekarką. Studia medyczne pozwoliły mi zgłębiać anatomię i mechanizmy funkcjonowania ludzkiego ciała. Zamiast jednoznacznych odpowiedzi doświadczenie to przyniosło mi jednak kolejne pytania i wzmocniło świadomość, jak rozległy obszar rzeczywistości pozostaje poza granicami naszej wiedzy. To właśnie w tej przestrzeni — pomiędzy naukową precyzją a tajemnicą — zakorzeniła się moja praktyka artystyczna.
              </p>
            </div>
          </div>

          {/* Right - Image with Rest of Content */}
          <div className="w-fit flex flex-col gap-6">
            <div className="w-full max-w-[316px] aspect-[3/4]">
              <img src="/about/bogna-08.jpg" alt="Bogna w pracowni" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4 max-w-[316px]">
              
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section - Asymmetric Layout */}

      {/* Quote Section - Between Science and Mystery */}
      <section className="max-w-[1648px] mx-auto px-9 py-[100px]">
        
      </section>

      {/* Process Images Grid */}
      <section className="max-w-[1648px] mx-auto px-9">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/3">
            <img src="/about/bogna-05.jpg" alt="Bogna w ruchu - proces twórczy" className="w-full h-[500px] object-cover" />
          </div>
          <div className="max-w-[50%] flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <img src="/about/bogna-04.jpg" alt="Praca z artefaktami" className="w-full md:w-1/2 h-[300px] object-cover object-center" />
              
            </div>
            <p className="text-base font-light leading-[160%] tracking-[-0.02em] text-foreground/90">
              W swojej twórczości łączę doświadczenia lekarskie z poszukiwaniami tego, co niewyjaśnione i
              niewyjaśnialne. Badając granice pomiędzy tym, co fizyczne, a tym, co metafizyczne, tworzę własny język
              wizualny — próbę dialogu między intuicją, świadomością, materią i wewnętrzną energią.
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <CornerBracket />
          <CornerBracket />
        </div>
      </section>

      {/* III Materia Project Section */}
      <section className="border-t border-b border-foreground mt-[100px]">
        <div className="max-w-[1648px] mx-auto px-9 py-24 md:py-32">
          <h2 className="text-[28px] md:text-[48px] font-medium leading-[110%] tracking-[-0.02em] uppercase mb-16">
            W poszukiwaniu III Materii
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-8">
              <p className="text-base font-light leading-[160%] tracking-[-0.02em] text-foreground/90">
                Projekt <em className="font-medium">W poszukiwaniu III Materii</em> — obejmujący obrazy, grafiki,
                artefakty oraz seans 3D przeznaczony do prezentacji na ekranie sferycznym planetarium — jest rezultatem
                wieloletnich rozważań, poszukiwań filozoficznych oraz eksperymentów artystycznych prowadzonych na
                granicy percepcji.
              </p>
              <p className="text-base font-light leading-[160%] tracking-[-0.02em] text-foreground/90">
                To także przekorna próba odnalezienia duszy człowieka w medycznych badaniach obrazowych oraz moja
                indywidualna interpretacja tego, co niewypowiedziane — zbliżenie się do Niewiadomej zarówno poprzez sam
                akt twórczy, jak i jego efekt.
              </p>
            </div>
            <div className="space-y-8">
              <p className="text-base font-light leading-[160%] tracking-[-0.02em] text-foreground/90">
                Kolejne projekty stanowią kontynuację tych poszukiwań — są ich rozwinięciem, nawarstwieniem i dalszym
                eksplorowaniem idei Trzeciej Materii.
              </p>
              <ArrowLink to="/collections/iii-materia">Zobacz kolekcję III Materia</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* Joy of Creation Section */}
      <section className="max-w-[1648px] mx-auto px-9 py-[100px]">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <img src="/about/bogna-01.jpg" alt="Bogna z artefaktem" className="w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2 flex flex-col gap-8">
            <div className="flex items-start gap-6">
              <CornerBracket className="hidden md:block flex-shrink-0" />
              <blockquote>
                <p className="text-[22px] md:text-[28px] font-light leading-[140%] tracking-[-0.02em] italic">
                  Tworzenie jest dla mnie źródłem radości i głębokiej satysfakcji. Obcowanie ze sztuką — zarówno w
                  procesie twórczym, jak i w jego kontemplacji — daje mi poczucie spełnienia i wewnętrznej harmonii.
                </p>
              </blockquote>
            </div>
            <p className="text-lg font-medium text-foreground">
              To przestrzeń, w której czuję się najbardziej obecna i prawdziwa.
            </p>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="max-w-[1648px] mx-auto px-9 pb-[100px]">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3 flex items-start gap-6">
            <img src="/about/bogna-07.jpg" alt="Materiały i narzędzia" className="w-full h-[400px] object-cover" />
          </div>
          <div className="md:w-2/3 flex flex-col justify-center">
            <p className="text-base font-light leading-[160%] tracking-[-0.02em] text-foreground/90 mb-8">
              Pracuję głównie z farbą olejną, lecz sięgam również po instalacje, grafikę, rzeźbę oraz nowe media. Tworzę
              sztukę, która nie tylko oddziałuje wizualnie, ale także zaprasza do pogłębionej refleksji nad naturą
              rzeczywistości, świadomości i istnienia.
            </p>
            <div className="flex justify-between">
              <CornerBracket />
              <CornerBracket />
            </div>
          </div>
        </div>
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
      <section className="max-w-[1648px] mx-auto px-9 py-16 md:py-24">
        <h2 className="text-[20px] md:text-[32px] font-medium leading-[110%] tracking-[-0.02em] uppercase mb-12">
          Kontakt
        </h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex items-start gap-6">
            <span className="text-[14px] font-medium text-muted-foreground min-w-[100px]">Email</span>
            <a href="mailto:bartkowiakbogna@gmail.com" className="text-base hover:text-foreground/70 transition-colors">
              bartkowiakbogna@gmail.com
            </a>
          </div>
          <div className="flex items-start gap-6">
            <span className="text-[14px] font-medium text-muted-foreground min-w-[100px]">Instagram</span>
            <a href="https://www.instagram.com/bogna_bartkowiak" target="_blank" rel="noopener noreferrer" className="text-base hover:text-foreground/70 transition-colors">
              @bogna_bartkowiak
            </a>
          </div>
          <div className="flex items-start gap-6">
            <span className="text-[14px] font-medium text-muted-foreground min-w-[100px]">YouTube</span>
            <a href="https://www.youtube.com/watch?v=UKljf1XDh0k&list=PLjiSr4QYw7PzFWYJYW5cQstY7DQJzxyXG" target="_blank" rel="noopener noreferrer" className="text-base hover:text-foreground/70 transition-colors">
              Kanał YouTube
            </a>
          </div>
        </div>
      </section>
    </div>;
};
export default About;