import React from 'react';

const Hero = () => {
  return (
    <div className="container">
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Hi, I'm <span className="highlight">John Doe</span></h1>
            <p>Full Stack Developer passionate about creating innovative web solutions</p>
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
              alt="John Doe" 
              className="profile-image"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;