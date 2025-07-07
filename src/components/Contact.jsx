import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      title: "Email",
      value: "john.doe@email.com"
    },
    {
      title: "Phone",
      value: "+1 (555) 123-4567"
    },
    {
      title: "Location",
      value: "New York, NY"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "#" },
    { name: "GitHub", url: "#" },
    { name: "Twitter", url: "#" }
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>Get In Touch</h2>
        <p className="contact-intro">
          Have a project in mind? Let's work together to bring your ideas to life!
        </p>
        
        <div className="contact-info">
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-item">
              <h3>{info.title}</h3>
              <p>{info.value}</p>
            </div>
          ))}
        </div>

        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} className="social-link">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;