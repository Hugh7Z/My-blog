import Link from 'next/link';
import { useRouter } from 'next/router';
import Sidebar from './Sidebar';

export default function Navbar() {
  const router = useRouter();

  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <>
      <Sidebar />
      <nav className="navbar">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className={`text-2xl font-bold transition-all duration-300 ${
                  isActive('/')
                    ? 'text-accent-color scale-125'
                    : 'text-text-primary hover:text-accent-color'
                }`}
              >
                我的博客
              </Link>
              <Link
                href="/projects"
                className={`text-2xl font-bold transition-all duration-300 ${
                  isActive('/projects')
                    ? 'text-accent-color scale-125'
                    : 'text-text-primary hover:text-accent-color'
                }`}
              >
                我的项目
              </Link>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/"
                className={`text-xl transition-all duration-300 ${
                  isActive('/')
                    ? 'text-accent-color scale-110'
                    : 'text-text-primary hover:text-accent-color'
                }`}
              >
                首页
              </Link>
              <Link
                href="/about"
                className={`text-xl transition-all duration-300 ${
                  isActive('/about')
                    ? 'text-accent-color scale-110'
                    : 'text-text-primary hover:text-accent-color'
                }`}
              >
                关于
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
} 