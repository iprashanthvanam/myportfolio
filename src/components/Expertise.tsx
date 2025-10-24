import React from "react";
// import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "HTML5",
  "CSS3",
  "TailwindCSS",
  "JavaScript",
  "Python",
  "R Programming",
  "Java",
  "React",
];

const labelsSecond = [
  "Python",
  "Flask",
  "Django",
  "SQL",
  "PostgreSQL",
  "MongoDB",
];

const labelsThird = [
  "Git",
  "GitHub Actions",
  "Docker",
  "AWS",
  "Azure",
  "Linux",
  "Snowflake",
  "Pandas",
  "Selenium",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Frontend & Core Development</h3>
                    <p>Building diverse web applications and strong proficiency in the full SDLC process, focusing on modern frontend frameworks and core languages.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Backend & Data Management</h3>
                    <p>Expertise in server-side development and database management for scalable and reliable applications, including relational and non-relational systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>DevOps & AI/ML Operations</h3>
                    <p>Setting up robust CI/CD pipelines, deployment automation, cloud infrastructure (DevOps), and leveraging advanced AI/ML models for intelligent solutions.</p>
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