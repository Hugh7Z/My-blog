import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { getAllPosts } from '../lib/posts';

export default function Home({ allPostsData = [] }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">最新文章</h1>
          <div className="grid gap-8">
            {allPostsData && allPostsData.length > 0 ? (
              allPostsData.map((post) => (
                <article key={post.id} className="article-card p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-2">
                    <Link href={`/posts/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-text-secondary mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <time className="text-sm text-text-secondary">{post.date}</time>
                    <span className="text-sm text-text-secondary">作者：{post.author}</span>
                  </div>
                </article>
              ))
            ) : (
              <p className="text-center text-text-secondary">暂无文章</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const allPostsData = getAllPosts();
    return {
      props: {
        allPostsData,
      },
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        allPostsData: [],
      },
    };
  }
}
