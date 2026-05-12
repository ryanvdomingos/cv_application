function ProjectsPreview({ projects }) {
  return (
    <div className="resume-section">
      <h3>Projetos de Destaque</h3>
      <hr />

      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <div className="project-header">
            <div>
              <strong>{project.title || 'Project Title'}</strong>
              {project.techStack && <span> | {project.techStack}</span>}
            </div>
            <span>{project.dates || 'Start - End Date'}</span>
          </div>

          {project.location && (
            <div className="project-location">
              <em>{project.location}</em>
            </div>
          )}

          {project.description && (
            <p className="project-description">{project.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProjectsPreview;
