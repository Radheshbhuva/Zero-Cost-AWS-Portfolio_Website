import {
  FiAward,
  FiBookOpen,  FiCloud,
  FiCode,
  FiCpu,  FiGlobe,  FiTool,
} from 'react-icons/fi';
import type {
  CertificationItem,
  ContactInfo,
  EducationItem,
  NavItem,
  ProjectItem,  SkillGroup,
  TimelineItem,
} from '../types/portfolio';

export const profile = {
  name: 'Radhesh Bhuva',
  initials: 'RB',
  title: 'Aspiring Cloud Engineer & Full Stack Developer',
  tagline: 'Building clean web experiences and learning cloud architecture with discipline.',
  location: 'Gujarat, India',
  introduction:
    'Computer Engineering student focused on cloud fundamentals, frontend engineering, and full-stack application development. I enjoy turning practical ideas into clean, deployable software and documenting the architecture behind every build.',
  availability: 'Open to internships, cloud engineering, frontend, full-stack, and entry-level software engineering roles.',
};

export const contact: ContactInfo = {
  email: 'radheshbhuva05@gmail.com',
  phone: '+91 8200672913',
  location: 'Gujarat, India',
  githubUrl: 'https://github.com/Radheshbhuva',
  linkedinUrl: 'https://www.linkedin.com/in/radhesh-bhuva-8aa893319',
  linkedinLabel: 'radhesh-bhuva-8aa893319',
};

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { label: 'Degree', value: 'Computer Engineering', icon: FiCpu },
  { label: 'CGPA', value: '7.35', icon: FiAward },
  { label: 'Graduation', value: '2028', icon: FiBookOpen },
];

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Engineering',
    institution: 'Marwadi University',
    result: 'CGPA: 7.35',
    period: 'Expected Graduation: 2028',
    detail:
      'Building a foundation in software engineering, programming fundamentals, cloud computing concepts, and practical project development.',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend Engineering',
    description: 'Modern UI development with responsive layouts, accessibility, and reusable components.',
    icon: FiGlobe,
    skills: [
      { name: 'HTML', level: 88 },
      { name: 'CSS', level: 84 },
      { name: 'JavaScript', level: 78 },
      { name: 'TypeScript', level: 70 },
      { name: 'React', level: 74 },
    ],
  },
  {
    title: 'Programming',
    description: 'Core programming and problem-solving foundation for entry-level software roles.',
    icon: FiCode,
    skills: [
      { name: 'C', level: 76 },
      { name: 'C++', level: 74 },
      { name: 'Java', level: 70 },
      { name: 'Data Structures Basics', level: 68 },
    ],
  },
  {
    title: 'Cloud & AWS',
    description: 'Cloud fundamentals with hands-on interest in serverless and static web architecture.',
    icon: FiCloud,
    skills: [
      { name: 'AWS Fundamentals', level: 72 },
      { name: 'Cloud Computing Basics', level: 74 },
      { name: 'API Gateway', level: 64 },
      { name: 'Lambda Concepts', level: 62 },
      { name: 'DynamoDB Basics', level: 60 },
    ],
  },
  {
    title: 'Developer Tools',
    description: 'Daily tools for source control, code editing, project organization, and collaboration.',
    icon: FiTool,
    skills: [
      { name: 'Git', level: 76 },
      { name: 'GitHub', level: 78 },
      { name: 'VS Code', level: 84 },
      { name: 'Vite', level: 70 },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: 'Cloud Portfolio Architecture',
    category: 'AWS',
    description:
      'A professional portfolio system designed around static hosting, recruiter-focused content, SEO, GitHub integration, and cloud-ready deployment documentation.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    techStack: ['React', 'TypeScript', 'Vite', 'AWS Fundamentals', 'Static Hosting', 'SEO'],
    githubUrl: contact.githubUrl,
    liveUrl: '#home',
    outcome:
      'Demonstrates static hosting readiness, cloud-aware project structure, professional documentation, and recruiter-friendly architecture communication.',
  },
  {
    title: 'Le Meridian Hotel Full-Stack Platform',
    category: 'Full Stack',
    description:
      'A MERN-style hotel reservation and admin platform with authentication, room management, booking workflows, dashboard modules, and deployment configuration.',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Render', 'Vercel'],
    githubUrl: 'https://github.com/Radheshbhuva/Le-Meridian-Main',
    liveUrl: 'https://le-meridian-main.vercel.app',
    outcome:
      'Shows full-stack thinking across frontend routes, backend APIs, database models, authentication, and production deployment notes.',
  },
  {
    title: 'Recruiter-Focused Developer Portfolio',
    category: 'React',
    description:
      'A modern personal brand website with ATS resume content, project filtering, GitHub API integration, dark mode, SEO metadata, and responsive recruiter UX.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GitHub API', 'SEO'],
    githubUrl: contact.githubUrl,
    liveUrl: '#home',
    outcome:
      'Packages education, skills, projects, and contact flow into a deployment-ready portfolio for internship applications.',
  },
  {
    title: 'Frontend Component System for Portfolio Cards',
    category: 'Web Development',
    description:
      'A reusable card architecture for showcasing unlimited website, cloud, AWS, React, and full-stack projects using typed data and filterable categories.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    techStack: ['TypeScript', 'React Components', 'Tailwind CSS', 'Accessibility', 'Responsive Design'],
    githubUrl: contact.githubUrl,
    liveUrl: '#projects',
    outcome:
      'Makes future project additions fast, consistent, and easy to maintain without changing component logic.',
  },
];

export const timeline: TimelineItem[] = [
  {
    title: 'Bachelor of Computer Engineering',
    period: '2024 - 2028',
    category: 'Education',
    description: 'Pursuing computer engineering at Marwadi University with a CGPA of 7.35.',
    points: ['Strengthening programming fundamentals', 'Practicing web development', 'Learning cloud computing concepts'],
  },
  {
    title: 'Frontend Development Foundation',
    period: 'Current Focus',
    category: 'Learning Milestone',
    description: 'Building practical experience with modern frontend engineering using React, TypeScript, and reusable UI systems.',
    points: ['Responsive portfolio architecture', 'Dark/light theme implementation', 'Accessibility and SEO basics'],
  },
  {
    title: 'AWS Cloud Journey',
    period: 'In Progress',
    category: 'Cloud',
    description: 'Learning cloud fundamentals and applying them through static hosting, deployment, and cloud architecture documentation.',
    points: ['Static website hosting concepts', 'Cloud deployment workflow', 'Architecture documentation'],
  },
  {
    title: 'Internship Readiness',
    period: '2026 and beyond',
    category: 'Career',
    description: 'Preparing for internships and entry-level roles by presenting projects, GitHub activity, and ATS-ready resume content.',
    points: ['Cloud engineering roles', 'Frontend development roles', 'Full-stack development roles'],
  },
];

export const certifications: CertificationItem[] = [
  {
    name: 'AWS Cloud Fundamentals',
    issuer: 'Self-directed cloud learning path',
    status: 'In progress',
  },
  {
    name: 'React and TypeScript Project Practice',
    issuer: 'Hands-on portfolio and project development',
    status: 'Ongoing',
  },
];

