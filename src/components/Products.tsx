import { useState } from 'react'
import { Search, FlaskConical, ArrowRight, Tag, Star } from 'lucide-react'

type Product = {
  id: number
  name: string
  nameEn: string
  source: string
  category: string
  origin: string
  function: string
  tags: string[]
  highlight?: boolean
  new?: boolean
  inci?: string
  dosage?: string
}

const categories = ['全部', '抗衰紧致', '微生态控油', '保湿提亮', '舒缓敏感', '头皮护发']

const products: Product[] = [
  {
    id: 1, name: 'Clarivine™', nameEn: 'Grape Stem Cell · PPF',
    source: '葡萄干细胞提取',
    category: '抗衰紧致',
    origin: '西班牙 · Vytrus Biotech',
    function: '模拟禁食机制，激活细胞自噬，清除脂褐素，打造通透水光肌',
    tags: ['热销', '细胞自噬'], highlight: true,
    inci: 'Vitis Vinifera (Grape) Stem Cell Extract',
    dosage: '建议用量参考技术资料',
  },
  {
    id: 2, name: 'Centella Reversa™', nameEn: 'Centella Stem Cell · PPF',
    source: '积雪草干细胞提取',
    category: '抗衰紧致',
    origin: '西班牙 · Vytrus Biotech',
    function: '百亿级植物外泌体修复DNA，逆转细胞衰老，显著紧致抗下垂',
    tags: ['明星成分', '外泌体'], highlight: true, new: true,
    inci: 'Centella Asiatica Stem Cell Extract',
    dosage: '弹性蛋白生成激增126%，皮肤紧致度提升46%',
  },
  {
    id: 3, name: 'Olea Vitae™', nameEn: 'Wild Olive Stem Cell · PLF',
    source: '野生橄榄干细胞提取',
    category: '抗衰紧致',
    origin: '西班牙 · Vytrus Biotech',
    function: '靶向线粒体，补充心磷脂前体，对抗能量衰老，深层焕活熟龄肌',
    tags: ['线粒体焕活'],
    inci: 'Olea Europaea (Olive) Stem Cell Extract',
    dosage: '建议用量参考技术资料',
  },
  {
    id: 4, name: 'Baolift™', nameEn: 'Baobab Stem Cell · PRCF',
    source: '猴面包树干细胞提取',
    category: '抗衰紧致',
    origin: '西班牙 · Vytrus Biotech',
    function: '激活运动因子MOTS-c，V型提拉，面部及眼部抗重力效应',
    tags: ['提拉紧致'], new: true,
    inci: 'Adansonia Digitata (Baobab) Stem Cell Extract',
    dosage: '皱纹深度减少26%，前胶原蛋白I合成提升62%',
  },
  {
    id: 5, name: 'Sarcoslim Re-Shape™', nameEn: 'Viola Stem Cell · PRCF',
    source: '堇菜干细胞提取',
    category: '抗衰紧致',
    origin: '西班牙 · Vytrus Biotech',
    function: '智能轮廓管理，瘦脸收紧下颌线，面部紧致度提升24%',
    tags: ['轮廓塑形'],
    inci: 'Viola Odorata Stem Cell Extract',
    dosage: '脂肪减少33%，弹性提升18%',
  },
  {
    id: 6, name: 'Quora Noni™', nameEn: 'Noni Stem Cell · PRCF',
    source: '诺丽果干细胞提取',
    category: '微生态控油',
    origin: '西班牙 · Vytrus Biotech',
    function: '群体淬灭机制，广谱抑菌，治痘控油，毛孔面积减少48%',
    tags: ['热销', '控油祛痘'], highlight: true,
    inci: 'Morinda Citrifolia (Noni) Stem Cell Extract',
    dosage: '痤疮丙酸杆菌生物膜抑制99%，皮脂分泌减少28%',
  },
  {
    id: 7, name: 'Kannabia Sense™', nameEn: 'Cannabis Stem Cell · PLF',
    source: '大麻干细胞提取',
    category: '微生态控油',
    origin: '西班牙 · Vytrus Biotech',
    function: '调节微生态，刺激皮肤-大脑轴，情绪护肤，促进肌肤健康衰老',
    tags: ['情绪护肤', '微生态'],
    inci: 'Cannabis Sativa Stem Cell Extract',
    dosage: '建议用量参考技术资料',
  },
  {
    id: 8, name: 'Nectaria Lithops™', nameEn: 'Living Stone Stem Cell · PGF',
    source: '生石花干细胞提取',
    category: '保湿提亮',
    origin: '西班牙 · Vytrus Biotech',
    function: '强化糖萼结构，深层保湿提亮，促进内源性维生素D合成',
    tags: ['深层保湿', '提亮'], new: true,
    inci: 'Lithops Salicola Stem Cell Extract',
    dosage: '深层水合提升123%，皮肤透光率提升17%',
  },
  {
    id: 9, name: 'Luminia Granatum™', nameEn: 'Pomegranate Stem Cell · PRCF',
    source: '石榴籽干细胞提取',
    category: '保湿提亮',
    origin: '西班牙 · Vytrus Biotech',
    function: '保护线粒体DNA，精准抑制黑色素合成，智能焕亮肤色淡化色斑',
    tags: ['美白淡斑'],
    inci: 'Punica Granatum (Pomegranate) Seed Stem Cell Extract',
    dosage: '建议用量参考技术资料',
  },
  {
    id: 10, name: 'Turmeria Zen™', nameEn: 'Turmeric Stem Cell · PRCF',
    source: '姜黄干细胞提取',
    category: '舒缓敏感',
    origin: '西班牙 · Vytrus Biotech',
    function: '对抗压力激素诱导的炎症，情绪保湿，淡化压力性皱纹，舒缓抗炎',
    tags: ['舒缓', '抗压力'],
    inci: 'Curcuma Longa (Turmeric) Stem Cell Extract',
    dosage: '建议用量参考技术资料',
  },
  {
    id: 11, name: 'Sensia Carota™', nameEn: 'Carrot Stem Cell · PRCF',
    source: '胡萝卜干细胞提取',
    category: '舒缓敏感',
    origin: '西班牙 · Vytrus Biotech',
    function: '免疫层面重建皮肤稳态，显著舒缓敏感、减少泛红，适合极敏感肌',
    tags: ['敏感肌', '舒缓修复'], highlight: true,
    inci: 'Daucus Carota (Carrot) Stem Cell Extract',
    dosage: '建议用量参考技术资料',
  },
  {
    id: 12, name: 'Capilia Longa™', nameEn: 'Turmeric Stem Cell · PPF',
    source: '姜黄干细胞提取（防脱生发）',
    category: '头皮护发',
    origin: '西班牙 · Vytrus Biotech',
    function: '表观遗传重置毛囊周期，强效防脱，促进头发生长，加密眉毛睫毛',
    tags: ['防脱生发', '热销'], highlight: true, new: true,
    inci: 'Curcuma Longa (Turmeric) Stem Cell Extract',
    dosage: '脱发减少57%，头发密度提升17.3%，睫毛密度激增56%',
  },
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('全部')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === '全部' || p.category === activeCategory
    const q = searchQuery.toLowerCase()
    const matchSearch = !q || p.name.includes(q) || p.nameEn.toLowerCase().includes(q) || p.function.includes(q)
    return matchCat && matchSearch
  })

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 text-amber-800 bg-amber-50 border border-amber-100">
            <FlaskConical className="w-3.5 h-3.5" />
            产品中心
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            200+ 原料精选目录
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            涵盖植物干细胞活性成分、特色油脂、天然香、神经酰胺、硅油、表活等全类目，支持实时在线索样
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="搜索原料名称、INCI名、功效..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ '--tw-ring-color': 'var(--color-accent)' } as React.CSSProperties}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2.5 text-sm rounded-xl font-medium transition-all"
                style={
                  activeCategory === cat
                    ? { background: 'var(--color-primary)', color: '#fff' }
                    : { background: '#f3f4f6', color: '#374151' }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="relative bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Badges */}
              <div className="flex gap-2 mb-3 flex-wrap">
                {product.new && (
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-green-100 text-green-700">NEW</span>
                )}
                {product.highlight && (
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-amber-100 text-amber-700 flex items-center gap-1">
                    <Star className="w-2.5 h-2.5" />热销
                  </span>
                )}
              </div>

              {/* Icon placeholder */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: 'var(--color-primary)' + '15' }}>
                <FlaskConical className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
              </div>

              <h3 className="text-base font-bold mb-0.5" style={{ color: 'var(--color-primary)' }}>{product.name}</h3>
              <p className="text-xs font-medium text-gray-600 mb-0.5">{product.source}</p>
              <p className="text-xs text-gray-400 mb-2">{product.nameEn}</p>

              <div className="flex items-center gap-1.5 mb-3">
                <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600">{product.category}</span>
                <span className="text-xs text-gray-400">·</span>
                <span className="text-xs text-gray-500">{product.origin}</span>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">{product.function}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {product.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-xs rounded-full border text-green-700 border-green-200 bg-green-50 flex items-center gap-1">
                    <Tag className="w-2.5 h-2.5" />{tag}
                  </span>
                ))}
              </div>

              <button
                className="w-full py-2 text-xs font-semibold rounded-lg text-white transition-all group-hover:opacity-90"
                style={{ background: 'var(--color-accent)' }}
              >
                申请样品 →
              </button>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <FlaskConical className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>暂无匹配结果，请尝试其他关键词</p>
          </div>
        )}

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>{selectedProduct.name}</h3>
                  <p className="text-sm font-medium text-gray-600 mt-0.5">{selectedProduct.source}</p>
                  <p className="text-sm text-gray-400 mt-0.5">{selectedProduct.nameEn}</p>
                </div>
                <button onClick={() => setSelectedProduct(null)} className="text-gray-400 hover:text-gray-600 text-xl">✕</button>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3"><span className="text-gray-400 w-20 shrink-0">产品类别</span><span className="font-medium text-gray-700">{selectedProduct.category}</span></div>
                <div className="flex gap-3"><span className="text-gray-400 w-20 shrink-0">原产地</span><span className="font-medium text-gray-700">{selectedProduct.origin}</span></div>
                <div className="flex gap-3"><span className="text-gray-400 w-20 shrink-0">INCI名</span><span className="font-medium text-gray-700 font-mono">{selectedProduct.inci}</span></div>
                <div className="flex gap-3"><span className="text-gray-400 w-20 shrink-0">建议用量</span><span className="font-medium text-gray-700">{selectedProduct.dosage}</span></div>
                <div className="flex gap-3"><span className="text-gray-400 w-20 shrink-0">主要功效</span><span className="text-gray-700">{selectedProduct.function}</span></div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 flex gap-3">
                <a
                  href="#contact"
                  className="flex-1 py-3 text-sm font-semibold text-white rounded-xl text-center"
                  style={{ background: 'var(--color-accent)' }}
                  onClick={() => setSelectedProduct(null)}
                >
                  申请样品
                </a>
                <a
                  href="#contact"
                  className="flex-1 py-3 text-sm font-semibold rounded-xl text-center border border-gray-200 text-gray-700 hover:bg-gray-50"
                  onClick={() => setSelectedProduct(null)}
                >
                  咨询技术支持
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-400 mb-4">以上为部分展示，完整产品目录请联系客服获取</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white rounded-xl transition-all hover:opacity-90"
            style={{ background: 'var(--color-primary)' }}
          >
            获取完整产品手册
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
