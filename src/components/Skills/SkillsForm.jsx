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

          <button type="button" onClick={() => onDelete(skill.id)}>
            Delete Skill Group
          </button>
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
