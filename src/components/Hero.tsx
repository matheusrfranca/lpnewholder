import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Star, Users, Award } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Side - Brand & Copy */}
          <div className="space-y-8 animate-fade-in">
            <Badge variant="outline" className="text-primary border-primary/30 bg-white/80 backdrop-blur-sm">
              <Star className="w-4 h-4 mr-2 fill-current" />
              {t('hero.badge')}
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  {t('hero.title')}
                </span>
                <br />
                <span className="text-white">
                  {t('hero.subtitle')}
                </span>
                <br />
                <span className="text-white font-black">
                  {t('hero.subtitle2')}
                </span>
              </h1>
              
              <p 
                className="text-xl text-white/90 leading-relaxed max-w-lg"
                dangerouslySetInnerHTML={{ __html: t('hero.description') }}
              />
              
              {/* Stats */}
              <div className="flex flex-wrap gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary-glow" />
                  <span className="font-semibold">{t('hero.stat1')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary-glow" />
                  <span className="font-semibold">{t('hero.stat2')}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105">
                {t('hero.cta')}
                <span className="ml-2">→</span>
              </Button>
              <p className="text-sm text-white/70">
                {t('hero.guarantee')}
              </p>
            </div>
          </div>
          
          {/* Right Side - Video */}
          <div className="relative animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-elegant">
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl relative overflow-hidden group cursor-pointer">
                {/* Video Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                    <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
                
                {/* Video Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {t('hero.videoTitle')}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {t('hero.videoDescription')}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Video Stats */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5.2K</div>
                  <div className="text-white/70 text-sm">{t('hero.views')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.9⭐</div>
                  <div className="text-white/70 text-sm">{t('hero.rating')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;