import { Mail, Linkedin, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white w-full mt-auto border-t border-slate-800">
      <div className="w-full px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-12 max-w-6xl mx-auto">
          <div className="col-span-1 md:col-start-1 md:col-span-3">
            <h3 className="text-xl font-bold text-cyan-300 mb-3">Baseit</h3>
            <p className="text-slate-300 mb-4 text-sm">
              Especialistas en servicios de IT con más de 10 años de experiencia.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.linkedin.com/company/baseit/?originalSubdomain=ar" className="text-slate-300 hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
                <Linkedin size={14} strokeWidth={2.25} />
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-start-5 md:col-span-2">
            <h4 className="text-lg font-semibold mb-3 text-cyan-300">Contacto</h4>
            <div className="space-y-3">
              <a href="mailto:administracionbaseit@baseit.com.ar" className="flex items-start space-x-3 group">
                <Mail size={16} strokeWidth={2.25} className="text-cyan-300 shrink-0" />
                <span className="text-slate-300 text-sm transition-colors group-hover:text-cyan-200">administracionbaseit@baseit.com.ar</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Monasterio%20720%20Piso%3A%203%20Dpto%3A%20A%20-%20Capital%20Federal%2C%20Ciudad%20de%20Buenos%20Aires"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 group"
              >
                <MapPin size={16} strokeWidth={2.25} className="text-cyan-300 shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm transition-colors group-hover:text-cyan-200">Monasterio 720 Piso: 3 Dpto: A - Capital Federal, Ciudad de Buenos Aires</span>
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-start-7 md:col-span-2">
            <h4 className="text-lg font-semibold mb-3 text-cyan-300">Servicios</h4>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Mantenimiento SAP</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Migración a la Nube</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Auditoría Digital</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-xs">© 2024 Baseit. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}