// English content. Same shape as profile.js; any change goes to both.
// Source: cv repository (CV-en.md).

import { profile as base } from "./profile";

export const profile = {
  ...base,
  location: "Rosario, Santa Fe, Argentina",
  cvPdf: "/Resume-Juan-Manuel-Garcia.pdf",
  cvFile: "Resume-Juan-Manuel-Garcia.pdf",
  summary:
    "Programming graduate (UTN) and Artificial Intelligence student (UNR). I built a digital health platform end to end, with a web console and a mobile app, and shipped MedMind's editorial CMS to production. I work with TypeScript, Next.js, React Native and Supabase, and with AI tools for development (Claude Code, agents and automated workflows).",
};

export const experience = [
  {
    title: "Full-Stack Developer",
    org: "Digital health platform",
    meta: "Freelance (confidential) · Apr 2026 – Present",
    note: "Team of 2 developers · pre-launch product",
    bullets: [
      "Built end to end a platform that automates treatment follow-up: a web console for practitioners (Next.js) and a mobile app for patients (React Native + Expo).",
      "Implemented the backend on Supabase (PostgreSQL, authentication and serverless functions), with role-based permissions so each practitioner can only access their own patients.",
      "Integrated WhatsApp Business (Meta Cloud API) to send verification codes (OTP) and welcome messages, with message templates versioned as code.",
    ],
    stack: "TypeScript · Next.js · React Native · Expo · Supabase · PostgreSQL · Deno",
  },
  {
    title: "Full-Stack Developer",
    org: "MedMind Linguistic Solutions",
    meta: "Freelance · Mar 2026",
    link: "https://www.medmind.com.ar",
    linkLabel: "medmind.com.ar",
    note: "Team project, 2 developers",
    bullets: [
      "Built the backend and CMS (Strapi + PostgreSQL) that lets the editorial team publish and manage articles with no technical help.",
      "Contributed to the public website (Next.js): CMS integration, multi-language support and SEO.",
      "Containerized the application and deployed it to production with Docker and nginx.",
    ],
    stack: "Next.js · TypeScript · Strapi · Node.js · PostgreSQL · Docker · nginx",
  },
];

export const projects = [
  {
    key: "salud",
    title: "Digital health platform",
    tag: "Experience · freelance client",
    description:
      "A web console for practitioners and a mobile app for patients that automate treatment follow-up. Pre-launch product; confidential client.",
    problem:
      "Practitioners tracked their patients' treatments by hand, over messages and spreadsheets, and lost the thread between one appointment and the next.",
    mine:
      "I built the web console and the mobile app, the backend with role-based permissions so each practitioner only sees their own patients, and the WhatsApp messaging for verification codes and welcome messages.",
    stack: "Next.js · React Native · Expo · Supabase · PostgreSQL · Deno · Meta Cloud API",
  },
  {
    key: "medmind",
    title: "MedMind Linguistic Solutions",
    tag: "Experience · freelance",
    description:
      "Multi-language website for a language services company in the medical sector, with a CMS for its editorial team.",
    problem:
      "The editorial team depended on a developer to publish or correct every article.",
    mine:
      "I built the backend and CMS (Strapi + PostgreSQL), contributed to the public Next.js website and deployed it to production with Docker and nginx. Later I migrated the site to a self-hosted server.",
    stack: "Next.js · TypeScript · Strapi · PostgreSQL · Docker · nginx",
    demoLink: "https://www.medmind.com.ar",
  },
  {
    key: "bigpants",
    title: "Bigpants",
    tag: "Personal project · AI agent",
    description:
      "An autonomous agent that looks for jobs on my behalf: it goes through job boards, filters the openings, fills in the application forms and notifies me on Telegram.",
    problem:
      "Job hunting is repetitive: the same boards every day and the same details in every form. I preferred to understand the process and automate it.",
    mine:
      "I designed and built all of it: a task scheduler, a two-step filter with scoring, parallel applications, a web panel to see what it is doing, and brakes that do not depend on the AI (daily caps, pause, a log of every action).",
    stack: "Claude Code · Python · Playwright · Docker · Telegram",
    cases: [
      {
        title: "Giving it autonomy without losing control",
        problem:
          "An agent that applies in my name can make many mistakes per hour, and I cannot review every step.",
        cause:
          "Rules written for the AI are not enough: if the agent itself watches the limit, one of its mistakes also skips the limit.",
        fix:
          "I put the brakes outside the AI: a plain scheduler decides when it runs, daily and per-company caps are checked in code, and a daily summary shows everything the agent changed on its own.",
        learned:
          "An agent's autonomy is designed with limits the agent cannot modify.",
      },
    ],
  },
  {
    key: "servidor",
    title: "Self-hosted server",
    tag: "Personal project · infrastructure",
    description:
      "A repurposed PC running Debian that hosts my services and projects.",
    problem:
      "I needed a place of my own to deploy projects without paying for a cloud service for each one.",
    mine:
      "I installed and administer the server: containerized services, scheduled backups, remote access over a private network, websites published through a tunnel, and automatic power on and off.",
    stack: "Debian · Docker · nginx · Tailscale · Cloudflare Tunnel · Bash",
  },
  {
    key: "goalplanner",
    title: "Goal Planner",
    tag: "Project · team of 2",
    description:
      "Web app that connects yearly goals with daily tasks and habits on a calendar, with progress tracking.",
    problem:
      "Long-term goals get lost in the day-to-day unless they are tied to concrete tasks on the calendar.",
    mine:
      "I built the weekly calendar view, task and habit creation and editing, Google sign-in, email reminders and progress metrics.",
    stack: "Next.js · TypeScript · Supabase · Tailwind · Radix UI",
    demoLink: "https://www.goalplanner.com.ar",
  },
  {
    key: "pyrux",
    title: "Development studio website",
    tag: "Project",
    description:
      "Multi-language website (Spanish/English) with animations, a projects page and a pricing page.",
    problem:
      "The studio needed to present its services and pricing to Spanish- and English-speaking clients.",
    mine: "I designed and built it from scratch.",
    stack: "Next.js · TypeScript · Tailwind · Framer Motion",
    demoLink: "https://www.pyrux.com.ar",
  },
];

export const education = [
  { title: "University Technician in Programming", detail: "UTN · 2024 – 2026" },
  {
    title: "University Technician Degree in Artificial Intelligence",
    detail: "UNR · In progress (2nd year)",
  },
  {
    title: "ICPC Argentina Training Camp",
    detail: "Competitive programming · 2025",
  },
];

export const skills = [
  { label: "Languages", items: "TypeScript, JavaScript, SQL, Python" },
  { label: "Frontend", items: "React, Next.js, Tailwind CSS, Framer Motion" },
  { label: "Mobile", items: "React Native, Expo" },
  { label: "Backend & data", items: "Supabase, PostgreSQL, Node.js, Strapi, Deno" },
  { label: "Testing", items: "Jest, Playwright" },
  { label: "Tools", items: "Git, GitHub, Docker, nginx, Linux, Figma" },
  { label: "AI for development", items: "Claude Code, GitHub Copilot" },
];

export const languages = [
  {
    title: "English — Intermediate",
    detail: "Bilingual Assistant, Spanish–English, Instituto Santa María Josefa Rossello",
  },
  { title: "Spanish — Native" },
];

export const cvProjects = [
  {
    title: "Development studio website",
    link: "https://www.pyrux.com.ar",
    linkLabel: "pyrux.com.ar",
    description:
      "Designed and built from scratch a multi-language website (Spanish/English) with animations, a projects page and a pricing page.",
    stack: "Next.js · TypeScript · Tailwind · Framer Motion",
  },
  {
    title: "Goal Planner",
    link: "https://www.goalplanner.com.ar",
    linkLabel: "goalplanner.com.ar",
    subtitle: "Goal-planning web app · team project of 2",
    description:
      "Web app that connects yearly goals with daily tasks and habits on a calendar, with progress tracking. I built the weekly calendar view, task and habit creation and editing, Google sign-in, email reminders and progress metrics.",
    stack: "Next.js · TypeScript · Supabase · Tailwind · Radix UI",
  },
];
