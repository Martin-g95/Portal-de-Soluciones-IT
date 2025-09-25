# 🚀 InfraCore - Landing Page de Infraestructura Digital

<div align="center">

![InfraCore Logo](public/favicon.png)

**Landing page moderna y profesional para servicios de infraestructura digital**

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)

[🌐 Demo en Vivo](https://infracore-web.vercel.app) | [📧 Contacto](mailto:contacto@infracore.com.ar)

</div>

---

## 🎯 ¿Qué es InfraCore?

**InfraCore** es una landing page moderna y completamente funcional para una empresa de infraestructura digital. Una solución completa que combina un frontend React con TypeScript, un backend Node.js robusto, y está desplegado en la nube con funcionalidades completas de SEO, formularios de contacto y envío de emails.

### ✨ Características Destacadas

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- 📱 **Totalmente Responsivo**: Optimizado para todos los dispositivos
- ⚡ **Rendimiento Optimizado**: Carga rápida y experiencia fluida
- 🔍 **SEO Optimizado**: Visible en motores de búsqueda
- 📧 **Formulario Funcional**: Envío de emails reales
- 🛡️ **Seguridad**: Validación de datos y protección CORS
- 🚀 **Despliegue Automático**: CI/CD con GitHub, Vercel y Render

---

## 🏗️ Arquitectura del Proyecto

```
infraCore-landing/
├── 📁 frontend/ (Vercel)
│   ├── React + TypeScript
│   ├── Tailwind CSS
│   ├── React Router
│   └── Componentes modulares
├── 📁 backend/ (Render)
│   ├── Node.js + Express
│   ├── Brevo API (emails)
│   ├── Middleware de seguridad
│   └── Validación de datos
└── 📁 deployment/
    ├── Vercel (frontend)
    ├── Render (backend)
    └── Variables de entorno
```

---

## 🛠️ Stack Tecnológico

### 🎨 Frontend
- **React 19.1.1** - Biblioteca de UI moderna
- **TypeScript 5.8.3** - Tipado estático para mayor robustez
- **Vite 7.1.2** - Build tool ultra-rápido
- **Tailwind CSS 3.4.0** - Framework de CSS utility-first
- **React Router DOM 7.8.2** - Enrutamiento SPA
- **Lucide React 0.541.0** - Iconos modernos
- **Animate.css 4.1.1** - Animaciones fluidas

### ⚙️ Backend
- **Node.js 18+** - Runtime de JavaScript
- **Express 4.18.2** - Framework web minimalista
- **Nodemailer 6.9.7** - Envío de emails robusto
- **Brevo API 3.0.1** - Servicio de emails profesional
- **CORS 2.8.5** - Política de origen cruzado
- **Helmet 7.1.0** - Seguridad HTTP
- **Express Rate Limit 7.1.5** - Limitación de requests

### 🔧 Herramientas de Desarrollo
- **ESLint 9.33.0** - Linter de código
- **PostCSS 8.5.6** - Procesador de CSS
- **Autoprefixer 10.4.21** - Prefijos CSS automáticos
- **Jest 29.7.0** - Testing framework

### ☁️ Despliegue y DevOps
- **Vercel** - Hosting del frontend con CDN global
- **Render** - Hosting del backend con auto-deploy
- **GitHub** - Control de versiones
- **GitHub Actions** - CI/CD automático

---

## 📁 Estructura del Proyecto

```
infraCore-landing/
├── 📁 public/
│   ├── favicon.png
│   └── images/           # Imágenes optimizadas
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 sections/  # Componentes de secciones (Home, Services, etc.)
│   │   └── 📁 ui/        # Componentes reutilizables (Navbar, Footer, etc.)
│   ├── 📁 hooks/         # Custom hooks personalizados
│   ├── 📁 styles/        # Estilos globales y CSS
│   ├── 📁 utils/         # Utilidades y helpers
│   └── 📁 types/         # Tipos TypeScript
├── 📁 backend/
│   ├── 📁 src/
│   │   ├── 📁 middleware/  # Middleware de Express
│   │   ├── 📁 routes/      # Rutas de la API
│   │   └── 📁 services/    # Servicios (email, etc.)
│   └── package.json
├── 📄 package.json
├── 📄 tailwind.config.js
├── 📄 vite.config.ts
└── 📄 README.md
```

---

## 🌟 Características Técnicas

### 🎨 Frontend
- ⚡ **Vite**: Build tool ultra-rápido con HMR
- 🎨 **Tailwind CSS**: Utility-first CSS con diseño responsivo
- 📱 **Mobile-First**: Diseño optimizado para móviles
- 🔄 **React Router**: Navegación SPA fluida
- 🎭 **Animaciones**: Transiciones suaves y profesionales
- 🔍 **SEO**: Meta tags optimizados y estructura semántica

### ⚙️ Backend
- 🚀 **Express**: Framework web minimalista y eficiente
- 📧 **Nodemailer**: Envío de emails robusto y confiable
- 🛡️ **Middleware**: Seguridad y validación de datos
- 📝 **Logging**: Morgan para logs HTTP detallados
- 🔒 **Rate Limiting**: Protección contra abuso y spam
- 🌐 **CORS**: Configuración segura de orígenes cruzados

---

## 🔍 SEO y Optimización

### 📊 Meta Tags
- Títulos optimizados para cada página
- Descripciones meta personalizadas
- Open Graph para redes sociales
- Twitter Cards
- Schema.org para datos estructurados

### ⚡ Performance
- Lazy loading de imágenes
- Compresión de assets
- Minificación de CSS/JS
- CDN global (Vercel)
- Core Web Vitals optimizados

### ♿ Accesibilidad
- Textos descriptivos en enlaces
- Alt text en imágenes
- Navegación por teclado
- Contraste de colores optimizado
- Estructura semántica HTML

---

## 🛡️ Seguridad

- **Helmet.js**: Headers de seguridad HTTP
- **Rate Limiting**: Protección contra spam
- **CORS**: Configuración de orígenes permitidos
- **Validación**: Sanitización de inputs
- **HTTPS**: Certificados SSL automáticos
- **Environment Variables**: Configuración segura

---

## 📊 URLs de Producción

- **🌐 Frontend**: https://infracore-web.vercel.app
- **⚙️ Backend**: https://infracore-backend.onrender.com
- **❤️ Health Check**: https://infracore-backend.onrender.com/health

---

## 🎨 Diseño y UX

### 🎯 Principios de Diseño
- **Minimalismo**: Interfaz limpia y enfocada
- **Consistencia**: Patrones de diseño uniformes
- **Accesibilidad**: Diseño inclusivo para todos los usuarios
- **Performance**: Experiencia rápida y fluida

### 🎨 Paleta de Colores
- **Primario**: Azul (#3B82F6) - Confianza y profesionalismo
- **Secundario**: Cyan (#06B6D4) - Modernidad y tecnología
- **Neutros**: Slate (#0F172A) - Elegancia y sofisticación

### 📱 Responsive Design
- **Mobile First**: Optimizado para dispositivos móviles
- **Breakpoints**: Adaptación fluida a todos los tamaños
- **Touch Friendly**: Elementos táctiles optimizados

---

## 📧 Integración de Emails

El proyecto utiliza **Brevo** (anteriormente Sendinblue) para el envío de emails:

- ✅ **API Key**: Configuración segura en variables de entorno
- ✅ **Templates**: Emails profesionales y personalizados
- ✅ **Rate Limiting**: 300 emails/día en plan gratuito
- ✅ **Tracking**: Monitoreo de entregas y aperturas

---

## 🤝 Contribución

Este proyecto está abierto a contribuciones. Si tienes ideas para mejoras o encuentras algún problema, no dudes en:

1. Abrir un issue
2. Proponer mejoras
3. Sugerir nuevas funcionalidades

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 👨‍💻 Autor

**InfraCore Team**
- 📧 Email: contacto@infracore.com.ar
- 💼 LinkedIn: [InfraCore](https://www.linkedin.com)
- 🐙 GitHub: [@tu-usuario](https://github.com/tu-usuario)

---

## 🙏 Agradecimientos

- [React](https://reactjs.org/) - Biblioteca de UI
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [Vercel](https://vercel.com/) - Hosting del frontend
- [Render](https://render.com/) - Hosting del backend
- [Brevo](https://www.brevo.com/) - Servicio de emails

---

<div align="center">

**⭐ Si te gusta este proyecto, ¡dale una estrella! ⭐**

[![GitHub stars](https://img.shields.io/github/stars/tu-usuario/infracore-landing?style=social)](https://github.com/tu-usuario/infracore-landing)

</div>