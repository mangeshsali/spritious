"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

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
      // TODO: Replace with actual EmailJS integration
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

      // Close popup after successful submission
      setTimeout(() => {
        setIsOpen(false)
      }, 2000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 z-[100] bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
        <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto relative animate-scale-in">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors z-10"
            aria-label="Close popup"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8 md:p-10">
            <div className="text-center mb-8">
              <p className="text-accent text-xs uppercase tracking-[0.25em] font-mono font-semibold mb-3">
                Get Started
              </p>
              <h2 className="font-sans text-3xl md:text-4xl font-bold mb-3">
                Let's Plan Your <span className="text-accent">Perfect Event</span>
              </h2>
              <p className="text-muted-foreground font-mono">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="popup-name" className="block text-sm font-mono font-medium mb-2">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="popup-name"
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
                  <label htmlFor="popup-phone" className="block text-sm font-mono font-medium mb-2">
                    Phone Number <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="popup-phone"
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="popup-email" className="block text-sm font-mono font-medium mb-2">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="popup-email"
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
                  <label htmlFor="popup-eventType" className="block text-sm font-mono font-medium mb-2">
                    Event Type <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="popup-eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-ring"
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

              <div>
                <label htmlFor="popup-message" className="block text-sm font-mono font-medium mb-2">
                  Tell us about your event
                </label>
                <Textarea
                  id="popup-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your vision, specific requirements, or any questions you have..."
                  rows={4}
                  className="w-full resize-none font-mono"
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-accent/10 border border-accent/20 rounded-md text-accent text-sm font-mono">
                  Thank you! We'll contact you within 24 hours.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md text-destructive text-sm font-mono">
                  Something went wrong. Please try again.
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base py-6 rounded-md font-mono font-semibold"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </>
  )
}
