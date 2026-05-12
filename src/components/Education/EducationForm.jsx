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

          <button type="button" onClick={() => onDelete(edu.id)}>
            Delete Education
          </button>
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
