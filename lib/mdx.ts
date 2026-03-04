// Server-only — uses Node.js fs/path, never import this in client components
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { BlogPost, BlogPostMeta } from './types'

export type { BlogPost, BlogPostMeta }
export { formatDate } from './types'

const blogsDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogsDirectory)) return []

  const slugs = fs
    .readdirSync(blogsDirectory)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => f.replace(/\.(mdx|md)$/, ''))

  return slugs
    .map((slug) => getPostBySlug(slug))
    .filter(Boolean)
    .sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime()) as BlogPost[]
}

export function getAllPostsMeta(): BlogPostMeta[] {
  return getAllPosts().map(({ content: _content, ...meta }) => meta)
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const mdxPath = path.join(blogsDirectory, `${slug}.mdx`)
    const mdPath = path.join(blogsDirectory, `${slug}.md`)
    const fullPath = fs.existsSync(mdxPath) ? mdxPath : mdPath

    if (!fs.existsSync(fullPath)) return null

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const rt = readingTime(content)

    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      tags: data.tags || [],
      readingTime: rt.text,
      content,
    }
  } catch {
    return null
  }
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tagSet = new Set<string>()
  posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)))
  return Array.from(tagSet).sort()
}
