import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";

const galleryImages = [
  {
    id: 1,
    src: gallery1,
    alt: "SI Joint MIPSI for SI Arthropathy",
    category: "Procedure"
  },
  {
    id: 2,
    src: gallery2,
    alt: "Celiac Plexus Neurolysis for Chronic Pancreatitis",
    category: "Procedure"
  },
  {
    id: 3,
    src: gallery3,
    alt: "Ozone Disc Nucleolysis for Back Pain",
    category: "Procedure"
  },
  {
    id: 4,
    src: gallery4,
    alt: "Lumbar Sympathectomy for PVD",
    category: "Procedure"
  },
  {
    id: 5,
    src: gallery5,
    alt: "Botox Injection for CRPS",
    category: "Procedure"
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Gallery
          </span>
          <h2 className="section-title mt-2">Take a Virtual Tour</h2>
          <p className="section-subtitle mx-auto">
            Explore our state-of-the-art facilities and modern infrastructure
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? "h-64 md:h-full" : "h-48 md:h-64"
                }`}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-primary-foreground">
                  <p className="font-semibold">{image.alt}</p>
                  <p className="text-sm text-primary-foreground/70">{image.category}</p>
                </div>
                <ZoomIn className="absolute top-4 right-4 text-primary-foreground" size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
