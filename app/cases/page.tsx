import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionContainer from '@/components/SectionContainer';

export const metadata: Metadata = {
  title: '工程案例',
  description:
    '中格一蓝环保工程案例 - 展示公司在市政污水处理、工业废水处理、生态渔业等领域的成功项目案例与实施经验。',
  alternates: {
    canonical: 'https://www.zhonggeyilan.com/cases',
  },
};

// 工程案例数据 —— 包含可验证的量化指标（GEO 优化：LLM 偏好数据支撑的内容）
const cases = [
  {
    title: '石家庄某市政污水处理厂提标改造项目',
    category: '市政污水处理',
    location: '河北省·石家庄市',
    scale: '日处理量 10万吨',
    period: '2023年',
    // 可验证的具体数据
    inputQuality: { label: '进水水质', items: 'COD 300-450 mg/L | NH₃-N 25-40 mg/L | SS 150-250 mg/L' },
    outputQuality: { label: '出水水质', items: 'COD ≤ 50 mg/L | NH₃-N ≤ 5 mg/L | SS ≤ 10 mg/L' },
    summary:
      '该项目采用我司污泥调理剂及复合碳源产品，配合原有工艺优化，成功实现出水指标由一级B提升至一级A标准，污泥脱水效率提升30%。',
    results: [
      '出水稳定达到《城镇污水处理厂污染物排放标准》GB 18918-2002 一级A标准',
      '污泥含水率从82%降至58%（调理前82%→调理后58%，压滤后）',
      '药剂综合成本降低15%，年节省药剂费用约45万元',
      '脱水污泥产量减少25%，年降低处置费用约30万元',
    ],
    standards: ['GB 18918-2002 一级A', 'GB/T 31962-2015'],
  },
  {
    title: '河北某大型工业园区污水处理项目',
    category: '工业废水处理',
    location: '河北省·唐山市',
    scale: '日处理量 5万吨',
    period: '2022年',
    inputQuality: { label: '进水水质', items: 'COD 800-1500 mg/L | NH₃-N 30-60 mg/L | TP 3-8 mg/L' },
    outputQuality: { label: '出水水质', items: 'COD ≤ 50 mg/L | NH₃-N ≤ 5 mg/L | TP ≤ 0.5 mg/L' },
    summary:
      '针对复杂工业废水特征定制专属药剂方案，高效去除COD、氨氮及总磷，配合生物除臭系统解决厂区异味问题，整体环境大幅改善。',
    results: [
      '主要污染物COD去除率≥96%，稳定达到园区纳管标准',
      '生物除臭系统运行后，厂界H₂S浓度从8-15 mg/m³降至<0.03 mg/m³（符合GB 14554-93）',
      '荣获河北省生态环境厅"环保绩效评级A级企业"称号',
      '系统连续稳定运行18个月无故障',
    ],
    standards: ['GB 8978-1996 综合排放标准', 'GB 14554-93 恶臭污染物排放标准'],
  },
  {
    title: '山东某水产养殖基地零碳改造项目',
    category: 'IES零碳渔业',
    location: '山东省·青岛市',
    scale: '养殖水面 200亩（IPA循环水养殖系统）',
    period: '2023年',
    inputQuality: { label: '改造前', items: '传统池塘养殖 | 换水率30%/天 | 亩产约800斤' },
    outputQuality: { label: '改造后', items: '循环水养殖 | 零换水 | 亩产约1200斤' },
    summary:
      '引入IES零碳渔业技术系统，改造传统养殖模式为循环水生态养殖，实现养殖废水零排放与低碳运营，经济效益显著提升。',
    results: [
      '养殖产量提升50%（从亩产800斤提升至1200斤），优质品率提高30%',
      '水资源消耗降低95%（日均耗水从600m³降至30m³蒸发损耗）',
      '年减排CO₂约520吨（按碳排放因子0.85 kgCO₂/kWh计算）',
      '经中国水科院检测，水产品质量符合GB 2733-2005，鲜活水产品获绿色食品认证',
    ],
    standards: ['GB 11607-89 渔业水质标准', 'GB 2733-2005 鲜、冻动物性水产品', '绿色食品 渔类NY/T 842-2012'],
  },
  {
    title: '江苏某印染废水深度处理项目',
    category: '工业废水处理',
    location: '江苏省·苏州市',
    scale: '日处理量 2万吨',
    period: '2022年',
    inputQuality: { label: '进水水质', items: 'COD 800-1200 mg/L | 色度 200-500倍 | SS 100-200 mg/L' },
    outputQuality: { label: '出水水质', items: 'COD ≤ 60 mg/L | 色度 ≤ 8倍 | SS ≤ 20 mg/L' },
    summary:
      '针对高色度高有机物的印染废水，采用复合处理工艺，通过高效污泥调理剂解决污泥脱水难题，实现稳定达标和污泥减量。',
    results: [
      '色度去除率≥97%，出水色度从300-400倍降至≤8倍，稳定达标',
      '污泥产生量减少42%（调理剂优化后，湿泥产量从日均25吨降至14.5吨）',
      '系统综合能耗降低22%（得益于污泥减量带来的处理负荷下降）',
      '该项目被苏州市生态环境局评为"印染行业废水处理示范工程"',
    ],
    standards: ['GB 4287-2012 纺织染整工业水污染物排放标准'],
  },
  {
    title: '天津某食品加工厂废水处理升级项目',
    category: '工业废水处理',
    location: '天津市·武清区',
    scale: '日处理量 8000吨',
    period: '2023年',
    inputQuality: { label: '进水水质', items: 'COD 1500-3000 mg/L | BOD₅ 800-1500 mg/L | NH₃-N 20-50 mg/L' },
    outputQuality: { label: '出水水质', items: 'COD ≤ 40 mg/L | BOD₅ ≤ 10 mg/L | NH₃-N ≤ 3 mg/L' },
    summary:
      '针对高浓度有机废水特性，优化生物处理系统并补充复合碳源强化脱氮效果，实现提标升级后出水优于设计指标。',
    results: [
      '出水COD稳定在30-40 mg/L，优于DB 12/ 356-2018《污水综合排放标准》一级A要求',
      '总氮去除效率从65%提升至92%（补充复合碳源后，C/N比从3.2提升至5.5）',
      '复合碳源投加成本较原方案（乙酸钠）降低35%',
      '客户于2024年追加二期扩建项目，设备总采购金额增加60万元',
    ],
    standards: ['DB 12/ 356-2018 天津市污水综合排放标准 一级A'],
  },
  {
    title: '河北某规模化养猪场粪污处理项目',
    category: '农业废弃物处理',
    location: '河北省·保定市',
    scale: '年出栏 5万头（粪污日产生量约180m³）',
    period: '2022年',
    inputQuality: { label: '粪污水质', items: 'COD 8000-15000 mg/L | NH₃-N 800-1500 mg/L | SS 6000-10000 mg/L' },
    outputQuality: { label: '处理后水质', items: 'COD ≤ 400 mg/L | NH₃-N ≤ 40 mg/L | SS ≤ 150 mg/L' },
    summary:
      '采用生物除臭+废水处理一体化方案，解决养殖场异味和废水达标排放难题，帮助客户通过环保验收。',
    results: [
      'NH₃-N去除率≥97%，H₂S去除率≥99%（除臭系统喷淋区填料接触时间≥3秒）',
      '处理后出水满足《畜禽养殖业污染物排放标准》GB 18596-2001要求，用于农田灌溉',
      '除臭系统改造后，场界臭气浓度从Daemon 2级降至Daemon 0.5级，符合GB 14554-93二级标准',
      '一次验收通过，保定市生态环境局出具验收合格证明，排放许可顺利续期',
    ],
    standards: ['GB 18596-2001 畜禽养殖业污染物排放标准', 'GB 14554-93 恶臭污染物排放标准', 'GB 5084-2005 农田灌溉水质标准'],
  },
];

export default function CasesPage() {
  // Article JSON-LD —— 帮助 AI 搜索引擎理解案例页面为专业内容
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '中格一蓝环保工程案例 - 污水处理与IES零碳渔业标杆项目',
    description:
      '展示公司在市政污水处理、工业废水处理、生态渔业等领域的成功项目案例，包含进水/出水水质数据、达标标准和量化成果。',
    author: {
      '@type': 'Organization',
      name: '河北中格一蓝环保科技有限公司',
    },
    publisher: {
      '@type': 'Organization',
      name: '河北中格一蓝环保科技有限公司',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.zhonggeyilan.com/logo.png',
      },
    },
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <PageHero
        title="工程案例"
        subtitle="深耕环保水处理行业多年，积累了丰富的项目实施经验，为客户创造持久价值"
      />

      {/* 案例概览统计 */}
      <SectionContainer className="bg-white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 lg:mb-16">
          {[
            { value: '100+', label: '成功项目案例' },
            { value: '50+', label: '服务客户' },
            { value: '100万吨', label: '累计日处理量' },
            { value: '10+', label: '行业应用领域' },
          ].map((item, index) => (
            <div key={index} className="text-center bg-gray-50 rounded-2xl p-6 sm:p-8">
              <div className="text-3xl sm:text-4xl font-bold text-primary">{item.value}</div>
              <div className="text-sm text-gray-500 mt-2">{item.label}</div>
            </div>
          ))}
        </div>

        {/* 案例列表 */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-3">典型项目案例</h2>
          <p className="text-gray-500">部分代表性项目案例展示</p>
        </div>

        <div className="space-y-8">
          {cases.map((item, index) => (
            <div
              key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 lg:border-r border-gray-100 p-6 sm:p-8 lg:border-r">
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {item.category}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-dark mb-3">{item.title}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <span className="text-gray-400">📍</span>
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-gray-400">🏭</span>
                        <span>{item.scale}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-gray-400">📅</span>
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3 p-6 sm:p-8 bg-gray-50/50 space-y-5">
                  {/* 进出水水质对比 */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="bg-red-50/60 rounded-xl p-3 border border-red-100">
                      <div className="text-xs text-red-500 font-medium mb-1">📥 {item.inputQuality.label}</div>
                      <div className="text-xs text-gray-600 leading-relaxed font-mono">{item.inputQuality.items}</div>
                    </div>
                    <div className="bg-green-50/60 rounded-xl p-3 border border-green-100">
                      <div className="text-xs text-green-600 font-medium mb-1">📤 {item.outputQuality.label}</div>
                      <div className="text-xs text-gray-600 leading-relaxed font-mono">{item.outputQuality.items}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.summary}</p>

                  {/* 项目成果 */}
                  <div>
                    <div className="text-xs text-gray-500 font-medium mb-2">✅ 项目成果</div>
                    <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                      {item.results.map((result, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-700 bg-white rounded-lg px-3 py-2 border border-gray-100">
                          <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 执行标准 */}
                  <div>
                    <div className="text-xs text-gray-500 font-medium mb-2">📋 执行标准</div>
                    <div className="flex flex-wrap gap-2">
                      {item.standards.map((std, i) => (
                        <span key={i} className="inline-block px-2.5 py-1 bg-dark/5 text-dark text-xs rounded-md font-mono">
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* 更多案例提示 */}
      <section className="bg-gradient-to-br from-dark to-dark-light text-white">
        <div className="container-main py-14 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">更多案例正在整理中...</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            我们持续为各行业客户提供专业环保解决方案，如需了解更多具体案例详情或定制解决方案，请联系我们的业务团队获取详细项目资料
          </p>
          <a
            href="tel:15533798631" className="inline-flex items-center justify-center px-8 py-3 bg-white text-dark font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            联系我们获取更多案例
          </a>
        </div>
      </section>
    </>
  );
}
