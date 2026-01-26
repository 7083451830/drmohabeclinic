import { useState, useEffect } from "react";
import { Phone, List } from "lucide-react"; // Only icons we need
import { hospitalData } from "@/data/hospitalData";
import { Button } from "@/components/ui/button";
import MobilePainMenu from "./MobilePainMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false); // Only state for pain menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpenMenu(false); // Close pain menu on nav click
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -72; // header height offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">M</span>
              </div>
              <span
                className={`font-display font-bold text-xl ${
                  isScrolled ? "text-primary" : "text-primary-foreground"
                }`}
              >
                {hospitalData.name}
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {hospitalData.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`font-medium transition-colors hover:text-accent ${
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${hospitalData.contact.phone}`}
                className={`flex items-center gap-2 font-semibold transition-colors ${
                  isScrolled ? "text-accent" : "text-primary-foreground"
                }`}
              >
                <Phone size={18} />
                {hospitalData.contact.phone}
              </a>
              <Button
                onClick={() => handleNavClick("#contact")}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Book Appointment
              </Button>
            </div>

            {/* Mobile Buttons */}
            <div className="lg:hidden flex items-center gap-2">
              {/* Pain Menu Button */}
              <button
                onClick={() => setOpenMenu(true)}
                className="p-2"
                aria-label="Open pain menu"
              >
                <List
                  size={26}
                  className={isScrolled ? "text-foreground" : "text-primary-foreground"}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Pain Menu Side Panel */}
      <MobilePainMenu open={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
};

export default Header;
