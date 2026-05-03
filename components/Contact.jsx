import React, { useState } from 'react'
import { MessageCircle, Send } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
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

  const contactChannels = [
    {
      name: 'Zangi',
      label: 'Message on Zangi',
      url: 'https://services.zangi.com/dl/conversation/8719484678',
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
          <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-4">{t.contact.title}</h2>
          <p className="text-lg text-gray-700">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-luxury mb-8">{t.contact.channels_title}</h3>
            <div className="space-y-4">
              {contactChannels.map((channel, index) => {
                const Icon = channel.icon
                return (
                  <a key={index} href={channel.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">
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
            <h3 className="text-2xl font-bold text-luxury mb-8">{t.contact.send_message}</h3>
            <form action="https://formspree.io/f/maqvqaww" method="POST" className="space-y-4">
              <input type="text" name="name" placeholder={t.contact.name_placeholder} value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gold-light rounded-lg focus:outline-none focus:border-gold" required />
              <input type="email" name="email" placeholder={t.contact.email_placeholder} value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gold-light rounded-lg focus:outline-none focus:border-gold" required />
              <textarea name="message" placeholder={t.contact.message_placeholder} value={formData.message} onChange={handleChange} rows="5" className="w-full px-4 py-3 border border-gold-light rounded-lg focus:outline-none focus:border-gold resize-none" required></textarea>
              <button type="submit" className="w-full btn btn-primary flex items-center justify-center gap-2">
                <Send size={20} />
                <span>{t.contact.submit_button}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
