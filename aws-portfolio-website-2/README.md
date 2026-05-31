# 🚀 Zero-Cost AWS Portfolio Website

A modern, responsive, cloud-hosted portfolio website built using **React, Vite, and TypeScript**, and deployed on **AWS S3** using a cost-optimized cloud architecture.

The project showcases my technical skills, projects, certifications, education, and cloud engineering journey while demonstrating practical AWS deployment experience.

---

# 📖 Project Overview

This project was developed to create a professional online presence while gaining hands-on experience with cloud deployment and modern frontend development.

The portfolio includes:

* Professional introduction
* Technical skills
* Education details
* Certifications
* Work experience
* Projects showcase
* Contact information
* Responsive design for all devices

Additionally, the project demonstrates how a production-ready portfolio website can be hosted on AWS with minimal infrastructure costs.

---

# ✨ Features

## 👨‍💻 Portfolio Features

* Responsive modern UI
* Hero section
* About section
* Skills showcase
* Certifications section
* Education section
* Experience section
* Projects section
* Languages section
* Interests section
* Contact section
* Dark mode support
* Smooth scrolling navigation
* Animated UI components

## ☁️ Cloud Features

* AWS S3 Hosting
* Scalable static website architecture
* Cost-optimized deployment
* HTTPS-ready architecture
* High availability

---

# 🛠️ Tech Stack

## Frontend

* React
* TypeScript
* Vite
* CSS3
* HTML5

## Development Tools

* VS Code
* Git
* GitHub

## Cloud Platform

* Amazon Web Services (AWS)

---

# ☁️ AWS Services Used

| Service                            | Purpose                  |
| ---------------------------------- | ------------------------ |
| Amazon S3                          | Static website hosting   |
| AWS IAM                            | Access management        |
| AWS CloudFront *(Future)*          | Global CDN               |
| AWS Certificate Manager *(Future)* | SSL/TLS Certificates     |
| Amazon Route 53 *(Future)*         | Custom Domain Management |

---

# 🏗️ Architecture Diagram

## Current Architecture

```text
Users
  │
  ▼
Amazon S3
  │
  ▼
Portfolio Website
(React + Vite + TypeScript)
```

## Future Production Architecture

```text
Users
  │
  ▼
Route 53
  │
  ▼
CloudFront CDN
  │
  ▼
Amazon S3
  │
  ▼
Portfolio Website
```

---

# 📂 Project Structure

```text
AWS-PORTFOLIO-WEBSITE-2
│
├── architecture/
│   └── architecture-diagram-PortfolioWeb-2.png
│
├── frontend/
│   │
│   ├── assets/
│   │   ├── komal-photo-original.jpeg
│   │   └── komal-portrait.jpg
│   │
│   ├── components/
│   │   ├── AnimatedCard.tsx
│   │   ├── Container.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── PrimaryLink.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── SectionHeading.tsx
│   │
│   ├── data/
│   │   └── portfolio.ts
│   │
│   ├── hooks/
│   │   └── useDarkMode.ts
│   │
│   ├── pages/
│   │   └── HomePage.tsx
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   ├── LanguagesSection.tsx
│   │   ├── InterestsSection.tsx
│   │   └── ContactSection.tsx
│   │
│   ├── types/
│   │   └── portfolio.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── index.html
│   └── vite-env.d.ts
│
├── screenshots/
│   ├── Home_Page.png
│   ├── about_page.png
│   ├── Project_Section.png
│   └── Contact_Section.png
│
└── README.md
```

---

# 🚀 Local Development Setup

## Clone Repository

```bash
git clone https://github.com/your-username/Zero-Cost-AWS-Portfolio-Website.git
```

## Navigate to Frontend

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

---

# ☁️ AWS Deployment Steps

## Step 1

Build the application:

```bash
npm run build
```

## Step 2

Upload generated files from:

```text
frontend/dist/
```

to your AWS S3 bucket.

## Step 3

Enable Static Website Hosting in Amazon S3.

## Step 4

Configure bucket permissions.

## Step 5

Access the website using the S3 website endpoint.

---

# 📸 Screenshots

## Home Page

[Home Page](https://github.com/Radheshbhuva/Zero-Cost-AWS-Portfolio_Website/blob/main/aws-portfolio-website-2/screenshots/Home_Page.png)

---

## About Section

[About Section]([screenshots/about_page.png](https://github.com/Radheshbhuva/Zero-Cost-AWS-Portfolio_Website/blob/main/aws-portfolio-website-2/screenshots/about_page.png))

---

## Projects Section

[Projects Section]([screenshots/Project_Section.png](https://github.com/Radheshbhuva/Zero-Cost-AWS-Portfolio_Website/blob/main/aws-portfolio-website-2/screenshots/Project_Section.png))

---

## Contact Section

[Contact Section]([screenshots/Contact_Section.png](https://github.com/Radheshbhuva/Zero-Cost-AWS-Portfolio_Website/blob/main/aws-portfolio-website-2/screenshots/Contact_Section.png))

---

# 🏛️ Architecture

[Architecture Diagram]([architecture/architecture-diagram-PortfolioWeb-2.png](https://github.com/Radheshbhuva/Zero-Cost-AWS-Portfolio_Website/tree/main/aws-portfolio-website-2/architecture))

---

# 🎯 Learning Outcomes

This project helped me gain practical experience with:

* React Development
* TypeScript
* Component-Based Architecture
* Vite Build System
* AWS S3 Hosting
* Cloud Deployment
* Git & GitHub Workflow
* Portfolio Website Design
* Responsive Web Development

---

# 🔮 Future Enhancements

* CloudFront Integration
* Custom Domain
* SSL Certificate
* CI/CD Pipeline
* GitHub Actions Deployment
* Terraform Infrastructure as Code
* Visitor Analytics Dashboard
* Contact Form Backend

---

# 👨‍💻 Author

**Radhesh Bhuva**

Future Cloud Engineer • Computer Engineering Student • AWS Enthusiast

---

# ⭐ Star This Repository

If you found this project useful or inspiring, consider giving it a star.
