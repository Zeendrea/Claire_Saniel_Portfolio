import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Claire Andrea S. Saniel</span>
            </h1>
            <h2 className="hero-subtitle">
              Frontend Developer · UI/UX Designer · QA & Aspiring Project Manager
            </h2>
            
            <p className="hero-description">
              I am an IT specialist who builds websites and apps that are easy to use and look great. 
              With experience in project management and cloud systems, I help teams turn their ideas 
              into working products—making sure everything stays organized and runs smoothly from 
              start to finish.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
              <a 
                href="/documents/ClairSaniel_Resume.pdf" 
                download
                className="btn btn-secondary"
              >
                📄 Download Resume
              </a>
            </div>

            <div className="hero-social">
              <a 
                href="https://github.com/Zeendrea" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/claire-andrea-saniel-4301a6396/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:sanielclaireandrea@gmail.com" 
                className="social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-avatar">
              <div className="avatar-glow"></div>
              <div className="avatar-content">
                <img 
                  src="/images/2x2.jpg" 
                  alt="Claire Andrea S. Saniel" 
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <button 
            onClick={() => scrollToSection('about')}
            className="scroll-button"
            aria-label="Scroll down"
          >
            <FaArrowDown />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero