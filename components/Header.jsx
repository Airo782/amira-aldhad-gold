import React, { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, t, toggleLanguage } = useLanguage()

  const navLinks = [
    { name: t.nav.products, href: '#products' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.investment, href: '#investment' },
    { name: t.nav.contact, href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
            <span className="text-luxury font-bold text-lg">A</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-luxury">{t.brand.name}</h1>
            <p className="text-xs text-gray-600">{t.brand.tagline}</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-luxury hover:text-gold transition-colors font-medium">
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-gold text-luxury hover:bg-gold hover:text-white transition-all text-sm font-bold"
          >
            <Globe size={16} />
            {language === 'en' ? 'العربية' : 'English'}
          </button>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 py-1 rounded-full border border-gold text-luxury text-xs font-bold"
          >
            {language === 'en' ? 'AR' : 'EN'}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-cream border-t border-gold-light">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block text-luxury hover:text-gold transition-colors font-medium" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
