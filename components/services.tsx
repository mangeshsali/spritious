"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, Heart, Zap, DoorOpen, Utensils, Frame } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Wedding Events",
    description:
      "Create your perfect day with our comprehensive wedding planning and execution services, from intimate ceremonies to grand celebrations.",
    image: "/elegant-wedding-ceremony.png",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Professional event management for conferences, product launches, team building, and corporate gatherings that leave lasting impressions.",
    image: "/modern-corporate-conference-stage-with-led-screens.jpg",
  },
  {
    icon: Utensils,
    title: "Best Hospitality Services",
    description:
      "Premium catering and hospitality that delights your guests. We curate exceptional dining experiences with world-class service.",
    image: "/luxury-catering-service-elegant-table-setting.jpg",
  },
  {
    icon: Frame,
    title: "Customized Backdrops",
    description:
      "Stunning custom-designed backdrops and stage setups tailored to your event theme and vision, creating picture-perfect moments.",
    image: "/custom-event-backdrop-with-dramatic-lighting.jpg",
  },
  {
    icon: DoorOpen,
    title: "Entries & Stages",
    description:
      "Dramatic stage designs and grand entrance setups that set the tone and create memorable first impressions for your event.",
    image: "/grand-event-entrance-with-dramatic-stage.jpg",
  },
  {
    icon: Zap,
    title: "Special Effects (SFX)",
    description:
      "Breathtaking special effects that wow your guests. From pyrotechnics to CO2 jets, confetti cannons to laser shows.",
    image: "/special-effects-pyrotechnics-event.jpg",
  },
]

export function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll(".service-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-32 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-32 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="mb-20 animate-fade-in-up max-w-4xl">
          <span className="inline-block text-accent text-xs uppercase tracking-[0.25em] font-light mb-2">
            What We Offer
          </span>
          <div className="w-24 h-[1px] bg-accent/40 mb-12" />
          <h2 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light leading-[1.15] mb-8 text-balance">
            Services that define
            <br />
            <span className="font-normal italic">excellence</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed font-light">
            Comprehensive event management solutions tailored to bring your vision to life with precision and elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                data-index={index}
                className={`service-card group relative overflow-hidden rounded-lg transition-all duration-700 ${
                  visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-[550px] overflow-hidden bg-card">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-70" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="p-3 bg-accent/90 backdrop-blur-sm rounded-md w-fit mb-6 group-hover:bg-accent transition-colors duration-300">
                      <Icon className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <h3 className="font-sans text-3xl font-light mb-4 text-white">{service.title}</h3>
                    <p className="text-white/90 text-base leading-relaxed font-light">{service.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
