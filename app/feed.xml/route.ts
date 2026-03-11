import { articles } from '@/lib/data'
import { categories } from '@/lib/types'
import type { Category } from '@/lib/types'

const SITE_URL = 'https://digitalbrief.news'

export async function GET() {
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  const rssItems = sortedArticles
    .map((article) => {
      const category = categories[article.category as Category]
      return `    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${SITE_URL}/article/${article.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/article/${article.slug}</guid>
      <description><![CDATA[${article.excerpt}]]></description>
      <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
      <author>${article.author.name}</author>
      <category>${category.label}</category>
      <enclosure url="${SITE_URL}${article.image}" type="image/jpeg" />
    </item>`
    })
    .join('\n')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Digital Brief - Tech News, AI, Gadgets &amp; Market Insights</title>
    <link>${SITE_URL}</link>
    <description>Your daily source for the latest technology news, AI breakthroughs, gadget reviews, stock market analysis, and business tech insights.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${SITE_URL}/logo.png</url>
      <title>Digital Brief</title>
      <link>${SITE_URL}</link>
    </image>
    <copyright>Copyright ${new Date().getFullYear()} Digital Brief Media Inc. All rights reserved.</copyright>
    <managingEditor>editorial@digitalbrief.news (Digital Brief Editorial)</managingEditor>
    <webMaster>tech@digitalbrief.news (Digital Brief Tech)</webMaster>
    <category>Technology</category>
    <category>Science</category>
    <category>Business</category>
    <docs>https://www.rssboard.org/rss-specification</docs>
    <ttl>60</ttl>
${rssItems}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
