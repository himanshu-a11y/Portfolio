import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react'
import './Education.css'

const timelineData = [
  {
    type: 'education',
    title: 'Bachelor of Technology',
    subtitle: 'Computer Science & Engineering',
    institution: 'JK Lakshmipat University, Jaipur',
    period: '2023 – 2027',
    description: 'Specializing in Cybersecurity. Focused on advanced security protocols, cryptography, and full-stack development.',
    icon: <GraduationCap size={22} />
  },
  {
    type: 'experience',
    title: 'Password Strength Checker Web Application',
    subtitle: 'IoT Internship',
    institution: 'Jawaharlal Nehru University, New Delhi',
    period: 'May 2025 – July 2025',
    description: 'Built a password security web application with strength analysis, secure password generation, and OTP authentication features while applying cybersecurity best practices.',
    icon: <Briefcase size={22} />
  },
  {
    type: 'education',
    title: 'Higher Secondary (XII)',
    subtitle: 'Science (PCM)',
    institution: 'Army Public School, Kota',
    period: '2013 – 2022',
    description: 'Physics, Chemistry, Mathematics, and Computer Science. Secured a distinction with 89% overall.',
    icon: <GraduationCap size={22} />
  }
]

export default function Education() {
  return (
    <section id="education" className="edu-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">journey</span>
          <h2 className="section-title">Education & Experience</h2>
          <p className="section-subtitle">A chronological narrative of my academic foundation and professional growth.</p>
        </div>

        <div className="vertical-timeline">
          <div className="timeline-line" />
          {timelineData.map((item, index) => (
            <motion.div 
              key={index} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <div className="timeline-icon-wrapper">
                <div className="timeline-icon">
                  {item.icon}
                </div>
              </div>
              
              <div className="timeline-card glass-card">
                <div className="timeline-header">
                  <span className="timeline-type-tag">{item.type}</span>
                  <span className="timeline-date"><Calendar size={14} /> {item.period}</span>
                </div>
                
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-subtitle">{item.subtitle}</h4>
                
                <p className="timeline-institution">
                  <MapPin size={14} /> {item.institution}
                </p>
                
                <p className="timeline-desc">{item.description}</p>
                
                {index === 0 && (
                  <div className="timeline-highlight">
                    <Sparkles size={14} /> Currently Pursuing
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
