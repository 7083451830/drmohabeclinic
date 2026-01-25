import { 
  Heart, 
  Activity, 
  Bone, 
  Stethoscope, 
  Microscope, 
  Ambulance,
  ArrowRight,
  LucideIcon
} from "lucide-react";
import { hospitalData } from "@/data/hospitalData";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Activity,
  Bone,
  Stethoscope,
  Microscope,
  Ambulance,
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="section-title mt-2">Medical Services We Offer</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive healthcare services delivered with excellence and compassion
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitalData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Heart;
            
            return (
              <div
                key={service.id}
                className="group bg-card p-8 rounded-2xl border border-border card-hover cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                  <IconComponent 
                    size={32} 
                    className="text-accent group-hover:text-accent-foreground transition-colors duration-300" 
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 font-display">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight size={18} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
