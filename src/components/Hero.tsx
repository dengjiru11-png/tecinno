import { ArrowRight, FlaskConical, Globe, Award, Users } from 'lucide-react'

const stats = [
  { value: '200+', label: '原料SKU', icon: FlaskConical },
  { value: '50+', label: '全球供应商', icon: Globe },
  { value: '30年', label: '行业经验', icon: Award },
  { value: '100+', label: '合作品牌', icon: Users },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #1a3a2a 0%, #2d6a4f 45%, #1a4a35 100%)',
        }}
      />
      {/* Decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10" style={{ background: 'var(--color-accent)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full opacity-10" style={{ background: '#fff', filter: 'blur(60px)' }} />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container-max relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20 bg-white/10 text-white backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            专业化妆品原料代理经销商
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            高品质原料，
            <br />
            <span style={{ color: 'var(--color-accent-light)' }}>成就每一支</span>
            <br />
            卓越配方
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl leading-relaxed">
            海南太新美康生物科技有限公司深耕化妆品原料行业，整合全球顶级供应商资源，
            为中国美妆制造商提供活性成分、功能原料及定制化供应链解决方案。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-xl transition-all hover:opacity-90 hover:shadow-xl hover:scale-105"
              style={{ background: 'var(--color-accent)' }}
            >
              浏览产品目录
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold rounded-xl border border-white/40 text-white bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20"
            >
              申请免费样品
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center md:text-left">
                <div className="flex items-center gap-2 mb-1 justify-center md:justify-start">
                  <Icon className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white">{value}</div>
                <div className="text-sm text-white/60 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  )
}
