export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-text-secondary">© {new Date().getFullYear()} 我的个人博客. 保留所有权利.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-accent-color transition-colors">GitHub</a>
            <a href="#" className="hover:text-accent-color transition-colors">Twitter</a>
            <a href="#" className="hover:text-accent-color transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 