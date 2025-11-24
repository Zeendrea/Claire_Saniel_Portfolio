import React from 'react'
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt,
  FaPython,
  FaDatabase
} from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Design & UX',
      skills: [
        { name: 'Wireframing & Prototyping (Figma)', icon: <FaCss3Alt />, level: 85 },
        { name: 'User Flows & Interaction Design', icon: <FaCss3Alt />, level: 80 },
        { name: 'Visual/UI Layout & Responsive Design', icon: <FaCss3Alt />, level: 85 },
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'ReactJS', icon: <FaReact />, level: 85 },
        { name: 'HTML', icon: <FaHtml5 />, level: 90 },
        { name: 'CSS', icon: <FaCss3Alt />, level: 90 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 75 },
        { name: 'JavaScript/TypeScript', icon: <FaJs />, level: 80 },
        { name: 'Android Studio (Java/Kotlin)', icon: <FaReact />, level: 45 },
        { name: 'Java Swing (GUI)', icon: <FaReact />, level: 50 },
      ]
    },
    {
      title: 'Quality Assurance (QA)',
      skills: [
        { name: 'Manual Functional Testing', icon: <FaDatabase />, level: 85 },
        { name: 'Regression Testing', icon: <FaDatabase />, level: 80 },
        { name: 'Test Case Creation', icon: <FaDatabase />, level: 85 },
        { name: 'Bug Reporting', icon: <FaDatabase />, level: 85 },
        { name: 'API Validation (Postman)', icon: <FaDatabase />, level: 80 },
      ]
    },
    {
      title: 'Project Management (PM)',
      skills: [
        { name: 'Requirement Gathering', icon: <FaGitAlt />, level: 80 },
        { name: 'Task Breakdown & Timeline Tracking', icon: <FaGitAlt />, level: 80 },
        { name: 'Agile User Stories & Sprint Tasks', icon: <FaGitAlt />, level: 75 },
        { name: 'Documentation & Coordination', icon: <FaGitAlt />, level: 85 },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'GitHub', icon: <FaGitAlt />, level: 85 },
        { name: 'Postman', icon: <FaDatabase />, level: 80 },
        { name: 'Figma', icon: <FaCss3Alt />, level: 85 },
        { name: 'MySQL', icon: <FaDatabase />, level: 75 },
        { name: 'VS Code', icon: <FaGitAlt />, level: 90 },
        { name: 'Trello / ClickUp', icon: <FaGitAlt />, level: 80 },
        { name: 'Java (Spring Boot)', icon: <FaPython />, level: 75 },
        { name: 'Python', icon: <FaPython />, level: 45 },
        { name: 'C', icon: <FaPython />, level: 45 },
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="section-divider"></div>
      </div>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-header">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills


