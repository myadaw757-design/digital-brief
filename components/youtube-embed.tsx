export function YouTubeEmbed({
  videoId = 'dQw4w9WgXcQ',
  title = 'Latest video from Digital Brief',
}: {
  videoId?: string
  title?: string
}) {
  return (
    <section className="bg-card border border-border rounded-xl p-6">
      <h3 className="font-serif text-lg font-bold text-foreground mb-4">
        Latest from Our Channel
      </h3>
      <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>
      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
        {title}
      </p>
    </section>
  )
}
