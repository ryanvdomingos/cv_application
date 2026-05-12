// src/components/ExperienceForm.jsx

function ExperienceForm({ experiences, onChange, onAdd, onDelete }) {
  return (
    <div className="experience-section">
      {experiences.map((job) => (
        // The key is strictly for React's internal tracking
        <form key={job.id} className="experience-form">
          <div className="input-group">
            <label>Company</label>
            <input
              type="text"
              name="company" // Must match the state key
              value={job.company}
              // Notice how we pass the job.id so the App knows WHICH job to update
              onChange={(e) => onChange(job.id, e)}
              placeholder="e.g. PrimaVida Planos Odontológicos"
            />
          </div>
          <div className="input-group">
            <label>Position</label>
            <input
              type="text"
              name="position"
              value={job.position}
              onChange={(e) => onChange(job.id, e)}
              placeholder="e.g. Auxiliar Administrativo Jr."
            />
          </div>
          <div className="input-group">
            <label>Dates</label>
            <input
              type="text"
              name="dates"
              value={job.dates}
              onChange={(e) => onChange(job.id, e)}
              placeholder="Jan 2025 - Abr 2025"
            />
          </div>
          {/* Button to delete this specific job */}
          {/* Replace the old delete button with this: */}
          <div className="delete-btn-wrapper">
            <button
              type="button"
              className="delete-btn"
              onClick={() => onDelete(job.id)}
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
          <hr /> {/* Just a visual separator between jobs */}
        </form>
      ))}

      {/* Button to add a new blank form */}
      <button type="button" className="add-btn" onClick={onAdd}>
        + Add Experience
      </button>
    </div>
  );
}

export default ExperienceForm;
