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
           As an IT graduate from CIT-University, I care deeply about the 'human side' of technology. To me, it is not just about writing code—it is about making sure software is easy and helpful for the people using it. This mindset helped me excel during my 500-hour internship, where I was recognized for learning quickly and finishing technical tasks ahead of schedule. Whether I am designing layouts in Figma, building smooth websites with React, or writing simple guides for a team to follow, my goal is always to deliver work people can rely on. Beyond building websites, I am also certified in AWS Cloud and ServiceNow, and I recently completed training in data privacy and AI tools.
          </p>
        </div>

        <div className="about-education">
          <h3 className="education-title">Education</h3>
          <div className="education-item">
            <h4>Bachelor of Science in Information Technology</h4>
            <p className="education-school">Cebu Institute of Technology – University</p>
            <p className="education-period">2022 – 2026</p>
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
          <div className="certification-item">
            <h4>Accenture Technology Academy</h4>
            <p className="certification-details">Certificate of Completion, January 2026 - Completed a 60-hour intensive AWS training program focused on cloud infrastructure and deployment.</p>
          </div>
          <div className="certification-item">
            <h4>Now Assist Executive Micro-Certification</h4>
            <p className="certification-details">ServiceNow University, April 2026</p>
          </div>
          <div className="certification-item">
            <h4>Implement Basic Automation Techniques Using AI Tools</h4>
            <p className="certification-details">Advanced Institute of Technology (TESDA) - Course Completed</p>
          </div>
          <div className="certification-item">
            <h4>Utilize Generative AI</h4>
            <p className="certification-details">Advanced Institute of Technology (TESDA) - Course Completed</p>
          </div>
          <div className="certification-item">
            <h4>Ensure Compliance with Data Privacy and Ethics</h4>
            <p className="certification-details">Advanced Institute of Technology (TESDA) - Course Completed</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About