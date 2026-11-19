import React, { createContext, useContext, useEffect, useState } from "react";
import * as es from "./data/profile";
import * as en from "./data/profile.en";

// Textos de la interfaz. El contenido (proyectos, experiencia) está en data/.
const ui = {
  es: {
    nav: { home: "Inicio", about: "Sobre mí", projects: "Proyectos", cv: "CV", other: "English" },
    type: ["Full-Stack Developer", "Next.js · React Native", "Supabase · PostgreSQL", "Desarrollo con IA"],
    home: { hi: "¡Hola!", iam: "Soy", contact: "Contacto", writeA: "No dudes en", writeB: "escribirme", alt: "ilustración" },
    intro: {
      titleA: "DÉJAME", titleB: "PRESENTARME",
      p1a: "Soy Técnico Universitario en Programación (", p1b: ") y estudio Inteligencia Artificial en la ",
      p1c: ". Construyo productos completos para clientes: desde la base de datos hasta la app que usa la gente.",
      p2a: "Trabajo con", p2b: "en el frontend y mobile, y con", p2c: "en el backend.",
      p3a: "Integro servicios como la", p3b: "API de WhatsApp de Meta", p3c: "y uso", p3d: "herramientas de IA para desarrollo",
      p3e: "(Claude Code, agentes y flujos automatizados) para entregar más rápido sin resignar calidad.",
    },
    about: {
      whoA: "¿Quién", whoB: "soy", whoC: "?", hello: "¡Hola! Soy", from: ", de",
      iam: "Soy", degree: "Técnico Universitario en Programación (UTN)", study: "y estudio la",
      ai: "Tecnicatura en Inteligencia Artificial (UNR)", workAs: "Trabajo como", role: "Full-Stack Developer freelance",
      workRest: ", construyendo aplicaciones web, apps móviles y backends para clientes.",
      defines: "Algunas cosas que me definen:",
      items: ["Programación competitiva (ICPC Argentina 2025) 🏆", "Desarrollo asistido por IA 🤖", "Inglés intermedio · Auxiliar Bilingüe 🌍"],
      skillsA: "Skills", skillsB: "profesionales", toolsA: "Herramientas", toolsB: "que uso", daysA: "Días que", daysB: "programo",
    },
    projects: {
      headA: "Mis", headB: "trabajos", sub: "Algunos productos y sitios en los que trabajé recientemente.",
      problem: "Problema que resolvía.", mine: "Qué hice yo.", cases: "Ver casos resueltos", site: "Ver sitio",
      confidential: "Cliente confidencial", casesA: "Casos", casesB: "resueltos", all: "Todos los proyectos",
      parts: { problem: "Qué pasaba", cause: "Cómo encontré la causa", fix: "Cómo lo resolví", learned: "Qué aprendí" },
    },
    cv: { download: "Descargar CV", profile: "Perfil", experience: "Experiencia laboral", projects: "Proyectos", education: "Formación", skills: "Skills", languages: "Idiomas" },
    footer: "Desarrollado por",
    title: "Juan Manuel García | Full-Stack Developer",
  },
  en: {
    nav: { home: "Home", about: "About", projects: "Projects", cv: "Resume", other: "Español" },
    type: ["Full-Stack Developer", "Next.js · React Native", "Supabase · PostgreSQL", "AI-assisted development"],
    home: { hi: "Hi there!", iam: "I'm", contact: "Contact", writeA: "Feel free to", writeB: "reach out", alt: "illustration" },
    intro: {
      titleA: "LET ME", titleB: "INTRODUCE MYSELF",
      p1a: "I'm a Programming graduate (", p1b: ") and I study Artificial Intelligence at ",
      p1c: ". I build complete products for clients: from the database to the app people use.",
      p2a: "I work with", p2b: "on the frontend and mobile, and with", p2c: "on the backend.",
      p3a: "I integrate services such as the", p3b: "WhatsApp API from Meta", p3c: "and use", p3d: "AI tools for development",
      p3e: "(Claude Code, agents and automated workflows) to deliver faster without giving up quality.",
    },
    about: {
      whoA: "Who", whoB: "am I", whoC: "?", hello: "Hi! I'm", from: ", from",
      iam: "I hold a", degree: "University Technician degree in Programming (UTN)", study: "and I'm studying a",
      ai: "degree in Artificial Intelligence (UNR)", workAs: "I work as a", role: "freelance Full-Stack Developer",
      workRest: ", building web applications, mobile apps and backends for clients.",
      defines: "A few things about me:",
      items: ["Competitive programming (ICPC Argentina 2025) 🏆", "AI-assisted development 🤖", "Intermediate English · Bilingual Assistant 🌍"],
      skillsA: "Professional", skillsB: "skills", toolsA: "Tools", toolsB: "I use", daysA: "Days I", daysB: "code",
    },
    projects: {
      headA: "My", headB: "work", sub: "Some products and websites I worked on recently.",
      problem: "Problem it solved.", mine: "What I did.", cases: "See solved cases", site: "Visit site",
      confidential: "Confidential client", casesA: "Solved", casesB: "cases", all: "All projects",
      parts: { problem: "What was happening", cause: "How I found the cause", fix: "How I fixed it", learned: "What I learned" },
    },
    cv: { download: "Download resume", profile: "Profile", experience: "Experience", projects: "Projects", education: "Education", skills: "Skills", languages: "Languages" },
    footer: "Built by",
    title: "Juan Manuel García | Full-Stack Developer",
  },
};

const data = { es, en };
const LangContext = createContext({ lang: "es", setLang: () => {} });

// Orden: ?lang= en la dirección, lo elegido antes, el idioma del navegador.
function initialLang() {
  try {
    const q = new URLSearchParams(window.location.search).get("lang");
    if (q === "es" || q === "en") return q;
    const saved = window.localStorage.getItem("lang");
    if (saved === "es" || saved === "en") return saved;
  } catch (e) {}
  return (navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en";
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = ui[lang].title;
  }, [lang]);
  const setLang = (l) => {
    try {
      window.localStorage.setItem("lang", l);
    } catch (e) {}
    setLangState(l);
  };
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

// t: textos de la interfaz; el resto, el contenido en el idioma elegido.
export function useLang() {
  const { lang, setLang } = useContext(LangContext);
  return { lang, setLang, t: ui[lang], ...data[lang] };
}
