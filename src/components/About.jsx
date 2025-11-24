import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p className="about-paragraph">
            I am an Information Technology student focused on frontend development, UI/UX design, 
            quality assurance, and project coordination. I enjoy turning product ideas into polished 
            interfaces, writing clear test cases, and organizing tasks so teams can deliver dependable 
            software. I collaborate closely with developers and designers to improve user experience 
            and ensure product quality from planning through release.
          </p>
        </div>

        <div className="about-education">
          <h3 className="education-title">Education</h3>
          <div className="education-item">
            <h4>Bachelor of Science in Information Technology</h4>
            <p className="education-school">Cebu Institute of Technology – University</p>
            <p className="education-period">2022 – Present</p>
          </div>
          <div className="education-item">
            <h4>Senior High School</h4>
            <p className="education-school">Cebu Institute of Technology – University</p>
            <p className="education-period">2020 – 2022</p>
          </div>
          <div className="education-item">
            <h4>Junior High</h4>
            <p className="education-school">Little Flower School Inc.</p>
            <p className="education-period">2016 – 2020</p>
          </div>
          <div className="education-item">
            <h4>Elementary</h4>
            <p className="education-school">Dumanjug Central School</p>
            <p className="education-period">2010 – 2016</p>
          </div>
        </div>

        <div className="about-certifications">
          <h3 className="certifications-title">Certifications</h3>
          <div className="certification-item">
            <h4>AWS Academy Cloud Architecting</h4>
            <p className="certification-details">Certification [133939], November 2025</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


