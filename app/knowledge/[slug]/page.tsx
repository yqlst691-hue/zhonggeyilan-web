import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import SectionContainer from '@/components/SectionContainer';
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/knowledge';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    return { title: '文章未找到' };
  }
  return {
    title: article.seo.title,
    description: article.seo.description,
    keywords: article.seo.keywords,
    alternates: {
      canonical: `https://www.zhonggeyilan.com/knowledge/${params.slug}`,
    },
  };
}

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

// 百科文章详情页
export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  // Article JSON-LD + FAQPage JSON-LD
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.seo.title,
    description: article.seo.description,
    keywords: article.seo.keywords.join(', '),
    author: {
      '@type': 'Organization',
      name: '河北中格一蓝环保科技有限公司',
    },
    publisher: {
      '@type': 'Organization',
      name: '河北中格一蓝环保科技有限公司',
    },
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    timeRequired: `PT${article.readingTime}M`,
  };

  const faqJsonLd = article.content.faqs
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.content.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <PageHero
        title="技术百科"
        subtitle={article.title}
      />

      {/* 文章主体 */}
      <SectionContainer className="bg-white">
        <div className="max-w-4xl mx-auto">
          {/* 文章元信息 */}
          <div className="flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-gray-100">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
              {article.category}
            </span>
            <span className="text-sm text-gray-400 flex items-center gap-1">
              <span>📖</span>
              <span>{article.readingTime} 分钟阅读</span>
            </span>
            <span className="text-xs text-gray-400">
              来源：中格一蓝技术团队
            </span>
          </div>

          {/* 引言 */}
          <div className="bg-gradient-to-br from-primary/5 to-white rounded-2xl p-6 sm:p-8 mb-8 border border-primary/10">
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              {article.content.intro}
            </p>
          </div>

          {/* 正文各章节 */}
          <div className="space-y-10">
            {article.content.sections.map((section, idx) => (
              <div key={idx} className="scroll-mt-20">
                <h2 className="text-xl sm:text-2xl font-bold text-dark mb-5 pb-3 border-b-2 border-primary/20">
                  {idx + 1}. {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 关键数据 */}
          {article.content.keyPoints && article.content.keyPoints.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl sm:text-2xl font-bold text-dark mb-5">📊 关键数据速览</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {article.content.keyPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-xl p-5 border border-gray-100"
                  >
                    <div className="text-sm text-gray-500 mb-1">{point.label}</div>
                    <div className="text-base font-medium text-dark font-mono">{point.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 常见问题 */}
          {article.content.faqs && article.content.faqs.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl sm:text-2xl font-bold text-dark mb-5">❓ 常见问题</h2>
              <div className="space-y-4">
                {article.content.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 sm:p-6 border border-gray-100"
                  >
                    <h3 className="font-bold text-dark mb-3 flex items-start gap-2">
                      <span className="text-primary font-bold">Q{idx + 1}.</span>
                      <span>{faq.q}</span>
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed pl-6">
                      <span className="text-primary-light font-bold">A：</span>
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 关键词标签 */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-500">相关关键词：</span>
              {article.seo.keywords.map((kw) => (
                <span
                  key={kw}
                  className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 返回列表 */}
      <SectionContainer className="bg-gray-50 !pt-8">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/knowledge"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors duration-300"
          >
            ← 返回技术百科
          </Link>
        </div>
      </SectionContainer>

      {/* 底部CTA */}
      <section className="bg-gradient-to-br from-dark to-dark-light text-white">
        <div className="container-main py-12 sm:py-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">需要更详细的技术咨询？</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            如有具体的技术问题或项目需求，欢迎联系我们的专业团队获取定制化的技术方案
          </p>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-dark font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            联系我们
          </Link>
        </div>
      </section>
    </>
  );
}
