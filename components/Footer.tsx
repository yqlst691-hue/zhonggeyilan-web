import Link from 'next/link';
import { companyContact, certifications } from '@/lib/contact';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white mt-20">
      <div className="container-main py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* 企业介绍 */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">中</span>
              </div>
              <div>
                <div className="font-bold text-lg">{companyContact.shortName}</div>
                <div className="text-xs text-gray-400">环保科技</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {companyContact.name}，专注于污水处理药剂研发、IES零碳渔业技术及生态环保解决方案。
            </p>
          </div>

          {/* 产品中心 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">产品中心</h3>
            <ul className="space-y-2 text-sm">
              {['污泥调理剂', '复合碳源', '生物除臭剂', 'PAC聚合氯化铝', 'PAM聚丙烯酰胺', '除磷剂'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/products/${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    className="text-gray-400 hover:text-primary-light transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solutions/ies-zero-carbon-fishery" className="text-gray-400 hover:text-primary-light transition-colors">IES零碳渔业</Link></li>
              <li><Link href="/cases" className="text-gray-400 hover:text-primary-light transition-colors">工程案例</Link></li>
              <li><Link href="/knowledge" className="text-gray-400 hover:text-primary-light transition-colors">技术百科</Link></li>
              <li><Link href="/news" className="text-gray-400 hover:text-primary-light transition-colors">新闻动态</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary-light transition-colors">关于我们</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-primary-light transition-colors">常见问题</Link></li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">联系方式</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{companyContact.address.full}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{companyContact.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{companyContact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <div>© {currentYear} {companyContact.name} 版权所有</div>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-primary-light transition-colors">{companyContact.icpNumber}</Link>
            <span>|</span>
            <Link href="/" className="hover:text-primary-light transition-colors">网站地图</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
