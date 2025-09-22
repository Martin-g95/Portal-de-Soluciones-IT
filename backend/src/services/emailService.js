import { TransactionalEmailsApi, SendSmtpEmail } from '@getbrevo/brevo';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Configurar proveedor de email
const initializeEmailService = async () => {
  const useBrevo = process.env.BREVO_API_KEY;

  // Brevo (GRATIS 300 emails/día - perfecto para Outlook)
  if (useBrevo) {
    const brevo = new TransactionalEmailsApi();
    brevo.authentications['apiKey'].apiKey = process.env.BREVO_API_KEY;
    return { provider: 'brevo', client: brevo };
  }

  // Fallback a Ethereal para pruebas si no hay Brevo configurado
  const account = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass,
    },
  });
  return { provider: 'ethereal', client: transporter };
};

// Template HTML para el email de contacto
const createContactEmailTemplate = (contactData) => {
  const currentDate = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nuevo Mensaje de Contacto - BaseIT</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8f9fa;
        }
        .header {
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          padding: 30px;
          text-align: center;
          border-radius: 10px 10px 0 0;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 700;
        }
        .content {
          background: white;
          padding: 30px;
          border-radius: 0 0 10px 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin: 25px 0;
        }
        .info-item {
          background: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
          border-left: 4px solid #f97316;
        }
        .info-label {
          font-weight: 600;
          color: #f97316;
          font-size: 14px;
          text-transform: uppercase;
          margin-bottom: 5px;
        }
        .info-value {
          color: #333;
          font-size: 16px;
        }
        .message-box {
          background: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 8px;
          padding: 20px;
          margin: 25px 0;
        }
        .message-label {
          font-weight: 600;
          color: #856404;
          margin-bottom: 10px;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #dee2e6;
          color: #6c757d;
          font-size: 14px;
        }
        .highlight {
          color: #f97316;
          font-weight: 600;
        }
        @media (max-width: 600px) {
          .info-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🚀 Nuevo Mensaje de Contacto</h1>
        <p>BaseIT - Consultoría IT Especializada</p>
      </div>
      
      <div class="content">
        <p>Has recibido un nuevo mensaje de contacto desde el sitio web de BaseIT.</p>
        
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Nombre</div>
            <div class="info-value">${contactData.name}</div>
          </div>
          
          <div class="info-item">
            <div class="info-label">Email</div>
            <div class="info-value">${contactData.email}</div>
          </div>
          
          <div class="info-item">
            <div class="info-label">Empresa</div>
            <div class="info-value">${contactData.company || 'No especificada'}</div>
          </div>
          
          <div class="info-item">
            <div class="info-label">Teléfono</div>
            <div class="info-value">${contactData.phone || 'No especificado'}</div>
          </div>
          
          <div class="info-item">
            <div class="info-label">Servicio de Interés</div>
            <div class="info-value">${contactData.service || 'Consulta general'}</div>
          </div>
          
          <div class="info-item">
            <div class="info-label">Fecha de Envío</div>
            <div class="info-value">${currentDate}</div>
          </div>
        </div>
        
        <div class="message-box">
          <div class="message-label">📝 Mensaje:</div>
          <div>${contactData.message}</div>
        </div>
        
        <p><strong>Acciones recomendadas:</strong></p>
        <ul>
          <li>Responder al cliente en las próximas 24 horas</li>
          <li>Evaluar el tipo de servicio solicitado</li>
          <li>Preparar propuesta personalizada si es necesario</li>
          <li>Agendar reunión de consultoría si procede</li>
        </ul>
      </div>
      
      <div class="footer">
        <p>Este mensaje fue enviado automáticamente desde el formulario de contacto de BaseIT</p>
        <p><span class="highlight">BaseIT</span> - Tu socio tecnológico de confianza</p>
        <p>📧 ${process.env.EMAIL_FROM} | 🌐 www.baseit.com</p>
      </div>
    </body>
    </html>
  `;
};

// Template para confirmación al cliente
const createClientConfirmationTemplate = (contactData) => {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirmación de Mensaje - BaseIT</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8f9fa;
        }
        .header {
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          padding: 30px;
          text-align: center;
          border-radius: 10px 10px 0 0;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 700;
        }
        .content {
          background: white;
          padding: 30px;
          border-radius: 0 0 10px 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .success-icon {
          text-align: center;
          font-size: 48px;
          margin: 20px 0;
        }
        .highlight {
          color: #f97316;
          font-weight: 600;
        }
        .cta-button {
          display: inline-block;
          background: #f97316;
          color: white;
          padding: 15px 30px;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          margin: 20px 0;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #dee2e6;
          color: #6c757d;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>✅ Mensaje Recibido</h1>
        <p>BaseIT - Consultoría IT Especializada</p>
      </div>
      
      <div class="content">
        <div class="success-icon">🎉</div>
        
        <h2>¡Hola ${contactData.name}!</h2>
        
        <p>Hemos recibido tu mensaje correctamente. Gracias por contactar con <span class="highlight">BaseIT</span>.</p>
        
        <p><strong>Resumen de tu consulta:</strong></p>
        <ul>
          <li><strong>Servicio:</strong> ${contactData.service || 'Consulta general'}</li>
          <li><strong>Empresa:</strong> ${contactData.company || 'No especificada'}</li>
          <li><strong>Mensaje:</strong> ${contactData.message.substring(0, 100)}${contactData.message.length > 100 ? '...' : ''}</li>
        </ul>
        
        <p>Nuestro equipo de especialistas revisará tu consulta y te responderemos en las próximas <strong>24 horas</strong>.</p>
        
        <p>Mientras tanto, puedes:</p>
        <ul>
          <li>Explorar nuestros servicios en detalle</li>
          <li>Revisar casos de éxito</li>
          <li>Conocer a nuestro equipo</li>
        </ul>
        
        <div style="text-align: center;">
          <a href="http://localhost:5173/servicios" class="cta-button">Ver Nuestros Servicios</a>
        </div>
        
        <p><strong>¿Tienes alguna pregunta urgente?</strong></p>
        <p>Puedes contactarnos directamente en: <span class="highlight">${process.env.EMAIL_FROM}</span></p>
      </div>
      
      <div class="footer">
        <p><span class="highlight">BaseIT</span> - Tu socio tecnológico de confianza</p>
        <p>🚀 Maximizando el valor de tu inversión en software</p>
      </div>
    </body>
    </html>
  `;
};

// Función principal para enviar email de contacto
export const sendContactEmail = async (contactData) => {
  try {
    const { provider, client } = await initializeEmailService();
    
    const fromEmail = process.env.EMAIL_FROM || 'BaseIT <noreply@tudominio.com>';
    const toEmail = process.env.EMAIL_TO || 'test@example.com';

    if (provider === 'brevo') {
      console.log('📧 Enviando emails con Brevo...');
      
      // Extraer email del formato "Name <email@domain.com>"
      const extractEmail = (emailString) => {
        const match = emailString.match(/<(.+)>/);
        return match ? match[1] : emailString;
      };
      
      // Email para el equipo usando Brevo
      const teamEmail = new SendSmtpEmail();
      teamEmail.sender = { 
        email: extractEmail(fromEmail), 
        name: 'BaseIT' 
      };
      teamEmail.to = [{ email: toEmail }];
      teamEmail.subject = `🚀 Nuevo Contacto: ${contactData.name} - ${contactData.service || 'Consulta General'}`;
      teamEmail.htmlContent = createContactEmailTemplate(contactData);

      // Email de confirmación para el cliente usando Brevo
      const clientEmail = new SendSmtpEmail();
      clientEmail.sender = { 
        email: extractEmail(fromEmail), 
        name: 'BaseIT' 
      };
      clientEmail.to = [{ email: contactData.email }];
      clientEmail.subject = '✅ Confirmación de Mensaje - BaseIT';
      clientEmail.htmlContent = createClientConfirmationTemplate(contactData);

      const [teamResult, clientResult] = await Promise.all([
        client.sendTransacEmail(teamEmail),
        client.sendTransacEmail(clientEmail)
      ]);

      console.log('✅ Emails enviados exitosamente con Brevo:');
      console.log('📧 Email al equipo:', teamResult.body.messageId);
      console.log('📧 Email al cliente:', clientResult.body.messageId);

      return {
        success: true,
        provider: 'brevo',
        teamEmailId: teamResult.body.messageId,
        clientEmailId: clientResult.body.messageId,
      };

    } else {
      // Ethereal para pruebas
      console.log('📧 Enviando emails con Ethereal (modo pruebas)...');
      
      // Verificar conexión
      await client.verify();

      // Email para el equipo
      const teamEmail = {
        from: fromEmail,
        to: toEmail,
        subject: `🚀 Nuevo Contacto: ${contactData.name} - ${contactData.service || 'Consulta General'}`,
        html: createContactEmailTemplate(contactData),
      };

      // Email de confirmación para el cliente
      const clientEmail = {
        from: fromEmail,
        to: contactData.email,
        subject: '✅ Confirmación de Mensaje - BaseIT',
        html: createClientConfirmationTemplate(contactData)
      };

      const [teamResult, clientResult] = await Promise.all([
        client.sendMail(teamEmail),
        client.sendMail(clientEmail)
      ]);

      console.log('✅ Emails enviados exitosamente con Ethereal:');
      console.log('📧 Email al equipo:', teamResult.messageId);
      console.log('📧 Email al cliente:', clientResult.messageId);
      console.log('🔗 Vista previa equipo:', nodemailer.getTestMessageUrl(teamResult));
      console.log('🔗 Vista previa cliente:', nodemailer.getTestMessageUrl(clientResult));

      return {
        success: true,
        provider: 'ethereal',
        teamEmailId: teamResult.messageId,
        clientEmailId: clientResult.messageId,
        previewTeamUrl: nodemailer.getTestMessageUrl(teamResult) || null,
        previewClientUrl: nodemailer.getTestMessageUrl(clientResult) || null,
      };
    }

  } catch (error) {
    console.error('❌ Error al enviar emails:', error);
    throw new Error(`Error al enviar email: ${error.message}`);
  }
};

// Función para probar la conexión del servicio de email
export const testEmailConnection = async () => {
  try {
    const { provider, client } = await initializeEmailService();
    
    if (provider === 'brevo') {
      console.log('✅ Servicio Brevo configurado correctamente');
      return true;
    } else {
      await client.verify();
      console.log('✅ Conexión Ethereal verificada correctamente');
      return true;
    }
  } catch (error) {
    console.error('❌ Error en conexión del servicio de email:', error);
    return false;
  }
};