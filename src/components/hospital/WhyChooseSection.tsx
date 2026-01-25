import { 
  UserCheck, 
  Cpu, 
  HeartHandshake, 
  Wallet, 
  Clock, 
  ShieldCheck 
} from "lucide-react";
import { hospitalData } from "@/data/hospitalData";

const iconMap = [UserCheck, Cpu, HeartHandshake, Wallet, Clock, ShieldCheck];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 font-display">
            Why Patients Trust Us
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Experience healthcare that puts you first with our commitment to excellence
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitalData.whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[index] || UserCheck;
            
            return (
              <div
                key={index}
                className="group bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-2xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent 
                    size={28} 
                    className="text-accent-foreground" 
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/80">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
