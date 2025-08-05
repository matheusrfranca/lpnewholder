import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin, 
  MessageCircle,
  ArrowUp 
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">NEW HOLDER</h3>
              <p className="text-white/80 leading-relaxed">
                Especialistas em criar Landing Pages que convertem visitantes em clientes. 
                Transformamos seu tráfego em vendas reais com estratégias comprovadas e 
                design psicologicamente otimizado.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">Entre em Contato</h4>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-glow" />
                <span className="text-white/90">+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-glow" />
                <span className="text-white/90">contato@newholder.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary-glow" />
                <span className="text-white/90">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-white/80 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#problema" className="text-white/80 hover:text-white transition-colors">
                  O Problema
                </a>
              </li>
              <li>
                <a href="#solucao" className="text-white/80 hover:text-white transition-colors">
                  Nossa Solução
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-white/80 hover:text-white transition-colors">
                  Sobre Matheus
                </a>
              </li>
              <li>
                <a href="#resultados" className="text-white/80 hover:text-white transition-colors">
                  Resultados
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/80 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          {/* Call to Action */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Comece Agora</h4>
            <p className="text-white/80 text-sm">
              Pronto para multiplicar suas vendas? Marque uma consultoria gratuita.
            </p>
            
            <Button 
              size="lg" 
              className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </Button>
            
            {/* Social Links */}
            <div className="space-y-3">
              <h5 className="font-medium">Siga-nos</h5>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="bg-white/20" />
      
      {/* Bottom Footer */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/70 text-sm">
            © 2024 New Holder Marketing Digital. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
              Termos de Uso
            </a>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              <ArrowUp className="w-4 h-4 mr-1" />
              Topo
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;