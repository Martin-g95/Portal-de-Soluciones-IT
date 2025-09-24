## Rebranding — Checklist rápido

- Identidad visual
  - [ ] Reemplazar logos en `src/assets/Identidad Corporativa/`
  - [ ] Favicon `public/favicon.png`
  - [ ] OG image `public/images/og-image.png`
  - [ ] Actualizar `Navbar.tsx` y `Footer.tsx`

- Imágenes del sitio
  - [ ] Sustituir imágenes en `public/images/`
  - [ ] Actualizar referencias en `Home.tsx`, `About.tsx`, `Services.tsx`, `services-tabs.tsx`
  - [ ] Revisar `alt` descriptivos

- Textos (copy)
  - [ ] Home (`Home.tsx`): título, subtítulo, CTA, bullets
  - [ ] About (`About.tsx`): misión/visión/valores
  - [ ] Services (`Services.tsx`, `services-tabs.tsx`): nombres/beneficios/CTA
  - [ ] Contact (`Contact.tsx`, `contact-form.tsx`, `useContactForm.ts`): encabezados, placeholders, mensajes
  - [ ] Navbar/Footer: marca, ítems, claim, enlaces
  - [ ] 404 (`Notfound.tsx`)

- Paleta de colores (Tailwind)
  - [ ] Definir `colors.brand` en `tailwind.config.js`
  - [ ] Reemplazar clases `bg-*`, `text-*`, `border-*`, `ring-*` por `brand-*`
  - [ ] Priorizar Navbar/Footer y CTAs

- Tipografía
  - [ ] Importar fuente en `index.html` o `global.css`
  - [ ] Aplicar a `body` y títulos en `global.css`
  - [ ] Ajustar jerarquía `h1/h2/h3`

- SEO
  - [ ] Actualizar `src/utils/seoData.ts`
  - [ ] Revisar `SEOHead.tsx` (title, description, canonical, og/twitter image)
  - [ ] Definir `VITE_SITE_URL` (producción)

- Entorno y CORS
  - [ ] `VITE_API_URL` (frontend) y `CORS_ORIGIN` (backend)

- QA final
  - [ ] Revisión visual desktop/móvil
  - [ ] Prueba de formulario (Brevo/local)
  - [ ] Navegación y enlaces correctos



