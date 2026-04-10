import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, ChevronDown, User, FileText, Code, Award, Target, Zap } from 'lucide-react'
import './About.css'

const stats = [
  { value: '4+', label: 'Projects Built', icon: <Target size={20} /> },
  { value: '10+', label: 'Technologies', icon: <Zap size={20} /> },
  { value: '2+', label: 'Years Coding', icon: <Award size={20} /> },
]

export default function About() {
  const [showCVMenu, setShowCVMenu] = useState(false)

  const handleDownload = (format) => {
    window.location.href = `/api/download/cv/${format}`
    setShowCVMenu(false)
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  }

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">about me</span>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="about-grid">
          <motion.div 
            className="about-card glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="about-avatar">
              <User size={60} />
            </div>
            
            <div className="about-stats">
              {stats.map((s, i) => (
                <div key={i} className="stat-item">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="about-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h3 className="about-greeting" variants={itemVariants}>
              Hello! I&apos;m <span className="gradient-text">Himanshu Gurjar</span>
            </motion.h3>
            
            <motion.p className="about-bio" variants={itemVariants}>
              Full-Stack Web Developer and Cybersecurity Enthusiast passionate about building secure, scalable, and modern web applications. Skilled in React, JavaScript, Python, and backend development with a strong focus on web security and penetration testing.
            </motion.p>
            
            <motion.p className="about-bio" variants={itemVariants}>
              Beyond engineering, I am a lifelong learner, always exploring the latest in React, AI, and ethical hacking. I believe that every line of code should be clean, efficient, and, most importantly, secure.
            </motion.p>

            <motion.div className="about-tags" variants={itemVariants}>
              {['React', 'MERN Stack', 'Python', 'MySQL', 'Cybersecurity', 'Kali Linux', 'Penetration Testing', 'Web Security'].map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </motion.div>

            <motion.div className="about-actions" variants={itemVariants}>
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              
              <div className="cv-dropdown">
                <button 
                  className="btn btn-outline"
                  onClick={() => setShowCVMenu(!showCVMenu)}
                  aria-label="Download CV"
                >
                  <Download size={18} />
                  Download CV
                  <ChevronDown size={14} style={{ marginLeft: '4px' }} />
                </button>
                
                <AnimatePresence>
                  {showCVMenu && (
                    <motion.div 
                      className="cv-menu"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <button onClick={() => handleDownload('pdf')} className="cv-menu-item">
                        <FileText size={18} /> PDF Format
                      </button>
                      <button onClick={() => handleDownload('docx')} className="cv-menu-item">
                        <Code size={18} /> Word (.docx)
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
