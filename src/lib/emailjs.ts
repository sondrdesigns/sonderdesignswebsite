import emailjs from '@emailjs/browser';

// EmailJS configuration
// These values should be in your .env file
const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  // Optional: Newsletter template ID (can be same as contact template or different)
  newsletterTemplateId: import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
};

// Validate that all required environment variables are present
const requiredEnvVars = [
  'VITE_EMAILJS_SERVICE_ID',
  'VITE_EMAILJS_TEMPLATE_ID',
  'VITE_EMAILJS_PUBLIC_KEY',
];

const missingVars = requiredEnvVars.filter(
  (varName) => {
    const value = import.meta.env[varName];
    return !value || 
           value.includes('your-') || 
           value.includes('service-id') ||
           value.includes('template-id') ||
           value.includes('public-key');
  }
);

if (missingVars.length > 0) {
  console.error('❌ EmailJS Configuration Error: Missing or placeholder environment variables:');
  missingVars.forEach((varName) => {
    console.error(`   - ${varName}`);
  });
  console.error('\n📝 Please update your .env file with your EmailJS configuration values.');
  console.error('   You can find these in your EmailJS dashboard.\n');
}

// Check if any values are still placeholders
const hasPlaceholders = Object.values(emailjsConfig).some(
  (value) => typeof value === 'string' && value.includes('your-')
);

if (hasPlaceholders) {
  console.warn('⚠️  Warning: EmailJS configuration contains placeholder values.');
  console.warn('   The contact form will not work until you add your EmailJS credentials to .env\n');
}

// Initialize EmailJS with public key
if (emailjsConfig.publicKey && !emailjsConfig.publicKey.includes('your-') && !emailjsConfig.publicKey.includes('public-key')) {
  emailjs.init(emailjsConfig.publicKey);
  console.log('✅ EmailJS initialized successfully');
} else {
  console.warn('⚠️  EmailJS not initialized - missing public key');
}

export { emailjs, emailjsConfig };
export default emailjs;

