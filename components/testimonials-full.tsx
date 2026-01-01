"use client"

import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah & Michael Thompson",
    event: "Wedding",
    rating: 5,
    text: "Spritious Events made our wedding day absolutely magical. From the breathtaking floral backdrop to the seamless coordination of every detail, they exceeded our expectations. The team's creativity and professionalism were outstanding. We couldn't have asked for a better experience!",
    image: "/elegant-bride.png",
    date: "October 2023",
  },
  {
    name: "David Chen",
    event: "Corporate Event",
    rating: 5,
    text: "Professional, creative, and incredibly organized. They transformed our annual conference into an unforgettable experience. The stage design was phenomenal, and the AV production was flawless. Our clients and stakeholders were thoroughly impressed.",
    image: "/diverse-businessman.png",
    date: "September 2023",
  },
  {
    name: "Priya Sharma",
    event: "Birthday Celebration",
    rating: 5,
    text: "The team went above and beyond to create a spectacular 50th birthday celebration for my mother. The customized decorations and special effects were breathtaking! Every guest was amazed, and my mother felt like royalty. Thank you for making it so special.",
    image: "/diverse-woman-smiling.png",
    date: "August 2023",
  },
  {
    name: "James Wilson",
    event: "Product Launch",
    rating: 5,
    text: "Outstanding service from start to finish. The Spritious team handled our tech product launch with incredible attention to detail. The lighting, staging, and overall atmosphere perfectly reflected our brand identity. Highly recommended for corporate events!",
    image: "/professional-man.png",
    date: "November 2023",
  },
  {
    name: "Anita & Raj Patel",
    event: "Wedding",
    rating: 5,
    text: "Our dream wedding became a reality thanks to Spritious Events. They seamlessly blended traditional and modern elements, creating a celebration that honored our culture while feeling fresh and contemporary. The hospitality service was impeccable!",
    image: "/indian-couple.png",
    date: "December 2023",
  },
  {
    name: "Michelle Rodriguez",
    event: "Corporate Gala",
    rating: 5,
    text: "We've worked with many event companies, but Spritious Events stands out. Their ability to execute our vision while adding creative touches we hadn't even thought of was remarkable. The gala was elegant, sophisticated, and perfectly on-brand.",
    image: "/confident-businesswoman.png",
    date: "July 2023",
  },
]

export function TestimonialsFull() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">TESTIMONIALS</p>
          <h1 className="font-sans text-5xl md:text-7xl font-light mb-6 text-balance">
            What our <span className="font-semibold">clients say</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Read the experiences of those who trusted us to create their perfect events
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed flex-grow italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-border/30">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-sans text-base font-semibold">{testimonial.name}</h3>
                  <p className="text-xs text-foreground/60 uppercase tracking-wider">{testimonial.event}</p>
                  <p className="text-xs text-foreground/50">{testimonial.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mt-32">
        <Card className="p-12 md:p-16 text-center border-border/50 bg-muted/30 max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl md:text-5xl font-light mb-6">
            Ready to create your own <span className="font-semibold">success story</span>?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Join our growing family of satisfied clients and let us make your event unforgettable
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-12 py-6 text-sm uppercase tracking-widest font-medium transition-all"
          >
            Start Planning Your Event
          </a>
        </Card>
      </section>
    </div>
  )
}
