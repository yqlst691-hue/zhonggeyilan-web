'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getProductNavItems } from '@/lib/products';
import { companyContact, certifications } from '@/lib/contact';

// 产品下拉菜单 —— 从 lib/products.ts 自动生成
const productMenuItems = getProductNavItems();

const navItems = [
  { name: '首页', href: '/' },
  {
    name: '产品中心',
    href: '/products',
    children: productMenuItems,
  },
  {
    name: '解决方案',
    href: '/solutions/ies-zero-carbon-fishery',
    children: [
      { name: 'IES零碳渔业技术', href: '/solutions/ies-zero-carbon-fishery' },
    ],
  },
  { name: '工程案例', href: '/cases' },
  { name: '技术百科', href: '/knowledge' },
  { name: '新闻动态', href: '/news' },
  { name: '关于我们', href: '/about' },
  { name: '常见问题', href: '/faq' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'zh' | 'en'>('zh');

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      {/* ===== 主导航栏 ===== */}
      <div className="container-main">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">中</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-dark text-lg leading-tight">{companyContact.shortName}</div>
              <div className="text-xs text-gray-500">环保科技</div>
            </div>
          </Link>

          {/* 桌面导航 */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-md"
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[180px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* 联系按钮 */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/about" className="btn-primary text-sm !py-2 !px-4">
              联系我们
            </Link>
          </div>

          {/* 移动端菜单按钮 */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="打开菜单"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* 移动端菜单 */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            {/* 移动端顶部信息（联系电话、邮箱、语言切换） */}
            <div className="pb-3 mb-3 border-b border-gray-100 flex flex-wrap items-center gap-3 text-xs text-gray-600">
              <Link
                href={`tel:${companyContact.phone}`}
                className="inline-flex items-center gap-1.5 text-gray-600 hover:text-primary transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {companyContact.phone}
              </Link>
              <Link
                href={`mailto:${companyContact.email}`}
                className="inline-flex items-center gap-1.5 text-gray-600 hover:text-primary transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {companyContact.email}
              </Link>
              <button
                type="button"
                onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary border border-primary/30 rounded font-medium"
              >
                🌐 {lang === 'zh' ? '中文 / EN' : 'EN / 中文'}
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 mt-1 space-y-1 border-l-2 border-gray-100 ml-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/about"
                className="mt-3 btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                联系我们
              </Link>
            </nav>
          </div>
        )}
      </div>

      {/* ===== 信息栏（菜单下方）：认证、电话、邮箱、中英切换 ===== */}
      <div className="bg-dark text-gray-300 text-xs hidden sm:block border-t border-gray-800">
        <div className="container-main flex items-center justify-between h-9">
          {/* 左侧：认证标识 */}
          <div className="flex items-center gap-4">
            <span className="text-primary-light font-medium">认证资质：</span>
            {certifications.map((badge, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
                title={badge.title}
              >
                <svg
                  className="w-3.5 h-3.5 text-primary-light"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                {badge.label}
              </span>
            ))}
          </div>

          {/* 右侧：电话、邮箱、中英切换 */}
          <div className="flex items-center gap-5">
            {/* 电话 */}
            <Link
              href={`tel:${companyContact.phone}`}
              className="inline-flex items-center gap-1.5 text-gray-300 hover:text-primary-light transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 text-primary-light"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-medium">{companyContact.phone}</span>
            </Link>

            {/* 邮箱 */}
            <Link
              href={`mailto:${companyContact.email}`}
              className="inline-flex items-center gap-1.5 text-gray-300 hover:text-primary-light transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 text-primary-light"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium">{companyContact.email}</span>
            </Link>

            {/* 分隔线 */}
            <div className="h-4 w-px bg-gray-700" />

            {/* 中英切换按钮 */}
            <button
              type="button"
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 border border-primary/30 text-primary-light hover:bg-primary hover:text-white rounded transition-all duration-300 font-medium"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 21"
                />
              </svg>
              {lang === 'zh' ? '中文 / EN' : 'EN / 中文'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
