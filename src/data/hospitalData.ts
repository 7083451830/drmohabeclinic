// All hospital data is centralized here for easy editing
export const hospitalData = {
  name: "SANVEDNA PAIN CLINIC",
  tagline: "Excellence in Healthcare",
  description: "A CENTER FOR SPINE,JONT & NEUROPAIN.",
  
  doctor: {
    name: "Dr. Shubhada Jade(Mohabe)",
    degrees: "MBBS, MD,FIPM",
    specialization: "Pain Physician,FIPM",
    experience: "3+ Years of Experience",
    description: "Dr. Shubhada Jade(Mohabe) has done MBBBS MD Anaesthesia ,Passionate about her clinical skills... Also done Fellowshp in Pain Medicine & Practices as Pain Physician.",
    certifications: [
      "FIPM",
      "ISSP -29/2",
    ]
  },
  
  contact: {
    phone: "+91 8446721259",
    whatsapp:  "8446721259",
    email: "",
    address: "Arsh Complex, near Madhura medical,Awanti bai Square, Gondiamap",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.755537609912!2d72.87765347520897!3d19.024547253903636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf26f4972f25%3A0x5c5b9c5c8f5f5f5f!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
  },
  
  timings: {
    opd: "Mon - Sat: 11:00 AM - 4:00 PM",
  },
  
  services: [
    {
      id: 1,
      title: "Pain Management",
      description: "Advanced pain management techniques for chronic and acute pain conditions.",
      icon: "Activity"
    },
    {
      id: 2,
      title: "General Medicine",
      description: "Comprehensive primary care and treatment for common health conditions.",
      icon: "Stethoscope"
    },
    {
      id: 3,
      title: "Diagnostics",
      description: "State-of-the-art diagnostic services including imaging and laboratory tests.",
      icon: "Microscope"
    },
    {
      id: 4,
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
