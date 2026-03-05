// Client-safe utilities — no Node.js APIs, safe to import anywhere

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  readingTime: string
}

export interface BlogPost extends BlogPostMeta {
  content: string
}

// Passed to the render component — pre-compiled HTML, no raw MDX needed client-side
export interface BlogPostRendered extends BlogPostMeta {
  html: string
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
