"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    "Over 500+ successful events delivered",
    "10+ years of industry expertise",
    "Dedicated team of event professionals",
    "End-to-end event management",
    "Customized solutions for every budget",
    "24/7 support throughout your event",
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2 className="font-sans text-4xl md:text-6xl font-light mb-6 text-balance">
              Why choose <span className="font-semibold">Spritious Events</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              At Spritious Events, we believe every event tells a unique story. With over a decade of experience in
              crafting exceptional experiences, we combine creativity, precision, and dedication to transform your
              vision into reality.
            </p>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              From intimate gatherings to grand celebrations, our team of passionate professionals ensures every detail
              is executed flawlessly, creating memories that last a lifetime.
            </p>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/event-planning-team-working-office.jpg"
                  alt="Event planning"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                  loading="lazy"
                />
                <img
                  src="/luxury-event-decor-setup.jpg"
                  alt="Event decor"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4 pt-12">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Wedding celebration"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                  loading="lazy"
                />
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="Corporate event"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
