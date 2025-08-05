import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  Zap, 
  Shield,
  Gift,
  Users,
  Phone
} from "lucide-react";

const OfferSection = () => {
  const offerFeatures = [
    "Consultoria estratégica personalizada (R$ 2.500 valor)",
    "Landing Page de alta conversão completa",
    "Copy persuasiva e otimizada para seu público",
    "Design responsivo para todos os dispositivos",
    "Integração com ferramentas de marketing",
    "6 meses de suporte e ajustes gratuitos",
    "Treinamento para sua equipe (R$ 1.500 valor)",
    "Estratégia de testes A/B incluída"
  ];

  const bonuses = [
    {
      icon: Gift,
      title: "Bônus #1: Audit Gratuita",
      description: "Análise completa da sua página atual + relatório de melhorias",
      value: "R$ 800"
    },
    {
      icon: Users,
      title: "Bônus #2: Template de E-mails",
      description: "5 templates de e-mail de alta conversão para nutrir seus leads",
      value: "R$ 500"
    },
    {
      icon: Zap,
      title: "Bônus #3: Checklist de Conversão",
      description: "Guia completo com 47 pontos para otimizar qualquer página",
      value: "R$ 300"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <Badge variant="outline" className="text-primary border-primary/30 mb-6">
            <Clock className="w-4 h-4 mr-2" />
            OFERTA LIMITADA - Apenas 5 Vagas por Mês
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pronto Para <span className="bg-gradient-primary bg-clip-text text-transparent">Transformar</span>
            <br />Seu Negócio?
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Marque uma <strong>consultoria gratuita</strong> e descubra como podemos 
            multiplicar suas vendas em até <strong className="text-primary">300%</strong>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Offer */}
          <div className="lg:col-span-2">
            <Card className="relative overflow-hidden shadow-elegant">
              {/* Highlight Badge */}
              <div className="absolute top-0 right-0 bg-gradient-primary text-white px-6 py-2 rounded-bl-xl">
                <span className="font-semibold">MAIS POPULAR</span>
              </div>
              
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      Landing Page Completa + Consultoria
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Tudo que você precisa para começar a vender mais ainda hoje. 
                      Sem complicações, sem demoras, apenas resultados.
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {offerFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Pricing */}
                  <div className="bg-gradient-subtle rounded-xl p-6">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-2">Valor total normal:</div>
                      <div className="text-2xl text-muted-foreground line-through mb-2">R$ 15.800</div>
                      <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">R$ 8.900</div>
                      <div className="text-sm text-muted-foreground">
                        ou 12x de R$ 891 sem juros
                      </div>
                    </div>
                  </div>
                  
                  {/* Guarantee */}
                  <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-foreground mb-2">
                          Garantia Incondicional de 90 Dias
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Se não aumentarmos suas conversões em pelo menos 150%, 
                          devolvemos 100% do seu investimento.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Bonuses & CTA */}
          <div className="space-y-6">
            {/* Bonuses */}
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-6 text-center">
                  Bônus Exclusivos (R$ 1.600 em valor)
                </h4>
                
                <div className="space-y-4">
                  {bonuses.map((bonus, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gradient-subtle rounded-lg">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <bonus.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-foreground text-sm mb-1">
                          {bonus.title}
                        </h5>
                        <p className="text-xs text-muted-foreground mb-2">
                          {bonus.description}
                        </p>
                        <span className="text-xs text-primary font-semibold">
                          Valor: {bonus.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* CTA */}
            <Card className="bg-gradient-primary text-white shadow-glow">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold mb-4">
                  Agende Sua Consultoria Gratuita
                </h4>
                <p className="text-white/90 mb-6 text-sm">
                  Vamos analisar seu negócio e mostrar como multiplicar suas vendas
                </p>
                
                <Button 
                  size="lg" 
                  className="w-full bg-white text-primary hover:bg-white/90 font-semibold mb-4 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Marcar Reunião Agora
                </Button>
                
                <div className="space-y-2 text-xs text-white/80">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>Ligação via WhatsApp ou Zoom</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>30 minutos • 100% gratuito</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Urgency */}
            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4 text-center">
              <div className="text-destructive font-semibold text-sm mb-2">
                ⚠️ ATENÇÃO: Apenas 5 vagas por mês
              </div>
              <div className="text-xs text-muted-foreground">
                Para garantir qualidade máxima, limitamos nossos atendimentos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;