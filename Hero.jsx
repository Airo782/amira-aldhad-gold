import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-r from-cream to-cream-dark py-20 md:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-up">
          <p className="text-gold font-semibold mb-4 uppercase tracking-wider">WELCOME TO LUXURY</p>
          <h1 className="text-4xl md:text-5xl font-bold text-luxury mb-6 leading-tight">
            Premium Gold Selection & Investment Opportunities
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Discover our exclusive collection of premium gold jewelry and explore lucrative investment opportunities with AMIRA ALDHAD.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn btn-primary">View Collection</button>
            <button className="btn btn-secondary">Get in Touch</button>
          </div>
        </div>
        <div className="animate-fade-in">
          <div className="w-full h-96 bg-gradient-to-br from-gold-light to-gold rounded-lg shadow-2xl flex items-center justify-center">
            <p className="text-luxury text-2xl font-bold">Premium Gold Collection</p>
          </div>
        </div>
      </div>
    </section>
  )
}
