import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import '../styles/Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projectsData.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <Link to={`/project/${project.id}`} className="project-link">View Project →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
