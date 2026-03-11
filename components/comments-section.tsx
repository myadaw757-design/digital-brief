'use client'

import { useState } from 'react'
import { sampleComments } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { MessageSquare, User } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

export function CommentsSection({ articleId }: { articleId: string }) {
  const [comments, setComments] = useState(
    sampleComments.filter((c) => c.articleId === articleId)
  )
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !content.trim()) return

    const newComment = {
      id: Date.now().toString(),
      articleId,
      author: name,
      content,
      createdAt: new Date().toISOString(),
      avatar: '',
    }
    setComments([...comments, newComment])
    setName('')
    setContent('')
  }

  return (
    <section className="mt-10 pt-8 border-t border-border">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="h-5 w-5 text-foreground" />
        <h2 className="font-serif text-xl font-bold text-foreground">
          Comments ({comments.length})
        </h2>
      </div>

      {/* Comment form */}
      <form onSubmit={handleSubmit} className="mb-8 space-y-3">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          aria-label="Your name"
        />
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your thoughts..."
          rows={3}
          required
          aria-label="Comment"
        />
        <Button type="submit" size="sm">
          Post Comment
        </Button>
      </form>

      {/* Comment list */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            <div className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
              <User className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-foreground">
                  {comment.author}
                </span>
                <time
                  dateTime={comment.createdAt}
                  className="text-xs text-muted-foreground"
                >
                  {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                </time>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {comment.content}
              </p>
            </div>
          </div>
        ))}
        {comments.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-8">
            Be the first to comment on this article.
          </p>
        )}
      </div>
    </section>
  )
}
