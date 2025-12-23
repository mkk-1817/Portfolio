import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {

  const workingOn = {
    title: "SkillSync AI: Precision Hiring Powered by AI",
    description: "RAG-powered framework processing 50+ resumes/minute with 95% parsing accuracy, reducing manual screening time by 70%. Implemented a scalable full-stack architecture using Next.js and FastAPI, leveraging Google Vertex AI for advanced semantic search and Firestore for real-time candidate data management.",
    tech: ["NextJs", "Python FastAPI", "Google Firestore", "Google Cloud Storage", "Google Vertex AI"],
    github: "https://github.com/mkk-1817/skill-sync-ai",
    link: "",
    icon: "code"
  }

  const projects = [
    {
      title: "Digital Land Registry Application",
      description: "Developed a secure full-stack Digital Land Registry web application featuring user authentication, admin verification, real-time auctions, and algorithmic enhancements—including Greedy, Dynamic Programming, and Divide & Conquer—for optimized performance, alongside HMAC-SHA256-based document integrity and ownership security.",
      tech: ["Python", "MongoDB", "Flask"],
      github: "https://github.com/mkk-1817/digital-land-registry",
      link: "",
      icon: "folder"
    },
    {
      title: "Fitness Training Studio Application",
      description: "The Fitness Training Studio application is a comprehensive web-based platform designed to cater to the fitness needs of modern individuals by providing personalized diet and workout plans. Built using the MEAN stack (MongoDB, Express.js, Angular, and Node.js), this application allows users to register, manage their profiles, and access customized fitness plans.",
      tech: ["Angular", "MongoDB", "ExpressJs", "NodeJs"],
      github: "https://github.com/mkk-1817/MEAN-Stack-Fitness-App",
      link: "",
      icon: "folder"
    },
    {
      title: "Online Voting Portal Application",
      description: "Developed a secure and accessible Online Voting Portal with multi-factor authentication, anonymous voting, and collaborative GitHub-based development, enhancing democratic participation and ensuring user confidentiality, data protection, and project transparency.",
      tech: ["React", "Node.js", "ExpressJs", "MongoDB"],
      github: "https://github.com/mkk-1817/Online-Voting-Portal",
      link: "https://online-voting-portal.netlify.app/",
      icon: "folder"
    },
    {
      title: "Netflix - Clone",
      description: "This project is a frontend clone of Netflix, built using pure HTML, CSS, and JavaScript, simulating the UI and user experience of the popular streaming platform. The static web application is containerized using Docker and deployed on Google Kubernetes Engine (GKE) for scalable and resilient cloud hosting.",
      tech: ["HTML", "GKE", "Docker"],
      github: "https://github.com/mkk-1817/Netflix-clone",
      link: "",
      icon: "folder"
    },
    {
      title: "HR Analytics",
      description: "A comprehensive HR Analytics project leveraging Excel, Python (EDA), and Power BI to uncover insights and drive data-informed talent management strategies.",
      tech: ["Python", "Excel", "Power BI"],
      github: "https://github.com/mkk-1817/HR-Analytics",
      link: "",
      icon: "code"
    },
    {
      title: "Youtube Comments Analysis",
      description: "This web application built with Flask analyzes comments from a YouTube video. It extracts comments using the YouTube Data API, performs sentiment analysis on them, generates a word cloud, and calculates precision and recall metrics.",
      tech: ["Flask", "Python", "Youtube API"],
      github: "https://github.com/mkk-1817/Youtube-Comments-Sentiment-Analysis",
      link: "",
      icon: "folder"
    }
  ]

  return (
    <Container id="project">
      <h2>My Projects</h2>

      {/* Featured Project */}
      {/* @ts-ignore */}
      <ScrollAnimation animateIn="fadeInUp">
        <div className="working-on">
          <div className="label">Currently Working on</div>
          <div className="project-content">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                {workingOn.github && (
                  <a href={workingOn.github} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="Visit site" />
                  </a>
                )}
                {workingOn.link && (
                  <a href={workingOn.link} target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                )}
              </div>
            </header>
            <div className="body">
              <h3>{workingOn.title}</h3>
              <p>{workingOn.description}</p>
            </div>
            <footer>
              <ul className="tech-list">
                {workingOn.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </footer>
          </div>
        </div>
      </ScrollAnimation>

      <div className="projects">

        {projects.map((project, index) => (
          /* @ts-ignore */
          <ScrollAnimation animateIn="fadeInUp" key={index}>
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <title>{project.icon === 'code' ? 'Code' : 'Folder'}</title>
                  {project.icon === 'code' ? (
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    // <polyline points="16 18 22 12 16 6"></polyline>
                    // <polyline points="8 6 2 12 8 18"></polyline>
                  ) : (
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  )}
                </svg>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="Visit site" />
                  </a>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <img src={externalLink} alt="Visit site" />
                    </a>
                  )}
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}

      </div>
    </Container>
  );
}