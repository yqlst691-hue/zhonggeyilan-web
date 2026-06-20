import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionContainer from '@/components/SectionContainer';
import { companyContact } from '@/lib/contact';

export const metadata: Metadata = {
  title: '常见问题',
  description:
    '中格一蓝环保常见问题解答 - 关于污水处理药剂、IES零碳渔业技术、产品使用方法，合作流程等常见问题的详细解答。',
  alternates: {
    canonical: 'https://www.zhonggeyilan.com/faq',
  },
};

const faqItems = [
  {
    category: '产品相关',
    questions: [
      {
        q: '中格一蓝污泥调理剂与其他品牌产品相比有什么优势？',
        a: '我司污泥调理剂采用复合配方设计，具有以下核心优势：1）高效脱水，污泥含水率可降至60%以下；2）用量节省，相比传统药剂减少30-50%投加量；3）适用广泛，适配各类市政与工业污泥；4）液态产品，直接投加使用，操作方便。',
      },
      {
        q: '复合碳源主要用于什么场景？效果如何？',
        a: '复合碳源主要用于市政污水处理和工业废水处理的生物脱氮工艺，当系统进水碳氮比不足时通过补充外部碳源提高反硝化效率。我司产品COD含量高达80万mg/L，生物利用率高，总氮去除效率提升20%以上，综合运行成本低。',
      },
      {
        q: '生物除臭剂对人体和环境安全吗？',
        a: '我司生物除臭剂采用筛选驯化的有益微生物菌群，无毒无害，无腐蚀性，对人体、动物和植物安全可靠，使用过程不会产生二次污染，是环保的绿色除臭解决方案。',
      },
      {
        q: '贵司产品是否提供样品试用？',
        a: `是的，我们为意向客户提供免费样品试用服务，并可根据您的水质特征提供技术指导。如需样品，请联系我们的业务团队${companyContact.phone}或发送邮件至${companyContact.email}，我们将尽快为您安排。`,
      },
    ],
  },
  {
    category: '技术咨询',
    questions: [
      {
        q: '如何确定最佳的产品投加量？',
        a: '产品投加量需要根据您的系统进水水质、处理工艺、排放标准等因素综合确定。我们的技术团队可以提供免费的小试服务，通过实验室试验模拟您的系统工况，科学确定最佳产品类型和投加量，确保效果和经济性。',
      },
      {
        q: '使用过程中出现问题如何解决？',
        a: '我们提供全程技术支持服务：1）售前技术咨询与方案设计；2）售中现场调试指导与培训；3）售后定期回访与问题响应。遇到使用问题可随时拨打我们的技术服务热线，专业团队24小时内响应。',
      },
      {
        q: '是否可以根据我们的特殊水质定制产品？',
        a: '是的，我们提供定制化产品服务。针对特殊行业废水（如印染、化工、制药等）的特性，我们的研发团队可以定制配方，确保产品最佳效果。请联系我们的业务团队了解详情。',
      },
    ],
  },
  {
    category: '解决方案',
    questions: [
      {
        q: 'IES零碳渔业技术适用于哪些养殖对象？',
        a: 'IES零碳渔业技术适用于多种水产养殖品种，包括鱼类、虾类、蟹类、海参等。我们可以根据您的养殖品种和场地条件定制不同配置的循环水养殖系统，实现零排放、低碳、高效益的养殖模式。',
      },
      {
        q: '零碳渔业项目的投资规模和回报周期是多少？',
        a: '项目投资规模根据养殖面积、养殖品种、系统配置等因素差异较大，一般从数十万元到数百万元不等。投资回报方面，由于产量提升、节水节能和产品溢价，回报周期通常为2-4年。我们的团队可以为您提供详细的项目可行性分析和投资回报预测。',
      },
    ],
  },
  {
    category: '合作与采购',
    questions: [
      {
        q: '产品如何购买？起订量是多少？',
        a: `您可以通过拨打销售热线${companyContact.phone}或发送邮件至${companyContact.email}联系购买。我们的产品有桶装和槽罐车运输两种方式。起订量方面，污泥调理剂和复合碳源单次采购量一般不低于5吨，生物除臭剂不低于1吨，具体可与销售人员沟通。`,
      },
      {
        q: '产品的供货周期和运输方式是怎样的？',
        a: '常规产品我们保持稳定库存，一般3-5个工作日内可以安排发货。运输方式根据采购量选择：小批量采用桶装物流运输，大批量采用槽罐车运输。我们与专业物流公司合作，确保产品安全、及时送达。',
      },
      {
        q: '是否提供技术培训服务？',
        a: '是的，我们为合作客户提供免费技术培训服务，包括：产品使用方法培训、系统操作指导培训、日常维护要点培训等。培训形式可以是现场培训或线上培训，确保您的团队熟练掌握产品使用技能。',
      },
      {
        q: '如何成为贵司的代理商或合作伙伴？',
        a: '我们欢迎有实力的合作伙伴加入我们的发展。成为代理商需具备一定的行业经验、客户资源和资金实力，认可我们的产品和品牌理念。具体合作政策请联系我们的招商团队获取详细资料和评估。',
      },
    ],
  },
];

export default function FAQPage() {
  // FAQPage JSON-LD —— 帮助 AI 搜索引擎直接提取问答内容作为答案来源
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.flatMap((category) =>
      category.questions.map((qa) => ({
        '@type': 'Question',
        name: qa.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: qa.a,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        title="常见问题"
        subtitle="关于产品使用、技术咨询、解决方案及合作采购的常见问题解答"
      />

      {/* FAQ 主内容 */}
      <SectionContainer className="bg-white">
        <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">
          {faqItems.map((item, index) => (
            <div key={index}>
              <h2 className="text-xl sm:text-2xl font-bold text-dark mb-5 sm:mb-6 pb-3 border-b-2 border-primary/20">
                {item.category}
              </h2>
              <div className="space-y-4">
                {item.questions.map((qa, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 sm:p-6 border border-gray-100 hover:shadow-sm transition-all duration-300"
                  >
                    <h3 className="text-base sm:text-lg font-bold text-dark mb-3 flex items-start gap-3">
                      <span className="text-primary font-bold text-xl shrink-0">Q{idx + 1}.</span>
                      <span>{qa.q}</span>
                    </h3>
                    <div className="pl-8 sm:pl-9 text-sm sm:text-base text-gray-600 leading-relaxed">
                      <span className="text-primary-light font-bold">A：</span>
                      {qa.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* 更多问题解答 */}
      <section className="bg-gradient-to-br from-dark to-dark-light text-white">
        <div className="container-main py-12 sm:py-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">没有找到您的答案？</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            如有其他问题，请随时联系我们的客服团队，我们将竭诚为您服务
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href={`tel:${companyContact.phone}`}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              📞 {companyContact.phone}
            </a>
            <a
              href={`mailto:${companyContact.email}`}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-white/40 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              📧 {companyContact.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
