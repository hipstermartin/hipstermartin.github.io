import React, { useState } from "react";
import "./Experiences.css";

const experiences = [
  {
    id: 1,
    jobTitle: "Volunteer Research Assistant",
    company: "ArtSciLab",
    location: "The University of Texas at Dallas",
    duration: "Feb 2023 - Present",
    duties: [
      "Working under Dr. Roger Malina, responsible for conducting various research activities, analyzing data sets, and developing machine learning models.",
      "Research Area: Text and Video Analysis",
    ],
  },
  {
    id: 2,
    jobTitle: "Graduate Research Experience",
    company: "HBS lab",
    location: "The University of Texas at Dallas",
    duration: "Jan 2023 - Present",
    duties: [
      "Currently volunteering with Dr. Yonas Tadesse’s Humanoid Biorobotics and Smart Systems (HBS) lab, gaining valuable experience in Speech Emotion Recognition and Synthesis while collaborating with several projects.",
      "Research Area: Speech Recognition and Synthesis",
    ],
  },
  {
    id: 3,
    jobTitle: "Software Development Engineer, Intern",
    company: "NetApp Inc",
    location: "Bengaluru, Karnataka, India",
    duration: "Aug 2021 - Jul 2022",
    duties: [
      "Worked with the NFS team to develop NAS protocols such as NFS and CIFS, as well as projects to simplify protocol access.",
      "Technologies worked on: Distributed Systems, Network-Attached Storage (NAS), C (Programming Language), C++, RESTful APIs, PyTest",
    ],
  },
  {
    id: 4,
    jobTitle: "Application Development Engineer, Intern",
    company: "thingTronics",
    location: "Bengaluru, Karnataka, India",
    duration: "May 2019 - Jun 2019",
    duties: [
      "Worked with the NFS team to develop NAS protocols such as NFS and CIFS, as well as projects to simplify protocol access.",
      "Technologies worked on: Java, Bluetooth Low Energy Beacons, Android Studio, Location Based Services",
    ],
  },
  {
    id: 5,
    jobTitle: "Vice President",
    company: "Computer Society of India, VIT-AP",
    location: "Vellore Institute of Technology, AP",
    duration: "Jul 2018 - Sep 2021",
    duties: [
      "Managed and led a club of over 200 individuals, lead and directed the chapter towards the advancement by organizing a series of technical conferences, hackathons, and workshops",
    ],
  },
];

const Experiences = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = (jobTitle) => {
    setSelectedJob((prevSelectedJob) =>
      prevSelectedJob === jobTitle ? null : jobTitle
    );
  };
  

  return (
    <div className="experiences">
      <div className="timeline">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className={`job ${selectedJob === experience.jobTitle ? "selected" : ""}`}
            onClick={() => handleJobClick(experience.jobTitle)}
          >
            <div className="job-title">{experience.jobTitle}</div>
            <div className="job-company">{experience.company}</div>
            <div className="job-location">{experience.location}</div>
            <div className="job-duration">{experience.duration}</div>
            {selectedJob === experience.jobTitle && (
              <ul className="job-duties">
                {experience.duties.map((duty, index) => (
                  <li key={index}>{duty}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
