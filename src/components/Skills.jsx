import React from 'react';

const Skills = () => {
  const skillsData = [
    { name: "JavaScript", percentage: 90 },
    { name: "React", percentage: 85 },
    { name: "Node.js", percentage: 80 },
    { name: "Python", percentage: 75 },
    { name: "MongoDB", percentage: 70 },
    { name: "AWS", percentage: 65 }
  ];

  // Split skills into two columns
  const midpoint = Math.ceil(skillsData.length / 2);
  const leftColumn = skillsData.slice(0, midpoint);
  const rightColumn = skillsData.slice(midpoint);

  const SkillItem = ({ skill }) => (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.percentage}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${skill.percentage}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skills-column">
            {leftColumn.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
          <div className="skills-column">
            {rightColumn.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;