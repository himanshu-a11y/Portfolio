import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Code, Terminal, Globe, Shield, Cpu, Database } from 'lucide-react'
import { Github } from './SocialIcons'
import './Projects.css'

const projects = [
  {
    title: 'Web Pentration Tool',
    category: 'Cybersecurity',
    description: 'AI-integrated tool for vulnerability detection and automated remediation using Python and security analysis libraries.',
    tech: ['React', 'JavaScript', 'Python', 'Flask', 'MySQL', 'Cybersecurity', 'Nmap', 'Wireshark', 'Kali Linux', 'Penetration Testing', 'Web Security'],
    github: 'https://github.com/himanshu-a11y/Pentration-Tool',
    demo: '#',
    color: '250 84% 64%',
    icon: <Shield size={32} />
  },
  {
    title: 'SkillBridge (ITI Student Job Matching Portal)',
    category: 'Full Stack',
    description: 'SkillBridge is a MERN-based platform connecting ITI students with employers through skill-based job matching.',
    status: 'Running',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Authentication', 'Redis (for caching)'],
    github: 'https://github.com/himanshu-a11y/Full-stack-Project',
    demo: '#',
    color: '172 80% 50%',
    icon: <Database size={32} />
  },
  {
    title: 'Spam ML Classifier',
    category: 'Data Science',
    description: 'High-accuracy spam detection system utilizing NLP techniques and Scikit-learn classification algorithms.',
    tech: ['Python', 'Scikit-learn', 'NLP'],
    github: 'https://github.com/himanshu-a11y/Spam-Email-Detection',
    demo: '#',
    color: '217 91% 60%',
    icon: <Cpu size={32} />
  },
  {
    title: 'Beyond Grades',
    category: 'Full Stack',
    description: 'Soft skills evaluation system using bias-adjusted scoring and interactive data-driven performance insights.',
    status: 'Running',
    tech: ['Next.js', 'MongoDB', 'Node.js', 'Tailwind','Express.js', 'Kotlin'],
    github: 'https://github.com/Spark-Beyond-Grades',
    demo: '#',
    color: '250 84% 64%',
    icon: <Globe size={32} />
  }
]

const categories = ['All', 'Full Stack', 'Cybersecurity', 'Data Science']

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter || p.tech.includes(filter))

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">projects</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A collection of technical projects built with security and scalability in mind.</p>
        </div>

        <div className="project-filters">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((p, i) => (
              <motion.div
                layout
                key={p.title}
                className="project-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="project-header" style={{ background: `hsla(${p.color}, 0.15)` }}>
                   <div className="project-icon" style={{ color: `hsl(${p.color})` }}>
                    {p.icon}
                   </div>
                </div>
                
                <div className="project-body">
                  <div className="project-top">
                    <div className="project-cat-container">
                      <span className="project-cat" style={{ color: `hsl(${p.color})` }}>{p.category}</span>
                      {p.status && <span className="project-status">{p.status}</span>}
                    </div>
                    <h3 className="project-title">{p.title}</h3>
                  </div>
                  
                  <p className="project-desc">{p.description}</p>
                  
                  <div className="project-tech">
                    {p.tech.map(t => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                      <Github size={18} /> GitHub
                    </a>
                    <a href={p.demo} target="_blank" rel="noreferrer" className="project-link">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
