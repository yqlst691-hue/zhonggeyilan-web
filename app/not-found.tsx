import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="container-main text-center py-20">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold text-dark mt-4">
          页面未找到
        </h2>
        <p className="text-gray-500 mt-4 max-w-md mx-auto">
          抱歉，您访问的页面不存在或已被移除。请检查网址是否正确，或返回首页浏览。
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link href="/" className="btn-primary">
            返回首页
          </Link>
          <Link href="/products" className="btn-secondary">
            浏览产品
          </Link>
        </div>
      </div>
    </main>
  );
}
