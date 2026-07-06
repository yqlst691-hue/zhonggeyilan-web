// ============================================================
// 产品中心数据 —— 企业全部产品统一管理入口
//
// featured = true  → 首页重点展示（精选拳头产品）
// featured = false → 产品中心列表展示（全部产品）
// 所有产品均有详情页，不区分是否 featured
//
// 更换/新增产品只需在此文件修改数据，全站页面自动更新
// ============================================================

export interface ProductItem {
  /** URL slug，如 sludge-conditioner，详情页地址为 /products/{slug} */
  slug: string;
  /** 产品名称 */
  title: string;
  /** 产品分类（如"新型环保药剂"、"水处理耗材"） */
  category: string;
  /** 是否在首页重点展示（精选拳头产品） */
  featured: boolean;
  /** 产品卡片描述（列表页用） */
  summary: string;
  /** 产品卡片卖点列表 */
  features: string[];
  /** 产品图片路径 */
  image: string;
  /** 详情页 hero 副标题 */
  heroSubtitle: string;
  /** 产品概述标题 */
  outlineTitle: string;
  /** 产品概述正文段落 */
  outlineText: string[];
  /** 关键指标数据 */
  metrics: { num: string; label: string }[];
  /** 产品核心优势 */
  advantages: { title: string; desc: string }[];
  /** 产品技术参数 */
  specifications: { label: string; value: string }[];
  /** 应用领域 */
  applications: { title: string; desc: string }[];
  /** 使用方法步骤 */
  usageSteps: { step: string; title: string; desc: string }[];
  /** SEO 配置 */
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
}

// ------------------------------------------------------------
// 全部产品列表
// featured: true  → 首页重点展示（新型环保药剂拳头产品）
// featured: false → 产品中心列表展示（全部产品均有详情页）
// ------------------------------------------------------------
export const products: ProductItem[] = [
  // ========== 重点展示产品（featured: true）============
  {
    slug: 'composite-purifier',
    title: '复合净化剂',
    category: '新型环保药剂',
    featured: true,
    summary:
      '集絮凝、氧化断链、除臭于一体的新型絮凝剂，对水体无二次污染，可替代芬顿、铁炭微电解等传统工艺，广泛应用于高浓度污水预处理、气浮絮凝、终端脱色及黑臭水体治理。',
    features: ['絮凝+氧化断链', '替代芬顿工艺', '终端脱色除COD', '黑臭水体治理'],
    image: '/images/product-purifier.svg',
    heroSubtitle: '集絮凝、氧化断链、除臭于一体的新型环保药剂，替代芬顿、臭氧等传统工艺，对水体无二次污染',
    outlineTitle: '革命性的多功能复合净化剂',
    outlineText: [
      '中格一蓝复合净化剂是一种集絮凝、氧化断链、除臭作用为一体的新型环保药剂，对水体无二次污染。通过药剂的吸附性，将水中的悬浮物聚集形成沉淀，不仅保留了絮凝剂能絮凝的净化优势，还能提供氧化作用去除COD，起到净化水体的作用。',
      '药物的氧化性能，使污水中溶于水的长链大分子污染物直接絮凝沉淀，或者断链为不溶性的短链小分子物质从水中析出，小分子污染物直接被氧化去除。在制革和制药行业也可以广泛应用，将大分子的有机污染物断链，形成不溶于水的絮团，从污水中分离出来降低污水处理成本，提高污水处理效果。',
    ],
    metrics: [
      { num: '三合一', label: '絮凝+氧化+除臭' },
      { num: '替代', label: '芬顿/微电解/臭氧' },
      { num: '全pH', label: '除臭有效范围' },
    ],
    advantages: [
      { title: '多功能一体', desc: '集絮凝、氧化断链、除臭三重作用于一体，一种药剂解决多种水质问题' },
      { title: '替代传统工艺', desc: '可替代芬顿、铁炭微电解、臭氧等高成本工艺，大幅降低运行费用' },
      { title: '氧化断链去COD', desc: '将长链大分子污染物断链为不溶性短链小分子析出去除，有效降低COD' },
      { title: '无二次污染', desc: '对水体无二次污染，全pH值范围内均具有显著除臭效果' },
    ],
    specifications: [
      { label: '产品类型', value: '无机复合净化剂' },
      { label: '作用机理', value: '絮凝+氧化断链+吸附' },
      { label: '适用pH范围', value: '全pH值范围有效' },
      { label: '二次污染', value: '无' },
      { label: '储存条件', value: '阴凉干燥处保存' },
      { label: '保质期', value: '12个月' },
    ],
    applications: [
      { title: '高浓度污水预处理', desc: '适用于制革、制药、焦化、印染等有机化工行业的高浓度污水预处理，替代芬顿和铁炭微电解工艺' },
      { title: '气浮絮凝', desc: '作为气浮工艺中的絮凝剂替代PAC，兼具絮凝和断链去除COD双重作用' },
      { title: '终端脱色与COD达标', desc: '用于污水终端处理，替代臭氧、芬顿等工艺实现COD达标和终端脱色，特别适用于焦化废水和印染废水' },
      { title: '黑臭水体治理', desc: '集絮凝、微生物细胞破壁吸附、除臭于一体，有效去除硫化氢、甲硫醇、氨气等恶臭物质' },
    ],
    usageSteps: [
      { step: '1', title: '水质分析', desc: '对处理水样进行水质分析，确定主要污染物类型和浓度，制定针对性投加方案。' },
      { step: '2', title: '小试确定用量', desc: '取水样进行小试，确定最佳投加量，不同应用场景投加量不同，可提供免费小试服务。' },
      { step: '3', title: '投加位置', desc: '根据应用场景选择投加位置：预处理段投加于调节池、气浮段替代PAC、终端深度处理段投加于反应池。' },
      { step: '4', title: '效果监测', desc: '投加后持续监测COD、色度、臭味等指标，根据处理效果适时调整投加量，确保稳定达标。' },
    ],
    seo: {
      title: '复合净化剂',
      description: '中格一蓝复合净化剂 - 集絮凝、氧化断链、除臭于一体的新型环保药剂，替代芬顿、臭氧等传统工艺，适用于高浓度污水预处理、终端脱色及黑臭水体治理。',
      canonical: 'https://www.zhonggeyilan.com/products/composite-purifier',
    },
  },
  {
    slug: 'membrane-evaporation-enhancer',
    title: '膜蒸发器增效剂',
    category: '新型环保药剂',
    featured: true,
    summary:
      '专为含高沸点有机物的高盐污水蒸发浓缩工艺设计，蒸发前将高沸点有机物从污水中分离，大幅降低蒸发器堵塞频次，减少蒸发残余液体危废总量，降低危废处理费用。',
    features: ['分离高沸点有机物', '减少蒸发器堵塞', '降低危废总量', '节省危废费用'],
    image: '/images/product-evaporation.svg',
    heroSubtitle: '高盐污水蒸发前处理增效剂，分离高沸点有机物，降低蒸发器堵塞和危废处理成本',
    outlineTitle: '蒸发浓缩工艺的降本增效利器',
    outlineText: [
      '中格一蓝膜蒸发器增效剂专为含高沸点有机物的高盐污水蒸发浓缩工艺而开发。在蒸发前，该药剂能将高沸点有机物从污水中有效分离，大大降低蒸发器堵塞的频次，减少蒸发残余液体危废的总量，从而显著降低危废处理费用。',
      '该产品解决了高盐废水蒸发处理中的核心难题——高沸点有机物导致的膜管堵塞和危废产量大，是蒸发浓缩工艺降本增效的关键助剂。',
    ],
    metrics: [
      { num: '大幅降低', label: '堵塞频次' },
      { num: '显著减少', label: '危废总量' },
      { num: '有效降低', label: '危废费用' },
    ],
    advantages: [
      { title: '前置分离', desc: '在蒸发前将高沸点有机物从污水中分离，从源头解决问题' },
      { title: '减少堵塞', desc: '大幅降低蒸发器膜管堵塞频次，延长设备运行周期' },
      { title: '减少危废', desc: '有效减少蒸发残余液体危废总量，降低危废处置费用' },
      { title: '工艺兼容', desc: '与现有蒸发浓缩工艺无缝衔接，无需改造设备即可使用' },
    ],
    specifications: [
      { label: '产品类型', value: '有机物分离增效剂' },
      { label: '适用工艺', value: 'MVR/多效蒸发浓缩工艺' },
      { label: '处理对象', value: '含高沸点有机物的高盐污水' },
      { label: '投加方式', value: '蒸发前预处理投加' },
      { label: '储存条件', value: '阴凉干燥处保存' },
      { label: '保质期', value: '12个月' },
    ],
    applications: [
      { title: '化工行业高盐废水', desc: '适用于含高沸点有机物的化工高盐废水蒸发浓缩处理' },
      { title: '制药行业废水', desc: '适用于制药行业含盐含有机物废水的蒸发处理' },
      { title: '煤化工废水', desc: '适用于煤化工行业高盐高有机物废水的深度处理' },
      { title: '农药行业废水', desc: '适用于农药行业含高沸点有机物的高盐废水处理' },
    ],
    usageSteps: [
      { step: '1', title: '水质检测', desc: '对蒸发进水进行有机物沸点和含量检测，确定高沸点有机物类型和浓度。' },
      { step: '2', title: '预处理投加', desc: '在蒸发器进水前投加增效剂，使高沸点有机物从污水中分离。' },
      { step: '3', title: '固液分离', desc: '投加后进行固液分离，去除分离出的有机物，降低进蒸发器的有机物含量。' },
      { step: '4', title: '蒸发运行', desc: '预处理后的污水进入蒸发器，运行周期显著延长，危废产量大幅降低。' },
    ],
    seo: {
      title: '膜蒸发器增效剂',
      description: '中格一蓝膜蒸发器增效剂 - 专为高盐污水蒸发浓缩工艺设计，蒸发前分离高沸点有机物，减少蒸发器堵塞和危废总量，降低处理费用。',
      canonical: 'https://www.zhonggeyilan.com/products/membrane-evaporation-enhancer',
    },
  },
  {
    slug: 'chelating-degradation-agent',
    title: '螯合降解剂',
    category: '新型环保药剂',
    featured: true,
    summary:
      '通过分子级精准捕捉正/偏磷酸根和氨基，高效去除总磷、总氮，生成易沉降的纳米级絮体，处理效果稳定可靠，适用于有机化工、医药、煤化工等多个行业。',
    features: ['分子级精准捕捉', '去除总磷总氮', '纳米级易沉降絮体', '多行业适用'],
    image: '/images/product-chelating.svg',
    heroSubtitle: '分子级精准捕捉磷酸根和氨基，高效去除总磷总氮，生成易沉降纳米级絮体',
    outlineTitle: '分子级精准去除总磷总氮的新型药剂',
    outlineText: [
      '中格一蓝螯合降解剂通过分子级精准捕捉正/偏磷酸根、氨基，实现总磷、总氮的高效去除，生成易沉降的纳米级絮体，确保处理效果稳定可靠。',
      '产品适用于有机化工、医药、煤化工等多个行业的含磷含氮废水处理，与传统化学沉淀法相比，具有反应速度快、去除效率高、絮体易沉降、效果稳定等显著优势。',
    ],
    metrics: [
      { num: '分子级', label: '精准捕捉' },
      { num: '纳米级', label: '易沉降絮体' },
      { num: '稳定', label: '处理效果' },
    ],
    advantages: [
      { title: '分子级精准', desc: '精准捕捉正/偏磷酸根和氨基，针对性强，去除效率高' },
      { title: '同步去磷氮', desc: '同时去除总磷和总氮，一种药剂解决两种污染物问题' },
      { title: '絮体易沉降', desc: '生成纳米级易沉降絮体，固液分离效果好，出水清澈' },
      { title: '效果稳定', desc: '处理效果稳定可靠，抗冲击负荷能力强，确保稳定达标排放' },
    ],
    specifications: [
      { label: '产品类型', value: '螯合降解剂' },
      { label: '作用机理', value: '分子级精准捕捉+螯合沉淀' },
      { label: '去除对象', value: '总磷（正/偏磷酸根）、总氮（氨基）' },
      { label: '絮体特性', value: '纳米级，易沉降' },
      { label: '储存条件', value: '阴凉干燥处保存' },
      { label: '保质期', value: '12个月' },
    ],
    applications: [
      { title: '有机化工行业', desc: '适用于有机化工行业含磷含氮废水的深度处理' },
      { title: '医药行业', desc: '适用于制药行业废水总磷总氮的去除和达标排放' },
      { title: '煤化工行业', desc: '适用于煤化工行业高磷高氮废水的处理' },
      { title: '精细化工行业', desc: '适用于精细化工行业含磷酸盐和氨基化合物的废水处理' },
    ],
    usageSteps: [
      { step: '1', title: '水质分析', desc: '检测废水中总磷、总氮浓度及磷酸根、氨基形态，确定处理方案。' },
      { step: '2', title: '小试确定用量', desc: '取水样进行小试，根据总磷总氮浓度确定最佳投加量，可提供免费小试服务。' },
      { step: '3', title: '投加反应', desc: '在反应池中投加螯合降解剂，搅拌反应生成纳米级易沉降絮体。' },
      { step: '4', title: '固液分离', desc: '反应后进行沉淀或气浮分离，出水检测总磷总氮指标，确保达标排放。' },
    ],
    seo: {
      title: '螯合降解剂',
      description: '中格一蓝螯合降解剂 - 分子级精准捕捉磷酸根和氨基，高效去除总磷总氮，生成易沉降纳米级絮体，适用于有机化工、医药、煤化工等行业。',
      canonical: 'https://www.zhonggeyilan.com/products/chelating-degradation-agent',
    },
  },
  {
    slug: 'sludge-conditioner',
    title: '污泥调理剂',
    category: '新型环保药剂',
    featured: true,
    summary:
      '新型破壁型污泥调理剂，通过微生物破壁释放细胞内水，实现高效污泥脱水。可用于污水厂污泥脱水和生物医药菌渣脱水，不掺加石灰即可稳定保证板框压滤机脱水污泥含水率低于60%。',
    features: ['微生物破壁脱水', '菌渣脱水专用', '免加石灰含水率<60%', '降低运行成本'],
    image: '/images/product-sludge.jpg',
    heroSubtitle: '新型破壁型污泥调理剂，微生物破壁释放细胞内水，免加石灰实现含水率低于60%',
    outlineTitle: '破壁型污泥调理剂，从根源解决脱水难题',
    outlineText: [
      '中格一蓝污泥调理剂是一种新型破壁型污泥脱水药剂。药物的破壁作用，使污泥中的微生物破壁释放出细胞内水，便于污泥挤压脱水。与传统药剂相比，可根据污水性状控制加药量从而控制药剂在水中的释放速度，使其缓慢释放或在适时立即释放。',
      '该产品可在不掺加石灰的情况下稳定保证板框压滤机脱水污泥含水率低于60%，既避免了石灰给污泥带来的增重，又降低了运行成本。同时还可减少有效成分的挥发、流失、生化分解等损失，增加药剂本身的稳定性，延长保质期，更易于储存及运输。',
    ],
    metrics: [
      { num: '<60%', label: '脱水含水率' },
      { num: '免石灰', label: '无需加石灰' },
      { num: '破壁', label: '释放细胞内水' },
    ],
    advantages: [
      { title: '破壁脱水', desc: '通过微生物破壁释放细胞内水，从根源解决污泥脱水难题' },
      { title: '免加石灰', desc: '不掺加石灰即可稳定保证板框压滤机脱水污泥含水率低于60%，避免增重' },
      { title: '可控释放', desc: '可根据污水性状控制药剂释放速度，缓慢释放或即时释放，灵活应对' },
      { title: '稳定长效', desc: '减少有效成分损失，增加药剂稳定性，延长保质期，易于储存运输' },
    ],
    specifications: [
      { label: '产品类型', value: '破壁型污泥调理剂' },
      { label: '核心机理', value: '微生物细胞破壁+内水释放' },
      { label: '适用脱水设备', value: '板框压滤机等' },
      { label: '脱水含水率', value: '< 60%（免加石灰）' },
      { label: '释放方式', value: '可控释放（缓释/即释）' },
      { label: '保质期', value: '优于传统药剂，更易储存' },
    ],
    applications: [
      { title: '生物医药菌渣脱水', desc: '用于生物制药厂菌渣脱水，破壁使微生物释放内水，大大减少菌渣总量，脱水后热值增高利于焚烧，降低焚烧燃料成本' },
      { title: '污水厂污泥脱水', desc: '用于市政及工业污水厂污泥脱水，免加石灰即可稳定保证含水率低于60%，避免石灰增重，降低运行成本' },
      { title: '制革行业污泥', desc: '适用于制革行业含有机物污泥的脱水处理' },
      { title: '化工行业污泥', desc: '适用于化工行业含油含杂的复杂污泥处理' },
    ],
    usageSteps: [
      { step: '1', title: '污泥性质分析', desc: '分析污泥来源、有机物含量、含水率等参数，确定调理方案和投加量。' },
      { step: '2', title: '投加调理', desc: '在污泥进入脱水设备前投加调理剂，使药剂与污泥充分混合，微生物破壁释放内水。' },
      { step: '3', title: '压滤脱水', desc: '调理后的污泥进入板框压滤机，无需添加石灰，稳定实现含水率低于60%。' },
      { step: '4', title: '后续处置', desc: '脱水后污泥减量效果显著，菌渣热值增高利于焚烧，降低后续处置成本。' },
    ],
    seo: {
      title: '污泥调理剂',
      description: '中格一蓝污泥调理剂 - 新型破壁型污泥脱水药剂，微生物破壁释放细胞内水，免加石灰实现含水率低于60%，适用于污水厂污泥和菌渣脱水。',
      canonical: 'https://www.zhonggeyilan.com/products/sludge-conditioner',
    },
  },

  // ========== 普通展示产品（featured: false）============
  {
    slug: 'composite-carbon-source',
    title: '复合碳源',
    category: '水处理药剂',
    featured: false,
    summary:
      '高效反硝化碳源药剂，为污水处理系统生物脱氮工艺提供优质可生物降解碳源，显著提高反硝化效率，降低系统运行成本。',
    features: ['高COD当量', '生物利用率高', '脱氮效果显著', '运行成本低'],
    image: '/images/product-carbon.jpg',
    heroSubtitle: '高效反硝化碳源药剂，为污水处理系统生物脱氮工艺提供优质碳源，显著提高总氮去除效率',
    outlineTitle: '专为生物脱氮工艺设计的高效复合碳源',
    outlineText: [
      '中格一蓝复合碳源是针对污水处理反硝化脱氮工艺开发的高效碳源产品，由多种小分子有机物复合而成，兼具快速可生化性和持续供碳能力。',
      '产品可广泛应用于市政污水处理厂及各类工业废水处理系统的AAO、A/O、SBR、MBR等生物脱氮工艺，在碳氮比不足的进水条件下，显著提升总氮去除效率。',
    ],
    metrics: [
      { num: '80万', label: 'COD mg/L' },
      { num: '20%+', label: '脱氮效率提升' },
      { num: '30%', label: '成本节省' },
    ],
    advantages: [
      { title: '高COD当量', desc: 'COD含量高达80万mg/L以上，单位体积有效碳源含量远超传统碳源' },
      { title: '生物利用快', desc: '独特配方易被反硝化菌利用，反硝化启动速度快，处理效率高' },
      { title: '脱氮效率高', desc: '相比乙酸钠等传统碳源，总氮去除效率提升20%以上' },
      { title: '运行成本低', desc: '综合性价比优越，有效降低污水处理系统运行成本' },
    ],
    specifications: [
      { label: '外观', value: '浅黄色至无色透明液体' },
      { label: 'COD含量', value: '≥ 800,000 mg/L' },
      { label: 'pH 值', value: '5.0 ~ 7.0' },
      { label: '密度（20℃）', value: '1.10 ~ 1.20 g/cm³' },
      { label: '粘度（25℃）', value: '≤ 50 mPa·s' },
      { label: '保质期', value: '常温下12个月' },
    ],
    applications: [
      { title: '市政污水厂提标改造', desc: '针对市政污水处理厂提标至一级A及更高排放标准，提供高效碳源补充方案' },
      { title: '工业废水脱氮处理', desc: '适用于化工、制药、食品等行业废水脱氮处理，高效去除总氮' },
      { title: '低温季节稳定运行', desc: '在冬季低温条件下仍保持良好的生物可利用性，保障系统稳定达标' },
    ],
    usageSteps: [
      { step: '1', title: '投加点', desc: '建议在厌氧池或缺氧池进水处投加，可根据系统实际情况选择单点或多点投加。' },
      { step: '2', title: '投加量', desc: '一般按去除1mg/L总氮补充4-6mg/L COD计算，具体投加量需根据系统碳氮比和小试结果确定。' },
      { step: '3', title: '投加方式', desc: '液态产品可直接原液投加或稀释后投加，使用计量泵精确控制投加量。' },
      { step: '4', title: '储存条件', desc: '建议在5-35℃阴凉处储存，避免阳光直射，未开封产品保质期12个月。' },
    ],
    seo: {
      title: '复合碳源',
      description: '中格一蓝复合碳源 - 高效反硝化碳源药剂，用于污水处理系统脱氮工艺，提高反硝化效率，降低运行成本。',
      canonical: 'https://www.zhonggeyilan.com/products/composite-carbon-source',
    },
  },
  {
    slug: 'bio-deodorant',
    title: '生物除臭剂',
    category: '水处理药剂',
    featured: false,
    summary:
      '采用复合微生物菌群技术，通过生物分解高效去除污水池、垃圾站、养殖场等场所产生的恶臭气体，安全环保无二次污染。',
    features: ['微生物分解原理', '高效除臭7天见效', '安全环保无毒', '使用方便易操作'],
    image: '/images/product-deodorant.jpg',
    heroSubtitle: '复合微生物菌群除臭技术，通过生物代谢从根源分解恶臭物质，安全环保无二次污染',
    outlineTitle: '微生物除臭技术，从根源解决异味问题',
    outlineText: [
      '中格一蓝生物除臭剂采用经过筛选驯化的多种有益微生物复合菌群，通过微生物代谢作用将恶臭物质分解转化为二氧化碳、水、硫酸盐等无害物质。',
      '与传统化学除臭剂相比，本产品具有安全无毒、无腐蚀性、不产生二次污染、效果持续稳定等显著优势，可广泛应用于各类产生恶臭气体的场所。',
    ],
    metrics: [
      { num: '95%+', label: 'H₂S去除率' },
      { num: '7天', label: '见效时间' },
      { num: '100%', label: '生物环保' },
    ],
    advantages: [
      { title: '生物分解原理', desc: '通过有益微生物菌群代谢分解恶臭物质，从根源消除异味，非化学掩盖' },
      { title: '高效除臭', desc: '对硫化氢、氨、硫醇等主要恶臭物质去除率高达90%以上，7天可见明显改善' },
      { title: '安全环保', desc: '纯生物制剂，无毒无害无腐蚀性，使用安全，对环境无二次污染' },
      { title: '持续长效', desc: '微生物在适宜环境可持续繁殖生长，一次投加可提供长效除臭效果' },
    ],
    specifications: [
      { label: '外观', value: '黄褐色至浅棕色液体' },
      { label: '有效活菌数', value: '≥ 1.0×10⁸ CFU/mL' },
      { label: 'pH 值', value: '5.5 ~ 7.5' },
      { label: '密度', value: '1.00 ~ 1.05 g/cm³' },
      { label: '适用温度', value: '5℃ ~ 45℃' },
      { label: '保质期', value: '常温下12个月' },
    ],
    applications: [
      { title: '污水处理厂', desc: '适用于初沉池、曝气池、污泥池、出水渠等各处理单元除臭' },
      { title: '垃圾处理设施', desc: '垃圾中转站、填埋场、焚烧厂的喷淋除臭和异味控制' },
      { title: '养殖场', desc: '畜禽养殖场圈舍、粪污处理区的空气净化和异味消除' },
      { title: '工业企业', desc: '化工、制药、食品加工等行业生产车间及废水处理站除臭' },
    ],
    usageSteps: [
      { step: '1', title: '喷淋法', desc: '将产品按1:50-1:200比例稀释后，通过喷淋系统均匀喷洒于待处理区域表面。' },
      { step: '2', title: '投加法', desc: '将产品按比例直接投加至污水处理系统中，使微生物在系统内繁殖生长并发挥除臭作用。' },
      { step: '3', title: '雾化法', desc: '使用高压雾化设备将稀释后的产品均匀散布于空间空气中，快速消除空气异味。' },
    ],
    seo: {
      title: '生物除臭剂',
      description: '中格一蓝生物除臭剂 - 采用复合微生物菌群技术，高效去除污水池、垃圾站等恶臭气体，安全环保无二次污染。',
      canonical: 'https://www.zhonggeyilan.com/products/bio-deodorant',
    },
  },
  {
    slug: 'pac-coagulant',
    title: 'PAC聚合氯化铝',
    category: '水处理药剂',
    featured: false,
    summary:
      '高效无机高分子絮凝剂，通过压缩双电层和吸附架桥作用实现水中悬浮物和胶体快速凝聚沉降，广泛用于饮用水和工业废水处理。',
    features: ['高效絮凝沉降', '适用pH范围宽', '用量少成本低', '水温适应性强'],
    image: '/images/product-pac.svg',
    heroSubtitle: '高效无机高分子絮凝剂，通过压缩双电层和吸附架桥作用，实现水中悬浮物和胶体快速凝聚沉降',
    outlineTitle: '广泛应用于水处理领域的高效絮凝剂',
    outlineText: [
      '聚合氯化铝（PAC）是一种高效无机高分子混凝剂，通过铝盐在水溶液中水解聚合形成带正电荷的多核羟基络合物，能够有效中和水中带负电荷的胶体颗粒，使其失去稳定性而发生凝聚。',
      '与传统硫酸铝等絮凝剂相比，本品具有絮凝效果好、适用pH范围宽（4-11）、用量少、水温适应性强等显著优点，广泛应用于饮用水处理、市政污水处理和各类工业废水处理工艺。',
    ],
    metrics: [
      { num: '99%', label: '浊度去除率' },
      { num: '1/3', label: '用量仅为硫酸铝' },
      { num: '4-11', label: '适用pH范围' },
    ],
    advantages: [
      { title: '高效絮凝', desc: '絮凝效果好，矾花形成快而密实，沉降速度快，显著提升处理效率' },
      { title: '用量节省', desc: '同等效果下用量仅为传统硫酸铝的1/3，综合处理成本大幅降低' },
      { title: '适用pH宽', desc: '在pH 4-11范围内均能保持良好絮凝效果，抗冲击负荷能力强' },
      { title: '低温适应', desc: '水温低于10℃时仍能保持较好絮凝效果，适合北方地区使用' },
    ],
    specifications: [
      { label: '外观', value: '淡黄色至棕褐色粉末或颗粒' },
      { label: 'Al₂O₃含量', value: '≥ 28%' },
      { label: '盐基度', value: '60% ~ 95%' },
      { label: 'pH值（1%水溶液）', value: '3.5 ~ 5.0' },
      { label: '水不溶物', value: '≤ 1.5%' },
      { label: '保质期', value: '干燥阴凉处保存24个月' },
    ],
    applications: [
      { title: '饮用水处理', desc: '适用于自来水厂、饮用水处理设施的絮凝澄清处理' },
      { title: '市政污水处理', desc: '适用于城市污水处理厂一级强化处理和深度处理工艺段' },
      { title: '工业废水处理', desc: '适用于造纸、印染、化工、食品等行业的废水预处理' },
    ],
    usageSteps: [
      { step: '1', title: '溶解配制', desc: '将PAC粉末按1:3~1:5重量比加入常温清水中，充分搅拌溶解，配制成5%-10%的PAC溶液。' },
      { step: '2', title: '稀释投加', desc: '将配好的PAC溶液进一步稀释至1%-2%浓度，使用计量泵连续或间歇投加至混合反应池进口。' },
      { step: '3', title: '投加量控制', desc: '一般PAC投加量为5-100mg/L（以商品计），具体投加量根据原水浊度和处理要求通过烧杯试验确定。' },
      { step: '4', title: '配合使用', desc: '可与有机高分子絮凝剂（如PAM）配合使用，先投加PAC形成大颗粒絮体，再投加PAM进行网捕卷扫。' },
    ],
    seo: {
      title: 'PAC聚合氯化铝',
      description: '中格一蓝PAC聚合氯化铝 - 高效无机高分子絮凝剂，广泛用于饮用水和工业废水处理，絮凝效果好、用量少、成本低。',
      canonical: 'https://www.zhonggeyilan.com/products/pac-coagulant',
    },
  },
  {
    slug: 'pam-flocculant',
    title: 'PAM聚丙烯酰胺',
    category: '水处理药剂',
    featured: false,
    summary:
      '高效有机高分子絮凝剂，通过吸附架桥和网捕卷扫作用强化固液分离效果，适用于各类水处理工艺的污泥脱水和深度处理。',
    features: ['分子量范围宽', '适用多种行业', '污泥减量显著', '水质改善明显'],
    image: '/images/product-pam.svg',
    heroSubtitle: '高效有机高分子絮凝剂，通过吸附架桥强化固液分离，广泛用于污泥脱水和深度处理',
    outlineTitle: '各类水处理工艺的理想絮凝助剂',
    outlineText: [
      '聚丙烯酰胺（PAM）是目前应用最广泛的有机高分子絮凝剂，根据离子类型可分为阴离子型、阳离子型和非离子型三大类。我司可根据客户的水质特点和处理要求，推荐最合适的产品型号和使用方案。',
      '产品具有分子量范围宽、溶解性好、絮凝效果显著等特点，在污泥脱水、工业废水深度处理、饮用水处理等领域均有广泛应用。',
    ],
    metrics: [
      { num: '3000万', label: '阳离子分子量可选' },
      { num: '95%+', label: '固液分离效率' },
      { num: '40%', label: '减少用药量' },
    ],
    advantages: [
      { title: '型号齐全', desc: '涵盖阴离子、阳离子、非离子全系列，分子量从300万到3000万，可根据水质精准选型' },
      { title: '高效絮凝', desc: '通过吸附架桥和网捕卷扫双重作用，显著提升固液分离效果' },
      { title: '适用广泛', desc: '适用于市政污水、工业废水、饮用水、造纸废水等各类水处理场景' },
      { title: '溶解性好', desc: '采用先进造粒工艺，溶解速度快（15-30分钟完全溶解），利用率高' },
    ],
    specifications: [
      { label: '外观', value: '白色粉末或颗粒' },
      { label: '离子类型', value: '阴离子/阳离子/非离子' },
      { label: '分子量', value: '300万 ~ 3000万' },
      { label: '固含量', value: '≥ 88%' },
      { label: '溶解时间', value: '15 ~ 30 min' },
      { label: '保质期', value: '阴凉干燥处保存24个月' },
    ],
    applications: [
      { title: '污泥脱水', desc: '与调理剂配合使用，显著提升污泥絮凝效果和脱水效率' },
      { title: '工业废水处理', desc: '适用于造纸、印染、化工、食品等行业废水的深度处理' },
      { title: '饮用水处理', desc: '作为助凝剂与PAC配合使用，提高水质净化效果' },
    ],
    usageSteps: [
      { step: '1', title: '溶解配制', desc: '将PAM粉末缓慢撒入搅拌中的清水中（建议浓度0.1%-0.5%），搅拌15-30分钟至完全溶解。' },
      { step: '2', title: '稀释投加', desc: '将配好的溶液进一步稀释至0.05%-0.1%浓度后使用，稀释液建议当天用完。' },
      { step: '3', title: '投加点', desc: '建议在混合反应池入口处投加，与原水充分混合后进入沉淀或过滤区。' },
      { step: '4', title: '型号选择', desc: '需根据水质电荷性质（阳离子电荷量）和处理要求选择合适型号，建议通过小试确定。' },
    ],
    seo: {
      title: 'PAM聚丙烯酰胺',
      description: '中格一蓝PAM聚丙烯酰胺絮凝剂 - 阴离子/阳离子/非离子系列，适用于污泥脱水、工业废水处理、饮用水净化，型号齐全，品质稳定。',
      canonical: 'https://www.zhonggeyilan.com/products/pam-flocculant',
    },
  },
  {
    slug: 'dosing-equipment',
    title: '全自动加药设备',
    category: '水处理设备',
    featured: false,
    summary:
      '智能化全自动加药系统，实现药剂的精准配制和自动投加，大幅降低人工操作成本，提高药剂使用效率和污水处理效果。',
    features: ['全自动控制', '精准投加', '远程监控', '维护简便'],
    image: '/images/product-dosing.svg',
    heroSubtitle: '智能化全自动加药系统，实现药剂精准配制与自动投加，降低人工成本，提高处理效率',
    outlineTitle: '智能化加药设备助力污水处理自动化升级',
    outlineText: [
      '全自动加药设备是我司针对污水处理厂加药环节开发的高度智能化设备，集药剂溶解、配制、投加和自动控制于一体，可实现无人值守的全自动运行。',
      '设备可与我司污泥调理剂、复合净化剂、螯合降解剂等各类液体药剂配合使用，根据水质参数自动调节投加量，大幅提高药剂使用效率和污水处理效果稳定性。',
    ],
    metrics: [
      { num: '±3%', label: '投加精度' },
      { num: '50%', label: '节省人工' },
      { num: '24h', label: '全自动运行' },
    ],
    advantages: [
      { title: '全自动控制', desc: 'PLC智能控制，根据水质参数自动调节投加量，实现精准加药' },
      { title: '投加精准', desc: '采用高精度计量泵，投加精度误差控制在±3%以内' },
      { title: '远程监控', desc: '支持4G/以太网远程监控，手机APP实时查看运行状态和参数' },
      { title: '维护简便', desc: '模块化设计，日常维护仅需定期清洗过滤器和补充药剂' },
    ],
    specifications: [
      { label: '适用药剂', value: '各类液体药剂（粘度≤500 mPa·s）' },
      { label: '加药能力', value: '单套5-500 L/h（可选多套组合）' },
      { label: '配制浓度', value: '0.1%-10%（可调）' },
      { label: '控制方式', value: 'PLC+触摸屏/远程SCADA' },
      { label: '电源要求', value: '380V/50Hz，三相四线制' },
      { label: '设备材质', value: '304不锈钢（药箱）/ PVC（管路）' },
    ],
    applications: [
      { title: '市政污水处理厂', desc: '用于复合净化剂、碳源、消毒剂等各类药剂的自动投加' },
      { title: '工业废水处理站', desc: '适用于电镀、化工、制药等行业废水的加药处理' },
      { title: '自来水厂', desc: '用于混凝剂、消毒剂的精确投加' },
      { title: '循环冷却水系统', desc: '用于阻垢剂、缓蚀剂、杀菌剂的自动投加' },
    ],
    usageSteps: [
      { step: '1', title: '安装调试', desc: '设备运抵现场后，由我司工程师完成安装、管道连接和控制系统调试。' },
      { step: '2', title: '参数设置', desc: '根据实际处理量和药剂浓度要求，在触摸屏或远程平台设置运行参数。' },
      { step: '3', title: '自动运行', desc: '设备按设定参数全自动运行，药剂液位低时自动报警提示补充。' },
      { step: '4', title: '运行维护', desc: '每月定期检查计量泵、管路和控制系统，确保设备长期稳定运行。' },
    ],
    seo: {
      title: '全自动加药设备',
      description: '中格一蓝全自动加药设备 - 智能化PLC控制加药系统，用于复合净化剂、碳源等药剂的精准自动投加，支持远程监控。',
      canonical: 'https://www.zhonggeyilan.com/products/dosing-equipment',
    },
  },
];

// ============================================================
// 工具函数 —— 供各页面调用
// ============================================================

/**
 * 获取首页重点展示产品（featured: true）
 */
export function getFeaturedProducts() {
  return products.filter((p) => p.featured).map((p) => ({
    title: p.title,
    description: p.summary,
    href: `/products/${p.slug}`,
    features: p.features,
    image: p.image,
  }));
}

/**
 * 获取全部产品列表（含分类信息，供产品中心列表页使用）
 */
export function getAllProductsForList() {
  return products.map((p) => ({
    title: p.title,
    slug: p.slug,
    category: p.category,
    featured: p.featured,
    description: p.summary,
    href: `/products/${p.slug}`,
    features: p.features,
    image: p.image,
  }));
}

/**
 * 根据 slug 获取产品详情（供详情页使用）
 */
export function getProductBySlug(slug: string): ProductItem | undefined {
  return products.find((p) => p.slug === slug);
}

/**
 * 获取所有产品的 slug 列表（供 Next.js 静态路由生成）
 */
export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

/**
 * 获取产品导航项（供 Header 下拉菜单使用）
 * 默认仅展示 featured 产品，避免下拉菜单过长
 */
export function getProductNavItems(options?: { featuredOnly?: boolean }) {
  const list = options?.featuredOnly !== false
    ? products.filter((p) => p.featured)
    : products;
  return list.map((p) => ({
    name: p.title,
    href: `/products/${p.slug}`,
  }));
}

/**
 * 获取产品分类列表（去重）
 */
export function getProductCategories(): string[] {
  return [...new Set(products.map((p) => p.category))];
}
