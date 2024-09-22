import React from 'react';
import './Projects.css';
import recipeRadarImg from './recipe-radar.png';

const Projects = () => {
  return (
    <section id= "projects" style={{ backgroundColor: '#121212', color: '#fff', padding: '50px', textAlign: 'centre' }}>
      <h2>My Projects</h2>
      <div className="projects-container">
        <div className="project-card animate__animated animate__fadeInUp">

          <img src={recipeRadarImg} alt="Recipe Radar Screenshot" />
          <h3>Recipe Radar Webapp</h3>
          <h4>HackTheNorth 2024 Submission</h4>
          <p>A web application designed to simplify meal planning by allowing users to input their dietary restrictions and quickly discover recipes, dishes, and ingredient lists tailored to their needs. Our goal was to turn the often time-consuming process of meal decision-making into a streamlined, enjoyable experience.

Key Features:

Real-Time Data Fetching: Recipe Radar integrates with a large-scale API, delivering tailored recipe results in less than a second.
User-Centric Design: We built a clean, intuitive interface to make browsing and selecting meals simple and engaging.
Collaborative Development: Worked with a team to build this project, utilizing modern web development tools such as Python Flask for the backend and React for the frontend.
This project highlights my skills in full-stack development, API integration, and building responsive, user-friendly web applications.</p>
          <a href="https://github.com/shawny4/HTN-RecipeFinder" className="button">View Repo</a>
        </div>
        <div className="project-card animate__animated animate__fadeInUp">
          <h3>Pixelize Software</h3>
          <h4>Drawing Application</h4>
          <p>Pixelize is a pixel art software that offers many features, 
            including a paint bucket tool, undo button, and layers. Users can create detailed
             pixel art and export their work as transparent PNG files for easy use in other projects.</p>
          <a href="https://github.com/HD-Brody/Pixelize" className="button">View Project</a>
        </div>
        <div className="project-card animate__animated animate__fadeInUp">
          <h3>Seaside Signals Video Game</h3>
          <h4>Jamegam 2024 Submission</h4>
          <p>A brief description of your project. Include any key features or technologies used.</p>
          <a href="https://github.com/VainerAriel/MiniJameGam-30" className="button">View Project</a>
        </div>
      </div>
    </section>
  );
};


export default Projects;