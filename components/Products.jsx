import React from 'react'
import { useLanguage } from '../LanguageContext'

export default function Products() {
  const { t } = useLanguage()

  const productImages = [
    '/assets/luxury-gold-set.jpg',
    '/assets/luxury-gold-set.jpg',
    '/assets/luxury-gold-set.jpg',
    '/assets/diamond-gold-set.jpg'
  ]

  const productPrices = [
    '$2,000',
    '$3,000',
    '$500',
    '$1,000'
  ]

  return (
    <section id="products" className="bg-white py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-4">{t.products.title}</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.products.items.map((product, index) => (
            <div key={index} className="bg-cream rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-full h-64 overflow-hidden">
                <img 
                  src={productImages[index]} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-luxury mb-2">{product.name}</h3>
                <p className="text-gold text-2xl font-bold mb-2">{productPrices[index]}</p>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                <p className="text-xs text-gray-500 mb-4">{t.products.weight}: {product.weight}</p>
                <button className="w-full btn btn-primary">{t.products.inquire}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
