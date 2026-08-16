import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, Code2, Cloud,
  Database, ShieldCheck, Sparkles, ExternalLink, Menu, X, Terminal,
  Layers3, Zap, Users, Award, ChevronRight
} from "lucide-react";
import "./styles.css";

const resumeUrl = "/Resume.pdf";

const skills = {
  Backend: ["Java 8/17/21", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "REST APIs", "Microservices", "Spring Cloud", "API Gateway", "System Design"],
  Frontend: ["ReactJS", "TypeScript", "JavaScript ES6+", "Vite", "React Hooks", "Context API", "TanStack Query", "Tailwind CSS", "Material UI", "Custom NPM"],
  "Cloud & DevOps": ["AWS EC2", "AWS Lambda", "AWS S3", "CloudWatch", "Jenkins", "Maven", "CI/CD", "Docker"],
  Data: ["MySQL", "MongoDB", "Redis"],
  "Security & Testing": ["JWT", "OAuth2", "SonarQube", "Burp Suite", "OWASP ZAP", "Sentry", "JUnit", "API Testing", "Playwright MCP"],
  "AI Tooling": ["Claude Code", "Playwright MCP", "GitHub Copilot", "Gemini", "Agentic Coding"]
};

const experience = [
  {
    period: "Apr 2025 — Present",
    role: "Application Development Manager",
    company: "Think Talent Services Pvt Ltd",
    bullets: [
      "Led full-stack development of 3+ enterprise products using Java 21, Spring Boot, ReactJS and MySQL across a team of 8+ engineers.",
      "Managed sprint planning, production releases and cross-functional delivery across concurrent projects.",
      "Improved API response time by 35%, reducing average latency from ~800ms to ~520ms across 10+ high-traffic endpoints.",
      "Drove scalable microservices architecture and secure coding practices across enterprise platforms.",
      "Used Claude Code as an autonomous coding agent for Spring Boot services, React components and production debugging."
    ]
  },
  {
    period: "Apr 2020 — Mar 2025",
    role: "Senior Software Engineer",
    company: "Think Talent Services Pvt Ltd",
    bullets: [
      "Architected and delivered 40+ RESTful APIs serving 5,000+ users across multi-tenant enterprise clients.",
      "Designed OAuth2-based RBAC authentication supporting 10+ client organizations.",
      "Improved application throughput by 40% through database and backend optimization.",
      "Remediated 15+ critical/high VAPT findings using OWASP ZAP and Burp Suite.",
      "Implemented Hibernate caching and transaction management strategies across microservices."
    ]
  },
  {
    period: "Oct 2018 — Mar 2020",
    role: "Software Engineer",
    company: "Think Talent Services Pvt Ltd",
    bullets: [
      "Built 15+ backend modules and ReactJS UI components for an LMS serving 1,000+ learners.",
      "Integrated 10+ third-party APIs and supported 4 major production deployments with zero rollbacks.",
      "Resolved 50+ defects and feature requests within SLA, contributing to 95%+ on-time delivery."
    ]
  },
  {
    period: "Apr 2018 — Sep 2018",
    role: "Software Engineer Intern",
    company: "Think Talent Services Pvt Ltd",
    bullets: [
      "Assisted with application development, API testing and database management.",
      "Contributed to 3 production feature modules using Java, Spring Boot, MySQL and ReactJS."
    ]
  }
];

const projects = [
  {
    title: "LMS 3.0",
    type: "Learning Management System",
    icon: Layers3,
    description: "Scalable enterprise LMS with user management, client onboarding, course tracking and RBAC.",
    impact: ["5,000+ concurrent users", "10+ client tenants", "45% faster report generation"],
    stack: ["Java 21", "Spring Boot", "React", "MySQL", "OAuth2", "AWS"],
    details: "Implemented secure authentication, optimized reporting workflows and built interactive React dashboards with real-time course tracking and progress analytics."
  },
  {
    title: "CONNECT",
    type: "Enterprise Engagement Platform",
    icon: Users,
    description: "Unified platform integrating learning, assessment, feedback, activity tracking and collaboration workflows.",
    impact: ["20+ REST APIs", "2,000+ active users", "3 integrated modules"],
    stack: ["Spring Boot", "Microservices", "React", "MySQL", "REST"],
    details: "Designed scalable service architecture and relational data models while supporting production operations across integrated platform modules."
  },
  {
    title: "SYSTEM OWNER",
    type: "Centralized Admin Platform",
    icon: ShieldCheck,
    description: "Centralized administration platform for clients, users and dynamic access permissions.",
    impact: ["50+ admin roles", "10,000+ user records", "Sub-100ms queries"],
    stack: ["Java", "Spring Boot", "React", "RBAC", "MySQL"],
    details: "Implemented RBAC-based provisioning workflows and backend APIs for multi-client administration."
  },
  {
    title: "CMS",
    type: "Certificate Management System",
    icon: Award,
    description: "Automated certificate generation, verification and LinkedIn credential sharing.",
    impact: ["90% less manual effort", "500+ certificates/month", "Secure verification"],
    stack: ["Spring Boot", "React", "MySQL", "LinkedIn"],
    details: "Built a dynamic certificate template engine and secure validation workflow for automated certificate issuance."
  }
];

const stats = [
  ["8+", "Years Experience", Code2],
  ["40+", "REST APIs", Terminal],
  ["5K+", "Users Served", Users],
  ["35%", "API Latency Reduced", Zap]
];

function App() {
  const [open, setOpen] = React.useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="app">
      <div className="grid-bg" />
      <header className="nav">
        <button className="brand" onClick={() => scrollTo("home")}>
          <span className="brand-mark">&lt;/&gt;</span>
          <span>Prasanta<span className="accent">.</span></span>
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {["about", "skills", "experience", "projects", "contact"].map((x) =>
            <button key={x} onClick={() => scrollTo(x)}>{x}</button>
          )}
        </nav>
        <div className="nav-actions">
          <a href="https://github.com/helloprasantakumar" target="_blank" rel="noreferrer"><Github size={19}/></a>
          <a href="https://www.linkedin.com/in/prasantakumarparida" target="_blank" rel="noreferrer"><Linkedin size={19}/></a>
          <a className="resume-mini" href={resumeUrl} target="_blank" rel="noreferrer">Resume <ArrowUpRight size={15}/></a>
        </div>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
      </header>

      <main>
        <section id="home" className="hero container">
          <motion.div className="hero-copy" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.65}}>
            <div className="eyebrow"><span className="pulse"/> AVAILABLE FOR FULL-STACK OPPORTUNITIES</div>
            <h1>Building scalable software<br/>with <span className="gradient">Java + React.</span></h1>
            <p className="hero-text">
              Full Stack Java Developer with 8+ years of experience building enterprise applications,
              microservices, secure APIs and modern React interfaces — now combining engineering with AI-assisted development.
            </p>
            <div className="hero-buttons">
              <button className="primary" onClick={() => scrollTo("projects")}>Explore my work <ArrowUpRight size={18}/></button>
              <a className="secondary" href="mailto:prasantaparida2@gmail.com">Let's connect <Mail size={17}/></a>
            </div>
            <div className="code-line"><span className="dim">~/portfolio</span> <span className="green">$</span> whoami <span className="accent">→ full-stack-engineer</span></div>
          </motion.div>

          <motion.div className="hero-terminal" initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} transition={{duration:.7,delay:.15}}>
            <div className="terminal-top"><span/><span/><span/><b>developer.json</b></div>
            <pre>{`{
  "name": "Prasanta Kumar Parida",
  "role": "Full Stack Java Developer",
  "experience": "8+ years",
  "backend": ["Java", "Spring Boot"],
  "frontend": ["React", "TypeScript"],
  "cloud": ["AWS", "Docker", "Jenkins"],
  "architecture": ["Microservices", "REST"],
  "security": ["OAuth2", "JWT", "RBAC"],
  "ai": ["Claude Code", "Playwright MCP"]
}`}</pre>
          </motion.div>
        </section>

        <section className="stats container">
          {stats.map(([value,label,Icon]) => <div className="stat" key={label}><Icon size={19}/><strong>{value}</strong><span>{label}</span></div>)}
        </section>

        <section id="about" className="section container">
          <SectionTitle number="01" title="About me" kicker="ENGINEERING + LEADERSHIP"/>
          <div className="about-grid">
            <div>
              <h2>I turn complex requirements into <span className="gradient">production-ready products.</span></h2>
            </div>
            <div className="about-text">
              <p>Results-driven Full Stack Java Developer experienced in scalable enterprise applications using Java, Spring Boot, ReactJS, MySQL and AWS.</p>
              <p>My work spans microservices, REST APIs, cloud deployment, RBAC systems, CI/CD and secure coding. I also actively use agentic AI tooling to accelerate development and UI automation.</p>
              <div className="quick-tags"><span>Enterprise</span><span>Microservices</span><span>Cloud</span><span>Security</span><span>AI-assisted development</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section container">
          <SectionTitle number="02" title="Tech stack" kicker="TOOLS I BUILD WITH"/>
          <div className="skill-grid">
            {Object.entries(skills).map(([group,items]) => <div className="skill-card" key={group}>
              <h3>{group}</h3><div className="chips">{items.map(x => <span key={x}>{x}</span>)}</div>
            </div>)}
          </div>
        </section>

        <section id="experience" className="section container">
          <SectionTitle number="03" title="Experience" kicker="MY ENGINEERING JOURNEY"/>
          <div className="timeline">
            {experience.map((job,i) => <motion.article className="job" key={job.role} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}>
              <div className="job-date">{job.period}</div>
              <div className="job-marker"><span/></div>
              <div className="job-body">
                <h3>{job.role}</h3><div className="company">{job.company}</div>
                <ul>{job.bullets.map(b => <li key={b}>{b}</li>)}</ul>
              </div>
            </motion.article>)}
          </div>
        </section>

        <section id="projects" className="section container">
          <SectionTitle number="04" title="Featured projects" kicker="SELECTED ENGINEERING WORK"/>
          <div className="project-grid">
            {projects.map((p,i) => { const Icon=p.icon; return <motion.article className="project" key={p.title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}>
              <div className="project-icon"><Icon size={22}/></div>
              <div className="project-top"><span>0{i+1}</span><ExternalLink size={17}/></div>
              <h3>{p.title}</h3><div className="project-type">{p.type}</div>
              <p>{p.description}</p>
              <div className="impact">{p.impact.map(x => <span key={x}>{x}</span>)}</div>
              <p className="details">{p.details}</p>
              <div className="chips">{p.stack.map(x => <span key={x}>{x}</span>)}</div>
            </motion.article>})}
          </div>
        </section>

        <section className="section impact-section container">
          <SectionTitle number="05" title="Engineering impact" kicker="MEASURABLE OUTCOMES"/>
          <div className="impact-grid">
            {[
              ["35%", "API latency reduction", "Optimized MySQL queries and JPA across high-traffic endpoints."],
              ["40%", "Throughput improvement", "Optimized critical database queries and backend services."],
              ["90%", "Less certificate effort", "Automated certificate generation for 500+ certificates/month."],
              ["15+", "Security findings remediated", "Resolved critical/high VAPT findings with OWASP tooling."]
            ].map(([v,t,d]) => <div className="impact-card" key={t}><strong>{v}</strong><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </section>

        <section className="ai-band">
          <div className="container ai-content">
            <div className="ai-icon"><Sparkles/></div>
            <div><div className="eyebrow">06 · AI + ENGINEERING</div><h2>Building faster with <span className="gradient">agentic AI.</span></h2><p>Using Claude Code, Playwright MCP, GitHub Copilot and Gemini to accelerate multi-step coding, scaffolding, debugging and UI automation.</p></div>
            <div className="ai-tools">{["Claude Code","Playwright MCP","GitHub Copilot","Gemini"].map(x=><span key={x}>{x}</span>)}</div>
          </div>
        </section>

        <section id="contact" className="section container contact">
          <div className="contact-box">
            <div className="eyebrow">07 · LET'S CONNECT</div>
            <h2>Have a product to build?<br/><span className="gradient">Let's talk.</span></h2>
            <p>Open to full-stack engineering and leadership opportunities where scalable systems, great UX and strong engineering practices matter.</p>
            <div className="contact-links">
              <a href="mailto:prasantaparida2@gmail.com"><Mail size={17}/> prasantaparida2@gmail.com</a>
              <a href="https://www.linkedin.com/in/prasantakumarparida" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
              <a href="https://github.com/helloprasantakumar" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer><div className="container footer-inner"><span>© {new Date().getFullYear()} Prasanta Kumar Parida</span><span>Built with React · Vite · Framer Motion</span></div></footer>
    </div>
  );
}

function SectionTitle({number,title,kicker}) {
  return <div className="section-title"><div><span className="section-number">{number}</span><span className="kicker">{kicker}</span></div><h2>{title}</h2></div>
}

createRoot(document.getElementById("root")).render(<App />);