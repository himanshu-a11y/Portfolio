import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon, Menu, X } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = (href) => {
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="nav-logo" onClick={() => handleLinkClick('#hero')}>
          <svg className="logo-svg" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logoGrad" x1="3" y1="2" x2="49" y2="50" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="hsl(250,84%,70%)" />
                <stop offset="100%" stopColor="hsl(180,100%,55%)" />
              </linearGradient>
              <linearGradient id="logoGradInner" x1="8" y1="7" x2="44" y2="45" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="hsl(250,84%,70%)" />
                <stop offset="100%" stopColor="hsl(180,100%,55%)" />
              </linearGradient>
              <linearGradient id="textGrad" x1="0" y1="0" x2="36" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="hsl(250,84%,75%)" />
                <stop offset="100%" stopColor="hsl(180,100%,65%)" />
              </linearGradient>
            </defs>
            {/* Hexagon outer border */}
            <polygon
              points="26,2 49,14.5 49,37.5 26,50 3,37.5 3,14.5"
              stroke="url(#logoGrad)"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Inner dashed ring */}
            <polygon
              points="26,7 44,17 44,35 26,45 8,35 8,17"
              stroke="url(#logoGradInner)"
              strokeWidth="0.5"
              strokeDasharray="3 3"
              fill="none"
              opacity="0.4"
            />
            {/* HG text */}
            <text
              x="26" y="31"
              textAnchor="middle"
              fontSize="15"
              fontWeight="800"
              fontFamily="'Fira Code', monospace"
              fill="url(#textGrad)"
              letterSpacing="-0.5"
            >HG</text>
          </svg>
          <span className="logo-wordmark">
            <span className="logo-name">Himanshu</span>
          </span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href ? 'active' : ''}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setMenuOpen(false)}>
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}
