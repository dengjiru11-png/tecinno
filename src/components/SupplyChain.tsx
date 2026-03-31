import { Factory, Ship, FileCheck, Zap, BarChart3, ArrowRight } from 'lucide-react'

const steps = [
  { icon: Factory, title: '原厂直采', desc: '与50+全球顶级原料制造商建立直接合作，省去层层代理，确保价格与品质优势。' },
  { icon: Ship, title: '稳定备货', desc: '核心原料常备库存，快速响应客户急单需求。' },
  { icon: FileCheck, title: '全套合规文件', desc: '提供COA、MSDS、FDA DMF、欧盟REACH符合声明等完整合规文件，助力品牌全球化。' },
  { icon: Zap, title: '快速打样', desc: '与多家检测机构合作，样品检测48小时出报告，加速您的产品开发周期。' },
]

const metrics = [
  { value: '98.6%', label: '客户复购率', sublabel: '长期稳定合作关系' },
  { value: '<48h', label: '样品发货时效', sublabel: '常规品当天发货' },
  { value: '99.2%', label: '批检合格率', sublabel: '严苛质控标准' },
  { value: '50+', label: '合作原厂', sublabel: '遍布欧美日韩' },
]

export default function SupplyChain() {
  return (
    <section id="supply-chain" className="section-padding" style={{ background: 'var(--color-primary)' }}>
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 bg-white/10 text-green-200 border border-white/10">
              <BarChart3 className="w-3.5 h-3.5" />
              供应链实力
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              端到端供应链，<br />
              <span style={{ color: 'var(--color-accent-light)' }}>让好原料触手可及</span>
            </h2>
            <p className="text-white/70 mb-10 leading-relaxed">
              太新美康构建了从全球原料工厂到中国美妆品牌的最短供应路径，
              以专业的库存管理、完善的合规服务和快速的物流响应，
              为您节省时间与成本。
            </p>

            {/* Steps */}
            <div className="space-y-5">
              {steps.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center bg-white/10">
                    <Icon className="w-5 h-5 text-green-300" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">{title}</div>
                    <div className="text-white/60 text-sm leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: 'var(--color-accent)', color: '#fff' }}
            >
              了解采购合作方案
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Metrics */}
          <div className="grid grid-cols-2 gap-5">
            {metrics.map(({ value, label, sublabel }) => (
              <div
                key={label}
                className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--color-accent-light)' }}>
                  {value}
                </div>
                <div className="text-white font-semibold text-base mb-1">{label}</div>
                <div className="text-white/50 text-xs">{sublabel}</div>
              </div>
            ))}

            {/* Timeline card */}
            <div className="col-span-2 rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="text-sm font-semibold text-white mb-4">标准服务流程</div>
              <div className="flex items-center justify-between text-xs text-white/60 relative">
                <div className="absolute top-3 left-0 right-0 h-px bg-white/20 z-0"></div>
                {['咨询需求', '推荐原料', '发送样品', '技术评估', '签订合同', '正式供货'].map((step, i) => (
                  <div key={step} className="flex flex-col items-center gap-2 z-10">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: i < 3 ? 'var(--color-accent)' : 'rgba(255,255,255,0.15)', color: '#fff' }}>
                      {i + 1}
                    </div>
                    <span className="hidden sm:block text-center leading-tight">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
