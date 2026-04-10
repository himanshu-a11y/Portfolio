import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function PortfolioHome() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </main>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
      </Routes>
    </Router>
  )
}

export default App
