# Anila Unnikrishnan — Portfolio

A personal portfolio site for **Anila Unnikrishnan**, a Manual QA & Test Engineer,
built with Next.js (App Router) and Tailwind CSS.

## Project overview

**Role classification:** Manual QA / Test Engineer (support-to-QA track), junior level (~2 years combined QA + technical support experience, currently pursuing an MCA).

**Key strengths surfaced from the resume and LinkedIn profile:**
- Full test lifecycle ownership — test case design, functional/regression/integration testing, defect tracking in Jira, re-testing, and release validation.
- A rare dual vantage point: hands-on customer escalation and support experience (20+ escalations/week, 30+ support cases/week) feeding directly into QA root-cause analysis.
- Working technical fluency (SQL/PostgreSQL, Core Java, Postman) that lets her read logs and data without depending on a developer.

**Design direction:** The site is styled as a QA test report / terminal dashboard — a deliberate choice for the role, using a near-black ink background, a pass/fail green-red-amber status system, a typing terminal hero, CI-style stat badges, and a "coverage report" skills section instead of generic progress bars. Typography pairs Space Grotesk (display) with IBM Plex Mono (data/labels) and IBM Plex Sans (body) to read as structured and technical without being a generic dark-mode template.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com/)
- No external UI libraries, no environment variables, no backend — fully static and deployable anywhere that serves a Next.js app.

## Project structure

```
portfolio-anila-qa/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx           # Assembles all sections
│   └── globals.css        # Tailwind base + custom utilities
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── TerminalTyping.tsx # Client component, animated hero terminal
│   ├── About.tsx
│   ├── Projects.tsx       # Featured work / case studies
│   ├── Experience.tsx     # Timeline of roles
│   ├── Skills.tsx         # Coverage-report style skills section
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
├── package.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
└── tsconfig.json
```

## Local setup

Requires Node.js 18.17 or later.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build a production bundle:

```bash
npm run build
npm run start
```

No environment variables are required.
