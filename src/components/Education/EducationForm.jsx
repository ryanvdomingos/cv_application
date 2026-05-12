function EducationForm({ education, onChange, onAdd, onDelete }) {
  return (
    <div className="education-section">
      {education.map((edu) => (
        <form key={edu.id} className="education-form">
          <div className="input-group">
            <label>Institution</label>
            <input
              type="text"
              name="institution"
              value={edu.institution}
              onChange={(e) => onChange(edu.id, e)}
              placeholder="e.g. Universidade Estácio de Sá"
            />
          </div>

          <div className="input-group">
            <label>Degree / Course</label>
            <input
              type="text"
              name="degree"
              value={edu.degree}
              onChange={(e) => onChange(edu.id, e)}
              placeholder="e.g. Ciência da Computação"
            />
          </div>

          <div className="input-group">
            <label>Dates</label>
            <input
              type="text"
              name="dates"
              value={edu.dates}
              onChange={(e) => onChange(edu.id, e)}
              placeholder="e.g. Jan 2024 - Dez 2028"
            />
          </div>

          {/* Replace the old delete button with this: */}
          <div className="delete-btn-wrapper">
            <button
              type="button"
              className="delete-btn"
              onClick={() => onDelete(education.id)}
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
        + Add Education
      </button>
    </div>
  );
}

export default EducationForm;
