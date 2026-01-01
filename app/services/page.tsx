import { Header } from "@/components/header"
import { ServicesDetailed } from "@/components/services-detailed"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Services - Spritious Events",
  description:
    "Comprehensive event management services including weddings, corporate events, hospitality, custom backdrops, stages, and special effects.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesDetailed />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
