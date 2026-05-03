import React from 'react'
import { CheckCircle } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="bg-cream py-20 md:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="w-full h-96 bg-gradient-to-br from-gold-light to-gold rounded-lg shadow-xl flex items-center justify-center">
            <p className="text-white text-lg font-bold">{t.about.image_alt}</p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-6">{t.about.title}</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {t.about.description1}
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {t.about.description2}
          </p>

          <div className="space-y-4">
            {t.about.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
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
