import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

// ─── EmailJS 配置 ──────────────────────────────────────────────
// 请前往 https://www.emailjs.com 注册并填入你自己的参数
const EMAILJS_SERVICE_ID  = 'service_zyhil3g'
const EMAILJS_TEMPLATE_ID = 'template_vwh5ai9'
const EMAILJS_PUBLIC_KEY  = 'eNzmI-aNY6gMjOhZ3'
// ──────────────────────────────────────────────────────────────

const contactInfo = [
  { icon: Phone, label: '商务电话', value: '13570073689' },
  { icon: Mail, label: '邮件咨询', value: '1152038780@qq.com' },
  { icon: MapPin, label: '公司地址', value: '海南省海口市秀英区西秀镇长海大道14号华盛中央公园1期6栋2903室' },
  { icon: Clock, label: '服务时间', value: '周一至周五 9:00-18:00' },
]

const inquiryTypes = ['产品咨询', '申请样品', '批量采购', '技术支持', '合作洽谈', '其他']

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '', type: '产品咨询', message: '', product: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // 将表单数据映射为 EmailJS 模板变量
    const templateParams = {
      from_name:    form.name,
      from_company: form.company,
      from_phone:   form.phone,
      from_email:   form.email || '（未填写）',
      inquiry_type: form.type,
      product_name: form.product || '（未填写）',
      message:      form.message || '（无）',
      to_email:     'dengjiru11@gmail.com',
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setSubmitted(true)
    } catch (err: any) {
      console.error('EmailJS error:', err)
      const detail = err?.text || err?.message || JSON.stringify(err)
      setError(`发送失败：${detail}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-padding" style={{ background: '#f8f9f6' }}>
      <div className="container-max">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 text-green-800 bg-green-50 border border-green-100">
            联系我们
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            立即开始合作
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            填写下方表单，我们的客户经理将在4小时内与您联系，提供专属解决方案
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-lg mb-5" style={{ color: 'var(--color-primary)' }}>联系方式</h3>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--color-primary)' + '15' }}>
                      <Icon className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">{label}</div>
                      <div className="text-sm font-medium text-gray-700">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WeChat QR placeholder */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <div className="w-36 h-36 mx-auto rounded-xl mb-3 overflow-hidden border-2 flex items-center justify-center" style={{ borderColor: 'var(--color-primary)' }}>
                <img
                  src="/wechat-qr.png"
                  alt="企业微信二维码"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement
                    target.style.display = 'none'
                    const fallback = target.nextElementSibling as HTMLElement
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                <div
                  className="w-full h-full items-center justify-center text-white text-sm font-medium hidden"
                  style={{ background: 'var(--color-primary)' }}
                >
                  扫码添加<br />企业微信
                </div>
              </div>
              <p className="text-xs text-gray-400">添加专属客户经理，获取最新原料资讯</p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-2xl p-12 border border-gray-100 flex flex-col items-center justify-center text-center h-full">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: 'var(--color-primary)' + '15' }}>
                  <CheckCircle className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>提交成功！</h3>
                <p className="text-gray-500 text-sm">感谢您的咨询，我们的客户经理将在4小时内联系您。</p>
                <button
                  className="mt-6 px-6 py-2.5 text-sm font-semibold text-white rounded-lg"
                  style={{ background: 'var(--color-accent)' }}
                  onClick={() => setSubmitted(false)}
                >
                  再次提交
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-gray-100 space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">您的姓名 <span className="text-red-400">*</span></label>
                    <input
                      required
                      type="text"
                      placeholder="请输入姓名"
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                      className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">公司名称 <span className="text-red-400">*</span></label>
                    <input
                      required
                      type="text"
                      placeholder="请输入公司名称"
                      value={form.company}
                      onChange={(e) => setForm({...form, company: e.target.value})}
                      className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">联系电话 <span className="text-red-400">*</span></label>
                    <input
                      required
                      type="tel"
                      placeholder="请输入手机号"
                      value={form.phone}
                      onChange={(e) => setForm({...form, phone: e.target.value})}
                      className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">电子邮箱</label>
                    <input
                      type="email"
                      placeholder="请输入邮箱"
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                      className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">咨询类型</label>
                  <div className="flex flex-wrap gap-2">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setForm({...form, type})}
                        className="px-3 py-1.5 text-xs rounded-lg border font-medium transition-all"
                        style={
                          form.type === type
                            ? { background: 'var(--color-primary)', color: '#fff', borderColor: 'var(--color-primary)' }
                            : { background: '#f9fafb', color: '#374151', borderColor: '#e5e7eb' }
                        }
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                {form.type === '申请样品' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">感兴趣的原料名称</label>
                    <input
                      type="text"
                      placeholder="如：烟酰胺、透明质酸钠..."
                      value={form.product}
                      onChange={(e) => setForm({...form, product: e.target.value})}
                      className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">留言内容</label>
                  <textarea
                    rows={4}
                    placeholder="请描述您的需求，例如：所需原料、用途、月用量等..."
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 text-sm font-semibold text-white rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: 'var(--color-primary)' }}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      发送中，请稍候…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      立即提交咨询
                    </>
                  )}
                </button>
                {error && (
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-red-50 border border-red-100 text-xs text-red-600">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    {error}
                  </div>
                )}
                <p className="text-xs text-gray-400 text-center">您的信息将严格保密，仅用于商务联系</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
