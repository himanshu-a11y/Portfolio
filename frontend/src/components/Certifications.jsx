import { motion } from 'framer-motion'
import { Award, ExternalLink, ShieldCheck, Zap, Globe, Code } from 'lucide-react'
import './Certifications.css'

const certifications = [
  {
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: 'In Progress',
    icon: <ShieldCheck size={24} />,
    link: '#'
  },
  {
    title: 'Red Hat System Admin I',
    issuer: 'Red Hat',
    date: '2024',
    icon: <Globe size={24} />,
    link: '#'
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    icon: <ShieldCheck size={24} />,
    link: '#'
  },
  {
    title: 'Governance, Risk, and Compliance',
    issuer: 'Coursera',
    date: '2025',
    icon: <Zap size={24} />,
    link: '#'
  },
  {
    title: 'Risk Management for Cyber Security Managers',
    issuer: 'Coursera',
    date: '2025',
    icon: <Code size={24} />,
    link: '#'
  }
]

export default function Certifications() {
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
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section id="certifications" className="certs-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">achievements</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Professional credentials and verified skills across cybersecurity and development.</p>
        </div>

        <motion.div 
          className="certs-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              className="cert-card glass-card"
              variants={itemVariants}
            >
              <div className="cert-badge">
                {cert.icon}
              </div>
              <div className="cert-info">
                <span className="issuer">{cert.issuer}</span>
                <h3>{cert.title}</h3>
                <span className="date">{cert.date}</span>
              </div>
              <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link" aria-label="View Certificate">
                <ExternalLink size={20} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
