import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
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
            <h2 className="hero-subtitle">Frontend Developer · UI/UX Designer · QA & Aspiring Project Manager</h2>
            <p className="hero-description">
              I build user-centered web and mobile interfaces, run practical testing to keep products reliable, 
              and help teams stay organized so projects ship on time.
            </p>
            <div className="hero-contact-info">
              <span>
                <FaMapMarkerAlt className="contact-icon" />
                Dumanjug, Cebu, Philippines
              </span>
              <span>
                <FaEnvelope className="contact-icon" />
                sanielclaireandrea@gmail.com
              </span>
              <span>
                <FaPhone className="contact-icon" />
                09124518654
              </span>
            </div>
            
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
                href="/documents/ClaireAndreaSaniel_Resume.pdf" 
                download
                className="btn btn-secondary"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                📄 Download Resume
              </a>
            </div>

            <div className="hero-social">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com" 
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
                  src="/images/picture_claire.png" 
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


