import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { StockTicker } from '@/components/stock-ticker'
import { getAllAuthors } from '@/lib/data'
import { User, ExternalLink, Shield, Eye, BookOpen, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Digital Brief, our mission, editorial team, and commitment to delivering accurate, timely technology news and market analysis.',
}

export default function AboutPage() {
  const teamMembers = getAllAuthors()

  return (
    <div className="min-h-screen flex flex-col">
      <StockTicker />
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-card border-b border-border">
          <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              About Digital Brief
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your trusted source for technology news, AI breakthroughs, gadget reviews,
              and market insights since 2024.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-12 space-y-16">
          {/* Mission */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <div className="prose max-w-none">
              <p className="text-foreground/85 leading-relaxed mb-4">
                Digital Brief was founded with a singular mission: to deliver clear, accurate,
                and timely reporting on the technologies shaping our world. In an age of
                information overload, we believe readers deserve journalism that cuts through
                the noise and provides genuine insight.
              </p>
              <p className="text-foreground/85 leading-relaxed">
                We cover four core verticals: Artificial Intelligence, Consumer Technology
                and Gadgets, Stock Market and Business Tech, and emerging Technology trends.
                Our team of experienced journalists, analysts, and subject-matter experts
                brings deep domain knowledge to every story we publish.
              </p>
            </div>
          </section>

          {/* Values */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Accuracy First',
                  desc: 'Every fact is verified, every claim is sourced. We correct errors promptly and transparently.',
                },
                {
                  icon: Eye,
                  title: 'Independence',
                  desc: 'Our editorial decisions are never influenced by advertisers or sponsors. We disclose all conflicts of interest.',
                },
                {
                  icon: BookOpen,
                  title: 'Depth Over Speed',
                  desc: 'We prioritize thorough analysis over breaking-news speed. Our readers expect context, not just headlines.',
                },
                {
                  icon: Award,
                  title: 'Expertise',
                  desc: 'Our writers hold advanced degrees and professional certifications in the subjects they cover.',
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="p-6 rounded-xl border border-border bg-card"
                >
                  <div className="p-2 rounded-lg bg-secondary w-fit mb-3">
                    <value.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Team */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
              Our Editorial Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {teamMembers.map((member) => (
                <Link
                  key={member.slug}
                  href={`/author/${member.slug}`}
                  className="group flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-accent/40 transition-colors"
                >
                  <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <User className="h-7 w-7 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-accent mb-2">{member.role}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {member.bio}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      {member.social.twitter && (
                        <span className="text-xs text-muted-foreground">Twitter</span>
                      )}
                      {member.social.linkedin && (
                        <span className="text-xs text-muted-foreground">LinkedIn</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center py-8 border-t border-border">
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">
              Have questions or feedback?
            </h2>
            <p className="text-muted-foreground mb-4">
              We would love to hear from you. Reach out to our editorial team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Contact Us
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
