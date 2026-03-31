import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: '首页', href: '#home' },
  {
    label: '产品中心',
    href: '#products',
    children: [
      { label: '抗衰紧致', href: '#products' },
      { label: '微生态控油', href: '#products' },
      { label: '保湿提亮', href: '#products' },
      { label: '舒缓敏感', href: '#products' },
      { label: '头皮护发', href: '#products' },
    ]
  },
  { label: '供应链实力', href: '#supply-chain' },
  { label: '行业资讯', href: '#news' },
  { label: '关于我们', href: '#about' },
  { label: '联系我们', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="太新美康 Logo"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement
                target.style.display = 'none'
                const fallback = target.nextElementSibling as HTMLElement
                if (fallback) fallback.style.display = 'flex'
              }}
            />
            <div className="w-9 h-9 rounded-lg items-center justify-center hidden" style={{ background: 'var(--color-primary)' }}>
              <span className="text-white text-sm font-bold">太</span>
            </div>
            <div>
              <div className="text-base font-bold leading-tight" style={{ color: 'var(--color-primary)' }}>太新美康</div>
              <div className="text-xs" style={{ color: 'var(--color-muted)' }}>海南太新美康生物科技</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.children ? (
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-100"
                    style={{ color: scrolled ? 'var(--color-text)' : '#1c1c1c' }}
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-gray-100"
                    style={{ color: scrolled ? 'var(--color-text)' : '#1c1c1c' }}
                  >
                    {link.label}
                  </a>
                )}
                {link.children && (
                  <div
                    className={`absolute top-full left-0 mt-1 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                      openDropdown === link.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-800 transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-all hover:opacity-90 hover:shadow-lg"
              style={{ background: 'var(--color-accent)' }}
            >
              立即索样
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container-max py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <a
                href="#contact"
                className="block w-full text-center px-5 py-3 text-sm font-semibold text-white rounded-lg"
                style={{ background: 'var(--color-accent)' }}
                onClick={() => setIsOpen(false)}
              >
                立即索样
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
