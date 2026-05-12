function SkillsPreview({ skills }) {
  return (
    <div className="resume-section">
      <h3>Habilidades Técnicas</h3>
      <hr />

      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill.id}>
            <strong>{skill.categoryName || 'Category'}:</strong> {skill.skillItems || 'Skill 1, Skill 2, Skill 3'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsPreview;
