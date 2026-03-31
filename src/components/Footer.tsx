import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const productLinks = ['抗衰紧致', '微生态控油', '保湿提亮', '舒缓敏感', '头皮护发']
const serviceLinks = ['申请样品', '技术咨询', '配方适配评估', '合规文件下载', '供应商合作']
const aboutLinks = ['关于太新美康', '发展历程', '核心团队', '资质认证', '新闻动态']

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-primary)' }}>
      {/* Main Footer */}
      <div className="container-max py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.png"
                alt="太新美康 Logo"
                className="h-10 w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              <div>
                <div className="text-base font-bold text-white">太新美康</div>
                <div className="text-xs text-white/50">海南太新美康生物科技有限公司</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-xs">
              专注化妆品原料代理经销，整合全球优质供应链，
              为中国美妆品牌提供专业原料解决方案。
            </p>
            <div className="space-y-2.5">
              {[
                { icon: Phone, text: '13570073689' },
                { icon: Mail, text: '1152038780@qq.com' },
                { icon: MapPin, text: '海南省海口市秀英区西秀镇长海大道14号华盛中央公园1期6栋2903室' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-sm text-white/60">
                  <Icon className="w-4 h-4 text-white/40" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">产品中心</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#products" className="text-sm text-white/55 hover:text-white transition-colors hover:pl-0.5 inline-block transition-all">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">服务支持</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#contact" className="text-sm text-white/55 hover:text-white transition-colors inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">了解我们</h4>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <a href="#about" className="text-sm text-white/55 hover:text-white transition-colors inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-max py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © 2025 海南太新美康生物科技有限公司 · 琼ICP备XXXXXXXX号
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors flex items-center gap-1">
              隐私政策 <ExternalLink className="w-3 h-3" />
            </a>
            <a href="#" className="hover:text-white/70 transition-colors flex items-center gap-1">
              使用条款 <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
