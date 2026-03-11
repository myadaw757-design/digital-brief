export type Category = 'ai' | 'gadgets' | 'stocks' | 'tech'

export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: Category
  image: string
  author: Author
  publishedAt: string
  updatedAt?: string
  readTime: number
  tags: string[]
  featured: boolean
}

export interface Author {
  name: string
  slug: string
  avatar: string
  role: string
  bio: string
  expertise: string[]
  social: {
    twitter?: string
    linkedin?: string
    website?: string
  }
}

export interface StockTicker {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
}

export interface Comment {
  id: string
  articleId: string
  author: string
  content: string
  createdAt: string
  avatar: string
}

export const categories: Record<
  Category,
  { label: string; description: string; color: string }
> = {
  ai: {
    label: 'Artificial Intelligence',
    description: 'Latest breakthroughs in AI and machine learning',
    color: 'bg-blue-500/10 text-blue-700 dark:text-blue-300',
  },
  gadgets: {
    label: 'Gadgets & Reviews',
    description: 'In-depth reviews and the latest tech gear',
    color: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
  },
  stocks: {
    label: 'Stock Market & Business',
    description: 'Market analysis and business technology trends',
    color: 'bg-amber-500/10 text-amber-700 dark:text-amber-300',
  },
  tech: {
    label: 'Technology Updates',
    description: 'Breaking news and deep dives in tech',
    color: 'bg-rose-500/10 text-rose-700 dark:text-rose-300',
  },
}
