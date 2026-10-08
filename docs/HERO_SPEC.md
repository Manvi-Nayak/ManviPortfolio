# 🎬 HERO_SPEC.md

> **Project:** ManviOS – Portfolio Website  
> **Feature:** Hero Workspace  
> **Version:** 1.0  
> **Status:** Implementation Specification  
> **Depends On:** `README.md`, `DESIGN_SYSTEM.md`, `WIREFRAMES.md`, `AI_DEVELOPMENT_RULES.md`

---

# 1. Hero Purpose

The Hero is the first real experience inside ManviOS.

Its job is simple:

> Make the visitor immediately understand who Manvi is, what she builds, and why they should explore further.

The Hero must feel like the **main workspace of a futuristic engineering environment**, not a conventional portfolio landing page.

The visitor should understand the content within a few seconds, while the interaction and animation encourage them to explore.

---

# 2. Final Hero Concept

## Name

**Manvi Nayak**

## Core Identity

**Software Engineer**

The supporting role text changes smoothly between:

- AI Developer
- Full Stack Engineer
- Builder
- Problem Solver
- ML Enthusiast

The role changes should be a **smooth morph/fade transition**, not a typing animation.

---

# 3. Hero Layout

Desktop layout:

```text
┌─────────────────────────────────────────────────────────────┐
│ Status Bar                                                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   LEFT CONTENT                         RIGHT VISUAL         │
│                                                             │
│   Hello, I'm                                             ╱  │
│   MANVI NAYAK                              Blueprint Grid  │
│                                                             │
│   Software Engineer                         ●───●───●       │
│   AI Developer                              │ ╲ │ ╱ │       │
│   Full Stack Engineer                       ●───●───●       │
│                                                             │
│   Building intelligent products             Interactive     │
│   where software meets creativity.          engineering     │
│                                             canvas          │
│   [ Explore Workspace ]                                     │
│   [ Resume.pdf ]                                             │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                         Floating Dock                       │
└─────────────────────────────────────────────────────────────┘
```

The Hero should use a balanced two-column layout.

The left side communicates identity.

The right side provides the memorable interactive visual.

---

# 4. Hero Content

## Eyebrow

```text
HELLO, I'M
```

Small uppercase text.

Subtle and secondary.

---

## Name

```text
MANVI
NAYAK
```

or a single-line `MANVI NAYAK` when viewport width allows.

The name is the strongest typographic element.

Use the approved heading font:

**Space Grotesk**

Weight:

**700**

---

# 5. Role

Initial state:

```text
Software Engineer
```

Then smoothly cycle through:

```text
Software Engineer
AI Developer
Full Stack Engineer
Builder
Problem Solver
ML Enthusiast
```

Recommended display duration:

**2.2–2.8 seconds per role**

Transition:

**450–650ms**

The role transition must not cause layout jumping.

Use a fixed/minimum text area.

---

# 6. Description

Approved copy:

```text
Building intelligent products where software meets creativity.
```

Secondary line:

```text
I build AI-powered, full-stack experiences that solve real-world problems.
```

Keep the paragraph short.

Do not turn the Hero into a biography.

---

# 7. Primary CTA

Text:

```text
Explore Workspace
```

Purpose:

Move the visitor from the Hero into the interactive portfolio experience.

Behavior:

- Hover → subtle lift + magnetic movement
- Cursor proximity → slight attraction
- Click → smooth transition into the next workspace
- No new tab
- No full page reload

---

# 8. Secondary CTA

Text:

```text
Resume.pdf
```

Visual treatment:

Secondary glass button.

Behavior:

- Opens the resume inside the same application experience where practical.
- If a direct PDF preview is technically preferable, it may open an internal resume viewer.
- Do not create unnecessary browser tabs.

The final implementation should prioritize a seamless ManviOS experience.

---

# 9. RIGHT-SIDE VISUAL — ENGINEERING BLUEPRINT

## Core Idea

The right side is NOT:

- AI orb
- planet
- astronaut
- 3D Earth
- generic particle sphere

Instead, it is an:

> **Interactive Digital Engineering Blueprint**

It represents software architecture and engineering thinking.

---

# 10. Blueprint Visual Structure

The visual contains:

### Base Grid

Very subtle technical grid.

### Nodes

Small glowing nodes distributed across the visual area.

### Connections

Thin lines connecting selected nodes.

### Activity Paths

A few paths occasionally illuminate and travel from one node to another.

### Accent Glow

Electric blue and purple gradients are used sparingly.

### Depth

Use opacity and blur to create depth without requiring heavy 3D.

---

# 11. Blueprint Behavior

The blueprint should feel alive but never distracting.

Default:

- Nodes gently pulse at different intervals.
- Connection lines remain mostly static.
- One or two paths occasionally animate.
- Background grid moves extremely subtly.

Mouse interaction:

When the pointer moves near the blueprint:

1. Nearby nodes react.
2. Connections brighten slightly.
3. A soft radial glow follows the pointer.
4. The closest node can shift by a few pixels.
5. The overall network should remain stable.

Do not make the entire visual chase the cursor.

The interaction should feel like a responsive engineering system.

---

# 12. Blueprint Hover States

When the pointer approaches an important node:

```text
Normal
  ↓
Node brightens
  ↓
Connected paths highlight
  ↓
Related nodes receive a subtle glow
```

Optional tooltip:

```text
React
Python
FastAPI
AI
```

Tooltips should only appear for intentionally interactive nodes.

---

# 13. Hero Entrance Animation

The Hero must not have a long loading screen.

There is **no lock screen**.

There is **no 10-second boot sequence**.

The application should become usable almost immediately.

Target entrance duration:

**~1200–1800ms**

---

## Timeline

### 0ms

Page is visible.

Background is already present.

Blueprint is mostly hidden/subtle.

---

### 100ms

Blueprint grid fades from low opacity into its resting state.

---

### 200ms

Eyebrow fades upward.

---

### 300ms

`MANVI NAYAK` reveals using a subtle clipped/masked text animation.

Do not use excessive letter-by-letter animation.

---

### 500ms

Role text enters.

---

### 650ms

Description fades upward.

---

### 800ms

Primary and secondary CTA buttons appear with a small stagger.

---

### 900ms

Blueprint nodes begin appearing.

---

### 1100ms

Connection paths draw subtly.

---

### 1300ms+

Blueprint reaches its idle interactive state.

The visitor can interact immediately.

---

# 14. Text Animation Rules

Use:

- opacity
- transform
- clipping/masking
- subtle blur

Avoid:

- excessive bouncing
- random rotation
- typing effect
- letter explosions
- glitch effects

The animation should feel premium.

---

# 15. GSAP Responsibilities

Use GSAP for:

- Hero entrance timeline
- Blueprint node/path choreography
- Scroll-driven Hero transformation
- Complex workspace transition

Keep GSAP animation logic separate from JSX layout.

Recommended location:

```text
src/animations/hero/
```

Possible files:

```text
heroEntrance.ts
heroBlueprint.ts
heroScroll.ts
```

Only create separate files when complexity justifies them.

---

# 16. Motion Responsibilities

Use Motion for:

- CTA hover
- CTA tap
- Dock micro-interactions
- Small role transitions if GSAP is not needed
- Small UI state changes

Do not duplicate the same animation in both GSAP and Motion.

---

# 17. Scroll Behavior

The Hero participates in the hybrid navigation system.

As the visitor scrolls:

```text
Hero
  ↓
Hero content subtly reduces in scale
  ↓
Blueprint becomes more prominent
  ↓
Hero content shifts upward
  ↓
Next workspace enters
```

The transition must feel like the current workspace is transforming rather than the page simply moving down.

---

# 18. Hero → Next Workspace Transition

No hard cut.

No white flash.

No page reload.

Concept:

```text
Hero content
     ↓
slightly compresses
     ↓
blueprint expands
     ↓
background grid shifts
     ↓
next workspace emerges
```

The exact next workspace is controlled by the global navigation architecture.

---

# 19. Background

Use:

- `#050505` base
- very subtle blue radial glow
- very subtle purple radial glow
- blueprint grid
- low-opacity nodes

Avoid:

- star fields
- large planets
- aggressive neon
- animated rainbow gradients

---

# 20. Dock Interaction During Hero

The global Dock remains visible.

Home is active.

Hover:

```text
Icon
  ↓
slight scale
  ↓
label becomes clearer
  ↓
soft glow
```

The Dock must not cover important Hero content.

---

# 21. Status Bar During Hero

The global Status Bar remains visible.

Suggested content:

Left:

```text
ManviOS
```

Center:

```text
● Online
```

Right:

```text
Current Time
```

Keep it visually quiet.

The Hero is more important than the status bar.

---

# 22. Responsive Design

## Desktop ≥ 1024px

Two-column Hero.

```text
Left content | Blueprint
```

---

## Tablet 768–1023px

Reduce blueprint size.

Maintain two-column layout only if there is sufficient space.

Otherwise transition to stacked layout.

---

## Mobile < 768px

Single column.

Order:

```text
Eyebrow
Name
Role
Description
CTA
Blueprint
```

Blueprint becomes simplified.

Reduce:

- number of nodes
- connection lines
- continuous motion
- glow intensity

Dock becomes compact.

No horizontal scrolling.

---

# 23. Mobile Hero

Mobile must not simply be a scaled desktop.

The composition should be redesigned for the narrow viewport.

Suggested structure:

```text
┌─────────────────────────────┐
│ Status Bar                  │
│                             │
│ HELLO, I'M                  │
│ MANVI                       │
│ NAYAK                       │
│                             │
│ Software Engineer           │
│                             │
│ Building intelligent        │
│ products...                 │
│                             │
│ [ Explore Workspace ]       │
│ [ Resume.pdf ]              │
│                             │
│   Simplified Blueprint      │
│                             │
│        Floating Dock        │
└─────────────────────────────┘
```

---

# 24. Accessibility

Respect:

```css
prefers-reduced-motion
```

When reduced motion is enabled:

- Disable complex blueprint movement.
- Disable large scroll choreography.
- Use simple opacity transitions.
- Keep all content accessible.
- Keep navigation fully functional.

Do not hide meaningful information inside animations.

---

# 25. Performance Requirements

Target:

**60 FPS**

Avoid:

- huge canvas particle systems
- unnecessary WebGL
- dozens of continuously animated elements
- expensive blur on every element
- layout-triggering animations

Prefer:

```text
transform
opacity
```

for frequent animation.

Use GPU-friendly properties where appropriate.

The blueprint should be implemented with the lightest practical approach.

Do NOT introduce Three.js/R3F just for this Hero unless a later implementation proves that CSS/SVG/canvas cannot achieve the desired result.

---

# 26. SEO / Semantic Content

The Hero must contain real semantic HTML.

Use:

```html
<h1>Manvi Nayak</h1>
```

Do not render the name as an image.

Role text can be dynamic, but the primary identity must remain available to search engines and assistive technologies.

---

# 27. Component Structure

Suggested:

```text
Hero/
├── Hero.tsx
├── HeroContent.tsx
├── HeroBlueprint.tsx
├── HeroRole.tsx
└── hero.css (only if needed)
```

Animation logic:

```text
src/animations/hero/
```

Do not create unnecessary files if the implementation remains simple.

---

# 28. Technical Constraints

The AI implementing this feature MUST:

- Use existing project dependencies where possible.
- Not introduce a new animation library.
- Not replace GSAP with another library.
- Not introduce Three.js just for visual effect.
- Not redesign the global Dock.
- Not redesign the Status Bar.
- Not modify the approved color palette.
- Not change the approved typography.
- Not create a new navigation system.
- Not open external tabs for internal workspace navigation.
- Keep the Hero self-contained and reusable.

---

# 29. Definition of Done

The Hero is complete only when:

- [ ] Manvi Nayak is immediately visible.
- [ ] Role text morphs smoothly.
- [ ] Description is concise.
- [ ] Primary CTA works.
- [ ] Resume CTA works through the intended ManviOS flow.
- [ ] Blueprint is interactive.
- [ ] Blueprint is subtle rather than distracting.
- [ ] Hero entrance animation feels cinematic but fast.
- [ ] Scroll transition feels connected to the next workspace.
- [ ] Dock remains functional.
- [ ] Status Bar remains functional.
- [ ] Mobile layout works.
- [ ] Reduced-motion mode works.
- [ ] No horizontal overflow.
- [ ] No console errors.
- [ ] No unnecessary dependencies were added.
- [ ] Animation remains smooth on normal hardware.
- [ ] Design follows `DESIGN_SYSTEM.md`.

---

# 30. Final Creative Rule

The Hero should make the visitor think:

> **"This isn't just a portfolio. Someone actually engineered this experience."**

The visual complexity should come from **precision, interaction, and motion**, not from throwing more effects onto the screen.

---

# 31. Implementation Prompt Seed

When giving this feature to an AI coding agent, begin with:

```text
Read and follow:

/docs/README.md
/docs/DESIGN_SYSTEM.md
/docs/WIREFRAMES.md
/docs/AI_DEVELOPMENT_RULES.md
/docs/HERO_SPEC.md

Implement ONLY the ManviOS Hero Workspace.

Do not redesign the shell.

Do not add new major features.

Follow HERO_SPEC.md as the implementation contract.

Before coding, inspect the existing shell and identify the
components and animation architecture already in use.

Then implement the Hero incrementally and verify the build.
```

