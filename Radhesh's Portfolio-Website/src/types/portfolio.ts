import type { IconType } from 'react-icons';

export type ProjectCategory = 'Web Development' | 'Cloud' | 'AWS' | 'React' | 'Full Stack';

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
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillGroup {
  title: string;
  description: string;
  icon: IconType;
  skills: SkillItem[];
}

export interface TimelineItem {
  title: string;
  period: string;
  category: string;
  description: string;
  points: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  category: ProjectCategory;
  outcome: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  status: string;
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
