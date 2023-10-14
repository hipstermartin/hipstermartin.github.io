import React, { useState } from "react";
import "./Experiences.css";

const experiences = [
  {
    id: 1,
    jobTitle: "Software Engineering Intern",
    company: "Copart Inc",
    location: "Dallas, Texas",
    duration: "Jun 2023 - Present",
    duties: [
      "Working with the Auction Team, handling technical issues, enhancing auction and backend functionalities, and participating in code reviews.",
      "Technologies worked on: Java, SpringBoot, AngularJS, Redis, NoSQL, Kafka",
    ],
  },
  {
    id: 2,
    jobTitle: "Student Developer",
    company: "Naveen Jindal School of Management",
    location: "The University of Texas at Dallas",
    duration: "Apr 2023 - Jun 2023",
    duties: [
      "Working on developing a full-stack web application that visualizes AHP and linear programming. Also involved in multiple IoT/ML projects that leverage the use of various AWS services.",
      "Technologies worked on: Python, Vue.js, AWS",
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
    jobTitle: "Android Engineer, Intern",
    company: "thingTronics Innovations",
    location: "Bengaluru, Karnataka, India",
    duration: "May 2019 - Jun 2019",
    duties: [
      "Developed indoor positioning system with BLE Beacons and integrated it into an Android app for real-time testing.",
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
      "Led a club of 200+ members, steering its growth through organizing technical conferences, hackathons, and workshops.",
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
                <React.Fragment key={index}>
                  {duty.includes("Technologies worked on:") && <hr className="hr-separator"/>}
                  <li className={duty.includes("Technologies worked on:") ? "tech-list" : ""}>{duty}</li>
                </React.Fragment>
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
