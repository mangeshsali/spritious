import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <img
                src="/images/20240223-093522-0000-removebg-preview.png"
                alt="Spritious Events"
                className="h-24 w-auto"
              />
            </div>
            <span className="font-sans text-2xl font-light tracking-tight mb-4 block">Spritious Events</span>
            <p className="text-primary-foreground/70 mb-8 leading-relaxed font-light text-base max-w-md">
              Transforming visions into extraordinary experiences. Your premier partner for unforgettable events and
              exceptional hospitality services.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-11 h-11 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-11 h-11 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-11 h-11 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-lg font-light mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light text-sm"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light text-sm"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-lg font-light mb-6 tracking-wide">Services</h3>
            <ul className="space-y-3 text-primary-foreground/70 font-light text-sm">
              <li>Wedding Events</li>
              <li>Corporate Events</li>
              <li>Hospitality Services</li>
              <li>Custom Backdrops</li>
              <li>Entries & Stages</li>
              <li>Special Effects</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-lg font-light mb-6 tracking-wide">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-foreground/70 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@spritiousevents.com"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light text-sm"
                >
                  info@spritiousevents.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-foreground/70 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-light text-sm"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm font-light">
              © {currentYear} Spritious Events. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm font-light">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
