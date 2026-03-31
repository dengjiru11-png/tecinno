import { Target, Eye, TrendingUp } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 text-green-800 bg-green-50 border border-green-100">
            关于我们
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            专注原料，初心不改
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            海南太新美康生物科技有限公司是一家专业化妆品原料代理经销商，
            致力于连接全球优质原料与中国品牌创新。
          </p>
        </div>

        {/* Mission / Vision */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: '使命', desc: '以专业的原料知识和可靠的供应链，赋能每一个追求卓越的美妆品牌。' },
            { icon: Eye, title: '愿景', desc: '成为中国最受信赖的化妆品原料合作伙伴，推动中国美妆走向世界。' },
            { icon: TrendingUp, title: '价值观', desc: '诚信经营、专业精进、客户第一——这是我们坚守的经营哲学。' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: 'var(--color-primary)', color: '#fff' }}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-primary)' }}>{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
