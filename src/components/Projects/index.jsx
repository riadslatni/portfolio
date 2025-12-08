import Card from "../Card";
import projects from "./projectsData";
import "./style.css";

function Projects() {
  return (
    <section id="Projects">
      <h2 className="projects_title">Projets</h2>
    <div className="projects_grid">
      {projects.map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </div>
    </section>
  );
}

export default Projects;
