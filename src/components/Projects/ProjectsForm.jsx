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

          {/* Replace the old delete button with this: */}
          <div className="delete-btn-wrapper">
            <button
              type="button"
              className="delete-btn"
              onClick={() => onDelete(project.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
              Delete Entry
            </button>
          </div>
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
