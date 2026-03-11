import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { StockTicker } from '@/components/stock-ticker'

export const metadata: Metadata = {
  title: 'Editorial Policy',
  description:
    'Digital Brief editorial standards and guidelines. Learn how we ensure accuracy, fairness, and transparency in our technology journalism.',
}

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <StockTicker />
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-card border-b border-border">
          <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Editorial Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our commitment to accuracy, fairness, and transparency in technology journalism.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-4 py-12">
          <div className="article-content">
            <h2>Editorial Standards</h2>
            <p>
              Digital Brief is committed to the highest standards of journalism. All articles
              published on our platform undergo a rigorous editorial process that includes
              fact-checking, source verification, and editorial review before publication.
            </p>

            <h2>Fact-Checking Process</h2>
            <p>
              Every claim made in our articles is verified against primary sources. We require
              a minimum of two independent sources for factual claims, and we clearly attribute
              all information to its source. When we rely on a single source, we disclose this
              to our readers.
            </p>

            <h2>Corrections Policy</h2>
            <p>
              We take errors seriously. When we identify an error in a published article, we
              correct it promptly and transparently. All corrections are noted at the top of
              the article with the date and nature of the correction. Significant corrections
              are noted in our corrections log.
            </p>

            <h2>Independence and Conflicts of Interest</h2>
            <p>
              Our editorial content is independent of our business operations. Advertisers
              and sponsors have no influence over our editorial decisions, coverage choices,
              or review scores. Our journalists are required to disclose any potential conflicts
              of interest, including financial holdings in companies they cover.
            </p>

            <h2>Review Methodology</h2>
            <p>
              Product reviews at Digital Brief follow a standardized methodology. We test all
              products for a minimum of two weeks in real-world conditions. Review units are
              either purchased by Digital Brief or clearly disclosed as provided by the
              manufacturer. Manufacturers have no review approval or editorial input.
            </p>

            <h2>Sources and Attribution</h2>
            <p>
              We respect and protect our sources. We do not publish information from anonymous
              sources without editorial approval and clear justification. We provide proper
              attribution for all data, quotes, images, and research referenced in our articles.
            </p>

            <h2>Financial Disclosure</h2>
            <p>
              When covering publicly traded companies, our market analysts disclose any personal
              or organizational financial interest. Market analysis articles include a disclaimer
              stating that they do not constitute financial advice. Our analysts hold CFA charters
              and adhere to the CFA Institute Code of Ethics.
            </p>

            <h2>AI and Automation</h2>
            <p>
              Digital Brief uses AI tools to assist with research and data analysis but does not
              publish AI-generated content without substantial human editorial oversight and
              verification. All articles are written, edited, and reviewed by human journalists.
              When AI tools are used in the reporting process, we disclose this to our readers.
            </p>

            <h2>Contact</h2>
            <p>
              If you have questions about our editorial standards or wish to report a concern,
              please contact our Editor-in-Chief at{' '}
              <Link href="mailto:editorial@digitalbrief.news" className="text-accent underline">
                editorial@digitalbrief.news
              </Link>{' '}
              or visit our{' '}
              <Link href="/contact" className="text-accent underline">
                Contact page
              </Link>.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
