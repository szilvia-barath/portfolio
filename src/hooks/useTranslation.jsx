import { useState } from 'react';
import { translations } from '../data/translations';

const useTranslation = () => {
  const [lang, setLang] = useState('en');
  const t = (key) => translations[lang][key] || key;
  return { t, lang, setLang };
};

export default useTranslation;
