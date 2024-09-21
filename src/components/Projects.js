import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id= "projects" style={{ backgroundColor: '#121212', color: '#fff', padding: '50px' }}>
       <h2>My Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3>Recipe Radar</h3>
          <h4>HackTheNorth 2024 Submission</h4>
          <p>A web application designed to simplify meal planning by allowing users to input their dietary restrictions and quickly discover recipes, dishes, and ingredient lists tailored to their needs. Our goal was to turn the often time-consuming process of meal decision-making into a streamlined, enjoyable experience.

Key Features:

Real-Time Data Fetching: Recipe Radar integrates with a large-scale API, delivering tailored recipe results in less than a second.
User-Centric Design: We built a clean, intuitive interface to make browsing and selecting meals simple and engaging.
Collaborative Development: Worked with a team to build this project, utilizing modern web development tools such as Python Flask for the backend and React for the frontend.
This project highlights my skills in full-stack development, API integration, and building responsive, user-friendly web applications.</p>
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