import React from "react";
import ProjectsList from "../components/ProjectsList";
import CryptexViewer from '../components/CryptexViewer';
import "../styles/projectcard.css"

export default function ProjectsPage() {
  return (
    <>
    <div className="projects-container">
      <ProjectsList />
    </div>
    <CryptexViewer/>
    </>
  );
}
