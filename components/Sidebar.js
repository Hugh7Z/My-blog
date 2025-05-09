import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 侧边栏切换按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 p-2 rounded-lg bg-secondary-bg/30 hover:bg-card-bg/50 transition-colors"
      >
        <svg
          className={`w-6 h-6 text-text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* 侧边栏遮罩层 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 侧边栏内容 */}
      <aside
        className={`fixed left-0 top-0 h-full w-72 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 h-full overflow-y-auto">
          {/* 个人信息 */}
          <div className="mb-8 bg-secondary-bg/30 backdrop-blur-md p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-text-primary">个人信息</h2>
            <div className="space-y-2 text-text-secondary">
              <p>赵戈</p>
              <p>全栈开发者</p>
              <p>热爱技术分享</p>
            </div>
          </div>

          {/* 文章目录 */}
          <div className="mb-8 bg-secondary-bg/30 backdrop-blur-md p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-text-primary">文章目录</h2>
            <nav className="space-y-2">
              <Link
                href="/posts/first-post"
                className="block text-text-secondary hover:text-accent-color transition-colors"
              >
                我的第一篇博客文章
              </Link>
              <Link
                href="/posts/nextjs-tips"
                className="block text-text-secondary hover:text-accent-color transition-colors"
              >
                学习 Next.js 的心得
              </Link>
              <Link
                href="/posts/ai-future"
                className="block text-text-secondary hover:text-accent-color transition-colors"
              >
                人工智能：未来已来
              </Link>
            </nav>
          </div>

          {/* 收藏栏 */}
          <div className="bg-secondary-bg/30 backdrop-blur-md p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-text-primary">收藏</h2>
            <div className="space-y-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-text-secondary hover:text-accent-color transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://stackoverflow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-text-secondary hover:text-accent-color transition-colors"
              >
                Stack Overflow
              </a>
              <a
                href="https://dev.to"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-text-secondary hover:text-accent-color transition-colors"
              >
                Dev.to
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
} 