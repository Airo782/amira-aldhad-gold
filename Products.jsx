import React from 'react'

const products = [
  {
    id: 1,
    name: 'Gold Necklace & Hand Band',
    price: '$2,000',
    weight: '50g',
    description: 'Exquisite collection of premium gold necklaces and hand bands, crafted with precision and elegance.',
  },
  {
    id: 2,
    name: 'Premium Gold Bangles & Bracelets',
    price: '$3,000',
    weight: '75g',
    description: 'Stunning array of gold bangles and bracelets featuring intricate designs and exceptional craftsmanship.',
  },
  {
    id: 3,
    name: 'Luxury Diamond Rolex Watch Collection',
    price: '$6,000',
    weight: 'Premium Timepiece',
    description: 'Exquisite diamond-studded Rolex watches featuring premium craftsmanship, precision engineering, and timeless luxury design.',
  },
]

export default function Products() {
  return (
    <section id="products" className="bg-white py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-4">Premium Gold Jewelry</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-cream rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-full h-64 bg-gradient-to-br from-gold-light to-gold-dark flex items-center justify-center">
                <p className="text-white text-lg font-bold">Product Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-luxury mb-2">{product.name}</h3>
                <p className="text-gold text-2xl font-bold mb-2">{product.price}</p>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-sm text-gray-500 mb-4">Weight: {product.weight}</p>
                <button className="w-full btn btn-primary">Inquire Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
