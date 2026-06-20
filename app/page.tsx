import type { Metadata } from 'next';
import Link from 'next/link';
import SectionContainer from '@/components/SectionContainer';
import SectionTitle from '@/components/SectionTitle';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts } from '@/lib/products';

export const metadata: Metadata = {
  title: '首页',
  description:
    '河北中格一蓝环保科技有限公司官网 - 专注污水处理药剂研发、IES零碳渔业技术及生态环保解决方案。',
  alternates: {
    canonical: 'https://www.zhonggeyilan.com',
  },
};

// 核心产品 —— 数据来源于 lib/products.ts（仅 featured=true 的产品）
const coreProducts = getFeaturedProducts();

const techAdvantages = [
  {
    icon: '🧪',
    title: '研发实力',
    description: '专业研发团队，自主知识产权，持续技术创新，产品迭代更新快速响应市场需求。',
  },
  {
    icon: '⚙️',
    title: '生产工艺',
    description: '现代化生产基地，严格质量管控，ISO体系认证保障，产品稳定可靠批次一致性强。',
  },
  {
    icon: '🌱',
    title: '环保理念',
    description: '绿色环保理念贯穿始终，产品生态友好无二次污染，助力客户实现可持续发展目标。',
  },
  {
    icon: '🤝',
    title: '服务体系',
    description: '售前技术咨询、售中方案定制、售后跟踪服务，7x24小时响应，专业团队全程保障。',
  },
];

const stats = [
  { number: '10+', label: '年行业经验' },
  { number: '500+', label: '服务客户' },
  { number: '50+', label: '发明专利' },
  { number: '99%', label: '客户满意度' },
];

const solutions = [
  {
    title: 'IES零碳渔业技术',
    description:
      '创新生态渔业解决方案，融合污水处理与渔业养殖，实现水产养殖零碳排放，打造循环经济新模式，实现经济效益与生态效益双赢。',
    features: ['零碳排放', '循环经济', '高产出高品质', '经济效益显著'],
    href: '/solutions/ies-zero-carbon-fishery',
    image: '/images/ies-fishery.jpg',
  },
];

const cases = [
  {
    title: '石家庄某市政污水处理厂提标改造项目',
    scale: '日处理量 10万吨',
    description:
      '采用我司污泥调理剂及复合碳源，配合工艺优化，成功实现出水指标由一级B提升至一级A标准，污泥脱水效率提升30%。',
    result: '出水稳定达标，运营成本降低15%',
  },
  {
    title: '河北某大型工业园区污水处理项目',
    scale: '日处理量 5万吨',
    description:
      '针对复杂工业废水特性定制专属药剂方案，高效去除COD、氨氮及总磷，配合生物除臭系统解决厂区异味问题。',
    result: '全指标达标排放，获环保部门通报表扬',
  },
  {
    title: '山东某水产养殖基地零碳改造项目',
    scale: '养殖水面 200亩',
    description:
      '引入IES零碳渔业技术系统，改造传统养殖模式为循环水生态养殖，实现养殖废水零排放与低碳运营。',
    result: '产量提升40%，年减排CO₂ 500吨',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark via-dark-light to-primary-dark text-white">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="container-main relative py-20 sm:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="max-w-xl">
              <div className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-full text-sm text-primary-light mb-6">
                🌊 专注环保 · 守护未来
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                专业污水处理药剂
                <span className="block text-primary-light">与生态解决方案服务商</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
                河北中格一蓝环保科技有限公司，专注于污泥调理剂、复合碳源、生物除臭剂等核心产品研发生产，
                创新IES零碳渔业技术，为客户提供一站式环保解决方案。
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
                >
                  了解产品
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/solutions/ies-zero-carbon-fishery"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-white/30 hover:border-white text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/10"
                >
                  零碳渔业方案
                </Link>
              </div>

              {/* 数据统计 - 移动端 */}
              <div className="mt-10 sm:mt-12 grid grid-cols-4 gap-4 sm:gap-6 lg:hidden">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary-light">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 右侧插图/数据统计 - 桌面端 */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="grid grid-cols-2 gap-5">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                      style={{
                        transform: index % 2 === 0 ? `translateY(${index === 0 ? '0' : '20px'})` : `translateY(${index === 1 ? '10px' : '30px'})`,
                      }}
                    >
                      <div className="text-4xl sm:text-5xl font-bold text-primary-light mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* 装饰性圆形 */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-light/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心产品 */}
      <SectionContainer className="bg-white">
        <SectionTitle
          title="核心产品"
          subtitle="三大系列污水处理药剂，覆盖市政与工业污水处理全流程，助力客户实现高效、稳定、低成本运营"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {coreProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </SectionContainer>

      {/* 技术优势 */}
      <SectionContainer className="bg-gray-50">
        <div className="container-main -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="技术优势"
            subtitle="以技术创新为核心驱动力，四大核心优势构建全方位服务能力，为客户创造持久价值"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {techAdvantages.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-5 bg-primary/5 rounded-2xl flex items-center justify-center text-4xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <span className="group-hover:grayscale group-hover:brightness-200">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* IES零碳渔业解决方案 */}
      <SectionContainer className="bg-white">
        <div className="container-main -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="创新解决方案"
            subtitle="融合前沿技术与环保理念，为客户提供高附加值的创新解决方案"
          />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-100">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                核心技术
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-4">
                IES零碳渔业技术
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                创新生态渔业解决方案，融合污水处理与渔业养殖，实现水产养殖零碳排放，
                打造循环经济新模式，实现经济效益与生态效益双赢。
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {solutions[0].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg
                      className="w-4 h-4 text-primary flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
              <Link
                href={solutions[0].href}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-300"
              >
                了解详细方案
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={solutions[0].image}
                  alt={solutions[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 工程案例概览 */}
      <SectionContainer className="bg-gray-50">
        <div className="container-main -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="典型工程案例"
            subtitle="丰富的行业经验与成功项目积淀，助力客户实现环保目标"
          />
          <div className="space-y-6">
            {cases.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
                  <div className="flex-shrink-0 lg:w-80">
                    <div className="text-xs text-primary-light font-medium mb-2">案例 {index + 1}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-dark mb-2">{item.title}</h3>
                    <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                      {item.scale}
                    </div>
                  </div>
                  <div className="flex-1 border-t lg:border-t-0 lg:border-l border-gray-100 pt-4 lg:pt-0 lg:pl-8">
                    <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary text-sm rounded-lg font-medium">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {item.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/cases" className="btn-secondary">
              查看更多案例
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </SectionContainer>

      {/* CTA 行动召唤 */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-main py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              专业团队为您提供定制化环保解决方案
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8">
              无论是污水处理药剂采购、工艺优化咨询，还是零碳渔业项目合作，
              我们的技术团队随时准备为您提供专业支持。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                联系我们
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-white/40 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                常见问题
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
