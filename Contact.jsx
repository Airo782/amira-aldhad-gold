import React, { useState } from 'react'
import { MessageCircle, Send, Phone } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  const contactChannels = [
    {
      name: 'Zangi',
      label: 'Message on Zangi',
      url: 'https://zangi.com',
      icon: MessageCircle,
    },
    {
      name: 'Telegram',
      label: '@Amiraaldha',
      url: 'https://t.me/Amiraaldha',
      icon: MessageCircle,
    },
    {
      name: 'WhatsApp',
      label: '+1 (717) 683-4569',
      url: 'https://wa.me/17176834569',
      icon: MessageCircle,
    },
  ]

  return (
    <section id="contact" className="bg-cream py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-700">
            Ready to explore premium gold and investment opportunities? Contact us today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-luxury mb-8">Contact Channels</h3>
            <div className="space-y-4">
              {contactChannels.map((channel, index) => {
                const Icon = channel.icon
                return (
                  <a key={index} href={channel.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">
                    <Icon className="text-gold flex-shrink-0" size={32} />
                    <div>
                      <p className="font-semibold text-luxury">{channel.name}</p>
                      <p className="text-gray-600">{channel.label}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-luxury mb-8">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gold-light rounded-lg focus:outline-none focus:border-gold" required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gold-light rounded-lg focus:outline-none focus:border-gold" required />
              <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows="5" className="w-full px-4 py-3 border border-gold-light rounded-lg focus:outline-none focus:border-gold resize-none" required></textarea>
              <button type="submit" className="w-full btn btn-primary flex items-center justify-center space-x-2">
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
