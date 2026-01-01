"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Award, Users, Calendar, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"

export function AboutFull() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ events: 0, years: 0, clients: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate counters
          const duration = 2000
          const steps = 60
          const increment = {
            events: Math.ceil(500 / steps),
            years: Math.ceil(10 / steps),
            clients: Math.ceil(300 / steps),
          }

          let currentStep = 0
          const timer = setInterval(() => {
            currentStep++
            setCounters((prev) => ({
              events: Math.min(prev.events + increment.events, 500),
              years: Math.min(prev.years + increment.years, 10),
              clients: Math.min(prev.clients + increment.clients, 300),
            }))

            if (currentStep >= steps) clearInterval(timer)
          }, duration / steps)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We pour our heart into every event, treating each celebration as our own",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering world-class quality in every detail",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to bring their unique vision to life",
    },
    {
      icon: Calendar,
      title: "Reliability",
      description: "On-time, on-budget, and exceeding expectations every single time",
    },
  ]

  const features = [
    "Over 500+ successful events delivered",
    "10+ years of industry expertise",
    "Dedicated team of event professionals",
    "End-to-end event management",
    "Customized solutions for every budget",
    "24/7 support throughout your event",
    "Award-winning design and execution",
    "Trusted by leading brands and families",
  ]

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">ABOUT US</p>
          <h1 className="font-sans text-5xl md:text-7xl font-light mb-6 text-balance">
            Creating <span className="font-semibold">unforgettable moments</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            At Spritious Events, we don't just manage events—we craft experiences that leave lasting impressions and
            create memories that span generations.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 mb-32" ref={sectionRef}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 text-center border-border/50 hover:border-primary/50 transition-colors">
            <div className="text-5xl md:text-6xl font-bold text-primary mb-2">{counters.events}+</div>
            <div className="text-sm uppercase tracking-widest text-foreground/60">Events Completed</div>
          </Card>
          <Card className="p-8 text-center border-border/50 hover:border-primary/50 transition-colors">
            <div className="text-5xl md:text-6xl font-bold text-primary mb-2">{counters.years}+</div>
            <div className="text-sm uppercase tracking-widest text-foreground/60">Years Experience</div>
          </Card>
          <Card className="p-8 text-center border-border/50 hover:border-primary/50 transition-colors">
            <div className="text-5xl md:text-6xl font-bold text-primary mb-2">{counters.clients}+</div>
            <div className="text-sm uppercase tracking-widest text-foreground/60">Happy Clients</div>
          </Card>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="font-sans text-4xl md:text-5xl font-light mb-6">
              Our <span className="font-semibold">Story</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Founded over a decade ago, Spritious Events began with a simple mission: to transform ordinary moments
              into extraordinary memories. What started as a small team of passionate event enthusiasts has grown into
              one of the region's most trusted event management companies.
            </p>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Today, we specialize in crafting bespoke experiences across weddings, corporate events, social gatherings,
              and everything in between. Our approach combines creativity, precision, and a deep understanding of what
              makes each event truly special.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              From intimate celebrations to grand galas, we bring the same level of dedication, expertise, and attention
              to detail to every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="/event-planning-team-working-office.jpg"
                alt="Event planning team"
                className="w-full h-64 object-cover shadow-md"
                loading="lazy"
              />
              <img
                src="/luxury-event-decor-setup.jpg"
                alt="Event decor setup"
                className="w-full h-48 object-cover shadow-md"
                loading="lazy"
              />
            </div>
            <div className="space-y-4 pt-12">
              <img
                src="/corporate-meeting.png"
                alt="Corporate meeting"
                className="w-full h-48 object-cover shadow-md"
                loading="lazy"
              />
              <img
                src="/event-celebration.jpg"
                alt="Event celebration"
                className="w-full h-64 object-cover shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl md:text-5xl font-light mb-4">
              Our <span className="font-semibold">Values</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-sans text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-4xl md:text-5xl font-light mb-12 text-center">
            Why choose <span className="font-semibold">Spritious Events</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
