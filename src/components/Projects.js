import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id= "projects" style={{ backgroundColor: '#121212', color: '#fff', padding: '50px' }}>
       <h2>My Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>A brief description of your project. Include any key features or technologies used.</p>
          <a href="#" className="button">View Project</a>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>A brief description of your project. Include any key features or technologies used.</p>
          <a href="#" className="button">View Project</a>
        </div>
        <div className="project-card">
          <h3>Project 3</h3>
          <p>A brief description of your project. Include any key features or technologies used.</p>
          <a href="#" className="button">View Project</a>
        </div>
      </div>
    </section>
  );
};


export default Projects;