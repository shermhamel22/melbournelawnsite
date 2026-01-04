import { useState } from "react";
import { X } from "lucide-react";

import galleryPavers from "@/assets/gallery-pavers.jpg";
import galleryLandscaping from "@/assets/gallery-landscaping.jpg";
import galleryTrees from "@/assets/gallery-trees.jpg";
import galleryLighting from "@/assets/gallery-lighting.jpg";
import gallerySod from "@/assets/gallery-sod.jpg";
import galleryCommercial from "@/assets/gallery-commercial.jpg";

const projects = [
  {
    image: galleryPavers,
    title: "Paver Patio Installation",
    category: "Pavers",
  },
  {
    image: galleryLandscaping,
    title: "Front Yard Design",
    category: "Landscaping",
  },
  {
    image: galleryTrees,
    title: "Tree Trimming Service",
    category: "Tree Care",
  },
  {
    image: galleryLighting,
    title: "Landscape Lighting",
    category: "Lighting",
  },
  {
    image: gallerySod,
    title: "New Sod Installation",
    category: "Lawn Install",
  },
  {
    image: galleryCommercial,
    title: "Commercial Maintenance",
    category: "Commercial",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Work</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            See the Results for Yourself
          </h2>
          <p className="text-muted-foreground text-lg">
            Browse our recent projects and see the quality we deliver to Melbourne homeowners and businesses.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3]"
              onClick={() => setSelectedImage(project.image)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded mb-2">
                  {project.category}
                </span>
                <h3 className="text-background font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-background hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Project detail"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
