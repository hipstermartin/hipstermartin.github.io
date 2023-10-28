import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import portrait from "../images/self-portrait.png";
import UTLogo from "../images/utd-logo.png";
import VITLogo from "../images/vit-logo.jpeg";
import "./About.css";

const degrees = [
  {
    university: "The University of Texas at Dallas",
    degree: "Master of Science in Computer Science",
    year: "2022-23",
    logo: UTLogo,
    description: "Specialized in Data Science. Honored with Dean’s Scholarship for academic excellence."
  },
  {
    university: "Vellore Institute of Technology, Amaravati",
    degree: "Master of Technology in Software Engineering",
    year: "2017-22",
    logo: VITLogo,
    description: (
      <>
        Honored with Dean's list for academic excellence. Completed a thesis project on 
        <a href="https://journal.ijresm.com/index.php/ijresm/article/view/1732" target="_blank" rel="noopener noreferrer" style={{ color: "#ffc000" }}>
        {" "}Abstractive Text Summarization.
        </a>
      </>
    )
  },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="portrait-container">
          <img
            src={portrait}
            alt="Self-portrait"
            className="portrait"
          />
        </div>
        <div className="intro">
          <p>Welcome to my corner of the internet! My name is Abhinav. I'm a computer science graduate who is passionate about science and technology, and nothing makes me happier than working on distributed large scale systems. I'm always looking for new challenges, and I'm a quick learner, so don't worry, I'll get the job done! I'm also pretty laid-back in my approach, and I'm always up for a good laugh - so if you're looking for someone to add some fun to the team, I'm your guy!</p>
          <div className="links">
            <a href="https://www.linkedin.com/in/abhinavyalamaddi/" target="_blank">
              <FaLinkedin size={32} color="#fff" />
            </a>
            <a href="https://github.com/hipstermartin" target="_blank">
              <FaGithub size={32} color="#fff" />
            </a>
          </div>
        </div>
        <div className="education">
            <h2>Education</h2>
            {degrees.map((degree, index) => (
                <div key={index} className="degree-card">
                    <img src={degree.logo} alt={`${degree.university} logo`} className="university-logo" />
                    <div className="degree-info">
                        <h3>{degree.degree}</h3>
                        <p><b>{degree.university}</b> - {degree.year}</p>
                        <p>{degree.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default About;
