import React from "react";
import { Link } from "react-router-dom"; // React Router'dan Link'i içe aktar
import "../styles/projectcard.css"; // Stil dosyasını ayırdık

const ProjectCard = ({ projectName, projectDescription, url }) => {
  return (
    <Link to={`/projects/${url}`} className="project-card"> 
      <div className="card-content">
        <h1>{projectName}</h1>
        <p>{projectDescription}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;