import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { hospitalData } from "@/data/hospitalData";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="section-title mt-2">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            We're here to help. Reach out to us for appointments, inquiries, or any assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 font-display">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">{hospitalData.contact.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <a 
                    href={`tel:${hospitalData.contact.phone}`}
                    className="text-accent hover:underline"
                  >
                    {hospitalData.contact.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a 
                    href={`mailto:${hospitalData.contact.email}`}
                    className="text-accent hover:underline"
                  >
                    {hospitalData.contact.email || "Not Provided"}
                  </a>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">OPD Timings</h4>
                  <p className="text-muted-foreground">{hospitalData.timings.opd}</p>
                  <p className="text-muted-foreground">{hospitalData.timings.sunday}</p>
                  <p className="text-accent font-medium">{hospitalData.timings.emergency}</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`tel:${hospitalData.contact.phone}`}>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Phone className="mr-2" size={18} />
                  Call Now
                </Button>
              </a>
              <a
                href={`https://wa.me/${hospitalData.contact.whatsapp}?text=Hello, I would like to book an appointment.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90">
                  <MessageCircle className="mr-2" size={18} />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            {/* Responsive Map */}
            <div
              className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border w-full"
              style={{ paddingBottom: "56.25%", position: "relative" }}
            >
              <iframe
                src={hospitalData.contact.mapEmbed}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hospital Location Map"
              />
            </div>

            {/* Floating Book Appointment Card */}
            <div className="absolute -bottom-6 left-6 right-6 bg-card p-4 rounded-xl shadow-xl border border-border">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-accent" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Book Appointment</p>
                    <p className="text-sm text-muted-foreground">Schedule your visit today</p>
                  </div>
                </div>
                <a href={`tel:${hospitalData.contact.phone}`}>
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Book Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
