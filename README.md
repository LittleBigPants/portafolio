# Portafolio — Juan Manuel García

Portafolio personal (Full-Stack Developer). Hecho con React y React-Bootstrap.

## Editar contenido

Todo el contenido (datos de contacto, experiencia, proyectos, formación, skills) está en
[`src/data/profile.js`](src/data/profile.js). La fuente es el repositorio `cv` (CV.md).

El CV descargable está en `public/CV-Juan-Manuel-Garcia.pdf`: para actualizarlo, reemplazar ese archivo (la ruta se
configura en `cvPdf`).

## Desarrollo

```bash
npm install
npm start      # http://localhost:3000
npm run build
```

## Deploy

Vercel (preset Create React App). `vercel.json` redirige todas las rutas a `index.html` para que funcione el router.
