import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './lng/en.json';
import ru from './lng/ru.json';

let localLang = localStorage.getItem('lng') || JSON.stringify({ lng: 'en' });

const { lng } = JSON.parse(localLang);

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
  },
  lng: lng,
});

export default { i18next };
