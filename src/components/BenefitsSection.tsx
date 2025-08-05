import { Card, CardContent } from "@/components/ui/card";
import { 
  Rocket, 
  Clock, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Shield,
  Zap,
  Target 
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Lançamento Mais Rápido",
      description: "Sua LP ficará pronta em até 15 dias, não em meses como outras agências",
      highlight: "15x mais rápido"
    },
    {
      icon: DollarSign,
      title: "ROI Imediato",
      description: "Recupere o investimento já no primeiro mês com o aumento de conversões",
      highlight: "ROI de 300-500%"
    },
    {
      icon: Users,
      title: "Mais Leads Qualificados",
      description: "Atraia exatamente o tipo de cliente que você quer com copy direcionada",
      highlight: "70% mais leads"
    },
    {
      icon: TrendingUp,
      title: "Crescimento Escalável",
      description: "Uma base sólida que cresce junto com seu negócio sem limitações",
      highlight: "Sem limite de crescimento"
    },
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Pare de perder tempo com páginas que não convertem e foque no que importa",
      highlight: "40h/semana economizadas"
    },
    {
      icon: Shield,
      title: "Garantia Total",
      description: "Suporte completo e ajustes gratuitos por 6 meses após a entrega",
      highlight: "6 meses de garantia"
    },
    {
      icon: Zap,
      title: "Performance Otimizada",
      description: "Páginas que carregam em menos de 2 segundos em qualquer dispositivo",
      highlight: "Velocidade máxima"
    },
    {
      icon: Target,
      title: "Conversão Certeira",
      description: "Metodologia testada que converte 15-35% dos visitantes em clientes",
      highlight: "Até 35% de conversão"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Os <span className="bg-gradient-primary bg-clip-text text-transparent">Benefícios</span> de Uma 
            <br />Landing Page Profissional
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Investir em uma LP de alta conversão não é apenas sobre ter uma página bonita. 
            É sobre <strong>transformar completamente</strong> os resultados do seu negócio.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-glow">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="bg-primary/5 rounded-lg p-3">
                  <span className="text-primary font-semibold text-xs">
                    {benefit.highlight}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-card">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-8">
            LP Comum vs LP da New Holder
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* LP Comum */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-destructive mb-4">
                ❌ Landing Page Comum
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span className="text-muted-foreground">1-2% de conversão</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span className="text-muted-foreground">Design genérico</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span className="text-muted-foreground">Copy sem persuasão</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span className="text-muted-foreground">Sem otimização</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span className="text-muted-foreground">Resultados medíocres</span>
                </div>
              </div>
            </div>
            
            {/* LP New Holder */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-primary mb-4">
                ✅ Landing Page New Holder
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">15-35% de conversão</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Design psicológico</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Copy de alta conversão</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Otimização contínua</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Resultados extraordinários</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 p-6 bg-gradient-primary rounded-xl text-white">
            <p className="text-lg font-semibold">
              A diferença? Até <strong>300% mais vendas</strong> com a mesma quantidade de tráfego
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;