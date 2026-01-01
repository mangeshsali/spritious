"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center group">
          <Image
            src="/images/20240223-093522-0000-removebg-preview.png"
            alt="Spritious Events"
            width={180}
            height={80}
            className="h-14 w-auto object-contain group-hover:opacity-80 transition-opacity duration-300"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          <a
            href="#services"
            className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm font-mono font-medium tracking-wide"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm font-mono font-medium tracking-wide"
          >
            Gallery
          </a>
          <a
            href="#about"
            className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm font-mono font-medium tracking-wide"
          >
            About
          </a>
          <a
            href="#testimonials"
            className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm font-mono font-medium tracking-wide"
          >
            Testimonials
          </a>
          <a href="#contact">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-md px-8 py-6 text-sm font-mono font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl">
              Get in Touch
            </Button>
          </a>
        </div>

        <button
          className="lg:hidden text-foreground p-2 hover:text-accent transition-colors relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-background/98 backdrop-blur-xl animate-fade-in z-40">
          <div className="container mx-auto px-6 py-12 flex flex-col gap-8">
            <a
              href="#home"
              onClick={closeMobileMenu}
              className="text-muted-foreground hover:text-accent transition-colors text-2xl font-sans font-normal border-b border-border/50 pb-4"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={closeMobileMenu}
              className="text-muted-foreground hover:text-accent transition-colors text-2xl font-sans font-normal border-b border-border/50 pb-4"
            >
              Services
            </a>
            <a
              href="#portfolio"
              onClick={closeMobileMenu}
              className="text-muted-foreground hover:text-accent transition-colors text-2xl font-sans font-normal border-b border-border/50 pb-4"
            >
              Gallery
            </a>
            <a
              href="#about"
              onClick={closeMobileMenu}
              className="text-muted-foreground hover:text-accent transition-colors text-2xl font-sans font-normal border-b border-border/50 pb-4"
            >
              About
            </a>
            <a
              href="#testimonials"
              onClick={closeMobileMenu}
              className="text-muted-foreground hover:text-accent transition-colors text-2xl font-sans font-normal border-b border-border/50 pb-4"
            >
              Testimonials
            </a>
            <a href="#contact" onClick={closeMobileMenu} className="mt-4">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-md text-base py-6 w-full shadow-lg font-mono font-medium">
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
