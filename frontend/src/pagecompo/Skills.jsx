import React from 'react';
import '../css/Skill.css';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 75 },
  { name: 'HTML5', level: 100 },
  { name: 'CSS3', level: 100 },
  { name: 'JQuery', level: 80 },
  { name: 'MongoDB', level: 84 },
  { name: 'Express', level: 80 },
  { name: 'Git & GitHub', level: 98 },
  { name: 'Bootstrap', level: 100 },
];

const education = [
  {
    degree: 'B.E Computer Science And Enginnering',
    institution: 'Star Lion College of Engineering & Technology',
    year: '2020 - 2024',
  },
  {
    degree: 'HSC',
    institution: 'Nasrul Musilimeen Matricuation Hr. Sec School',
    year: '2019 - 2020'
  },
  {
    degree: 'SSLC',
    institution: 'Nasrul Musilimeen Matricuation Hr. Sec School',
    year: '2017 - 2018'
  }
];

const Skills = () => {
  const leftSkills = skills.slice(0, 5);
  const rightSkills = skills.slice(5);

  return (
    <div className="skills-chart-container">
      <h1 className="skills-chart-title">Education & My Skills</h1>
      {/* Education Section */}
      <div className='container' data-aos="fade-up" >
        <div className="education-section">
          {/* <h2 className="section-heading">Education</h2> */}
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
      <div className="skills-columns" data-aos="fade-up" >
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
                <div
                  className="bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>



    </div>
  );
};

export default Skills;
