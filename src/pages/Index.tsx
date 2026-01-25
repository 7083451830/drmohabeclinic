import Header from "@/components/hospital/Header";
import HeroSection from "@/components/hospital/HeroSection";
import AboutSection from "@/components/hospital/AboutSection";
import DoctorSection from "@/components/hospital/DoctorSection";
import ServicesSection from "@/components/hospital/ServicesSection";
import WhyChooseSection from "@/components/hospital/WhyChooseSection";
import GallerySection from "@/components/hospital/GallerySection";
import AppointmentCTA from "@/components/hospital/AppointmentCTA";
import ContactSection from "@/components/hospital/ContactSection";
import Footer from "@/components/hospital/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DoctorSection />
        <WhyChooseSection />
        <GallerySection />
        <AppointmentCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
