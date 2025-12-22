import { useState } from "react";
import { Container } from "./styles";
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import mongodbIcon from "../../assets/mongodb-icon.svg";
import gcpIcon from "../../assets/gcp-icon.svg";
import awsIcon from "../../assets/aws-icon.svg";
import openaiIcon from "../../assets/openai-icon.svg";
import nextJsIcon from "../../assets/nextjs-icon.svg";
import angularIcon from "../../assets/angular-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import flaskIcon from "../../assets/flask-icon.svg";
import fastApiIcon from "../../assets/fastapi-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Skills() {
    const [activeTab, setActiveTab] = useState("Frontend");

    const skillsData = {
        "Frontend": [
            { img: reactIcon, name: "React" },
            { img: nextJsIcon, name: "Next.js" },
            { img: angularIcon, name: "Angular" },
            { img: typescriptIcon, name: "TypeScript" },
            { img: jsIcon, name: "JavaScript" },
            { img: htmlIcon, name: "HTML" },
            { img: cssIcon, name: "CSS" },
            { img: boostrapIcon, name: "Bootstrap" },
        ],
        "Backend": [
            { img: nodeIcon, name: "Node.js" },
            { img: python, name: "Python" },
            { img: fastApiIcon, name: "FastAPI" },
            { img: flaskIcon, name: "Flask" },
            { img: java, name: "Java" },
        ],
        "Data Science & AI": [
            { img: python, name: "Python" },
            { img: openaiIcon, name: "Gen AI" },
        ],
        "Cloud & Infrastructure": [
            { img: awsIcon, name: "AWS" },
            { img: gcpIcon, name: "GCP" },
        ],
        "Databases": [
            { img: mongodbIcon, name: "MongoDB" },
            { img: mysqlIcon, name: "MySQL" },
        ]
    };

    return (
        <Container id="skills">
            {/* @ts-ignore */}
            <ScrollAnimation animateIn="fadeInUp">
                <h2>My Skills</h2>
            </ScrollAnimation>

            <div className="skills-container">

                {/* Navigation Tabs */}
                {/* @ts-ignore */}
                <ScrollAnimation animateIn="fadeInUp">
                    <div className="skills-nav">
                        {Object.keys(skillsData).map((category) => (
                            <button
                                key={category}
                                className={`skill-tab ${activeTab === category ? "active" : ""}`}
                                onClick={() => setActiveTab(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </ScrollAnimation>

                {/* Skills Grid */}
                <div className="skills-grid" key={activeTab}>
                    {/* @ts-ignore */}
                    {skillsData[activeTab].map((skill, index) => (
                        <div className="skill-card" key={skill.name} style={{ animationDelay: `${index * 100}ms` }}>
                            <img src={skill.img} alt={skill.name} />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>

        </Container >
    )
}
