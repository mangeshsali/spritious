import { Header } from "@/components/header"
import { TestimonialsFull } from "@/components/testimonials-full"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Testimonials - Spritious Events",
  description: "Read what our clients say about their exceptional event experiences with Spritious Events.",
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <TestimonialsFull />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
