import { CheckCircle, Award, Users, Clock } from "lucide-react";
import { hospitalData } from "@/data/hospitalData";

const AboutSection = () => {
  const features = [
    { icon: Award, text: "3+ Years of Excellence" },
    { icon: Users, text: "10,000+ Happy Patients" },
    { icon: Clock, text: "24/7 Emergency Care" },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About Us
              
              {/* Left Content */}
<div className="order-2 lg:order-1">

  {/* Floating Logo Above Heading */}
  <div className="flex justify-center mb-6 relative">
    <div className="relative">
      <img 
        
        <img src="/Logo.png" alt="Clinic Logo" className="h-24 w-auto" />
        alt="Clinic Logo" 
        className="h-24 w-auto mx-auto relative z-10" 
      />
      <div 
        className="absolute inset-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl mx-auto" 
      />
    </div>
  </div>

  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
    About Us
  </span>
  <h2 className="section-title mt-2">
    Welcome to {hospitalData.name}
  </h2>
            </span>
            <h2 className="section-title mt-2">
              Welcome to {hospitalData.name}
            </h2>
            <p className="section-subtitle mb-6">
              {hospitalData.description}
            </p>
            <p className="text-muted-foreground mb-8">
             
        Sanvedana Pain Management Clinic is a dedicated center for the diagnosis and treatment of acute and chronic pain conditions, committed to improving quality of life through evidence-based, compassionate, and patient-centered care.  
        We specialize in interventional pain management and advanced non-surgical techniques to treat a wide range of painful disorders, including spine-related pain, neuropathic pain, joint pain, cancer pain, post-surgical pain, headache,migraine, frozen shoulder, and musculoskeletal conditions.
            </p>
            <p className="text-muted-foreground mb-8">
              Our approach focuses not only on relieving pain but also on restoring function and helping patients return to their daily activities with confidence.
          At Sanvedana, we believe that every patient’s pain is unique. That’s why we design individualized treatment plans based on thorough evaluation, modern imaging guidance, and the latest pain management protocols.
       clinic follows the principles of FIPM (Fellowship in Interventional Pain Management), ensuring that all procedures are performed with high standards of safety, precision, and clinical excellence.With a combination of medical therapy, minimally invasive procedures, rehabilitation guidance, and lifestyle counseling, we aim to deliver long-lasting relief and holistic healing.</p>
       <p className="text-muted-foreground mb-8">
            Your comfort. Your dignity. Your relief. That is our mission.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-secondary p-4 rounded-lg"
                >
                  <feature.icon className="text-accent flex-shrink-0" size={24} />
                  <span className="text-sm font-medium text-foreground">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {[
                "Advanced diagnostic and treatment facilities",
                "Experienced and caring medical staff",
                "Patient-centric approach to healthcare",
                "Affordable and transparent pricing",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-accent flex-shrink-0" size={20} />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Modern hospital facility"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <Award className="text-accent" size={32} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">3+</p>
                    <p className="text-muted-foreground text-sm">
                      Years of Excellence
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
