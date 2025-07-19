import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { BlogPost } from '@utils/blog'
import { Category, categoryGradients } from '@components/skillMatrix'

interface BlogModalProps {
  post: BlogPost | null
  isOpen: boolean
  onClose: () => void
}

export default function BlogModal({ post, isOpen, onClose }: BlogModalProps) {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !post) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-trueGray-900 rounded-lg shadow-xl w-[75%] max-h-[90vh] mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex-1 min-w-0">
            <h1 className="font-brand text-2xl md:text-3xl font-bold leading-snug tracking-tight text-brandBlue lg:leading-tight dark:text-white truncate">
              {post.title}
            </h1>
            <div className="flex items-center mt-2 text-xs md:text-sm font-bold tracking-wider text-gray-400 uppercase">
              {post.author && (
                <span className="mr-4">By {post.author}</span>
              )}
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => {
                  const isMainCategory = ['Enablement', 'Execution', 'Leadership'].includes(tag)
                  return (
                    <span
                      key={tag}
                      className={
                        isMainCategory
                          ? `px-3 py-1 text-sm font-medium rounded-full border-2 border-gray-300 dark:border-gray-600 ${categoryGradients[tag as Category]} text-gradient animate-gradient`
                          : "px-3 py-1 text-sm font-medium rounded-full border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      }
                    >
                      {tag}
                    </span>
                  )
                })}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="ml-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-200px)] p-6">
          <div className="prose prose-lg prose-blue dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>


      </div>
    </div>
  )
} 