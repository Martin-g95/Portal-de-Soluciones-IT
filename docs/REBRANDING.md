## Guía de rebranding (imágenes, textos y paleta)

### Objetivo
Dejar el proyecto con tu identidad visual manteniendo la estructura y el funcionamiento. Esta guía lista TODO lo que debes cambiar (sin modificar nada automáticamente).

---

## Identidad visual (logos y favicon)

### Logos y marca
- Ubicación: `src/assets/Identidad Corporativa/`
- Acciones:
  - Reemplaza los logos por tus archivos (mismos nombres o ajusta imports).
  - Verifica referencias en:
    - `src/components/ui/Navbar.tsx`
    - `src/components/ui/Footer.tsx`

### Favicon
- Ubicación: `public/favicon.png`
- Acción: Sustituye por tu favicon (ideal 512×512 PNG).

### Open Graph/Twitter image
- Recomendado: `public/images/og-image.png`
- Actualiza su ruta en:
  - `src/components/ui/SEOHead.tsx`
  - `src/utils/seoData.ts`

---

## Imágenes del sitio (hero, equipo, servicios)

- Carpeta general: `public/images/`
- Acciones:
  - Reemplaza las imágenes `.webp` por las tuyas (mismo nombre para evitar tocar código) o ajusta rutas donde se usen.
  - Revisa y actualiza imágenes en:
    - `src/components/sections/Home.tsx`
    - `src/components/sections/About.tsx`
    - `src/components/sections/Services.tsx`
    - `src/components/ui/services-tabs.tsx`
- Sugerencias:
  - Mantén formatos y proporciones similares.
  - Añade textos alt descriptivos (ver Accesibilidad).

---

## Textos (copy) por sección

### Home (hero, CTA, ventajas)
- `src/components/sections/Home.tsx`

### Sobre nosotros (misión/visión/valores, equipo)
- `src/components/sections/About.tsx`

### Servicios (tabs, descripciones, beneficios, CTA)
- `src/components/sections/Services.tsx`
- `src/components/ui/services-tabs.tsx`

### Contacto (encabezados, placeholders, CTA, mensajes)
- `src/components/sections/Contact.tsx`
- `src/components/ui/contact-form.tsx`
- `src/hooks/useContactForm.ts` (mensajes de validación/toasts)

### Navegación y pie
- `src/components/ui/Navbar.tsx` (marca/ítems)
- `src/components/ui/Footer.tsx` (claim, enlaces, derechos)

### 404
- `src/components/sections/Notfound.tsx`

Sugerencias de copy:
- Títulos: directos y con beneficios claros.
- CTAs: verbo de acción + beneficio ("Hablar con un experto").
- Mantén consistencia de tono.

---

## Paleta de colores (Tailwind)

### Definir tu paleta
- Archivo: `tailwind.config.js`
- Acción: extiende el tema con `colors.brand` y usa esa marca en componentes.
- Ejemplo (rellena con tus hexcodes):
```js
// tailwind.config.js (ejemplo)
export default {
  // ...
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#3B82F6', // principal
          700: '#2563EB',
          800: '#1D4ED8',
          900: '#1E40AF'
        }
      }
    }
  }
}
```

### Uso en componentes
- Cambia clases como `bg-*`, `text-*`, `border-*`, `ring-*` por `brand-*`.
- Ejemplo:
```tsx
// antes: bg-orange-600 hover:bg-orange-700
className="bg-brand-600 hover:bg-brand-700 text-white"
```

### Dónde tocar primero (alto impacto visual)
- `src/components/ui/Navbar.tsx`
- `src/components/ui/Footer.tsx`
- Botones/CTAs en `Home.tsx`, `contact-form.tsx`, `services-tabs.tsx`

### Búsquedas útiles (para reemplazos)
- `bg-orange`, `text-orange`, `border-orange`, `ring-orange`
- Reemplázalos por la nueva paleta `brand-*`.

---

## Tipografía

### Fuente principal
- `index.html` (Google Fonts) o `src/styles/global.css`
- Añade la fuente y aplica al `body`/encabezados.
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

### Aplicación global
- `src/styles/global.css`:
```css
html, body {
  font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
}
```

### Jerarquía
- Ajusta tamaños/pesos de `h1/h2/h3` y CTAs.

---

## SEO y metadatos

### Datos SEO centralizados
- `src/utils/seoData.ts`: título, descripción, OG/Twitter, keywords.

### Head del sitio
- `src/components/ui/SEOHead.tsx`: `title`, `description`, `canonical`, `og:image`, `twitter:image`.

### Canonical/base URL
- `src/config/env.ts` usa `VITE_SITE_URL`; define en `.env` de Vite para producción.

### `index.html`
- Revisa `<title>`, `meta[name="description"]`, `meta[name="theme-color"]`.

---

## Accesibilidad (rápidas mejoras)

- Imágenes: `alt` significativos en Home/About/Services.
- Formularios: `label` asociados y `aria-*` en `contact-form.tsx`.
- Enfoque: `focus` visible (Tailwind `ring` con contraste).
- Contraste: valida texto sobre fondos con tu paleta (objetivo WCAG AA).

---

## Configuración de entorno (URLs)

### Frontend
- `.env` (Vite) en la raíz:
  - `VITE_API_URL` → URL del backend.
  - `VITE_SITE_URL` → tu dominio para canonical/SEO.

### Backend
- `backend/.env`:
  - `CORS_ORIGIN` → debe coincidir con la URL del frontend.

---

## Rutas e imports a revisar al cambiar imágenes

- Si renombraste archivos en `public/images/`:
  - Actualiza import/ruta en `Home.tsx`, `About.tsx`, `Services.tsx`, `services-tabs.tsx`.
- Si cambiaste logos:
  - Revisa `Navbar.tsx` y `Footer.tsx`.

---

## Microcopys y validaciones

- `src/hooks/useContactForm.ts`: toasts y errores del servidor.
- `src/components/ui/contact-form.tsx`: placeholders/labels/ayudas.
- CTAs coherentes en Home/Services/Contact.

---

## Checklist final (QA)

- Identidad: Logo, favicon, OG image actualizados.
- Colores: Navbar/Footer y CTAs usan `brand-*`.
- Tipografía: fuente aplicada y jerarquía consistente.
- Copy: Home, Services, About, Contact y 404 revisados.
- Imágenes: reemplazadas en `public/images/` y con `alt` correctos.
- SEO: `seoData.ts`, `SEOHead.tsx`, `VITE_SITE_URL` listos.
- Formulario: envía OK (Brevo) y en local (Ethereal si se omite API key).
- CORS: `CORS_ORIGIN` igual a URL del frontend.

---

## Mapa de archivos (referencias clave)

- Identidad/estáticos:
  - `src/assets/Identidad Corporativa/*`
  - `public/favicon.png`
  - `public/images/*`
- Secciones:
  - `src/components/sections/Home.tsx`
  - `src/components/sections/About.tsx`
  - `src/components/sections/Services.tsx`
  - `src/components/sections/Contact.tsx`
  - `src/components/sections/Notfound.tsx`
- UI:
  - `src/components/ui/Navbar.tsx`
  - `src/components/ui/Footer.tsx`
  - `src/components/ui/contact-form.tsx`
  - `src/components/ui/services-tabs.tsx`
- Lógica/formulario:
  - `src/hooks/useContactForm.ts`
- Config y estilos:
  - `tailwind.config.js`
  - `src/styles/global.css`
  - `src/config/env.ts`
  - `src/components/ui/SEOHead.tsx`
  - `src/utils/seoData.ts`

---

## Comandos útiles (desarrollo)

- Frontend:
  - `npm run dev` (en la raíz)
- Backend:
  - `cd backend && npm run dev`
- Pruebas de API:
  - `http://localhost:3001/health`
  - `http://localhost:3001/api/contact/status`

---

## Troubleshooting rápido

- Cambié colores pero no veo cambios:
  - Usa `brand-*` en clases Tailwind y agrega la paleta en `tailwind.config.js`. Reinicia Vite si es necesario.
- Imágenes no cargan:
  - Confirma rutas/archivos en `public/images/` y las referencias en los componentes.
- Canonical incorrecto:
  - Define `VITE_SITE_URL` y verifica `SEOHead.tsx`.
- CORS bloquea el envío:
  - Alinea `CORS_ORIGIN` con la URL actual del frontend.



