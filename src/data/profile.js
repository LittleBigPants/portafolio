// Contenido del portafolio. Fuente: repositorio cv (CV.md).
// Para agregar el CV en PDF: copialo a public/ y poné su nombre en `cvPdf` (ej. "/CV-Juan-Manuel-Garcia.pdf").

export const profile = {
  name: "Juan Manuel García",
  shortName: "JMG",
  role: "Full-Stack Developer",
  location: "Rosario, Santa Fe, Argentina",
  email: "juanmanuel_garcia98@hotmail.com",
  phone: "+54 341 355-0070",
  phoneHref: "tel:+543413550070",
  github: "https://github.com/LittleBigPants",
  githubUser: "LittleBigPants",
  linkedin: "https://www.linkedin.com/in/juanmanuel-garcia-99952b270",
  cvPdf: null,
  summary:
    "Desarrollador Full-Stack con experiencia construyendo productos completos para clientes: aplicaciones web con Next.js, apps móviles con React Native y backends en Supabase/PostgreSQL, con integraciones como la API de WhatsApp de Meta. Trabajo con herramientas de IA para desarrollo (Claude Code, agentes y flujos automatizados) para entregar más rápido sin resignar calidad. Técnico en Programación (UTN) y estudiante de Inteligencia Artificial (UNR).",
};

export const experience = [
  {
    title: "Full-Stack Developer",
    org: "Plataforma de salud digital",
    meta: "Cliente freelance (confidencial) · abr 2026 – presente",
    note: "Equipo de 2 desarrolladores · producto en pre-lanzamiento",
    bullets: [
      "Desarrollé de punta a punta una plataforma que automatiza el seguimiento de tratamientos: consola web para profesionales (Next.js) y app móvil para pacientes (React Native + Expo).",
      "Implementé el backend en Supabase (PostgreSQL, autenticación y funciones serverless), con permisos por rol para que cada profesional acceda solo a sus pacientes.",
      "Integré WhatsApp Business (Meta Cloud API) para el envío de códigos de verificación (OTP) y mensajes de bienvenida, con templates versionados como código.",
    ],
    stack: "TypeScript · Next.js · React Native · Expo · Supabase · PostgreSQL · Deno",
  },
  {
    title: "Full-Stack Developer",
    org: "MedMind Linguistic Solutions",
    meta: "Freelance · mar 2026",
    link: "https://www.medmind.com.ar",
    linkLabel: "medmind.com.ar",
    note: "Proyecto en equipo de 2 desarrolladores",
    bullets: [
      "Desarrollé el backend y el CMS (Strapi + PostgreSQL) que le permite al equipo editorial publicar y gestionar artículos sin intervención técnica.",
      "Colaboré en el sitio público (Next.js): integración con el CMS, multi-idioma y SEO.",
      "Contenericé y desplegué la aplicación en producción con Docker y nginx.",
    ],
    stack: "Next.js · TypeScript · Strapi · Node.js · PostgreSQL · Docker · nginx",
  },
];

export const projects = [
  {
    key: "salud",
    title: "Plataforma de salud digital",
    tag: "Experiencia · cliente freelance",
    description:
      "Consola web para profesionales y app móvil para pacientes que automatizan el seguimiento de tratamientos. Backend en Supabase con permisos por rol y mensajería por WhatsApp (Meta Cloud API). Producto en pre-lanzamiento; cliente confidencial.",
    stack: "Next.js · React Native · Expo · Supabase · Deno",
  },
  {
    key: "medmind",
    title: "MedMind Linguistic Solutions",
    tag: "Experiencia · freelance",
    description:
      "Backend y CMS (Strapi + PostgreSQL) para que el equipo editorial publique artículos sin intervención técnica; colaboración en el sitio público multi-idioma en Next.js y deploy con Docker y nginx.",
    stack: "Next.js · Strapi · PostgreSQL · Docker · nginx",
    demoLink: "https://www.medmind.com.ar",
  },
  {
    key: "goalplanner",
    title: "Goal Planner",
    tag: "Proyecto · equipo de 2",
    description:
      "App web que conecta objetivos anuales con tareas y hábitos diarios en un calendario, con seguimiento de progreso. Desarrollé la vista semanal del calendario, la creación y edición de tareas y hábitos, el login con Google, los recordatorios por email y las métricas de progreso.",
    stack: "Next.js · TypeScript · Supabase · Tailwind · Radix UI",
    demoLink: "https://www.goalplanner.com.ar",
  },
  {
    key: "pyrux",
    title: "Sitio web de estudio de desarrollo",
    tag: "Proyecto",
    description:
      "Diseñé y desarrollé desde cero un sitio multi-idioma (español/inglés) con animaciones y páginas de proyectos y precios.",
    stack: "Next.js · TypeScript · Tailwind · Framer Motion",
    demoLink: "https://www.pyrux.com.ar",
  },
];

export const education = [
  {
    title: "Técnico Universitario en Programación",
    org: "Universidad Tecnológica Nacional (UTN)",
    date: "2024 – 2026",
  },
  {
    title: "Tecnicatura Universitaria en Inteligencia Artificial",
    org: "Universidad Nacional de Rosario (UNR)",
    date: "En curso (2.º año)",
  },
  {
    title: "Campamento de Programación Competitiva",
    org: "ICPC Argentina",
    date: "2025",
  },
];

export const skills = [
  { label: "Lenguajes", items: "TypeScript, JavaScript, SQL, Python" },
  { label: "Frontend", items: "React, Next.js, Tailwind CSS, Framer Motion" },
  { label: "Mobile", items: "React Native, Expo" },
  { label: "Backend y datos", items: "Supabase, PostgreSQL, Node.js, Strapi, Deno" },
  { label: "Testing", items: "Jest, Playwright" },
  { label: "Herramientas", items: "Git, GitHub, Docker, nginx, Linux, Figma" },
  { label: "IA para desarrollo", items: "Claude Code, GitHub Copilot" },
];

export const languages = [
  {
    label: "Inglés",
    items: "Intermedio · Auxiliar Bilingüe Español-Inglés (Instituto Santa María Josefa Rossello)",
  },
  { label: "Español", items: "Nativo" },
];
