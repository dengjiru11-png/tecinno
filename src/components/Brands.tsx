import { Quote } from 'lucide-react'

const brands = [
  { name: '花西子', category: '国潮彩妆', logo: '花' },
  { name: '珀莱雅', category: '功效护肤', logo: '珀' },
  { name: 'PMPM', category: '精华护肤', logo: 'P' },
  { name: '薇诺娜', category: '敏感肌护理', logo: '薇' },
  { name: '觅光', category: '医美护肤', logo: '觅' },
  { name: '半亩花田', category: '天然护肤', logo: '半' },
  { name: '溪木源', category: '天然有机', logo: '溪' },
  { name: '逐本', category: '植物护肤', logo: '逐' },
]

const testimonials = [
  {
    name: '王总 · 研发总监',
    brand: '某头部国货护肤品牌',
    content: '太新美康的烟酰胺批批检测合格，技术团队响应很快，帮我们解决了配方稳定性问题。合作三年，从未断货，是我们最信赖的原料伙伴。',
  },
  {
    name: '李工 · 配方工程师',
    brand: '某新锐功效品牌',
    content: '我们品牌起步阶段，太新美康愿意接我们的小批量订单，样品齐全，文件规范，大大缩短了我们的研发周期。',
  },
  {
    name: '张总 · 采购负责人',
    brand: '某代工OEM工厂',
    content: '库存充足、交货及时是我们最看重的，太新美康做到了。他们的备货能力在同行中属于顶级，应急供货让我们避免了多次停产风险。',
  },
]

export default function Brands() {
  return (
    <section id="brands" className="section-padding" style={{ background: '#f8f9f6' }}>
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 text-amber-800 bg-amber-50 border border-amber-100">
            合作品牌
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            300+ 品牌的共同选择
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            从新锐美妆到头部国货，众多知名品牌已与太新美康建立长期稳定合作
          </p>
        </div>

        {/* Brand Logos */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-16">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white"
                style={{ background: 'var(--color-primary)' }}
              >
                {brand.logo}
              </div>
              <span className="text-xs text-gray-600 font-medium text-center leading-tight">{brand.name}</span>
              <span className="text-xs text-gray-400 text-center">{brand.category}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ name, brand, content }) => (
            <div
              key={name}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-8 h-8 mb-4 opacity-30" style={{ color: 'var(--color-accent)' }} />
              <p className="text-sm text-gray-600 leading-relaxed mb-6">"{content}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ background: 'var(--color-primary)' }}
                >
                  {name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>{name}</div>
                  <div className="text-xs text-gray-400">{brand}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
