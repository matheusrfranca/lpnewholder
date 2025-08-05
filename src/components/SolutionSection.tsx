import { Target, Zap, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/hooks/useTranslation";

const SolutionSection = () => {
  const solutions = [
    {
      icon: Target,
      title: "Copy Persuasiva",
      description: "Textos que tocam a dor do cliente e apresentam sua solução como a única alternativa",
      benefit: "Aumenta interesse em 250%"
    },
    {
      icon: Zap,
      title: "Design Psicológico",
      description: "Layout estratégico que guia o olhar do visitante direto para a ação de compra",
      benefit: "Melhora experiência em 180%"
    },
    {
      icon: TrendingUp,
      title: "Funis de Conversão",
      description: "Sequência perfeita que transforma visitantes curiosos em clientes convencidos",
      benefit: "Multiplica vendas por 3x"
    },
    {
      icon: Shield,
      title: "Otimização Contínua",
      description: "Testes A/B constantes para maximizar cada elemento da sua página",
      benefit: "Performance sempre crescente"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Target className="w-5 h-5" />
            <span className="font-semibold">SOLUÇÃO COMPROVADA</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Como <span className="bg-gradient-primary bg-clip-text text-transparent">Dobramos</span> 
            <br />Suas Vendas Online
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Nossa metodologia <strong>exclusiva</strong> combina psicologia do consumidor, 
            design persuasivo e copywriting de alta conversão para criar páginas que <strong>vendem por você</strong>.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-glow">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {solution.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="bg-primary/5 rounded-lg p-3">
                  <span className="text-primary font-semibold text-sm">
                    ✓ {solution.benefit}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Results Preview */}
        <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white text-center animate-fade-in">
          <h3 className="text-2xl lg:text-3xl font-bold mb-6">
            O Resultado? Uma Máquina de Vendas Automática
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold mb-2">15-35%</div>
              <div className="text-white/90">Taxa de Conversão</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300%+</div>
              <div className="text-white/90">Aumento em Vendas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/90">Vendendo Automaticamente</div>
            </div>
          </div>
          
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Enquanto você dorme, sua nova Landing Page estará trabalhando, 
            convertendo visitantes em clientes e multiplicando seu faturamento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;