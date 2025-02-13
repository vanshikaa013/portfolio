import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faCode } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "MERN"
];

const labelsSecond = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "Tailwind",
    "Material UI",
    "React.js",
    "Redux",
    "TypeScript",
    
];

const labelsThird = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "NoSQL",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                <FontAwesomeIcon icon={faReact} size="3x" />
                    <h3>Front-End Development</h3>
                    <p>
                    Once the front-end application is built, I optimize performance, ensure responsiveness, and enhance user experience. I streamline development with UI testing, state management, and automated deployment, ensuring a smooth and efficient Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                <FontAwesomeIcon icon={faCode} size="3x" />
                    <h3>Backend Development</h3>
                    <p>
                    Once the backend is built, I ensure scalability, security, and performance optimization. I integrate API testing, database management, and authentication, while streamlining deployment with CI/CD pipelines and automated workflows for a smooth Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;