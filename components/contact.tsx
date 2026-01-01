"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
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

    try {
      // Simulate API call - Replace with actual EmailJS or API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Form submitted:", formData)
      setSubmitStatus("success")
      setFormData({
        name: "",
        phone: "",
        email: "",
        eventType: "",
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
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-sans text-4xl md:text-6xl font-light mb-4 text-balance">
            Let&apos;s <span className="font-semibold">create magic</span> together
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Get in touch with us today and let&apos;s start planning your
            unforgettable event.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 border-border/50 hover:border-border transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-semibold mb-1">Call Us</h3>
                  <p className="text-foreground/70 text-sm">+1 (555) 123-4567</p>
                  <p className="text-foreground/70 text-sm">Mon-Sat, 9AM-7PM</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50 hover:border-border transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-semibold mb-1">Email Us</h3>
                  <p className="text-foreground/70 text-sm break-all">info@spritiousevents.com</p>
                  <p className="text-foreground/70 text-sm">We&apos;ll respond within 24hrs</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50 hover:border-border transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-semibold mb-1">Visit Us</h3>
                  <p className="text-foreground/70 text-sm">123 Event Plaza</p>
                  <p className="text-foreground/70 text-sm">Downtown, City 12345</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 p-8 border-border/50">
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
                    <option value="social">Social Gathering</option>
                    <option value="other">Other</option>
                  </select>
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
                  placeholder="Share your vision, event date, expected guests, and any specific requirements..."
                  rows={6}
                  className="w-full resize-none"
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-accent/10 border border-accent/20 rounded-md text-accent text-sm">
                  Thank you! We&apos;ve received your enquiry and will get back to you within 24 hours.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md text-destructive text-sm">
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base py-6"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
