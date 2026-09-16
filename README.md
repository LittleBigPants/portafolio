# Portafolio — Juan Manuel García

Portafolio personal (Full-Stack Developer). Hecho con React y React-Bootstrap, basado en el template de
[Soumyajit Behera](https://github.com/soumyajit4419/Portfolio).

## Editar contenido

Todo el contenido (datos de contacto, experiencia, proyectos, formación, skills) está en
[`src/data/profile.js`](src/data/profile.js). La fuente es el repositorio `cv` (CV.md).

Para habilitar la descarga del CV en PDF: copiar el archivo a `public/` y poner su ruta en `cvPdf`
(por ejemplo `"/CV-Juan-Manuel-Garcia.pdf"`).

## Desarrollo

```bash
npm install
npm start      # http://localhost:3000
npm run build
```

## Deploy

Vercel (preset Create React App). `vercel.json` redirige todas las rutas a `index.html` para que funcione el router.
