import React from 'react';
import projectOne from '../../assets/projectOne.jpg';
import projectTwo from '../../assets/projectTwo.jpg';
import projectThree from '../../assets/projectThree.jpg';
import projectFour from '../../assets/projectFour.jpg';

import './Projects.css';

const ProjectCard = ({ image, title, subtitle, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="project__card">
    <img src={image} alt={title} className="project__image" />
    <div className="project__cardcontent">
      <h3 className="projects__title">{title}</h3>
      <span className="projects__subtitle text-cs">{subtitle}</span>
    </div>
  </a>
);

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className='projects__wrapper'>
        <h2 className="section__title text-cs">RECENT WORK</h2>
        <p className="section__subtitle">
          My <span>Projects</span>
        </p>

        <div className="project__grid container">
          <ProjectCard 
            image={projectOne}
            title="AECPL Admin Panel"
            subtitle="Dashboard Redesign"
            link="https://www.behance.net/gallery/156779983/Dashboard-Redesign-UX-Case-Study"
          />
          <ProjectCard 
            image={projectTwo}
            title="Disaster Management Application"
            subtitle="Design System"
            link="https://www.behance.net/gallery/179127163/Safe-Harbor-Disaster-Management-App"
          />
          <ProjectCard 
            image={projectThree}
            title="Travel Landing Page"
            subtitle="Bali Tourism"
            link="https://www.behance.net/gallery/156382129/Travel-Agency-Landing-Page"
          />
          <ProjectCard 
            image={projectFour}
            title="Food Truck Mobile Application"
            subtitle="Rob's Food Truck"
            link="https://www.behance.net/gallery/156327389/Food-Truck-App-UX-Design-Case-Study"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
