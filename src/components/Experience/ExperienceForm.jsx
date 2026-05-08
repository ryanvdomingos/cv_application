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
          <button type="button" onClick={() => onDelete(job.id)}>
            Delete Job
          </button>

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
