import { Github, Linkedin, Mail } from 'lucide-react'
import type {
  ContactLink,
  Education,
  NavigationItem,
  Project,
  Skill,
} from '../types/portfolio'

export const navigationItems: NavigationItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const skills: Skill[] = [
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'AWS Basics', category: 'Cloud' },
  { name: 'C', category: 'Programming' },
  { name: 'C++', category: 'Programming' },
  { name: 'Java', category: 'Programming' },
]

export const projects: Project[] = [
  {
    title: 'Nature Information Website',
    description:
      'A content-focused website that presents nature-related information with a clean layout, readable structure, and responsive browsing experience.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'AWS Portfolio Website',
    description:
      'A personal portfolio project designed to explore static hosting, cloud fundamentals, performance, and modern frontend deployment practices.',
    tags: ['React', 'TypeScript', 'AWS Basics'],
  },
]

export const education: Education = {
  institution: 'Marwadi University',
  degree: 'Bachelor of Computer Engineering',
  graduationYear: '2028',
  cgpa: '7.35',
}

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    href: 'mailto:radheshbhuva@example.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/radheshbhuva',
    icon: Github,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/radheshbhuva',
    icon: Linkedin,
    external: true,
  },
]
