import { useState } from 'react'
import './App.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const valueCards = [
  {
    title: 'Responsive & Mobile First',
    text: 'Websites that feel polished on every screen, from phones to large desktop layouts.',
  },
  {
    title: 'Fast Performance',
    text: 'Lightweight, efficient builds that prioritize speed, UX and a smooth user experience.',
  },
  {
    title: 'Clean & Maintainable Code',
    text: 'Structured, readable code that is easier to extend, update and scale over time.',
  },
  {
    title: 'Business-Focused Solutions',
    text: 'Every decision is shaped around clarity, usability and the goals of the business.',
  },
]

const stack = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'PostgreSQL',
  'MySQL',
  'Supabase',
  'Git',
  'GitHub',
]

const projectCards = [
  {
    title: 'Marketplace Web Application',
    description:
      'A marketplace web application where users can create accounts, manage profiles and publish listings.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Supabase', 'PostgreSQL'],
    features: [
      'Authentication',
      'User profiles',
      'Listings',
      'Image uploads',
      'Database integration',
      'Responsive UI',
    ],
    demo: 'https://example.com/marketplace-demo',
    github: 'https://github.com/tony/marketplace-app',
    visual: 'visual-one',
  },
  {
    title: 'Restaurant Website',
    description:
      'A modern responsive restaurant website concept designed to showcase the menu, location and customer contact options.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Responsive design', 'Menu section', 'Gallery', 'Location', 'Contact/WhatsApp CTA'],
    demo: 'https://example.com/restaurant-concept',
    github: 'https://github.com/tony/restaurant-concept',
    visual: 'visual-two',
    badge: 'Concept Project',
  },
  {
    title: 'Coaching Institute Website',
    description:
      'A professional website concept for a coaching institute with course information and admission enquiry functionality.',
    tech: ['React', 'CSS', 'JavaScript'],
    features: [
      'Course listings',
      'Admission enquiry',
      'Faculty section',
      'Results/testimonials section',
      'Responsive design',
    ],
    demo: 'https://example.com/coaching-institute-demo',
    github: 'https://github.com/tony/coaching-website',
    visual: 'visual-three',
    badge: 'Concept Project',
  },
]

const services = [
  {
    title: 'Business Websites',
    text: 'Modern responsive websites for local businesses and professionals.',
  },
  {
    title: 'Landing Pages',
    text: 'High-quality landing pages designed around a clear business goal or call to action.',
  },
  {
    title: 'Web Applications',
    text: 'Interactive web applications with authentication, databases and APIs.',
  },
  {
    title: 'Website Improvements',
    text: 'Performance, responsiveness, UI and functionality improvements for existing websites.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Understand',
    text: 'Understand the business, goals and requirements.',
  },
  {
    number: '02',
    title: 'Design',
    text: 'Create a clean and intuitive interface.',
  },
  {
    number: '03',
    title: 'Build',
    text: 'Develop and test the website/application.',
  },
  {
    number: '04',
    title: 'Launch',
    text: 'Deploy the finished product and make final improvements.',
  },
]

const initialForm = {
  name: '',
  email: '',
  projectType: '',
  message: '',
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validateForm = () => {
    const nextErrors = {}

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name.'
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.projectType.trim()) {
      nextErrors.projectType = 'Please select a project type.'
    }

    if (!formData.message.trim() || formData.message.trim().length < 20) {
      nextErrors.message = 'Message should be at least 20 characters long.'
    }

    return nextErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateForm()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
      setFormData(initialForm)
    }
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <a className="brand" href="#home" aria-label="Tony home">
            <span className="brand-mark">T</span>
            <span className="brand-text">
              Tony
              <small>Full Stack Developer</small>
            </span>
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`site-nav ${mobileOpen ? 'open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <span className="status-pill">Available for freelance projects</span>
            <h1>Building Websites That Help Businesses Grow.</h1>
            <p className="lead">
              I build fast, modern and responsive websites and web applications with a focus on
              performance, usability and clean design.
            </p>

            <div className="hero-actions">
              <a href="#work" className="primary-btn">
                View My Work
              </a>
              <a href="#contact" className="secondary-btn">
                Let&apos;s Work Together
              </a>
            </div>

            <div className="hero-meta" aria-label="Developer profile information">
              <div>
                <span>Role</span>
                <strong>Full Stack Developer</strong>
              </div>
              <div>
                <span>Location</span>
                <strong>India</strong>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="code-window">
              <div className="window-bar">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-body">
                <div className="code-line">
                  <span className="token-keyword">const</span>
                  <span className="token-name"> idea </span>
                  <span className="token-symbol">=</span>
                  <span className="token-string"> &apos;business growth&apos; </span>
                </div>
                <div className="code-line">
                  <span className="token-keyword">const</span>
                  <span className="token-name"> build </span>
                  <span className="token-symbol">=</span>
                  <span className="token-string"> &apos;responsive product&apos; </span>
                </div>
                <div className="code-line muted">
                  <span className="token-keyword">return</span>
                  <span className="token-name"> userFriendlyExperience</span>
                </div>
              </div>
            </div>

            <div className="floating-card float-one">
              <span className="mini-label">Performance</span>
              <strong>Fast</strong>
            </div>
            <div className="floating-card float-two">
              <span className="mini-label">Build</span>
              <strong>Scalable</strong>
            </div>
          </div>
        </section>

        <section className="trust container" aria-labelledby="why-choose-me">
          <div className="section-heading narrow">
            <p className="eyebrow">Why work with me</p>
            <h2 id="why-choose-me">Thoughtful development that fits real business needs.</h2>
          </div>

          <div className="value-grid">
            {valueCards.map((card) => (
              <article key={card.title} className="value-card">
                <div className="value-icon" aria-hidden="true">
                  <span></span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="projects container" id="work" aria-labelledby="projects-heading">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="projects-heading">Web solutions built for usability and growth.</h2>
            </div>
            <a href="#contact" className="text-link">
              Discuss a project
            </a>
          </div>

          <div className="project-list">
            {projectCards.map((project) => (
              <article key={project.title} className="project-card">
                <div className={`project-visual ${project.visual}`} aria-hidden="true">
                  <div className="visual-frame">
                    <div className="visual-header">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="visual-content">
                      <div className="visual-bar short"></div>
                      <div className="visual-bar"></div>
                      <div className="visual-bar medium"></div>
                    </div>
                  </div>
                </div>

                <div className="project-body">
                  <div className="project-topline">
                    <h3>{project.title}</h3>
                    {project.badge ? <span className="project-badge">{project.badge}</span> : null}
                  </div>

                  <p>{project.description}</p>

                  <div className="tech-row">
                    {project.tech.map((item) => (
                      <span key={item} className="tech-pill">
                        {item}
                      </span>
                    ))}
                  </div>

                  <ul className="feature-list">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <div className="project-actions">
                    <a href={project.demo} target="_blank" rel="noreferrer" className="primary-btn small-btn">
                      Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="secondary-btn small-btn">
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services container" id="services" aria-labelledby="services-heading">
          <div className="section-heading narrow">
            <p className="eyebrow">Services</p>
            <h2 id="services-heading">What I Can Build</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <div className="service-index" aria-hidden="true">
                  0{services.indexOf(service) + 1}
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="process container" aria-labelledby="process-heading">
          <div className="section-heading narrow">
            <p className="eyebrow">Process</p>
            <h2 id="process-heading">A clear, reliable workflow from idea to launch.</h2>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <article key={step.number} className="process-card">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about container" id="about" aria-labelledby="about-heading">
          <div className="about-panel">
            <div className="about-copy">
              <p className="eyebrow">About me</p>
              <h2 id="about-heading">About Me</h2>
              <p>
                I&apos;m a developer who enjoys turning ideas into practical digital products. I focus on
                building responsive interfaces, useful web applications and clean full-stack solutions.
              </p>
              <ul className="about-list">
                <li>Full Stack Developer</li>
                <li>Based in India</li>
                <li>Available for freelance work</li>
              </ul>
            </div>

            <div className="tech-panel" aria-label="Technology stack">
              <p className="eyebrow">Tech stack</p>
              <div className="tech-badges">
                {stack.map((item) => (
                  <span key={item} className="tech-badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact container" id="contact" aria-labelledby="contact-heading">
          <div className="contact-content">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2 id="contact-heading">Have a project in mind?</h2>
              <p>Tell me what you&apos;re building and let&apos;s discuss how I can help.</p>

              <div className="contact-links">
                <a href="mailto:hello@tony-dev.com">hello@tony-dev.com</a>
                <a href="https://github.com/tony" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/tony-dev" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <label htmlFor="name">
                  Name
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name ? <span className="field-error">{errors.name}</span> : null}
                </label>
              </div>

              <div className="form-row">
                <label htmlFor="email">
                  Email
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email ? <span className="field-error">{errors.email}</span> : null}
                </label>
              </div>

              <div className="form-row">
                <label htmlFor="projectType">
                  Project type
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.projectType)}
                  >
                    <option value="">Select project type</option>
                    <option value="Business Website">Business Website</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Web Application">Web Application</option>
                    <option value="Website Improvement">Website Improvement</option>
                  </select>
                  {errors.projectType ? <span className="field-error">{errors.projectType}</span> : null}
                </label>
              </div>

              <div className="form-row">
                <label htmlFor="message">
                  Message
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message ? <span className="field-error">{errors.message}</span> : null}
                </label>
              </div>

              <div className="form-actions">
                <button type="submit" className="primary-btn form-btn">
                  Start a Project
                </button>
                <a href="mailto:hello@tony-dev.com" className="secondary-btn form-btn">
                  Email Me
                </a>
              </div>

              {submitted ? (
                <p className="form-success">Thanks! Your message looks ready to send.</p>
              ) : null}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <div>
            <h3>Tony</h3>
            <p>Full Stack Developer</p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer-links">
            <a href="https://github.com/tony" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/tony-dev" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:hello@tony-dev.com">Email</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© 2026 Tony. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
