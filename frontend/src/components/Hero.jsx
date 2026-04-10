import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, Terminal, Database, Shield } from 'lucide-react'
import { Github, Linkedin } from './SocialIcons'
import './Hero.css'

const roles = ['Full Stack Developer', 'Cyber Security Enthusiast']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const handleType = () => {
      const currentRole = roles[roleIndex]
      if (isDeleting) {
        setDisplayText(prev => prev.substring(0, prev.length - 1))
        setTypingSpeed(50)
      } else {
        setDisplayText(prev => currentRole.substring(0, prev.length + 1))
        setTypingSpeed(150)
      }

      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex, typingSpeed])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  const handleDownload = (format) => {
    window.location.href = `/api/download/cv/${format}`
  }

  return (
    <section id="hero" className="hero">
      {/* Background Elements */}
      <div className="hero-visual-bg">
        <div className="orb-1" />
        <div className="orb-2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-dot" />
            Empowering the Digital Future
          </motion.div>

          <motion.h1 className="hero-name" variants={itemVariants}>
            Hi, I&apos;m <span className="gradient-text">Himanshu</span>
            <br />
            <span className="gradient-text">Gurjar</span>
          </motion.h1>

          <motion.div className="hero-role" variants={itemVariants}>
            <span className="role-prefix">{'< '}</span>
            <span className="typed-text">{displayText}</span>
            <span className="cursor" />
            <span className="role-suffix">{' />'}</span>
          </motion.div>

          <motion.p className="hero-desc" variants={itemVariants}>
            A passionate Full-Stack developer focused on building secure, scalable, and modern web applications with MERN stack and a keen interest in Cybersecurity.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <div className="download-group">
              <button onClick={() => handleDownload('pdf')} className="btn btn-primary" aria-label="Download CV as PDF">
                <Download size={18} /> CV (PDF)
              </button>
              <button onClick={() => handleDownload('docx')} className="btn btn-outline" aria-label="Download CV as DOCX">
                Word
              </button>
            </div>
            <a href="#contact" className="btn btn-outline">
              <Mail size={18} /> Contact Me
            </a>
          </motion.div>

          <motion.div className="hero-socials" variants={itemVariants}>
            <a href="https://github.com/himanshu-a11y" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/himanshu-gurjar-02ab172aa/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="mailto:harsanahimanshu21@gmail.com" className="social-link" aria-label="Email"><Mail size={20} /></a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="avatar-container">
            <div className="avatar-ring" />
            <div className="avatar-glow" />
            <div className="avatar-main">
              <span>HG</span>
            </div>
            
            {/* Tech Badges */}
            <div className="floating-badge badge-react">
              <Terminal size={16} /> React Specialist
            </div>
            <div className="floating-badge badge-node">
              <Shield size={16} /> Security Expert
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
