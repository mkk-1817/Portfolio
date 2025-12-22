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
        <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Karthik, an enthusiastic Software Engineer skilled in web development, machine learning, and scalable software solutions
          </p>
        </ScrollAnimation>
        {/* @ts-ignore */}
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I build responsive web applications, fine-tune ML models, and implement robust backend services.
          </p>
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
