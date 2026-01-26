import { useState, useEffect } from "react";
import { Menu, X, Phone, List } from "lucide-react"; // List used for pain menu
import { hospitalData } from "@/data/hospitalData";
import { Button } from "@/components/ui/button";
import MobilePainMenu from "./MobilePainMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setOpenMenu(false);
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -72; // header height
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
              {/* Mobile Nav */}
              <button
                className="p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X
                    size={28}
                    className={isScrolled ? "text-foreground" : "text-primary-foreground"}
                  />
                ) : (
                  <Menu
                    size={28}
                    className={isScrolled ? "text-foreground" : "text-primary-foreground"}
                  />
                )}
              </button>

              {/* Pain Menu */}
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

        {/* Mobile Nav Dropdown */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[72px] bg-background shadow-lg transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <nav className="container-custom py-6 flex flex-col gap-4">
            {hospitalData.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-foreground font-medium py-2 border-b border-border transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <a
                href={`tel:${hospitalData.contact.phone}`}
                className="flex items-center gap-2 text-accent font-semibold"
              >
                <Phone size={18} />
                {hospitalData.contact.phone}
              </a>
              <Button
                onClick={() => handleNavClick("#contact")}
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full"
              >
                Book Appointment
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Pain Menu */}
      <MobilePainMenu open={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
};

export default Header;
