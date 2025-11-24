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
      { path: "/collections/iii-materia", label: "III Materia" },
      // If "Inne" should be a separate page, give it a unique path, e.g. "/collections/inne"
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
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  // Visibility states for nav show/hide on scroll
  const [isVisible, setIsVisible] = useState(true);

  // Refs for scroll handling to avoid stale-closure bugs
  const lastScrollYRef = useRef<number>(0);
  const tickingRef = useRef<boolean>(false);
  const scrollLockedRef = useRef<boolean>(false);

  // A safe wrapper to update both ref and state for lastScrollY if you ever want stateful value (not required here)
  const setLastScrollYRef = (val: number) => {
    lastScrollYRef.current = val;
  };

  // Utility: is parent active only when a real child path is active (prevents subitem that equals parent path from keeping it open)
  const isActiveParent = useCallback(
    (item: (typeof navItems)[0]) => {
      if ("subItems" in item && item.subItems) {
        return item.subItems.some((sub) => sub.path !== item.path && sub.path === location.pathname);
      }
      return item.path === location.pathname;
    },
    [location.pathname],
  );

  // Scroll handler: runs once, uses refs
  useEffect(() => {
    const handleScroll = () => {
      if (scrollLockedRef.current) return;

      if (!tickingRef.current) {
        tickingRef.current = true;

        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const documentHeight = document.documentElement.scrollHeight;
          const windowHeight = window.innerHeight;
          const scrollableHeight = documentHeight - windowHeight;

          if (scrollableHeight > 200) {
            const last = lastScrollYRef.current;

            if (currentScrollY < last) {
              // Scrolling up
              setIsVisible(true);
            } else if (currentScrollY > last && currentScrollY > 100) {
              // Scrolling down and past 100px
              setIsVisible(false);
            }
            setLastScrollYRef(currentScrollY);
          } else {
            setIsVisible(true);
            setLastScrollYRef(currentScrollY);
          }

          tickingRef.current = false;
        });
      }
    };

    // Register once
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // empty deps => registered once

  // On route change: close dropdowns and lock scroll handling briefly to avoid race/interrupt
  useEffect(() => {
    setHoveredItem(null);
    setClickedItem(null);
    setIsOpen(false);

    // Ensure nav is visible after route change
    setIsVisible(true);

    // Lock scroll-based hiding for a short time to avoid immediate hide due to layout/scroll jumps
    scrollLockedRef.current = true;
    const timer = setTimeout(() => {
      // reset lastScrollY to current actual scroll pos to avoid an immediate hide due to stale 0
      setLastScrollYRef(window.scrollY || 0);
      scrollLockedRef.current = false;
    }, 260); // tweak duration if needed (200-350ms is common)

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Helper for deciding to show subitems (hover, click, or active child)
  const shouldShowSubItemsFor = (item: (typeof navItems)[0]) => {
    const isActive = isActiveParent(item);
    const isHovered = hoveredItem === item.path;
    const isClicked = clickedItem === item.path;
    return isActive || isHovered || isClicked;
  };

  return (
    <nav
      className={`w-full px-8 py-4 bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${heroTypingComplete ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="flex justify-between items-start max-w-[1920px] mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-normal uppercase leading-[100%] tracking-normal">
          Bogna bartkowiak
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-start gap-2.5">
          {navItems.map((item) => {
            const hasSubItems = "subItems" in item && item.subItems;
            const isActive = isActiveParent(item);
            const shouldShowSubItems = shouldShowSubItemsFor(item);

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
                      setClickedItem((prev) => (prev === item.path ? null : item.path));
                    }}
                    className={`px-[5px] py-[3px] transition-all duration-300 ${
                      isActive ? "text-white" : "hover:opacity-70"
                    }`}
                    aria-expanded={shouldShowSubItems}
                    aria-haspopup="true"
                  >
                    <span
                      className={`text-xl font-normal uppercase leading-[100%] tracking-normal transition-all duration-300 ${
                        isActive ? "underline decoration-solid" : ""
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={`px-[5px] py-[3px] transition-all duration-300 ${
                      isActive ? "text-white" : "hover:opacity-70"
                    }`}
                  >
                    <span
                      className={`text-xl font-normal uppercase leading-[100%] tracking-normal transition-all duration-300 ${
                        isActive ? "underline decoration-solid" : ""
                      }`}
                    >
                      {item.label}
                    </span>
                  </NavLink>
                )}

                {/* Sub-items */}
                {hasSubItems && (
                  <div
                    className={`flex flex-col items-end gap-2.5 overflow-hidden transition-all duration-500 ease-in-out ${
                      shouldShowSubItems ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.subItems!.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        className="px-[5px] py-[3px] hover:opacity-70 transition-all duration-300"
                        onClick={() => {
                          // Immediately close dropdowns on click (desktop)
                          setHoveredItem(null);
                          setClickedItem(null);
                          setIsOpen(false);
                          // lock scroll for a short moment to prevent race with scroll handler
                          scrollLockedRef.current = true;
                          setTimeout(() => {
                            scrollLockedRef.current = false;
                            setLastScrollYRef(window.scrollY || 0);
                          }, 260);
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
        <button className="md:hidden p-2" onClick={() => setIsOpen((s) => !s)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2 border-t border-foreground pt-4">
          {navItems.map((item) => (
            <div key={item.path}>
              <Link
                to={item.path}
                onClick={() => {
                  setIsOpen(false);
                  // ensure submenu states are cleared
                  setHoveredItem(null);
                  setClickedItem(null);
                  // lock scroll briefly to avoid race
                  scrollLockedRef.current = true;
                  setTimeout(() => {
                    scrollLockedRef.current = false;
                    setLastScrollYRef(window.scrollY || 0);
                  }, 260);
                }}
                className="px-[5px] py-[3px] hover:opacity-70 transition-opacity"
              >
                <span className="text-xl font-normal uppercase leading-[100%]">{item.label}</span>
              </Link>

              {/* if want mobile expandable subitems, you can add toggles here */}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
