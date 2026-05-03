import React from 'react'
import { CheckCircle } from 'lucide-react'

export default function About() {
  const features = [
    'Premium quality gold jewelry and investment pieces',
    'Transparent pricing and authentic certification',
    'Expert guidance on gold investment opportunities',
  ]

  return (
    <section id="about" className="bg-cream py-20 md:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="w-full h-96 bg-gradient-to-br from-gold-light to-gold rounded-lg shadow-xl flex items-center justify-center">
            <p className="text-white text-lg font-bold">About Image</p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-6">Meet Amira Aldhad</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            With years of expertise in the luxury gold market, Amira Aldhad has built a reputation for excellence, authenticity, and trust. Our commitment is to provide premium quality gold products and investment opportunities to discerning clients worldwide.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Every piece in our collection is carefully selected and authenticated to ensure the highest standards of quality and value. We believe in transparent dealings and long-term relationships with our clients.
          </p>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="text-gold flex-shrink-0 mt-1" size={24} />
                <span className="text-lg text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
