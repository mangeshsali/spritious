"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactFull() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Form validation
    if (!formData.name || !formData.phone || !formData.email || !formData.eventType) {
      alert("Please fill in all required fields")
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }

    // Phone validation (basic)
    const phoneRegex = /^[\d\s\-+$$$$]+$/
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid phone number")
      setIsSubmitting(false)
      return
    }

    try {
      // TODO: Replace with actual EmailJS integration
      // EmailJS configuration:
      // 1. Sign up at emailjs.com
      // 2. Create email service and template
      // 3. Replace the values below with your EmailJS credentials

      // Example EmailJS code:
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   {
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     phone: formData.phone,
      //     event_type: formData.eventType,
      //     event_date: formData.eventDate,
      //     guest_count: formData.guestCount,
      //     message: formData.message,
      //   },
      //   'YOUR_PUBLIC_KEY'
      // )

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Form submitted:", formData)
      setSubmitStatus("success")
      setFormData({
        name: "",
        phone: "",
        email: "",
        eventType: "",
        eventDate: "",
        guestCount: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">CONTACT US</p>
          <h1 className="font-sans text-5xl md:text-7xl font-light mb-6 text-balance">
            Let's create <span className="font-semibold">magic together</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Ready to bring your vision to life? Get in touch and let's start planning your unforgettable event
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="p-6 border-border/50 hover:border-primary/50 transition-colors text-center">
            <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-sans text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-foreground/70 text-sm">+1 (555) 123-4567</p>
            <p className="text-foreground/70 text-sm">Available 24/7</p>
          </Card>

          <Card className="p-6 border-border/50 hover:border-primary/50 transition-colors text-center">
            <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-sans text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-foreground/70 text-sm break-all">info@spritiousevents.com</p>
            <p className="text-foreground/70 text-sm">24hr response time</p>
          </Card>

          <Card className="p-6 border-border/50 hover:border-primary/50 transition-colors text-center">
            <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-sans text-lg font-semibold mb-2">Visit Us</h3>
            <p className="text-foreground/70 text-sm">123 Event Plaza</p>
            <p className="text-foreground/70 text-sm">Downtown, City 12345</p>
          </Card>

          <Card className="p-6 border-border/50 hover:border-primary/50 transition-colors text-center">
            <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-sans text-lg font-semibold mb-2">Office Hours</h3>
            <p className="text-foreground/70 text-sm">Mon-Sat: 9AM-7PM</p>
            <p className="text-foreground/70 text-sm">Sun: By Appointment</p>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4">
        <Card className="p-8 md:p-12 border-border/50 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-sans text-3xl md:text-4xl font-light mb-3">
              Send us an <span className="font-semibold">enquiry</span>
            </h2>
            <p className="text-foreground/70">Fill out the form below and we'll get back to you within 24 hours</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number <span className="text-destructive">*</span>
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-medium mb-2">
                  Event Type <span className="text-destructive">*</span>
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="social">Social Gathering</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium mb-2">
                  Event Date (Optional)
                </label>
                <Input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="guestCount" className="block text-sm font-medium mb-2">
                  Expected Guests (Optional)
                </label>
                <Input
                  id="guestCount"
                  name="guestCount"
                  type="text"
                  value={formData.guestCount}
                  onChange={handleChange}
                  placeholder="e.g., 100-150"
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Tell us about your event
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your vision, specific requirements, budget range, or any questions you have..."
                rows={6}
                className="w-full resize-none"
              />
            </div>

            {submitStatus === "success" && (
              <div className="p-4 bg-accent/10 border border-accent/20 rounded-md text-accent text-sm">
                Thank you for your enquiry! We've received your message and will get back to you within 24 hours.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md text-destructive text-sm">
                Something went wrong. Please try again or contact us directly via phone or email.
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base py-6 rounded-none uppercase tracking-widest font-medium"
            >
              {isSubmitting ? "Sending..." : "Send Enquiry"}
            </Button>

            <p className="text-sm text-foreground/60 text-center">
              By submitting this form, you agree to be contacted by Spritious Events regarding your enquiry
            </p>
          </form>
        </Card>
      </section>

      {/* Map Section (Optional) */}
      <section className="container mx-auto px-4 mt-20">
        <Card className="overflow-hidden border-border/50">
          <div className="aspect-video bg-muted/30 flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-foreground/70">Map integration placeholder</p>
              <p className="text-sm text-foreground/50">Replace with Google Maps embed</p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}
