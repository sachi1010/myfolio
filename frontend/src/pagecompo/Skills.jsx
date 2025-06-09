import React, { useEffect, useState } from 'react';
import '../css/Skill.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const skillRes = await fetch('http://localhost:5000/skills');
        const eduRes = await fetch('http://localhost:5000/education');
        const skillsData = await skillRes.json();
        const eduData = await eduRes.json();
        setSkills(skillsData);
        setEducation(eduData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const leftSkills = skills.slice(0, Math.ceil(skills.length / 2));
  const rightSkills = skills.slice(Math.ceil(skills.length / 2));

  return (
    <div className="skills-chart-container" id='skills'>
      <h1 className="skills-chart-title">Education & My Skills</h1>

      {/* Education Section */}
      <div className="container" data-aos="fade-up">
        <div className="education-section">
          <div className="education-grid">
            {education.map((edu, index) => (
              <div className="education-box" key={index}>
                <div className="edu-year">{edu.year}</div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-institution">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-columns" data-aos="fade-up">
        <div className="skills-column">
          {leftSkills.map((skill, index) => (
            <div key={index} className="skill-bar">
              <div className="skill-info">
                <span>{skill.name}</span>
              </div>
              <div className="bar-background">
                <div className="bar-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
        <div className="skills-column">
          {rightSkills.map((skill, index) => (
            <div key={index} className="skill-bar">
              <div className="skill-info">
                <span>{skill.name}</span>
              </div>
              <div className="bar-background">
                <div className="bar-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
