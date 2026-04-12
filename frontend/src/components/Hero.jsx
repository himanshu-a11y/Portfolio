import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Mail, ChevronDown, FileText, Code } from 'lucide-react'
import { Github, Linkedin } from './SocialIcons'
import './Hero.css'

const roles = ['Full Stack Developer', 'Cyber Security Enthusiast']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [showCVMenu, setShowCVMenu] = useState(false)

  const handleDownload = (format) => {
    window.location.href = `/api/download/cv/${format}`
    setShowCVMenu(false)
  }

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

  return (
    <section className="hero">
      {/* Content */}

      <div className="container">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <div className="badge-dot"></div>
              <span>Welcome to my portfolio</span>
            </div>

            <h1 className="hero-name">Himanshu Gurjar</h1>

            <div className="hero-role">
              <span className="role-prefix">&lt;</span>
              <span className="typed-text">{displayText}</span>
              <span className="cursor">|</span>
              <span className="role-suffix">/&gt;</span>
            </div>

            <p className="hero-desc">
             Full-stack developer and cybersecurity enthusiast building secure, scalable applications. I code with precision and think like an attacker.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
              
              <div className="cv-dropdown">
                <button 
                  className="btn btn-outline cv-btn"
                  onClick={() => setShowCVMenu(!showCVMenu)}
                  aria-label="Download CV"
                >
                  <Download size={18} />
                  Download CV
                  <ChevronDown size={14} className="dropdown-icon" />
                </button>
                
                <AnimatePresence>
                  {showCVMenu && (
                    <motion.div 
                      className="cv-dropdown-menu"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                    >
                      <button onClick={() => handleDownload('pdf')} className="dropdown-item">
                        <FileText size={16} />
                        <span>PDF</span>
                      </button>
                      <button onClick={() => handleDownload('docx')} className="dropdown-item">
                        <Code size={16} />
                        <span>Word</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/himanshu-a11y" className="social-link" title="GitHub">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/himanshu-gurjar-02ab172aa/" className="social-link" title="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="mailto:harsanahimanshu21@gmail.com" className="social-link" title="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="avatar-container">
              <div className="avatar-ring"></div>
              <div className="avatar-glow"></div>
              <div className="avatar-main">
                <img src="/assets/pic.jpeg" alt="Himanshu Gurjar" className="avatar-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
