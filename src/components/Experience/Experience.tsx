import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
    const experiences = [
        {
            role: "Project Management Intern",
            company: "Prediscan MedTech (Remote)",
            date: "Present",
            location: "Chennai, India"
        },
        {
            role: "Full-Stack Developer & Data Scientist Intern",
            company: "Prediscan MedTech (Remote)",
            date: "Dec 2024 - Nov 2025",
            location: "Chennai, India"
        },
        {
            role: "Product Engineer Intern",
            company: "Smartail Pvt Ltd",
            date: "Jul 2024 - Dec 2024",
            location: "Chennai, India"
        }
    ];

    return (
        <Container id="experience">
            {/* @ts-ignore */}
            <ScrollAnimation animateIn="fadeInUp">
                <h2>Experience</h2>
            </ScrollAnimation>
            <div className="experience-timeline">
                {experiences.map((exp, index) => (
                    /* @ts-ignore */
                    <ScrollAnimation
                        animateIn={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                        key={index}
                        className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
                    >
                        <div className="content">
                            <h3>{exp.role}</h3>
                            <h4>{exp.company}</h4>
                            <p className="date">{exp.date}</p>
                            <p className="location">{exp.location}</p>
                        </div>
                    </ScrollAnimation>
                ))}
            </div>
        </Container>
    );
}
