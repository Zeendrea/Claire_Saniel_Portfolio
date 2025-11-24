import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'LAUNDRYDASH',
      roles: 'UI/UX Designer · Frontend Developer · QA Tester',
      description: 'Designed UI for customer/business/driver pages; built responsive components and wrote test cases for navigation and input validation.',
      technologies: ['HTML', 'CSS', 'Figma'],
      image: '/images/LaundryDash.png', // Updated to actual image
      github: 'https://github.com',
      demo: null,
      featured: true
    },
    {
      id: 2,
      title: 'SKILLABLE',
      roles: 'Frontend Developer · UX Contributor · Assistant Project Coordinator',
      description: 'Life Skills E-Learning Platform for SPED Students. Defined game flow and UX, implemented responsive UI screens, coordinated feature planning and timelines, and performed manual user-flow testing.',
      technologies: ['React', 'Figma'],
      image: '/images/SkillAble.png', // Updated to actual image
      github: 'https://github.com',
      demo: 'https://skillable.netlify.app/',
      featured: true
    },
    {
      id: 3,
      title: 'JOBFLEX',
      roles: 'Frontend Developer · QA Tester',
      description: 'Job Matching & Employment Platform. Built React components with Material UI and Tailwind; integrated APIs for postings and auth; performed functional and API testing.',
      technologies: ['React', 'MUI', 'Tailwind', 'Axios', 'Postman'],
      image: '/images/JobFlex.png', // Updated to actual image
      github: 'https://github.com',
      demo: null,
      featured: false
    },
    {
      id: 4,
      title: 'TRABAHANAP',
      roles: 'Frontend Developer · UI/UX Designer · Assistant Project Manager',
      description: 'On-Demand Local Service Booking. Implemented UI components integrated with a Spring Boot backend; helped write feature requirements, track tasks, and run cross-browser functionality tests.',
      technologies: ['React', 'Spring Boot', 'Git'],
      image: '/images/TrabaHanap.png', // Updated to actual image
      github: 'https://github.com',
      demo: null,
      featured: false
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Here are some of my recent projects. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-overlay">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                {project.roles && (
                  <p className="project-roles">{project.roles}</p>
                )}
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects