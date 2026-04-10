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

            <h1 className="hero-name">I'm Himanshu Gurjar</h1>

            <div className="hero-role">
              <span className="role-prefix">&lt;</span>
              <span className="typed-text">{displayText}</span>
              <span className="cursor">|</span>
              <span className="role-suffix">/&gt;</span>
            </div>

            <p className="hero-desc">
              Full-stack developer passionate about building secure, scalable web applications and cybersecurity solutions. Specializing in MERN stack and cloud technologies.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <Terminal size={18} />
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                <Mail size={18} />
                Get In Touch
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com" className="social-link" title="GitHub">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="social-link" title="LinkedIn">
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
              <div className="avatar-main">HG</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
