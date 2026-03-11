import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { StockTicker } from '@/components/stock-ticker'
import { ArticleCard } from '@/components/article-card'
import { CommentsSection } from '@/components/comments-section'
import { Newsletter } from '@/components/newsletter'
import {
  AdPlaceholder,
  StickyAdSidebar,
  InArticleAd,
  MultiplexAd,
  MobileAnchorAd,
} from '@/components/ad-placeholder'
import { getArticleBySlug, getRelatedArticles, articles } from '@/lib/data'
import { categories } from '@/lib/types'
import { Clock, Calendar, ArrowLeft, Share2, Bookmark, ChevronRight, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { format } from 'date-fns'

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return { title: 'Article Not Found' }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      section: categories[article.category].label,
      tags: article.tags,
      authors: [article.author.name],
      images: [{ url: article.image, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
    alternates: {
      canonical: `https://digitalbrief.news/article/${article.slug}`,
    },
  }
}

/**
 * Splits HTML article content and inserts in-article ad placeholders.
 * Inserts ad after the 2nd <p> and then every ~3 paragraphs (roughly 600-800 words).
 */
function injectInArticleAds(html: string): string {
  const parts = html.split(/<\/p>/i)
  if (parts.length <= 3) return html

  const adHtml = `</p>
<div class="in-article-ad-slot my-8 flex justify-center" data-ad-inject="true">
  <div class="ad-slot flex flex-col items-center justify-center bg-muted/50 border border-dashed border-border rounded-lg text-muted-foreground w-full" style="min-height:250px;content-visibility:auto;contain-intrinsic-size:auto 250px">
    <span class="text-[10px] uppercase tracking-widest font-medium opacity-60">Advertisement</span>
    <span class="text-[10px] font-mono opacity-40 mt-0.5">In-Article</span>
  </div>
</div>`

  let adCount = 0
  const maxAds = 3
  const result: string[] = []

  for (let i = 0; i < parts.length; i++) {
    result.push(parts[i])
    // After index 1 (2nd paragraph), then every 3 paragraphs
    if (i < parts.length - 1) {
      result.push('</p>')
    }
    const isAdPosition = i === 1 || (i > 1 && (i - 1) % 3 === 0)
    if (isAdPosition && adCount < maxAds && i < parts.length - 1) {
      result.push(adHtml)
      adCount++
    }
  }

  return result.join('')
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const category = categories[article.category]
  const related = getRelatedArticles(article.id, 4)
  const contentWithAds = injectInArticleAds(article.content)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    image: [`https://digitalbrief.news${article.image}`],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://digitalbrief.news/article/${article.slug}`,
    },
    author: {
      '@type': 'Person',
      name: article.author.name,
      url: `https://digitalbrief.news/author/${article.author.slug}`,
      jobTitle: article.author.role,
      knowsAbout: article.author.expertise,
      sameAs: [
        article.author.social.twitter,
        article.author.social.linkedin,
        article.author.social.website,
      ].filter(Boolean),
    },
    publisher: {
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
    },
    articleSection: category.label,
    keywords: article.tags.join(', '),
    wordCount: article.content.replace(/<[^>]+>/g, '').split(/\s+/).length,
    isAccessibleForFree: true,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://digitalbrief.news',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: category.label,
        item: `https://digitalbrief.news/category/${article.category}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `https://digitalbrief.news/article/${article.slug}`,
      },
    ],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <StockTicker />
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* --- Top Leaderboard Ad --- */}
      <div className="hidden md:flex justify-center py-3 mx-auto max-w-7xl px-4">
        <AdPlaceholder size="leaderboard" slot="article-top-leaderboard" lazy={false} />
      </div>
      <div className="flex md:hidden justify-center py-2 px-4">
        <AdPlaceholder size="mobile-banner" slot="article-top-mobile" lazy={false} />
      </div>

      <main className="flex-1">
        {/* Hero image */}
        <div className="relative w-full h-64 md:h-96 lg:h-[480px]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <article className="mx-auto max-w-7xl px-4 -mt-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl border border-border p-6 md:p-10 shadow-sm">
                {/* Breadcrumb navigation */}
                <nav aria-label="Breadcrumb" className="mb-6">
                  <ol className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
                    <li>
                      <Link href="/" className="hover:text-foreground transition-colors">
                        Home
                      </Link>
                    </li>
                    <li aria-hidden="true">
                      <ChevronRight className="h-3.5 w-3.5" />
                    </li>
                    <li>
                      <Link
                        href={`/category/${article.category}`}
                        className="hover:text-foreground transition-colors"
                      >
                        {category.label}
                      </Link>
                    </li>
                    <li aria-hidden="true">
                      <ChevronRight className="h-3.5 w-3.5" />
                    </li>
                    <li className="text-foreground font-medium truncate max-w-xs">
                      {article.title}
                    </li>
                  </ol>
                </nav>

                {/* Article header */}
                <header className="mb-8">
                  <Badge variant="secondary" className={`mb-3 ${category.color}`}>
                    {category.label}
                  </Badge>
                  <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4 text-balance">
                    {article.title}
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    {article.excerpt}
                  </p>

                  {/* Meta & Author byline */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <Link
                      href={`/author/${article.author.slug}`}
                      className="flex items-center gap-2 hover:text-foreground transition-colors"
                    >
                      <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                        <User className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div>
                        <span className="font-medium text-foreground block leading-tight">
                          {article.author.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {article.author.role}
                        </span>
                      </div>
                    </Link>
                    <span aria-hidden="true">|</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <time dateTime={article.publishedAt}>
                        {format(new Date(article.publishedAt), 'MMM d, yyyy')}
                      </time>
                    </span>
                    {article.updatedAt && article.updatedAt !== article.publishedAt && (
                      <span className="flex items-center gap-1 text-xs">
                        (Updated:{' '}
                        <time dateTime={article.updatedAt}>
                          {format(new Date(article.updatedAt), 'MMM d, yyyy')}
                        </time>
                        )
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readTime} min read
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 mt-4">
                    <Button variant="outline" size="sm" className="gap-1.5">
                      <Share2 className="h-3.5 w-3.5" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1.5">
                      <Bookmark className="h-3.5 w-3.5" />
                      Save
                    </Button>
                  </div>
                </header>

                {/* Article body with injected in-article ads */}
                <div
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: contentWithAds }}
                />

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* --- Post-article Ad --- */}
                <div className="mt-8 flex justify-center">
                  <AdPlaceholder size="large-rectangle" slot="article-post-content" />
                </div>

                {/* Recommended articles block between ads */}
                {related.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                      Recommended for You
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {related.slice(0, 2).map((a) => (
                        <ArticleCard key={a.id} article={a} />
                      ))}
                    </div>
                  </div>
                )}

                {/* --- Multiplex Ad (looks like recommended content) --- */}
                <MultiplexAd slot="article-multiplex" />

                {/* More recommended articles after multiplex */}
                {related.length > 2 && (
                  <div className="mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {related.slice(2, 4).map((a) => (
                        <ArticleCard key={a.id} article={a} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Comments */}
                <CommentsSection articleId={article.id} />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <Newsletter />

              {/* --- Sidebar Rectangle Ad --- */}
              <AdPlaceholder size="rectangle" slot="article-sidebar-rect" />

              {/* Related Articles */}
              {related.length > 0 && (
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-5">
                    {related.map((a) => (
                      <Link
                        key={a.id}
                        href={`/article/${a.slug}`}
                        className="block group"
                      >
                        <h4 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors leading-snug line-clamp-2">
                          {a.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {a.readTime} min read
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* --- Sticky Sidebar Ads (desktop only) --- */}
              <StickyAdSidebar>
                <AdPlaceholder size="rectangle" slot="article-sidebar-sticky-1" />
                <AdPlaceholder size="skyscraper" slot="article-sidebar-sticky-sky" />
              </StickyAdSidebar>
            </aside>
          </div>
        </article>

        {/* --- Footer Leaderboard Ad --- */}
        <div className="hidden md:flex justify-center py-6 mx-auto max-w-7xl px-4">
          <AdPlaceholder size="leaderboard" slot="article-footer-leaderboard" />
        </div>
        <div className="flex md:hidden justify-center py-4 px-4">
          <AdPlaceholder size="mobile-banner" slot="article-footer-mobile" />
        </div>
      </main>

      <div className="mt-12">
        <SiteFooter />
      </div>

      {/* --- Mobile Anchor Ad --- */}
      <MobileAnchorAd />
    </div>
  )
}
