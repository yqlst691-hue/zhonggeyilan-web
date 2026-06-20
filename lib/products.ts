// ============================================================
// 产品中心数据 —— 企业全部产品统一管理入口
//
// featured = true  → 首页重点展示（精选6个拳头产品）
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
  /** 产品分类（如"污水处理药剂"、"水处理耗材"） */
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
// featured: true  → 首页重点展示（当前精选6个拳头产品）
// featured: false → 产品中心列表展示（全部产品均有详情页）
// ------------------------------------------------------------
export const products: ProductItem[] = [
  // ========== 重点展示产品（featured: true）============
  {
    slug: 'sludge-conditioner',
    title: '污泥调理剂',
    category: '污水处理药剂',
    featured: true,
    summary:
      '高效污泥脱水处理药剂，通过化学改性显著改善污泥脱水性能，降低污泥含水率，提升污泥减量效果，适用于各类市政及工业污水处理系统。',
    features: ['快速破乳脱水', '降低污泥含水率', '改善污泥压缩性能', '适用范围广泛'],
    image: '/images/product-sludge.jpg',
    heroSubtitle: '高效污泥脱水处理药剂，显著降低污泥含水率，提升污泥减量效果，降低后续处置成本',
    outlineTitle: '专为高效污泥脱水设计的化学调理剂',
    outlineText: [
      '中格一蓝污泥调理剂是一种复合配方的高效污泥脱水助剂，通过特殊化学作用改变污泥颗粒表面电荷性质，破坏污泥胶体稳定性，使污泥颗粒易于凝聚脱水。',
      '产品广泛应用于各类市政污水处理厂和工业废水处理系统，可与板框压滤机、带式压滤机、离心脱水机等各类脱水设备配合使用，实现卓越的污泥脱水效果。',
    ],
    metrics: [
      { num: '60%', label: '以下含水率' },
      { num: '50%', label: '药剂节省' },
      { num: '30%', label: '效率提升' },
    ],
    advantages: [
      { title: '高效脱水', desc: '显著改善污泥脱水性能，可将污泥含水率从80%以上降至60%以下' },
      { title: '用量节省', desc: '相比传统药剂用量减少30-50%，综合处理成本显著降低' },
      { title: '适用广泛', desc: '适用于市政污水、印染、造纸、化工、食品等各类行业污泥' },
      { title: '操作简便', desc: '液态产品直接投加，无需复杂溶解稀释过程，操作方便' },
    ],
    specifications: [
      { label: '外观', value: '浅黄色至浅棕色液体' },
      { label: '有效含量', value: '≥ 40%' },
      { label: 'pH 值（1%水溶液）', value: '3.0 ~ 5.0' },
      { label: '密度（20℃）', value: '1.15 ~ 1.25 g/cm³' },
      { label: '粘度（25℃）', value: '≤ 100 mPa·s' },
      { label: '稳定性', value: '常温下稳定，保质期12个月' },
    ],
    applications: [
      { title: '市政污水处理厂', desc: '适用于市政污水厂剩余污泥和混合污泥脱水处理' },
      { title: '印染废水处理', desc: '针对印染行业高色度高有机污泥特性设计' },
      { title: '造纸废水处理', desc: '有效处理造纸行业纤维污泥与生化污泥' },
      { title: '化工废水处理', desc: '适用于化工行业含油含杂的复杂污泥处理' },
    ],
    usageSteps: [
      { step: '1', title: '投加位置', desc: '建议在污泥进入脱水设备前的污泥管道或混合池中投加，使药剂与污泥充分混合反应。' },
      { step: '2', title: '投加量', desc: '典型投加量为污泥干重的5-15%，具体用量需根据污泥性质通过小试确定，可提供免费小试服务。' },
      { step: '3', title: '稀释使用', desc: '产品可直接原液投加，也可按1:1-1:3比例稀释后投加，稀释后建议当天用完。' },
      { step: '4', title: '反应时间', desc: '药剂与污泥接触后快速反应，一般1-3分钟即可完成调理，具体停留时间需根据现场工艺确定。' },
    ],
    seo: {
      title: '污泥调理剂',
      description: '中格一蓝污泥调理剂 - 高效污泥脱水处理药剂，显著降低污泥含水率，适用于市政及工业污水处理。',
      canonical: 'https://www.zhonggeyilan.com/products/sludge-conditioner',
    },
  },
  {
    slug: 'composite-carbon-source',
    title: '复合碳源',
    category: '污水处理药剂',
    featured: true,
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
    category: '污水处理药剂',
    featured: true,
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
      { step: '1', title: '喷淋法', desc: '将产品按1:50-1:200比例稀释后，通过喷淋系统均匀喷洒于待处理区域表面。适用于垃圾中转站、养殖场圈舍、污水池等场所。' },
      { step: '2', title: '投加法', desc: '将产品按比例直接投加至污水处理系统中，使微生物在系统内繁殖生长并发挥除臭作用。适用于污水处理厂、化粪池等设施。' },
      { step: '3', title: '雾化法', desc: '使用高压雾化设备将稀释后的产品均匀散布于空间空气中，快速消除空气异味。适用于空间较大的封闭或半封闭区域。' },
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
    featured: true,
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
      { title: '循环水处理', desc: '适用于工业循环冷却水系统的水质稳定处理' },
    ],
    usageSteps: [
      { step: '1', title: '溶解配制', desc: '将PAC粉末按1:3~1:5重量比加入常温清水中，充分搅拌溶解，配制成5%-10%的PAC溶液。' },
      { step: '2', title: '稀释投加', desc: '将配好的PAC溶液进一步稀释至1%-2%浓度，使用计量泵连续或间歇投加至混合反应池进口。' },
      { step: '3', title: '投加量控制', desc: '一般PAC投加量为5-100mg/L（以商品计），具体投加量根据原水浊度和处理要求通过烧杯试验确定。' },
      { step: '4', title: '配合使用', desc: '可与有机高分子絮凝剂（如PAM）配合使用，先投加PAC形成大颗粒絮体，再投加PAM进行网捕卷扫，进一步提升沉降效果。' },
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
    featured: true,
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
      { title: '适用广泛', desc: '适用于市政污水、工业废水、饮用水、造纸废水、化工废水等各类水处理场景' },
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
      { title: '选矿冶金', desc: '适用于选矿废水、冶金废水的固液分离处理' },
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
    slug: 'phosphorus-removal-agent',
    title: '除磷剂',
    category: '污水处理药剂',
    featured: true,
    summary:
      '高效化学除磷药剂，通过沉淀除磷和吸附除磷双重作用，快速去除水体中的磷酸盐，适用于污水处理厂深度除磷工艺。',
    features: ['除磷效率高', '适用pH范围宽', '污泥产量少', '稳定达标排放'],
    image: '/images/product-phosphorus.svg',
    heroSubtitle: '高效化学除磷药剂，通过沉淀和吸附双重作用，快速去除水体中的磷酸盐，实现稳定达标',
    outlineTitle: '污水处理厂深度除磷的理想选择',
    outlineText: [
      '除磷剂是针对水体中磷酸盐去除而开发的专用化学药剂，通过与磷酸根离子形成不溶性磷酸盐沉淀，同时兼具有吸附去除作用，实现水体磷酸盐的高效去除。',
      '产品广泛应用于城镇污水处理厂、工业废水处理设施的深度除磷工艺段，可将总磷从1-3 mg/L降至0.5 mg/L以下，稳定满足《城镇污水处理厂污染物排放标准》一级A要求。',
    ],
    metrics: [
      { num: '95%+', label: '除磷效率' },
      { num: '0.5', label: '出水TP mg/L以下' },
      { num: '30%', label: '药剂成本节省' },
    ],
    advantages: [
      { title: '除磷效率高', desc: '除磷效率可达95%以上，出水总磷稳定在0.5 mg/L以下' },
      { title: '适用pH宽', desc: '在pH 6-9范围内均可保持良好的除磷效果，抗冲击能力强' },
      { title: '污泥产量少', desc: '相比石灰法，产生的化学污泥量少，后续处理负担小' },
      { title: '使用简便', desc: '直接投加或配制成溶液投加，操作简便，与现有工艺衔接顺畅' },
    ],
    specifications: [
      { label: '外观', value: '白色或淡黄色粉末' },
      { label: '主要成分', value: '聚合氯化铝铁改性复配物' },
      { label: '有效含量', value: '≥ 30%' },
      { label: 'pH值（1%溶液）', value: '3.0 ~ 5.0' },
      { label: '除磷容量', value: '≥ 80 mg PO₄-P / g' },
      { label: '保质期', value: '12个月' },
    ],
    applications: [
      { title: '市政污水厂深度除磷', desc: '作为三级处理药剂，将总磷从1-3mg/L降至0.5mg/L以下' },
      { title: '工业废水除磷', desc: '适用于磷化工、电子电镀、表面处理等行业的含磷废水处理' },
      { title: '地表水修复', desc: '适用于景观水体、黑臭水体治理中的磷污染物去除' },
      { title: '富营养化防控', desc: '湖泊、水库等封闭水体的富营养化预防和处理' },
    ],
    usageSteps: [
      { step: '1', title: '投加量确定', desc: '一般按去除1mg/L TP投加10-20mg/L除磷剂计算，具体投加量根据进水TP浓度和处理要求通过小试确定。' },
      { step: '2', title: '投加位置', desc: '建议在二沉池进水或深度处理混合池中投加，确保与水体充分混合反应。' },
      { step: '3', title: '反应时间', desc: '药剂与磷酸盐反应时间约5-15分钟，反应后通过沉淀或过滤去除生成的磷酸盐沉淀。' },
      { step: '4', title: 'pH调节', desc: '在pH 6-8范围内除磷效果最佳，pH过高或过低时需适当调节进水pH。' },
    ],
    seo: {
      title: '除磷剂',
      description: '中格一蓝除磷剂 - 高效化学除磷药剂，适用于城镇污水厂和工业废水深度除磷，除磷效率95%以上，出水总磷稳定达标。',
      canonical: 'https://www.zhonggeyilan.com/products/phosphorus-removal-agent',
    },
  },

  // ========== 普通展示产品（featured: false）============
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
      '设备可与我司污泥调理剂、复合碳源、除磷剂等各类液体药剂配合使用，根据水质参数自动调节投加量，大幅提高药剂使用效率和污水处理效果稳定性。',
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
      { title: '市政污水处理厂', desc: '用于碳源、絮凝剂、消毒剂等各类药剂的自动投加' },
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
      description: '中格一蓝全自动加药设备 - 智能化PLC控制加药系统，用于污泥调理剂、碳源、除磷剂等药剂的精准自动投加，支持远程监控。',
      canonical: 'https://www.zhonggeyilan.com/products/dosing-equipment',
    },
  },
  {
    slug: 'deoxidizer',
    title: '脱色剂',
    category: '水处理药剂',
    featured: false,
    summary:
      '高效脱色处理药剂，专为印染、造纸、染料等高色度废水设计，快速降低废水色度，实现着色物质的高效去除和废水回用。',
    features: ['脱色效率高', '适用多种染料', '配合脱色工艺', 'COD同步降低'],
    image: '/images/product-decolor.svg',
    heroSubtitle: '高效脱色处理药剂，快速降低高色度废水色度，实现着色物质高效去除',
    outlineTitle: '专业应对高色度废水脱色处理难题',
    outlineText: [
      '脱色剂是针对印染、造纸、染料等行业的废水色度去除问题开发的专业药剂，通过电荷中和、吸附架桥和絮凝沉降等多重作用，快速降低废水色度。',
      '产品对活性染料、直接染料、酸性染料、硫化染料等各类染料废水均有良好脱色效果，同时可同步降低废水COD，实现着色污染物的高效去除。',
    ],
    metrics: [
      { num: '98%', label: '脱色率' },
      { num: '30%+', label: 'COD同步去除' },
      { num: '快速', label: '反应时间' },
    ],
    advantages: [
      { title: '脱色效率高', desc: '对活性染料、直接染料等色度去除率可达98%以上' },
      { title: '适用染料广', desc: '适用于各类染料废水的脱色处理，包括偶氮染料、蒽醌染料等' },
      { title: 'COD同步降', desc: '在脱色的同时降低COD，脱色不引入二次污染' },
      { title: '用量经济', desc: '相比传统硫酸亚铁脱色，用量大幅减少，综合成本更低' },
    ],
    specifications: [
      { label: '外观', value: '无色至淡黄色透明液体' },
      { label: '离子类型', value: '阳离子型' },
      { label: 'pH值（原液）', value: '3.0 ~ 5.0' },
      { label: '密度（20℃）', value: '1.05 ~ 1.15 g/cm³' },
      { label: '储存条件', value: '密封保存，避免冻结' },
      { label: '保质期', value: '6个月' },
    ],
    applications: [
      { title: '印染废水', desc: '适用于各类印染企业的废水脱色处理' },
      { title: '造纸废水', desc: '适用于造纸废水制浆段和综合段的脱色处理' },
      { title: '染料废水', desc: '适用于染料中间体、颜料等行业的废水脱色' },
      { title: '油墨废水', desc: '适用于印刷油墨废水的脱色预处理' },
    ],
    usageSteps: [
      { step: '1', title: '小试确定用量', desc: '取废水样品进行小试，确定最佳投加量（一般50-500mg/L）。' },
      { step: '2', title: '配合PAC使用', desc: '建议先投加PAC进行预絮凝，再投加脱色剂，可显著提升脱色效果。' },
      { step: '3', title: 'pH调节', desc: '最佳脱色pH范围6-8，pH过低时需适当调节。' },
      { step: '4', title: '沉降分离', desc: '反应后静置10-20分钟，絮体沉降后取上清液检测色度。' },
    ],
    seo: {
      title: '脱色剂',
      description: '中格一蓝脱色剂 - 高效印染废水脱色药剂，适用于各类染料废水的色度去除，脱色率98%以上，COD同步降低30%以上。',
      canonical: 'https://www.zhonggeyilan.com/products/decolorant',
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
