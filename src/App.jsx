import React from 'react';

// Header Component
const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">Portfolio</div>
        <ul className="nav-links">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

// Hero Component
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

// About Component
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

// Skills Component
const Skills = () => {
  const skillsData = [
    { name: "JavaScript", percentage: 90 },
    { name: "React", percentage: 85 },
    { name: "Node.js", percentage: 80 },
    { name: "Python", percentage: 75 },
    { name: "MongoDB", percentage: 70 },
    { name: "AWS", percentage: 65 }
  ];

  const midpoint = Math.ceil(skillsData.length / 2);
  const leftColumn = skillsData.slice(0, midpoint);
  const rightColumn = skillsData.slice(midpoint);

  const SkillItem = ({ skill }) => (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.percentage}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${skill.percentage}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skills-column">
            {leftColumn.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
          <div className="skills-column">
            {rightColumn.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const projectsData = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application built with React, Node.js, and MongoDB",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Task Management App",
      description: "Responsive mobile-first application with real-time updates",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop",
      tags: ["React Native", "Firebase", "Redux"]
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for business analytics and reporting",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
      tags: ["D3.js", "Python", "Flask", "PostgreSQL"]
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="project-card">
      <div className="project-image">
        <img 
          src={project.image} 
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-buttons">
          <a href="#" className="btn-outline">Code</a>
          <a href="#" className="btn-filled">Demo</a>
        </div>
      </div>
    </div>
  );

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const contactInfo = [
    { title: "Email", value: "john.doe@email.com" },
    { title: "Phone", value: "+1 (555) 123-4567" },
    { title: "Location", value: "New York, NY" }
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

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} John Doe. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Arial', sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          margin: 0;
          padding: 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Header */
        header {
          padding: 20px 20px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 24px;
          font-weight: bold;
          color: white;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 30px;
        }

        .nav-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: #ffd700;
        }

        /* Hero */
        .hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 100vh;
          padding: 0;
          gap: 60px;
        }

        .hero-content {
          flex: 1;
          max-width: 600px;
          padding-left: 20px;
        }

        .hero-content h1 {
          font-size: 48px;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .hero-content h1 .highlight {
          color: #ffd700;
        }

        .hero-content p {
          font-size: 18px;
          margin-bottom: 40px;
          opacity: 0.9;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 15px 30px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: #ffd700;
          color: #333;
        }

        .btn-primary:hover {
          background: #ffed4a;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .hero-image {
          flex-shrink: 0;
          padding-right: 20px;
        }

        .profile-image {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        /* About */
        .about {
          background: white;
          color: #333;
          padding: 80px 0;
          width: 100%;
        }

        .about-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .about h2 {
          font-size: 36px;
          margin-bottom: 30px;
          color: #333;
        }

        .about p {
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 50px;
          color: #666;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .feature-card {
          background: #f8f9fa;
          padding: 30px;
          border-radius: 8px;
          text-align: center;
          border: 1px solid #e9ecef;
        }

        .feature-card h3 {
          font-size: 20px;
          margin-bottom: 15px;
          color: #333;
        }

        .feature-card p {
          font-size: 14px;
          color: #666;
          margin: 0;
        }

        /* Skills */
        .skills {
          background: #f8f9fa;
          padding: 80px 0;
          width: 100%;
        }

        .skills-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .skills h2 {
          font-size: 36px;
          text-align: center;
          margin-bottom: 50px;
          color: #333;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .skill-item {
          margin-bottom: 25px;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .skill-name {
          font-weight: 600;
          color: #333;
        }

        .skill-percentage {
          font-weight: 600;
          color: #667eea;
        }

        .skill-bar {
          height: 8px;
          background: #e9ecef;
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        /* Projects */
        .projects {
          background: white;
          padding: 80px 0;
          width: 100%;
        }

        .projects-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .projects h2 {
          font-size: 36px;
          text-align: center;
          margin-bottom: 50px;
          color: #333;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .project-card {
          background: white;
          border: 1px solid #e9ecef;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .project-image {
          width: 100%;
          height: 200px;
          background: #f8f9fa;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          font-size: 14px;
        }

        .project-content {
          padding: 25px;
        }

        .project-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #333;
        }

        .project-description {
          color: #666;
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .project-tag {
          background: #e9ecef;
          color: #666;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }

        .project-buttons {
          display: flex;
          gap: 10px;
        }

        .btn-outline {
          padding: 8px 16px;
          border: 1px solid #667eea;
          background: transparent;
          color: #667eea;
          text-decoration: none;
          border-radius: 4px;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .btn-outline:hover {
          background: #667eea;
          color: white;
        }

        .btn-filled {
          padding: 8px 16px;
          background: #667eea;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .btn-filled:hover {
          background: #5a6fd8;
        }

        /* Contact */
        .contact {
          background: #2c3e50;
          color: white;
          padding: 80px 0;
          width: 100%;
        }

        .contact-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .contact h2 {
          font-size: 36px;
          text-align: center;
          margin-bottom: 20px;
        }

        .contact-intro {
          text-align: center;
          font-size: 18px;
          margin-bottom: 50px;
          opacity: 0.9;
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 50px;
        }

        .contact-item {
          text-align: center;
        }

        .contact-item h3 {
          font-size: 18px;
          margin-bottom: 10px;
        }

        .contact-item p {
          opacity: 0.8;
          margin: 0;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 30px;
        }

        .social-link {
          padding: 12px 24px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          text-decoration: none;
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
        }

        /* Footer */
        .footer {
          background: #34495e;
          color: white;
          text-align: center;
          padding: 20px 0;
          width: 100%;
        }

        .footer p {
          margin: 0;
          opacity: 0.8;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .features {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .hero {
            flex-direction: column-reverse;
            text-align: center;
            min-height: 100vh;
            padding: 40px 20px;
            gap: 40px;
            justify-content: center;
          }

          .hero-content {
            padding-left: 0;
          }

          .hero-image {
            padding-right: 0;
          }

          .hero-content h1 {
            font-size: 36px;
          }

          .profile-image {
            width: 200px;
            height: 200px;
          }

          .cta-buttons {
            justify-content: center;
          }

          .about, .skills, .projects, .contact {
            padding: 60px 0;
          }

          .about h2, .skills h2, .projects h2, .contact h2 {
            font-size: 28px;
          }

          .features {
            grid-template-columns: 1fr;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .contact-info {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .social-links {
            flex-direction: column;
            align-items: center;
          }

          .container {
            padding: 0 20px;
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 28px;
          }

          .hero-content p {
            font-size: 16px;
          }

          .btn {
            padding: 12px 24px;
            font-size: 14px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .about h2, .skills h2, .projects h2, .contact h2 {
            font-size: 24px;
          }
        }
      `}</style>
      
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;