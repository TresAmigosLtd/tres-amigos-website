import { BlogPostMeta } from '@utils/blog'
import { Category, categoryGradients } from './types'

interface BlogCardProps {
  post: BlogPostMeta
  onClick: (slug: string) => void
}

export default function BlogCard({ post, onClick }: BlogCardProps) {
  const getCardGradient = (post: BlogPostMeta): string => {
    if (!post.tags || post.tags.length === 0) {
      return 'bg-brandBlue dark:bg-trueGray-800'
    }
    
    const firstTag = post.tags[0]
    if (['Enablement', 'Execution', 'Leadership'].includes(firstTag)) {
      return categoryGradients[firstTag as Category]
    }
    
    return 'bg-brandBlue dark:bg-trueGray-800'
  }

  const gradientClass = getCardGradient(post)
  const isGradient = ['Enablement', 'Execution', 'Leadership'].includes(post.tags?.[0] || '')

  return (
    <article className="group cursor-pointer lg:col-auto transition-opacity">
      <a 
        href={`/blog/${post.slug}`}
        className={`
          ${isGradient ? `${gradientClass} animate-gradient` : gradientClass}
          relative h-20 md:h-48 flex flex-col justify-start shadow-md p-2 md:p-4 rounded-2xl
          hover:shadow-lg transition-all duration-300
        `}
      >
        {/* Header - Date and Read CTA */}
        <div className="flex justify-between items-baseline mb-2 md:mb-4 xl:mb-6">
          <time className="text-xs md:text-sm font-mono font-normal uppercase text-gray-300 dark:text-gray-400" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
            })}
          </time>
          <div className="text-white text-xs font-medium opacity-80 group-hover:opacity-100 group-hover:animate-arrow-wiggle transition-opacity">
            Read →
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow">
          <h3 className="font-brand text-sm md:text-base xl:text-lg font-medium text-white mb-2 line-clamp-1">
            {post.title}
          </h3>
          
          {post.excerpt && (
            <p className="text-white font-mono text-xs md:text-base leading-normal flex-grow line-clamp-3 md:line-clamp-5 mb-2">
              {post.excerpt}
            </p>
          )}
        </div>

        {/* Footer - Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium rounded-full bg-white/20 text-white backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 2 && (
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-white/20 text-white backdrop-blur-sm">
                +{post.tags.length - 2}
              </span>
            )}
          </div>
        )}
      </a>
    </article>
  )
} 