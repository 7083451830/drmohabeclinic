// All hospital data is centralized here for easy editing
export const hospitalData = {
  name: "SANVEDANA PAIN MANAGEMENT CLINIC",
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
    email: "sanvedanapainmanagmentclinic@gmail.com",
    address: "Arsh Complex, near Madhura medical,Awanti bai Square, Gondia",
    mapEmbed: "https://maps.google.com/maps?q=Arsh%20complex,%20madhura%20medical,%20Gondia&t=&z=14&ie=UTF8&iwloc=&output=embed" // ✅ Your iframe URL
  },
  
  timings: {
    opd: "Mon - Sat: 11:00 AM - 4:00 PM",
    emergency: "24/7 Emergency Available",
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
      title: "Diagnostics",
      description: "State-of-the-art diagnostic services including imaging and laboratory tests.",
      icon: "Microscope"
    },
    {
      id: 3,
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
