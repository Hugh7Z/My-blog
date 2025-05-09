import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
          Welcome to My Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Exploring technology, sharing knowledge, and documenting my journey in software development.
        </p>
      </section>

      {/* Featured Posts */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Post Card 1 */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Getting Started with Next.js
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how to build modern web applications with Next.js and React.
              </p>
              <Link
                href="/blog/getting-started-with-nextjs"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read More →
              </Link>
            </div>
          </article>

          {/* Post Card 2 */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                The Future of Web Development
              </h3>
              <p className="text-gray-600 mb-4">
                Exploring upcoming trends and technologies in web development.
              </p>
              <Link
                href="/blog/future-of-web-development"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read More →
              </Link>
            </div>
          </article>

          {/* Post Card 3 */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Building Responsive Designs
              </h3>
              <p className="text-gray-600 mb-4">
                Best practices for creating mobile-friendly websites.
              </p>
              <Link
                href="/blog/building-responsive-designs"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read More →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gray-50 py-12 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Reading</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore more articles and tutorials on web development, programming, and technology.
        </p>
        <Link
          href="/blog"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
        >
          View All Posts
        </Link>
      </section>
    </div>
  );
} 