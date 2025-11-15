import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/collections", label: "Kolekcje" },
    { path: "/tworczość", label: "Twórczość" },
    { path: "/about", label: "O MNIE" },
    { path: "/contact", label: "Kontakt" }
  ];

  return (
    <nav className="w-full px-8 py-[30px] bg-background">
      <div className="flex justify-between items-start max-w-[1920px] mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-normal uppercase leading-[100%] tracking-normal">
          Bogna bartkowiak
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2.5">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-1 px-[5px] py-[3px] hover:opacity-70 transition-opacity"
            >
              <span className="font-nats text-2xl leading-[100%] uppercase">[</span>
              <span className="text-xl font-normal uppercase leading-[100%] tracking-normal">
                {item.label}
              </span>
              <span className="font-nats text-2xl leading-[100%] uppercase">]</span>
            </Link>
          ))}
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
