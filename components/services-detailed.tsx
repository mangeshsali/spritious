"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  Building2,
  Heart,
  Utensils,
  Frame,
  DoorOpen,
  Theater as Theatre,
  Wand2,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Sparkles,
    title: "Event Management",
    description:
      "Complete end-to-end event planning and coordination. From concept development to flawless execution, we handle every aspect of your event with precision and creativity.",
    features: ["Concept & Theme Development", "Vendor Coordination", "Timeline Management", "On-site Coordination"],
    image: "/event-management-planning.jpg",
  },
  {
    icon: Utensils,
    title: "Best Hospitality Services",
    description:
      "Premium catering and hospitality that delights your guests. We curate exceptional dining experiences with world-class service, custom menus, and impeccable presentation.",
    features: ["Custom Menu Design", "Professional Staff", "Beverage Services", "Premium Table Settings"],
    image: "/luxury-catering-service-elegant-table-setting.jpg",
  },
  {
    icon: Frame,
    title: "Customized Backdrops",
    description:
      "Stunning, bespoke backdrops that transform your venue. From elegant floral walls to dramatic themed installations, we create photo-worthy moments your guests will remember.",
    features: ["Custom Designs", "Floral Installations", "LED & Lighting Integration", "Themed Decor"],
    image: "/custom-event-backdrop-with-dramatic-lighting.jpg",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Professional corporate event solutions that elevate your brand. Conferences, product launches, team building, and corporate celebrations executed with sophistication.",
    features: ["Conferences & Seminars", "Product Launches", "Team Building Events", "Corporate Galas"],
    image: "/modern-corporate-conference-stage-with-led-screens.jpg",
  },
  {
    icon: Heart,
    title: "Weddings",
    description:
      "Make your special day truly unforgettable. From intimate ceremonies to grand celebrations, we orchestrate every detail to perfection, creating the wedding of your dreams.",
    features: ["Ceremony Planning", "Reception Design", "Vendor Management", "Bridal Services"],
    image: "/elegant-wedding-ceremony.png",
  },
  {
    icon: DoorOpen,
    title: "Entries & Stages",
    description:
      "Grand entrances and impressive stages that set the tone. We design and build custom entry points and stage setups that create memorable first impressions.",
    features: ["Custom Stage Design", "Grand Entrances", "Red Carpet Setup", "VIP Sections"],
    image: "/grand-event-entrance-with-dramatic-stage.jpg",
  },
  {
    icon: Wand2,
    title: "Special Effects (SFX)",
    description:
      "Breathtaking special effects that wow your guests. From pyrotechnics to CO2 jets, confetti cannons to laser shows, we add that extra magic to your celebration.",
    features: ["Pyrotechnics", "CO2 & Smoke Effects", "Confetti Cannons", "Laser & Light Shows"],
    image: "/special-effects-pyrotechnics-event.jpg",
  },
  {
    icon: Theatre,
    title: "Full Production",
    description:
      "Complete audio-visual production services. Professional sound systems, lighting design, video production, and technical support for flawless event execution.",
    features: ["Sound Systems", "Lighting Design", "Video Production", "Technical Support"],
    image: "/event-production-lighting-stage.jpg",
  },
]

export function ServicesDetailed() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">OUR SERVICES</p>
          <h1 className="font-sans text-5xl md:text-7xl font-light mb-6 text-balance">
            Comprehensive event <span className="font-semibold">solutions</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            From intimate gatherings to grand celebrations, we offer a complete suite of services to bring your vision
            to life with elegance and precision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4">
        <div className="space-y-20 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 ${
                index % 2 === 0 ? "" : ""
              }`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full min-h-[300px] object-cover"
                    loading="lazy"
                  />
                </div>

                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="p-3 bg-primary/10 rounded-full w-fit mb-6">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-sans text-3xl md:text-4xl font-light mb-4">
                    <span className="font-semibold">{service.title}</span>
                  </h2>
                  <p className="text-foreground/70 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-sm uppercase tracking-widest font-medium w-fit">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mt-32">
        <Card className="p-12 md:p-16 text-center border-border/50 bg-muted/30">
          <h2 className="font-sans text-3xl md:text-5xl font-light mb-6">
            Ready to create something <span className="font-semibold">extraordinary</span>?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Let's discuss your event and explore how we can bring your vision to life
          </p>
          <Link href="/contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-12 py-6 text-sm uppercase tracking-widest font-medium">
              Contact Us Today
            </Button>
          </Link>
        </Card>
      </section>
    </div>
  )
}
