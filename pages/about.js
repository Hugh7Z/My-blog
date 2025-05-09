import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-text-primary">关于我</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-text-secondary">
            欢迎来到我的个人博客！我是一名热爱技术的全栈开发者，专注于Web开发和人工智能领域。
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-text-primary">技能</h2>
          <ul className="list-disc pl-6 text-text-secondary">
            <li>前端开发：React, Next.js, TypeScript</li>
            <li>后端开发：Node.js, Python, Java</li>
            <li>数据库：MySQL, MongoDB, Redis</li>
            <li>人工智能：机器学习, 深度学习</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-text-primary">联系方式</h2>
          <p className="text-text-secondary">
            如果您有任何问题或建议，欢迎通过以下方式联系我：
          </p>
          <ul className="list-disc pl-6 text-text-secondary">
            <li>邮箱：your.email@example.com</li>
            <li>GitHub：github.com/yourusername</li>
            <li>LinkedIn：linkedin.com/in/yourusername</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
} 