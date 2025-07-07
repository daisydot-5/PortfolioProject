import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

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