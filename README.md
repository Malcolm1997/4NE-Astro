# Four Natural Energy (4NE)

Este README está disponible en **español** e **inglés**. La versión en inglés se encuentra al final del documento.

Este repositorio contiene el código del sitio web corporativo de **Four Natural Energy**. El proyecto está construido con [Astro](https://astro.build/) y presenta los servicios y proyectos de la empresa en el sector de **Oil & Gas** y **Energías Renovables**.

## Estructura del proyecto

```
/
├── public/                # Archivos estáticos
├── src/
│   ├── assets/            # Imágenes y archivos JSON con contenidos
│   ├── components/        # Componentes Astro reutilizables
│   ├── layouts/           # Plantillas base
│   ├── pages/             # Páginas del sitio
│   ├── scripts/           # Funciones en JavaScript para animaciones y navegación
│   └── styles/            # Hojas de estilo
├── astro.config.mjs       # Configuración de Astro
├── package.json           # Dependencias y scripts de npm
└── tsconfig.json          # Configuración de TypeScript
```

## Requisitos

- Node.js y npm instalados en el sistema.

## Instalación

1. Clona este repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Esto abrirá el sitio en `http://localhost:4321`.

## Scripts disponibles

| Comando           | Descripción                                     |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo                |
| `npm run build`   | Genera la versión estática en la carpeta `dist` |
| `npm run preview` | Sirve localmente la versión construida          |

## Despliegue

El sitio se genera de forma estática por lo que puede desplegarse en cualquier hosting que sirva archivos estáticos (por ejemplo GitHub Pages). Al ejecutar `npm run build` se crea la carpeta `dist/` con todos los archivos listos para producción.

## Licencia

Todos los contenidos son propiedad de Four Natural Energy.

---

## English version

This repository contains the source code for **Four Natural Energy**'s corporate website. The project is built with [Astro](https://astro.build/) and showcases the company's services and projects in the **Oil & Gas** and **Renewable Energy** sectors.

### Project structure

```
/
├── public/                # Static files
├── src/
│   ├── assets/            # Images and JSON content
│   ├── components/        # Reusable Astro components
│   ├── layouts/           # Base templates
│   ├── pages/             # Site pages
│   ├── scripts/           # JavaScript functions for animations and navigation
│   └── styles/            # Stylesheets
├── astro.config.mjs       # Astro configuration
├── package.json           # npm dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

### Requirements

- Node.js and npm installed on your machine.

### Installation

1. Clone this repository.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   This will open the site at `http://localhost:4321`.

### Available scripts

| Command           | Description                                    |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Starts the development server                  |
| `npm run build`   | Generates the static version in the `dist` folder |
| `npm run preview` | Serves the built version locally               |

### Deployment

The site is generated statically so it can be hosted on any static file server (for example GitHub Pages). Running `npm run build` creates the `dist/` folder with all files ready for production.

### License

All contents are property of Four Natural Energy.
