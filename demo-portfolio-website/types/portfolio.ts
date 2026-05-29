import type { LucideIcon } from 'lucide-react'

export interface NavigationItem {
  label: string
  href: `#${string}`
}

export interface Skill {
  name: string
  category: 'Frontend' | 'Backend' | 'Cloud' | 'Programming'
}

export interface Project {
  title: string
  description: string
  tags: string[]
}

export interface ContactLink {
  label: string
  href: string
  icon: LucideIcon
  external?: boolean
}

export interface Education {
  institution: string
  degree: string
  graduationYear: string
  cgpa: string
}
