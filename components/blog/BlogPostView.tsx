// Pure server component — renders pre-compiled HTML, zero client bundle overhead
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Twitter } from 'lucide-react'
import { formatDate } from '@/lib/types'
import CopyButton from './CopyButton'

interface BlogPostViewProps {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  readingTime: string
  html: string
}

export default function BlogPostView({
  slug,
  title,
  description,
  date,
  tags,
  readingTime,
  html,
}: BlogPostViewProps) {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(`https://ikblmhndra-portfolio.vercel.app/blog/${slug}`)}`

  return (
    <div className="relative z-10 pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">

        {/* Back */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs text-terminal-muted hover:text-terminal-green transition-colors"
          >
            <ArrowLeft size={12} />
            cd ../blog
          </Link>
        </div>

        {/* Header */}
        <header className="mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-terminal-muted">
            <span className="flex items-center gap-1.5">
              <Calendar size={11} />
              {formatDate(date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={11} />
              {readingTime}
            </span>
          </div>

          <h1 className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold text-terminal-text leading-tight">
            <span className="text-terminal-green">//</span>{' '}
            {title}
          </h1>

          <p className="text-terminal-muted leading-relaxed border-l-2 border-terminal-green/30 pl-4 font-mono text-sm">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="tag-badge">#{tag}</span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-2">
            <span className="font-mono text-xs text-terminal-muted">Share:</span>
            <a
              href={tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-terminal-muted hover:text-terminal-green border border-terminal-border hover:border-terminal-green/30 rounded transition-colors"
            >
              <Twitter size={12} />
            </a>
            <CopyButton />
          </div>
        </header>

        <div className="h-px bg-terminal-border mb-10" />

        {/* Compiled HTML — syntax highlighted server-side, no React bundling */}
        <div
          className="mdx-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="mt-16 pt-8 border-t border-terminal-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-sm text-terminal-muted hover:text-terminal-green transition-colors"
          >
            <ArrowLeft size={14} />
            Back to all posts
          </Link>
        </div>

      </div>
    </div>
  )
}
