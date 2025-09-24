import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "react-router-dom"
import { Shield, Settings, Server, Lock, Cloud, Users, Wrench } from "lucide-react"

const servicesData = [
  {
    id: "arquitectura",
    title: "Arquitectura de Infraestructura Digital",
    icon: Shield,
    color: "bg-blue-600",
    shortTitle: "Arquitectura",
    services: [
      "Diseño de arquitecturas escalables y robustas",
      "Planificación de infraestructura cloud-native",
      "Arquitectura de microservicios y contenedores",
      "Diseño de sistemas de alta disponibilidad",
      "Arquitectura de seguridad perimetral",
      "Planificación de redes y conectividad",
      "Arquitectura de bases de datos distribuidas",
      "Diseño de APIs y servicios web",
      "Arquitectura de monitoreo y observabilidad",
      "Planificación de disaster recovery",
      "Arquitectura de CI/CD y DevOps",
      "Diseño de sistemas de autenticación",
      "Arquitectura de caching y CDN",
      "Planificación de escalabilidad horizontal",
      "Diseño de sistemas de logging centralizado",
      "Arquitectura de integración de sistemas",
    ],
  },
  {
    id: "optimizacion",
    title: "Optimización de Rendimiento Web",
    icon: Server,
    color: "bg-cyan-600",
    shortTitle: "Optimización",
    services: [
      "Optimización de velocidad de carga de páginas",
      "Implementación de CDN y edge computing",
      "Optimización de imágenes y recursos multimedia",
      "Minificación y compresión de código",
      "Optimización de consultas de base de datos",
      "Implementación de lazy loading",
      "Optimización de Core Web Vitals",
      "Configuración de cache inteligente",
      "Optimización de APIs y endpoints",
      "Implementación de service workers",
      "Optimización de motores de búsqueda (SEO técnico)",
      "Análisis de rendimiento y profiling",
      "Optimización de recursos críticos",
      "Implementación de HTTP/2 y HTTP/3",
      "Optimización de fuentes y tipografías",
      "Configuración de compresión gzip/brotli",
    ],
  },
  {
    id: "transformacion",
    title: "Consultoría en Transformación Digital",
    icon: Users,
    color: "bg-blue-700",
    shortTitle: "Transformación",
    services: [
      "Estrategia de transformación digital empresarial",
      "Análisis de madurez tecnológica organizacional",
      "Roadmap de modernización tecnológica",
      "Consultoría en adopción de nuevas tecnologías",
      "Análisis de procesos de negocio digitales",
      "Estrategia de datos y analytics",
      "Planificación de automatización de procesos",
      "Consultoría en cultura digital organizacional",
      "Estrategia de integración de sistemas legacy",
      "Planificación de capacidades digitales",
      "Consultoría en gobernanza de datos",
      "Estrategia de experiencia del usuario (UX)",
      "Planificación de seguridad digital",
      "Consultoría en compliance y regulaciones",
      "Estrategia de innovación tecnológica",
      "Planificación de talento digital",
    ],
  },
  {
    id: "migracion",
    title: "Migración y Modernización Cloud",
    icon: Cloud,
    color: "bg-cyan-500",
    shortTitle: "Migración",
    services: [
      "Planificación estratégica de migración cloud",
      "Migración de aplicaciones empresariales",
      "Optimización de costos en la nube",
      "Implementación de arquitecturas híbridas",
      "Gestión de servicios cloud multi-proveedor",
      "Migración de bases de datos a la nube",
      "Configuración de redes virtuales",
      "Implementación de contenedores y microservicios",
      "Migración de sistemas de archivos",
      "Optimización de rendimiento en la nube",
      "Implementación de serverless computing",
      "Configuración de auto-scaling",
      "Migración de workloads críticos",
      "Implementación de backup y disaster recovery",
      "Configuración de monitoreo cloud",
      "Optimización de seguridad en la nube",
    ],
  },
  {
    id: "preventivo",
    title: "Mantenimiento preventivo de infraestructura",
    icon: Settings,
    color: "bg-indigo-600",
    shortTitle: "Preventivo",
    services: [
      "Monitoreo continuo de servidores",
      "Análisis de rendimiento de aplicaciones",
      "Gestión proactiva de recursos",
      "Monitoreo de bases de datos",
      "Control de ejecuciones de respaldo",
      "Análisis de alertas del sistema",
      "Aplicación de actualizaciones de seguridad",
      "Aplicación de parches críticos",
      "Copias de seguridad de datos",
      "Refresco de bases de datos trimestral",
      "Administración de herramientas de monitoreo",
      "Configuración de balanceadores de carga",
      "Gestión de certificados SSL/TLS",
      "Implementación de Single Sign-On",
      "Prevención y mitigación de riesgos",
      "Configuración de conectores cloud",
    ],
  },
  {
    id: "correctivo",
    title: "Mantenimiento correctivo de sistemas",
    icon: Wrench,
    color: "bg-indigo-600",
    shortTitle: "Correctivo",
    services: [
      "Resolución de incidencias críticas 24/7",
      "Diagnóstico y reparación de errores de sistema",
      "Recuperación de servicios caídos",
      "Optimización de rendimiento de aplicaciones",
      "Corrección de configuraciones de red",
      "Restauración de datos perdidos",
      "Solución de problemas de conectividad",
      "Reparación de fallos de hardware virtual",
    ],
  },
  {
    id: "soporte",
    title: "Soporte especializado en plataformas",
    icon: Server,
    color: "bg-cyan-600",
    shortTitle: "Soporte",
    services: [
      "Soporte técnico especializado 24/7",
      "Administración de bases de datos empresariales",
      "Gestión de sistemas operativos Unix/Linux",
      "Soporte en plataformas Windows Server",
      "Optimización de aplicaciones empresariales",
      "Mantenimiento de servidores de aplicaciones",
      "Gestión de servicios de directorio",
      "Soporte en virtualización de servidores",
      "Administración de sistemas de archivos",
      "Monitoreo de servicios críticos",
    ],
  },
  {
    id: "auditoria",
    title: "Auditoría digital y seguridad",
    icon: Shield,
    color: "bg-blue-700",
    shortTitle: "Auditoría",
    services: [
      "Auditorías de seguridad integral de infraestructura",
      "Gestión de identidades y accesos digitales",
      "Implementación de políticas de seguridad",
      "Monitoreo continuo de vulnerabilidades",
      "Cumplimiento normativo y estándares",
      "Análisis de riesgos tecnológicos",
      "Implementación de firewalls y antivirus",
      "Gestión de certificados digitales",
      "Auditoría de logs y eventos del sistema",
      "Planificación de continuidad del negocio",
    ],
  },
  {
    id: "migracion",
    title: "Migración digital a la nube",
    icon: Cloud,
    color: "bg-cyan-600",
    shortTitle: "Migración",
    services: [
      "Planificación estratégica de migración cloud",
      "Migración de aplicaciones empresariales",
      "Optimización de costos en la nube",
      "Implementación de arquitecturas híbridas",
      "Gestión de servicios cloud multi-proveedor",
      "Migración de bases de datos a la nube",
      "Configuración de redes virtuales",
      "Implementación de contenedores y microservicios",
      "Migración de sistemas de archivos",
      "Optimización de rendimiento en la nube",
    ],
  },
  {
    id: "asesoria",
    title: "Consultoría en arquitectura digital",
    icon: Users,
    color: "bg-cyan-400",
    shortTitle: "Asesoría",
    services: [
      "Consultoría estratégica en infraestructura",
      "Análisis de procesos de negocio digitales",
      "Recomendaciones de mejores prácticas tecnológicas",
      "Planificación de roadmaps de transformación digital",
      "Evaluación de arquitecturas de sistemas",
      "Diseño de soluciones escalables",
      "Optimización de costos de infraestructura",
      "Planificación de capacidades futuras",
      "Análisis de viabilidad técnica",
      "Mentoría en tecnologías emergentes",
    ],
  },
  {
    id: "implementaciones",
    title: "Implementaciones de infraestructura",
    icon: Lock,
    color: "bg-blue-500",
    shortTitle: "Implementaciones",
    services: [
      "Instalación de sistemas empresariales",
      "Configuración de entornos de producción",
      "Implementación de alta disponibilidad",
      "Setup de entornos de desarrollo y testing",
      "Configuración de conectividad de red",
      "Instalación de servidores de aplicaciones",
      "Configuración de balanceadores de carga",
      "Implementación de sistemas de monitoreo",
      "Configuración de respaldos automatizados",
      "Setup de entornos de recuperación ante desastres",
    ],
  },
]

interface ServiceData {
  id: string;
  title: string;
  icon: any;
  color: string;
  shortTitle: string;
  services: string[];
}

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState("arquitectura")
  const [searchParams] = useSearchParams()
  const activeService = servicesData.find((service) => service.id === activeTab)

  // Ref al contenedor de tabs para auto-scroll mostrando tabs + contenido
  const tabsRef = useRef<HTMLDivElement | null>(null)
  const scrollToTabs = () => {
    if (tabsRef.current) {
      const navbarOffset = 100
      const y = tabsRef.current.getBoundingClientRect().top + window.scrollY - navbarOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  // Leer parámetro service y hacer scroll
  useEffect(() => {
    const serviceParam = searchParams.get('service')
    if (serviceParam && servicesData.find(service => service.id === serviceParam)) {
      setActiveTab(serviceParam)
      setTimeout(scrollToTabs, 0)
    }
  }, [searchParams])

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-28">
      {/* Título */}
      <div className="cascade-item cascade-delay-1 text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-cyan-300 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
          Áreas de Especialización
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-serif">
          Elige tu{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            solución digital
          </span>
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Cada servicio está diseñado para resolver desafíos específicos en tu infraestructura tecnológica
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="mb-8 w-full" ref={tabsRef}>
        <div className="hidden md:flex flex-wrap justify-center gap-2 bg-slate-900 rounded-xl border border-slate-800">
          {servicesData.map((service: ServiceData, index) => {
            const IconComponent = service.icon
            return (
              <button
                key={service.id}
                onClick={() => { setActiveTab(service.id); scrollToTabs(); }}
                className={`cascade-item cascade-delay-${index + 4} flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 text-sm min-w-[120px] ${
                  activeTab === service.id
                    ? `${service.color} text-white shadow-lg transform scale-105`
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                <IconComponent className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">{service.shortTitle}</span>
              </button>
            )
          })}
        </div>

        <div className="md:hidden flex overflow-x-auto overflow-y-visible gap-2 bg-slate-900 rounded-xl scrollbar-hide py-2 border border-slate-800">
          {servicesData.map((service: ServiceData, index) => {
            const IconComponent = service.icon
            return (
              <button
                key={service.id}
                onClick={() => { setActiveTab(service.id); scrollToTabs(); }}
                className={`cascade-item cascade-delay-${index + 4} flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 text-sm min-w-[120px] ${
                  activeTab === service.id
                    ? `${service.color} text-white shadow-lg transform scale-105`
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                <IconComponent className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">{service.shortTitle}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Contenido */}
      {activeService && (
        <div className="bg-slate-900 rounded-2xl shadow-xl p-6 sm:p-8 border border-slate-800 mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className={`${activeService.color} p-3 rounded-xl flex-shrink-0`}>
              <activeService.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                {activeService.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300">
                {activeService.services.length} servicios disponibles
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeService.services.map((service: string, index: number) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors duration-200"
              >
                <div className={`w-2 h-2 ${activeService.color} rounded-full mt-2 flex-shrink-0`} />
                <span className="text-sm sm:text-base text-slate-200 leading-relaxed flex-1">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}