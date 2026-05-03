import React from 'react'
import { useLanguage } from '../LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="bg-gradient-to-r from-cream to-cream-dark py-20 md:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-up">
          <p className="text-gold font-semibold mb-4 uppercase tracking-wider">{t.hero.welcome}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-luxury mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn btn-primary">{t.hero.view_collection}</button>
            <button className="btn btn-secondary">{t.hero.get_in_touch}</button>
          </div>
        </div>
        <div className="animate-fade-in">
          <div className="w-full h-96 bg-gradient-to-br from-gold-light to-gold rounded-lg shadow-2xl flex items-center justify-center">
            <p className="text-luxury text-2xl font-bold">{t.hero.collection_title}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
