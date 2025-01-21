import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    define: {
        'process.env': {
            EMAILJS_PUBLIC_KEY: JSON.stringify(process.env.EMAILJS_PUBLIC_KEY),
            EMAILJS_SERVICE_ID: JSON.stringify(process.env.EMAILJS_SERVICE_ID),
            EMAILJS_TEMPLATE_ID: JSON.stringify(process.env.EMAILJS_TEMPLATE_ID),
            EMAIL_TO: JSON.stringify(process.env.EMAIL_TO)
        }
    }
}); 