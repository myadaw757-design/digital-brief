import type { Article, StockTicker, Comment } from './types'

export const authors = {
  sarah: {
    name: 'Sarah Chen',
    slug: 'sarah-chen',
    avatar: '',
    role: 'AI & Machine Learning Editor',
    bio: 'Sarah Chen is the AI & Machine Learning Editor at Digital Brief with over 10 years of experience covering artificial intelligence, deep learning, and emerging AI technologies. She holds a Master\'s degree in Computer Science from MIT and has previously worked as a research engineer at DeepMind. Sarah\'s reporting has been cited by The New York Times, Wired, and Nature.',
    expertise: ['Artificial Intelligence', 'Machine Learning', 'Neural Networks', 'AI Ethics'],
    social: {
      twitter: 'https://twitter.com/sarahchen_ai',
      linkedin: 'https://linkedin.com/in/sarahchenai',
      website: 'https://sarahchen.dev',
    },
  },
  marcus: {
    name: 'Marcus Rivera',
    slug: 'marcus-rivera',
    avatar: '',
    role: 'Gadgets & Hardware Reviewer',
    bio: 'Marcus Rivera is the lead Gadgets & Hardware Reviewer at Digital Brief. With 8 years of hands-on experience testing consumer electronics, smartphones, and computing hardware, Marcus brings a practical, user-focused perspective to every review. He previously served as Senior Editor at TechRadar and holds a degree in Electrical Engineering from Stanford University.',
    expertise: ['Consumer Electronics', 'Smartphones', 'Hardware Reviews', 'Wearable Tech'],
    social: {
      twitter: 'https://twitter.com/marcusreviews',
      linkedin: 'https://linkedin.com/in/marcusrivera',
    },
  },
  emily: {
    name: 'Emily Thompson',
    slug: 'emily-thompson',
    avatar: '',
    role: 'Market Analyst',
    bio: 'Emily Thompson is the Senior Market Analyst at Digital Brief, specializing in technology sector equities and the intersection of financial markets and emerging technologies. She holds an MBA from Wharton and a CFA charter, with 12 years of experience in financial analysis. Emily previously worked as a tech sector analyst at Goldman Sachs.',
    expertise: ['Stock Market Analysis', 'Tech Sector Equities', 'Financial Modeling', 'Business Strategy'],
    social: {
      twitter: 'https://twitter.com/emilythompson_markets',
      linkedin: 'https://linkedin.com/in/emilythompsonfinance',
    },
  },
  james: {
    name: 'James Park',
    slug: 'james-park',
    avatar: '',
    role: 'Senior Tech Reporter',
    bio: 'James Park is a Senior Technology Reporter at Digital Brief covering cloud computing, web technologies, developer tools, and infrastructure. He has been writing about technology for over 15 years and has contributed to Ars Technica, The Verge, and IEEE Spectrum. James holds a degree in Information Systems from Carnegie Mellon University.',
    expertise: ['Cloud Computing', 'Web Technologies', 'Developer Tools', 'Open Source'],
    social: {
      twitter: 'https://twitter.com/jamesparktech',
      linkedin: 'https://linkedin.com/in/jamesparktech',
      website: 'https://jamespark.io',
    },
  },
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'openai-gpt-5-reasoning-breakthrough',
    title: 'OpenAI Announces GPT-5 with Revolutionary Reasoning Capabilities',
    excerpt:
      'The latest model demonstrates unprecedented problem-solving abilities, scoring above human benchmarks on complex reasoning tasks for the first time in AI history.',
    content: `<h2>A New Era of Artificial Intelligence</h2>
<p>OpenAI has officially unveiled GPT-5, marking what many experts are calling the most significant leap in artificial intelligence since the original GPT-4 release. The new model demonstrates unprecedented problem-solving abilities that have left even seasoned researchers impressed.</p>
<p>In benchmark testing, GPT-5 scored above the 95th percentile on a range of complex reasoning tasks, from advanced mathematics to multi-step logical deduction problems that have traditionally stumped AI systems.</p>
<h2>Key Improvements</h2>
<ul>
<li>Multi-step reasoning chains with self-verification</li>
<li>Significantly reduced hallucination rates (down 87% from GPT-4)</li>
<li>Native multimodal understanding across text, images, audio, and video</li>
<li>Real-time learning capabilities within conversation context</li>
</ul>
<h2>Industry Impact</h2>
<p>The implications for industries ranging from healthcare to finance are enormous. Early partners report that GPT-5 can analyze complex medical imaging with accuracy rivaling specialist physicians, while financial institutions are testing its ability to predict market movements based on multi-source data analysis.</p>
<blockquote>This isn't just an incremental improvement. GPT-5 represents a fundamental shift in what we can expect from AI systems. - Dr. Maria Santos, Stanford AI Lab</blockquote>
<p>OpenAI has stated that GPT-5 will be available through their API starting next month, with consumer-facing products to follow shortly after.</p>`,
    category: 'ai',
    image: '/images/hero-ai.jpg',
    author: authors.sarah,
    publishedAt: '2026-02-22T08:00:00Z',
    updatedAt: '2026-02-22T10:30:00Z',
    readTime: 6,
    tags: ['OpenAI', 'GPT-5', 'Machine Learning', 'AI Research'],
    featured: true,
  },
  {
    id: '2',
    slug: 'apple-vision-pro-2-review',
    title: 'Apple Vision Pro 2 Review: Spatial Computing Finally Makes Sense',
    excerpt:
      'After a year of refinement, Apple has delivered a mixed reality headset that feels like it belongs in the present, not just the future.',
    content: `<h2>Second Time is the Charm</h2>
<p>When Apple released the original Vision Pro, it was a remarkable piece of technology looking for a purpose. With the Vision Pro 2, Apple has found that purpose — and then some.</p>
<p>The second-generation device is lighter, more comfortable, and packed with features that make spatial computing feel natural rather than novelty.</p>
<h2>Design & Comfort</h2>
<p>The most immediately noticeable improvement is the weight reduction. At 420 grams, the Vision Pro 2 is nearly 35% lighter than its predecessor. The new woven band system distributes weight more evenly, and we comfortably wore it for 3-hour stretches without fatigue.</p>
<h2>Display & Performance</h2>
<p>The new micro-OLED displays deliver an even sharper image with improved brightness. The M4 Ultra chip provides seamless performance, handling multiple virtual displays and complex 3D environments without breaking a sweat.</p>
<h2>The Verdict</h2>
<p>At $2,499, the Vision Pro 2 is still a premium product. But unlike the original, it now feels like a product that justifies its price tag with daily utility rather than just technological wonder. This is the device that will bring spatial computing mainstream.</p>`,
    category: 'gadgets',
    image: '/images/hero-gadgets.jpg',
    author: authors.marcus,
    publishedAt: '2026-02-21T14:00:00Z',
    updatedAt: '2026-02-21T16:00:00Z',
    readTime: 8,
    tags: ['Apple', 'Vision Pro', 'Mixed Reality', 'Review'],
    featured: true,
  },
  {
    id: '3',
    slug: 'nvidia-stock-ai-chip-demand-surge',
    title: 'NVIDIA Stock Hits All-Time High as AI Chip Demand Surges 300%',
    excerpt:
      'The chipmaker reports record quarterly revenue as enterprise AI adoption accelerates beyond all analyst projections.',
    content: `<h2>Breaking All Records</h2>
<p>NVIDIA has reported its strongest quarterly results ever, with revenue surging to $48.2 billion — a 300% increase in AI chip demand compared to the same quarter last year. The stock hit a new all-time high of $285 per share in after-hours trading.</p>
<h2>What is Driving Growth</h2>
<p>The explosive demand is being driven by enterprise AI adoption, with major cloud providers and Fortune 500 companies racing to build AI infrastructure. Data center revenue alone accounted for $38 billion of the total.</p>
<h2>Market Analysis</h2>
<p>Analysts across Wall Street have raised their price targets, with several now projecting NVIDIA could become the first company to reach a $10 trillion market capitalization by the end of 2026.</p>
<blockquote>We are at the beginning of a new industrial revolution driven by AI. The demand for accelerated computing is unprecedented. - Jensen Huang, CEO of NVIDIA</blockquote>`,
    category: 'stocks',
    image: '/images/hero-stocks.jpg',
    author: authors.emily,
    publishedAt: '2026-02-20T18:00:00Z',
    readTime: 5,
    tags: ['NVIDIA', 'Stocks', 'AI Chips', 'Market Analysis'],
    featured: true,
  },
  {
    id: '4',
    slug: 'quantum-computing-breakthrough-google',
    title: 'Google Achieves Quantum Error Correction Milestone with 1,000 Qubits',
    excerpt:
      'The breakthrough puts practical quantum computing within reach, with implications for cryptography, drug discovery, and materials science.',
    content: `<h2>The Quantum Leap</h2>
<p>Google Quantum AI has announced a landmark achievement in quantum computing: the first demonstration of fault-tolerant quantum error correction using a 1,000-qubit processor. This milestone brings practical quantum computing significantly closer to reality.</p>
<h2>Why This Matters</h2>
<p>Quantum error correction has long been considered the greatest barrier to practical quantum computing. By demonstrating that errors can be reliably corrected at scale, Google has removed what many considered the final major technical hurdle.</p>
<h2>Applications</h2>
<p>The implications span multiple industries. Drug discovery could be accelerated by orders of magnitude, new materials could be designed at the atomic level, and complex optimization problems in logistics and finance could be solved in seconds rather than years.</p>`,
    category: 'tech',
    image: '/images/article-quantum.jpg',
    author: authors.james,
    publishedAt: '2026-02-19T10:00:00Z',
    readTime: 7,
    tags: ['Google', 'Quantum Computing', 'Breakthrough', 'Technology'],
    featured: false,
  },
  {
    id: '5',
    slug: 'anthropic-claude-5-enterprise-launch',
    title: 'Anthropic Launches Claude 5 for Enterprise with Built-in Safety Guarantees',
    excerpt:
      'The new model offers industry-leading safety features and can operate autonomously within enterprise workflows.',
    content: `<h2>Safety-First AI for Business</h2>
<p>Anthropic has launched Claude 5 Enterprise, a new AI model specifically designed for business-critical applications. The model includes built-in safety guarantees and can operate autonomously within defined enterprise workflows.</p>
<h2>Key Features</h2>
<ul>
<li>Constitutional AI 2.0 with enterprise-grade safety guarantees</li>
<li>Autonomous workflow execution with human-in-the-loop checkpoints</li>
<li>200K context window with perfect recall</li>
<li>SOC 2 Type II certified infrastructure</li>
</ul>
<p>Early adopters include several Fortune 100 companies that have already integrated Claude 5 into their operations, reporting significant productivity gains while maintaining strict compliance requirements.</p>`,
    category: 'ai',
    image: '/images/article-ai-robot.jpg',
    author: authors.sarah,
    publishedAt: '2026-02-18T12:00:00Z',
    readTime: 5,
    tags: ['Anthropic', 'Claude', 'Enterprise AI', 'Safety'],
    featured: false,
  },
  {
    id: '6',
    slug: 'samsung-galaxy-s26-ultra-hands-on',
    title: 'Samsung Galaxy S26 Ultra First Look: AI-Powered Photography Redefined',
    excerpt:
      'Samsung is pushing smartphone photography to new heights with an AI co-processor dedicated entirely to computational imaging.',
    content: `<h2>The AI Photography Revolution</h2>
<p>Samsung has unveiled the Galaxy S26 Ultra, featuring a dedicated AI co-processor that transforms smartphone photography. The device uses on-device AI to process images in real-time, producing results that rival professional DSLR cameras.</p>
<h2>Camera Specs</h2>
<ul>
<li>200MP main sensor with AI-enhanced processing</li>
<li>Dedicated AI imaging co-processor (Samsung Exynos NPU)</li>
<li>Real-time scene optimization and enhancement</li>
<li>Professional-grade video stabilization</li>
</ul>
<p>Starting at $1,299, the Galaxy S26 Ultra goes on sale next month. Based on our hands-on time, this could be the phone that makes dedicated cameras obsolete for most people.</p>`,
    category: 'gadgets',
    image: '/images/hero-gadgets.jpg',
    author: authors.marcus,
    publishedAt: '2026-02-17T16:00:00Z',
    readTime: 6,
    tags: ['Samsung', 'Galaxy S26', 'Smartphone', 'Photography'],
    featured: false,
  },
  {
    id: '7',
    slug: 'tesla-stock-robotaxi-launch',
    title: 'Tesla Stock Jumps 15% as Robotaxi Service Launches in 10 New Cities',
    excerpt:
      'The autonomous ride-hailing service expansion represents a major milestone for Tesla profitability projections.',
    content: `<h2>Robotaxi Goes National</h2>
<p>Tesla shares surged 15% in early trading as the company announced the expansion of its autonomous Robotaxi service to 10 new cities across the United States. The move significantly expands Tesla's addressable market in the ride-hailing industry.</p>
<h2>Financial Impact</h2>
<p>Analysts estimate the Robotaxi service could add $50 billion in annual recurring revenue at full scale. The new cities bring the total to 25 metropolitan areas, covering approximately 40% of the US population.</p>`,
    category: 'stocks',
    image: '/images/hero-stocks.jpg',
    author: authors.emily,
    publishedAt: '2026-02-16T09:00:00Z',
    readTime: 4,
    tags: ['Tesla', 'Robotaxi', 'Stocks', 'Autonomous Driving'],
    featured: false,
  },
  {
    id: '8',
    slug: 'web-assembly-3-standard-finalized',
    title: 'WebAssembly 3.0 Standard Finalized: Native-Speed Web Apps Are Here',
    excerpt:
      'The new standard brings garbage collection, threading, and SIMD support to the web, enabling desktop-class applications in the browser.',
    content: `<h2>The Web Gets Faster</h2>
<p>The W3C has finalized the WebAssembly 3.0 standard, bringing a suite of features that enable truly native-speed applications to run in the browser. This is the largest update to WebAssembly since its initial release.</p>
<h2>Major Features</h2>
<ul>
<li>Built-in garbage collection for managed languages</li>
<li>Full threading and shared memory support</li>
<li>SIMD (Single Instruction, Multiple Data) for parallel processing</li>
<li>Component model for modular Wasm applications</li>
</ul>
<p>Major browsers have already begun implementing the new standard, with Chrome and Firefox expected to ship full support within the next quarter.</p>`,
    category: 'tech',
    image: '/images/hero-tech.jpg',
    author: authors.james,
    publishedAt: '2026-02-15T11:00:00Z',
    readTime: 6,
    tags: ['WebAssembly', 'Web Development', 'W3C', 'Standards'],
    featured: false,
  },
]

export const stockTickers: StockTicker[] = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 242.56, change: 3.24, changePercent: 1.35 },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 285.12, change: 12.45, changePercent: 4.57 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 198.34, change: -1.56, changePercent: -0.78 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', price: 478.90, change: 5.67, changePercent: 1.20 },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 412.78, change: 18.34, changePercent: 4.65 },
  { symbol: 'META', name: 'Meta Platforms', price: 612.45, change: -4.23, changePercent: -0.68 },
  { symbol: 'AMZN', name: 'Amazon.com', price: 225.67, change: 2.89, changePercent: 1.30 },
  { symbol: 'AMD', name: 'AMD Inc.', price: 198.45, change: 6.78, changePercent: 3.54 },
]

export const sampleComments: Comment[] = [
  {
    id: '1',
    articleId: '1',
    author: 'TechEnthusiast42',
    content: 'This is a game changer. The reasoning improvements alone could transform how we approach complex problem-solving.',
    createdAt: '2026-02-22T09:30:00Z',
    avatar: '',
  },
  {
    id: '2',
    articleId: '1',
    author: 'AIResearcher',
    content: 'I have been testing the beta and the reduction in hallucinations is remarkable. This is a real step forward.',
    createdAt: '2026-02-22T10:15:00Z',
    avatar: '',
  },
  {
    id: '3',
    articleId: '1',
    author: 'SkepticalDev',
    content: 'Impressive benchmarks, but I will wait to see real-world performance before getting too excited.',
    createdAt: '2026-02-22T11:00:00Z',
    avatar: '',
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category === category)
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured)
}

export function getLatestArticles(count: number = 8): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count)
}

export function getRelatedArticles(articleId: string, count: number = 3): Article[] {
  const article = articles.find((a) => a.id === articleId)
  if (!article) return []
  return articles
    .filter((a) => a.id !== articleId && a.category === article.category)
    .slice(0, count)
}

export function getAuthorBySlug(slug: string) {
  return Object.values(authors).find((a) => a.slug === slug)
}

export function getArticlesByAuthor(authorName: string): Article[] {
  return articles.filter((a) => a.author.name === authorName)
}

export function getAllAuthors() {
  return Object.values(authors)
}
