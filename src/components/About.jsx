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
            I am a Senior Information Technology student at CIT-University. I've always been passionate about the "human side" of technology—not just writing code, but making sure that software is intuitive and helpful for the people using it.
            I recently finished a 500-hour internship where I was recognized for being a fast learner and for getting technical tasks done ahead of schedule. Whether I'm designing the layout of an app, testing a system for bugs, or creating a step-by-step guide for a team to follow, my goal is always the same: to deliver high-quality work that people can actually rely on.
            Beyond building websites, I also hold certifications in Cloud technology and ServiceNow, which help me manage the "behind-the-scenes" systems that keep modern businesses running.
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
          <div className="certification-item">
            <h4>Accenture Technology Academy</h4>
            <p className="certification-details">Certificate of Completion, January 2026 - Completed a 60-hour intensive AWS training program focused on cloud infrastructure and deployment.</p>
          </div>
          <div className="certification-item">
            <h4>Now Assist Executive Micro-Certification</h4>
            <p className="certification-details">ServiceNow University, April 2026</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About