import muziPhoto from "./images/grad.jpg";
import { useState } from 'react'
import {
  Menu, X, Code2, ShieldCheck, Network, Palette, BrainCircuit,
  Github, Linkedin, Mail, MapPin, Phone, ArrowUpRight, ExternalLink,
  GraduationCap, BriefcaseBusiness, Send, Award, ChevronRight
} from 'lucide-react'

const projects = [
  {
    title: 'AI House Price Predictor',
    category: 'MACHINE LEARNING · WEB APPLICATION',
    description: 'A machine-learning web application that predicts property prices from property features, using a Python model and a React interface.',
    technologies: ['Python', 'Flask', 'React', 'Scikit-learn'],
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=85',
    link: 'https://github.com/Frank-Muzi/house-price-predictor-ai-project',
  },
  {
    title: 'LaMilage Cosmetics',
    category: 'E-COMMERCE · FULL STACK',
    description: 'A responsive online cosmetics store with product browsing, account authentication, shopping cart functionality and order management.',
    technologies: ['React', 'JavaScript', 'Supabase', 'CSS'],
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=1000&q=85',
    link: 'https://github.com/Frank-Muzi/01---LaMilage_Cosmetics',
  },
  {
    title: 'FarmBracket',
    category: 'MARKETPLACE · TEAM PROJECT',
    description: 'A marketplace concept designed to connect farmers directly with supermarkets and individual buyers, supporting better market access.',
    technologies: ['React', 'TypeScript', 'Supabase'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85',
    link: 'https://github.com/Frank-Muzi/Group.8-FamersBracket-2025',
  },
]

const services = [
  { icon: Code2, title: 'Web Development', text: 'Building responsive web applications and practical digital experiences using modern frontend and backend technologies.' },
  { icon: ShieldCheck, title: 'Cybersecurity', text: 'Developing knowledge in security operations, threat awareness, network security and protecting digital systems.' },
  { icon: Network, title: 'Networking', text: 'Understanding network concepts, connectivity, infrastructure and the foundations that keep systems communicating.' },
  { icon: BrainCircuit, title: 'AI & Machine Learning', text: 'Exploring data-driven applications and integrating machine-learning models into useful software solutions.' },
]

const skillGroups = [
  { title: 'Programming', skills: ['Python', 'JavaScript', 'Java', 'Dart'] },
  { title: 'Web & Frameworks', skills: ['HTML5', 'CSS3', 'React', 'React Native', 'Flask', 'Flutter'] },
  { title: 'Platforms & Tools', skills: ['Git', 'GitHub', 'Supabase', 'Streamlit', 'Microsoft 365'] },
  { title: 'Technical interests', skills: ['Cybersecurity', 'Networking', 'Machine Learning', 'Security Operations'] },
]

const certifications = [
  { title: 'FNB App Academy', issuer: 'First National Bank', detail: 'App development learning programme', year: 'COMPLETED' },
]

function SectionTitle({ kicker, title, subtitle }) {
  return <div className="section-title">
    <span className="section-kicker">{kicker}</span>
    <h2>{title}</h2>
    {subtitle && <p>{subtitle}</p>}
  </div>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [notice, setNotice] = useState('')
  const nav = [['Home', 'home'], ['About', 'about'], ['Services', 'services'], ['Projects', 'projects'], ['Certifications', 'certifications'], ['Contact', 'contact']]

  function handleSubmit(event) {
    event.preventDefault()
    const subject = encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:frankmuzim@gmail.com?subject=${subject}&body=${body}`
    setNotice('Your email application should open with your message prepared.')
  }

  return <div className="app">
    <header className="header">
      <a href="#home" className="logo">Muzi Mbuyane<span>.</span></a>
      <button className="mobile-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'navigation navigation-open' : 'navigation'}>
        {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
      <a className="header-contact" href="#contact">Hire Me <ArrowUpRight size={15} /></a>
    </header>

    <main>
      <section className="hero page-container" id="home">
        <div className="hero-content">
          <span className="hello-label"><i /> Welcome To My Portfolio</span>
          <p className="hello">Hi, I'm</p>
          <h1>Muzi <span>Mbuyane</span></h1>
          <div className="typing-title">Cybersecurity Specialist <b>&</b> Software Developer </div>
          <p className="hero-text">A passionate Bachelor of ICT graduate focused on software development and cybersecurity, with an interest in building secure, efficient and meaningful digital solutions.</p>
          <div className="hero-buttons">
            <a className="btn btn-primary" href="#contact">Hire Me <ArrowUpRight size={16} /></a>
            <a className="btn btn-outline" href="#projects">View Projects <ChevronRight size={16} /></a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/Frank-Muzi" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href="mailto:frankmuzim@gmail.com" aria-label="Email"><Mail /></a>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <div className="photo-orbit orbit-one" /><div className="photo-orbit orbit-two" />
          <div className="profile-placeholder">
            <img
              src={muziPhoto}
              alt="Muzi Mbuyane"
              className="profile-photo"
            />
          </div>
          <div className="photo-caption"><span className="caption-dot" /> BICT GRADUATE · CLASS OF 2025</div>
        </div>
        <a className="hero-scroll" href="#about">SCROLL DOWN <span>↓</span></a>
      </section>

      <section className="section page-container" id="about">
        <SectionTitle kicker="GET TO KNOW ME BETTER" title="About Me" subtitle="A little background about who I am and what drives me." />
        <div className="about-layout">
          <div className="about-image">
            <div className="about-image-inner">
              <img
                src={muziPhoto}
                alt="Muzi Mbuyane"
                className="profile-photo"
              />
            </div>
            <div className="about-image-tag">SOFTWARE · SECURITY · INNOVATION</div>
          </div>
          <div className="about-copy">
            <span className="small-green">RECENT ICT GRADUATE</span>
            <h3>Building technology.<br /><em>Learning every day.</em></h3>
            <p>I'm a Bachelor of ICT graduate from the University of Mpumalanga (Class of 2025), passionate about designing, developing, testing and deploying practical technology solutions.</p>
            <p>My interests span software development and cybersecurity. I enjoy creating web applications, solving technical problems, understanding how networks operate, and learning how digital systems can be secured.</p>
            <p>I'm currently a trainee at NeoTerra IT Solution, developing my skills towards a CyberOps Associate role.</p>
            <div className="profile-facts">
              <div><span>NAME</span><strong>Muzi Mbuyane</strong></div>
              <div><span>LOCATION</span><strong>Mpumalanga, South Africa</strong></div>
              <div><span>EDUCATION</span><strong>Bachelor of ICT</strong></div>
              <div><span>FOCUS</span><strong>Software & Cybersecurity</strong></div>
            </div>
            <a className="text-button" href="mailto:frankmuzim@gmail.com">Let's connect <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="skills-area">
          <div className="skills-heading"><div><span className="small-green">MY TOOLKIT</span><h3>Technical Skills</h3></div><p>Technologies and areas I have worked with or am actively developing.</p></div>
          <div className="skill-groups">
            {skillGroups.map(group => <div className="skill-group" key={group.title}><h4>{group.title}</h4><div>{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="page-container">
          <SectionTitle kicker="WHAT I CAN BRING" title="My Services" subtitle="Areas where I can apply my skills and continue growing." />
          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }, i) => <article className="service-card" key={title}>
              <div className="service-top"><span>0{i + 1}</span><Icon size={27} /></div>
              <h3>{title}</h3><p>{text}</p><a href="#contact">Learn more <ArrowUpRight size={14} /></a>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section page-container" id="projects">
        <SectionTitle kicker="SOME OF MY RECENT WORK" title="My Projects" subtitle="A selection of personal and academic projects." />
        <div className="projects-grid">
          {projects.map((project, i) => <article className="project-card" key={project.title}>
            <a className="project-image" href={project.link} target="_blank" rel="noreferrer">
              <img src={project.image} alt="" loading="lazy" /><span className="project-count">0{i + 1}</span><span className="project-open"><ExternalLink size={18} /></span>
            </a>
            <div className="project-info"><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tech-list">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div><a className="project-source" href={project.link} target="_blank" rel="noreferrer">VIEW SOURCE CODE <ArrowUpRight size={14} /></a></div>
          </article>)}
        </div>
        <div className="center-link"><a className="btn btn-outline" href="https://github.com/Frank-Muzi" target="_blank" rel="noreferrer">View GitHub Profile <Github size={16} /></a></div>
      </section>

      <section className="section certifications-section" id="certifications">
        <div className="page-container">
          <SectionTitle kicker="LEARNING & DEVELOPMENT" title="Certifications" subtitle="Courses and learning milestones that contribute to my development." />
          <div className="cert-grid">
            {certifications.map(cert => <article className="cert-card" key={cert.title}><div className="cert-icon"><Award size={25} /></div><div><span>{cert.year}</span><h3>{cert.title}</h3><p>{cert.issuer} · {cert.detail}</p></div><ShieldCheck className="cert-check" size={20} /></article>)}
            <article className="cert-card cert-placeholder"><div className="cert-icon"><GraduationCap size={25} /></div><div><span>ONGOING DEVELOPMENT</span><h3>CyberOps Associate Training</h3><p>NeoTerra IT Solution · Cybersecurity operations training</p></div><ShieldCheck className="cert-check" size={20} /></article>
          </div>
        </div>
      </section>

      <section className="section page-container contact-section" id="contact">
        <SectionTitle kicker="LET'S WORK TOGETHER" title="Get In Touch" subtitle="Have an opportunity, project or idea? I'd be happy to hear from you." />
        <div className="contact-layout">
          <div className="contact-details">
            <h3>Let's create<br /><em>something useful.</em></h3>
            <p>I'm open to opportunities in software development, cybersecurity, internships and graduate programmes.</p>
            <a href="mailto:frankmuzim@gmail.com"><span><Mail /></span><div><small>EMAIL ME</small><strong>frankmuzim@gmail.com</strong></div></a>
            <div><span><MapPin /></span><div><small>LOCATION</small><strong>Mpumalanga, South Africa</strong></div></div>
            <a href="https://github.com/Frank-Muzi" target="_blank" rel="noreferrer"><span><Github /></span><div><small>GITHUB</small><strong>github.com/Frank-Muzi</strong></div></a>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row"><label>Full Name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label><label>Email Address<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label></div>
            <label>Subject<input required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="What is this about?" /></label>
            <label>Your Message<textarea required rows="5" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Write your message..." /></label>
            <button className="btn btn-primary" type="submit">Send Message <Send size={15} /></button>
            {notice && <p className="form-notice">{notice}</p>}
            <p className="form-hint">This form opens your default email application; it does not send data to a server.</p>
          </form>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="page-container footer-inner">
        <div><a href="#home" className="logo">Muzi Mbuyane<span>.</span></a><p>Software Developer & Cybersecurity Enthusiast creating practical digital solutions.</p></div>
        <div className="footer-links"><strong>QUICK LINKS</strong>{nav.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
        <div className="footer-links"><strong>CONNECT</strong><a href="mailto:frankmuzim@gmail.com">Email</a><a href="https://github.com/Frank-Muzi" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></div>
      </div>
      <div className="page-container copyright"><span>© {new Date().getFullYear()} Muzi Mbuyane. All rights reserved.</span><a href="#home">BACK TO TOP ↑</a></div>
    </footer>
  </div>
}