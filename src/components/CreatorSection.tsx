import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, TrendingUp, CheckCircle } from "lucide-react";

const CreatorSection = () => {
  const achievements = [
    "1000+ Landing Pages criadas e validadas",
    "98% de taxa de aprovação dos clientes",
    "R$ 50M+ em vendas geradas para clientes",
    "Especialista em Copywriting de Conversão",
    "15+ anos de experiência em Marketing Digital"
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image/Photo */}
          <div className="relative animate-fade-in">
            <div className="relative bg-gradient-primary rounded-2xl p-8 shadow-elegant">
              {/* Photo Placeholder - você pode substituir por uma foto real */}
              <div className="aspect-[4/5] bg-gradient-to-br from-white/20 to-white/5 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-16 h-16" />
                    </div>
                    <div className="text-xl font-bold">Matheus França</div>
                    <div className="text-white/80">Especialista em Landing Pages</div>
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-primary">
                    <Award className="w-4 h-4 mr-1" />
                    Expert
                  </Badge>
                </div>
                
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-white/90 text-primary">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    1000+ LPs
                  </Badge>
                </div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-xl p-4 shadow-elegant">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/30">
                <Award className="w-4 h-4 mr-2" />
                Criador das LPs de Maior Conversão do Brasil
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Eu Sou <span className="bg-gradient-primary bg-clip-text text-transparent">Matheus França</span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Em 15 anos de carreira, descobri o <strong>segredo</strong> que separa páginas que vendem 
                das que apenas existem: <strong className="text-primary">a psicologia da persuasão aplicada ao design</strong>.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Por Que Meu Trabalho É Diferente?
              </h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <blockquote className="text-lg text-foreground leading-relaxed italic">
                "Não crio apenas páginas bonitas. Crio <strong>sistemas de persuasão</strong> que 
                transformam visitantes em clientes apaixonados pela sua marca."
              </blockquote>
              <div className="mt-4 text-primary font-semibold">
                — Matheus França, Fundador da New Holder
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-foreground">
                Minha Garantia Para Você:
              </h4>
              <div className="bg-white rounded-xl p-6 shadow-card">
                <p className="text-muted-foreground mb-4">
                  Se sua nova Landing Page não aumentar suas conversões em pelo menos 
                  <strong className="text-primary"> 150% nos primeiros 90 dias</strong>, 
                  eu refaço gratuitamente até você ficar satisfeito.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Por quê?</strong> Porque sei exatamente o que funciona.
                </p>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              Quero Trabalhar com o Matheus
              <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;