function EducationPreview({ education }) {
  return (
    <div className="resume-section">
      <h3>Educação</h3>
      <hr />

      {education.map((edu) => (
        <div key={edu.id} className="education-item">
          <div className="education-header">
            <strong>{edu.institution || 'University Name'}</strong>
            <span>{edu.dates || 'Graduation Date'}</span>
          </div>
          <div>
            <em>{edu.degree || 'Degree and Major'}</em>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EducationPreview;
