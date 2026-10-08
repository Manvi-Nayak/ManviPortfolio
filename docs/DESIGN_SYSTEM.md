# 🎨 DESIGN_SYSTEM.md

> **Project:** ManviOS – Portfolio Website
>
> **Version:** 1.0
>
> **Status:** Design Locked
>
> This document defines the complete design language for the portfolio. Every UI component, screen, animation, and interaction must follow these guidelines.

---

# 🎯 Design Principles

The design should communicate:

- Premium
- Modern
- Engineering
- Interactive
- Elegant
- Creative
- Minimal
- Futuristic

This is **not** a flashy portfolio.

This is a polished software product.

---

# 🧠 Design Philosophy

Every element must answer one question:

> **"Does this improve the user's experience?"**

If the answer is no,

remove it.

---

# 🎨 Visual Style

## Theme

Futuristic Operating System

Inspired by

- Apple
- Linear
- Arc Browser
- VS Code
- GitHub

Not inspired by

- Hacker themes
- RGB gaming setups
- Cyberpunk
- Space portfolios

---

# 🌈 Color Palette

## Background

Primary

```css
#050505
```

Secondary

```css
#0D0D0D
```

Workspace

```css
#111111
```

Glass Cards

```css
rgba(255,255,255,0.05)
```

Glass Hover

```css
rgba(255,255,255,0.08)
```

Borders

```css
rgba(255,255,255,0.08)
```

---

## Accent Colors

Primary Accent

```css
#4F8CFF
```

Secondary Accent

```css
#8B5CF6
```

Success

```css
#22C55E
```

Warning

```css
#F59E0B
```

Error

```css
#EF4444
```

---

## Text

Primary

```css
#FFFFFF
```

Secondary

```css
#A1A1AA
```

Muted

```css
#71717A
```

---

# ✍ Typography

## Font Family

### Headings

Space Grotesk

### Body

Inter

---

## Font Scale

### Hero Name

64px

Weight

700

---

### H1

48px

Weight

700

---

### H2

36px

Weight

600

---

### H3

28px

Weight

600

---

### Section Title

24px

Weight

600

---

### Body

16px

Weight

400

---

### Small Text

14px

Weight

400

---

### Caption

12px

Weight

400

---

# 📏 Spacing System

Use an 8-point grid.

Allowed spacing values

```text
4
8
12
16
24
32
40
48
64
80
96
128
```

Avoid random spacing values.

---

# 📐 Border Radius

Small

```text
12px
```

Medium

```text
18px
```

Large

```text
24px
```

Pill

```text
999px
```

---

# 🌫 Glassmorphism

Glass Background

```css
rgba(255,255,255,0.05)
```

Backdrop Blur

```css
16px
```

Border

```css
1px solid rgba(255,255,255,0.08)
```

Never use heavy opacity.

Glass should remain subtle.

---

# ✨ Shadows

Small

Soft elevation only.

Medium

Used on hover.

Large

Reserved for dialogs only.

Glow

Only on active elements.

Never overuse glow.

---

# 🧭 Layout

Desktop Width

1440px

Container Width

1280px

Grid

12 Columns

Gutter

24px

---

# 📱 Responsive Breakpoints

Desktop

```text
1440+
```

Laptop

```text
1280
```

Tablet

```text
1024
```

Mobile

```text
768
```

Small Mobile

```text
480
```

---

# 🖥 Status Bar

Height

40px

Contains

- Logo
- Current Status
- Online Indicator
- Time (Optional)

Always fixed.

---

# 🧲 Dock

Position

Bottom Center

Height

72px

Style

Glass

Blur

Rounded

Hover expands icons.

Active item glows.

Always visible.

---

# 🏠 Hero Workspace

## Left Side

Contains

- Greeting
- Name
- Dynamic Role
- Description
- CTA Buttons

---

## Right Side

Interactive Engineering Blueprint

Contains

- Animated Grid
- Connection Nodes
- Mouse Reactive Elements
- Subtle Motion

No AI Orb.

No astronaut.

No space objects.

---

# 🧩 Components

Reusable components

- Primary Button
- Secondary Button
- Dock
- Dock Icon
- Glass Card
- Workspace Container
- Section Heading
- Chip
- Badge
- Status Indicator
- Timeline Card
- Skill Node
- Project Explorer
- Terminal Window
- AI Chat Bubble
- Contact Form
- Footer

Never duplicate components.

---

# 📂 Workspace Design

Each workspace occupies approximately one screen.

Every workspace has

- Unique identity
- Shared design language
- Same spacing rules
- Same typography
- Same transitions

---

# 🏗 Workspace Order

1. Home

2. About

3. Journey

4. Skills

5. Projects

6. AI Assistant

7. Contact

---

# 🎬 Motion System

Motion must feel intentional.

---

## Hover

Duration

200ms

Effect

- Scale
- Glow
- Lift

---

## Buttons

Duration

250ms

Spring Animation

---

## Cards

Duration

300ms

Tilt

Shadow

Glow

---

## Workspace Transition

Duration

700ms

Effects

- Fade
- Blur
- Morph
- Slide

Never hard cut.

---

## Text

Use

- Fade Up
- Word Reveal
- Morph

Avoid typing animations.

---

# 🖱 Cursor

Normal cursor.

Enhanced with

- Soft Glow
- Magnetic Buttons
- Interactive Hover States

No oversized custom cursor.

---

# 🌌 Background

Consists of

- Blueprint Grid
- Animated Nodes
- Thin Connection Lines
- Soft Gradient
- Very Light Noise

Background changes subtly between workspaces.

---

# 💼 Project Explorer

Layout

Left

Project List

Right

Project Details

Each project includes

- Hero Image
- Description
- Features
- Tech Stack
- Challenges
- Learnings
- GitHub
- Live Demo

Only one project expanded at a time.

---

# 🤖 AI Workspace

Looks like a premium AI assistant.

Features

- Chat
- Suggested Questions
- Typing Animation
- Markdown Responses

Future Ready

- Voice
- Resume Search
- Project Search

---

# 📨 Contact Workspace

Theme

Mission Transmission

Contains

- Name
- Email
- Message
- Send Button

Submission animation

Signal transmitted successfully.

---

# 🎯 Accessibility

Minimum contrast ratio

WCAG AA

Keyboard Navigation

Required

Focus States

Visible

Screen Reader Labels

Required

---

# ⚡ Performance Rules

Avoid

- Heavy videos
- Large GIFs
- Excessive particles
- Unoptimized images

Target

60 FPS animations.

---

# 🚫 Things We Never Do

- Random colors
- Random spacing
- Random border radius
- Random animation duration
- Multiple font families
- Long paragraphs
- More than two accent colors
- Animation without purpose

---

# ✅ Final Design Checklist

Before any screen is considered complete, verify:

- Follows spacing system
- Uses approved colors
- Uses correct typography
- Uses reusable components
- Animations match motion system
- Responsive on all devices
- Accessible
- Optimized
- Consistent with ManviOS identity

---

# 📌 Golden Rule

> **Every interaction should make the visitor feel like they're exploring a beautifully engineered product—not just scrolling through a portfolio website.**