// Server Component — MDXRemote from /rsc must render server-side
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ArrowLeft, Clock, Calendar, Twitter } from 'lucide-react'
import { BlogPost, formatDate } from '@/lib/types'
import CopyButton from './CopyButton'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

interface BlogPostClientProps {
  post: BlogPost
}

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="font-mono text-2xl sm:text-3xl font-bold text-terminal-green mt-8 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-mono text-xl sm:text-2xl font-bold text-terminal-green-dim mt-8 mb-3" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-mono text-lg font-medium text-terminal-text mt-6 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-terminal-text leading-relaxed mb-4" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-terminal-green hover:underline underline-offset-2" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="space-y-1 mb-4 pl-4 list-none" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="flex items-start gap-2 text-terminal-text" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="space-y-1 mb-4 pl-4 list-decimal marker:text-terminal-green" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-terminal-green/40 pl-4 my-4 text-terminal-muted italic font-mono text-sm" {...props} />
  ),
  code: ({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) => {
    if (!className) {
      return (
        <code className="font-mono text-terminal-green bg-terminal-surface px-1.5 py-0.5 rounded text-sm border border-terminal-border" {...props}>
          {children}
        </code>
      )
    }
    return <code className={className} {...props}>{children}</code>
  },
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-terminal-surface border border-terminal-border rounded-lg p-4 overflow-x-auto my-4 font-mono text-sm" {...props} />
  ),
  hr: () => <hr className="border-terminal-border my-8" />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-terminal-green font-semibold" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="text-terminal-green-dim italic" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-4">
      <table className="w-full border-collapse font-mono text-sm" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="border border-terminal-border px-3 py-2 text-left text-terminal-green bg-terminal-surface" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="border border-terminal-border px-3 py-2 text-terminal-text" {...props} />
  ),
}

const rehypePrettyCodeOptions = {
  theme: 'github-dark',
  keepBackground: false,
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://ikbalmahendra.dev/blog/${post.slug}`)}`

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
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-terminal-muted">
            <span className="flex items-center gap-1.5">
              <Calendar size={11} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={11} />
              {post.readingTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold text-terminal-text leading-tight">
            <span className="text-terminal-green">//</span>{' '}
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-terminal-muted leading-relaxed border-l-2 border-terminal-green/30 pl-4 font-mono text-sm">
            {post.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="tag-badge">#{tag}</span>
            ))}
          </div>

          {/* Share */}
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

        {/* MDX content — rendered server-side */}
        <div className="prose prose-sm max-w-none">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  [rehypePrettyCode, rehypePrettyCodeOptions],
                  rehypeSlug,
                ],
              },
            }}
          />
        </div>

        {/* Footer nav */}
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
