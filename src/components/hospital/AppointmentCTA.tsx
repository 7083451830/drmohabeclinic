import { Phone, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hospitalData } from "@/data/hospitalData";

const AppointmentCTA = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-accent to-accent/80 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center text-accent-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-accent-foreground/90 max-w-2xl mx-auto">
            Take the first step towards better health. Contact us today to schedule 
            your consultation with our expert doctors.
          </p>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href={`tel:${hospitalData.contact.phone}`}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold shadow-lg"
              >
                <Phone className="mr-2" size={20} />
                {hospitalData.contact.phone}
              </Button>
            </a>
            
            <a
              href={`https://wa.me/${hospitalData.contact.whatsapp}?text=Hello, I would like to book an appointment.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent px-8 py-6 text-lg font-semibold bg-transparent"
              >
                <MessageCircle className="mr-2" size={20} />
                WhatsApp Us
              </Button>
            </a>
          </div>

          <Button
            size="lg"
            onClick={() => handleNavClick("#contact")}
            className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 px-10 py-6 text-lg font-semibold shadow-lg"
          >
            <Calendar className="mr-2" size={20} />
            Book Appointment Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;
