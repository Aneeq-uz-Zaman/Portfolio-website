import React, { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const contentType = response.headers.get('content-type') || '';
      let data = {};

      if (contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const rawText = await response.text();
        data = { error: rawText.slice(0, 180) };
      }

      if (!response.ok) {
        throw new Error(data.error || `Failed to send message. Status ${response.status}`);
      }

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully. I will get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      const fallbackMessage =
        'Unable to send message right now. If you are testing locally, run with Vercel so /api routes are available.';

      setSubmitStatus({
        type: 'error',
        message: error.message || fallbackMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'aneeq24dec@gmail.com',
      href: 'mailto:aneeq24dec@gmail.com',
      description: 'Best for detailed discussions'
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '+92 3294865587',
      href: 'tel:+923294865587',
     
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'linkedin.com/in/aneeq-uz-zaman',
      href: 'https://linkedin.com/in/aneeq-uz-zaman',
      description: 'Professional networking'
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'github.com/Aneeq-uz-Zaman',
      href: 'https://github.com/Aneeq-uz-Zaman',
      description: 'Check out my code'
    }
  ];

  return (
    <div className="section-shell">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 heading-gradient">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Let's collaborate and build something amazing together
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card p-8 md:p-12 transition-all duration-500">
            <h2 className="text-3xl font-bold mb-8 heading-gradient">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-accent-1 font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#2ed3b7] focus:outline-none focus:ring-2 focus:ring-[#2ed3b7]/20 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-accent-1 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#2ed3b7] focus:outline-none focus:ring-2 focus:ring-[#2ed3b7]/20 transition-all duration-300"
                    placeholder="Your email address"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-accent-1 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#2ed3b7] focus:outline-none focus:ring-2 focus:ring-[#2ed3b7]/20 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-accent-1 font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#2ed3b7] focus:outline-none focus:ring-2 focus:ring-[#2ed3b7]/20 transition-all duration-300"
                  placeholder="Your message here..."
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#2ed3b7] to-[#ff8a3d] text-slate-900 font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {submitStatus.message && (
                <p
                  className={`text-sm font-medium ${
                    submitStatus.type === 'success' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {submitStatus.message}
                </p>
              )}
            </form>
          </div>
          
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-6 p-6 glass-card hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-4xl group-hover:animate-bounce">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent-1 group-hover:text-accent-2 transition-colors duration-300">{method.label}</h3>
                  <p className="text-lg text-gray-200">{method.value}</p>
                  <p className="text-sm text-gray-400">{method.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
