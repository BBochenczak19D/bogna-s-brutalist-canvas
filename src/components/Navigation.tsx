import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Home" },
    { 
      path: "/collections", 
      label: "Kolekcje",
      subItems: [
        { path: "/collections/iii-materia", label: "III Materia" }
      ]
    },
    { 
      path: "/tworczość", 
      label: "Twórczość",
      subItems: [
        { path: "/tworczość/obrazy", label: "Obrazy" },
        { path: "/tworczość/artefakty", label: "Artefakty" },
        { path: "/tworczość/rysunki", label: "Rysunki" },
        { path: "/tworczość/instalacje", label: "Instalacje" }
      ]
    },
    { path: "/about", label: "O mnie" }
  ];

  return (
    <nav className="brutalist-border-medium bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-tighter hover:opacity-70"
          >
            BOGNA BARTKOWIAK
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`text-sm font-bold tracking-wide uppercase hover:opacity-70 ${
                    isActive(item.path) ? "underline underline-offset-4 decoration-4" : ""
                  }`}
                >
                  {item.label}
                </Link>
                
                {/* Dropdown for items with subItems */}
                {item.subItems && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="brutalist-border-medium bg-background min-w-[200px]">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`block px-4 py-3 text-sm font-bold uppercase hover:bg-foreground hover:text-background transition-colors ${
                            isActive(subItem.path) ? "bg-foreground text-background" : ""
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 brutalist-border-medium bg-background">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-sm font-bold uppercase hover:bg-foreground hover:text-background transition-colors ${
                    isActive(item.path) ? "bg-foreground text-background" : ""
                  }`}
                >
                  {item.label}
                </Link>
                
                {/* Mobile Submenu */}
                {item.subItems && (
                  <div className="bg-muted">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-8 py-2 text-xs font-bold uppercase hover:bg-foreground hover:text-background transition-colors ${
                          isActive(subItem.path) ? "bg-foreground text-background" : ""
                        }`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
