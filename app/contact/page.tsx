import { Header } from "@/components/header"
import { ContactFull } from "@/components/contact-full"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Contact Us - Spritious Events",
  description: "Get in touch with Spritious Events. Let's create your perfect event together.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactFull />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
