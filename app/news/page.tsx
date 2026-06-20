import Link from 'next/link';
import { companyContact } from '@/lib/contact';

export const metadata = {
  title: '新闻动态',
  description: '了解污水处理行业最新资讯、中格一蓝环保技术动态、项目案例与行业政策解读。',
};

export default function NewsPage() {
  return (
    <div>
      {/* 页面标题 */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 sm:py-20">
        <div className="container-main text-center">
          <div className="text-primary-light font-medium text-sm mb-3">行业资讯</div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">新闻动态</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            了解污水处理行业最新资讯、中格一蓝环保技术动态、项目案例与行业政策解读
          </p>
        </div>
      </div>

      {/* 新闻列表 */}
      <section className="container-main py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {/* 新闻文章示例 */}
          <div className="space-y-8">
            {[
              {
                title: '恭喜！我司荣获"河北省高新技术企业"认定',
                date: '2024-12-15',
                excerpt: '经过严格评审，我司凭借在污水处理药剂领域的创新技术和综合实力，成功荣获"河北省高新技术企业"认定。这一荣誉是对公司技术实力和创新能力的充分肯定...',
                tag: '企业荣誉',
              },
              {
                title: 'IES零碳渔业技术通过专家论证，进入推广应用阶段',
                date: '2024-11-20',
                excerpt: '我司自主研发的IES零碳渔业技术近日通过了由多位水产养殖和环保领域专家组成的评审组的论证，一致认为该技术达到国内领先水平，建议加快推广应用...',
                tag: '技术动态',
              },
              {
                title: '我司污泥调理剂产品实现技术升级，脱水效率提升30%',
                date: '2024-10-08',
                excerpt: '我司研发团队通过对污泥调理剂配方进行优化升级，成功将产品脱水效率提升30%，进一步巩固了产品在市场上的技术领先地位...',
                tag: '产品升级',
              },
            ].map((news, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    {news.tag}
                  </span>
                  <time>{news.date}</time>
                </div>
                <h2 className="text-xl font-bold text-dark mb-3 hover:text-primary transition-colors cursor-pointer">
                  {news.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {news.excerpt}
                </p>
                <Link
                  href="#"
                  className="text-primary font-medium hover:text-primary-dark transition-colors inline-flex items-center gap-1"
                >
                  阅读更多
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>

          {/* 分页 */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-2">
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>
                上一页
              </button>
              <span className="px-4 py-2 bg-primary text-white rounded-lg">1</span>
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50">
                下一页
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* 订阅咨询 */}
      <section className="bg-primary/5 py-12 sm:py-16">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-dark mb-4">想了解更多资讯？</h2>
            <p className="text-gray-600 mb-6">
              关注我们的微信公众号或直接联系我们的客服团队，获取更多行业资讯和技術支持
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href={`tel:${companyContact.phone}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
              >
                📞 {companyContact.phone}
              </Link>
              <Link
                href={`mailto:${companyContact.email}`}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                📧 {companyContact.email}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
