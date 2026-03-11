import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { StockTicker } from '@/components/stock-ticker'
import { FeaturedHero, ArticleCard, ArticleCardHorizontal } from '@/components/article-card'
import { Newsletter } from '@/components/newsletter'
import {
  AdPlaceholder,
  StickyAdSidebar,
  MultiplexAd,
  MobileAnchorAd,
} from '@/components/ad-placeholder'
import { YouTubeEmbed } from '@/components/youtube-embed'
import { getFeaturedArticles, getLatestArticles } from '@/lib/data'
import { categories } from '@/lib/types'
import type { Category } from '@/lib/types'
import Link from 'next/link'
import { ArrowRight, Cpu, Smartphone, TrendingUp, Zap } from 'lucide-react'

const categoryIcons: Record<Category, typeof Cpu> = {
  ai: Cpu,
  gadgets: Smartphone,
  stocks: TrendingUp,
  tech: Zap,
}

export default function HomePage() {
  const featured = getFeaturedArticles()
  const latest = getLatestArticles(8)
  const heroArticle = featured[0]
  const secondaryFeatured = featured.slice(1, 3)
  const remaining = latest.filter(
    (a) => !featured.find((f) => f.id === a.id)
  )

  return (
    <div className="min-h-screen flex flex-col">
      <StockTicker />
      <SiteHeader />

      <main className="flex-1">
        {/* --- Desktop Leaderboard (728x90) below header --- */}
        <div className="hidden md:flex justify-center py-3 mx-auto max-w-7xl px-4">
          <AdPlaceholder size="leaderboard" slot="home-top-leaderboard" lazy={false} />
        </div>

        {/* --- Mobile Banner below header --- */}
        <div className="flex md:hidden justify-center py-2 px-4">
          <AdPlaceholder size="mobile-banner" slot="home-top-mobile" lazy={false} />
        </div>

        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-4 pt-4 pb-4">
          {heroArticle && <FeaturedHero article={heroArticle} />}
        </section>

        {/* Secondary Featured */}
        <section className="mx-auto max-w-7xl px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryFeatured.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* --- Mid-content Leaderboard Ad --- */}
        <div className="hidden md:flex justify-center py-4 mx-auto max-w-7xl px-4">
          <AdPlaceholder size="leaderboard" slot="home-mid-leaderboard" />
        </div>
        <div className="flex md:hidden justify-center py-3 px-4">
          <AdPlaceholder size="mobile-banner" slot="home-mid-mobile" />
        </div>

        {/* Main Content Grid with Sticky Sidebar */}
        <section className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Latest Stories
            </h2>
            <Link
              href="/category/ai"
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {remaining.slice(0, 2).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>

              {/* --- In-feed Ad after first 2 cards --- */}
              <div className="flex justify-center">
                <AdPlaceholder size="banner" slot="home-infeed-1" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {remaining.slice(2, 4).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            {/* Sidebar with sticky ad */}
            <aside className="space-y-6">
              <Newsletter />

              {/* Trending */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                  Trending Now
                </h3>
                <div className="space-y-4">
                  {remaining.slice(0, 4).map((article, idx) => (
                    <div key={article.id} className="flex gap-3">
                      <span className="text-2xl font-serif font-bold text-muted-foreground/40 leading-none">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <Link
                          href={`/article/${article.slug}`}
                          className="text-sm font-medium text-foreground hover:text-accent transition-colors leading-snug line-clamp-2"
                        >
                          {article.title}
                        </Link>
                        <p className="text-xs text-muted-foreground mt-1">
                          {article.readTime} min read
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* --- Sidebar sticky ad zone (desktop) --- */}
              <StickyAdSidebar>
                <AdPlaceholder size="rectangle" slot="home-sidebar-rect" />
                <AdPlaceholder size="skyscraper" slot="home-sidebar-sky" />
              </StickyAdSidebar>

              {/* Sidebar rectangle ad (mobile/tablet visible) */}
              <div className="lg:hidden">
                <AdPlaceholder size="rectangle" slot="home-sidebar-rect-mobile" />
              </div>

              <YouTubeEmbed
                videoId="dQw4w9WgXcQ"
                title="The Future of AI: What Comes After GPT-5?"
              />
            </aside>
          </div>
        </section>

        {/* --- Multiplex / Recommended Content Ad --- */}
        <div className="mx-auto max-w-7xl px-4">
          <MultiplexAd slot="home-multiplex" />
        </div>

        {/* More articles */}
        <section className="mx-auto max-w-7xl px-4 py-6">
          <div className="border-t border-border pt-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
              More from Digital Brief
            </h2>
            <div className="space-y-4">
              {remaining.slice(0, 2).map((article) => (
                <div key={article.id} className="border-b border-border pb-4">
                  <ArticleCardHorizontal article={article} />
                </div>
              ))}

              {/* --- In-feed Ad between horizontal articles --- */}
              <div className="flex justify-center py-2">
                <AdPlaceholder size="banner" slot="home-infeed-2" />
              </div>

              {remaining.slice(2).map((article) => (
                <div key={article.id} className="border-b border-border pb-4 last:border-b-0">
                  <ArticleCardHorizontal article={article} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Cards */}
        <section className="mx-auto max-w-7xl px-4 py-8">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
            Explore Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(Object.keys(categories) as Category[]).map((key) => {
              const cat = categories[key]
              const Icon = categoryIcons[key]
              return (
                <Link
                  key={key}
                  href={`/category/${key}`}
                  className="group flex flex-col items-start p-5 rounded-xl border border-border bg-card hover:border-accent/40 hover:bg-accent/5 transition-all"
                >
                  <div className="p-2 rounded-lg bg-secondary mb-3 group-hover:bg-accent/10 transition-colors">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-sm text-foreground mb-1">
                    {cat.label}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {cat.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </section>

        {/* --- Footer Leaderboard Ad --- */}
        <div className="hidden md:flex justify-center py-4 mx-auto max-w-7xl px-4">
          <AdPlaceholder size="leaderboard" slot="home-footer-leaderboard" />
        </div>
        <div className="flex md:hidden justify-center py-3 px-4">
          <AdPlaceholder size="mobile-banner" slot="home-footer-mobile" />
        </div>
      </main>

      <SiteFooter />

      {/* --- Mobile Anchor Ad (sticky bottom) --- */}
      <MobileAnchorAd />
    </div>
  )
}
