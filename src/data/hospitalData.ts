// All hospital data is centralized here for easy editing
export const hospitalData = {
  name: "MediCare Hospital",
  tagline: "Excellence in Healthcare",
  description: "Providing compassionate, world-class medical care with advanced technology and experienced professionals dedicated to your well-being.",
  
  doctor: {
    name: "Dr. Rajesh Kumar Sharma",
    degrees: "MBBS, MD (Medicine), DM (Cardiology)",
    specialization: "Interventional Cardiologist",
    experience: "15+ Years of Experience",
    description: "Dr. Rajesh Kumar Sharma is a renowned cardiologist with over 15 years of experience in treating complex cardiac conditions. He has successfully performed over 5,000 cardiac procedures and is known for his patient-centric approach.",
    certifications: [
      "Fellow of American College of Cardiology (FACC)",
      "Member of Cardiological Society of India",
      "Certified in Advanced Cardiac Life Support"
    ]
  },
  
  contact: {
    phone: "+91 98765 43210",
    whatsapp: "+919876543210",
    email: "info@medicarehospital.com",
    address: "123, Healthcare Avenue, Medical District, Mumbai - 400001",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.755537609912!2d72.87765347520897!3d19.024547253903636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf26f4972f25%3A0x5c5b9c5c8f5f5f5f!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
  },
  
  timings: {
    opd: "Mon - Sat: 9:00 AM - 8:00 PM",
    emergency: "24/7 Emergency Services",
    sunday: "Sunday: 10:00 AM - 2:00 PM"
  },
  
  services: [
    {
      id: 1,
      title: "Cardiology",
      description: "Comprehensive heart care including diagnostics, treatment, and cardiac rehabilitation.",
      icon: "Heart"
    },
    {
      id: 2,
      title: "Pain Management",
      description: "Advanced pain management techniques for chronic and acute pain conditions.",
      icon: "Activity"
    },
    {
      id: 3,
      title: "Orthopedics",
      description: "Expert treatment for bone, joint, and muscle disorders with modern surgical techniques.",
      icon: "Bone"
    },
    {
      id: 4,
      title: "General Medicine",
      description: "Comprehensive primary care and treatment for common health conditions.",
      icon: "Stethoscope"
    },
    {
      id: 5,
      title: "Diagnostics",
      description: "State-of-the-art diagnostic services including imaging and laboratory tests.",
      icon: "Microscope"
    },
    {
      id: 6,
      title: "Emergency Care",
      description: "Round-the-clock emergency medical services with rapid response teams.",
      icon: "Ambulance"
    }
  ],
  
  whyChooseUs: [
    {
      title: "Expert Doctors",
      description: "Team of highly qualified and experienced medical professionals"
    },
    {
      title: "Advanced Technology",
      description: "State-of-the-art medical equipment and treatment facilities"
    },
    {
      title: "Patient-Centric Care",
      description: "Personalized treatment plans focused on patient comfort"
    },
    {
      title: "Affordable Pricing",
      description: "Quality healthcare at competitive and transparent prices"
    },
    {
      title: "24/7 Availability",
      description: "Round-the-clock emergency services and support"
    },
    {
      title: "Hygiene & Safety",
      description: "Strict infection control protocols and clean environment"
    }
  ],
  
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Doctor", href: "#doctor" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ]
};
