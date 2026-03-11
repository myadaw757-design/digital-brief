import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { StockTicker } from '@/components/stock-ticker'
import { ArticleCard } from '@/components/article-card'
import { Newsletter } from '@/components/newsletter'
import {
  AdPlaceholder,
  StickyAdSidebar,
  MobileAnchorAd,
} from '@/components/ad-placeholder'
import { getArticlesByCategory } from '@/lib/data'
import { categories } from '@/lib/types'
import type { Category } from '@/lib/types'
import { Cpu, Smartphone, TrendingUp, Zap } from 'lucide-react'

const categoryIcons: Record<Category, typeof Cpu> = {
  ai: Cpu,
  gadgets: Smartphone,
  stocks: TrendingUp,
  tech: Zap,
}

export async function generateStaticParams() {
  return Object.keys(categories).map((cat) => ({ category: cat }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const { category } = await params
  const cat = categories[category as Category]
  if (!cat) return { title: 'Category Not Found' }

  return {
    title: cat.label,
    description: cat.description,
    openGraph: {
      title: `${cat.label} | Digital Brief`,
      description: cat.description,
    },
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const cat = categories[category as Category]
  if (!cat) notFound()

  const Icon = categoryIcons[category as Category]
  const articleList = getArticlesByCategory(category)

  return (
    <div className="min-h-screen flex flex-col">
      <StockTicker />
      <SiteHeader />

      {/* --- Top Leaderboard Ad --- */}
      <div className="hidden md:flex justify-center py-3 mx-auto max-w-7xl px-4">
        <AdPlaceholder size="leaderboard" slot="cat-top-leaderboard" lazy={false} />
      </div>
      <div className="flex md:hidden justify-center py-2 px-4">
        <AdPlaceholder size="mobile-banner" slot="cat-top-mobile" lazy={false} />
      </div>

      <main className="flex-1">
        {/* Category header */}
        <section className="bg-card border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-lg bg-secondary">
                <Icon className="h-6 w-6 text-foreground" />
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                {cat.label}
              </h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              {cat.description}
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Articles with in-feed ads */}
            <div className="lg:col-span-2">
              {articleList.length > 0 ? (
                <div className="space-y-6">
                  {/* First row of articles */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {articleList.slice(0, 2).map((article) => (
                      <ArticleCard key={article.id} article={article} />
                    ))}
                  </div>

                  {/* --- In-feed ad after first 2 articles --- */}
                  {articleList.length > 2 && (
                    <div className="flex justify-center py-2">
                      <AdPlaceholder size="banner" slot="cat-infeed-1" />
                    </div>
                  )}

                  {/* Remaining articles */}
                  {articleList.length > 2 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {articleList.slice(2).map((article) => (
                        <ArticleCard key={article.id} article={article} />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">
                    No articles in this category yet. Check back soon.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <Newsletter />

              {/* --- Sidebar Rectangle Ad --- */}
              <AdPlaceholder size="rectangle" slot="cat-sidebar-rect" />

              {/* --- Sticky Sidebar Ads (desktop only) --- */}
              <StickyAdSidebar>
                <AdPlaceholder size="rectangle" slot="cat-sidebar-sticky" />
                <AdPlaceholder size="skyscraper" slot="cat-sidebar-sky" />
              </StickyAdSidebar>
            </aside>
          </div>
        </div>

        {/* --- Footer Leaderboard Ad --- */}
        <div className="hidden md:flex justify-center py-4 mx-auto max-w-7xl px-4">
          <AdPlaceholder size="leaderboard" slot="cat-footer-leaderboard" />
        </div>
        <div className="flex md:hidden justify-center py-3 px-4">
          <AdPlaceholder size="mobile-banner" slot="cat-footer-mobile" />
        </div>
      </main>

      <SiteFooter />

      {/* --- Mobile Anchor Ad --- */}
      <MobileAnchorAd />
    </div>
  )
}
