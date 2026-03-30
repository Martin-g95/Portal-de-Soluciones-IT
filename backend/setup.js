#!/usr/bin/env node

import dotenv from 'dotenv';
import { testEmailConnection } from './src/services/emailService.js';

// Cargar variables de entorno
dotenv.config();

console.log('🚀 Configurando Backend...\n');

// Verificar variables de entorno requeridas
const requiredEnvVars = [
  'EMAIL_HOST',
  'EMAIL_USER', 
  'EMAIL_PASS',
  'EMAIL_FROM'
];

const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('❌ Variables de entorno faltantes:');
  missingVars.forEach(varName => {
    console.error(`   - ${varName}`);
  });
  console.error('\n📝 Por favor, crea un archivo .env basado en env.example');
  process.exit(1);
}

console.log('✅ Variables de entorno configuradas correctamente');

// Verificar configuración de email
console.log('\n📧 Probando configuración de email...');
try {
  const emailTest = await testEmailConnection();
  if (emailTest) {
    console.log('✅ Configuración de email válida');
  } else {
    console.error('❌ Error en la configuración de email');
    console.log('💡 Verifica tu configuración SMTP en el archivo .env');
  }
} catch (error) {
  console.error('❌ Error al probar email:', error.message);
}

// Mostrar configuración
console.log('\n📋 Configuración del Backend:');
console.log(`   🌍 Entorno: ${process.env.NODE_ENV || 'development'}`);
console.log(`   🚪 Puerto: ${process.env.PORT || 3001}`);
console.log(`   📧 Host SMTP: ${process.env.EMAIL_HOST}`);
console.log(`   👤 Usuario SMTP: ${process.env.EMAIL_USER}`);
console.log(`   📤 Email desde: ${process.env.EMAIL_FROM}`);
console.log(`   📥 Email hacia: ${process.env.EMAIL_TO || process.env.EMAIL_USER}`);

console.log('\n🎯 Para iniciar el servidor:');
console.log('   npm run dev    # Desarrollo con nodemon');
console.log('   npm start      # Producción');

console.log('\n🔍 Endpoints disponibles:');
console.log('   POST /api/contact     # Enviar formulario de contacto');
console.log('   GET  /api/contact/status # Estado del servicio');
console.log('   GET  /health          # Health check');

console.log('\n📚 Documentación:');
console.log('   - Variables de entorno: env.example');
console.log('   - Dependencias: package.json');
console.log('   - Estructura: src/');

console.log('\n✨ ¡Backend configurado exitosamente!');

