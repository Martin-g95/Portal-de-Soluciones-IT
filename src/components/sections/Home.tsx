import { ArrowRight, Shield, Users, Eye, Server, Cloud } from "lucide-react";
import ContactForm from "../ui/contact-form";
import { Link } from "react-router-dom";
import CounterAnimation from "../ui/counter-animation";
import SEOHead from "../ui/SEOHead";
import { seoData } from "../../utils/seoData";


const Home = () => {
  return (
    <>
      <SEOHead {...seoData.home} />
      <div className="overflow-hidden">
      <section id="inicio" className="cascade-item cascade-delay-1 relative bg-gradient-to-br from-slate-900 to-slate-800 pt-28 pb-12 md:py-20">
        <div className="mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-3 md:translate-y-20">
                {/* Título simple */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-serif break-words">
                  <span className="inline-block">
                    Somos{" "}
                  </span>
                  <span className="text-cyan-300 inline-block">
                    InfraCore
                  </span>
                </h1>
                
                {/* Párrafos simples */}
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  Especialistas en infraestructura digital con más de una década de experiencia. Construimos, optimizamos y mantenemos la base tecnológica que impulsa tu presencia online.
                </p>
                <p className="text-sm sm:text-base text-slate-400">
                  Tu proyecto digital merece una base sólida. Trabajamos para que tu crecimiento online sea constante y confiable.
                </p>
              </div>
              
              {/* Botones simples */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/servicios">
                <button className="group inline-flex items-center justify-center gap-2 w-full md:w-56 md:h-12 rounded-xl border-2 border-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 font-semibold transition-all duration-300 text-base md:text-base py-4 md:py-3 transform hover:scale-105 hover:shadow-lg whitespace-nowrap md:mt-24">
                  Ver Servicios
                  <Eye className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                </button>
                </Link>
                <Link to="/sobre-nosotros">
                <button className="group inline-flex items-center justify-center gap-2 w-full md:w-56 md:h-12 rounded-xl border-2 border-cyan-400 bg-transparent text-cyan-300 hover:bg-cyan-400 hover:text-slate-900 font-semibold transition-all duration-300 text-base md:text-base py-4 md:py-3 transform hover:scale-105 hover:shadow-lg whitespace-nowrap md:mt-24">
                  Sobre Nosotros
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                </Link>
              </div>
            </div>
            
            {/* Imagen simple */}
            <div className="relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
              <div className="w-full max-w-[700px]">
                <img
                  src="/images/professional-business-consultation-meeting-with-la.webp"
                  alt="Equipo trabajando con tecnología moderna"
                  fetchPriority="high"
                  decoding="async"
                  className="rounded-2xl shadow-xl w-[380px] h-[240px] md:w-[608px] md:h-[380px] object-cover object-center md:mr-8 md:mt-14"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sección de servicios mejorada */}
      <section id="servicios" className="cascade-item cascade-delay-2 py-20 bg-gradient-to-br from-slate-950 to-slate-900 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"></div>
        

        <div className="mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-cyan-300 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Servicios Especializados
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-serif">
              Nuestros <span className="text-cyan-300">Servicios</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Enfocados en <span className="font-semibold text-cyan-300 bg-blue-600/20 px-2 py-1 rounded">maximizar</span> el valor de la inversión de
              software, la personalización efectiva de servicios y la respuesta ágil para impulsar su crecimiento
            </p>
          </div>

          <div className="cascade-item cascade-delay-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Shield,
                title: "Arquitectura de Infraestructura Digital",
                description: "Diseñamos y construimos infraestructuras escalables y robustas para tu crecimiento digital",
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-500/10",
                hoverColor: "hover:bg-blue-500/20",
                serviceId: "arquitectura"
              },
              {
                icon: Server,
                title: "Optimización de Rendimiento Web",
                description: "Aceleramos tu presencia online con tecnologías de vanguardia y optimización avanzada",
                color: "from-cyan-500 to-cyan-600",
                bgColor: "bg-cyan-500/10",
                hoverColor: "hover:bg-cyan-500/20",
                serviceId: "optimizacion"
              },
              {
                icon: Users,
                title: "Consultoría en Transformación Digital",
                description: "Te acompañamos en la evolución tecnológica de tu empresa con estrategias personalizadas",
                color: "from-blue-600 to-cyan-500",
                bgColor: "bg-blue-600/10",
                hoverColor: "hover:bg-blue-600/20",
                serviceId: "transformacion"
              },
              {
                icon: Cloud,
                title: "Migración y Modernización Cloud",
                description: "Transición inteligente hacia la nube con máxima seguridad y eficiencia operativa",
                color: "from-cyan-500 to-cyan-600",
                bgColor: "bg-cyan-500/10",
                hoverColor: "hover:bg-cyan-500/20",
                serviceId: "migracion"
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`group relative p-6 lg:p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full ${service.hoverColor}`}
              >
                {/* Gradiente de fondo sutil */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-4 leading-tight group-hover:text-slate-200">
                    {service.title}
                  </h3>
                  <p className="text-sm lg:text-base text-slate-300 leading-relaxed group-hover:text-slate-200">
                    {service.description}
                  </p>
                  
                  {/* Indicador de hover con link */}
                  <Link 
                    to={`/servicios?service=${service.serviceId}`}
                    className="mt-auto pt-6 inline-flex items-center text-sm font-medium text-slate-400 group-hover:text-cyan-300 transition-all duration-300 hover:text-cyan-200 hover:scale-105"
                  >
                    <span className="group-hover:font-semibold transition-all duration-300">más información</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cascade-item cascade-delay-4 py-16 bg-slate-950">
        <div className="mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="images/professional-handshake-business-meeting-modern-off.webp"
                alt="Reunión profesional de negocios"
                loading="lazy"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-white font-serif">
                  Más de <span className="text-cyan-300">diez años</span> generando confianza
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Brindamos nuestros servicios a más de 50 empresas nacionales e internacionales que confían en nosotros
                  para optimizar sus modelos de negocio.
                </p>
                <p className="text-slate-400">
                  Trabajamos para empresas de diversos sectores, desde medianas hasta grandes corporaciones, incluyendo
                  industrias, comercio, servicios, y más.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-slate-900 rounded-xl shadow-sm">
                  <CounterAnimation end={50} prefix={"+"} />
                  <div className="text-slate-300">Empresas Atendidas</div>
                </div>
                <div className="text-center p-6 bg-slate-900 rounded-xl shadow-sm">
                  <CounterAnimation end={10} suffix={"+"} />
                  <div className="text-slate-300">Años de Experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contacto" className="cascade-item cascade-delay-5 py-16 bg-slate-950">
        <div className="mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-cyan-300 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              Comencemos tu Proyecto
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-serif">
              Sellemos el{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                próximo gran paso
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto px-4 leading-relaxed">
              Tu visión tecnológica merece una ejecución perfecta. Conversemos sobre cómo podemos transformar 
              tus desafíos en oportunidades de crecimiento
            </p>
          </div>
          <ContactForm />
        </div>
      </section>   
      </div>
    </>
  );
};

export default Home;