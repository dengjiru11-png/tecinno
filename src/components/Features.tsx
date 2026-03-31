import { ShieldCheck, Truck, Microscope, HeadphonesIcon, Globe, Leaf } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: '品质溯源保障',
    desc: '每批原料均附原厂COA、MSDS及第三方检测报告，质量全程可追溯，合规无忧。',
    color: '#2d6a4f',
  },
  {
    icon: Globe,
    title: '全球供应链整合',
    desc: '对接欧洲、南美、日本及国内的顶级原料生产商，保障货源稳定。',
    color: '#b5936e',
  },
  {
    icon: Microscope,
    title: '专业技术支持',
    desc: '提供原料应用咨询、配方适配评估及小试支持。',
    color: '#1a3a2a',
  },
  {
    icon: Truck,
    title: '弹性库存备货',
    desc: '核心原料保持安全库存，支持小样10g起拿，批量货最快48小时内发出。',
    color: '#2d6a4f',
  },
  {
    icon: Leaf,
    title: '天然 & 功效导向',
    desc: '重点布局天然植物提取物、绿色防腐体系及高效活性原料，契合当下功效护肤趋势。',
    color: '#b5936e',
  },
  {
    icon: HeadphonesIcon,
    title: '全程贴身服务',
    desc: '专属客户经理1对1服务，从选料→测试→量产→上市全链条跟进，响应时效4小时内。',
    color: '#1a3a2a',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-padding" style={{ background: '#f8f9f6' }}>
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 text-green-800 bg-green-50 border border-green-100">
            核心优势
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            为什么选择太新美康？
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            我们不只是原料供应商，更是您从研发到量产全链条的专业伙伴
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                style={{ background: color + '15', color }}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>
                {title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
