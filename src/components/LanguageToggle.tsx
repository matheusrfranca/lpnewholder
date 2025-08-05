import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const LanguageToggle = () => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm border-primary/20 hover:bg-primary/10 transition-all duration-300"
    >
      <Globe className="w-4 h-4 mr-2" />
      {language === 'pt' ? 'EN' : 'PT'}
    </Button>
  );
};

export default LanguageToggle;