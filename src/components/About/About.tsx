import { Container } from "./styles";
import KarthikKrishna from "../../assets/KarthikKrishnaFinal.png";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        {/* @ts-ignore */}
        <ScrollAnimation animateIn="fadeInUp">
          <h2>About me</h2>
        </ScrollAnimation>
        {/* @ts-ignore */}
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <div className="education">
            <h3>Education:</h3>
            <h4> M.Sc Decision and Computing Sciences</h4>
            <p>Coimbatore Institute of Technology, Coimbatore | Nov 2021 - Present</p>
            <p>8.56 CGPA</p>
          </div>
        </ScrollAnimation>

        {/* @ts-ignore */}
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <div className="leadership">
            <h3>Leadership & Activities:</h3>

            <h4>Placement Coordinator</h4>
            <p className="date">2025 - Present</p>
            <p>Facilitated communication between corporate recruiters and the department, ensuring seamless execution of placement drives.</p>

            <h4 style={{ marginTop: '2rem' }}>Hackathons & Certifications</h4>
            <p><strong>Top 10 Finalist</strong> - Hyperverge & SenseAI Hackathon (2025)</p>
            <p><strong>Selected Participant</strong> - redBus Data Decode Hackathon (2025)</p>
            <p><strong>Lean Six Sigma Yellow Belt</strong> - Grant Thornton (Pragyan 23)</p>
          </div>
        </ScrollAnimation>

      </div>
      <div className="about-image">
        {/* @ts-ignore */}
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <img src={KarthikKrishna} alt="Karthik Krishna" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
