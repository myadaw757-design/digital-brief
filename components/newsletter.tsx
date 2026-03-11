'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, CheckCircle } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <section className="bg-foreground rounded-xl p-6 md:p-8 text-background">
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 rounded-lg bg-background/10">
          <Mail className="h-5 w-5 text-background" />
        </div>
        <div>
          <h3 className="font-serif text-lg font-bold text-background">
            Daily Brief Newsletter
          </h3>
          <p className="text-sm text-background/70 leading-relaxed mt-1">
            Get the top tech stories delivered to your inbox every morning. No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
      {subscribed ? (
        <div className="flex items-center gap-2 text-sm text-background/90 bg-background/10 rounded-lg p-3">
          <CheckCircle className="h-4 w-4 text-ticker-positive" />
          Thanks for subscribing! Check your inbox for confirmation.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-background/10 border-background/20 text-background placeholder:text-background/50 flex-1"
            required
            aria-label="Email address"
          />
          <Button
            type="submit"
            className="bg-background text-foreground hover:bg-background/90 font-medium"
          >
            Subscribe
          </Button>
        </form>
      )}
    </section>
  )
}
