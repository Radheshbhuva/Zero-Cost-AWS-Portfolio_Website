import type { IconType } from 'react-icons';

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedinLabel: string;
  linkedinUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  result: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
  icon: IconType;
}

export interface ExperienceItem {
  title: string;
  category: string;
  responsibilities: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  skillsUsed: string[];
  learnings: string;
  impact: string;
  downloadHref: string;
  downloadLabel: string;
}

export interface CertificationItem {
  name: string;
  detail: string;
}

export interface LanguageItem {
  language: string;
  level: string;
  proficiency: number;
}

export interface ValueItem {
  title: string;
  description: string;
}
