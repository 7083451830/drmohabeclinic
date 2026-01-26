import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react";
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
                  <a href={`tel:${hospitalData.contact.phone}`} className="text-accent hover:underline">
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
                  <a href={`mailto:${hospitalData.contact.email}`} className="text-accent hover:underline">
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
                href={`https://wa.me/91${hospitalData.contact.whatsapp}?text=Hello%20Sanvedna%20Pain%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  <MessageCircle className="mr-2" size={18} />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Map - YOUR IFRAME ✅ */}
          <div className="relative">
            <div className="w-full h-[400px] md:h-[500px] rounded-2xl shadow-2xl overflow-hidden border border-border">
              <iframe
                src={hospitalData.contact.mapEmbed}
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Sanvedna Pain Management Clinic - Madhura Medical Stores, Gondia"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
