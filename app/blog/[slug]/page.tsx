import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug, compileToHtml } from '@/lib/mdx'
import BlogPostView from '@/components/blog/BlogPostView'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  // Compile MDX → HTML string entirely on the server — no React version conflicts
  const html = await compileToHtml(post.content)

  return (
    <BlogPostView
      slug={post.slug}
      title={post.title}
      description={post.description}
      date={post.date}
      tags={post.tags}
      readingTime={post.readingTime}
      html={html}
    />
  )
}
