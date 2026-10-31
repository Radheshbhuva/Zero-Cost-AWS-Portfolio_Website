import {
  FiAward,
  FiBookOpen,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiGlobe,
  FiLayers,
  FiServer,
  FiTool,
} from 'react-icons/fi';
import type {
  ArchitectureHighlight,
  ContactInfo,
  EducationItem,
  NavItem,
  ProjectItem,
  SkillCategory,
  TimelineItem,
} from '../types/portfolio';

export const profile = {
  name: 'Radhesh Bhuva',
  initials: 'RB',
  title: 'Full-Stack Developer & AWS Cloud Engineer',
  tagline: 'Computer Engineering Undergraduate crafting modular full-stack web applications and resilient cloud infrastructure.',
  location: 'Surat, Gujarat, India',
  availability: 'Actively seeking Software Engineering, Full-Stack Development, Backend, and AWS Cloud Engineering internships (2025–2028).',
  introduction:
    'Computer Engineering undergraduate at Marwadi University with practical project experience in full-stack web development, backend API architecture, and AWS cloud infrastructure. Focused on building production-ready software: from modular React and TypeScript frontends to scalable Node.js/Express backends, containerized using Docker, and deployed via cost-effective cloud architectures.',
};

export const contact: ContactInfo = {
  email: 'radheshbhuva1@gmail.com',
  phone: '+91 82006 72913',
  location: 'Surat, Gujarat, India',
  githubUrl: 'https://github.com/RadheshBhuva',
  linkedinUrl: 'https://www.linkedin.com/in/radhesh-bhuva-8aa893319',
  linkedinLabel: 'radhesh-bhuva-8aa893319',
};

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { label: 'Education', value: 'B.Tech Computer Eng.', detail: 'Marwadi University', icon: FiCpu },
  { label: 'Academic Standing', value: 'CGPA 7.35 / 10', detail: 'Consistent Growth', icon: FiAward },
  { label: 'Target Roles', value: 'Full-Stack & Cloud', detail: 'Internships & Entry Roles', icon: FiLayers },
  { label: 'Graduation', value: 'May 2028', detail: 'Class of 2028', icon: FiBookOpen },
];

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Technology (B.Tech) in Computer Engineering',
    institution: 'Marwadi University, Rajkot, Gujarat',
    result: 'CGPA: 7.35 / 10.0',
    period: '2024 – 2028 (Expected)',
    detail:
      'Pursuing an engineering degree with a focus on core software engineering principles, algorithmic problem solving, system architecture, database design, and cloud infrastructure.',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (C++, Java)',
      'Database Management Systems (MySQL, PostgreSQL)',
      'Computer Networks & Protocols',
      'Operating Systems & System Calls',
      'Software Engineering & System Design',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages utilized for software development, systems logic, and web engineering.',
    icon: FiCode,
    skills: ['C', 'C++', 'Java', 'JavaScript (ES6+)', 'TypeScript'],
  },
  {
    title: 'Frontend Development',
    description: 'Modern, component-driven client architecture with responsive UX and type safety.',
    icon: FiGlobe,
    skills: ['HTML5', 'CSS3', 'React.js (v18+)', 'Tailwind CSS', 'Vite', 'React Router DOM'],
  },
  {
    title: 'Backend Development',
    description: 'RESTful API architecture, routing, middleware pipelines, and server runtime environments.',
    icon: FiServer,
    skills: ['Node.js', 'Express.js', 'REST API Development', 'NestJS'],
    note: 'NestJS: Project Exposure',
  },
  {
    title: 'Database Management',
    description: 'Relational and document database design, schema modeling, and ORM/ODM integration.',
    icon: FiDatabase,
    skills: ['MySQL', 'MongoDB', 'Mongoose ODM', 'PostgreSQL', 'Prisma ORM'],
    note: 'PostgreSQL: Project Exposure',
  },
  {
    title: 'Cloud Computing – AWS',
    description: 'Hands-on AWS services for static hosting, virtual compute, DNS, and IAM access policies.',
    icon: FiCloud,
    skills: ['Amazon S3', 'Amazon EC2', 'Amazon CloudFront', 'Amazon Route 53', 'AWS IAM'],
  },
  {
    title: 'DevOps & Version Control',
    description: 'Containerization, source code collaboration, CI/CD pipelines, and workflow automation.',
    icon: FiGitBranch,
    skills: ['Git', 'GitHub', 'GitHub Actions', 'CI/CD Pipelines', 'Docker', 'Docker Compose'],
  },
  {
    title: 'Development Tools',
    description: 'Professional toolchain for writing, debugging, testing, and managing code.',
    icon: FiTool,
    skills: ['Visual Studio Code', 'IntelliJ IDEA', 'Postman', 'Antigravity', 'npm / Vite CLI'],
  },
];

export const architectureHighlights: ArchitectureHighlight[] = [
  {
    id: 'deployfixlab',
    title: 'DeployFixLab Diagnostic Platform',
    service: 'Full-Stack & DevOps Container Workflow',
    summary: 'Containerized diagnosis platform correlating application logs, environment variables, and Docker runtimes to isolate deployment faults.',
    pattern: 'Multi-tier Service Architecture with Container Isolation',
    components: ['React 18 Dashboard', 'Express.js REST Gateway', 'PostgreSQL / Supabase', 'Prisma Schema Engine', 'Dockerized Testing Runtimes', 'GitHub Webhook Ingestion'],
  },
  {
    id: 'saturn',
    title: 'Saturn Decision Intelligence Architecture',
    service: 'Quantitative Market Data & Decision Core',
    summary: 'Modular monorepo separating real-time market data ingestion and technical analysis modules from high-density trading visualization dashboards.',
    pattern: 'Decoupled Monorepo with Domain-Driven Calculation Engines',
    components: ['TypeScript Monorepo', 'VWAP & EMA Math Kernels', 'RSI & Volume Surge Indicators', 'Risk-Reward Plan Matrix', 'Historical Candle Replay Engine'],
  },
  {
    id: 'aws-portfolio',
    title: 'Zero-Cost AWS S3 Static Architecture',
    service: 'Serverless Static Web Delivery',
    summary: 'Production portfolio hosting configured on Amazon S3 with custom bucket policies, client-side routing fallback, and zero ongoing cloud bill.',
    pattern: 'S3 Static Object Hosting Pattern',
    components: ['Vite Optimized Production Bundle', 'Amazon S3 Public Web Endpoint', 'Fine-Grained IAM Policies', 'Client-side SPA Error Routing', 'Zero Maintenance Overhead'],
  },
  {
    id: 'fileflow',
    title: 'FileFlow SaaS Storage Architecture',
    service: 'Cloud Storage & Access Management',
    summary: 'Multi-tenant file management architecture utilizing NestJS backend services and planned S3 pre-signed URLs for zero-bottleneck transfers.',
    pattern: 'Decoupled Direct-to-S3 Pre-signed Upload Pattern (Planned)',
    components: ['React Workspace Interface', 'NestJS Modular Backend', 'Role-Based Access Control', 'Planned S3 Pre-signed URL Pipeline', 'Metadata Audit Store'],
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'deployfixlab',
    title: 'DeployFixLab',
    subtitle: 'Deployment Diagnosis & Recovery Platform',
    status: 'Completed',
    category: 'Full-Stack',
    featured: true,
    techStack: ['React 18', 'Vite', 'Node.js', 'Express.js', 'PostgreSQL (Supabase)', 'Prisma ORM', 'Docker', 'GitHub Actions'],
    description:
      'A developer-focused platform designed to simplify deployment troubleshooting, identify application failures, and provide actionable recovery guidance.',
    contributions: [
      'Developed end-to-end platform architecture connecting React frontend, Express backend, PostgreSQL database, and deployment infrastructure.',
      'Designed a unified project context module for managing repository metadata and deployment-related technical specifications.',
      'Implemented deployment diagnostic workflows for investigating build failures, container misconfigurations, and environment runtime errors.',
      'Configured Docker-based application containerization and automated health-check workflows to ensure service readiness.',
      'Integrated GitHub repository connection architecture supporting repository selection, configuration audits, and integration checks.',
    ],
    architectureSummary: 'Multi-tier React/Node.js architecture backed by Supabase PostgreSQL and Dockerized test runners with automated recovery guidance.',
  },
  {
    id: 'saturn',
    title: 'Saturn',
    subtitle: 'Intraday Market Intelligence & Decision Support Platform',
    status: 'Under Development',
    category: 'Full-Stack',
    featured: true,
    techStack: ['React.js', 'TypeScript', 'Node.js', 'Modular Monorepo', 'Technical Analysis'],
    description:
      'A full-stack market intelligence and decision-support platform for Indian NSE/BSE markets (decision-support, non-automated trading system).',
    contributions: [
      'Designed a TypeScript-based monorepo architecture decoupling UI dashboard applications from shared calculation packages.',
      'Developed authentication, interactive market watchlists, and scanner-data import workflows for Indian equity markets.',
      'Engineered quantitative technical analysis modules calculating VWAP, EMA, RSI, relative volume surges, and dynamic support/resistance zones.',
      'Developing an explainable trade-plan evaluation module with structured risk management and historical candle replay capabilities.',
      'Focused strictly on clean software architecture, maintainability, and reliable financial data processing.',
    ],
    architectureSummary: 'TypeScript monorepo architecture separating UI dashboards from core calculation algorithms and market data modules.',
  },
  {
    id: 'aws-portfolio',
    title: 'Zero-Cost AWS Portfolio Website',
    subtitle: 'Cloud-Hosted Personal Portfolio Architecture',
    status: 'Completed',
    category: 'Cloud & AWS',
    featured: true,
    techStack: ['React.js', 'TypeScript', 'Vite', 'Amazon S3', 'Tailwind CSS'],
    description:
      'A responsive, high-performance personal portfolio website developed and deployed using cost-efficient AWS infrastructure.',
    contributions: [
      'Engineered a responsive single-page portfolio application using React and TypeScript with optimized Vite build configuration.',
      'Deployed the static website directly on Amazon S3 static website hosting with custom bucket access policies.',
      'Configured cloud hosting settings and client-side single-page application routing behavior.',
      'Integrated downloadable resume PDF functionality and recruiter-first interaction paths.',
      'Achieved a production-grade cloud deployment running at zero recurring infrastructure cost.',
    ],
    architectureSummary: 'Amazon S3 static website hosting delivering an optimized Vite single-page application with zero ongoing infrastructure costs.',
    liveUrl: '#home',
  },
  {
    id: 'fileflow',
    title: 'FileFlow',
    subtitle: 'Secure Cloud File Sharing Platform',
    status: 'In Development',
    category: 'Full-Stack',
    featured: true,
    techStack: ['React.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'NestJS', 'Amazon S3 (Planned)'],
    description:
      'A cloud-oriented SaaS application designed to simplify secure file storage, management, and sharing across teams.',
    contributions: [
      'Designed a modular, accessible frontend architecture using React, TypeScript, and Tailwind CSS for multi-file workspace navigation.',
      'Structured user-facing workflows for file organization, sharing permissions, and metadata inspection.',
      'Architected backend domain modules with NestJS and Node.js for role-based access control and file authorization.',
      'Planned cloud storage integration architecture with Amazon S3 using pre-signed URLs for scalable, cost-effective transfers.',
    ],
    architectureSummary: 'Modular NestJS and React architecture designed for scalable file authorization and secure pre-signed cloud transfers.',
  },
  {
    id: 'lexis-electronics',
    title: 'Lexis Electronics Website',
    subtitle: 'Industrial Electronics Commercial Showcase',
    status: 'Completed',
    category: 'Frontend',
    featured: false,
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design'],
    description:
      'A commercial showcase website developed for an electronics manufacturing business specializing in industrial flood lights and illumination products.',
    contributions: [
      'Engineered a business-oriented responsive web interface tailored for industrial clients and procurement inquiries.',
      'Structured technical product catalog presentations highlighting industrial specifications, lumen outputs, and durability ratings.',
      'Built a lightweight, accessible digital presence to enhance business credibility and product visibility.',
    ],
    architectureSummary: 'Semantic, mobile-first frontend with structured product catalog hierarchies and optimized static delivery.',
  },
  {
    id: 'le-meridien',
    title: 'Le Meridien Website',
    subtitle: 'Hotel Hospitality & Reservation Interface',
    status: 'Completed',
    category: 'Frontend',
    featured: false,
    techStack: ['React.js', 'JavaScript', 'CSS3', 'Modular UI'],
    description:
      'A hospitality-oriented web platform built with an emphasis on structured room presentation, booking flow layout, and frontend engineering.',
    contributions: [
      'Developed responsive website layout and interactive interface components for hotel room browsing and amenities.',
      'Applied component-driven frontend development principles to ensure intuitive user navigation and clean visual hierarchy.',
      'Organized multi-tier room specifications, pricing presentations, and booking interaction mockups.',
    ],
    architectureSummary: 'Component-based frontend interface with modular card systems and structured hospitality content presentation.',
  },
];

export const timeline: TimelineItem[] = [
  {
    title: 'B.Tech in Computer Engineering',
    period: '2024 – 2028',
    category: 'Academics',
    description: 'Pursuing computer engineering degree at Marwadi University, Rajkot, maintaining a 7.35 CGPA.',
    points: [
      'Mastering Data Structures, OOP, Database Systems, and Operating Systems',
      'Building strong foundations in C, C++, Java, and algorithms',
      'Maintaining steady academic progress alongside self-directed engineering projects',
    ],
  },
  {
    title: 'Full-Stack & Backend Specialization',
    period: '2024 – Present',
    category: 'Core Focus',
    description: 'Deepening practical capabilities in modern web application engineering with React, TypeScript, Node.js, and databases.',
    points: [
      'Built DeployFixLab: Full-stack deployment troubleshooting platform with Express & PostgreSQL',
      'Architecting Saturn: Intraday market intelligence platform with TypeScript monorepo',
      'Designed REST APIs, relational schemas with Prisma, and document models with Mongoose',
    ],
  },
  {
    title: 'AWS Cloud & DevOps Exploration',
    period: '2024 – Present',
    category: 'Cloud Journey',
    description: 'Hands-on practice deploying applications to AWS and implementing containerized workflows.',
    points: [
      'Configured zero-cost static website hosting on Amazon S3',
      'Practiced with Amazon EC2, CloudFront, Route 53, and IAM security policies',
      'Containerized applications using Docker and Docker Compose for reproducible runtimes',
    ],
  },
  {
    title: 'Internship & Engineering Career Readiness',
    period: '2025 & Beyond',
    category: 'Career Goal',
    description: 'Prepared for competitive technology internships in full-stack development, software engineering, and cloud infrastructure.',
    points: [
      'Targeting Software Engineer, Full-Stack Developer, and AWS Cloud Engineering intern roles',
      'Demonstrating verifiable, clean engineering code on GitHub',
      'Equipped with downloadable 1-page resume PDF for recruiter evaluation',
    ],
  },
];

export const areasOfInterest: string[] = [
  'Full-Stack Web Development',
  'Frontend Engineering',
  'Backend Development',
  'REST API Development',
  'Database Management',
  'Cloud Computing & AWS',
  'DevOps and CI/CD',
  'Docker & Containerization',
  'Software Architecture',
  'Scalable Systems Engineering',
];
