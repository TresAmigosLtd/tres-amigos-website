import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next/types'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getBlogPost, getAllBlogSlugs, BlogPost } from '@utils/blog'
import { Category, categoryGradients } from '../../components/types'
import Logo from '../../public/img/illustrations/logo.svg'

interface BlogPostPageProps {
  post: BlogPost
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
        <article className="max-w-4xl mx-auto">
          <div className="py-4 text-lg md:text-xl leading-normal text-gray-500 dark:text-gray-300 prose prose-lg prose-blue dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Footer Navigation */}
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link href="/#blog">
            <a className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
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