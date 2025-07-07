import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Code,
  Briefcase, GraduationCap, Award, User, Menu, X, ExternalLink, Calendar,Download
} from 'lucide-react';

const AnimatedSection = ({ children, className = "", sectionRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={(el) => {
        elementRef.current = el;
        if (sectionRef) sectionRef.current = el;
      }}
      className={`animated-section ${className} ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </section>
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    education: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    experience: useRef(null),
    contact: useRef(null)
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = Object.keys(sectionRefs);
      const current = sections.find(section => {
        const el = sectionRefs[section].current;
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (name) => {
    const el = sectionRefs[name].current;
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = ['Java','Data Structuures and Algorithms','OOPS Console Applications', 'C++', 'C', 'React.js', 'MySQL', 'MERN Stack', 'Arduino'];

  const education = [
    {
      degree: "B.E. - Electronics & Communication Engineering",
      institution: "Sri Krishna College of Technology",
      period: "2022 - 2026",
      grade: "CGPA: 7.86 / 10",
      status: "Pursuing"
    },
    {
      degree: "12th Standard",
      institution: "The TVS School, Madurai",
      period: "2022",
      grade: "Percentage: 74.60 / 100",
      board: "TNBHSE"
    },
    {
      degree: "10th Standard", 
      institution: "S.B.O.A. MATRIC. & HR. SEC. SCHOOL, Madurai",
      period: "2020",
      grade: "Percentage: 81.40 / 100",
      board: "TNBSE"
    }
  ];

  const projects = [
    {
      title: "SkySage",
      teamSize: 3,
      description: "A comprehensive weather website...",
      link: "https://main--astonishing-piroshki-770392.netlify.app/",
      tech: ["React.js", "Weather API", "CSS3"]
    },
    {
      title: "QR_Craft",
      teamSize: 1,
      description: "A QR code generator...",
      link: "https://qrcraft57.netlify.app/",
      tech: ["React.js", "JavaScript", "CSS3"]
    },
    {
      title: "Pair_Pop",
      teamSize: 1,
      description: "A fast-paced card-matching memory game...", 
      link: "https://pairpop57.netlify.app/",
      tech: ["React.js", "JavaScript", "CSS3"]
    },
    {
      title: "Portfolio Website",
      teamSize: 1,
      description: "My personal portfolio showcasing skills and projects...",
      link: "https://qrcraft57.netlify.app/",
      tech: ["React.js", "JavaScript", "CSS3"]
    },
    {
      title: "Ultrasonic Distance Sensor",
      teamSize: 3,
      description: "Distance measurement system using HC-SR04...",
      link: "https://github.com/Madhans57/Mini.project.git",
      tech: ["Arduino", "C++", "Embedded Systems"]
    }
  ];

  const experiences = [
    {
      company: "NLC INDIA LIMITED",
      role: "Telecommunications Intern",
      period: "25 Jun, 2024 - 08 Jul, 2024",
      description: "Gained understanding of telecommunication systems..."
    },
    {
      company: "Variac Electricals",
      role: "Electrical Intern",
      period: "24 Dec, 2024 - 04 Jan, 2025",
      description: "Gained practical exposure to manufacturing processes..."
    },
    {
      company: "Salzer Electronics",
      role: "Electrical Intern",
      period: "02 May, 2025 - 19 May, 2025",
      description: "Gained practical exposure to manufacturing processes..."
    }
    
  ];
    const handleResumeDownload = () => {
    // Create a download link for the resume
    const link = document.createElement('a');
    link.href = './Madhan_Sundhar.pdf'; // Assuming the PDF is in the public folder
    link.download = 'Madhan_Sundhar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className={`navbar ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="logo">MS</div>
          <div className="menu-desktop">
            {Object.keys(sectionRefs).map(section => (
              <button
                key={section}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="menu-mobile">
            {Object.keys(sectionRefs).map(section => (
              <button
                key={section}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={sectionRefs.home} className="hero">
        <div className="hero-content">
          {/* Profile Photo - Left Side */}
          <div className="hero-image">
            <div className="profile-icon">
                <img 
                src="./profilephoto.jpg" 
                alt="Madhan Sundhar S" 
                className="profile-image"
                />
  </div>
</div>
          
          {/* Content - Right Side */}
          <div className="hero-text">
            <h1 className="hero-title">Madhan Sundhar S</h1>
            <p className="hero-subtitle">Electronics & Communication Engineering Student</p>
            <p className="hero-desc">
              Passionate about web development and innovative tech solutions. Currently pursuing ECE with a focus on integrating hardware and software technologies.
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('contact')}>Get In Touch</button>
              <a href="https://github.com/Madhans57" target="_blank" rel="noopener noreferrer">View Projects</a>
            </div>
          </div>
        </div>
        <div className="scroll-down" onClick={() => scrollToSection('about')}>
          <ChevronDown />
        </div>
      </section>

      {/* About */}
      <AnimatedSection sectionRef={sectionRefs.about} className="about-section">
        <h2>About Me</h2>
        <p>A passionate and detail-oriented Electronics and Communication Engineering student with a strong interest in web development and
innovative tech solutions. Experienced in building practical web applications using MERNSTACK . Adept at problem-solving, team
collaboration, and continuous learning, a consistent drive to apply technical knowledge to real-world challenges.</p>
      </AnimatedSection>
        <div></div>
      

            <AnimatedSection sectionRef={sectionRefs.education} className="education-section">
        <div className="education-header">
          <h2>Education</h2>
          <button className="resume-download" onClick={handleResumeDownload}>
            <Download size={20} />
            Download Resume
          </button>
        </div>
        
        <div className="education-grid">
          {education.map((edu, idx) => (
            <div key={idx} className="education-card">
              <h3>{edu.degree}</h3>
              <div className="institution">{edu.institution}</div>
              <div className="period">
                <Calendar size={16} /> {edu.period}
              </div>
              <div className="grade">{edu.grade}</div>
              {edu.board && <div className="period">Board: {edu.board}</div>}
              {edu.status && <span className="status">{edu.status}</span>}
            </div>
          ))}
        </div>
        </AnimatedSection>
        {/* Skills */}
      <AnimatedSection sectionRef={sectionRefs.skills} className="skills-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </AnimatedSection>

      {/* Projects */}
      <AnimatedSection sectionRef={sectionRefs.projects} className="projects-section">
        <h2>Projects</h2>
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <h3>{proj.title}</h3>
            {/* <p><Calendar size={16} /> {proj.period}</p> */}
            <p><strong>Team Size:</strong> {proj.teamSize}</p>
            <p>{proj.description}</p>
            {proj.link && (
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} /> Visit
              </a>
            )}
            <p><strong>Tech:</strong> {proj.tech.join(', ')}</p>
          </div>
        ))}
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection sectionRef={sectionRefs.experience} className="experience-section">
        <h2>Experience</h2>
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-card">
            <h3>{exp.company}</h3>
            <p><Briefcase size={16} /> {exp.role}</p>
            <p><Calendar size={16} /> {exp.period}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection sectionRef={sectionRefs.contact} className="contact-section">
        <h2>Contact</h2>
        <p><Mail size={20} /> madhansundhar57@gmail.com</p>
        <p><Phone size={20} /> +91 9842628262</p>
        <p><MapPin size={20} /> Madurai, Tamil Nadu, India</p>
        <div className="social-icons">
          <a href="https://github.com/Madhans57" target="_blank" rel="noopener noreferrer">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/Madhans57" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Madhan Sundhar S. Built with React and lots of ☕</p>
      </footer>
    </div>
  );
};

export default Portfolio;
