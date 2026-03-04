'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Tag, Calendar, ArrowRight, FileText } from 'lucide-react'
import { BlogPostMeta, formatDate } from '@/lib/types'

interface BlogClientProps {
  posts: BlogPostMeta[]
  tags: string[]
}

export default function BlogClient({ posts, tags }: BlogClientProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts

  return (
    <div className="relative z-10 pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 space-y-4"
        >
          <span className="font-mono text-xs text-terminal-green uppercase tracking-widest">
            // ./research --list-posts
          </span>
          <h1 className="font-mono text-3xl sm:text-4xl font-bold text-terminal-text">
            Security <span className="text-terminal-green">Research</span>
          </h1>
          <p className="font-mono text-sm text-terminal-muted max-w-xl">
            Field notes, deep dives, and technical guides from the frontlines of infrastructure security.
          </p>
          <div className="h-px w-24 bg-terminal-green/40" />
        </motion.div>

        {/* Tags filter */}
        {tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            <button
              onClick={() => setActiveTag(null)}
              className={`font-mono text-xs px-3 py-1.5 rounded border transition-all ${
                !activeTag
                  ? 'text-terminal-green border-terminal-green/60 bg-terminal-green/10'
                  : 'text-terminal-muted border-terminal-border hover:border-terminal-green/30 hover:text-terminal-text'
              }`}
            >
              $ all posts
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className={`font-mono text-xs px-3 py-1.5 rounded border transition-all ${
                  activeTag === tag
                    ? 'text-terminal-green border-terminal-green/60 bg-terminal-green/10'
                    : 'text-terminal-muted border-terminal-border hover:border-terminal-green/30 hover:text-terminal-text'
                }`}
              >
                #{tag}
              </button>
            ))}
          </motion.div>
        )}

        {/* Posts */}
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <FileText size={32} className="mx-auto mb-4 text-terminal-muted/30" />
              <p className="font-mono text-terminal-muted">No posts found.</p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {filtered.map((post, i) => (
                <motion.article
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="group terminal-window p-5 hover:border-terminal-green/30 transition-all duration-300 hover:shadow-glow-green-sm">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 space-y-2">
                          {/* Date & reading time */}
                          <div className="flex items-center gap-4 font-mono text-xs text-terminal-muted">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={10} />
                              {formatDate(post.date)}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock size={10} />
                              {post.readingTime}
                            </span>
                          </div>

                          {/* Title */}
                          <h2 className="font-mono text-base sm:text-lg font-medium text-terminal-text group-hover:text-terminal-green transition-colors leading-tight">
                            <span className="text-terminal-green/40 mr-2">//</span>
                            {post.title}
                          </h2>

                          {/* Description */}
                          <p className="text-terminal-muted text-sm leading-relaxed line-clamp-2">
                            {post.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {post.tags.map((tag) => (
                              <span key={tag} className="tag-badge">#{tag}</span>
                            ))}
                          </div>
                        </div>

                        <ArrowRight
                          size={16}
                          className="flex-shrink-0 text-terminal-muted group-hover:text-terminal-green group-hover:translate-x-1 transition-all duration-300 mt-1"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}
