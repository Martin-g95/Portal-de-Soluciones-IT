import dotenv from 'dotenv';
dotenv.config();

import { testEmailConnection } from '../src/services/emailService.js';

async function main() {
  try {
    const hasKey = !!process.env.BREVO_API_KEY;
    console.log('BREVO_API_KEY presente:', hasKey);
    console.log('EMAIL_FROM:', process.env.EMAIL_FROM || '(no definido)');
    console.log('EMAIL_TO:', process.env.EMAIL_TO || '(no definido)');

    const ok = await testEmailConnection();
    console.log('Conexión de email OK:', ok);
    process.exit(ok ? 0 : 1);
  } catch (err) {
    console.error('Fallo en testEmailConnection:', err?.message || err);
    if (err?.stack) console.error(err.stack);
    process.exit(1);
  }
}

main();



