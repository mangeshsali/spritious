"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah & Michael",
    event: "Wedding",
    rating: 5,
    text: "Spritious Events made our wedding day absolutely magical. Every detail was perfect, from the stunning backdrop to the seamless coordination. Highly recommended!",
    image: "/elegant-bride.png",
  },
  {
    name: "David Chen",
    event: "Corporate Event",
    rating: 5,
    text: "Professional, creative, and incredibly organized. They transformed our annual conference into an unforgettable experience. The stage design was phenomenal.",
    image: "/diverse-businessman.png",
  },
  {
    name: "Priya Sharma",
    event: "Birthday Celebration",
    rating: 5,
    text: "The team went above and beyond to create a spectacular celebration. The customized decorations and special effects were breathtaking!",
    image: "/diverse-woman-portrait.png",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrentIndex((curr) => (curr - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">TESTIMONIALS</p>
          <h2 className="font-sans text-4xl md:text-6xl font-light mb-4 text-balance">
            What our <span className="font-semibold">clients say</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="p-8 md:p-12 border-border/50">
            <div className="flex flex-col items-center text-center">
              <img
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full object-cover mb-6"
              />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-foreground/80 mb-6 leading-relaxed italic">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>
              <h3 className="font-sans text-xl font-semibold">{testimonials[currentIndex].name}</h3>
              <p className="text-sm text-foreground/60 uppercase tracking-wider">{testimonials[currentIndex].event}</p>
            </div>
          </Card>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prev}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-border/50 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={next}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-border/50 bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
