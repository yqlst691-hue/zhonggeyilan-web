import Link from 'next/link';
import Image from 'next/image';
import { companyContact } from '@/lib/contact';

export const metadata = {
  title: '关于我们',
  description: '了解河北中格一蓝环保科技有限公司 - 公司简介，发展历程、企业文化、核心团队与资质荣誉，致力于成为中国领先的环保科技企业。',
  canonical: 'https://www.zhonggeyilan.com/about',
};

export default function AboutPage() {
  return (
    <div>
      {/* 页面标题 */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 sm:py-20">
        <div className="container-main text-center">
          <div className="text-primary-light font-medium text-sm mb-3">公司简介</div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">专业·创新·可信赖的环保科技企业</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            {companyContact.name} - 致力于成为中国领先的环保科技企业
          </p>
        </div>
      </div>

      {/* 公司简介 */}
      <section className="container-main py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-primary-light font-medium text-sm mb-3">公司简介</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-5">专业·创新·可信赖的环保科技企业</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              {companyContact.name}成立于2015年，总部位于{companyContact.address.full}，是一家专注于污水处理药剂研发、生产及
              环保解决方案提供的综合性环保科技企业。
            </p>
            <p>
              公司核心产品包括污泥调理剂、复合碳源、生物除臭剂等，广泛应用于市政污水处理、工业废水处理、垃圾处理设施、
              水产养殖等多个领域。公司依托强大的研发实力和先进的生产工艺，为客户提供高效、稳定、环保的水处理药剂及
              全套技术解决方案。
            </p>
            <p>
              作为国家高新技术企业，公司拥有多项自主知识产权和核心技术，与多家科研院所建立合作关系，持续推动技术创新
              与产品升级。公司秉承"科技兴环保、服务创价值"的经营理念，致力于为客户创造更大的经济与环境效益。
            </p>
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="container-main">
          <div className="text-center mb-10">
            <div className="text-primary-light font-medium text-sm mb-3">发展历程</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark">砥砺前行，持续成长</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { year: '2015', title: '公司成立', desc: '在河北省成立，专注于污水处理药剂研发' },
                { year: '2018', title: '技术突破', desc: '自主研发的污泥调理剂技术取得重大突破' },
                { year: '2020', title: '产能扩张', desc: '建成现代化生产基地，年产能达5万吨' },
                { year: '2022', title: '创新发展', desc: '推出IES零碳渔业技术，进军生态养殖领域' },
                { year: '2024', title: '持续发展', desc: '服务客户超过500家，业务覆盖全国20+省份' },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-20 text-right">
                    <div className="text-primary font-bold text-lg">{item.year}</div>
                  </div>
                  <div className="relative pl-8 border-l-2 border-primary/20">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                    <div>
                      <h3 className="font-semibold text-dark mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 资质荣誉 */}
      <section className="container-main py-12 sm:py-16">
        <div className="text-center mb-10">
          <div className="text-primary-light font-medium text-sm mb-3">资质荣誉</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-dark">权威认证，品质保证</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: '🏆', title: 'ISO 9001', desc: '质量管理体系认证' },
            { icon: '🌿', title: 'ISO 14001', desc: '环境管理体系认证' },
            { icon: '⭐', title: '高新技术企业', desc: '国家级高新技术企业认证' },
            { icon: '🔬', title: '发明专利', desc: '多项自主研发专利' },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-dark mb-1">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 联系我们 */}
      <section className="bg-primary/5 py-12 sm:py-16">
        <div className="container-main">
          <div className="text-center mb-10">
            <div className="text-primary-light font-medium text-sm mb-3">联系我们</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark">期待与您合作</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: '📍', title: '公司地址', content: companyContact.address.full },
              { icon: '📞', title: '咨询电话', content: companyContact.phone },
              { icon: '📧', title: '邮箱地址', content: companyContact.email },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href={`tel:${companyContact.phone}`}
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-dark font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              立即咨询
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
