'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { StockTicker } from '@/components/stock-ticker'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <StockTicker />
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-card border-b border-border">
          <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have a news tip, correction, or feedback? We would love to hear from you.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-4">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a news tip, want to report a correction, have a press
                  inquiry, or just want to share feedback, our team is here to help.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-secondary flex-shrink-0">
                    <Mail className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">contact@digitalbrief.news</p>
                    <p className="text-sm text-muted-foreground">editorial@digitalbrief.news</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-secondary flex-shrink-0">
                    <Phone className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 012-3456</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-secondary flex-shrink-0">
                    <MapPin className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">
                      Digital Brief Media Inc.<br />
                      350 5th Avenue, Suite 4200<br />
                      New York, NY 10118
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-border bg-card">
                <h3 className="font-semibold text-sm text-foreground mb-2">
                  News Tips & Story Leads
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Have a story tip? Contact our newsroom at{' '}
                  <span className="text-accent">tips@digitalbrief.news</span>. We
                  protect the confidentiality of our sources.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div>
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 px-6 rounded-xl border border-border bg-card">
                  <CheckCircle className="h-12 w-12 text-ticker-positive mb-4" />
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    Message Sent
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Thank you for reaching out. Our team will get back to you within
                    24-48 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 p-6 rounded-xl border border-border bg-card"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Name
                      </label>
                      <Input id="contact-name" placeholder="Your name" required />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Email
                      </label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Subject
                    </label>
                    <Input id="contact-subject" placeholder="How can we help?" required />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Message
                    </label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell us more..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
