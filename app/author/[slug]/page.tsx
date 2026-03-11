import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { StockTicker } from '@/components/stock-ticker'
import { ArticleCard } from '@/components/article-card'
import {
  getAuthorBySlug,
  getArticlesByAuthor,
  getAllAuthors,
} from '@/lib/data'
import { User, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export async function generateStaticParams() {
  return getAllAuthors().map((author) => ({ slug: author.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const author = getAuthorBySlug(slug)
  if (!author) return { title: 'Author Not Found' }

  return {
    title: `${author.name} - ${author.role}`,
    description: author.bio,
    openGraph: {
      title: `${author.name} - ${author.role} | Digital Brief`,
      description: author.bio,
      type: 'profile',
    },
  }
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const author = getAuthorBySlug(slug)
  if (!author) notFound()

  const authorArticles = getArticlesByAuthor(author.name)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    knowsAbout: author.expertise,
    worksFor: {
      '@type': 'NewsMediaOrganization',
      name: 'Digital Brief',
      url: 'https://digitalbrief.news',
    },
    sameAs: [
      author.social.twitter,
      author.social.linkedin,
      author.social.website,
    ].filter(Boolean),
  }

  return (
    <div className="min-h-screen flex flex-col">
      <StockTicker />
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-1">
        {/* Author header */}
        <section className="bg-card border-b border-border">
          <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="h-20 w-20 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <User className="h-10 w-10 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {author.name}
                </h1>
                <p className="text-lg text-accent font-medium mb-4">
                  {author.role}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                  {author.bio}
                </p>

                {/* Expertise */}
                <div className="mb-4">
                  <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                    Areas of Expertise
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {author.expertise.map((exp) => (
                      <Badge key={exp} variant="secondary" className="text-xs">
                        {exp}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-4">
                  {author.social.twitter && (
                    <a
                      href={author.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Twitter
                    </a>
                  )}
                  {author.social.linkedin && (
                    <a
                      href={author.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      LinkedIn
                    </a>
                  )}
                  {author.social.website && (
                    <a
                      href={author.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Author articles */}
        <section className="mx-auto max-w-4xl px-4 py-10">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
            Articles by {author.name} ({authorArticles.length})
          </h2>
          {authorArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {authorArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No articles published yet.</p>
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
