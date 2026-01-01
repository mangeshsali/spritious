"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-muted/30 pt-20"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-wedding-venue-setup.jpg"
          alt="Luxury event venue"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/50 to-foreground/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 py-24">
        <div
          className={`max-w-5xl transition-all duration-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="mb-12">
            <span className="inline-block text-accent text-sm md:text-base uppercase tracking-[0.25em] font-mono font-bold mb-3 drop-shadow-lg">
              Premier Event Management
            </span>
            <div className="w-24 h-[2px] bg-accent" />
          </div>

          <h1 className="font-sans text-5xl md:text-6xl lg:text-8xl font-bold leading-[1.1] mb-8 text-balance text-white drop-shadow-2xl">
            Seamless Events,
            <br />
            <span className="text-accent drop-shadow-2xl">Endless Impressions</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/95 font-semibold max-w-2xl mb-16 leading-relaxed font-mono drop-shadow-lg">
            From corporate conferences to dream weddings, we create unforgettable experiences with flawless execution
            and exceptional hospitality.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <a href="#contact">
              <Button
                size="lg"
                className="bg-accent text-background hover:bg-accent/90 rounded-md px-10 py-7 text-sm font-mono font-bold tracking-wide group transition-all duration-300 shadow-2xl hover:shadow-accent/20 hover:scale-105"
              >
                Plan Your Event
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>

        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 opacity-60 animate-fade-in">
          <span className="text-xs uppercase tracking-[0.2em] font-mono font-medium text-white">Scroll</span>
          <div className="w-[1px] h-20 bg-white/60 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
