import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Category } from '@components/types'

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt?: string
  content: string
  author?: string
  tags?: string[]
}

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  excerpt?: string
  author?: string
  tags?: Category[]
}

const blogDirectory = path.join(process.cwd(), 'blog')

export function getBlogPosts(): BlogPostMeta[] {
  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(blogDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .filter((fileName) => !fileName.startsWith('_'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(blogDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug,
        title: matterResult.data.title || slug,
        date: matterResult.data.date || new Date().toISOString(),
        excerpt: matterResult.data.excerpt || '',
        author: matterResult.data.author || '',
        tags: matterResult.data.tags || [],
      } as BlogPostMeta
    })

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      slug,
      title: matterResult.data.title || slug,
      date: matterResult.data.date || new Date().toISOString(),
      excerpt: matterResult.data.excerpt || '',
      author: matterResult.data.author || '',
      tags: matterResult.data.tags || [],
      content: matterResult.content,
    }
  } catch {
    return null
  }
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(blogDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .filter((fileName) => !fileName.startsWith('_'))
    .map((fileName) => fileName.replace(/\.md$/, ''))
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(blogDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .filter((fileName) => !fileName.startsWith('_'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(blogDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug,
        title: matterResult.data.title || slug,
        date: matterResult.data.date || new Date().toISOString(),
        excerpt: matterResult.data.excerpt || '',
        author: matterResult.data.author || '',
        tags: matterResult.data.tags || [],
        content: matterResult.content,
      } as BlogPost
    })

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
} 