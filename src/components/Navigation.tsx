import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";
import { useAnimation } from "@/contexts/AnimationContext";

const navItems = [
  {
    path: "/collections",
    label: "Kolekcje",
    subItems: [
      //{ path: "/collections/iii-materia", label: "III Materia" },
      { path: "/collections/inne", label: "Inne" },
    ],
  },
  {
    path: "/tworczość",
    label: "Twórczość",
    subItems: [
      { path: "/tworczość/obrazy", label: "Obrazy" },
      { path: "/tworczość/grafiki", label: "Grafiki" },
      { path: "/tworczość/artefakty", label: "Artefakty" },
      { path: "/tworczość/rysunki", label: "Rysunki" },
      { path: "/tworczość/instalacje", label: "Instalacje" },
    ],
  },
  { path: "/about", label: "O MNIE" },
  { path: "/contact", label: "Kontakt" },
];

const Navigation = () => {
  const { heroTypingComplete } = useAnimation();
  const location = useLocation();

  // UI states
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  // Scroll visibility
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);
  const scrollLockedRef = useRef(false);

  const setLastScrollYRef = (val: number) => {
    lastScrollYRef.current = val;
  };

  // Check if parent is active only when a real child path matches
  const isActiveParent = useCallback(
    (item: (typeof navItems)[0]) => {
      if (item.subItems) {
        return item.subItems.some((sub) => sub.path !== item.path && sub.path === location.pathname);
      }
      return item.path === location.pathname;
    },
    [location.pathname],
  );

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (scrollLockedRef.current) return;

      if (!tickingRef.current) {
        tickingRef.current = true;
        window.requestAnimationFrame(() => {
          const current = window.scrollY;
          const last = lastScrollYRef.current;

          if (current < last) setIsVisible(true);
          else if (current > last && current > 100) setIsVisible(false);

          setLastScrollYRef(current);
          tickingRef.current = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Route change: reset dropdowns
  useEffect(() => {
    setHoveredItem(null);
    setClickedItem(null);
    setIsOpen(false);
    setIsVisible(true);

    scrollLockedRef.current = true;
    const timer = setTimeout(() => {
      scrollLockedRef.current = false;
      setLastScrollYRef(window.scrollY || 0);
    }, 250);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const shouldShowSubItemsFor = (item: (typeof navItems)[0]) =>
    isActiveParent(item) || hoveredItem === item.path || clickedItem === item.path;

  return (
    <nav
      className={`w-full px-8 py-4 bg-white fixed top-0 left-0 right-0 z-[9999] transition-all duration-700 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${heroTypingComplete ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="flex justify-between items-start max-w-[1920px] mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-normal uppercase">
          Bogna Bartkowiak
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-start gap-2.5">
          {navItems.map((item) => {
            const hasSubItems = !!item.subItems;
            const isActive = isActiveParent(item);
            const showSub = shouldShowSubItemsFor(item);

            return (
              <div
                key={item.path}
                className="flex flex-col items-end gap-2.5"
                onMouseEnter={() => setHoveredItem(item.path)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {hasSubItems ? (
                  <button
                    onClick={() => setClickedItem((p) => (p === item.path ? null : item.path))}
                    className={`px-[5px] py-[3px] transition-all duration-300 hover:opacity-70`}
                    aria-expanded={showSub}
                    aria-haspopup="true"
                  >
                    <span
                      className={`text-xl font-normal uppercase transition-all ${
                        isActive ? "underline decoration-solid" : ""
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className="px-[5px] py-[3px] transition-all duration-300 hover:opacity-70"
                    activeClassName="underline"
                  >
                    <span className="text-xl font-normal uppercase">{item.label}</span>
                  </NavLink>
                )}

                {/* Sub-items */}
                {hasSubItems && (
                  <div
                    className={`flex flex-col items-end gap-2.5 overflow-hidden transition-all duration-500 ease-in-out ${
                      showSub
                        ? "max-h-[500px] opacity-100 pointer-events-auto z-[50]"
                        : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.subItems!.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        className="px-[5px] py-[3px] hover:opacity-70 transition-all duration-300"
                        onClick={() => {
                          setHoveredItem(null);
                          setClickedItem(null);
                          setIsOpen(false);
                          scrollLockedRef.current = true;
                          setTimeout(() => {
                            scrollLockedRef.current = false;
                            setLastScrollYRef(window.scrollY || 0);
                          }, 260);
                        }}
                      >
                        <span className="text-lg font-normal uppercase">{subItem.label}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen((s) => !s)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2 border-t pt-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="px-[5px] py-[3px] hover:opacity-70"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-xl uppercase">{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
