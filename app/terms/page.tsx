import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { StockTicker } from '@/components/stock-ticker'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Digital Brief Terms of Service. Read the terms and conditions governing your use of our website and services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <StockTicker />
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-card border-b border-border">
          <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Terms of Service
            </h1>
            <p className="text-sm text-muted-foreground">
              Last updated: February 22, 2026
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-4 py-12">
          <div className="article-content">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using Digital Brief (&quot;the Website&quot;), you accept and
              agree to be bound by these Terms of Service. If you do not agree to these terms,
              please do not use our website.
            </p>

            <h2>Use of Content</h2>
            <p>
              All content on Digital Brief, including articles, images, graphics, videos, and
              other materials, is protected by copyright and other intellectual property laws.
              You may read, share links to, and quote brief excerpts from our articles with
              proper attribution. You may not reproduce, distribute, or create derivative
              works from our content without express written permission.
            </p>

            <h2>User Conduct</h2>
            <p>When using our website and commenting features, you agree to:</p>
            <ul>
              <li>Provide accurate information when creating accounts or submitting comments</li>
              <li>Not post content that is defamatory, obscene, threatening, or otherwise objectionable</li>
              <li>Not attempt to gain unauthorized access to our systems or other users&apos; accounts</li>
              <li>Not use automated tools to scrape, collect, or harvest content from our website</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2>Comments and User Content</h2>
            <p>
              By posting comments or other content on Digital Brief, you grant us a
              non-exclusive, royalty-free, perpetual license to use, display, and distribute
              your content in connection with our services. We reserve the right to remove
              any user content that violates these terms or our community guidelines.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              Digital Brief provides its content on an &quot;as is&quot; and &quot;as
              available&quot; basis. We make no warranties, express or implied, regarding
              the accuracy, completeness, or reliability of any content on our website.
            </p>

            <h2>Financial Information Disclaimer</h2>
            <p>
              Content related to stocks, market analysis, and financial topics on Digital Brief
              is provided for informational purposes only and does not constitute financial
              advice, investment recommendations, or solicitations. Always consult a qualified
              financial advisor before making investment decisions.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              In no event shall Digital Brief Media Inc. be liable for any indirect, incidental,
              special, consequential, or punitive damages arising from your use of our website
              or reliance on any content published herein.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for
              the content, privacy practices, or availability of these external sites. Inclusion
              of a link does not imply endorsement by Digital Brief.
            </p>

            <h2>Advertising</h2>
            <p>
              Digital Brief displays advertisements from third-party networks including Google
              AdSense. Advertising revenue supports our journalism. Advertisers have no influence
              over our editorial content. See our Editorial Policy for more information.
            </p>

            <h2>Modifications</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be
              effective immediately upon posting. Your continued use of the website after changes
              constitutes acceptance of the modified terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the
              laws of the State of New York, without regard to its conflict of law provisions.
            </p>

            <h2>Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us at
              legal@digitalbrief.news or visit our Contact page.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
