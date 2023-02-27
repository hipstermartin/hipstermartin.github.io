import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCodeBranch } from 'react-icons/fa';

import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    languages: [],
    keywords: [],
  });

  useEffect(() => {
    fetch('https://api.github.com/users/hipstermartin/repos')
      .then(response => response.json())
      .then(data => {
        const mappedProjects = data.map(project => ({
          title: project.name,
          description: project.description,
          techStack: project.language ? [project.language] : [],
          githubLink: project.html_url,
          forkLink: project.html_url + '/fork',
          websiteLink: project.homepage,
          keywords: project.topics,
        }));
        setProjects(mappedProjects);
        setFilteredProjects(mappedProjects);
      })
      .catch(error => console.error(error));
  }, []);

  const handleFiltersChange = (filterType, filterValue) => {
    setSelectedFilters(prevState => ({
      ...prevState,
      [filterType]: prevState[filterType].includes(filterValue)
        ? prevState[filterType].filter(filter => filter !== filterValue)
        : [...prevState[filterType], filterValue],
    }));
  };

  useEffect(() => {
    const filtered = projects.filter(project => {
      const matchesLanguages =
        selectedFilters.languages.length === 0 ||
        project.techStack.some(stack => selectedFilters.languages.includes(stack));
      const matchesKeywords =
        selectedFilters.keywords.length === 0 ||
        project.keywords.some(keyword => selectedFilters.keywords.includes(keyword));
      return matchesLanguages && matchesKeywords;
    });
    setFilteredProjects(filtered);
  }, [projects, selectedFilters]);

  const keywordOptions = [...new Set(projects.flatMap(project => project.keywords))].sort();

  return (
    <section id="projects">
      <div>
        <h3>Keywords</h3>
        {keywordOptions.map(option => (
          <label key={option}>
            <input
              type="checkbox"
              checked={selectedFilters.keywords.includes(option)}
              onChange={() => handleFiltersChange('keywords', option)}
            />
            {option}
          </label>
        ))}
      </div>
      {filteredProjects.length === 0 ? (
        <p>No projects match the selected filters.</p>
      ) : (
        <ul>
          {filteredProjects.map(project => (
            <li key={project.githubLink}>
              <h3>{project.title}</h3>
                <a href={project.githubLink} rel="noopener noreferrer" target="_blank">
                <FaGithub size={20} color="#fff"/>
                </a>
                <a href={project.forkLink} rel="noopener noreferrer" target="_blank">
                <FaCodeBranch size={20} color="#fff"/>
                </a>
              {project.websiteLink && (
                  <a href={project.websiteLink} rel="noopener noreferrer" target="_blank">
                  <FaExternalLinkAlt size={20} color="#fff"/>
                  </a>
              )}
              <p className='description'>{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Projects;