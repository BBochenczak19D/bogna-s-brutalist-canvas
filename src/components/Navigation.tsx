import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";
import { useAnimation } from "@/contexts/AnimationContext";

const Navigation = () => {
  const { heroTypingComplete } = useAnimation();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const documentHeight = document.documentElement.scrollHeight;
          const windowHeight = window.innerHeight;
          const scrollableHeight = documentHeight - windowHeight;
          
          // Only hide navigation if there's enough content to scroll
          if (scrollableHeight > 200) {
            if (currentScrollY < lastScrollY) {
              // Scrolling up
              setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
              // Scrolling down and past 100px
              setIsVisible(false);
            }
            
            setLastScrollY(currentScrollY);
          } else {
            // Not enough content, always show navigation
            setIsVisible(true);
          }
          
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const navItems = [
    { 
      path: "/collections", 
      label: "Kolekcje",
      subItems: [
        { path: "/collections/iii-materia", label: "III Materia" },
        { path: "/collections", label: "Inne" }
      ]
    },
    { 
      path: "/tworczość", 
      label: "Twórczość",
      subItems: [
        { path: "/tworczość/obrazy", label: "Obrazy" },
        { path: "/tworczość/grafiki", label: "grafiki" },
        { path: "/tworczość/artefakty", label: "artefakty" },
        { path: "/tworczość/rysunki", label: "rysunki" },
        { path: "/tworczość/instalacje", label: "instalacje" }
      ]
    },
    { path: "/about", label: "O MNIE" },
    { path: "/contact", label: "Kontakt" }
  ];

  const isActiveParent = (item: typeof navItems[0]) => {
    if (item.path === location.pathname) return true;
    if ('subItems' in item && item.subItems) {
      return item.subItems.some(sub => sub.path === location.pathname);
    }
    return false;
  };

  // Close dropdowns and reset visibility on route change
  useEffect(() => {
    setHoveredItem(null);
    setClickedItem(null);
    setIsOpen(false);
    setIsVisible(true); // Always show navigation on route change
    setLastScrollY(0); // Reset scroll position tracking
  }, [location.pathname]);

  return (
    <nav className={`w-full px-8 py-4 bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      heroTypingComplete ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <div className="flex justify-between items-start max-w-[1920px] mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-normal uppercase leading-[100%] tracking-normal">
          Bogna bartkowiak
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-start gap-2.5">
          {navItems.map((item) => {
            const isActive = isActiveParent(item);
            const hasSubItems = 'subItems' in item && item.subItems;
            const isHovered = hoveredItem === item.path;
            const shouldShowSubItems = isActive || isHovered;
            
            return (
              <div 
                key={item.path} 
                className="flex flex-col items-end gap-2.5"
                onMouseEnter={() => setHoveredItem(item.path)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {hasSubItems ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setClickedItem(clickedItem === item.path ? null : item.path);
                    }}
                    className={`px-[5px] py-[3px] transition-all duration-300 ${
                      isActive ? 'text-white' : 'hover:opacity-70'
                    }`}
                  >
                    <span className={`text-xl font-normal uppercase leading-[100%] tracking-normal transition-all duration-300 ${
                      isActive ? 'underline decoration-solid' : ''
                    }`}>
                      {item.label}
                    </span>
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={`px-[5px] py-[3px] transition-all duration-300 ${
                      isActive ? 'text-white' : 'hover:opacity-70'
                    }`}
                  >
                    <span className={`text-xl font-normal uppercase leading-[100%] tracking-normal transition-all duration-300 ${
                      isActive ? 'underline decoration-solid' : ''
                    }`}>
                      {item.label}
                    </span>
                  </NavLink>
                )}

                {/* Sub-items with smooth animation */}
                {hasSubItems && (
                  <div className={`flex flex-col items-end gap-2.5 overflow-hidden transition-all duration-500 ease-in-out ${
                    shouldShowSubItems ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  onClick={(e) => e.stopPropagation()}
                  >
                    {item.subItems.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        className="px-[5px] py-[3px] hover:opacity-70 transition-all duration-300"
                        onClick={() => {
                          setHoveredItem(null);
                          setClickedItem(null);
                        }}
                      >
                        <span className="text-lg font-normal uppercase leading-[100%] tracking-normal">
                          {subItem.label}
                        </span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2 border-t border-foreground pt-4">
          {navItems.map((item) => {
            const isActive = isActiveParent(item);
            const hasSubItems = 'subItems' in item && item.subItems;
            
            return (
              <div key={item.path} className="flex flex-col gap-2">
                {hasSubItems ? (
                  <>
                    <button
                      onClick={() => setClickedItem(clickedItem === item.path ? null : item.path)}
                      className={`px-[5px] py-[3px] text-left transition-opacity ${
                        isActive ? 'opacity-100 underline' : 'hover:opacity-70'
                      }`}
                    >
                      <span className="text-xl font-normal uppercase leading-[100%]">
                        {item.label}
                      </span>
                    </button>
                    {clickedItem === item.path && (
                      <div className="flex flex-col gap-2 pl-4">
                        {item.subItems.map((subItem) => (
                          <NavLink
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setIsOpen(false)}
                            className="px-[5px] py-[3px] hover:opacity-70 transition-opacity"
                            activeClassName="underline opacity-100"
                          >
                            <span className="text-lg font-normal uppercase leading-[100%]">
                              {subItem.label}
                            </span>
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="px-[5px] py-[3px] hover:opacity-70 transition-opacity"
                    activeClassName="underline opacity-100"
                  >
                    <span className="text-xl font-normal uppercase leading-[100%]">
                      {item.label}
                    </span>
                  </NavLink>
                )}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
