import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'sanielclaireandrea@gmail.com',
      link: 'mailto:sanielclaireandrea@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '09124518654',
      link: 'tel:+639124518654'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'Dumanjug, Cebu, Philippines',
      link: null
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          I'm open to roles in Frontend Development, UI/UX, Quality Assurance, or Project Management. 
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3 className="contact-info-title">Let's Connect</h3>
          <p className="contact-info-text">
            I'm always open to discussing new projects, creative ideas, or 
            opportunities to be part of your visions. Feel free to reach out!
          </p>
          
          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-detail-item">
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-detail-content">
                  <h4>{info.title}</h4>
                  {info.link ? (
                    <a href={info.link}>{info.content}</a>
                  ) : (
                    <p>{info.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact