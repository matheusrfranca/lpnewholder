import { AlertTriangle, TrendingDown, Users, DollarSign } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Baixa Taxa de Conversão",
      description: "Sua página atual converte apenas 1-2% dos visitantes em clientes"
    },
    {
      icon: Users,
      title: "Visitantes Que Não Compram",
      description: "90% dos visitantes saem sem tomar nenhuma ação"
    },
    {
      icon: DollarSign,
      title: "Dinheiro Perdido",
      description: "Cada visitante perdido é uma venda que não aconteceu"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-semibold">PROBLEMA CRÍTICO</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sua Empresa Está <span className="text-destructive">Perdendo Dinheiro</span> 
            <br />Todos os Dias
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Enquanto você lê isso, <strong>dezenas de clientes em potencial</strong> estão visitando 
            seu site e saindo sem comprar. O motivo? Uma página que não convence, não engaja e não converte.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <problem.icon className="w-8 h-8 text-destructive" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {problem.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Os Números Não Mentem
            </h3>
            <p className="text-muted-foreground">
              Veja o impacto real de uma página mal otimizada:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-destructive mb-2">
                R$ 50.000
              </div>
              <div className="text-muted-foreground">
                Perdidos mensalmente por baixa conversão
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-destructive mb-2">
                85%
              </div>
              <div className="text-muted-foreground">
                Dos visitantes saem em menos de 10 segundos
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-destructive mb-2">
                300%
              </div>
              <div className="text-muted-foreground">
                Mais vendas você poderia ter com a página certa
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;