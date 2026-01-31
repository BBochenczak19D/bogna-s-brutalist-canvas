import CornerBracket from "@/components/CornerBracket";
import ArrowLink from "@/components/ArrowLink";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="max-w-[1648px] mx-auto px-9 pt-32">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
          <div className="flex items-start gap-6">
            <CornerBracket className="hidden md:block" />
            <img 
              alt="Bogna Bartkowiak-Trepka" 
              className="w-[200px] md:w-[300px] h-auto object-cover" 
              src="/lovable-uploads/3f96b157-ec5e-4b05-b37f-0b44e7dfd18e.jpg" 
            />
          </div>
          <div className="flex-1 max-w-[800px]">
            <h1 className="text-[32px] md:text-[56px] font-medium leading-[100%] tracking-[-0.02em] uppercase mb-8">
              Bogna Bartkowiak-Trepka
            </h1>
            <p className="text-base md:text-lg font-light leading-[150%] tracking-[-0.02em] text-foreground/90 italic">
              Jestem artystką poruszającą się w przestrzeni wspólnej dla nauki, duchowości i sztuki. Moja twórczość wyrasta z potrzeby poszukiwania odpowiedzi na pytania o przyczynę i sens istnienia oraz z fascynacji tym, co wymyka się materii, myśli i racjonalnemu poznaniu.
            </p>
          </div>
          <CornerBracket className="hidden md:block" />
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="max-w-[1648px] mx-auto px-9 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-6">
              <CornerBracket />
              <p className="flex-1 text-base font-light leading-[150%] tracking-[-0.02em] text-foreground/90">
                Jestem również praktykującą lekarką. Studia medyczne pozwoliły mi zgłębiać anatomię i mechanizmy funkcjonowania ludzkiego ciała. Zamiast jednoznacznych odpowiedzi doświadczenie to przyniosło mi jednak kolejne pytania i wzmocniło świadomość, jak rozległy obszar rzeczywistości pozostaje poza granicami naszej wiedzy.
              </p>
              <CornerBracket />
            </div>
            <div className="flex items-start gap-6">
              <CornerBracket />
              <p className="flex-1 text-base font-light leading-[150%] tracking-[-0.02em] text-foreground/90">
                To właśnie w tej przestrzeni — pomiędzy naukową precyzją a tajemnicą — zakorzeniła się moja praktyka artystyczna.
              </p>
              <CornerBracket />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-6">
              <CornerBracket />
              <p className="flex-1 text-base font-light leading-[150%] tracking-[-0.02em] text-foreground/90">
                W swojej twórczości łączę doświadczenia lekarskie z poszukiwaniami tego, co niewyjaśnione i niewyjaśnialne. Badając granice pomiędzy tym, co fizyczne, a tym, co metafizyczne, tworzę własny język wizualny — próbę dialogu między intuicją, świadomością, materią i wewnętrzną energią.
              </p>
              <CornerBracket />
            </div>
          </div>
        </div>
      </section>

      {/* III Materia Project Section */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="max-w-[1648px] mx-auto px-9 py-16 md:py-24">
          <h2 className="text-[24px] md:text-[40px] font-medium leading-[110%] tracking-[-0.02em] uppercase mb-12">
            W poszukiwaniu III Materii
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <p className="text-base font-light leading-[150%] tracking-[-0.02em] text-secondary-foreground/90">
              Projekt <em>W poszukiwaniu III Materii</em> — obejmujący obrazy, grafiki, artefakty oraz seans 3D przeznaczony do prezentacji na ekranie sferycznym planetarium — jest rezultatem wieloletnich rozważań, poszukiwań filozoficznych oraz eksperymentów artystycznych prowadzonych na granicy percepcji.
            </p>
            <p className="text-base font-light leading-[150%] tracking-[-0.02em] text-secondary-foreground/90">
              To także przekorna próba odnalezienia duszy człowieka w medycznych badaniach obrazowych oraz moja indywidualna interpretacja tego, co niewypowiedziane — zbliżenie się do Niewiadomej zarówno poprzez sam akt twórczy, jak i jego efekt. Kolejne projekty stanowią kontynuację tych poszukiwań — są ich rozwinięciem, nawarstwieniem i dalszym eksplorowaniem idei Trzeciej Materii.
            </p>
          </div>
          <div className="mt-12">
            <ArrowLink to="/collections/iii-materia" className="text-secondary-foreground hover:text-secondary-foreground/80">
              Zobacz kolekcję III Materia
            </ArrowLink>
          </div>
        </div>
      </section>

      {/* Creative Joy Section */}
      <section className="max-w-[1648px] mx-auto px-9 py-16 md:py-24">
        <div className="max-w-[900px]">
          <p className="text-[20px] md:text-[28px] font-light leading-[140%] tracking-[-0.02em] text-foreground/90 italic">
            Tworzenie jest dla mnie źródłem radości i głębokiej satysfakcji. Obcowanie ze sztuką — zarówno w procesie twórczym, jak i w jego kontemplacji — daje mi poczucie spełnienia i wewnętrznej harmonii. To przestrzeń, w której czuję się najbardziej obecna i prawdziwa.
          </p>
        </div>
        <div className="mt-12 max-w-[700px]">
          <p className="text-base font-light leading-[150%] tracking-[-0.02em] text-foreground/90">
            Pracuję głównie z farbą olejną, lecz sięgam również po instalacje, grafikę, rzeźbę oraz nowe media. Tworzę sztukę, która nie tylko oddziałuje wizualnie, ale także zaprasza do pogłębionej refleksji nad naturą rzeczywistości, świadomości i istnienia.
          </p>
        </div>
      </section>

      {/* Artistic Manifesto */}
      <section className="border-t border-b border-foreground">
        <div className="max-w-[1648px] mx-auto px-9 py-16 md:py-24">
          <h2 className="text-[20px] md:text-[32px] font-medium leading-[110%] tracking-[-0.02em] uppercase mb-12">
            Manifest artystyczny
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <blockquote className="text-[18px] md:text-[24px] font-light leading-[140%] tracking-[-0.02em] text-foreground/90 border-l-4 border-foreground pl-6">
              "Sztuka jest dla mnie narzędziem badawczym, które pozwala poznać to, co istnieje poza naszym bezpośrednim doświadczeniem. W swojej twórczości poszukuję Trzeciej Materii - wymiaru, który nie jest ani fizyczny, ani mentalny, ale stanowi esencję naszego istnienia."
            </blockquote>
            <blockquote className="text-[18px] md:text-[24px] font-light leading-[140%] tracking-[-0.02em] text-foreground/90 border-l-4 border-foreground pl-6">
              "Wierzę, że poprzez sztukę możemy dotknąć tego, co niewyrażalne w języku nauki czy codziennej komunikacji. Moje obrazy są zapisem tych poszukiwań - zaproszeniem do spojrzenia głębiej, poza powierzchnię rzeczywistości."
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
                className="text-base hover:underline"
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
                className="text-base hover:underline"
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
                className="text-base hover:underline"
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
