import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";

const Navigation = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      label: "Strona główna",
      href: "/",
    },
    {
      label: "Kolekcje",
      href: "/collections",
      subItems: [
        { label: "III. Materia", href: "/collections/iii-materia" },
      ],
    },
    {
      label: "Twórczość",
      href: "/tworczość",
      subItems: [
        { label: "Obrazy", href: "/tworczość/obrazy" },
        { label: "Rysunki", href: "/tworczość/rysunki" },
        { label: "Grafiki", href: "/tworczość/grafiki" },
        { label: "Artefakty", href: "/tworczość/artefakty" },
      ],
    },
    {
      label: "O mnie",
      href: "/about",
    },
    {
      label: "Kontakt",
      href: "/contact",
    },
  ];

  const handleMouseEnter = (label: string) => {
    setHoveredItem(label);
    setClickedItem(null);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleClick = (label: string) => {
    setClickedItem(clickedItem === label ? null : label);
    setHoveredItem(null);
  };

  const closeDropdown = () => {
    setHoveredItem(null);
    setClickedItem(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setClickedItem(null);
  };

  return (
    <nav className="brutalist-border-medium sticky top-0 z-50 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="text-2xl font-bold hover:opacity-70 transition-opacity"
          >
            BOGNA BARTKOWIAK
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.subItems && handleMouseEnter(item.label)
                }
                onMouseLeave={handleMouseLeave}
              >
                {item.subItems ? (
                  <button
                    onClick={() => handleClick(item.label)}
                    className="font-bold hover:underline transition-all"
                  >
                    <NavLink
                      to={item.href}
                      activeClassName="underline decoration-solid"
                    >
                      {item.label}
                    </NavLink>
                  </button>
                ) : (
                  <NavLink
                    to={item.href}
                    activeClassName="underline decoration-solid"
                  >
                    {item.label}
                  </NavLink>
                )}

                {item.subItems &&
                  (hoveredItem === item.label ||
                    clickedItem === item.label) && (
                    <div className="absolute top-full left-0 mt-2 bg-background brutalist-border shadow-lg min-w-[200px]">
                      {item.subItems.map((subItem) => (
                        <NavLink
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
                          onClick={closeDropdown}
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navigationItems.map((item) => (
              <div key={item.label}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => handleClick(item.label)}
                      className="w-full text-left py-2 font-bold"
                    >
                      {item.label}
                    </button>
                    {clickedItem === item.label && (
                      <div className="pl-4">
                        {item.subItems.map((subItem) => (
                          <NavLink
                            key={subItem.label}
                            to={subItem.href}
                            className="block py-2 opacity-70 hover:opacity-100"
                            activeClassName="underline opacity-100"
                            onClick={closeMobileMenu}
                          >
                            {subItem.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.href}
                    className="block py-2 font-bold"
                    activeClassName="underline opacity-100"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </NavLink>
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
