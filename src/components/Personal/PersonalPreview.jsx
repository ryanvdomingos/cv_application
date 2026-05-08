// src/components/PersonalPreview.jsx

function PersonalPreview({ personalInfo }) {
  return (
    <div className="resume-header">
      {/* We use logical OR (||) to show placeholders if the user hasn't typed anything yet */}
      <h1 className="resume-name">{personalInfo.fullName || 'John Doe'}</h1>

      <div className="resume-contact-info">
        <span>{personalInfo.email || 'john.doe@example.com'}</span>
        {/* The pipe | is just a visual separator if we have data */}
        {personalInfo.phoneNumber && <span> | {personalInfo.phoneNumber}</span>}
        {personalInfo.address && <span> | {personalInfo.address}</span>}
      </div>
    </div>
  );
}

export default PersonalPreview;
