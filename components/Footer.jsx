import React from 'react'
import { MessageCircle, Send, Phone } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="bg-luxury text-white py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <span className="text-luxury font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="font-bold">{t.brand.name}</h3>
                <p className="text-xs text-gray-400">{t.brand.short_tagline}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{t.footer.description}</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.footer.quick_links}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#products" className="hover:text-gold transition-colors">{t.nav.products}</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">{t.nav.about}</a></li>
              <li><a href="#investment" className="hover:text-gold transition-colors">{t.nav.investment}</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.footer.services}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {t.footer.service_list.map((service, index) => (
                <li key={index}><a href="#" className="hover:text-gold transition-colors">{service}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.footer.connect}</h4>
            <div className="space-y-3">
              <a href="https://services.zangi.com/dl/conversation/8719484678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors">
                <MessageCircle size={18} />
                <span className="text-sm">Zangi</span>
              </a>
              <a href="https://t.me/Amiraaldha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors">
                <Send size={18} />
                <span className="text-sm">Telegram</span>
              </a>
              <a href="https://wa.me/17176834569" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors">
                <MessageCircle size={18} />
                <span className="text-sm">WhatsApp</span>
              </a>
              <a href="tel:+17176834569" className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors">
                <Phone size={18} />
                <span className="text-sm">+1 (717) 683-4569</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} {t.brand.name}. {t.footer.rights}</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gold transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-gold transition-colors">{t.footer.terms}</a>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-4">
          {t.footer.made_with}
        </div>
      </div>
    </footer>
  )
}
