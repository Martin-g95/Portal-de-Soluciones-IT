import type React from "react"

import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { useContactForm } from "../../hooks/useContactForm"

// Tipos para validación
interface ValidationErrors {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  service?: string;
  message?: string;
}

// Funciones de sanitización y seguridad
const sanitizeInput = (input: string): string => {
  // Remover tags HTML y caracteres peligrosos pero preservar espacios
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remover tags script
    .replace(/<[^>]*>/g, '') // Remover todos los tags HTML
    .replace(/javascript:/gi, '') // Remover javascript:
    .replace(/on\w+\s*=/gi, '') // Remover event handlers (onclick, onload, etc.)
    .replace(/&lt;script&gt;/gi, '') // Remover scripts codificados
    .replace(/&lt;\/script&gt;/gi, '')
    .replace(/&#x3C;script&#x3E;/gi, '')
    .replace(/\0/g, '') // Remover null bytes
    // NO hacer trim aquí para preservar espacios mientras escribe
}

const detectSQLInjection = (input: string): boolean => {
  // Patrones comunes de inyección SQL
  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|SCRIPT)\b)/i,
    /(--|#|\/\*|\*\/)/,
    /(\bOR\b.*=.*\bOR\b|\bAND\b.*=.*\bAND\b)/i,
    /(\bunion\b.*\bselect\b)/i,
    /(\bdrop\b.*\btable\b)/i,
    /(\binsert\b.*\binto\b)/i,
    /(\bupdate\b.*\bset\b)/i,
    /(\bdelete\b.*\bfrom\b)/i,
    /(xp_cmdshell|sp_executesql)/i,
    /('(\s*)(or|and)(\s*)('|1=1|0=0))/i,
    /((\%27)|(\'))\s*((\%6f)|o|(\%4f))((\%72)|r|(\%52))/i, // ' or
    /((\%27)|(\'))\s*((\%61)|a|(\%41))((\%6e)|n|(\%4e))((\%64)|d|(\%44))/i, // ' and
  ]
  
  return sqlPatterns.some(pattern => pattern.test(input))
}

const detectXSSAttempt = (input: string): boolean => {
  // Patrones comunes de XSS
  const xssPatterns = [
    /<script[\s\S]*?>[\s\S]*?<\/script>/gi,
    /<iframe[\s\S]*?>[\s\S]*?<\/iframe>/gi,
    /<object[\s\S]*?>[\s\S]*?<\/object>/gi,
    /<embed[\s\S]*?>/gi,
    /<link[\s\S]*?>/gi,
    /javascript:/gi,
    /vbscript:/gi,
    /on\w+\s*=/gi,
    /expression\s*\(/gi,
    /url\s*\(/gi,
    /@import/gi,
    /&#x/gi,
    /document\.cookie/gi,
    /document\.write/gi,
    /eval\s*\(/gi,
    /alert\s*\(/gi,
    /confirm\s*\(/gi,
    /prompt\s*\(/gi,
  ]
  
  return xssPatterns.some(pattern => pattern.test(input))
}

// Componente para mostrar errores
const ErrorMessage = ({ error }: { error?: string }) => {
  if (!error) return null
  
  return (
    <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
      <AlertCircle className="w-4 h-4" />
      <span>{error}</span>
    </div>
  )
}

export default function ContactForm() {
  const {
    formData,
    setFormData,
    errors,
    isSubmitted,
    setIsSubmitted,
    handleChange,
    handleSubmit,
  } = useContactForm()

  // Funciones de validación personalizadas (coinciden con el backend + seguridad)
  const validateField = (name: string, value: string): string | null => {
    // Primero verificar intentos de inyección SQL
    if (detectSQLInjection(value)) {
      return 'Entrada sospechosa detectada. No se permiten comandos SQL.'
    }

    // Verificar intentos de XSS
    if (detectXSSAttempt(value)) {
      return 'Entrada sospechosa detectada. No se permiten scripts o HTML.'
    }

    // Verificar caracteres de control peligrosos
    if (/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/.test(value)) {
      return 'Caracteres no válidos detectados.'
    }

    switch (name) {
      case 'name':
        if (!value.trim()) return 'El nombre es requerido'
        if (value.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres'
        if (value.trim().length > 100) return 'El nombre no puede exceder 100 caracteres'
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value.trim())) return 'El nombre solo puede contener letras y espacios'
        return null

      case 'email':
        if (!value.trim()) return 'El email es requerido'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value.trim())) return 'Debe ser un email válido'
        // Verificar que no contenga caracteres peligrosos adicionales en emails
        if (/[<>()[\]\\,;:\s@"]/g.test(value.replace(/[@.]/g, '').replace(/[a-zA-Z0-9-_]/g, ''))) {
          return 'El email contiene caracteres no permitidos'
        }
        return null

      case 'company':
        if (value.trim().length > 100) return 'La empresa no puede exceder 100 caracteres'
        // Permitir caracteres alfanuméricos, espacios, guiones, puntos y algunos símbolos básicos
        if (value.trim() && !/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.\-&()]+$/.test(value.trim())) {
          return 'La empresa contiene caracteres no permitidos'
        }
        return null

      case 'phone':
        if (value.trim() && !/^[\+]?[0-9\s\-\(\)]{7,20}$/.test(value.trim())) {
          return 'El teléfono debe tener entre 7 y 20 dígitos'
        }
        return null

      case 'service':
        if (value.trim().length > 100) return 'El servicio no puede exceder 100 caracteres'
        return null

      case 'message':
        if (!value.trim()) return 'El mensaje es requerido'
        if (value.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres'
        if (value.trim().length > 1000) return 'El mensaje no puede exceder 1000 caracteres'
        
        // Permitir caracteres alfanuméricos, espacios, puntuación básica y acentos
        const allowedChars = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ .,;:()¿?¡!\-_@#%&*+={}[\]"'\/\\]+$/
        if (!allowedChars.test(value)) {
          return 'El mensaje contiene caracteres no permitidos'
        }
        
        return null

      default:
        return null
    }
  }

  // Lógica de validación, sanitización, submit y change movida al hook

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje Enviado!</h3>
        <p className="text-gray-600 mb-6">Nos pondremos en contacto contigo pronto.</p>
        
        {/* Logo BaseIT en estado de éxito */}
        <div className="border-t border-gray-200 pt-6">
          <img 
            src="/src/assets/Identidad Corporativa/Logo_BaseIT_cuad_color_positivo_RGB.png" 
            alt="BaseIT"
            className="h-8 w-auto mx-auto opacity-70"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Contact Info with Image */}
      <div className="space-y-8">
        {/* Title and content above the image */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-4 font-serif">Hablemos de tu proyecto</h3>
          <p className="text-lg text-slate-300 leading-relaxed">
            Estamos aquí para ayudarte a optimizar tu infraestructura IT. Contacta con nuestros especialistas y descubre
            cómo podemos impulsar el crecimiento de tu empresa.
          </p>
        </div>

        <div className="relative h-64 rounded-xl overflow-hidden">
          <img
            src="images/professional-business-consultation-contact.webp"
            alt="Consultoría profesional de negocios para contacto"
            loading="lazy"
            className="w-[600px] h-[256px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        </div>

        <div className="bg-blue-600/10 p-6 rounded-xl border border-slate-800">
          <h4 className="font-semibold text-cyan-300 mb-2">Tiempo de respuesta</h4>
          <p className="text-slate-300">Respondemos en menos de 24 horas</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="Tu nombre"
              />
              <ErrorMessage error={errors.name} />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="tu@email.com"
              />
              <ErrorMessage error={errors.email} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                Empresa
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.company ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="Nombre de tu empresa"
              />
              <ErrorMessage error={errors.company} />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="+54 11 1234-5678"
              />
              <ErrorMessage error={errors.phone} />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
              Servicio de interés
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.service ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
            >
              <option value="">Selecciona un servicio</option>
              <option value="mantenimiento-preventivo">Mantenimiento Preventivo</option>
              <option value="mantenimiento-correctivo">Mantenimiento Correctivo</option>
              <option value="soporte-sap">Soporte SAP</option>
              <option value="auditoria">Auditoría y Seguridad</option>
              <option value="migracion-nube">Migración a la Nube</option>
              <option value="asesoria">Asesoría</option>
              <option value="otro">Otro</option>
            </select>
            <ErrorMessage error={errors.service} />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Mensaje *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none ${
                errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Cuéntanos sobre tu proyecto o necesidades..."
            />
            <ErrorMessage error={errors.message} />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            Enviar Mensaje
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  )
}
