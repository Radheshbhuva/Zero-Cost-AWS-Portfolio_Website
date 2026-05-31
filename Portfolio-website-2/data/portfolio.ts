import {
  FiAward,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiCpu,
  FiHeart,
  FiMessageCircle,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from 'react-icons/fi';
import type {
  CertificationItem,
  ContactInfo,
  EducationItem,
  ExperienceItem,
  LanguageItem,
  NavItem,
  ProjectItem,
  SkillGroup,
  ValueItem,
} from '../types/portfolio';

export const profile = {
  name: 'Komal Khakhkhar',
  title: 'Talent Acquisition Coordinator',
  tagline: 'Connecting Talent with Opportunity.',
  location: 'Surat / Rajkot, Gujarat, India',
  introduction:
    'Passionate Talent Acquisition Coordinator and Business Administration professional dedicated to connecting the right talent with the right opportunities. Focused on recruitment excellence, candidate experience, workforce planning, and organizational growth.',
};

export const contact: ContactInfo = {
  email: 'komalkhakhkhar0326@gmail.com',
  phone: '+91 70412 44414',
  location: 'Surat / Rajkot, Gujarat, India',
  linkedinLabel: 'Komal Khakhkhar',
  linkedinUrl: 'https://www.linkedin.com/in/komal-khakhkhar-537029400/',
};

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const values: ValueItem[] = [
  {
    title: 'Professional Summary',
    description:
      'Business Administration student from Marwadi University with a strong interest in Human Resources and Talent Acquisition.',
  },
  {
    title: 'Career Vision',
    description:
      'To build a successful career in HR, Recruitment, and Talent Acquisition while developing leadership and people-management skills.',
  },
  {
    title: 'Personal Values',
    description:
      'Clear communication, accountability, empathy, attention to detail, and respect for every candidate experience.',
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Business Administration (BBA)',
    institution: 'Marwadi University',
    result: 'CGPA: 8.79',
  },
  {
    degree: 'Higher Secondary (12th Commerce)',
    institution: 'Commerce Stream',
    result: '81%',
  },
  {
    degree: 'Secondary Education (10th)',
    institution: 'School Education',
    result: '70%',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Recruitment & HR Skills',
    icon: FiUsers,
    skills: [
      'Talent Acquisition',
      'Candidate Screening',
      'Interview Coordination',
      'Communication Skills',
      'Relationship Building',
      'Team Collaboration',
    ],
  },
  {
    title: 'Computer Skills',
    icon: FiCpu,
    skills: ['MS Word', 'MS Excel', 'MS PowerPoint', 'Tally Prime', 'Internet & Email Handling'],
  },
  {
    title: 'Professional Skills',
    icon: FiTarget,
    skills: ['Organization', 'Time Management', 'Event Coordination', 'Problem Solving', 'Attention to Detail'],
  },
];

export const experience: ExperienceItem[] = [
  {
    title: 'College Event Coordinator',
    category: 'Volunteer Experience',
    responsibilities: [
      'Managed participant registrations',
      'Handled attendee queries',
      'Coordinated event activities',
      'Assisted in event operations',
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: 'Study on Preference for Traditional Banks vs Neobanks/Fintech Apps Among Students',
    description:
      'Conducted academic research analyzing student banking preferences, fintech adoption trends, digital financial literacy, trust, security, and financial behavior.',
    skillsUsed: ['Research', 'Survey Analysis', 'Digital Finance', 'Data Interpretation'],
    learnings:
      'Built sharper understanding of how trust, convenience, security, and usability influence student financial choices.',
    impact:
      'Strengthened analytical thinking and the ability to translate behavioral insights into practical business observations.',
    downloadHref: '/documents/Traditional-Banks-vs-Neobanks-Research.pdf',
    downloadLabel: 'Download Research PDF',
  },
  {
    title: 'Financial Ratio Analysis Using AI',
    description:
      'Performed financial statement analysis of The Bombay Burmah Trading Corporation Limited using financial ratios, data interpretation, and AI-assisted analytical techniques.',
    skillsUsed: ['Financial Ratios', 'AI-Assisted Analysis', 'Business Research', 'Presentation'],
    learnings:
      'Improved confidence in interpreting profitability, liquidity, solvency, and efficiency ratios from real company data.',
    impact:
      'Demonstrated modern business analysis capability by pairing finance fundamentals with AI-supported workflows.',
    downloadHref: '/documents/Financial-Ratio-Analysis-Using-AI.pdf',
    downloadLabel: 'Download Analysis PDF',
  },
];

export const certifications: CertificationItem[] = [
  { name: 'CCC Certification', detail: 'Computer concepts and essential digital productivity skills.' },
  { name: 'Tally Prime Certification', detail: 'Accounting software fundamentals and business transaction handling.' },
];

export const languages: LanguageItem[] = [
  { language: 'Gujarati', level: 'Native', proficiency: 100 },
  { language: 'Hindi', level: 'Professional', proficiency: 88 },
  { language: 'English', level: 'Professional', proficiency: 86 },
];

export const interests = [
  'Talent Acquisition',
  'Human Resources',
  'Recruitment Strategy',
  'Employee Engagement',
  'Leadership Development',
  'Organizational Growth',
  'Business Management',
  'Professional Networking',
];

export const stats = [
  { label: 'BBA CGPA', value: '8.79', icon: FiAward },
  { label: 'Commerce Score', value: '81%', icon: FiTrendingUp },
  { label: 'Focus Area', value: 'HR', icon: FiBriefcase },
];

export const contactHighlights = [
  { label: 'Candidate Experience', icon: FiHeart },
  { label: 'Interview Coordination', icon: FiCalendar },
  { label: 'Communication', icon: FiMessageCircle },
  { label: 'Timely Follow-Up', icon: FiClock },
  { label: 'Detail Oriented', icon: FiCheckCircle },
];
