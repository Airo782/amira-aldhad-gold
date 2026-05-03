import React from 'react'
import { Shield, Briefcase, CheckCircle } from 'lucide-react'

const opportunities = [
  {
    icon: Shield,
    title: 'Secure Investment',
    description: 'Invest in tangible, valuable assets with proven market stability and growth potential.',
  },
  {
    icon: Briefcase,
    title: 'Expert Guidance',
    description: 'Receive personalized advice from experienced gold market professionals and analysts.',
  },
  {
    icon: CheckCircle,
    title: 'Transparent Deals',
    description: 'All transactions are fully documented with authentic certification and clear terms.',
  },
]

export default function Investment() {
  return (
    <section id="investment" className="bg-white py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-4">Gold Investment</h2>
          <p className="text-lg text-gray-700">
            Explore lucrative investment opportunities in premium gold with expert guidance and transparent terms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon
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
