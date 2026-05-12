import { useState } from 'react';

import PersonalForm from './components/Personal/PersonalForm';
import PersonalPreview from './components/Personal/PersonalPreview';

import ExperienceForm from './components/Experience/ExperienceForm';
import ExperiencePreview from './components/Experience/ExperiencePreview';

import ProjectsForm from './components/Projects/ProjectsForm';
import ProjectsPreview from './components/Projects/ProjectsPreview';

import EducationForm from './components/Education/EducationForm';
import EducationPreview from './components/Education/EducationPreview';

import './App.css';

function App() {
  // ==========================================
  // 1. THE STATE (Grouped at the top)
  // ==========================================
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '', email: '', phoneNumber: '', address: ''
  });

  const [summary, setSummary] = useState('');

  const [experiences, setExperiences] = useState([
    { id: crypto.randomUUID(), company: '', position: '', dates: '', description: '' }
  ]);

  const [projects, setProjects] = useState([
    { id: crypto.randomUUID(), title: '', techStack: '', location: '', dates: '', description: '' }
  ]);

  const [education, setEducation] = useState([
    { id: crypto.randomUUID(), institution: '', degree: '', dates: '' }
  ]);

  const [skills, setSkills] = useState([
    { id: crypto.randomUUID(), categoryName: '', skillItems: '' }
  ]);


  // ==========================================
  // 2. THE HANDLERS (The Logic)
  // ==========================================

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  // --- Experience Handlers ---
  const addExperience = () => {
    const newJob = { id: crypto.randomUUID(), company: '', position: '', dates: '', description: '' };
    setExperiences([...experiences, newJob]);
  };

  const deleteExperience = (idToRemove) => {
    setExperiences(experiences.filter(job => job.id !== idToRemove));
  };

  const handleExperienceChange = (id, e) => {
    const { name, value } = e.target;
    setExperiences(
      experiences.map((job) => {
        if (job.id === id) { return { ...job, [name]: value }; }
        return job;
      })
    );
  };

  // --- Projects Handlers ---
  const addProject = () => {
    const newProject = { id: crypto.randomUUID(), title: '', techStack: '', location: '', dates: '', description: '' };
    setProjects([...projects, newProject]);
  };

  const deleteProject = (idToRemove) => {
    setProjects(projects.filter(project => project.id !== idToRemove));
  };

  const handleProjectChange = (id, e) => {
    const { name, value } = e.target;
    setProjects(
      projects.map((project) => {
        if (project.id === id) { return { ...project, [name]: value }; }
        return project;
      })
    );
  };

  // --- Education Handlers ---
  const addEducation = () => {
    const newEdu = { id: crypto.randomUUID(), institution: '', degree: '', dates: '' };
    setEducation([...education, newEdu]);
  };

  const deleteEducation = (idToRemove) => {
    setEducation(education.filter(edu => edu.id !== idToRemove));
  };

  const handleEducationChange = (id, e) => {
    const { name, value } = e.target;
    setEducation(
      education.map((edu) => {
        if (edu.id === id) { return { ...edu, [name]: value }; }
        return edu;
      })
    );
  };

  // --- Skills Handlers ---
  const addSkill = () => {
    const newSkill = { id: crypto.randomUUID(), categoryName: '', skillItems: '' };
    setSkills([...skills, newSkill]);
  };

  const deleteSkill = (idToRemove) => {
    setSkills(skills.filter(skill => skill.id !== idToRemove));
  };

  const handleSkillChange = (id, e) => {
    const { name, value } = e.target;
    setSkills(
      skills.map((skill) => {
        if (skill.id === id) { return { ...skill, [name]: value }; }
        return skill;
      })
    );
  };

  // ==========================================
  // 3. THE UI (The Return Statement)
  // ==========================================
  return (
    <div className="app-container">

      {/* --- EDITOR SIDE (Left) --- */}
      <div className="editor-side">
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

        <h2>Projects</h2>
        <ProjectsForm
          projects={projects}
          onChange={handleProjectChange}
          onAdd={addProject}
          onDelete={deleteProject}
        />

        <h2>Education</h2>
        <EducationForm
          education={education}
          onChange={handleEducationChange}
          onAdd={addEducation}
          onDelete={deleteEducation}
        />
      </div>


      {/* --- PREVIEW SIDE (Right) --- */}
      <div className="preview-side">
        <div className="cv-page">
          <PersonalPreview personalInfo={personalInfo} />

          <ExperiencePreview experiences={experiences} />

          <ProjectsPreview projects={projects} />

          <EducationPreview education={education} />
        </div>
      </div>

    </div>
  );
}

export default App;
