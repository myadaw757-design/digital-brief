'use client'

import { stockTickers } from '@/lib/data'
import { TrendingUp, TrendingDown } from 'lucide-react'

export function StockTicker() {
  const items = [...stockTickers, ...stockTickers]

  return (
    <div
      className="bg-foreground text-background overflow-hidden"
      role="marquee"
      aria-label="Stock market ticker"
    >
      <div className="flex animate-ticker">
        {items.map((stock, i) => (
          <div
            key={`${stock.symbol}-${i}`}
            className="flex items-center gap-2 px-4 py-2 whitespace-nowrap border-r border-background/10 text-sm"
          >
            <span className="font-mono font-semibold text-background">{stock.symbol}</span>
            <span className="font-mono text-background/70">
              ${stock.price.toFixed(2)}
            </span>
            <span
              className={`flex items-center gap-0.5 font-mono text-xs ${
                stock.change >= 0
                  ? 'text-ticker-positive'
                  : 'text-ticker-negative'
              }`}
            >
              {stock.change >= 0 ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              {stock.change >= 0 ? '+' : ''}
              {stock.changePercent.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
