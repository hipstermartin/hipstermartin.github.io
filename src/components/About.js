import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import portrait from "../images/self-portrait.png";
import "./About.css";

const degrees = [
  {
    university: "The University of Texas at Dallas",
    degree: "Master of Science in Computer Science",
    coursework: [
      "Algorithm Analysis and Data Structures",
      "Design and Analysis of Algorithms",
      "Database Design",
      "Statistics for Data Science",
      "Machine Learning",
      "Big Data Management and Analytics",
      "Computer Graphics"
    ],
    achievements: [
      "Jonsson School Dean’s Graduate Scholarship Recipient, 2022",
    ],
  },
  {
    university: "Vellore Institute of Technology, Amaravati",
    degree: "Master of Technology in Software Engineering",
    coursework: [
      ""
    ],
    achievements: [
      "Prof. Akella Sitaramam Endowment Award, 2022 - Best Student Award",
      "Academic Achievement Award 2020-21",
    ],
  },
];

function About() {
  const [selectedDegree, setSelectedDegree] = useState(null);

  const handleDegreeClick = (index) => {
    if (index === selectedDegree) {
      setSelectedDegree(null);
    } else {
      setSelectedDegree(index);
    }
  };

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
                <div key={index} className="degree">
                    <h3 style={{display: 'inline'}}>{degree.degree}</h3> - <b>{degree.university}</b>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default About;
