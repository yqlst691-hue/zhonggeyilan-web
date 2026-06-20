import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionContainer from '@/components/SectionContainer';
import { getProductBySlug, getAllProductSlugs } from '@/lib/products';

// 根据 slug 动态生成每个产品详情页的 SEO 元数据
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: '产品未找到',
      description: '该产品信息不存在或已下线',
    };
  }
  return {
    title: product.seo.title,
    description: product.seo.description,
    alternates: {
      canonical: product.seo.canonical,
    },
  };
}

// 生成所有产品详情页的静态路由
export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

// 产品详情页主组件 —— 所有产品共用此模板
export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Product JSON-LD —— 帮助 AI 搜索引擎提取产品结构化信息
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.summary,
    image: `https://www.zhonggeyilan.com${product.image}`,
    brand: {
      '@type': 'Brand',
      name: '中格一蓝',
    },
    manufacturer: {
      '@type': 'Organization',
      name: '河北中格一蓝环保科技有限公司',
      url: 'https://www.zhonggeyilan.com',
    },
    category: '污水处理药剂',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'CNY',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: '河北中格一蓝环保科技有限公司',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      {/* Hero Banner */}
      <PageHero title={product.title} subtitle={product.heroSubtitle} />

      {/* 产品概述 */}
      <SectionContainer className="bg-white">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="text-primary-light font-medium text-sm mb-3">产品概述</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-5">{product.outlineTitle}</h2>
            {product.outlineText.map((text, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4">
                {text}
              </p>
            ))}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {product.metrics.map((m, i) => (
                <div key={i} className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{m.num}</div>
                  <div className="text-xs text-gray-500 mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gray-100">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 产品核心优势 */}
      <SectionContainer className="bg-gray-50">
        <div className="container-main -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-3 sm:mb-4">产品核心优势</h2>
            <p className="text-gray-500 text-sm sm:text-base">
              针对{product.title}的独特设计，带来显著的效果提升
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.advantages.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 技术参数 */}
      <SectionContainer className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-3 sm:mb-4">技术参数</h2>
            <p className="text-gray-500">产品典型技术指标，供选型参考</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {product.specifications.map((spec, index) => (
                <div
                  key={index}
                  className={`p-5 border-b sm:border-b-0 ${
                    index < product.specifications.length - 2 ? 'sm:border-r border-gray-100' : ''
                  } ${index % 2 === 0 ? 'bg-gray-50/50' : ''}`}
                >
                  <div className="text-sm text-gray-500 mb-1">{spec.label}</div>
                  <div className="font-medium text-dark">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 应用领域 */}
      <SectionContainer className="bg-gray-50">
        <div className="container-main -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-3 sm:mb-4">应用领域</h2>
            <p className="text-gray-500">广泛适用于各类污水处理场景</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.applications.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-primary font-bold mb-2">0{index + 1}</div>
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 使用方法 */}
      <SectionContainer className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-3 sm:mb-4">使用方法</h2>
            <p className="text-gray-500">简单便捷的投加方式，确保最佳使用效果</p>
          </div>
          <div className="bg-gradient-to-br from-gray-50/50 to-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-100">
            <div className="space-y-6">
              {product.usageSteps.map((item, index) => (
                <div key={index} className="flex gap-4 sm:gap-6 items-start">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-bold text-dark mb-1 sm:mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-main py-14 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">需要{product.title}方案或技术咨询？</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            我们的专业技术团队可提供免费小试服务，根据您的实际需求定制最佳产品方案
          </p>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            联系我们获取方案
          </Link>
        </div>
      </section>
    </>
  );
}
