import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hospitalData } from "@/data/hospitalData";

const HeroSection = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-primary-foreground px-4">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium">
              {hospitalData.timings.emergency}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {hospitalData.name}
          </h1>

          {/* Doctor Name */}
          <p className="text-xl md:text-2xl font-semibold text-accent mb-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {hospitalData.doctor.name}
          </p>

          {/* Degrees */}
          <p className="text-lg text-primary-foreground/80 mb-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {hospitalData.doctor.degrees}
          </p>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {hospitalData.tagline} — Dedicated to your Pain Management and Comfort through advance medical Care
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button
              size="lg"
              onClick={() => handleNavClick("#contact")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg font-semibold shadow-lg shadow-accent/30"
            >
              <Calendar className="mr-2" size={20} />
              Book Appointment
            </Button>
            <a href={`tel:${hospitalData.contact.phone}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg font-semibold bg-transparent"
              >
                <Phone className="mr-2" size={20} />
                Call Now
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
