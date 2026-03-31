import { useState } from 'react'
import { Newspaper, Calendar, ArrowRight, Tag, ChevronRight, ExternalLink, X } from 'lucide-react'

type Section = {
  num: string
  title: string
  titleEn: string
  content: string
}

type FeaturedArticle = {
  id: number
  title: string
  subtitle: string
  date: string
  category: string
  tags: string[]
  readTime: string
  image: string
  intro: string
  sections: Section[]
  footer: string
}

type Article = {
  id: number
  title: string
  summary: string
  date: string
  category: string
  tags: string[]
  readTime?: string
  // 可选全文字段
  subtitle?: string
  intro?: string
  sections?: Section[]
  footer?: string
  image?: string
}

const featuredArticle: FeaturedArticle = {
  id: 0,
  title: 'Exosomic Peptides™：揭开天然植物外泌体的力量',
  subtitle: '来自植物细胞世界的护肤革命',
  date: '2026-03-30',
  category: '技术前沿',
  tags: ['外泌体', 'Vytrus Biotech', '植物干细胞', 'Exosomic Peptides'],
  readTime: '10 分钟',
  image: '/news-exosome.webp',
  intro:
    '在功效护肤的科学版图中，一场来自植物细胞世界的革命正在悄然成形。西班牙生物科技企业 Vytrus Biotech 历经多年深耕，成功从植物干细胞培养体系中分离并系统表征了天然植物外泌体，并在其中发现了一类划时代的活性成分——Exosomic Peptides™（外泌体肽）。这一发现，不仅开辟了化妆品原料科学的全新维度，更预示着护肤与护发行业正式迈入「细胞通讯时代」。',
  sections: [
    {
      num: '01',
      title: '认识外泌体',
      titleEn: 'What Are Exosomes?',
      content:
        '外泌体（Exosomes），学术上亦称为胞外小体或小型胞外囊泡（Small Extracellular Vesicles，sEVs），是细胞天然分泌的纳米级脂质双层膜囊泡。它们携带 DNA、RNA、蛋白质及多种生物活性分子，是生命亿万年演化出的「细胞快递系统」，承担着细胞间精准通讯的核心职责。\n\n当市场上合成或仿生外泌体（Biomimetic Exosomes）的研究热度持续攀升时，Vytrus Biotech 选择了一条更为严苛、也更具科学价值的道路——专注于结构完整的天然植物外泌体。正因结构的真实性，这些外泌体与哺乳动物外泌体高度相似，具备穿透人体细胞的天然能力，得以实现真正的「跨王国细胞通讯」（Cross-kingdom Communication）。',
    },
    {
      num: '02',
      title: 'Exosomic Peptides™ 的横空出世',
      titleEn: 'A Landmark Discovery',
      content:
        '在系统解析植物外泌体的过程中，Vytrus 科研团队取得了里程碑式的突破：在这些纳米囊泡内部，天然封装着一类功能性多肽分子，即 Exosomic Peptides™。这不仅是全新的化妆品原料概念，更是植物生物科技与肽类科学深度融合的里程碑。\n\n外泌体肽并非人工合成，而是植物干细胞在正常生命活动中自然产生、并由外泌体脂质膜严密封装的天然多肽。脂质双层如同精密的「纳米保护舱」，赋予这些肽卓越的稳定性；外泌体本身则充当高效递送载体，引导活性成分穿越皮肤屏障，精准抵达靶细胞。',
    },
    {
      num: '03',
      title: '全方位功效图谱',
      titleEn: 'Multi-Dimensional Efficacy',
      content:
        '经系统科学验证，植物外泌体及其内含的 Exosomic Peptides™ 在皮肤与毛发护理领域展现出多维度功效：\n\n✦ 抗衰老 — 激活细胞更新，改善肌肤老化，恢复年轻弹力与光感\n≋ 深层补水 — 强化皮肤屏障，提升锁水能力，告别干燥紧绷\n◎ 抗炎舒缓 — 精准调节炎症通路，减少红肿敏感，恢复肌肤稳态\n⌁ 抗皱平纹 — 靶向皱纹形成机制，临床验证细纹显著淡化\n◈ 胶原蛋白合成 — 上调胶原、弹性蛋白等关键细胞外基质的生物合成\n❋ 皮肤再生 — 支持自我修复程序，促进组织再生与愈合\n◬ 免疫调节 — 通过跨王国信号，温和调节皮肤免疫应答\n⊕ 微生态调节 — 维护皮肤微生物组动态平衡，守护肌肤生态系统\n❂ 皮肤稳态 — 多维度支持皮肤内稳态，帮助肌肤保持最优功能状态',
    },
    {
      num: '04',
      title: '科技底座：植物干细胞生物工厂',
      titleEn: 'Plant Cell Biofactories',
      content:
        'Vytrus Biotech 的核心优势在于其独创的植物细胞生物工厂平台（Plant Cell Biofactories）。通过对姜黄（Curcuma longa）与积雪草（Centella asiatica）两种植物干细胞的精密培养与调控，研究团队成功实现了天然植物外泌体的高效生产与系统表征。\n\n相较于传统植物萃取工艺，植物干细胞生物工厂可将外泌体产量提升至数十亿个/毫升（billions of exosomes/ml）。这一突破不仅确保了原料批次间质量的高度一致性，更为规模化工业应用奠定了坚实基础——将曾经稀有珍贵的细胞通讯分子，真正转化为可商业化的高端美妆原料。',
    },
    {
      num: '05',
      title: '三款旗舰原料',
      titleEn: 'The Exosome Ingredient Trio',
      content:
        '🌿 Centella Reversa™ — 积雪草干细胞培养物·逆龄方程式\n源自积雪草（Centella asiatica）干细胞培养物的植物焕颜策略。其外泌体内富含多种具备抗衰老、抗炎及抗皱生物活性的 Exosomic Peptides™，以外泌体为载体精准渗透皮肤，实现科学意义上的「皮肤年龄逆转」。\n\n🌾 Capilia Longa™ — 姜黄干细胞培养物·令秀发重新萌发\n源自姜黄（Curcuma longa）干细胞培养物，含有真实的植物生长因子与丰富的 Exosomic Peptides™。临床数据证实脱发减少57%、头发密度提升17.3%，功效全面覆盖头发、眉毛及睫毛。\n\n✦ Turmeria Zen™ — 姜黄干细胞培养物·皮肤情绪健康管理者\n富含天然抗压植物分子，通过独特的「正念效应」（Mindfulness Effect）为皮肤注入情绪健康能量，实现从生理修复到皮肤情绪舒缓的双重层次关怀。',
    },
    {
      num: '06',
      title: '可持续的美丽哲学',
      titleEn: 'Sustainability at the Core',
      content:
        'Vytrus Biotech 的植物外泌体技术，不仅是科学的跃进，更体现了一种对地球负责的美丽理念。植物干细胞培养在可控实验室环境中进行，无需大规模种植与采收，大幅降低对自然资源的消耗与生态压力。\n\n在外泌体概念被各类炒作充斥的当下，Vytrus 选择以最严格的科学标准立身——坚持天然真实的完整外泌体，以严谨的表征数据与临床功效证明自身的差异化价值。',
    },
  ],
  footer: '资料来源：Vytrus Biotech 官方资料 | 本文仅供行业参考，产品功效数据以品牌官方资料为准',
}

const articles: Article[] = [
  {
    id: 2,
    title: '研发洞察 | 告别传统抗衰：2026皮肤长寿科学与"细胞断食"新范式',
    subtitle: '细胞断食（Cellular Fasting）与逆境激活效应（Hormesis）的前沿科学',
    summary:
      '当消费者对传统"修补型抗老"产生免疫时，全球前沿护肤科研已全面转向"皮肤长寿科学（Skin Longevity）"。细胞断食（Cellular Fasting）与逆境激活效应（Hormesis）成为高端产品开发的核心技术锚点。斩获 2025 年 in-cosmetics 全球最佳活性原料银奖的 Clarivine™ 通过外泌体白藜芦醇精准模拟断食效应，激活细胞自噬，清除脂褐素，让皮肤光泽度提升高达 30.7%，开创水光肌新标准。',
    intro:
      '当消费者对传统的"修补型抗老（Anti-aging）"产生免疫时，全球前沿护肤科研已全面转向"皮肤长寿科学（Skin Longevity）"。它不再局限于表面纹理的填补，而是深入细胞微环境，通过靶向优化细胞代谢和生命周期，实现真正的长期健康与韧性。在这一趋势下，"细胞断食（Cellular Fasting）"与"逆境激活效应（Hormesis）"成为了高端产品开发的核心技术锚点。',
    date: '2026-03-25',
    category: '原料解析',
    tags: ['Clarivine', '细胞断食', '皮肤长寿科学', '细胞自噬', '水光肌'],
    readTime: '8 分钟',
    image: '/news-clarivine.png',
    sections: [
      {
        num: '01',
        title: '概念破局：为什么"细胞断食"是下一代抗衰的核心？',
        titleEn: 'Why Cellular Fasting Leads Next-Gen Anti-aging',
        content:
          '在生物学进化中，无论是植物还是人类，都经历过长期的资源匮乏。为了在极度压力下生存，细胞进化出了一套绝妙的防御机制：当面临轻度压力（如营养限制/断食）时，细胞会关闭耗能的生长通路，转而启动"自净与回收"模式。这就是长寿医学中著名的逆境激活效应（Hormesis）机制——即通过微量压力刺激，激活细胞的自我修复与优化程序。\n\n当细胞处于断食模拟状态时，它会主动清理内部的代谢垃圾和受损的细胞器，从而显著降低氧化应激和慢性炎症。这种机制能有效延缓细胞衰老，极大地延长细胞的活跃寿命。',
      },
      {
        num: '02',
        title: '原料突围：Vytrus Biotech 与 Clarivine™ 的植物仿生学',
        titleEn: 'Clarivine™ — Biomimetic Fasting Activation',
        content:
          '化妆品显然不能让消费者的皮肤真正"挨饿"。如何在不剥夺皮肤实际营养的前提下，精准"欺骗"细胞开启断食自净通路？\n\n斩获 2025 年 in-cosmetics 全球最佳活性原料银奖的 Clarivine™（由西班牙 Vytrus Biotech 研发）为我们提供了完美的解法。研发团队将目光投向了自然界的抗压王者——葡萄（Vitis vinifera）。这种植物生命力极强，甚至能存活数百年。Vytrus 通过极其精密的生物干预，对葡萄干细胞施加"间歇性断食"压力。\n\n面对这种生存压力，植物干细胞产生了一种富含高能生物活性物质的特殊分泌体（Secretome），即"植物断食因子（Plant Fasting Factors）"。',
      },
      {
        num: '03',
        title: '机制拆解：外泌体白藜芦醇的靶向传输',
        titleEn: 'Exosomic Resveratrol Delivery Mechanism',
        content:
          'Clarivine™ 的核心技术壁垒，在于其突破性的成分构成与递送方式。它不仅仅是单一的植物提取物，而是包含：\n\n◈ 天然植物外泌体（Plant Exosomes）：培养物中含有高达 1.47×10⁸ 个/ml 的天然外泌体。\n\n◈ 外泌体白藜芦醇（Exosomic Resveratrol）：首次在化妆品中应用。白藜芦醇作为经典的抗氧化剂，在此扮演"细胞断食开关"的角色——能激活细胞自噬通路、抑制促生长的 mTOR 信号。被包裹在外泌体中的白藜芦醇可直接穿透皮肤细胞，精准模拟断食效应。\n\n◈ 信号肽与多酚矩阵：富含上百种调控长寿和抗炎的信号肽及多酚（如木犀草素、芹菜素等）。',
      },
      {
        num: '04',
        title: '功效论证：微观自净与宏观"水光肌"的统一',
        titleEn: 'Efficacy: From Cellular Autophagy to Glass Skin',
        content:
          '在产品宣称（Claims）上，Clarivine™ 为产品经理提供了从微观机制到宏观视觉的完整证据链：\n\n【微观机制（体外测试）】\n✦ 激活细胞自噬（Autophagy）：提升 LC3II 转化率，加速受损细胞器的回收与更新。\n✦ 清除老化色素：显著减少脂褐素（Lipofuscin，老年斑的前身）和黑色素的积累，从根源解决皮肤晦暗。\n✦ 保护端粒（Telomere）：减缓染色体端粒的缩短，在基因层面维持细胞年轻态。\n\n【宏观视觉（体内临床）】\n经过亚洲与高加索人群的体内测试（添加量 1%–2%，测试周期 28 至 56 天），数据表明：\n✦ 光泽度（Radiance）：皮肤光泽度提升高达 30.7%，完美契合无暇通透的"水光肌（Glass Skin）"诉求。\n✦ 纹理与平滑度：皱纹深度显著减少 12.6%，粗糙度降低 13%。\n✦ 抗氧化与提亮：皮肤抗氧化能力提升 38.3%，色斑减少 9%。',
      },
      {
        num: '05',
        title: '产品经理的实战应用指南',
        titleEn: 'Practical Guide for Product Managers',
        content:
          '对于正在规划 2026 研发管线的品牌而言，这项技术不仅带来了 100% 天然来源（ISO 16128）和无防腐剂的合规优势，更提供了极具差异化的营销概念：\n\n◈ 高端长寿精华（Longevity Serums）：抛弃同质化的多肽叠加，主打"细胞断食自净"与"逆境激活效应"，对标顶尖院线抗衰逻辑。\n\n◈ 新一代水光肌护肤（Next-Gen Glass Skin）：结合其强大的脂褐素清除与光泽度提升数据，开发针对亚洲市场的抛光提亮产品。\n\n◈ 植物外泌体前沿线（Exosome Treatments）：利用"外泌体白藜芦醇"的高阶透皮概念，打造极具科技感与渗透力的高附加值单品。\n\n真正的皮肤抗衰，终将走向细胞代谢的底层重构。利用前沿植物生物学，让细胞学会"自我净化"，这或许是通往皮肤长寿的最优解。',
      },
    ],
    footer: '如果对原料 Clarivine™ 感兴趣，欢迎私信联系 | 资料来源：Vytrus Biotech 官方资料，产品功效数据以品牌官方资料为准',
  },
  {
    id: 3,
    title: '微生态护肤趋势：从控油到皮肤-大脑轴的情绪护肤',
    summary:
      '2025-2026 年微生态护肤已从单一"益生菌概念"进化至皮肤微生物群落的精准调控。Kannabia Sense™（大麻干细胞）和 Quora Noni™（诺丽果干细胞）分别从情绪-皮肤轴和群体感应抑制角度切入，为品牌提供差异化配方故事。',
    date: '2026-03-15',
    category: '行业趋势',
    tags: ['微生态', '情绪护肤', '控油祛痘'],
    readTime: '5 分钟',
  },
  {
    id: 4,
    title: '头皮护发新赛道：Capilia Longa™ 表观遗传防脱方案',
    summary:
      '防脱生发市场规模持续扩大，姜黄干细胞原料 Capilia Longa™ 通过表观遗传重置毛囊周期，临床验证脱发减少 57%、头发密度提升 17.3%。相比米诺地尔等传统成分，植物干细胞防脱路线更温和、故事性更强。',
    date: '2026-03-10',
    category: '市场洞察',
    tags: ['防脱生发', 'Capilia Longa', '头皮护理'],
    readTime: '5 分钟',
  },
  {
    id: 5,
    title: '南美珍稀植物原料：猴面包树与石榴籽干细胞的配方价值',
    summary:
      'Baolift™（猴面包树干细胞）和 Luminia Granatum™（石榴籽干细胞）均来源于珍稀植物。前者激活运动因子 MOTS-c 实现面部 V 型提拉，后者精准保护线粒体 DNA 并抑制黑色素合成，是高端精华及面膜产品的差异化选择。',
    date: '2026-03-05',
    category: '原料解析',
    tags: ['Baolift', 'Luminia Granatum', '南美原料'],
    readTime: '6 分钟',
  },
  {
    id: 6,
    title: '2026 年化妆品原料行业展会预告与趋势前瞻',
    summary:
      '2026 年 PCHi、In-Cosmetics Global 等国际原料展会将重点展示植物干细胞、合成生物学原料及可持续供应链方案。太新美康将携 Vytrus Biotech 全线原料参展，欢迎提前预约洽谈。',
    date: '2026-02-28',
    category: '行业动态',
    tags: ['展会', 'PCHi', '行业趋势'],
    readTime: '3 分钟',
  },
]

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  技术前沿: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  原料解析: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
  行业趋势: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  市场洞察: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  行业动态: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
}

const allCategories = ['全部', ...Array.from(new Set(articles.map((a) => a.category)))]

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return `${d.getFullYear()} 年 ${d.getMonth() + 1} 月 ${d.getDate()} 日`
}

// Full article modal
function ArticleModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-3xl my-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header image */}
        <div className="relative">
          <img
            src="/news-exosome.webp"
            alt="Exosomic Peptides"
            className="w-full object-cover"
            style={{ maxHeight: '380px' }}
            onError={(e) => {
              const t = e.currentTarget as HTMLImageElement
              t.style.display = 'none'
            }}
          />
          {/* Fallback banner when image missing */}
          <div
            className="w-full flex items-center justify-center text-white text-sm font-medium py-12"
            style={{ background: 'linear-gradient(135deg, #1a3a2a 0%, #2d6a4f 100%)', display: 'none' }}
            id="modal-img-fallback"
          >
            Exosomic Peptides™ · Vytrus Biotech
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-4 left-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500 text-white">技术前沿</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{formatDate(featuredArticle.date)}</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
            {featuredArticle.title}
          </h2>
          <p className="text-base text-gray-500 mb-6 font-medium">{featuredArticle.subtitle}</p>

          {/* Intro */}
          <p className="text-sm text-gray-700 leading-relaxed mb-8 p-5 rounded-xl bg-gray-50 border-l-4" style={{ borderColor: 'var(--color-primary)' }}>
            {featuredArticle.intro}
          </p>

          {/* Sections */}
          <div className="space-y-8">
            {featuredArticle.sections.map((sec) => (
              <div key={sec.num}>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ background: 'var(--color-primary)' }}
                  >
                    {sec.num}
                  </span>
                  <div>
                    <span className="text-base font-bold text-gray-800">{sec.title}</span>
                    <span className="text-xs text-gray-400 ml-2">{sec.titleEn}</span>
                  </div>
                </div>
                <div className="pl-11">
                  {sec.content.split('\n\n').map((para, i) => (
                    <p key={i} className="text-sm text-gray-600 leading-relaxed mb-3 whitespace-pre-line">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-100">
            {featuredArticle.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-full text-xs border border-green-200 text-green-700 bg-green-50 flex items-center gap-1">
                <Tag className="w-3 h-3" />{tag}
              </span>
            ))}
          </div>

          {/* Footer note */}
          <p className="text-xs text-gray-400 mt-4">{featuredArticle.footer}</p>
        </div>
      </div>
    </div>
  )
}

// Generic article detail modal for articles with full content
function ArticleDetailModal({ article, onClose }: { article: Article; onClose: () => void }) {
  const color = categoryColors[article.category] ?? { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200' }
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-3xl my-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header banner */}
        <div
          className="relative flex items-end px-8 pt-16 pb-8"
          style={{ background: 'linear-gradient(135deg, #0f2e1e 0%, #1a5c3a 60%, #2d7a52 100%)' }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/30 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${color.bg} ${color.text} ${color.border}`}>
                {article.category}
              </span>
              <span className="text-white/50 text-xs flex items-center gap-1">
                <Calendar className="w-3 h-3" />{formatDate(article.date)}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white leading-snug mb-2">
              {article.title}
            </h2>
            {article.subtitle && (
              <p className="text-white/60 text-sm">{article.subtitle}</p>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Intro */}
          {article.intro && (
            <p className="text-sm text-gray-700 leading-relaxed mb-8 p-5 rounded-xl bg-gray-50 border-l-4" style={{ borderColor: 'var(--color-primary)' }}>
              {article.intro}
            </p>
          )}

          {/* Article image */}
          {article.image && (
            <div className="mb-8 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <img
                src={article.image}
                alt={article.title}
                className="w-full object-contain"
                style={{ maxHeight: '480px', background: '#f8faf9' }}
              />
            </div>
          )}

          {/* Sections */}
          {article.sections && article.sections.length > 0 && (
            <div className="space-y-8">
              {article.sections.map((sec) => (
                <div key={sec.num}>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{ background: 'var(--color-primary)' }}
                    >
                      {sec.num}
                    </span>
                    <div>
                      <span className="text-base font-bold text-gray-800">{sec.title}</span>
                      <span className="text-xs text-gray-400 ml-2">{sec.titleEn}</span>
                    </div>
                  </div>
                  <div className="pl-11">
                    {sec.content.split('\n\n').map((para, i) => (
                      <p key={i} className="text-sm text-gray-600 leading-relaxed mb-3 whitespace-pre-line">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-100">
            {article.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-full text-xs border border-green-200 text-green-700 bg-green-50 flex items-center gap-1">
                <Tag className="w-3 h-3" />{tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          {article.footer && (
            <p className="text-xs text-gray-400 mt-4">{article.footer}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function News() {
  const [activeCategory, setActiveCategory] = useState('全部')
  const [expanded, setExpanded] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [detailArticle, setDetailArticle] = useState<Article | null>(null)

  const filtered =
    activeCategory === '全部' ? articles : articles.filter((a) => a.category === activeCategory)

  return (
    <section id="news" className="section-padding" style={{ background: '#f8faf9' }}>
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 text-green-800 bg-green-50 border border-green-100">
            <Newspaper className="w-3.5 h-3.5" />
            行业资讯
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            原料前沿 · 行业动态
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            追踪全球化妆品原料技术趋势，为您的配方创新提供第一手参考
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap justify-center mb-10">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 text-sm rounded-xl font-medium transition-all"
              style={
                activeCategory === cat
                  ? { background: 'var(--color-primary)', color: '#fff' }
                  : { background: '#fff', color: '#374151', border: '1px solid #e5e7eb' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Featured Article ── */}
        {activeCategory === '全部' && (
          <div
            className="rounded-2xl mb-10 overflow-hidden cursor-pointer group relative"
            style={{ background: 'linear-gradient(135deg, #1a3a2a 0%, #2d6a4f 100%)' }}
            onClick={() => setShowModal(true)}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Left: image */}
              <div className="lg:w-1/2 relative overflow-hidden" style={{ minHeight: '280px' }}>
                <img
                  src="/news-exosome.webp"
                  alt="Exosomic Peptides"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ minHeight: '280px' }}
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement
                    t.style.display = 'none'
                    const next = t.nextElementSibling as HTMLElement
                    if (next) next.style.display = 'flex'
                  }}
                />
                {/* fallback */}
                <div
                  className="absolute inset-0 items-center justify-center text-white/40 text-sm font-medium hidden"
                  style={{ background: 'rgba(0,0,0,0.2)' }}
                >
                  封面图加载中…
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a3a2a] hidden lg:block" />
              </div>

              {/* Right: content */}
              <div className="lg:w-1/2 p-8 flex flex-col justify-center relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">置顶精选</span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-400/30 text-purple-100 border border-purple-300/30">
                    技术前沿
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors leading-snug">
                  {featuredArticle.title}
                </h3>
                <p className="text-white/60 text-sm mb-4">{featuredArticle.subtitle}</p>

                <p className="text-white/75 text-sm leading-relaxed mb-6 line-clamp-3">
                  {featuredArticle.intro}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-white/50 text-xs">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{formatDate(featuredArticle.date)}</span>
                  </div>
                  <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white/15 text-white border border-white/25 hover:bg-white/25 transition-all">
                    阅读全文
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-white/15">
                  {featuredArticle.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-xs bg-white/10 text-white/70 border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => {
            const color = categoryColors[article.category] ?? { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200' }
            const hasFullContent = !!(article.sections && article.sections.length > 0)
            const isOpen = expanded === article.id
            return (
              <div
                key={article.id}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group flex flex-col"
                onClick={() => {
                  if (hasFullContent) {
                    setDetailArticle(article)
                  } else {
                    setExpanded(isOpen ? null : article.id)
                  }
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${color.bg} ${color.text} ${color.border}`}>
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(article.date)}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-800 mb-2 group-hover:text-green-800 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className={`text-sm text-gray-500 leading-relaxed mb-4 flex-1 transition-all duration-300 ${isOpen ? '' : 'line-clamp-3'}`}>
                  {article.summary}
                </p>

                {isOpen && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {article.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full text-xs border border-green-200 text-green-700 bg-green-50 flex items-center gap-1">
                        <Tag className="w-2.5 h-2.5" />{tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-end pt-4 border-t border-gray-50">
                  <span className="flex items-center gap-1 text-xs font-medium transition-colors" style={{ color: 'var(--color-accent)' }}>
                    {hasFullContent ? '阅读全文' : isOpen ? '收起' : '展开详情'}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-400 mb-4">更多行业资讯，欢迎关注我们的官方公众号</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white rounded-xl transition-all hover:opacity-90"
            style={{ background: 'var(--color-primary)' }}
          >
            联系我们获取更多资讯
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Full Article Modal */}
      {showModal && <ArticleModal onClose={() => setShowModal(false)} />}
      {/* Article Detail Modal (for articles with full content) */}
      {detailArticle && <ArticleDetailModal article={detailArticle} onClose={() => setDetailArticle(null)} />}
    </section>
  )
}
