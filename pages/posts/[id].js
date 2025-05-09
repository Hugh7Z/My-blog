import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getAllPostIds, getPostData } from '../../lib/posts';
import DateComponent from '../../components/Date';

export default function Post({ postData }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="min-h-screen bg-primary-bg">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center">
            <p className="text-text-secondary">加载中...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!postData) {
    return (
      <div className="min-h-screen bg-primary-bg">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-text-primary mb-4">文章未找到</h1>
            <p className="text-text-secondary">抱歉，您请求的文章不存在。</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const { title, date, contentHtml } = postData;

  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-4 text-text-primary">{title || '无标题'}</h1>
          <div className="text-text-secondary mb-8">
            {date && <DateComponent dateString={date} />}
          </div>
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml || '' }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  try {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error('Error getting post paths:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const postData = await getPostData(params.id);
    return {
      props: {
        postData: postData || null,
      },
    };
  } catch (error) {
    console.error('Error getting post data:', error);
    return {
      props: {
        postData: null,
      },
    };
  }
} 