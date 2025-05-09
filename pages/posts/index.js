import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getAllPosts } from '../../lib/posts';
import DateComponent from '../../components/Date';

export default function Posts({ allPostsData = [] }) {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-text-primary">博客文章</h1>
        {allPostsData && allPostsData.length > 0 ? (
          <div className="grid gap-8">
            {allPostsData.map((post) => {
              const { id, date, title, excerpt } = post || {};
              return (
                <article key={id} className="article-card p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-2">
                    <Link href={`/posts/${id}`} className="hover:text-accent-color transition-colors">
                      {title || '无标题'}
                    </Link>
                  </h2>
                  <div className="text-text-secondary mb-4">
                    {date && <DateComponent dateString={date} />}
                  </div>
                  <p className="text-text-secondary">{excerpt || '暂无摘要'}</p>
                  <div className="mt-4">
                    <Link
                      href={`/posts/${id}`}
                      className="text-accent-color hover:text-accent-hover transition-colors"
                    >
                      阅读更多 →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-text-secondary text-lg mb-4">暂无文章</p>
            <p className="text-text-secondary">
              请检查 posts 目录下是否有 .md 格式的文章文件
            </p>
          </div>
        )}
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
        allPostsData: allPostsData || [],
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