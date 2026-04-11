import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Send, CheckCircle, AlertCircle, MapPin, MessageSquare } from 'lucide-react'
import { Github, Linkedin } from './SocialIcons'
import './Contact.css'

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'harsanahimanshu21@gmail.com',
    href: 'mailto:harsanahimanshu21@gmail.com',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/himanshu-gurjar',
    href: 'https://linkedin.com/in/himanshu-gurjar',
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    value: 'github.com/himanshu-gurjar',
    href: 'https://github.com/himanshu-a11y',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong.' })
      }
    } catch (err) {
      console.error('Submission error:', err)
      setStatus({ type: 'error', message: 'Failed to connect to the server.' })
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind or want to discuss security? I&apos;d love to hear from you!</p>
        </div>

        <div className="contact-layout">
          <motion.div 
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="info-card glass-card">
              <h3 className="info-title">Let&apos;s talk!</h3>
              <p className="info-desc">
                I am always open to discussing new projects, creative ideas, or opportunities for collaboration in development and security.
              </p>
              
              <div className="info-links">
                {contactInfo.map((c, i) => (
                  <motion.a 
                    key={c.label} 
                    href={c.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="info-link"
                    variants={itemVariants}
                  >
                    <span className="info-link-icon">{c.icon}</span>
                    <div className="info-link-text">
                      <span className="info-link-label">{c.label}</span>
                      <span className="info-link-value">{c.value}</span>
                    </div>
                  </motion.a>
                ))}
                
                <motion.div className="info-link" variants={itemVariants}>
                  <span className="info-link-icon"><MapPin size={20} /></span>
                  <div className="info-link-text">
                    <span className="info-link-label">Location</span>
                    <span className="info-link-value">Jaipur, Rajasthan, India</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {status.message && (
                  <motion.div 
                    className={`form-message ${status.type}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject || ''}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Inquiry about..."
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input form-textarea"
                  placeholder="How can I help you?"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                {loading ? 'Processing...' : (
                  <>
                    <Send size={18} style={{ marginRight: '8px' }} /> 
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <span className="footer-name">Himanshu Gurjar</span>
            <p>Full Stack Developer • Cybersecurity Enthusiast</p>
            <div className="footer-divider" />
            <p>© {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  )
}
