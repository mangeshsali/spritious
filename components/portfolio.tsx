"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const portfolioItems = [
  {
    title: "Royal Wedding Celebration",
    category: "Wedding",
    image: "/luxury-royal-wedding-reception-with-elegant-gold-d.jpg",
    description: "A grand celebration featuring custom mandap design, floral arrangements, and spectacular lighting.",
  },
  {
    title: "Tech Summit 2024",
    category: "Corporate",
    image: "/modern-tech-conference-stage-with-led-screen-displ.jpg",
    description: "Complete event management for 500+ attendees with cutting-edge stage design and AV setup.",
  },
  {
    title: "Garden Wedding Ceremony",
    category: "Wedding",
    image: "/elegant-outdoor-garden-wedding-ceremony-at-sunset.jpg",
    description: "Intimate outdoor wedding with custom floral backdrop and ambient lighting design.",
  },
  {
    title: "Product Launch Gala",
    category: "Corporate",
    image: "/corporate-product-launch-event-with-dramatic-light.jpg",
    description: "High-impact product reveal with dramatic special effects and immersive brand experience.",
  },
  {
    title: "Destination Wedding",
    category: "Wedding",
    image: "/luxury-beach-destination-wedding-setup-at-sunset.jpg",
    description: "Multi-day destination wedding coordination with themed décor and hospitality services.",
  },
  {
    title: "Annual Gala Dinner",
    category: "Corporate",
    image: "/elegant-corporate-gala-dinner-in-luxury-ballroom.jpg",
    description: "Sophisticated corporate gala with premium catering and entertainment coordination.",
  },
]

export function Portfolio() {
  const [filter, setFilter] = useState<"All" | "Wedding" | "Corporate">("All")

  const filteredItems = filter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === filter)

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-muted/20 relative overflow-hidden">
      <div className="absolute top-32 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="mb-20 animate-fade-in-up max-w-4xl">
          <span className="inline-block text-accent text-xs uppercase tracking-[0.25em] font-light mb-2">Our Work</span>
          <div className="w-24 h-[1px] bg-accent/40 mb-12" />
          <h2 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light leading-[1.15] mb-8 text-balance">
            Crafted with
            <br />
            <span className="font-normal italic">precision</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-12 leading-relaxed font-light">
            Discover the artistry and precision behind our most memorable events.
          </p>

          <div className="flex flex-wrap gap-4">
            {["All", "Wedding", "Corporate"].map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category as "All" | "Wedding" | "Corporate")}
                variant={filter === category ? "default" : "outline"}
                className={`rounded-md px-8 py-6 text-sm font-light tracking-wide transition-all duration-300 ${
                  filter === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "border-border hover:border-foreground hover:bg-card"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden relative animate-fade-in-up rounded-lg"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative h-[600px] overflow-hidden bg-card">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-xs font-light rounded-md uppercase tracking-wide w-fit mb-4">
                    {item.category}
                  </span>
                  <h3 className="font-sans text-3xl md:text-4xl font-light text-white mb-3">{item.title}</h3>
                  <p className="text-white/90 text-base leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
