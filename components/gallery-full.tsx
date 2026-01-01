"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const categories = ["All", "Weddings", "Corporate", "Stages", "Backdrops", "SFX"]

const galleryItems = [
  {
    image: "/elegant-wedding-ceremony.png",
    category: "Weddings",
    title: "Elegant Garden Wedding",
  },
  {
    image: "/modern-corporate-conference-stage-with-led-screens.jpg",
    category: "Corporate",
    title: "Corporate Conference",
  },
  {
    image: "/custom-event-backdrop-with-dramatic-lighting.jpg",
    category: "Backdrops",
    title: "Custom Floral Backdrop",
  },
  {
    image: "/grand-event-entrance-with-dramatic-stage.jpg",
    category: "Stages",
    title: "Grand Event Stage",
  },
  {
    image: "/luxury-catering-service-elegant-table-setting.jpg",
    category: "Weddings",
    title: "Luxury Table Setting",
  },
  {
    image: "/wedding-reception-elegant.jpg",
    category: "Weddings",
    title: "Romantic Reception",
  },
  {
    image: "/corporate-event-stage-lighting.jpg",
    category: "Corporate",
    title: "Product Launch Event",
  },
  {
    image: "/custom-stage-design-lights.jpg",
    category: "Stages",
    title: "Modern Stage Design",
  },
  {
    image: "/pyrotechnics-special-effects.jpg",
    category: "SFX",
    title: "Pyrotechnic Display",
  },
  {
    image: "/wedding-backdrop-flowers.jpg",
    category: "Backdrops",
    title: "Floral Installation",
  },
  {
    image: "/corporate-gala-dinner.jpg",
    category: "Corporate",
    title: "Corporate Gala",
  },
  {
    image: "/confetti-cannons-celebration.jpg",
    category: "SFX",
    title: "Confetti Celebration",
  },
]

export function GalleryFull() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">GALLERY</p>
          <h1 className="font-sans text-5xl md:text-7xl font-light mb-6 text-balance">
            Our <span className="font-semibold">portfolio</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Explore our collection of stunning events, from intimate weddings to grand corporate celebrations
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`rounded-none px-6 py-3 text-sm uppercase tracking-widest font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border-border/50 hover:border-primary/50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden cursor-pointer aspect-[4/3]"
              onClick={() => setLightboxImage(item.image)}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary mb-1">{item.category}</p>
                  <h3 className="text-xl font-sans font-semibold text-foreground">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setLightboxImage(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage || "/placeholder.svg"}
            alt="Gallery item"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  )
}
