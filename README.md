# Four Natural Energy (4NE)

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
