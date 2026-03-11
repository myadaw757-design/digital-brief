'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type AdSize =
  | 'leaderboard'     // 728x90  - top of page, between sections
  | 'banner'          // 468x60  - smaller banner
  | 'rectangle'       // 300x250 - sidebar, in-content
  | 'large-rectangle' // 336x280 - sidebar, higher RPM
  | 'skyscraper'      // 300x600 - sidebar sticky
  | 'mobile-banner'   // 320x100 - mobile header/inline
  | 'mobile-anchor'   // 320x50  - mobile sticky bottom
  | 'in-article'      // responsive - between paragraphs
  | 'multiplex'       // responsive - recommended content style

const adSizeConfig: Record<AdSize, { width: number; height: number; label: string }> = {
  leaderboard:     { width: 728, height: 90,  label: '728 x 90' },
  banner:          { width: 468, height: 60,  label: '468 x 60' },
  rectangle:       { width: 300, height: 250, label: '300 x 250' },
  'large-rectangle': { width: 336, height: 280, label: '336 x 280' },
  skyscraper:      { width: 300, height: 600, label: '300 x 600' },
  'mobile-banner': { width: 320, height: 100, label: '320 x 100' },
  'mobile-anchor': { width: 320, height: 50,  label: '320 x 50' },
  'in-article':    { width: 0,   height: 250, label: 'In-Article' },
  multiplex:       { width: 0,   height: 300, label: 'Multiplex' },
}

interface AdPlaceholderProps {
  size: AdSize
  className?: string
  slot?: string
  lazy?: boolean
}

export function AdPlaceholder({
  size,
  className,
  slot,
  lazy = true,
}: AdPlaceholderProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(!lazy)

  useEffect(() => {
    if (!lazy || !ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [lazy])

  const config = adSizeConfig[size]
  const isResponsive = config.width === 0

  return (
    <div
      ref={ref}
      className={cn('ad-slot', className)}
      role="complementary"
      aria-label="Advertisement"
      data-ad-slot={slot}
      data-ad-size={size}
      style={{
        minHeight: config.height,
        maxWidth: isResponsive ? '100%' : config.width,
        width: '100%',
        containIntrinsicSize: isResponsive
          ? `auto ${config.height}px`
          : `${config.width}px ${config.height}px`,
        contentVisibility: lazy ? 'auto' : 'visible',
      }}
    >
      {isVisible && (
        <div
          className={cn(
            'flex flex-col items-center justify-center bg-muted/50 border border-dashed border-border rounded-lg text-muted-foreground w-full',
            'transition-opacity duration-300'
          )}
          style={{ minHeight: config.height }}
        >
          <span className="text-[10px] uppercase tracking-widest font-medium opacity-60">
            Advertisement
          </span>
          <span className="text-[10px] font-mono opacity-40 mt-0.5">
            {config.label}
          </span>
        </div>
      )}
    </div>
  )
}

/** Sticky sidebar wrapper -- desktop only */
export function StickyAdSidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="hidden lg:block">
      <div className="sticky top-20 space-y-6">{children}</div>
    </div>
  )
}

/** In-article ad that renders between content blocks */
export function InArticleAd({ slot }: { slot?: string }) {
  return (
    <div className="my-8 flex justify-center">
      <AdPlaceholder size="in-article" slot={slot} />
    </div>
  )
}

/** Mobile-only sticky anchor ad at the bottom of the viewport */
export function MobileAnchorAd() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden safe-bottom">
      <div className="relative bg-background border-t border-border">
        <button
          onClick={() => setDismissed(true)}
          className="absolute -top-6 right-2 bg-background border border-border border-b-0 rounded-t-md px-2 py-0.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close advertisement"
        >
          Close
        </button>
        <div className="flex justify-center py-1">
          <AdPlaceholder size="mobile-anchor" lazy={false} />
        </div>
      </div>
    </div>
  )
}

/** Multiplex / recommended content ad block */
export function MultiplexAd({ slot }: { slot?: string }) {
  return (
    <div className="my-8">
      <AdPlaceholder size="multiplex" slot={slot} />
    </div>
  )
}
