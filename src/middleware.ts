import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'es'], // Lista de los idiomas soportados
    defaultLocale: 'en', // Idioma por defecto si no se encuentra el idioma solicitado
    localePrefix: 'as-needed', // marca el prefijo del idioma en la URL solamente si es necesario
});

export const config = {
    matcher: ['/', '/(es|en)/:path*'] // Rutas que se van a traducir en la aplicación 
};