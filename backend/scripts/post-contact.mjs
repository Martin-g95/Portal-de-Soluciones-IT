import dotenv from 'dotenv';
dotenv.config();

const payload = {
  name: 'Prueba Brevo',
  email: 'prueba@example.com',
  company: 'Mi Empresa',
  phone: '+34999999999',
  service: 'Consulta',
  message: 'Mensaje de prueba usando Brevo desde script.'
};

const apiUrl = `http://localhost:${process.env.PORT || 3001}/api/contact`;

async function main() {
  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const text = await res.text();
    console.log('Status:', res.status);
    try {
      const json = JSON.parse(text);
      console.log('JSON:', JSON.stringify(json, null, 2));
    } catch {
      console.log('Body:', text);
    }
    process.exit(res.ok ? 0 : 1);
  } catch (err) {
    console.error('Error al llamar al endpoint:', err?.message || err);
    if (err?.stack) console.error(err.stack);
    process.exit(1);
  }
}

main();



