import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }

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

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="form-input form-textarea"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary form-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                Send Message <FaPaperPlane style={{ marginLeft: '0.5rem' }} />
              </>
            )}
          </button>

          {submitStatus === 'success' && (
            <div className="form-message success">
              Thank you! Your message has been sent successfully.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact


