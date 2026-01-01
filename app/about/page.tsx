import { Header } from "@/components/header"
import { AboutFull } from "@/components/about-full"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "About Us - Spritious Events",
  description: "Learn about Spritious Events - our story, mission, and the team behind exceptional event experiences.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutFull />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
