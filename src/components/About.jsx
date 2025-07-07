import React from 'react';

const About = () => {
  const features = [
    {
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices"
    },
    {
      title: "Responsive Design",
      description: "Creating beautiful, mobile-first designs that work on all devices"
    },
    {
      title: "Performance",
      description: "Optimizing applications for speed and best user experience"
    }
  ];

  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm a passionate full-stack developer with 3+ years of experience creating web applications 
          that solve real-world problems. I love working with modern technologies and am always eager 
          to learn new things.
        </p>
        
        <div className="features">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;