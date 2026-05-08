// src/components/ExperiencePreview.jsx

function ExperiencePreview({ experiences }) {
  return (
    <div className="resume-section">
      <h3>Professional Experience</h3>
      <hr />

      {experiences.map((job) => (
        <div key={job.id} className="experience-item">
          <div className="experience-header">
            {/* Show data, or fall back to placeholders if empty */}
            <strong>{job.company || 'Company Name'}</strong>
            <span>{job.dates || 'Start Date - End Date'}</span>
          </div>
          <div>
            <em>{job.position || 'Position Title'}</em>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;
