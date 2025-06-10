import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/mkk-1817/digital-land-registry" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Digital Land Registry Application</h3>
              <p>
                Developed a secure full-stack Digital Land Registry web application featuring user authentication, admin verification, real-time auctions, and algorithmic enhancements—including Greedy, Dynamic Programming, and Divide & Conquer—for optimized performance, alongside HMAC-SHA256-based document integrity and ownership security.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>MongoDB</li>
                <li>Flask</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/mkk-1817/MEAN-Stack-Fitness-App" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Fitness Training Studio Application</h3>
              <p>The Fitness Training Studio application is a comprehensive web-based platform designed to cater to the fitness needs of modern individuals by providing personalized diet and workout plans. Built using the MEAN stack (MongoDB, Express.js, Angular, and Node.js), this application allows users to register, manage their profiles, and access customized fitness plans. The system also includes an administrative interface for managing user data and updating fitness plans.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Angular</li>
                <li>MongoDB</li>
                <li>ExpressJs</li>
                <li>NodeJs</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/mkk-1817/Online-Voting-Portal" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://online-voting-portal.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Online Voting Portal Application</h3>
              <p>
               Developed a secure and accessible Online Voting Portal with multi-factor authentication, anonymous voting, and collaborative GitHub-based development, enhancing democratic participation and ensuring user confidentiality, data protection, and project transparency.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Node.js</li>
                <li>ExpressJs</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

<ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/CodeVinayak/Serverless-Voting-Application" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                {/* <a href="https://vote.vinayaksingh.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>  */}
                </div>
            </header>
            <div className="body">
              <h3>Netflix - Clone</h3>
              <p>This project is a frontend clone of Netflix, built using pure HTML, CSS, and JavaScript, simulating the UI and user experience of the popular streaming platform. The static web application is containerized using Docker and deployed on Google Kubernetes Engine (GKE) for scalable and resilient cloud hosting.</p>
            </div>
            <footer> <ul className="tech-list"> <li>HTML</li> <li>GKE</li> <li>Docker</li> </ul> </footer>
          </div>
        </ScrollAnimation>
  
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://youtu.be/NOm-3MynPLE" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>HR Analytics</h3>
              <p>A comprehensive HR Analytics project leveraging Excel, Python (EDA), and Power BI to uncover insights and drive data-informed talent management strategies.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Excel</li>
                <li>Power BI</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/mkk-1817/Youtube-Comments-Sentiment-Analysis" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Youtube Comments Analysis</h3>
              <p>
                This web application built with Flask analyzes comments from a YouTube video. It extracts comments using the YouTube Data API, performs sentiment analysis on them, generates a word cloud, and calculates precision and recall metrics.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Flask</li>
                <li>Python</li>
                <li>Youtube API</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        
      
      </div>
    </Container>
  );
}