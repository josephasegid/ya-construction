import { useMemo, useState } from 'react'
import siteBuildOne from './assets/images.jpg'
import siteBuildTwo from './assets/images (1).jpg'
import siteBuildThree from './assets/images (2).jpg'
import ringRoadDrainage from './assets/ring road drainage.jpg'
import piazzaHotel from './assets/Piazza Boutique Hotel.jpg'
import lebuHousing from './assets/lebu comunity housnig.jpg'
import './App.css'

const filters = ['All', 'Residential', 'Commercial', 'Industrial', 'Infrastructure']

const services = [
  {
    title: 'Design-Build',
    description:
      'Integrated planning and construction for faster delivery, tighter budgets, and clear accountability.',
  },
  {
    title: 'General Contracting',
    description:
      'Certified supervision, procurement, and site coordination for complex builds across Addis Ababa.',
  },
  {
    title: 'Renovation + Retrofit',
    description:
      'Smart upgrades for offices, retail, and residential spaces with minimal downtime.',
  },
  {
    title: 'Civil Infrastructure',
    description:
      'Roads, drainage, and site prep handled with safety-first process control.',
  },
]

const projects = [
  {
    name: 'Bole Skyline Residences',
    category: 'Residential',
    status: 'Delivered',
    location: 'Bole, Addis Ababa',
    year: '2025',
    image: siteBuildOne,
  },
  {
    name: 'Addis Trade Hub',
    category: 'Commercial',
    status: 'In progress',
    location: 'Kazanchis',
    year: '2026',
    image: siteBuildTwo,
  },
  {
    name: 'Ayat Manufacturing Plant',
    category: 'Industrial',
    status: 'Delivered',
    location: 'Akaki',
    year: '2024',
    image: siteBuildThree,
  },
  {
    name: 'Ring Road Drainage Upgrade',
    category: 'Infrastructure',
    status: 'In progress',
    location: 'Ring Road',
    year: '2026',
    image: ringRoadDrainage,
  },
  {
    name: 'Piazza Boutique Hotel',
    category: 'Commercial',
    status: 'Delivered',
    location: 'Piazza',
    year: '2023',
    image: piazzaHotel,
  },
  {
    name: 'Lebu Community Housing',
    category: 'Residential',
    status: 'In progress',
    location: 'Lebu',
    year: '2026',
    image: lebuHousing,
  },
]

const projectProgress = [
  {
    name: 'Addis Trade Hub',
    percent: 68,
    phase: 'Facade and MEP coordination',
    eta: 'Q4 2026',
    budget: '98M ETB',
  },
  {
    name: 'Ring Road Drainage Upgrade',
    percent: 44,
    phase: 'Section 3 pipe installation',
    eta: 'Q1 2027',
    budget: '7M ETB',
  },
  {
    name: 'Lebu Community Housing',
    percent: 52,
    phase: 'Structural frame and slab works',
    eta: 'Q2 2026',
    budget: '4.5M ETB',
  },
]

const news = [
  {
    title: 'Addis Ababa launches new urban renewal incentives',
    date: 'Aug 16, 2026',
    excerpt:
      'City officials announced incentives for mixed-use developments and green retrofit projects.',
  },
  {
    title: 'Materials price index stabilizes for Q3',
    date: 'Jul 22, 2026',
    excerpt:
      'Supply chain partnerships continue to stabilize cement and steel pricing across the capital.',
  },
  {
    title: 'Safety week across active sites',
    date: 'Jul 02, 2026',
    excerpt:
      'YA Construction rolled out updated PPE and daily briefings for every subcontractor.',
  },
]

const testimonials = [
  {
    quote:
      'YA Construction delivered our mixed-use tower six weeks early with full transparency on budget.',
    name: 'Meron Tadesse',
    company: 'Bole Skyline Residences',
  },
  {
    quote:
      'The team handled design revisions quickly and kept the project on track throughout the rainy season.',
    name: 'Abel Kassa',
    company: 'Piazza Boutique Hotel',
  },
]

const certifications = [
  'ISO 45001 Safety Standards',
  'Addis Ababa City Construction License',
  'Green Building Council Partner',
  'Certified Project Managers',
]

const projectSites = [
  {
    name: 'Bole Urban Core',
    detail: 'High-rise residential and retail mix.',
    mapUrl: 'https://www.google.com/maps?q=8.979742799095877,38.771334323355475',
  },
  {
    name: 'Akaki Industrial Zone',
    detail: 'Manufacturing and logistics infrastructure.',
    mapUrl: 'https://maps.app.goo.gl/G4m8uXWYYgvxJiDcA',
  },
  {
    name: 'Lebu Expansion',
    detail: 'Affordable housing community build.',
    mapUrl: 'https://maps.app.goo.gl/V1KLsi8wTnBN7nfC7',
  },
  {
    name: 'Kazanchis Business District',
    detail: 'Corporate offices and hospitality.',
    mapUrl: 'https://maps.app.goo.gl/bveZbsfBm49dcavM7',
  },
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  projectType: 'Residential',
  message: '',
}

function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [activeProgress, setActiveProgress] = useState(projectProgress[0])
  const [formState, setFormState] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects
    }
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setFormState(initialForm)
  }

  return (
    <div className="page">
      <header className="hero" id="home">
        <nav className="nav">
          <div className="brand">
            <span className="brand-mark">YA</span>
            <div>
              <p className="brand-name">YA Construction</p>
              <p className="brand-tag">Addis Ababa, Ethiopia</p>
            </div>
          </div>
          <button
            className="nav-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`nav-links${isMenuOpen ? ' is-open' : ''}`}>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#progress">Progress</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="nav-cta" type="button">
            Request a Quote
          </button>
        </nav>

        <div className="hero-banner">
          <img src="/heroimage.jpg" alt="YA Construction hero" />
          <div className="hero-banner-overlay" />
          <div className="hero-banner-content">
            <p className="hero-banner-eyebrow">Addis Ababa Contractors</p>
            <h2>Building bold spaces that move the city forward.</h2>
            <p>
              Residential, commercial, and infrastructure delivery with clear
              timelines and trusted site leadership.
            </p>
          </div>
        </div>

        <section className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">Trusted builders in Addis Ababa</p>
            <h1>Bold construction for a growing city.</h1>
            <p className="hero-subtitle">
              YA Construction delivers residential towers, commercial hubs, and
              infrastructure upgrades across Addis Ababa. We combine precision
              planning, clear communication, and uncompromising safety to move
              your vision from ground to skyline.
            </p>
            <div className="hero-actions">
              <button className="primary" type="button">
                Explore projects
              </button>
              <button className="ghost" type="button">
                Meet the team
              </button>
            </div>
            <div className="hero-metrics">
              <div>
                <p className="metric-value">120+</p>
                <p className="metric-label">Projects delivered</p>
              </div>
              <div>
                <p className="metric-value">35</p>
                <p className="metric-label">Active sites</p>
              </div>
              <div>
                <p className="metric-value">18</p>
                <p className="metric-label">Years in Addis</p>
              </div>
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-card">
              <p className="panel-title">Project Spotlight</p>
              <p className="panel-subtitle">Addis Trade Hub</p>
              <img
                className="panel-image"
                src="/heroimage.jpg"
                alt="YA Construction hero visual"
              />
              <div className="panel-stats">
                <div>
                  <p className="stat-label">Completion</p>
                  <p className="stat-value">68%</p>
                </div>
                <div>
                  <p className="stat-label">ETA</p>
                  <p className="stat-value">Q4 2026</p>
                </div>
              </div>
              <button className="panel-action" type="button">
                View live update
              </button>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="section highlights">
          <div className="highlight-card">
            <h3>Fast, safe delivery</h3>
            <p>Daily reporting and safety-first planning across every site.</p>
          </div>
          <div className="highlight-card">
            <h3>Local expertise</h3>
            <p>Deep experience in Addis Ababa permitting and logistics.</p>
          </div>
          <div className="highlight-card">
            <h3>Transparent cost control</h3>
            <p>Weekly budget tracking, scope reviews, and procurement support.</p>
          </div>
        </section>

        <section className="section split" id="about">
          <div>
            <h2>About YA Construction</h2>
            <p>
              Built in Addis Ababa, YA Construction is a full-service contractor
              serving residential, commercial, and civic clients. Our team
              combines local market knowledge with international project
              standards to deliver safe, durable structures for the city's next
              chapter.
            </p>
            <div className="about-points">
              <div>
                <h4>Vision</h4>
                <p>Reliable construction that elevates life and business.</p>
              </div>
              <div>
                <h4>Team</h4>
                <p>Architects, engineers, and site leaders with deep local ties.</p>
              </div>
              <div>
                <h4>Local SEO</h4>
                <p>
                  We focus on Addis Ababa neighborhoods to connect clients with
                  nearby, verified teams.
                </p>
              </div>
            </div>
          </div>
          <div className="about-card">
            <p className="eyebrow">Trust signals</p>
            <h3>Certified. Insured. Ready.</h3>
            <ul className="trust-list">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="trust-cta">
              <button className="primary" type="button">
                Download company profile
              </button>
            </div>
          </div>
        </section>

        <section className="section muted" id="services">
          <div className="section-head">
            <h2>Services</h2>
            <p>
              End-to-end construction support from feasibility through handover.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="text-button" type="button">
                  Learn more
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-head">
            <h2>Portfolio + Projects</h2>
            <p>
              High-impact builds across Addis Ababa, from mixed-use towers to
              city infrastructure. Filter by category to explore.
            </p>
            <div className="filters">
              {filters.map((label) => (
                <button
                  key={label}
                  className={`filter-pill${
                    activeFilter === label ? ' is-active' : ''
                  }`}
                  type="button"
                  onClick={() => setActiveFilter(label)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article className="project-card" key={project.name}>
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.name}
                />
                <div className="project-body">
                  <div>
                    <p className="project-name">{project.name}</p>
                    <p className="project-meta">{project.location}</p>
                  </div>
                  <div className="project-tags">
                    <span>{project.category}</span>
                    <span>{project.status}</span>
                  </div>
                </div>
                <p className="project-year">{project.year}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section muted" id="progress">
          <div className="section-head">
            <h2>Project progress</h2>
            <p>
              Live updates from active sites with clear milestones, schedule
              tracking, and budget oversight.
            </p>
          </div>
          <div className="progress-layout">
            <div className="progress-list">
              {projectProgress.map((project) => (
                <button
                  key={project.name}
                  className={`progress-item${
                    activeProgress.name === project.name ? ' is-active' : ''
                  }`}
                  type="button"
                  onClick={() => setActiveProgress(project)}
                >
                  <div>
                    <p className="progress-name">{project.name}</p>
                    <p className="progress-phase">{project.phase}</p>
                  </div>
                  <span className="progress-percent">{project.percent}%</span>
                </button>
              ))}
            </div>
            <div className="progress-card">
              <p className="eyebrow">Live status</p>
              <h3>{activeProgress.name}</h3>
              <p className="progress-detail">{activeProgress.phase}</p>
              <div className="progress-bar">
                <span
                  style={{ width: `${activeProgress.percent}%` }}
                  aria-hidden="true"
                />
              </div>
              <div className="progress-meta">
                <div>
                  <p className="stat-label">Completion</p>
                  <p className="stat-value">{activeProgress.percent}%</p>
                </div>
                <div>
                  <p className="stat-label">Budget</p>
                  <p className="stat-value">{activeProgress.budget}</p>
                </div>
                <div>
                  <p className="stat-label">ETA</p>
                  <p className="stat-value">{activeProgress.eta}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="sites">
          <div className="section-head">
            <h2>Project sites</h2>
            <p>Current focus areas across Addis Ababa and surrounding districts.</p>
          </div>
          <div className="site-grid">
            {projectSites.map((site) => (
              <article className="site-card" key={site.name}>
                <h3>{site.name}</h3>
                <p>{site.detail}</p>
                <a
                  className="text-button"
                  href={site.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on map
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section muted" id="news">
          <div className="section-head">
            <h2>Construction news in Addis Ababa</h2>
            <p>
              Updates on permits, materials, and safety initiatives across the
              city.
            </p>
          </div>
          <div className="news-grid">
            {news.map((item) => (
              <article className="news-card" key={item.title}>
                <p className="news-date">{item.date}</p>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <button className="text-button" type="button">
                  Read update
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="section split" id="testimonials">
          <div>
            <h2>Testimonials</h2>
            <p>
              Clients choose YA Construction for dependable schedules, clear
              communication, and high-end finishes.
            </p>
            <div className="testimonial-list">
              {testimonials.map((item) => (
                <blockquote key={item.name}>
                  <p>{item.quote}</p>
                  <footer>
                    {item.name}, {item.company}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
          <div className="cta-card">
            <p className="eyebrow">Ready to build?</p>
            <h3>Schedule a site visit this week.</h3>
            <p>
              We respond within one business day with a detailed construction
              plan and timeline.
            </p>
            <a className="primary cta-link" href="#contact">
              Book a consultation
            </a>
          </div>
        </section>

        <section className="section callout" id="contact">
          <div>
            <h2>Contact YA Construction</h2>
            <p>
              Tell us about your project. Our team will prepare a tailored
              estimate, schedule, and scope of work.
            </p>
            <div className="contact-lines">
              <p>Phone: +251 911 234 567</p>
              <p>Email: hello@yaconstruction.et</p>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={formState.name}
                onChange={handleFormChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formState.email}
                onChange={handleFormChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formState.phone}
                onChange={handleFormChange}
              />
              <select
                name="projectType"
                value={formState.projectType}
                onChange={handleFormChange}
              >
                <option>Residential</option>
                <option>Commercial</option>
                <option>Industrial</option>
                <option>Infrastructure</option>
              </select>
              <textarea
                name="message"
                placeholder="Project details"
                rows="4"
                value={formState.message}
                onChange={handleFormChange}
              />
            </div>
            <button className="primary" type="submit">
              Send request
            </button>
            {submitted && (
              <p className="form-success">
                Thanks! We will reach out within one business day.
              </p>
            )}
          </form>
        </section>
      </main>

      <footer className="footer">
        <div>
          <p className="brand-name">YA Construction</p>
          <p className="brand-tag">Addis Ababa, Ethiopia</p>
          <p className="footer-contact">+251 911 234 567</p>
          <p className="footer-contact">hello@yaconstruction.et</p>
        </div>
        <div className="footer-links">
          <span>LinkedIn</span>
          <span>Instagram</span>
          <span>Safety</span>
          <span>Careers</span>
        </div>
        <p className="footer-note">2026 YA Construction. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
