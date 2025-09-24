
import { Compass, Heart, Telescope } from "lucide-react";
import SEOHead from "../ui/SEOHead";
import { seoData } from "../../utils/seoData";

const About = () => {
  return (
    <>
      <SEOHead {...seoData.about} />
      <div className="overflow-hidden">
      {/* Hero reutilizado del inicio */}
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 pt-24 pb-12 md:py-16">
        <div className="mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                <div className="space-y-4 md:space-y-6">
                  <div className="cascade-item cascade-delay-1 space-y-3 md:translate-y-14">
                    {/* Título simple */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-serif break-words">
                      <span className="block">Construimos</span>
                      <span className="text-cyan-300 block">tu futuro digital</span>
                    </h1>
                    {/* Párrafos simples */}
                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                      Especialistas en infraestructura digital con más de una década de experiencia. Conoce al equipo que convierte ideas tecnológicas en realidades sólidas
                    </p>
                    <p className="text-sm sm:text-base text-slate-400">
                      Cada proyecto digital es una oportunidad de demostrar nuestra pasión por la excelencia técnica y el crecimiento online
                    </p>
                  </div>
                </div>
                {/* Imagen */}
                <div className="relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
                  <div className="w-full max-w-[700px]">
                    <img
                      src="/images/about-us-professional-team-meeting.webp"
                      alt="Equipo profesional en reunión colaborativa"
                      loading="lazy"
                      className="rounded-2xl shadow-xl w-[380px] h-[200px] md:w-[608px] md:h-[320px] object-cover md:mr-8 md:mt-14"
                    />
                  </div>
                </div>
              </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="sobre-nosotros" className="py-10 bg-slate-950">
        <div className="mx-auto px-4 max-w-7xl">
          {/* Mission, Vision, Values Cards */}
          <div className="py-6 md:py-10 mb-8">
            <div className="mx-auto px-4 md:px-6 max-w-7xl">
              {/* Header */}
              <div className="cascade-item cascade-delay-1 text-center mb-10 md:mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-cyan-300 rounded-full text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                  Nuestros Valores
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 font-serif">
                  Nuestra <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">filosofía</span>
                </h2>
                <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Los principios que guían cada infraestructura tecnológica que construimos y cada relación que establecemos
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Misión */}
                <div className="cascade-item cascade-delay-1 group relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-lg md:hover:shadow-xl md:hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-10 group-hover:opacity-20 rounded-2xl md:rounded-3xl transition-opacity duration-300"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto">
                      <Compass className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Misión</h3>
                    <p className="text-sm md:text-base text-slate-300 leading-relaxed group-hover:text-slate-200">
                      Construir infraestructuras tecnológicas robustas y escalables que impulsen la transformación digital de nuestros clientes, 
                      brindando soluciones de calidad con un enfoque personalizado y compromiso constante.
                    </p>
                  </div>
                </div>

                {/* Visión - CORREGIDO el error de sintaxis */}
                <div className="cascade-item cascade-delay-2 group relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-lg md:hover:shadow-xl md:hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-indigo-600 opacity-10 group-hover:opacity-20 rounded-2xl md:rounded-3xl transition-opacity duration-300"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-700 to-indigo-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto">
                      <Telescope className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Visión</h3>
                    <p className="text-sm md:text-base text-slate-300 leading-relaxed group-hover:text-slate-200">
                      Ser reconocidos como líderes en infraestructura digital, siendo referentes en innovación, 
                      excelencia técnica y creadores de soluciones tecnológicas que transformen el panorama digital de América Latina.
                    </p>
                  </div>
                </div>

                {/* Valores */}
                <div className="cascade-item cascade-delay-3 group relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-lg md:hover:shadow-xl md:hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 opacity-10 group-hover:opacity-20 rounded-2xl md:rounded-3xl transition-opacity duration-300"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto">
                      <Heart className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Valores</h3>
                    <div className="space-y-2 md:space-y-3 text-left">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-slate-300">Arquitectura digital innovadora</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-slate-300">Compromiso con la escalabilidad</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-slate-300">Seguridad digital como prioridad</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-slate-300">Colaboración técnica</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-slate-300">Excelencia en infraestructura</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

{/* Team Section - Rostros completos visibles */}
          <div className="mb-16">
            <div className="cascade-item cascade-delay-1 max-w-4xl mx-auto text-center mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 text-cyan-300 text-sm font-semibold">
                Nuestro equipo
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mt-4 font-serif">
                Las personas detrás de <span className="text-cyan-300">InfraCore</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-3">
                Contamos con especialistas de distintos niveles de experiencia en infraestructura digital que se asignan, 
                dependiendo la complejidad y urgencia de cada proyecto.
              </p>
              <div className="h-1 w-16 bg-cyan-400 rounded-full mx-auto mt-5"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
  {[
    // Hombres (orden alfabético)
    { name: "Alejandro Martínez", role: "Arquitecto de Sistemas", image: "images/People1.webp" },
    { name: "Carlos Rodríguez", role: "Especialista en Redes", image: "images/People2.webp" },
    { name: "Diego Fernández", role: "Ingeniero de DevOps", image: "images/People3.webp" },
    { name: "Eduardo López", role: "Consultor Senior", image: "images/People4.webp" },
    { name: "Fernando García", role: "Especialista en Seguridad", image: "images/People6.webp" },
    { name: "Gabriel Silva", role: "Administrador de Bases de Datos", image: "images/People7.webp" },
    { name: "Héctor Morales", role: "Especialista en Cloud", image: "images/People8.webp" },
    { name: "Ignacio Torres", role: "Ingeniero de Infraestructura", image: "images/People11.webp" },
    { name: "Javier Herrera", role: "Líder Técnico", image: "images/People12.webp" },
    // Mujeres (orden alfabético)
    { name: "Ana Patricia Vega", role: "Directora de Proyectos", image: "images/People5F.webp" },
    { name: "Carmen Elena Ruiz", role: "Especialista en Migración", image: "images/People9F.webp" },
    { name: "Diana Sofía Mendoza", role: "Consultora en Arquitectura", image: "images/People10F.webp" },
  ].map((member, index) => (
    <div key={index} className={`cascade-item cascade-delay-${index + 1} text-center group bg-slate-900/50 rounded-3xl p-6 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-lg`}>
      <div className="relative mb-4 overflow-hidden rounded-2xl">
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          loading="lazy"
          className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <h4 className="font-semibold text-white text-lg mb-2">{member.name}</h4>
      <p className="text-cyan-300 font-medium">{member.role}</p>
      </div>
    ))}
            </div>
          </div>


        </div>
      </section>
      </div>
    </>
  );
};

export default About;