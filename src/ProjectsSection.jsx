// ProjectsSection.jsx
import React from 'react';
import projects from './projects';      // Ahora incluye lightImageUrl y darkImageUrl
import './ProjectsSection.css';

const ProjectsSection = ({ darkMode }) => (
  <div className="projects-container">
    {projects.map(({
      id,
      title,
      description,
      link,
      lightImageUrl,
      darkImageUrl
    }) => {
      // Selecciona la imagen según el tema
      const imageUrl = darkMode && darkImageUrl
        ? darkImageUrl
        : lightImageUrl;

      return (
        <div key={id} className="project-card">
          <div
            className="project-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="project-content">
            <h3>{title}</h3>
            <p className="project-description">{description}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              Ver proyecto
            </a>
          </div>
        </div>
      );
    })}
  </div>
);

export default ProjectsSection;

