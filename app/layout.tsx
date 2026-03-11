import type { Metadata, Viewport } from 'next'
import { Inter, Lora, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: {
    default: 'Digital Brief - Tech News, AI, Gadgets & Market Insights',
    template: '%s | Digital Brief',
  },
  description:
    'Your daily source for the latest technology news, AI breakthroughs, gadget reviews, stock market analysis, and business tech insights.',
  keywords: [
    'technology news',
    'AI news',
    'gadget reviews',
    'stock market',
    'tech updates',
    'artificial intelligence',
    'business tech',
  ],
  authors: [{ name: 'Digital Brief Team' }],
  creator: 'Digital Brief',
  publisher: 'Digital Brief',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://digitalbrief.news',
    siteName: 'Digital Brief',
    title: 'Digital Brief - Tech News, AI, Gadgets & Market Insights',
    description:
      'Your daily source for the latest technology news, AI breakthroughs, gadget reviews, stock market analysis, and business tech insights.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Brief - Tech News, AI, Gadgets & Market Insights',
    description:
      'Your daily source for the latest technology news, AI breakthroughs, gadget reviews, and market insights.',
    creator: '@digitalbrief',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    types: {
      'application/rss+xml': 'https://digitalbrief.news/feed.xml',
    },
    canonical: 'https://digitalbrief.news',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#1e1e1e' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${lora.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NewsMediaOrganization',
              name: 'Digital Brief',
              url: 'https://digitalbrief.news',
              logo: {
                '@type': 'ImageObject',
                url: 'https://digitalbrief.news/logo.png',
                width: 600,
                height: 60,
              },
              sameAs: [
                'https://twitter.com/digitalbrief',
                'https://linkedin.com/company/digitalbrief',
              ],
              foundingDate: '2024-01-01',
              description:
                'Your daily source for the latest technology news, AI breakthroughs, gadget reviews, stock market analysis, and business tech insights.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '350 5th Avenue, Suite 4200',
                addressLocality: 'New York',
                addressRegion: 'NY',
                postalCode: '10118',
                addressCountry: 'US',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'editorial',
                email: 'editorial@digitalbrief.news',
              },
              ethicsPolicy: 'https://digitalbrief.news/editorial-policy',
              correctionsPolicy: 'https://digitalbrief.news/editorial-policy',
              actionableFeedbackPolicy: 'https://digitalbrief.news/contact',
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
