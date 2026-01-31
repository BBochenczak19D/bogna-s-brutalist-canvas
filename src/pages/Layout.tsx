import { Outlet } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { AnimationProvider } from "@/contexts/AnimationContext";

const Layout = () => {
  return (
    <AnimationProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Outlet />
        </main>
        <footer className="relative mt-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/about/bogna-02.jpg" 
              alt="" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-foreground/80" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-[1648px] mx-auto px-9 py-16">
            <div className="flex flex-col md:flex-row justify-between gap-12">
              {/* Left Column - Name & Tagline */}
              <div className="flex flex-col gap-4">
                <h2 className="text-background text-3xl md:text-4xl font-normal uppercase">
                  Bogna Bartkowiak
                </h2>
                <p className="text-background/70 text-sm uppercase tracking-wide">
                  Artystka · Lekarka
                </p>
              </div>
              
              {/* Middle Column - Navigation */}
              <div className="flex flex-col gap-3">
                <span className="text-background/50 text-xs uppercase tracking-widest mb-2">Nawigacja</span>
                <a href="/collections" className="text-background hover:text-background/70 transition-colors uppercase text-sm">
                  Kolekcje
                </a>
                <a href="/tworczość" className="text-background hover:text-background/70 transition-colors uppercase text-sm">
                  Twórczość
                </a>
                <a href="/about" className="text-background hover:text-background/70 transition-colors uppercase text-sm">
                  O mnie
                </a>
                <a href="/contact" className="text-background hover:text-background/70 transition-colors uppercase text-sm">
                  Kontakt
                </a>
              </div>
              
              {/* Right Column - Social & Contact */}
              <div className="flex flex-col gap-4">
                <span className="text-background/50 text-xs uppercase tracking-widest mb-2">Kontakt</span>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-background hover:text-background/70 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>
                  <a 
                    href="mailto:kontakt@bognabartkowiak.pl" 
                    className="text-background hover:text-background/70 transition-colors"
                    aria-label="Email"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="mt-12 pt-6 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-background/60 text-sm">
                © {new Date().getFullYear()} Bogna Bartkowiak. Wszelkie prawa zastrzeżone.
              </p>
              <p className="text-background/40 text-[10px] uppercase tracking-wider">
                author of design portfolio
              </p>
            </div>
          </div>
        </footer>
      </div>
    </AnimationProvider>
  );
};

export default Layout;
