import { motion } from 'framer-motion'
import { Layout, Server, Wrench, Database, Shield, Code, Palette } from 'lucide-react'
import './Skills.css'

const skillGroups = [
  {
    category: 'Frontend Development',
    icon: <Layout size={24} />,
    skills: [
      { name: 'React.js / Next.js', level: 80 },
      { name: 'JavaScript (ES6+)', level: 78 },
      { name: 'Tailwind CSS / Sass', level: 80 },
      { name: 'HTML5 / CSS3', level: 95 },
    ],
  },
  {
    category: 'Backend & Database',
    icon: <Server size={24} />,
    skills: [
      { name: 'Node.js / Express', level: 81 },
      { name: 'MongoDB / MySQL', level: 70 },
      { name: 'RESTful APIs', level: 69 },
      { name: 'JWT Authentication', level: 60 },
    ],
  },
  {
    category: 'Cybersecurity Tools',
    icon: <Shield size={24} />,
    skills: [
      { name: 'Penetration Testing', level: 75 },
      { name: 'Nmap / Wireshark', level: 80 },
      { name: 'Kali Linux', level: 85 },
      { name: 'Web Security', level: 80 },
    ],
  },
  {
    category: 'Developer Utilities',
    icon: <Wrench size={24} />,
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Vite / Webpack', level: 85 },
      { name: 'Docker / CI/CD', level: 65 },
      { name: 'Postman', level: 86 },
    ],
  },
]

export default function Skills() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  }

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">technical skills</span>
          <h2 className="section-title">My Expertise</h2>
          <p className="section-subtitle">A comprehensive breakdown of my full-stack development and security proficiency.</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, groupIdx) => (
            <motion.div 
              key={group.category} 
              className="skill-group glass-card"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <h3 className="group-title">
                {group.icon}
                {group.category}
              </h3>
              <div className="skill-bars">
                {group.skills.map(skill => (
                  <div key={skill.name} className="skill-bar-item">
                    <div className="skill-bar-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
