import React from 'react'
import { Shield, Briefcase, CheckCircle } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

export default function Investment() {
  const { t } = useLanguage()

  const icons = [Shield, Briefcase, CheckCircle]

  return (
    <section id="investment" className="bg-white py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-4">{t.investment.title}</h2>
          <p className="text-lg text-gray-700">
            {t.investment.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.investment.opportunities.map((opportunity, index) => {
            const Icon = icons[index]
            return (
              <div key={index} className="bg-cream rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <Icon className="text-gold mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-luxury mb-4">{opportunity.title}</h3>
                <p className="text-gray-700 leading-relaxed">{opportunity.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
