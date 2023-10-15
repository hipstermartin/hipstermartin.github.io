import React, { useState } from "react";
import "./Experiences.css";
import CopartLogo from "../images/copart-logo.png";
import UTDLogo from "../images/utd-logo.png";
import NetAppLogo from "../images/netapp-logo.png";
import ThingTronicsLogo from "../images/thingtronics.jpeg";
import VITLogo from "../images/vit-logo.jpeg";

const experiences = [
  {
    id: 1,
    jobTitle: "Software Engineering Intern",
    company: "Copart Inc",
    logo: CopartLogo,
    location: "Dallas, Texas",
    duration: "Jun 2023 - Present",
    duties: [
      "Working with the Auction Team, handling technical issues, enhancing auction and backend functionalities, and participating in code reviews.",
      "Technologies worked on: Java, SpringBoot, AngularJS, Redis, NoSQL, Kafka, Git, Jenkins",
    ],
  },
  {
    id: 2,
    jobTitle: "Student Developer",
    company: "Naveen Jindal School of Management",
    logo: UTDLogo,
    location: "The University of Texas at Dallas",
    duration: "Apr 2023 - Jun 2023",
    duties: [
      "Working on developing a full-stack web application that visualizes AHP and linear programming. Also involved in multiple IoT/ML projects that leverage the use of various AWS services.",
      "Technologies worked on: Python, Vue.js, AWS",
    ],
  },
  {
    id: 3,
    jobTitle: "Software Engineering Intern",
    company: "NetApp Inc",
    logo: NetAppLogo,
    location: "Bengaluru, Karnataka, India",
    duration: "Aug 2021 - Jul 2022",
    duties: [
      "Worked with the NFS team to develop NAS protocols such as NFS and CIFS, as well as projects to simplify protocol access.",
      "Technologies worked on: Distributed Systems, Network-Attached Storage, C/C++, RESTful APIs, Kubernetes, Perforce",
    ],
  },
  {
    id: 4,
    jobTitle: "Android Engineer, Intern",
    company: "thingTronics Innovations",
    logo: ThingTronicsLogo,
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
    logo: VITLogo,
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
            {/* <img src={experience.logo} alt={`${experience.company} Logo`} className="company-logo" /> */}
            <div className="job-title">{experience.jobTitle}</div>
            <div className="job-company">{experience.company}</div>
            <div className="job-location">{experience.location}</div>
            <div className="job-duration">{experience.duration}</div>
            {selectedJob === experience.jobTitle && (
              <div className="job-details">
                <ul className="job-duties">
                  {experience.duties.map((duty, index) => (
                    <li key={index} className={!duty.includes("Technologies worked on:") ? "duty" : "tech"}>
                      {duty}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
