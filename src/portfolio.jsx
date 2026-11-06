import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  User,
  Menu,
  X,
  ExternalLink,
  Calendar,
  Download,
  Users,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  Globe,
  Database,
  Terminal,
  CheckCircle2
} from 'lucide-react';

/* ── Inline SVG Social Icons for maximum reliability & crisp rendering ── */
const GithubIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76a1.76 1.76 0 0 0-1.75-1.76 1.76 1.76 0 0 0-1.76 1.76c0 .97.79 1.76 1.76 1.76m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);

/* ── Scroll-reveal intersection observer wrapper ── */
const AnimatedSection = ({ children, className = '', sectionRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.08 }
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

/* ══════════════════════════════════
   DATA SOURCED DIRECTLY FROM RESUME
══════════════════════════════════ */
const resumeData = {
  name: "Madhan Sundhar S",
  title: "Software Developer",
  summary:
    "Software Developer with an Electronics and Communication Engineering background and hands-on experience in Java, JavaScript, Angular, React.js, Spring Boot, and MySQL. Experienced in developing responsive web applications, REST APIs, and database-driven systems through academic and team projects, with a strong foundation in core electronics and hardware-software integration. Seeking an entry-level Software Developer role to apply technical and problem-solving skills while leveraging a strong foundation in both software and electronics.",
  contact: {
    email: "madhansundhar57@gmail.com",
    phone: "+91 98426 28262",
    location: "Madurai, Tamil Nadu, India",
    github: "https://github.com/Madhans57",
    linkedin: "https://linkedin.com/in/Madhans57",
    portfolio: "https://madhansundhar57.netlify.app"
  },
  skillsByCategory: [
    {
      category: "Programming Languages",
      icon: Terminal,
      skills: ["Java", "JavaScript", "C++", "SQL"]
    },
    {
      category: "Frontend Development",
      icon: Globe,
      skills: ["React.js", "Angular", "HTML5", "CSS3"]
    },
    {
      category: "Backend & APIs",
      icon: Layers,
      skills: ["Spring Boot", "Node.js", "Express.js", "REST APIs"]
    },
    {
      category: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB"]
    },
    {
      category: "Tools & Methodologies",
      icon: Code,
      skills: ["Git", "GitHub", "Agile Development", "Arduino", "Microcontroller Interfacing"]
    },
    {
      category: "Core Electronics & Embedded",
      icon: Cpu,
      skills: [
        "Basic Analog & Digital Electronics",
        "Microcontroller Basics",
        "Basic Circuit Understanding",
        "Hardware Interfacing Fundamentals"
      ]
    }
  ],
  education: [
    {
      degree: "B.E. Electronics & Communication Engineering",
      institution: "Sri Krishna College of Technology, Coimbatore",
      period: "2022 – 2026",
      grade: "CGPA: 8.00 / 10.0",
      status: "Pursuing",
      level: "Undergraduate Degree"
    },
    {
      degree: "Higher Secondary Certificate (12th)",
      institution: "The TVS School, Madurai",
      period: "2022",
      grade: "74.66%",
      board: "TNBHSE",
      level: "Higher Secondary"
    },
    {
      degree: "Secondary School Certificate (10th)",
      institution: "S.B.O.A. Matriculation & Higher Secondary School, Madurai",
      period: "2020",
      grade: "81.40%",
      board: "TNBSE",
      level: "Secondary School"
    }
  ],
  internships: [
    {
      company: "Cognizant Technology Solutions",
      role: "Software Engineering Intern",
      period: "March – June 2026",
      bullets: [
        "Completed full stack development training in Java, Angular, Spring Boot, and MySQL.",
        "Built front-end and back-end application components using Angular, Spring Boot, and REST APIs.",
        "Applied Agile development practices and problem-solving skills to build and debug applications."
      ]
    },
    {
      company: "NLC India Limited",
      role: "Telecommunications Intern",
      period: "June – July 2024",
      bullets: [
        "Studied telecommunication systems and network infrastructure in large-scale industrial operations.",
        "Assisted engineering teams with network monitoring, diagnostics, and system optimization."
      ]
    },
    {
      company: "SALZER Electronic",
      role: "Engineering Intern",
      period: "May 2025",
      bullets: [
        "Worked with the engineering team on product development projects.",
        "Studied advanced industrial manufacturing, automated production lines, and quality control systems."
      ]
    }
  ],
  projects: [
    {
      title: "ExamPlanner – Digital Exam Scheduling & Administration System",
      type: "Solo Project",
      tech: ["Java", "Spring Boot", "Angular", "MySQL", "REST APIs"],
      bullets: [
        "Developed a web-based exam management system covering student registration, course mapping, exam scheduling, and hall allocation.",
        "Implemented automated seating and invigilator allocation algorithms using Spring Boot REST APIs, an Angular front end, and a MySQL database."
      ],
      github: "https://github.com/Madhans57",
      link: null
    },
    {
      title: "SkySage – Weather Information Platform",
      type: "Team Project",
      tech: ["React.js", "REST API Integration", "CSS3", "Responsive Design"],
      bullets: [
        "Built a responsive weather web application that displays real-time atmospheric data from third-party weather APIs.",
        "Integrated external REST APIs into an intuitive React.js interface designed to deliver consistent usability across desktop and mobile screens."
      ],
      github: "https://github.com/Madhans57",
      link: "https://main--astonishing-piroshki-770392.netlify.app/"
    },
    {
      title: "Smart Vehicle Logging System (SVLS)",
      type: "Team Project",
      tech: ["Embedded C", "Microcontroller", "Hardware Interfacing", "Sensors"],
      bullets: [
        "Developed an embedded system for automated vehicle identification and real-time logging at security checkpoints.",
        "Integrated specialized hardware modules and software firmware for reliable data capture and structured storage of vehicle records."
      ],
      github: "https://github.com/Madhans57",
      link: null
    },
    {
      title: "Personal Portfolio Website",
      type: "Solo Project",
      tech: ["React.js", "Vite", "CSS3", "Netlify"],
      bullets: [
        "Personal developer portfolio showcasing academic projects, technical expertise, and internship experiences.",
        "Deployed on Netlify with custom domain routing and mobile-responsive layout."
      ],
      github: "https://github.com/Madhans57",
      link: "https://madhansundhar57.netlify.app/"
    },
    {
      title: "QR_Craft – Fast QR Code Generator",
      type: "Solo Project",
      tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
      bullets: [
        "Designed and implemented an instant QR code generation platform with real-time SVG/PNG preview.",
        "Optimized for rapid one-click generation and download, providing clean, user-friendly customization options."
      ],
      github: "https://github.com/Madhans57",
      link: "https://qrcraft57.netlify.app/"
    },
    {
      title: "Pair_Pop – Interactive Memory Matching Game",
      type: "Solo Project",
      tech: ["React.js", "State Management", "CSS3 Animations"],
      bullets: [
        "Developed an engaging card-matching memory game with custom flip animations, move counting, and victory logic.",
        "Engineered with clean React state hooks and component modularity for seamless performance across touch and mouse devices."
      ],
      github: "https://github.com/Madhans57",
      link: "https://pairpop57.netlify.app/"
    }
  ],
  certifications: [
    {
      title: "MATLAB Image Processing",
      sub: "Technical Skills Development"
    },
    {
      title: "Full Stack Java & Angular Training",
      sub: "Cognizant Technology Solutions"
    }
  ],
  additional: {
    languages: [
      { name: "Tamil", level: "Native" },
      { name: "English", level: "Proficient" }
    ],
    interests: [
      "Technology & Innovation",
      "Web Development",
      "Embedded Systems",
      "Automotive Electronics",
      "Software Architecture"
    ]
  }
};

/* ══════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════ */
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    education: useRef(null),
    contact: useRef(null)
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = Object.keys(sectionRefs);
      const current = sections.find((section) => {
        const el = sectionRefs[section].current;
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (name) => {
    const el = sectionRefs[name]?.current;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = './Madhan_Sundhar.pdf';
    link.download = 'Madhan_Sundhar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navLabels = {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact'
  };

  return (
    <div className="portfolio">
      {/* ── Fixed Classic Navbar ── */}
      <nav className={`navbar ${scrollY > 40 ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <span className="logo-badge">MS</span>
            <span className="logo-text">Madhan Sundhar</span>
          </div>

          <div className="menu-desktop">
            {Object.keys(sectionRefs).map((section) => (
              <button
                key={section}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {navLabels[section]}
              </button>
            ))}
          </div>

          <button
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="menu-mobile">
            {Object.keys(sectionRefs).map((section) => (
              <button
                key={section}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {navLabels[section]}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── Hero Section ── */}
      <section ref={sectionRefs.home} className="hero">
        <div className="hero-content">
          {/* Profile Portrait */}
          <div className="hero-image-wrapper">
            <div className="profile-gold-ring">
              <div className="profile-inner-frame">
                <img
                  src="./profilephoto.jpg"
                  alt={resumeData.name}
                  className="profile-image"
                />
              </div>
            </div>
            <div className="hero-status-chip">
              <span className="status-dot"></span>
              <span>Available for Opportunities</span>
            </div>
          </div>

          {/* Hero Typography */}
          <div className="hero-text">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-line"></span>
              <span>Software Developer</span>
            </div>
            <h1 className="hero-title">{resumeData.name}</h1>
            <p className="hero-subtitle">
              Java · Spring Boot · Angular · React.js · Core Electronics
            </p>
            <p className="hero-desc">
              Entry-level Software Developer with an Electronics &amp; Communication
              background, combining modern full-stack web engineering with a solid
              foundation in hardware-software integration.
            </p>
            <div className="hero-actions">
              <button
                className="btn-classic-primary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch <ArrowRight size={15} />
              </button>
              <button
                className="btn-classic-outline"
                onClick={handleResumeDownload}
              >
                <Download size={15} /> Download Resume
              </button>
              <a
                className="btn-classic-outline"
                href={resumeData.contact.portfolio}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe size={15} /> Live Portfolio
              </a>
              <a
                className="btn-classic-outline"
                href={resumeData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={16} /> GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <span>Explore</span>
          <ChevronDown size={18} />
        </div>
      </section>

      {/* ── About Section ── */}
      <AnimatedSection sectionRef={sectionRefs.about} className="about-section">
        <div className="section-wrapper">
          <div className="section-header">
            <div className="section-tag">
              <span className="section-tag-line"></span>
              <User size={13} />
              <span>About Me</span>
            </div>
            <h2 className="section-heading">Software Developer &amp; Engineer</h2>
            <p className="section-subheading">
              Creating clean, high-performance web applications with hardware-software integration
            </p>
          </div>

          <div className="about-content-clean">
            <p className="about-summary-text">
              I am a Software Developer with an Electronics and Communication Engineering background from Sri Krishna College of Technology (CGPA 8.00). 
              Experienced in building responsive full-stack applications with <strong>Java, Spring Boot, Angular, React.js, and MySQL</strong>, 
              I bring hands-on industry internship experience alongside a strong foundation in core electronics and microcontroller interfacing.
            </p>

            <div className="about-highlights-row">
              <div className="about-highlight-card">
                <div className="highlight-card-icon">
                  <Code size={20} />
                </div>
                <h4>Full-Stack Development</h4>
                <p>Building responsive web frontends in Angular &amp; React.js, paired with robust Spring Boot and Node.js REST APIs.</p>
              </div>

              <div className="about-highlight-card">
                <div className="highlight-card-icon">
                  <Cpu size={20} />
                </div>
                <h4>Hardware Integration</h4>
                <p>Core electronics foundation covering embedded C, microcontrollers, sensor interfacing, and automated logging systems.</p>
              </div>

              <div className="about-highlight-card">
                <div className="highlight-card-icon">
                  <Sparkles size={20} />
                </div>
                <h4>Agile &amp; Team Delivery</h4>
                <p>Trained in Agile development methodologies, component debugging, and delivering production-ready features.</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Experience (Internships) Section ── */}
      <AnimatedSection
        sectionRef={sectionRefs.experience}
        className="experience-section"
      >
        <div className="section-wrapper">
          <div className="section-header">
            <div className="section-tag">
              <span className="section-tag-line"></span>
              <Briefcase size={13} />
              <span>Industry Experience</span>
            </div>
            <h2 className="section-heading">Professional Internships</h2>
            <p className="section-subheading">
              Practical industry training, full stack engineering, and telecommunications
            </p>
          </div>

          <div className="experience-timeline">
            {resumeData.internships.map((internship, idx) => (
              <div key={idx} className="experience-item">
                <div className="experience-dot"></div>
                <div className="experience-card">
                  <div className="experience-header">
                    <h3 className="experience-company">{internship.company}</h3>
                    <span className="experience-period">{internship.period}</span>
                  </div>
                  <div className="experience-role">
                    <Briefcase size={14} />
                    <span>{internship.role}</span>
                  </div>
                  <ul className="experience-bullets">
                    {internship.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Projects Section ── */}
      <AnimatedSection
        sectionRef={sectionRefs.projects}
        className="projects-section"
      >
        <div className="section-wrapper">
          <div className="section-header">
            <div className="section-tag">
              <span className="section-tag-line"></span>
              <Code size={13} />
              <span>Portfolio of Work</span>
            </div>
            <h2 className="section-heading">Key Projects</h2>
            <p className="section-subheading">
              Full stack web systems, REST API integration, and embedded hardware solutions
            </p>
          </div>

          <div className="projects-grid">
            {resumeData.projects.map((proj, idx) => (
              <div key={idx} className="project-card">
                <div className="project-top-row">
                  <span className="project-num">0{idx + 1}</span>
                  <span className="project-type-chip">{proj.type}</span>
                </div>
                <h3 className="project-title">{proj.title}</h3>
                <ul className="project-desc-bullets">
                  {proj.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
                <div className="project-tech-tags">
                  {proj.tech.map((t, tIdx) => (
                    <span key={tIdx} className="project-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {proj.link && (
                    <a
                      className="project-link-item"
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                  )}
                  {proj.github && (
                    <a
                      className="project-link-item"
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon size={14} /> Source Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Technical Skills Section ── */}
      <AnimatedSection sectionRef={sectionRefs.skills} className="skills-section">
        <div className="section-wrapper">
          <div className="section-header">
            <div className="section-tag">
              <span className="section-tag-line"></span>
              <Sparkles size={13} />
              <span>Core Competencies</span>
            </div>
            <h2 className="section-heading">Technical Skills</h2>
            <p className="section-subheading">
              Technologies, frameworks, databases, and hardware fundamentals
            </p>
          </div>

          <div className="skills-groups">
            {resumeData.skillsByCategory.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div key={idx} className="skill-group-card">
                  <h3 className="skill-group-title">
                    <IconComp size={18} />
                    <span>{cat.category}</span>
                  </h3>
                  <div className="skill-chips">
                    {cat.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Education Section ── */}
      <AnimatedSection
        sectionRef={sectionRefs.education}
        className="education-section"
      >
        <div className="section-wrapper">
          <div className="section-header">
            <div className="section-tag">
              <span className="section-tag-line"></span>
              <GraduationCap size={13} />
              <span>Academic Pathway</span>
            </div>
            <h2 className="section-heading">Education</h2>
            <p className="section-subheading">
              Engineering degree and foundational academic background
            </p>
          </div>

          <div className="edu-grid">
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="edu-card">
                <div className="edu-level">{edu.level}</div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <div className="edu-institution">{edu.institution}</div>
                <div className="edu-stats">
                  <span className="edu-grade">{edu.grade}</span>
                  <span className="edu-year">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Certifications & Additional Info ── */}
      <section className="additional-section">
        <div className="section-wrapper">
          <div className="additional-grid">
            {/* Certifications */}
            <div className="additional-box">
              <h3>Certifications &amp; Training</h3>
              {resumeData.certifications.map((cert, idx) => (
                <div key={idx} className="cert-item">
                  <CheckCircle2 size={18} className="cert-bullet-icon" />
                  <div>
                    <div className="cert-title">{cert.title}</div>
                    <div className="cert-sub">{cert.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Information */}
            <div className="additional-box">
              <h3>Additional Information</h3>
              <div className="info-item-block">
                <div className="info-item-title">Languages</div>
                <div className="info-item-tags">
                  {resumeData.additional.languages.map((lang, idx) => (
                    <span key={idx} className="info-badge">
                      {lang.name} ({lang.level})
                    </span>
                  ))}
                </div>
              </div>

              <div className="info-item-block">
                <div className="info-item-title">Areas of Interest</div>
                <div className="info-item-tags">
                  {resumeData.additional.interests.map((interest, idx) => (
                    <span key={idx} className="info-badge">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <AnimatedSection sectionRef={sectionRefs.contact} className="contact-section">
        <div className="section-wrapper">
          <div className="section-header">
            <div className="section-tag">
              <span className="section-tag-line"></span>
              <Mail size={13} />
              <span>Get In Touch</span>
            </div>
            <h2 className="section-heading">Let's Connect</h2>
            <p className="section-subheading">
              Inquiries regarding full-time roles, software opportunities, or technical collaboration
            </p>
          </div>

          <div className="contact-grid">
            <div>
              <p className="contact-invitation">
                I am actively seeking an entry-level Software Developer role where I can
                apply my skills in Java, Angular, React.js, and Spring Boot while
                contributing to meaningful software solutions. Feel free to reach out
                directly by email or phone.
              </p>

              <div className="contact-channels">
                <div className="contact-channel">
                  <div className="channel-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="channel-label">Email Address</div>
                    <div className="channel-val">
                      <a href={`mailto:${resumeData.contact.email}`}>
                        {resumeData.contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-channel">
                  <div className="channel-icon">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="channel-label">Phone Number</div>
                    <div className="channel-val">{resumeData.contact.phone}</div>
                  </div>
                </div>

                <div className="contact-channel">
                  <div className="channel-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="channel-label">Location</div>
                    <div className="channel-val">{resumeData.contact.location}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-social-pane">
              <h3 className="contact-pane-title">Profiles &amp; Resume</h3>
              <div className="social-action-buttons">
                <a
                  className="social-button"
                  href={resumeData.contact.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe size={16} /> Live Portfolio (Netlify)
                </a>
                <a
                  className="social-button"
                  href={resumeData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon size={16} /> GitHub Profile
                </a>
                <a
                  className="social-button"
                  href={resumeData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon size={16} /> LinkedIn Profile
                </a>
                <button
                  className="social-button"
                  onClick={handleResumeDownload}
                >
                  <Download size={16} /> Download Resume (PDF)
                </button>
              </div>

              <div className="stats-quad">
                <div className="stat-item">
                  <div className="stat-number">8.00</div>
                  <div className="stat-title">B.E. CGPA</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3</div>
                  <div className="stat-title">Internships</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5+</div>
                  <div className="stat-title">Projects Built</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2026</div>
                  <div className="stat-title">Graduation Year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Classic Footer ── */}
      <footer className="footer">
        <div className="footer-copy">
          © {new Date().getFullYear()} {resumeData.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
