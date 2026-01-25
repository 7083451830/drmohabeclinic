import { Award, GraduationCap, Briefcase, CheckCircle } from "lucide-react";
import { hospitalData } from "@/data/hospitalData";

const DoctorSection = () => {
  const { doctor } = hospitalData;

  return (
    <section id="doctor" className="section-padding bg-secondary/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Meet Our Expert
          </span>
          <h2 className="section-title mt-2">Our Specialist Doctor</h2>
          <p className="section-subtitle mx-auto">
            Dedicated to providing exceptional medical care with expertise and compassion
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Doctor Image */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/20 rounded-3xl transform rotate-3" />
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt={doctor.name}
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary/80 to-transparent" />
                
                {/* Name Badge */}
                <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
                  <p className="text-2xl font-bold font-display">{doctor.name}</p>
                  <p className="text-accent">{doctor.specialization}</p>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -right-4 top-8 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-lg font-semibold">
                {doctor.experience}
              </div>
            </div>
          </div>

          {/* Doctor Details */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-display">
              {doctor.name}
            </h3>
            <p className="text-accent font-semibold text-lg mb-4">
              {doctor.specialization}
            </p>

            {/* Qualifications */}
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <GraduationCap className="text-accent" size={20} />
              <span>{doctor.degrees}</span>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              {doctor.description}
            </p>

            {/* Certifications */}
            <div className="space-y-4 mb-8">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <Award className="text-accent" size={20} />
                Certifications & Memberships
              </h4>
              <div className="space-y-3">
                {doctor.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-card p-3 rounded-lg border border-border"
                  >
                    <CheckCircle className="text-accent flex-shrink-0" size={18} />
                    <span className="text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-card p-4 rounded-xl border border-border text-center">
                <Briefcase className="text-accent mx-auto mb-2" size={24} />
                <p className="text-2xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Years Exp.</p>
              </div>
              <div className="bg-card p-4 rounded-xl border border-border text-center">
                <Award className="text-accent mx-auto mb-2" size={24} />
                <p className="text-2xl font-bold text-primary">5000+</p>
                <p className="text-sm text-muted-foreground">Procedures</p>
              </div>
              <div className="bg-card p-4 rounded-xl border border-border text-center">
                <GraduationCap className="text-accent mx-auto mb-2" size={24} />
                <p className="text-2xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
