function SkillsForm({ skills, onChange, onAdd, onDelete }) {
  return (
    <div className="skills-section">
      {skills.map((skill) => (
        <form key={skill.id} className="skill-form">
          <div className="input-group">
            <label>Category Name</label>
            <input
              type="text"
              name="categoryName"
              value={skill.categoryName}
              onChange={(e) => onChange(skill.id, e)}
              placeholder="e.g. Linguagens e frameworks"
            />
          </div>

          <div className="input-group">
            <label>Skills</label>
            <input
              type="text"
              name="skillItems"
              value={skill.skillItems}
              onChange={(e) => onChange(skill.id, e)}
              placeholder="e.g. JavaScript, React, Node.js"
            />
          </div>

          {/* Replace the old delete button with this: */}
          <div className="delete-btn-wrapper">
            <button
              type="button"
              className="delete-btn"
              onClick={() => onDelete(skill.id)}
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
        + Add Skill Category
      </button>
    </div>
  );
}

export default SkillsForm;
