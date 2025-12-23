import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/hero-illustration-3d.png"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
import instagram from '../../assets/instagram.svg'
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <p>Hello <img src={Hello} alt="Hello" width="20px" />, I'm</p>
        <h1>Karthik Krishna M</h1>
        <h3>Full Stack Developer | Data Scientist</h3>
        <p className="description">
          Full Stack Developer & Data Scientist with expertise in building scalable web applications and AI-driven solutions. Passionate about solving complex problems through clean code and innovative technologies.
        </p>
        <p className="small-resume">1 Year of Experience</p>
        <div className="cta-wrapper">
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/karthik-krishna-m/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a href="https://github.com/mkk-1817/" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B919092723034&text=Hello+Karthik+I+found+your+contact+through+portfolio+site.%0A%0A" target="_blank" rel="noreferrer">
              <img src={whatsapp} alt="Whatsapp" />
            </a>
            <a href="https://www.instagram.com/_karthi18_" target="_blank" rel="noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={Illustration} alt="Illustration" />
      </div>
    </Container>

  )
}