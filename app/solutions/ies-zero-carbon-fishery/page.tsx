import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionContainer from '@/components/SectionContainer';

export const metadata: Metadata = {
  title: 'IES零碳渔业技术',
  description:
    '中格一蓝IES零碳渔业技术 - 创新生态渔业解决方案，融合污水处理与渔业养殖，实现水产养殖零碳排放，打造循环经济新模式。',
  alternates: {
    canonical: 'https://www.zhonggeyilan.com/solutions/ies-zero-carbon-fishery',
  },
};

const coreValues = [
  { icon: '♻️', title: '零碳循环', desc: '构建闭环生态系统，实现养殖废弃物资源化利用，二氧化碳近零排放' },
  { icon: '💧', title: '节水环保', desc: '循环水养殖系统，水资源利用率提升90%，无尾水排放污染环境' },
  { icon: '🐟', title: '高品质产出', desc: '可控生态环境养殖，品质稳定可追溯，食品安全等级高，产品溢价能力强' },
  { icon: '💰', title: '经济效益', desc: '多重收益模式（养殖产品+碳积分+观光体验），提升投资回报率' },
];

export default function IESZeroCarbonFisheryPage() {
  return (
    <>
      <PageHero
        title="IES零碳渔业技术"
        subtitle="融合污水处理与现代渔业养殖技术的创新生态渔业解决方案，实现零碳排放、水资源循环利用、高品质产出的新型水产养殖模式"
      />

      {/* 方案概述 */}
      <SectionContainer className="bg-white">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="text-primary-light font-medium text-sm mb-3">创新解决方案</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-5">
              重新定义水产养殖的未来
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              IES零碳渔业技术是中格一蓝环保科技自主研发的创新生态渔业解决方案，
              深度融合污水处理技术、微生物调控技术、循环水养殖技术于一体。
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              通过构建完整的闭环生态系统，实现养殖废水的原位资源化处理和循环利用，
              大幅降低能源消耗与碳排放，同时保障高品质水产品的稳定产出，
              为水产养殖业绿色转型提供全新技术路径。
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8">
              {[
                { value: '0', label: '碳排放' },
                { value: '90%', label: '水资源节约' },
                { value: '40%', label: '产量提升' },
                { value: '50%', label: '运营成本节约' },
              ].map((item, index) => (
                <div key={index} className="text-center bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{item.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gray-100">
            <img
              src="/images/ies-fishery.jpg"
              alt="IES零碳渔业技术"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </SectionContainer>

      {/* 核心技术 */}
      <SectionContainer className="bg-gray-50">
        <div className="container-main -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-4">核心技术体系</h2>
            <p className="text-gray-500">三大核心技术模块，构建完整的零碳渔业生态系统</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: '高效养殖废水处理技术',
                desc: '采用复合微生物处理工艺，高效去除养殖废水中的氨氮、亚硝酸盐、有机物等污染物，实现水质原位净化和循环利用',
                features: ['微生物强化技术', '高效固液分离', '水质实时监测'],
              },
              {
                title: '循环水智能养殖系统',
                desc: '集成水温、溶氧、pH、水质等多参数实时监测和智能控制，为养殖对象创造最佳生长环境，提升养殖效率和产品品质',
                features: ['智能水质调控', '精准投喂系统', '环境数据追溯'],
              },
              {
                title: '零碳能源与资源管理',
                desc: '集成可再生能源利用系统和余热回收技术，优化能源结构，同时实现养殖废弃物的资源化利用，大幅降低碳排放强度',
                features: ['可再生能源集成', '余热回收利用', '废物资源化处理'],
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 核心价值 */}
      <SectionContainer className="bg-white">
        <div className="container-main -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-4">核心价值优势</h2>
            <p className="text-gray-500">相比传统养殖模式的全方位提升</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 应用场景 */}
      <SectionContainer className="bg-gray-50">
        <div className="container-main -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-4">典型应用场景</h2>
            <p className="text-gray-500">适应多种养殖对象和规模</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: '高档水产养殖基地',
                desc: '适用于石斑鱼、对虾、海参等高档水产的工业化养殖生产，产品品质可控，市场溢价能力强。',
                scale: '单场规模5-50亩',
              },
              {
                title: '传统渔场绿色改造',
                desc: '对传统池塘养殖、网箱养殖等进行绿色改造，升级为循环水养殖模式，大幅提升产能和环保水平。',
                scale: '规模可大可小，灵活部署',
              },
              {
                title: '农业观光综合体',
                desc: '融合养殖、水处理、观光体验、科普教育功能于一体的综合项目，创造多元化收益来源。',
                scale: '综合项目10-200亩',
              },
              {
                title: '冷链食品加工园区',
                desc: '配套食品加工企业的原料供应基地，实现从养殖到加工的完整产业链，确保食品安全和品质稳定。',
                scale: '按需定制规模',
              },
              {
                title: '乡村振兴示范项目',
                desc: '结合当地资源条件，打造零碳渔业乡村振兴示范项目，带动村民增收和区域经济发展。',
                scale: '村级到镇级规模',
              },
              {
                title: '科研教育实践基地',
                desc: '为科研机构和高校提供现代化渔业研发平台，支持水产养殖、水处理、环境科学等领域研究。',
                scale: '研究级设施配置',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-primary font-bold mb-2">场景 {index + 1}</div>
                <h3 className="text-lg font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.desc}</p>
                <div className="text-xs text-primary bg-primary/5 rounded-lg px-3 py-2">
                  {item.scale}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 实施流程 */}
      <SectionContainer className="bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-4">标准实施流程</h2>
            <p className="text-gray-500">专业团队全程服务，确保项目落地效果</p>
          </div>
          <div className="space-y-6">
            {[
              {
                step: '01',
                title: '项目勘察与方案设计',
                desc: '专业技术团队现场勘察，根据场地条件、养殖对象、市场定位等因素，提供个性化技术方案和经济可行性分析。',
              },
              {
                step: '02',
                title: '工程设计与设备采购',
                desc: '进行详细工程设计，优选采购核心设备和材料，确保系统配置科学合理、性能稳定可靠、投资性价比最优。',
              },
              {
                step: '03',
                title: '施工建设与系统集成',
                desc: '专业工程团队按图施工，完成系统集成和调试，确保各子系统协调运行，达到设计技术指标。',
              },
              {
                step: '04',
                title: '试运营与技术培训',
                desc: '协助完成试生产和运营优化，为运营团队提供系统操作、日常维护、应急处理等全方位技术培训。',
              },
              {
                step: '05',
                title: '长期运营技术支持',
                desc: '提供持续的技术咨询、定期回访和系统升级服务，随时响应运营过程中的各类技术需求。',
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                <div className="flex-shrink-0 w-20 h-20 bg-primary text-white rounded-2xl flex flex-col items-center justify-center">
                  <div className="text-2xl font-bold">{item.step}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-main py-14 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">计划启动零碳渔业项目？</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            我们的专业团队可以为您提供免费的项目评估和技术咨询，帮助您规划最佳的投资方案和技术路线
          </p>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            联系我们预约项目咨询
          </Link>
        </div>
      </section>
    </>
  );
}
