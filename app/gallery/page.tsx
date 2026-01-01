import { Header } from "@/components/header"
import { GalleryFull } from "@/components/gallery-full"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Gallery - Spritious Events",
  description:
    "Explore our portfolio of stunning weddings, corporate events, custom stages, backdrops, and special effects.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <GalleryFull />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
