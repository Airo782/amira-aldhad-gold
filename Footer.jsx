import React from 'react'
import { MessageCircle, Send, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-luxury text-white py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <span className="text-luxury font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="font-bold">AMIRA ALDHAD</h3>
                <p className="text-xs text-gray-400">LUXURY GOLD</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">Premium gold jewelry and investment opportunities.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#products" className="hover:text-gold transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="#investment" className="hover:text-gold transition-colors">Investment</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gold transition-colors">Gold Jewelry</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Investment</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Consultation</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Authentication</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <a href="https://services.zangi.com/dl/conversation/8719484678" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors">
                <MessageCircle size={18} />
                <span className="text-sm">Zangi</span>
              </a>
              <a href="https://t.me/Amiraaldha" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors">
                <Send size={18} />
                <span className="text-sm">Telegram</span>
              </a>
              <a href="https://wa.me/17176834569" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors">
                <MessageCircle size={18} />
                <span className="text-sm">WhatsApp</span>
              </a>
              <a href="tel:+17176834569" className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors">
                <Phone size={18} />
                <span className="text-sm">+1 (717) 683-4569</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} AMIRA ALDHAD. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-4">
          Made with Manus
        </div>
      </div>
    </footer>
  )
}
