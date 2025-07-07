import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application built with React, Node.js, and MongoDB",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Task Management App",
      description: "Responsive mobile-first application with real-time updates",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop",
      tags: ["React Native", "Firebase", "Redux"]
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for business analytics and reporting",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
      tags: ["D3.js", "Python", "Flask", "PostgreSQL"]
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="project-card">
      <div className="project-image">
        <img 
          src={project.image} 
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-buttons">
          <a href="#" className="btn-outline">Code</a>
          <a href="#" className="btn-filled">Demo</a>
        </div>
      </div>
    </div>
  );

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;