function ProjectsForm({ projects, onChange, onAdd, onDelete }) {
  return (
    <div className="projects-section">
      {projects.map((project) => (
        <form key={project.id} className="project-form">
          <div className="input-group">
            <label>Project Title</label>
            <input
              type="text"
              name="title"
              value={project.title}
              onChange={(e) => onChange(project.id, e)}
              placeholder="e.g. Project Arise"
            />
          </div>

          <div className="input-group">
            <label>Technologies Used</label>
            <input
              type="text"
              name="techStack"
              value={project.techStack}
              onChange={(e) => onChange(project.id, e)}
              placeholder="e.g. Node.js, React, Docker"
            />
          </div>

          <div className="input-group">
            <label>Location / Type</label>
            <input
              type="text"
              name="location"
              value={project.location}
              onChange={(e) => onChange(project.id, e)}
              placeholder="e.g. Remoto"
            />
          </div>

          <div className="input-group">
            <label>Dates</label>
            <input
              type="text"
              name="dates"
              value={project.dates}
              onChange={(e) => onChange(project.id, e)}
              placeholder="e.g. Fev 2026 - Presente"
            />
          </div>

          <div className="input-group">
            <label>Description</label>
            <textarea
              name="description"
              value={project.description}
              onChange={(e) => onChange(project.id, e)}
              placeholder="Describe your contributions and the impact of the project..."
              rows="3"
            />
          </div>

          <button type="button" onClick={() => onDelete(project.id)}>
            Delete Project
          </button>
          <hr />
        </form>
      ))}

      <button type="button" className="add-btn" onClick={onAdd}>
        + Add Project
      </button>
    </div>
  );
}

export default ProjectsForm;
