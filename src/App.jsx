import { useState } from 'react';
import PersonalForm from './components/Personal/PersonalForm';
import PersonalPreview from './components/Personal/PersonalPreview';
// We will create these next!
import ExperienceForm from './components/Experience/ExperienceForm';
import ExperiencePreview from './components/Experience/ExperiencePreview';
import './App.css';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '', email: '', phoneNumber: '', address: ''
  });

  // --- NEW: Array State for Experience ---
  // We start with one empty job so the user has a form to type in immediately
  const [experiences, setExperiences] = useState([
    { id: crypto.randomUUID(), company: '', position: '', dates: '', description: '' }
  ]);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  // --- NEW: Experience Logic ---

  // 1. Add a new blank job to the array
  const addExperience = () => {
    const newJob = { id: crypto.randomUUID(), company: '', position: '', dates: '', description: '' };
    // The Spread Operator (...) copies the old array, then we add the newJob at the end
    setExperiences([...experiences, newJob]);
  };

  // 2. Delete a job by its ID
  const deleteExperience = (idToRemove) => {
    // Filter creates a NEW array containing only items that DO NOT match the ID
    setExperiences(experiences.filter(job => job.id !== idToRemove));
  };

  // 3. Update a specific job when the user types
  const handleExperienceChange = (id, e) => {
    const { name, value } = e.target;

    // Map over the array. If the ID matches, copy the object and update the field.
    // If the ID doesn't match, just return the job exactly as it was.
    setExperiences(
      experiences.map((job) => {
        if (job.id === id) {
          return { ...job, [name]: value };
        }
        return job;
      })
    );
  };


  return (
    <div className="app-container">
      <div className="editor-side">
        {/* ADDED: The Download Button */}
        <button
          onClick={() => window.print()}
          style={{ marginBottom: '2rem', padding: '1rem', cursor: 'pointer', background: '#2563eb', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}
        >
          Download PDF
        </button>

        <h2>Personal Details</h2>
        <PersonalForm personalInfo={personalInfo} onChange={handlePersonalInfoChange} />

        <h2>Experience</h2>
        <ExperienceForm
          experiences={experiences}
          onChange={handleExperienceChange}
          onAdd={addExperience}
          onDelete={deleteExperience}
        />
      </div>

      <div className="preview-side">
        {/* ADDED: The A4 Paper Wrapper */}
        <div className="cv-page">
          <PersonalPreview personalInfo={personalInfo} />
          <ExperiencePreview experiences={experiences} />
        </div>
      </div>
    </div>
  );
}

export default App;
