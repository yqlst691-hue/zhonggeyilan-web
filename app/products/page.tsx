import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionContainer from '@/components/SectionContainer';
import { getAllProductsForList, getProductCategories } from '@/lib/products';

export const metadata: Metadata = {
  title: '产品中心',
  description:
    '中格一蓝环保全系列水处理产品：污泥调理剂、复合碳源、生物除臭剂、PAC、PAM等污水处理药剂及加药设备，为客户提供一站式采购方案。',
  alternates: {
    canonical: 'https://www.zhonggeyilan.com/products',
  },
};

// 全部产品数据 —— 含 featured 标记和分类
const allProducts = getAllProductsForList();
const categories = getProductCategories();

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="产品中心"
        subtitle="全系列水处理产品，涵盖污水处理药剂、水处理耗材及智能设备，为客户提供一站式环保解决方案"
      />

      {/* 产品统计 */}
      <SectionContainer className="bg-white !py-8">
        <div className="container-main -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: allProducts.length, label: '产品总数' },
              { num: allProducts.filter((p) => p.featured).length, label: '重点推荐' },
              { num: categories.length, label: '产品分类' },
              { num: '24h', label: '技术支持' },
            ].map((item, i) => (
              <div key={i} className="text-center bg-gray-50 rounded-xl py-4 px-2">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{item.num}</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 全部产品列表 */}
      <SectionContainer className="bg-gray-50">
        <div className="container-main -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-3">全系列水处理产品</h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
              从污水处理药剂到智能设备，为客户提供覆盖全流程的一站式产品与解决方案
            </p>
          </div>

          {/* 全部产品卡片网格 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allProducts.map((product) => (
              <Link
                key={product.slug}
                href={product.href}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
              >
                {/* 产品图片 */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* 分类标签 */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-1 bg-white/90 text-gray-700 text-xs font-medium rounded-full shadow-sm">
                      {product.category}
                    </span>
                  </div>
                  {/* 重点推荐角标 */}
                  {product.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-block px-2.5 py-1 bg-primary text-white text-xs font-medium rounded-full shadow-sm">
                        ⭐ 重点推荐
                      </span>
                    </div>
                  )}
                </div>

                {/* 产品信息 */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                    {product.description}
                  </p>
                  {/* 卖点标签 */}
                  <ul className="space-y-1.5 mb-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* 底部链接 */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-400">查看详情</span>
                    <span className="text-primary text-sm font-medium group-hover:underline">
                      了解详情 →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* 产品分类说明 */}
          <div className="mt-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-100">
            <h3 className="text-lg font-bold text-dark mb-4 text-center">产品分类说明</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((cat) => {
                const catProducts = allProducts.filter((p) => p.category === cat);
                return (
                  <div key={cat} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-lg font-bold shrink-0">
                      {catProducts.length}
                    </div>
                    <div>
                      <div className="font-medium text-dark text-sm mb-0.5">{cat}</div>
                      <div className="text-xs text-gray-500">
                        {catProducts.map((p) => p.title).join('、')}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-main py-12 sm:py-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">需要专业选型建议？</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            我们的技术团队可根据您的水质特点和处理要求，为您推荐最合适的产品组合和投加方案，提供免费小试服务
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
