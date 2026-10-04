import { createFileRoute } from "@tanstack/react-router";
import {
  Atom,
  Braces,
  ChartNoAxesCombined,
  Coffee,
  Code2,
  Database,
  GitBranch,
  Github,
  Layers3,
  PanelsTopLeft,
  Route as RouteIcon,
  Send,
  Server,
  Smartphone,
  Terminal as TerminalIcon,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const TITLE = "Rajat Pratap | Backend & Data Engineer";
const DESCRIPTION =
  "Backend and data engineer building scalable APIs, ETL pipelines, and analytics systems with PySpark, SQL, Python, and modern web technologies.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Languages", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const experience = [
  {
    period: "2026 — present",
    role: "Big Data Developer",
    org: "Infosys · Pune",
    delay: "rise [animation-delay:120ms]",
    points: [
      "Completed the Big Data stream training across Unix, MySQL/PL-SQL, Python, PySpark and Power BI.",
      "Built a multi-technology hospital data pipeline spanning stored procedures, Spark transforms and BI dashboards.",
      "Drafted agile user stories and worked through sprint-style backlog tasks for a data engineering project.",
    ],
  },
  {
    period: "2025 · jan – jun",
    role: "MERN Trainee",
    org: "Programming Pathsala · Noida Sec 62",
    delay: "rise [animation-delay:200ms]",
    points: [
      "Designed and implemented secured REST APIs as part of a full-stack development team.",
      "Deployed new features end-to-end with Node, Express and MongoDB.",
      "Participated in agile sprint sessions to accelerate learning and collaborate on real-world problems.",
    ],
  },
];

const projects = [
  {
    year: "2025 · jun",
    title: "TrueBuy",
    tagline:
      "Built a secure e-commerce backend with MVC architecture, JWT authentication, OTP login, shopping cart APIs, and product discovery flows for a smoother digital retail experience.",
    stack: "javascript · react · node · mongodb",
    delay: "rise [animation-delay:120ms]",
    links: [
      { label: "live site ↗", href: "https://react-mini-project-ecom-website.vercel.app/" },
      {
        label: "github repo ↗",
        href: "https://github.com/007babayaga/React-Mini-Project-_Ecom_Website",
      },
    ],
    chips: ["JWT auth", "OTP login", "search & filtering", "cart APIs"],
    stats: [
      { value: "12+", label: "API endpoints" },
      { value: "2", label: "auth flows" },
      { value: "MVC", label: "architecture" },
    ],
  },
  {
    year: "2026",
    title: "Hospital Data Pipeline",
    tagline:
      "Designed an end-to-end healthcare data workflow using MySQL, Python preprocessing, and PySpark transformations to support analytics dashboards and faster operational decision-making.",
    stack: "pyspark · mysql · power bi",
    delay: "rise [animation-delay:200ms]",
    chips: ["PySpark", "stored procs", "DAX", "Power Query"],
    stats: [
      { value: "4", label: "pipeline stages" },
      { value: "RDD", label: "+ DataFrame" },
      { value: "DAX", label: "dashboards" },
    ],
  },
];

const skillGroups = [
  {
    label: "languages",
    delay: "rise [animation-delay:120ms]",
    items: ["Java", "C", "Python", "JavaScript", "SQL / PL-SQL", "NoSQL"],
  },
  {
    label: "data & pipelines",
    delay: "rise [animation-delay:200ms]",
    items: ["PySpark", "MySQL", "Power BI", "DAX", "ETL", "Unix Shell"],
  },
  {
    label: "backend",
    delay: "rise [animation-delay:280ms]",
    items: ["Node.js", "Express", "MongoDB", "React", "Redux", "REST"],
  },
  {
    label: "tooling",
    delay: "rise [animation-delay:360ms]",
    items: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA", "Android Studio"],
  },
];

const skillIcons: Record<string, LucideIcon> = {
  Java: Coffee,
  C: Code2,
  Python: Braces,
  JavaScript: Code2,
  "SQL / PL-SQL": Database,
  NoSQL: Database,
  PySpark: Workflow,
  MySQL: Database,
  "Power BI": ChartNoAxesCombined,
  DAX: ChartNoAxesCombined,
  ETL: GitBranch,
  "Unix Shell": TerminalIcon,
  "Node.js": Server,
  Express: RouteIcon,
  MongoDB: Database,
  React: Atom,
  Redux: Layers3,
  REST: RouteIcon,
  Git: GitBranch,
  GitHub: Github,
  Postman: Send,
  "VS Code": PanelsTopLeft,
  "IntelliJ IDEA": Code2,
  "Android Studio": Smartphone,
};

const coursework = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "DBMS",
  "OOPs",
  "Network Security",
  "Web Development",
];

const certifications = [
  { label: "ReactJS — Udemy", href: null },
  { label: "Java — Udemy", href: null },
  {
    label: "Soft Skills & Personality — NPTEL",
    href: "https://archive.nptel.ac.in/content/noc/NOC22/SEM1/Ecertificates/109/noc22-hs08/Course/NPTEL22HS08S3340097502162196.jpg",
  },
  {
    label: "Industrial Automation Specialist",
    href: "https://admin.skillindiadigital.gov.in/documentverificationbyQR?content=P0NhbmRpZGF0ZSBOYW1lID0gUmFqYXQgcHJhdGFwJiZDYW5kaWRhdGUgSUQgPSBDQU5fMjU5MDEwNjQmJlNlY3RvciBOYW1lID0gSW5zdHJ1bWVudGF0aW9uJiZRUCBOYW1lID0gSW5kdXN0cmlhbCBBdXRvbWF0aW9uIFNwZWNpYWxpc3QmJlFQIENvZGUgPSBJQVMvUTgwMDUmJkdyYWRlID0gQiYmQ2FuZGlkYXRlL0FwcGxpY2FudCB0eXBlID0gQ2FuZGlkYXRlJiZEb2N1bWVudCBJRCA9IDNMQlkwMTFWTEMxRVZWTEsmJkRvY3VtZW50ID0gY2VydGlmaWNhdGUmJklzc3VhbmNlIERhdGUgPSAwNC8wMS8yMDI0",
  },
];

const contact = [
  { label: "email", value: "chauhanrajat515@gmail.com", href: "mailto:chauhanrajat515@gmail.com" },
  { label: "phone", value: "+91-9719534452", href: "tel:+919719534452" },
  { label: "github", value: "github.com/007babayaga", href: "https://github.com/007babayaga" },
  {
    label: "linkedin",
    value: "in/rajat-pratap-494736220",
    href: "https://www.linkedin.com/in/rajat-pratap-494736220/",
  },
  { label: "leetcode", value: "leetcode.com/u/rajarpratap_00", href: "https://leetcode.com/u/rajarpratap_00/" },
  { label: "resume", value: "download pdf", href: "/rajat-pratap-resume.pdf" },
];

function SkillChip({ label }: { label: string }) {
  const Icon = skillIcons[label] ?? Code2;

  return (
    <span className="stack-chip group inline-flex items-center gap-2 border border-border bg-secondary/60 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-foreground/80">
      <Icon
        aria-hidden="true"
        className="size-3.5 shrink-0 text-primary/80 transition-transform duration-200 group-hover:scale-110"
        strokeWidth={1.8}
      />
      {label}
    </span>
  );
}

function SectionHeading({ n, label }: { n: string; label: string }) {
  return (
    <div className="rise flex items-center gap-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
        {n}.
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </span>
      <span className="h-px flex-1 bg-border"></span>
    </div>
  );
}

function Terminal() {
  return (
    <div className="rise overflow-hidden rounded-lg border border-border bg-surface shadow-2xl shadow-black/60 [animation-delay:220ms]">
      <div className="flex items-center justify-between border-b border-border bg-secondary/60 px-4 py-2.5">
        <div className="flex space-x-1.5">
          <span className="size-2.5 rounded-full bg-destructive/25 ring-1 ring-destructive/40"></span>
          <span className="size-2.5 rounded-full bg-primary/25 ring-1 ring-primary/40"></span>
          <span className="size-2.5 rounded-full bg-primary/25 ring-1 ring-primary/40"></span>
        </div>
        <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
          pipeline.sh — bash
        </span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-relaxed">
        <div className="boot-line [animation-delay:120ms]">
          <span className="text-primary">$</span>{" "}
          <span className="text-foreground/90">run pipeline --env prod</span>
        </div>
        <div className="boot-line mt-1.5 text-muted-foreground [animation-delay:300ms]">
          → ingest events ......... <span className="text-primary">ok</span>
        </div>
        <div className="boot-line text-muted-foreground [animation-delay:480ms]">
          → transform (pyspark) ... <span className="text-primary">ok</span>
        </div>
        <div className="boot-line text-muted-foreground [animation-delay:660ms]">
          → load warehouse ........ <span className="text-primary">ok</span>
        </div>
        <div className="boot-line text-muted-foreground [animation-delay:840ms]">
          → dashboards ............ <span className="text-primary">ok</span>
        </div>
        <div className="boot-line mt-2 text-muted-foreground [animation-delay:1020ms]">
          → coffee.service ......... <span className="text-primary">essential</span>
        </div>
        <div className="boot-line mt-3 text-muted-foreground [animation-delay:1200ms]">
          $ select count(*) from facts;
        </div>
        <div className="boot-line text-foreground/90 [animation-delay:1380ms]">
          {"  "}4,218,006 rows · <span className="text-primary">0.42s</span>
        </div>
        <div className="boot-line mt-4 flex items-center gap-2 text-primary [animation-delay:1560ms]">
          rajat@dev:~$ <span className="blink inline-block h-4 w-2 bg-primary"></span>
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-sans text-foreground antialiased selection:bg-primary/30">
      {/* Engineering grid backdrop */}
      <div
        className="tech-grid pointer-events-none fixed inset-0 opacity-[0.03]"
        aria-hidden="true"
      ></div>

      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="flex min-h-16 items-center gap-4">
            <a href="#top" className="flex shrink-0 items-center gap-3" aria-label="Rajat Pratap, home">
              <span className="flex size-8 rotate-45 items-center justify-center bg-primary shadow-[0_0_18px_rgba(245,158,11,0.18)]">
                <span className="-rotate-45 font-mono text-[10px] font-black leading-none tracking-[-0.12em] text-primary-foreground">
                  RP
                </span>
              </span>
              <span className="hidden font-mono text-xs tracking-[0.16em] text-foreground/80 sm:inline">
                RAJAT PRATAP
              </span>
            </a>
            <nav
              aria-label="Main navigation"
              className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto py-4 md:justify-center"
            >
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="shrink-0 px-2 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none sm:px-3 sm:text-[11px]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <span className="hidden shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground xl:flex">
              <span className="size-1.5 animate-pulse rounded-full bg-primary"></span>
              Open to work
            </span>
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8">
        <main className="min-w-0 py-12">
          {/* Hero */}
          <section id="top" className="space-y-8">
            <div className="rise inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 font-mono text-xs text-primary [animation-delay:80ms]">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
              </span>
              <span>OPEN FOR BACKEND / DATA ENGINEERING ROLES</span>
            </div>

            <div className="space-y-3">
              <h1 className="rise text-6xl font-bold tracking-tighter text-white [animation-delay:160ms] sm:text-7xl lg:text-[5.8rem] lg:leading-[0.92]">
                RAJAT <span className="accent-gradient">PRATAP</span>
              </h1>
              <p className="rise max-w-2xl text-xl font-light text-muted-foreground [animation-delay:240ms] sm:text-2xl lg:text-[1.7rem] lg:leading-relaxed">
                I build secure backend systems, resilient data pipelines, and decision-ready
                analytics workflows that turn raw information into reliable products and smarter decisions.
              </p>
            </div>

            <div className="rise flex flex-wrap gap-4 pt-2 [animation-delay:320ms]">
              <a
                href="#contact"
                className="group flex items-center gap-2 bg-primary px-6 py-3 font-mono text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/85"
              >
                GET_IN_TOUCH
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="border border-border px-6 py-3 font-mono text-sm text-foreground/80 transition-colors hover:border-primary/50 hover:text-primary"
              >
                DOWNLOAD_RESUME.PDF
              </a>
            </div>

            <div className="max-w-3xl pt-4">
              <Terminal />
            </div>
          </section>

          <section id="about" className="mt-16 scroll-mt-32 border border-border bg-card/60 p-6 sm:p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              about
            </div>
            <div className="mt-4 grid gap-5 md:grid-cols-3">
              <p className="text-base text-foreground/80 md:col-span-2">
                I’m a backend and data engineer focused on building reliable systems,
                clean APIs, and data workflows that create real operational value. I enjoy
                solving problems at the intersection of engineering and analytics — turning
                messy inputs into dependable outputs and actionable insights.
              </p>
              <div className="flex flex-col gap-3 border-l border-border pl-4 text-sm text-muted-foreground">
                <span>Backend engineering</span>
                <span>ETL &amp; data pipelines</span>
                <span>Analytics &amp; dashboards</span>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="border border-border bg-secondary/30 p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  value
                </div>
                <p className="mt-3 text-sm text-foreground/80">
                  I build systems that are practical, secure, and ready for real-world use.
                </p>
              </div>
              <div className="border border-border bg-secondary/30 p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  approach
                </div>
                <p className="mt-3 text-sm text-foreground/80">
                  I combine backend thinking with data-aware design to improve flow and clarity.
                </p>
              </div>
              <div className="border border-border bg-secondary/30 p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  impact
                </div>
                <p className="mt-3 text-sm text-foreground/80">
                  I aim to turn complex systems into dependable products and sharper decisions.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "API design",
                "ETL automation",
                "SQL + PySpark",
                "Power BI reporting",
                "Secure backend systems",
                "Data-driven product thinking",
              ].map((item) => (
                <span
                  key={item}
                  className="border border-primary/20 bg-primary/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="mt-28 scroll-mt-28">
            <SectionHeading n="02" label="experience" />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {experience.map((job) => (
                <div
                  key={job.role}
                  className={`${job.delay} group border border-border bg-card p-8 transition-colors duration-200 hover:border-primary/50`}
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                      {job.period}
                    </span>
                    <span className="flex size-10 items-center justify-center border border-border bg-secondary/60 font-mono text-xs font-bold text-foreground/70">
                      {job.role.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white">{job.role}</h3>
                  <div className="mt-1 font-mono text-sm text-primary/90">{job.org}</div>
                  <ul className="mt-5 space-y-2 text-sm text-pretty text-foreground/70">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span className="mt-[7px] size-1 shrink-0 bg-primary/60"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="mt-28 scroll-mt-28">
            <SectionHeading n="03" label="projects" />
            <div className="mt-8 grid gap-6">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className={`${project.delay} border border-border bg-card p-6 transition-colors duration-200 hover:border-primary/50 sm:p-8`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                        {project.year}
                      </div>
                      <h3 className="mt-1.5 text-2xl font-bold tracking-tight text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 max-w-[52ch] text-sm text-pretty text-foreground/70">
                        {project.tagline}
                      </p>
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">
                      {project.stack}
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.chips.map((chip) => (
                      <span
                        key={chip}
                        className="border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[10px] text-foreground/75"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  {project.links && (
                    <div className="mt-4 flex flex-wrap gap-4 font-mono text-xs">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-muted-foreground transition-colors duration-150 hover:text-primary"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                  <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-5 font-mono text-xs">
                    {project.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-base font-bold text-white">{stat.value}</div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Skills + Education */}
          <section id="skills" className="mt-28 scroll-mt-28 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading n="04" label="stack" />
              <div className="mt-8 space-y-6">
                {skillGroups.map((group) => (
                  <div key={group.label} className={group.delay}>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                      {group.label}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <SkillChip key={item} label={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="education" className="lg:col-span-5">
              <SectionHeading n="05" label="history" />
              <div className="mt-8 space-y-6">
                <div className="rise border border-border bg-card p-6 [animation-delay:160ms]">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                    2021 — 2025
                  </div>
                  <div className="mt-2 text-lg font-bold tracking-tight text-white">
                    B.Tech, CSE
                  </div>
                  <div className="font-mono text-sm text-primary/90">
                    Ajay Kumar Garg Engg. College
                  </div>
                  <div className="mt-2 font-mono text-xs text-muted-foreground">
                    CGPA 7.86 / 10
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {coursework.map((course) => (
                      <span
                        key={course}
                        className="border border-border px-2 py-0.5 font-mono text-[10px] text-foreground/60"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rise border border-border bg-card p-6 [animation-delay:240ms]">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                    certifications
                  </div>
                  <ul className="mt-3 space-y-2 font-mono text-xs text-foreground/75">
                    {certifications.map((cert) => (
                      <li key={cert.label} className="flex gap-2.5">
                        <span className="mt-[6px] size-1 shrink-0 bg-primary/60"></span>
                        {cert.href ? (
                          <a
                            href={cert.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="underline-offset-2 transition-colors duration-150 hover:text-primary hover:underline"
                          >
                            {cert.label}
                          </a>
                        ) : (
                          cert.label
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="mt-28 scroll-mt-28">
            <SectionHeading n="06" label="contact" />
            <div className="rise mt-8 border border-border bg-card p-6 [animation-delay:120ms] sm:p-10">
              <h2 className="text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl lg:text-[2.7rem] lg:leading-tight">
                I’m open to backend and data engineering opportunities — let’s build systems that <span className="accent-gradient">scale</span> and deliver impact.
              </h2>
              <div className="mt-8 grid gap-3 font-mono text-sm sm:grid-cols-2">
                {contact.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-3 border border-border bg-secondary/40 px-4 py-3.5 transition-colors duration-150 hover:border-primary/50"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="ml-auto break-all text-foreground/85 transition-colors duration-150 group-hover:text-primary">
                      {item.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-muted-foreground/60">
              <span>© 2026 rajat pratap</span>
              <span>backend engineer · data pipeline builder · available for impactful work</span>
            </div>
          </section>
        </main>
      </div>

      {/* Coordinate indicators */}
      <div
        className="pointer-events-none fixed bottom-8 right-8 hidden space-y-1 text-right font-mono text-[10px] text-muted-foreground/40 lg:block"
        aria-hidden="true"
      >
        <div>LAT: 28.67 N · LON: 77.43 E</div>
        <div className="text-primary/40">STATUS: OPEN TO WORK</div>
      </div>
    </div>
  );
}
