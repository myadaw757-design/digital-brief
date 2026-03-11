import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { StockTicker } from '@/components/stock-ticker'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Digital Brief Privacy Policy. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <StockTicker />
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-card border-b border-border">
          <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground">
              Last updated: February 22, 2026
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-4 py-12">
          <div className="article-content">
            <h2>Introduction</h2>
            <p>
              Digital Brief Media Inc. (&quot;Digital Brief,&quot; &quot;we,&quot;
              &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website digitalbrief.news and
              use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you subscribe
              to our newsletter, create an account, leave a comment, or contact us. This may
              include your name, email address, and any message content you provide.
            </p>
            <p>
              We also automatically collect certain information when you visit our website,
              including your IP address, browser type, operating system, referring URLs, pages
              visited, and the date and time of your visit. We use cookies and similar
              tracking technologies to collect this information.
            </p>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>To deliver and improve our news content and services</li>
              <li>To send you our newsletter and editorial updates you have subscribed to</li>
              <li>To respond to your inquiries, comments, and feedback</li>
              <li>To analyze website usage and optimize user experience</li>
              <li>To serve relevant advertisements through third-party ad networks (such as Google AdSense)</li>
              <li>To detect, prevent, and address technical issues and security threats</li>
            </ul>

            <h2>Third-Party Advertising</h2>
            <p>
              We use Google AdSense and other advertising partners to display ads on our
              website. These partners may use cookies and similar technologies to serve ads
              based on your prior visits to our website or other websites. You may opt out
              of personalized advertising by visiting Google&apos;s Ads Settings.
            </p>

            <h2>Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with
              service providers who assist us in operating our website, conducting our
              business, or serving our users. We may also disclose your information when
              required by law or to protect our rights.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to
              protect your personal information against unauthorized access, alteration,
              disclosure, or destruction. However, no internet transmission is completely
              secure, and we cannot guarantee absolute security.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have the right to access, correct,
              delete, or port your personal data. You may also have the right to opt out
              of certain data processing activities. To exercise these rights, please
              contact us at privacy@digitalbrief.news.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not
              knowingly collect personal information from children under 13.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              any material changes by posting the new Privacy Policy on this page and
              updating the &quot;Last updated&quot; date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at
              privacy@digitalbrief.news or write to us at Digital Brief Media Inc.,
              350 5th Avenue, Suite 4200, New York, NY 10118.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
