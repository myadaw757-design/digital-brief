import Link from 'next/link'
import { Cpu, Smartphone, TrendingUp, Zap, Rss, Mail, FileText } from 'lucide-react'

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-foreground flex items-center justify-center">
                <span className="text-background font-bold text-sm font-serif">DB</span>
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-foreground">
                Digital Brief
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your daily source for the latest technology news, AI breakthroughs,
              gadget reviews, and market insights.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">
              Categories
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/category/ai"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Cpu className="h-3.5 w-3.5" />
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/category/gadgets"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Smartphone className="h-3.5 w-3.5" />
                  Gadgets & Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/category/stocks"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <TrendingUp className="h-3.5 w-3.5" />
                  Stock Market & Business
                </Link>
              </li>
              <li>
                <Link
                  href="/category/tech"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Zap className="h-3.5 w-3.5" />
                  Technology Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/editorial-policy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Editorial Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">
              Stay Connected
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/feed.xml"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Rss className="h-3.5 w-3.5" />
                  RSS Feed
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  Newsletter
                </Link>
              </li>
              <li>
                <a
                  href="https://twitter.com/digitalbrief"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FileText className="h-3.5 w-3.5" />
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/digitalbrief"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FileText className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            {currentYear} Digital Brief. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with performance and accessibility in mind.
          </p>
        </div>
      </div>
    </footer>
  )
}
