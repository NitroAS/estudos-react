// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Definindo os recursos de tradução
const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      hello: "Hello, {{name}}!"
    }
  },
  pt: {
    translation: {
      welcome: "Bem-vindo",
      hello: "Olá, {{name}}!"
    }
  }
};

// Inicializando o i18next
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Idioma padrão
    fallbackLng: 'en', // Idioma fallback caso o escolhido não esteja disponível
    interpolation: {
      escapeValue: false, // React já faz o escaping de XSS por padrão
    },
  });

export default i18n;
