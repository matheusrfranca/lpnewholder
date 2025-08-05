import { useLanguage } from '@/contexts/LanguageContext';

export const useTranslation = () => {
  const { t, language, setLanguage } = useLanguage();
  
  return {
    t,
    language,
    setLanguage,
    isPortuguese: language === 'pt',
    isEnglish: language === 'en'
  };
};