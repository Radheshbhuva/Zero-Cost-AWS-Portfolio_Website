import type { IconType } from 'react-icons';

export type ProjectCategory = 'All' | 'Full-Stack' | 'Cloud & AWS' | 'Frontend';
export type ProjectStatus = 'Completed' | 'Under Development' | 'In Development';

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  linkedinLabel: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  result: string;
  period: string;
  detail: string;
  coursework: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: IconType;
  skills: string[];
  note?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  status: ProjectStatus;
  category: 'Full-Stack' | 'Cloud & AWS' | 'Frontend';
  techStack: string[];
  description: string;
  contributions: string[];
  architectureSummary: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface ArchitectureHighlight {
  id: string;
  title: string;
  service: string;
  summary: string;
  pattern: string;
  components: string[];
}

export interface TimelineItem {
  title: string;
  period: string;
  category: string;
  description: string;
  points: string[];
}

export interface GitHubProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string | null;
}

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  homepage: string | null;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
}
