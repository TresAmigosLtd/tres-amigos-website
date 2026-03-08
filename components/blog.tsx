import { BlogPostMeta } from '@utils/blog'
import BlogCard from './blogCard'

interface BlogSectionProps {
  posts: BlogPostMeta[]
}

export default function BlogSection({ posts }: BlogSectionProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          No blog posts yet. Check back soon.
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="grid gap-4 md:gap-10 grid-cols-1 md:grid-cols-3 mb-4 xl:mb-16">
        {posts.map((post) => (
          <BlogCard 
            key={post.slug} 
            post={post} 
          />
        ))}
      </div>


    </>
  )
} 