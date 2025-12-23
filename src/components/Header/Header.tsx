import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState, useEffect } from 'react'
import Resume from '../../assets/Karthik_Krishna_M_Resume.pdf'

export function Header() {
  const [isActive, setActive] = useState(false)
  const [activeNav, setActiveNav] = useState('#home')

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')

    // Save preference
    const isLight = html.classList.contains('light')
    localStorage.setItem('theme', isLight ? 'light' : 'dark')
  }

  // Initialize theme on mount
  useState(() => {
    const savedTheme = localStorage.getItem('theme')
    const html = document.getElementsByTagName('html')[0]

    if (savedTheme === 'light') {
      html.classList.add('light')
    } else {
      html.classList.remove('light')
    }
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#home', '#about', '#experience', '#skills', '#project', '#contact']
      const scrollPosition = window.scrollY + 200 // Offset for better UX

      for (const section of sections) {
        const element = document.querySelector(section)
        if (element instanceof HTMLElement) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveNav(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleNavClick(hash: string) {
    setActive(false)
    setActiveNav(hash)
  }

  const [showResume, setShowResume] = useState(false)

  useEffect(() => {
    if (showResume) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showResume])

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{"Karthik"}</span>
          <span>{" Krishna"}</span>
        </HashLink>



        <button className="resume-icon-btn" onClick={() => setShowResume(true)} aria-label="View Resume">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
          <svg className="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
            <path d="M12 1V3M12 21V23M23 12H21M3 12H1M20.49 20.49L19.07 19.07M4.93 4.93L3.51 3.51M20.49 3.51L19.07 4.93M4.93 19.07L3.51 20.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <svg className="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={() => handleNavClick('#home')} className={activeNav === '#home' ? 'active' : ''}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={() => handleNavClick('#about')} className={activeNav === '#about' ? 'active' : ''}>
            About
          </NavHashLink>
          <NavHashLink smooth to="#experience" onClick={() => handleNavClick('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
            Experience
          </NavHashLink>
          <NavHashLink smooth to="#skills" onClick={() => handleNavClick('#skills')} className={activeNav === '#skills' ? 'active' : ''}>
            Skills
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={() => handleNavClick('#project')} className={activeNav === '#project' ? 'active' : ''}>
            Projects
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={() => handleNavClick('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
            Contact
          </NavHashLink>
          <button className="resume-icon-btn" onClick={() => setShowResume(true)} aria-label="View Resume">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            <svg className="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
              <path d="M12 1V3M12 21V23M23 12H21M3 12H1M20.49 20.49L19.07 19.07M4.93 4.93L3.51 3.51M20.49 3.51L19.07 4.93M4.93 19.07L3.51 20.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg className="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </nav>

        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Close menu' : 'Open menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>

      {showResume && (
        <div className="resume-modal" onClick={() => setShowResume(false)}>
          <div className="resume-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowResume(false)}>×</button>
            <iframe src={`${Resume}#toolbar=0&navpanes=0&scrollbar=0`} title="Resume" width="100%" height="100%" />
            <a href={Resume} download="Karthik_Krishna_M_Resume.pdf" className="download-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 15V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </Container>
  )
}
