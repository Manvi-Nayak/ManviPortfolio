# 📐 WIREFRAMES.md

> **Project:** ManviOS – Portfolio Website
>
> **Version:** 1.0
>
> **Status:** Layout Locked

---

# 📖 Purpose

This document defines the layout of every workspace before visual design begins.

This is a **wireframe document**, not a UI document.

No colors.

No animations.

No typography decisions.

Only:

* Layout
* Hierarchy
* Components
* User Flow

---

# 🌍 Overall Structure

```
┌──────────────────────────────────────────────────────────────┐
│                      STATUS BAR                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                                                              │
│                     ACTIVE WORKSPACE                         │
│                                                              │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                    FLOATING DOCK                             │
└──────────────────────────────────────────────────────────────┘
```

The website always contains:

* Status Bar
* Active Workspace
* Floating Dock

Only the workspace changes.

Everything else remains consistent.

---

# 🖥 STATUS BAR

```
┌──────────────────────────────────────────────────────────────┐
│ ManviOS                  ● Online                  19:42      │
└──────────────────────────────────────────────────────────────┘
```

### Left

* Logo
* ManviOS

### Center

* Online Status

### Right

* Time
* Theme Toggle

Future

* Language Toggle

---

# ⚓ FLOATING DOCK

```
──────────────────────────────────────────

🏠   👤   🛤   ⚡   💼   🤖   📩

──────────────────────────────────────────
```

Icons

* Home
* About
* Journey
* Skills
* Projects
* AI
* Contact

Hover

↓

Expand

Click

↓

Navigate smoothly

Current workspace glows.

---

# 🏠 HOME WORKSPACE

Purpose

Immediately communicate

Who am I?

What do I build?

Where should visitors go next?

---

## Layout

```
┌────────────────────────────────────────────────────────────┐

Status Bar

--------------------------------------------------------------

Hello,

MANVI
NAYAK

Software Engineer
AI Developer
Builder

Building intelligent products where
software meets creativity.

[ Explore Workspace ]
[ Resume.pdf ]

                        Engineering Blueprint
                        Interactive Grid
                        Mouse Reactive

--------------------------------------------------------------

Dock

└────────────────────────────────────────────────────────────┘
```

---

## Components

* Greeting
* Name
* Dynamic Role
* Description
* CTA Buttons
* Interactive Blueprint
* Background Grid

---

## Scroll Behaviour

As the user scrolls

↓

Hero shrinks

↓

Blueprint expands

↓

About workspace fades in.

---

# 👤 ABOUT WORKSPACE

Purpose

Tell the visitor who you are without writing an essay.

---

## Layout

```
-------------------------------------------------------------

About Me

-------------------------------------------------------------

Photo          Introduction

               Short Story

               Education

               Interests

               Fun Facts

-------------------------------------------------------------

Quick Stats

Projects

Experience

Technologies

CGPA

-------------------------------------------------------------
```

---

Components

* About Card
* Profile Image
* Quick Stats
* Education
* Interests

---

Interaction

Quick Stats animate when entering viewport.

---

# 🛤 JOURNEY WORKSPACE

Purpose

Show growth.

Not achievements.

Growth.

---

## Layout

```
---------------------------------------------------------

My Journey

---------------------------------------------------------

● School

      │

● Started CSE

      │

● First Website

      │

● AI Projects

      │

● Hackathons

      │

● Today

---------------------------------------------------------

Details Panel

---------------------------------------------------------
```

---

Interaction

Click station

↓

Detail panel updates

↓

Station glows

↓

Timeline animates

---

# ⚡ SKILLS WORKSPACE

Purpose

Connect technologies with projects.

---

## Layout

```
---------------------------------------------------------

Skills

---------------------------------------------------------

              React

        Python      FastAPI

 Java                     Node

       TensorFlow

---------------------------------------------------------

Hover Technology

↓

Related Projects Highlight

---------------------------------------------------------
```

---

Components

* Technology Nodes
* Connection Lines
* Information Panel

---

Interaction

Hover

↓

Connected nodes glow

↓

Projects highlight

↓

Info panel updates

---

# 💼 PROJECTS WORKSPACE

Most important workspace.

---

## Layout

```
┌─────────────────────────────────────────────────────────────┐

Projects

---------------------------------------------------------------

Explorer

> Mahakumbh

> TalkEase

> InsightAI

> PCOS

---------------------------------------------------------------

Preview

Project Image

Description

Features

Architecture

Tech Stack

Challenges

GitHub

Live Demo

---------------------------------------------------------------

└─────────────────────────────────────────────────────────────┘
```

---

Interaction

Click Project

↓

Preview updates

↓

Image fades

↓

Content slides

↓

Explorer remains fixed

---

Future

Search

Filters

Categories

---

# 🤖 AI WORKSPACE

Purpose

Demonstrate AI capabilities.

---

## Layout

```
-------------------------------------------------------

AI Assistant

-------------------------------------------------------

Suggested Questions

• Tell me about Manvi

• Explain Mahakumbh

• Show React Projects

• Why hire Manvi?

-------------------------------------------------------

Chat Window

-------------------------------------------------------

Input Box

-------------------------------------------------------
```

---

Interaction

Suggested prompt

↓

Auto fills input

↓

Chat starts

---

Future

Voice

File Upload

Conversation History

---

# 📩 CONTACT WORKSPACE

Purpose

Convert visitor into connection.

---

## Layout

```
-----------------------------------------------------

Let's Build Something Together

-----------------------------------------------------

Name

Email

Message

-----------------------------------------------------

[ Transmit Message ]

-----------------------------------------------------

Social Links

GitHub

LinkedIn

Email

Resume

-----------------------------------------------------
```

---

Interaction

Submit

↓

Transmission Animation

↓

Success

---

# 🦶 FOOTER

Simple.

Minimal.

```
-------------------------------------------------------

Built with React + ❤️

Designed & Developed by Manvi

2026

-------------------------------------------------------
```

---

# 🌊 Navigation Flow

```
HOME

↓

ABOUT

↓

JOURNEY

↓

SKILLS

↓

PROJECTS

↓

AI

↓

CONTACT
```

Users can move through:

* Scroll
* Dock
* Command Palette (future)

---

# 🎬 Workspace Transitions

Every workspace enters using the same pattern.

Current Workspace

↓

Blur

↓

Fade

↓

Scale Down

↓

Next Workspace Expands

↓

Content Reveals

No abrupt transitions.

---

# 📱 Mobile Layout Strategy

Desktop is the primary experience.

For mobile:

* Dock becomes compact
* Blueprint simplifies
* Skills network stacks
* Project Explorer becomes accordion
* AI fills the screen
* Contact form becomes single column

No horizontal scrolling.

---

# 🎯 User Journey

```
Visitor Arrives

↓

Reads Hero

↓

Clicks Explore

↓

Learns About Manvi

↓

Understands Journey

↓

Explores Skills

↓

Opens Projects

↓

Talks to AI

↓

Sends Message

↓

Leaves Impressed
```

---

# 📋 Component Checklist

## Global

* Status Bar
* Dock
* Workspace Container
* Section Title
* Glass Card

## Home

* Greeting
* Dynamic Role
* CTA
* Blueprint

## About

* Profile Card
* Stats
* Education

## Journey

* Timeline
* Detail Panel

## Skills

* Technology Network
* Info Panel

## Projects

* Explorer
* Preview
* Tech Stack
* Gallery

## AI

* Chat
* Suggestions
* Input

## Contact

* Form
* Social Links

---

# 🚀 Figma Build Order

Do **not** design page by page randomly.

Build in this exact sequence:

### Phase 1 — Foundation

* Frame sizes
* 12-column grid
* Color styles
* Typography styles
* Spacing tokens

### Phase 2 — Core Components

* Buttons
* Inputs
* Glass Card
* Dock
* Status Bar
* Chips
* Badges
* Icons

### Phase 3 — Global Layout

* Status Bar
* Dock
* Workspace container
* Background system

### Phase 4 — Screens

1. Home
2. About
3. Journey
4. Skills
5. Projects
6. AI
7. Contact

### Phase 5 — Prototype

* Scroll flow
* Navigation
* Workspace transitions
* Micro interactions

Only after the prototype feels complete do we move to React.

---

# ✅ Wireframe Approval Checklist

Before starting development, confirm:

* Workspace hierarchy is final.
* Navigation is intuitive.
* Components are reusable.
* No unnecessary sections exist.
* Every workspace answers one clear question.
* The experience feels like one operating system, not multiple web pages.

---

# 🏁 Final Principle

> **The visitor should never feel like they're scrolling through a portfolio. They should feel like they're exploring a beautifully engineered digital workspace where every interaction reveals another part of the story.**
