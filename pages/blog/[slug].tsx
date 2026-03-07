import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next/types'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getBlogPost, getAllBlogSlugs, BlogPost } from '@utils/blog'
import { Category, categoryGradients } from '../../components/types'
import Logo from '../../public/img/illustrations/logo.svg'
import { Components } from 'react-markdown'

interface BlogPostPageProps {
  post: BlogPost
}

const markdownComponents: Components = {
  img: ({ node, src, alt, ...props }) => (
    <figure className="my-8">
      <img
        src={src}
        alt={alt || ''}
        className="rounded-xl shadow-md w-full"
        loading="lazy"
        {...props}
      />
      {alt && (
        <figcaption className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400 font-mono">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
  blockquote: ({ node, children, ...props }) => (
    <blockquote
      className="border-l-4 border-blue-400 dark:border-blue-500 bg-blue-50 dark:bg-trueGray-800 pl-6 pr-4 py-4 my-6 rounded-r-lg italic text-gray-700 dark:text-gray-300"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ node, inline, className, children, ...props }: any) => {
    if (inline) {
      return (
        <code
          className="px-1.5 py-0.5 rounded-md bg-gray-100 dark:bg-trueGray-800 text-brandBlue dark:text-blue-300 text-sm font-mono border border-gray-200 dark:border-gray-700"
          {...props}
        >
          {children}
        </code>
      )
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
  pre: ({ node, children, ...props }) => (
    <pre
      className="bg-brandBlue dark:bg-trueGray-800 text-gray-100 rounded-xl p-6 my-6 overflow-x-auto text-sm leading-relaxed shadow-md border border-gray-700"
      {...props}
    >
      {children}
    </pre>
  ),
  h1: ({ node, children, ...props }) => (
    <h1 className="font-brand text-3xl md:text-4xl font-bold text-brandBlue dark:text-white mt-10 mb-4" {...props}>
      {children}
    </h1>
  ),
  h2: ({ node, children, ...props }) => (
    <h2 className="font-brand text-2xl md:text-3xl font-bold text-brandBlue dark:text-white mt-10 mb-4" {...props}>
      {children}
    </h2>
  ),
  h3: ({ node, children, ...props }) => (
    <h3 className="font-brand text-xl md:text-2xl font-semibold text-brandBlue dark:text-white mt-8 mb-3" {...props}>
      {children}
    </h3>
  ),
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  if (!post) {
    return (
      <>
        <Head>
          <title>Post Not Found | Tres Amigos</title>
        </Head>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-brandBlue dark:text-white mb-4">
              Post Not Found
            </h1>
            <Link href="/">
              <a className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                ← Back to Home
              </a>
            </Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{post.title} | Tres Amigos Blog</title>
        <meta name="description" content={post.excerpt || `${post.title} - Tres Amigos Blog`} />
        <link rel="icon" href="/img/illustrations/favicon.svg" />
      </Head>

      {/* Header */}
      <header className="bg-white dark:bg-trueGray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8 xl:px-20 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <a className="flex items-center space-x-2 text-2xl font-medium text-brandBlue dark:text-gray-100">
                <Logo className="h-12"/>
              </a>
            </Link>

            {/* Back Button */}
            <Link href="/#blog">
              <a className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium">
                ← Back to Blog
              </a>
            </Link>
          </div>

          {/* Post Header Info */}
          <div className="mt-6">
            <h1 className="font-brand max-w-4xl text-3xl md:text-4xl lg:text-5xl font-bold leading-snug tracking-tight text-brandBlue lg:leading-tight dark:text-white">
              {post.title}
            </h1>
            
            <div className="flex items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
              {post.author && (
                <span className="mr-4 font-medium">By {post.author}</span>
              )}
              <time dateTime={post.date} className="font-mono">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            {/* Tags */}
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
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 xl:px-20 py-8 md:py-12">
        <article className="max-w-3xl mx-auto">
          <div className="py-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Footer Navigation */}
        <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link href="/#blog">
            <a className="inline-flex items-center font-brand text-brandBlue dark:text-white hover:opacity-70 transition-opacity font-medium">
              ← Back to all blog posts
            </a>
          </Link>
        </div>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllBlogSlugs()
  const paths = slugs.map((slug) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const post = getBlogPost(slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
} 