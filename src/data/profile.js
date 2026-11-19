// Contenido del portafolio en español. Fuente: repositorio cv (CV.md).
// La versión en inglés está en profile.en.js: todo cambio va a los dos.

export const profile = {
  name: "Juan Manuel García",
  shortName: "JMG",
  role: "Full-Stack Developer",
  location: "Rosario, Santa Fe, Argentina",
  email: "juanmanuel_garcia98@hotmail.com",
  phone: "(+54) 341 355-0070",
  whatsapp: "https://wa.me/5493413550070",
  github: "https://github.com/LittleBigPants",
  githubUser: "LittleBigPants",
  linkedin: "https://www.linkedin.com/in/juan-manuel-garc%C3%ADa-99952b270",
  cvPdf: "/CV-Juan-Manuel-Garcia.pdf",
  cvFile: "CV-Juan-Manuel-Garcia.pdf",
  summary:
    "Técnico Universitario en Programación (UTN) y estudiante de Inteligencia Artificial (UNR). Construí de punta a punta una plataforma de salud digital, con consola web y app móvil, y llevé a producción el CMS editorial de MedMind. Trabajo con TypeScript, Next.js, React Native y Supabase, y con herramientas de IA para desarrollo (Claude Code, agentes y flujos automatizados).",
};

export const experience = [
  {
    title: "Full-Stack Developer",
    org: "Plataforma de salud digital",
    meta: "Freelance (confidencial) · abr 2026 – presente",
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

// Cada proyecto contesta lo que piden los formularios: qué problema resolvía,
// qué hice yo y con qué herramientas. `cases` son problemas reales, contados
// como en una entrevista; aparecen en la página de detalle (/project/<key>).
export const projects = [
  {
    key: "salud",
    title: "Plataforma de salud digital",
    tag: "Experiencia · cliente freelance",
    description:
      "Consola web para profesionales y app móvil para pacientes que automatizan el seguimiento de tratamientos. Producto en pre-lanzamiento; cliente confidencial.",
    problem:
      "Los profesionales seguían los tratamientos de sus pacientes a mano, por mensajes y planillas, y perdían el hilo entre una consulta y la siguiente.",
    mine:
      "Desarrollé la consola web y la app móvil, el backend con permisos por rol para que cada profesional vea solo a sus pacientes, y la mensajería por WhatsApp para los códigos de verificación y la bienvenida.",
    stack: "Next.js · React Native · Expo · Supabase · PostgreSQL · Deno · Meta Cloud API",
  },
  {
    key: "medmind",
    title: "MedMind Linguistic Solutions",
    tag: "Experiencia · freelance",
    description:
      "Sitio multi-idioma de una empresa de servicios lingüísticos para el sector médico, con un CMS para su equipo editorial.",
    problem:
      "El equipo editorial dependía de un desarrollador para publicar o corregir cada artículo.",
    mine:
      "Desarrollé el backend y el CMS (Strapi + PostgreSQL), colaboré en el sitio público en Next.js y lo desplegué en producción con Docker y nginx. Más adelante migré el sitio a un servidor propio.",
    stack: "Next.js · TypeScript · Strapi · PostgreSQL · Docker · nginx",
    demoLink: "https://www.medmind.com.ar",
  },
  {
    key: "bigpants",
    title: "Bigpants",
    tag: "Proyecto personal · agente de IA",
    description:
      "Agente autónomo que busca trabajo por mí: recorre portales, filtra los puestos, completa los formularios de postulación y me avisa por Telegram.",
    problem:
      "Buscar trabajo es repetitivo: los mismos portales todos los días y los mismos datos en cada formulario. Preferí entender el proceso y automatizarlo.",
    mine:
      "Lo diseñé y lo construí entero: un programador de tareas, un filtro en dos pasos con puntaje, postulaciones en paralelo, un panel web para ver qué hace y frenos que no dependen de la IA (topes diarios, pausa, registro de cada acción).",
    stack: "Claude Code · Python · Playwright · Docker · Telegram",
  },
  {
    key: "servidor",
    title: "Servidor propio",
    tag: "Proyecto personal · infraestructura",
    description:
      "Una PC reutilizada con Debian donde corren mis servicios y proyectos.",
    problem:
      "Necesitaba un lugar propio para desplegar proyectos sin pagar un servicio en la nube por cada uno.",
    mine:
      "Instalé y administro el servidor: servicios en contenedores, copias de seguridad programadas, acceso remoto por red privada, publicación de sitios por túnel y encendido y apagado automáticos.",
    stack: "Debian · Docker · nginx · Tailscale · Cloudflare Tunnel · Bash",
  },
  {
    key: "goalplanner",
    title: "Goal Planner",
    tag: "Proyecto · equipo de 2",
    description:
      "App web que conecta objetivos anuales con tareas y hábitos diarios en un calendario, con seguimiento de progreso.",
    problem:
      "Los objetivos de largo plazo se pierden en el día a día si no están atados a tareas concretas en el calendario.",
    mine:
      "Desarrollé la vista semanal del calendario, la creación y edición de tareas y hábitos, el login con Google, los recordatorios por email y las métricas de progreso.",
    stack: "Next.js · TypeScript · Supabase · Tailwind · Radix UI",
    demoLink: "https://www.goalplanner.com.ar",
  },
  {
    key: "pyrux",
    title: "Sitio web de estudio de desarrollo",
    tag: "Proyecto",
    description:
      "Sitio multi-idioma (español/inglés) con animaciones y páginas de proyectos y precios.",
    problem:
      "El estudio necesitaba presentar sus servicios y precios a clientes de habla hispana e inglesa.",
    mine: "Lo diseñé y lo desarrollé desde cero.",
    stack: "Next.js · TypeScript · Tailwind · Framer Motion",
    demoLink: "https://www.pyrux.com.ar",
  },
];

export const education = [
  { title: "Técnico Universitario en Programación", detail: "UTN · 2024 – 2026" },
  {
    title: "Tecnicatura Universitaria en Inteligencia Artificial",
    detail: "UNR · En curso (2.º año)",
  },
  {
    title: "Campamento de entrenamiento ICPC Argentina",
    detail: "Programación competitiva · 2025",
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
    title: "Inglés — Intermedio",
    detail: "Auxiliar Bilingüe Español-Inglés, Instituto Santa María Josefa Rossello",
  },
  { title: "Español — Nativo" },
];

// Proyectos tal como aparecen en el CV.
export const cvProjects = [
  {
    title: "Sitio web de estudio de desarrollo",
    link: "https://www.pyrux.com.ar",
    linkLabel: "pyrux.com.ar",
    description:
      "Diseñé y desarrollé desde cero un sitio multi-idioma (español/inglés) con animaciones y páginas de proyectos y precios.",
    stack: "Next.js · TypeScript · Tailwind · Framer Motion",
  },
  {
    title: "Goal Planner",
    link: "https://www.goalplanner.com.ar",
    linkLabel: "goalplanner.com.ar",
    subtitle: "App web de planificación de objetivos · proyecto en equipo de 2",
    description:
      "Aplicación que conecta objetivos anuales con tareas y hábitos diarios en un calendario, con seguimiento de progreso. Desarrollé la vista semanal del calendario, la creación y edición de tareas y hábitos, el login con Google, los recordatorios por email y las métricas de progreso.",
    stack: "Next.js · TypeScript · Supabase · Tailwind · Radix UI",
  },
];
