import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects.json'; // JSON dosyasını direkt import ediyoruz

const ProjectsList = () => {
  return (

    <div className="card-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>

    
  );
};

export default ProjectsList;
