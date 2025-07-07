import emailjs from '@emailjs/browser';

interface EmailParams {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
  [key: string]: unknown; // Firma de índice para resolver el error
}

const SERVICE_ID = 'service_xs4xg1e';
const TEMPLATE_ID = 'template_9lbujmb';
const PUBLIC_KEY = 'koNF4EjzBkQITEApM';

export const sendEmail = async (params: EmailParams): Promise<{ success: boolean; error?: string }> => {
  try {
    // Convertimos explícitamente params a Record<string, unknown>
    const templateParams = params as Record<string, unknown>;
    
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams, // Usamos la versión convertida
      PUBLIC_KEY
    );

    console.log('Email sent successfully!', response.status, response.text);
    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { 
      success: false, 
      error: 'Error al enviar el mensaje. Por favor intenta nuevamente.' 
    };
  }
};