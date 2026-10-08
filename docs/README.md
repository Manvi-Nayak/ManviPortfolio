# 🚀 ManviOS — Portfolio Website (Design & Development Blueprint)

> **Version:** 1.0 (Design Locked)
>
> **Status:** Planning Complete → Ready for Development

---

# 📖 Project Vision

ManviOS is not just a portfolio website.

It is an **interactive operating system-inspired experience** that showcases my work, skills, projects, and journey through immersive UI, thoughtful animations, and premium user experience.

The goal is **not** to overwhelm visitors with effects.

The goal is to make them enjoy exploring my work.

Every animation, transition, and interaction should have a purpose.

---

# 🎯 Primary Goal

When someone visits the website, they should think:

> "This is one of the most polished portfolio websites I've seen."

The experience should communicate:

- Creativity
- Engineering
- Attention to Detail
- Product Thinking
- AI Expertise
- Full Stack Development
- Modern UI/UX

---

# 🎨 Design Philosophy

## Keywords

- Premium
- Minimal
- Elegant
- Interactive
- Futuristic
- Engineering
- Glassmorphism
- Smooth
- Professional
- Modern

---

## Inspiration

Not copying, only inspiration from:

- Apple
- Linear
- Arc Browser
- Figma
- VS Code
- GitHub

---

## Things We DO NOT Want

❌ Hacker Theme

❌ Cyberpunk RGB Everywhere

❌ Space Portfolio

❌ Endless Scrolling Website

❌ Too Many Particles

❌ Random Animations

❌ Heavy 3D Everywhere

❌ Loading Screens Longer Than 2 Seconds

❌ Multiple Browser Tabs Inside Portfolio

---

# 🖥 Theme

## ManviOS

A futuristic operating system built for showcasing a software engineer.

The portfolio should feel like exploring a premium digital workspace rather than reading a webpage.

---

# 🌈 Color Palette

## Background

Primary

```text
#050505
```

Secondary

```text
#101010
```

Cards

```text
#171717
```

Glass Panels

```text
rgba(255,255,255,0.05)
```

Border

```text
rgba(255,255,255,0.08)
```

Accent

Electric Blue

Accent Secondary

Purple

Success

Green

Text

White

Secondary Text

Gray

---

# ✍ Typography

## Headings

Space Grotesk

## Body

Inter

---

# 📐 Layout Philosophy

The portfolio is ONE application.

NOT multiple pages.

NOT multiple browser windows.

Everything exists inside one immersive workspace.

Navigation changes the current workspace.

Nothing should ever feel like leaving the application.

---

# 🧭 Navigation

Navigation Style

Hybrid

Meaning:

Users can

- Scroll naturally
- Use the Dock
- Use Command Palette (future)
- Click buttons

All methods navigate inside the same application.

---

# 🖱 Dock

Position

Bottom Center

Features

- Glassmorphism
- Blur
- Hover Expansion
- Active Glow
- Smooth Scaling
- Always Visible
- Mobile Responsive

Dock Items

- Home
- About
- Journey
- Skills
- Projects
- AI
- Contact

---

# 🏠 Hero Section

Purpose

Hook the visitor immediately.

No unnecessary loading screen.

No lock screen.

No long intro.

---

## Layout

Left

- Name
- Dynamic Role Text
- Short Description
- CTA Buttons

Right

Interactive Engineering Blueprint

(No AI Orb)

---

## Dynamic Roles

Rotate smoothly between

- Software Engineer
- AI Developer
- Full Stack Engineer
- Builder
- Problem Solver
- ML Enthusiast

No typing animation.

Only elegant morph transitions.

---

## CTA Buttons

Primary

Explore Workspace

Secondary

Open Resume.pdf

---

# 🌌 Background Style

Instead of space,

use

Digital Engineering Blueprint.

Elements

- Thin Grid
- Animated Nodes
- Connection Lines
- Tiny Glow
- Mouse Reactive
- Soft Motion

Background changes subtly between workspaces.

---

# 📚 Workspaces

## 1. Home

Purpose

First impression.

Contains

- Hero
- Introduction
- CTA
- Blueprint Animation

---

## 2. About

Purpose

Who am I?

Style

Minimal.

Modern.

Glass Panels.

Short story.

No long paragraphs.

---

## 3. Journey

Purpose

How did I become an engineer?

Design

Interactive Metro Route.

Stations

- School
- College
- First Website
- AI
- Projects
- Future

Clicking station expands details.

---

## 4. Skills

Purpose

What technologies do I use?

Design

Interactive Technology Network.

Hover React

↓

React Projects Highlight.

Hover Python

↓

ML Projects Highlight.

Hover FastAPI

↓

Backend Projects Highlight.

Everything connected.

No progress bars.

---

## 5. Projects

This is the most important section.

Design

Explorer + Preview Layout

Left

Project Explorer

Right

Project Details

Each project contains

- Overview
- Screenshots
- Tech Stack
- Features
- Challenges
- Learnings
- Architecture
- GitHub
- Live Demo

No traditional cards.

---

## 6. AI Assistant

Purpose

Demonstrate AI engineering skills.

Features

- Chat Interface
- RAG over Portfolio
- Project Questions
- Resume Questions
- Skill Questions
- Career Questions

Future Scope

Voice Mode

---

## 7. Contact

Theme

Mission Transmission

Instead of

Contact Form

Use

Mission Details

↓

Transmit

↓

Success Animation

---

# 🎬 Motion Design Principles

Every animation must have purpose.

---

## Hover

- Magnetic
- Glow
- Tilt
- Scale

---

## Scroll

- Morph Layout
- Smooth Reveal
- Blur Transition
- Fade

---

## Buttons

- Spring Motion
- Ripple
- Glow

---

## Cards

- Tilt
- Lift
- Shadow

---

## Text

- Fade Up
- Word Reveal
- Morph

---

## Section Change

NO hard cut.

Layouts morph naturally.

---

# ✨ Micro Interactions

- Cursor Glow
- Hover Glow
- Dock Expansion
- Card Tilt
- Smooth Icons
- Floating Glass
- Node Highlights
- Ripple Effects

---

# 🎯 Hidden Features

Only a few.

Quality over quantity.

Examples

- Ctrl + K Command Palette
- Hidden Achievement
- Matrix Theme (Optional)

---

# ⚡ Performance Goals

Lighthouse Score

Performance

95+

Accessibility

95+

SEO

100

Best Practices

100

Animations must stay smooth at 60 FPS on modern devices.

---

# 📱 Responsive Design

Desktop First

Then

Tablet

Then

Mobile

Desktop should never be compromised.

---

# 🛠 Final Tech Stack

## Core

- React 19.x
- Vite 7.x
- TypeScript 5.8+

## Styling

- Tailwind CSS 4.x
- tailwind-merge
- clsx

## Routing

- React Router DOM 7.x

## Animations

- Framer Motion 12.x
- GSAP 3.13+
- Lenis 1.x

## Icons

- Lucide React

## 3D (Only if Required)

- Three.js r179+
- @react-three/fiber 9.x
- @react-three/drei 10.x

## Forms

- React Hook Form 7.x
- Zod 4.x

## Email

- EmailJS

## State Management

- Zustand 5.x

## API

- Axios 1.x

## AI

- FastAPI Backend
- LangChain (Future)
- Gemini API
- RAG Pipeline

## Deployment

- Vercel

## Version Control

- Git
- GitHub

---

# 📂 Planned Folder Structure

```text
portfolio/

public/

src/
 ├── assets/
 ├── components/
 │    ├── common/
 │    ├── dock/
 │    ├── hero/
 │    ├── projects/
 │    ├── journey/
 │    ├── skills/
 │    ├── ai/
 │    └── contact/
 │
 ├── layouts/
 ├── hooks/
 ├── pages/
 ├── services/
 ├── store/
 ├── utils/
 ├── styles/
 ├── animations/
 ├── constants/
 └── types/
```

---

# 🗺 Development Roadmap

## Phase 1

- Project Setup
- Folder Structure
- Theme
- Fonts
- Colors

---

## Phase 2

- Hero
- Dock
- Navigation
- Background

---

## Phase 3

- About
- Journey
- Skills

---

## Phase 4

- Projects
- Explorer
- Project Pages

---

## Phase 5

- AI Assistant
- Contact
- Resume

---

## Phase 6

- Advanced Animations
- Performance
- SEO
- Accessibility

---

## Phase 7

- Testing
- Deployment
- Custom Domain
- Analytics

---

# 🚧 Development Rules

1. Build reusable components only.
2. Mobile responsiveness is mandatory.
3. Accessibility is not optional.
4. No unnecessary animation.
5. Every interaction should feel intentional.
6. Performance is more important than flashy effects.
7. Follow this blueprint before adding new features.
8. Keep the code clean, typed, modular, and production-ready.

---

# 🎉 End Goal

The final product should feel less like a portfolio website and more like entering a beautifully crafted operating system built by a software engineer.

It should leave visitors with one thought:

> **"I want to work with the person who built this."**