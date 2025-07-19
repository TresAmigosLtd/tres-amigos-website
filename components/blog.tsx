import { useState, useEffect } from 'react'
import { BlogPostMeta, BlogPost } from '@utils/blog'
import { umami } from '@utils/analytics'
import BlogModal from './blogModal'

interface BlogSectionProps {
  posts: BlogPostMeta[]
  allPosts: BlogPost[]
}

export default function BlogSection({ posts, allPosts }: BlogSectionProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Handle URL hash for direct blog post links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash.startsWith('#blog-')) {
        const slug = hash.replace('#blog-', '')
        const post = allPosts.find(p => p.slug === slug)
        if (post) {
          setSelectedPost(post)
          setIsModalOpen(true)
          // Track direct link access
          umami.trackBlogPost('open', slug, post.title)
        }
      }
    }

    // Check initial hash
    handleHashChange()
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [allPosts])

  const handlePostClick = (slug: string) => {
    const fullPost = allPosts.find(post => post.slug === slug)
    if (fullPost) {
      setSelectedPost(fullPost)
      setIsModalOpen(true)
      // Update URL hash
      window.history.pushState(null, '', `#blog-${slug}`)
      // Track blog post open
      umami.trackBlogPost('open', slug, fullPost.title)
    }
  }

  const handleCloseModal = () => {
    // Track blog post close
    if (selectedPost) {
      umami.trackBlogPost('close', selectedPost.slug, selectedPost.title)
    }
    setIsModalOpen(false)
    setSelectedPost(null)
    // Remove hash from URL
    window.history.pushState(null, '', window.location.pathname)
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          No blog posts yet. Check back soon!
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 dark:border-gray-700 pb-8 mb-8">
            <div 
              onClick={() => handlePostClick(post.slug)}
              className="cursor-pointer group"
            >
              <h3 className="font-brand max-w-2xl mt-3 text-xl md:text-2xl font-bold leading-snug tracking-tight text-brandBlue lg:leading-tight dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              {post.excerpt && (
                <p className="py-2 text-lg leading-normal text-gray-500 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
              )}
              <div className="flex items-center justify-between">
                <time className="text-xs md:text-sm font-bold tracking-wider text-gray-400 uppercase" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
                <div className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Read more →
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <BlogModal 
        post={selectedPost}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
} 