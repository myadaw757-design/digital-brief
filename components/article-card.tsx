import Image from 'next/image'
import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { categories } from '@/lib/types'
import type { Article } from '@/lib/types'
import { formatDistanceToNow } from 'date-fns'

export function ArticleCard({ article }: { article: Article }) {
  const category = categories[article.category]

  return (
    <article className="group">
      <Link href={`/article/${article.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-3">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
        </div>
        <div className="space-y-2">
          <Badge variant="secondary" className={`text-xs ${category.color}`}>
            {category.label}
          </Badge>
          <h3 className="font-serif text-lg font-semibold leading-snug text-foreground group-hover:text-accent transition-colors text-pretty">
            {article.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground pt-1">
            <span>{article.author.name}</span>
            <span aria-hidden="true">-</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readTime} min read
            </span>
            <span aria-hidden="true">-</span>
            <time dateTime={article.publishedAt}>
              {formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}
            </time>
          </div>
        </div>
      </Link>
    </article>
  )
}

export function ArticleCardHorizontal({ article }: { article: Article }) {
  const category = categories[article.category]

  return (
    <article className="group">
      <Link href={`/article/${article.slug}`} className="flex gap-4">
        <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-lg">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="128px"
          />
        </div>
        <div className="flex flex-col justify-center gap-1.5 min-w-0">
          <Badge variant="secondary" className={`text-[10px] w-fit ${category.color}`}>
            {category.label}
          </Badge>
          <h3 className="font-serif text-sm md:text-base font-semibold leading-snug text-foreground group-hover:text-accent transition-colors line-clamp-2 text-pretty">
            {article.title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{article.author.name}</span>
            <span aria-hidden="true">-</span>
            <time dateTime={article.publishedAt}>
              {formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}
            </time>
          </div>
        </div>
      </Link>
    </article>
  )
}

export function FeaturedHero({ article }: { article: Article }) {
  const category = categories[article.category]

  return (
    <article className="group relative">
      <Link href={`/article/${article.slug}`} className="block">
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <Badge variant="secondary" className={`mb-3 ${category.color}`}>
              {category.label}
            </Badge>
            <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-background leading-tight mb-3 max-w-4xl text-balance">
              {article.title}
            </h1>
            <p className="text-background/80 text-sm md:text-base max-w-2xl leading-relaxed mb-4 hidden md:block">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-3 text-xs md:text-sm text-background/70">
              <span className="font-medium text-background/90">{article.author.name}</span>
              <span aria-hidden="true">-</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {article.readTime} min read
              </span>
              <span aria-hidden="true">-</span>
              <time dateTime={article.publishedAt}>
                {formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}
              </time>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-background/90 mt-4 group-hover:gap-2 transition-all">
              Read Full Story
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
