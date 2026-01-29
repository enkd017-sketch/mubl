import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

// Import gallery images
import cansatTeam from "@/assets/gallery/cansat-team.jpg";
import roboticsCompetition from "@/assets/gallery/robotics-competition.jpg";
import printing3d from "@/assets/gallery/3d-printing.jpg";
import spacefestEvent from "@/assets/gallery/spacefest-event.jpg";
import teamPhoto from "@/assets/gallery/team-photo.jpg";
import workshop from "@/assets/gallery/workshop.jpg";

const galleryItems = [
  {
    src: cansatTeam,
    title: "CanSat Team at Work",
    category: "Projects",
    span: "md:col-span-2",
  },
  {
    src: printing3d,
    title: "3D Printing Lab",
    category: "Workshop",
    span: "md:row-span-2",
  },
  {
    src: roboticsCompetition,
    title: "Robotics Competition",
    category: "Events",
    span: "",
  },
  {
    src: spacefestEvent,
    title: "SpaceFest 2025",
    category: "Events",
    span: "md:col-span-2",
  },
  {
    src: teamPhoto,
    title: "MUBL Team",
    category: "Team",
    span: "",
  },
  {
    src: workshop,
    title: "STEM Workshop",
    category: "Events",
    span: "",
  },
];

const categories = ["All", "Projects", "Events", "Workshop", "Team"];

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-sm font-medium text-accent">Photo Gallery</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Moments That
            <span className="gradient-text"> Define Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A visual journey through our projects, events, workshops, and the amazing 
            people who make MUBL special.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "gradient-bg text-primary-foreground glow"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${item.span}`}
              onClick={() => setLightboxImage(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-medium text-primary-foreground/70 mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-primary-foreground">
                  {item.title}
                </h3>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="h-5 w-5 text-primary-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="h-6 w-6 text-primary-foreground" />
          </button>
          <div 
            className="relative max-w-5xl max-h-[85vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent rounded-b-lg">
              <span className="text-xs font-medium text-primary-foreground/70">
                {lightboxImage.category}
              </span>
              <h3 className="text-xl font-bold text-primary-foreground">
                {lightboxImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
