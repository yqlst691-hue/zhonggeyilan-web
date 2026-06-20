import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionContainer from '@/components/SectionContainer';
import { getArticleList, getCategories } from '@/lib/knowledge';

export const metadata: Metadata = {
  title: '技术百科',
  description:
    '中格一蓝环保技术百科 - 专业解读污水处理工艺、污泥脱水、脱氮除磷、IES零碳渔业等行业技术知识，助您深入了解环保水处理技术。',
  alternates: {
    canonical: 'https://www.zhonggeyilan.com/knowledge',
  },
};

export default function KnowledgePage() {
  const articles = getArticleList();
  const categories = getCategories();

  return (
    <>
      <PageHero
        title="技术百科"
        subtitle="专业解读污水处理与IES零碳渔业技术知识，深入理解行业工艺原理与最佳实践"
      />

      {/* 分类导航 */}
      <SectionContainer className="bg-white !py-8">
        <div className="container-main -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 sm:gap-3 flex-wrap justify-center">
            <div className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
              全部文章
            </div>
            {categories.map((cat) => (
              <div
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer transition-colors"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 文章列表 */}
      <SectionContainer className="bg-gray-50 !pt-0">
        <div className="container-main -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/knowledge/${article.slug}`}
                className="block bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <span>📖</span>
                        <span>{article.readingTime} 分钟阅读</span>
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-dark group-hover:text-primary transition-colors mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{article.excerpt}</p>
                    <div className="mt-3 text-sm text-primary font-medium group-hover:underline">
                      阅读全文 →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 底部CTA */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-main py-12 sm:py-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">需要更深入的技术指导？</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            我们的技术团队可为您提供一对一的技术咨询服务，根据您的实际情况提供定制化的工艺建议和药剂方案
          </p>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            联系技术团队
          </Link>
        </div>
      </section>
    </>
  );
}
