import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    { path: "/collections", label: "Kolekcje" },
    { 
      path: "/tworczość", 
      label: "Twórczość",
      subItems: [
        { path: "/tworczość/obrazy", label: "Obrazy" },
        { path: "/tworczość/grafiki", label: "grafiki" },
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

  return (
    <nav className="w-full px-8 py-[30px] bg-white fixed top-0 left-0 right-0 z-50">
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
                <NavLink
                  to={item.path}
                  className={`flex items-center gap-1 px-[5px] py-[3px] transition-all duration-300 ${
                    isActive ? 'text-white' : 'hover:opacity-70'
                  }`}
                >
                  <span className="font-nats text-2xl leading-[100%] uppercase">[</span>
                  <span className={`text-xl font-normal uppercase leading-[100%] tracking-normal transition-all duration-300 ${
                    isActive ? 'underline decoration-solid' : ''
                  }`}>
                    {item.label}
                  </span>
                  <span className="font-nats text-2xl leading-[100%] uppercase">]</span>
                </NavLink>

                {/* Sub-items with smooth animation */}
                {hasSubItems && (
                  <div className={`flex flex-col items-end gap-2.5 overflow-hidden transition-all duration-500 ease-in-out ${
                    shouldShowSubItems ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    {item.subItems.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        className="flex items-center gap-1 px-[5px] py-[3px] hover:opacity-70 transition-all duration-300"
                      >
                        <span className="font-nats text-2xl leading-[100%] uppercase">+</span>
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
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-1 px-[5px] py-[3px] hover:opacity-70 transition-opacity"
            >
              <span className="font-nats text-2xl leading-[100%] uppercase">[</span>
              <span className="text-xl font-normal uppercase leading-[100%]">
                {item.label}
              </span>
              <span className="font-nats text-2xl leading-[100%] uppercase">]</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
