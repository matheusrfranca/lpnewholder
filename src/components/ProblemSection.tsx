import { AlertTriangle, TrendingDown, Users, DollarSign } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const ProblemSection = () => {
  const { t } = useTranslation();
  
  const problems = [
    {
      icon: TrendingDown,
      title: t('problem.problems.0.title'),
      description: t('problem.problems.0.description')
    },
    {
      icon: Users,
      title: t('problem.problems.1.title'),
      description: t('problem.problems.1.description')
    },
    {
      icon: DollarSign,
      title: t('problem.problems.2.title'),
      description: t('problem.problems.2.description')
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-semibold">{t('problem.badge')}</span>
          </div>
          
          <h2 
            className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
            dangerouslySetInnerHTML={{ __html: t('problem.title') }}
          />
          
          <p 
            className="text-xl text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('problem.description') }}
          />
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
              {t('problem.statsTitle')}
            </h3>
            <p className="text-muted-foreground">
              {t('problem.statsDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-destructive mb-2">
                {t('problem.stats.0.value')}
              </div>
              <div className="text-muted-foreground">
                {t('problem.stats.0.label')}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-destructive mb-2">
                {t('problem.stats.1.value')}
              </div>
              <div className="text-muted-foreground">
                {t('problem.stats.1.label')}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-destructive mb-2">
                {t('problem.stats.2.value')}
              </div>
              <div className="text-muted-foreground">
                {t('problem.stats.2.label')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;