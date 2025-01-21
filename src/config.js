const config = {
    emailjs: {
        publicKey: process.env.EMAILJS_PUBLIC_KEY || '',
        serviceId: process.env.EMAILJS_SERVICE_ID || '',
        templateId: process.env.EMAILJS_TEMPLATE_ID || '',
    },
    email: {
        to: process.env.EMAIL_TO || 'abzughbi@gmail.com'
    }
};

export default config; 