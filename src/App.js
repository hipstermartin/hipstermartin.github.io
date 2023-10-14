import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Research from "./components/Research";

function App() {
  const [activePage, setActivePage] = useState("about");
  const [activeNav, setActiveNav] = useState("about-nav");

  let pageContent;
  switch (activePage) {
    case "about":
      pageContent = <About />;
      break;
    case "experience":
      pageContent = <Experience />;
      break;
    case "projects":
      pageContent = <Projects />;
      break;
    case "research":
      pageContent = <Research />;
      break;
    default:
      pageContent = <About />;
  }

  const handleNavClick = (navId, pageId) => {
    setActivePage(pageId);
    setActiveNav(navId);
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li
            id="about-nav"
            className={activeNav === "about-nav" ? "active" : ""}
            onClick={() => handleNavClick("about-nav", "about")}
          >
            About
          </li>
          <li
            id="experience-nav"
            className={activeNav === "experience-nav" ? "active" : ""}
            onClick={() => handleNavClick("experience-nav", "experience")}
          >
            Experience
          </li>
          <li
            id="projects-nav"
            className={activeNav === "projects-nav" ? "active" : ""}
            onClick={() => handleNavClick("projects-nav", "projects")}
          >
            Projects
          </li>
          {/* <li
            id="research-nav"
            className={activeNav === "research-nav" ? "active" : ""}
            onClick={() => handleNavClick("research-nav", "research")}
          >
            Research
          </li> */}
        </ul>
      </nav>
      {pageContent}
    </div>
  );
}

export default App;