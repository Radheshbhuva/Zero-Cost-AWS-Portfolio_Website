# Radhesh Bhuva Portfolio

A production-ready personal brand package for Radhesh Bhuva, built for internship applications and entry-level cloud, frontend, full-stack, and software engineering roles.

## What This Includes

- ATS-optimized resume content
- Downloadable resume PDF
- Modern React + TypeScript + Vite portfolio
- Dark and light theme switcher
- Recruiter-focused hero, about, skills, projects, timeline, resume, GitHub, and contact sections
- GitHub API integration for profile and featured repositories
- SEO metadata, `robots.txt`, and `sitemap.xml`
- S3/static-hosting-ready build output

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- GitHub REST API

## Project Structure

```text
src/
  components/      Shared UI components
  data/            Typed portfolio, resume, project, and contact data
  hooks/           Theme handling
  pages/           Page composition
  sections/        Portfolio sections
  services/        GitHub API service
  types/           TypeScript interfaces
public/
  documents/       Resume PDF and markdown resume
  robots.txt
  sitemap.xml
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Windows PowerShell alternative:

```powershell
npm.cmd run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Resume Assets

- PDF: `public/documents/Radhesh-Bhuva-Resume.pdf`
- Markdown: `public/documents/Radhesh-Bhuva-Resume.md`
- ATS text: `public/radhesh-bhuva-resume.txt`

## Customization

Update the main profile, contact links, skills, project cards, timeline, certifications, and resume content in:

```text
src/data/portfolio.ts
```

Project cards are reusable and support filtering by:

- All
- Web Development
- Cloud
- AWS
- React

## Integrations

GitHub profile and repository cards are fetched from:

```text
https://api.github.com/users/Radheshbhuva
```


## Deployment

This portfolio is ready for:

- AWS S3 static website hosting
- CloudFront
- Vercel
- Netlify
- GitHub Pages

For S3 hosting, upload the contents of `dist/` after running:

```bash
npm run build
```

## Verification

Recommended checks before deployment:

```bash
npm run lint
npm run build
```

On this Windows setup, use:

```powershell
npm.cmd run lint
npm.cmd run build
```
