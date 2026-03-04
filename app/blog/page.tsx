import { Metadata } from 'next'
import { getAllPostsMeta, getAllTags, formatDate } from '@/lib/mdx'
import BlogClient from '@/components/blog/BlogClient'

export const metadata: Metadata = {
  title: 'Security Research Blog',
  description: 'Security research, infrastructure hardening guides, and cyber defense engineering insights.',
}

export default function BlogPage() {
  const posts = getAllPostsMeta()
  const tags = getAllTags()

  return <BlogClient posts={posts} tags={tags} />
}
