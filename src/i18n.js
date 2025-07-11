// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          explore: "Explore my mind.",
          home: "Home",
          about: "About",
          projects: "Projects",
          contact: "Contact",
          // Add other keys...
        }
      },
      hu: {
        translation: {
          explore: "Fedezd fel az elmém.",
          home: "Kezdőlap",
          about: "Rólam",
          projects: "Projektek",
          contact: "Kapcsolat",
          // ...
        }
      },
      it: {
        translation: {
          explore: "Esplora la mia mente.",
          home: "Home",
          about: "Chi sono",
          projects: "Progetti",
          contact: "Contatto",
          // ...
        }
      }
    }
  });

export default i18n;
