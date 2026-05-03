import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Investment', href: '#investment' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
            <span className="text-luxury font-bold text-lg">A</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-luxury">AMIRA ALDHAD</h1>
            <p className="text-xs text-gray-600">LUXURY GOLD & INVESTMENT</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-luxury hover:text-gold transition-colors font-medium">
              {link.name}
            </a>
          ))}
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-cream border-t border-gold-light">
          <div className="container py-4 space-y-4">
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
