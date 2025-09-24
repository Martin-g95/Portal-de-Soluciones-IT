// Datos SEO específicos por página

export const seoData = {
  home: {
    title: "InfraCore - Infraestructura Digital Especializada | Servicios de Infraestructura Web",
    description: "Especialistas en infraestructura digital con +10 años de experiencia. Construimos, optimizamos y mantenemos la base tecnológica que impulsa tu presencia online.",
    keywords: "infraestructura digital, servicios web, infraestructura tecnológica, migración cloud, soporte técnico, auditoría sistemas, seguridad digital, InfraCore",
    ogTitle: "InfraCore - Infraestructura Digital Especializada",
    ogDescription: "Especialistas en infraestructura digital con +10 años de experiencia. Construimos la base tecnológica que impulsa tu presencia online.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "InfraCore",
      "alternateName": "Infra Core",
      "description": "Especialistas en infraestructura digital con más de 10 años de experiencia. Construimos, optimizamos y mantenemos la base tecnológica que impulsa tu presencia online",
      "url": "PLACEHOLDER_DOMAIN",
      "logo": "PLACEHOLDER_DOMAIN/favicon.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "PLACEHOLDER_PHONE",
        "contactType": "customer service",
        "availableLanguage": ["Spanish", "English"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "PLACEHOLDER_ADDRESS",
        "addressLocality": "PLACEHOLDER_CITY",
        "addressRegion": "PLACEHOLDER_STATE",
        "postalCode": "PLACEHOLDER_POSTAL_CODE",
        "addressCountry": "AR"
      },
      "sameAs": [
        "PLACEHOLDER_LINKEDIN",
        "PLACEHOLDER_FACEBOOK", 
        "PLACEHOLDER_TWITTER"
      ],
      "foundingDate": "PLACEHOLDER_FOUNDING_YEAR",
      "numberOfEmployees": "PLACEHOLDER_EMPLOYEE_COUNT",
      "serviceArea": {
        "@type": "Country",
        "name": "Argentina"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Infraestructura Digital",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Infraestructura Digital",
              "description": "Construcción y optimización de infraestructura tecnológica robusta"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Migración a la Nube", 
              "description": "Transición segura y eficiente hacia tecnologías cloud"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Seguridad Digital",
              "description": "Auditoría, identidad digital y seguridad de sistemas"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Consultoría Técnica",
              "description": "Consultoría para optimizar procesos y decisiones tecnológicas"
            }
          }
        ]
      }
    }
  },

  services: {
    title: "Servicios de Infraestructura Digital - InfraCore | Infraestructura Web, Cloud, Seguridad",
    description: "Servicios especializados de infraestructura digital: construcción de infraestructura web, migración cloud, seguridad digital, mantenimiento preventivo y correctivo. +10 años de experiencia.",
    keywords: "infraestructura digital, servicios web, migración cloud, seguridad digital, mantenimiento preventivo, correctivo, infraestructura tecnológica",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Servicios de Infraestructura Digital",
      "provider": {
        "@type": "Organization",
        "name": "InfraCore"
      },
      "serviceType": "Infraestructura Digital",
      "description": "Servicios especializados en infraestructura digital, migración cloud y seguridad de sistemas"
    }
  },

  about: {
    title: "Sobre Nosotros - InfraCore | +10 Años de Experiencia en Infraestructura Digital",
    description: "Conoce el equipo de InfraCore. Más de 10 años brindando servicios de infraestructura digital a +50 empresas. Especialistas en infraestructura web y tecnologías cloud.",
    keywords: "sobre InfraCore, equipo infraestructura digital, experiencia infraestructura web, historia empresa, especialistas infraestructura",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "Sobre InfraCore",
      "description": "Información sobre InfraCore y nuestro equipo de especialistas en infraestructura digital"
    }
  },

  contact: {
    title: "Contacto - InfraCore | Infraestructura Digital Especializada",
    description: "Contacta con InfraCore para tu proyecto de infraestructura digital. Especialistas en infraestructura web, migración cloud. Respuesta en menos de 24 horas.",
    keywords: "contacto InfraCore, infraestructura digital, presupuesto infraestructura web, migración cloud, soporte técnico",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contacto InfraCore",
      "description": "Página de contacto para solicitar servicios de infraestructura digital"
    }
  }
}

export type SEOPageType = keyof typeof seoData
