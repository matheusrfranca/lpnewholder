import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote, TrendingUp, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const SocialProofSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "TechStart Solutions",
      role: "CEO",
      content: "Em 30 dias nossa conversão saltou de 2% para 28%. O ROI foi imediato e os resultados superaram todas as expectativas. Matheus entende de vendas como ninguém.",
      result: "+1400% conversão",
      avatar: "CS"
    },
    {
      name: "Marina Costa",
      company: "Beleza Premium",
      role: "Fundadora",
      content: "Investimos R$ 15k na LP e recuperamos em 2 semanas. Hoje faturamos 5x mais com o mesmo tráfego. A New Holder transformou nosso negócio completamente.",
      result: "+500% faturamento",
      avatar: "MC"
    },
    {
      name: "Rafael Santos",
      company: "Consultoria Financeira",
      role: "Diretor",
      content: "Antes tínhamos dificuldade para conseguir 10 leads por dia. Agora conseguimos mais de 150 leads qualificados diariamente. A mudança foi radical.",
      result: "+1500% leads",
      avatar: "RS"
    },
    {
      name: "Ana Rodrigues",
      company: "EduOnline",
      role: "CMO",
      content: "O que mais me impressionou foi a velocidade. Em 12 dias tínhamos uma página que convertia melhor que 3 anos de tentativas com outras agências.",
      result: "+320% vendas",
      avatar: "AR"
    }
  ];

  const stats = [
    { number: "1000+", label: "LPs Criadas", icon: TrendingUp },
    { number: "R$ 50M+", label: "Em Vendas Geradas", icon: TrendingUp },
    { number: "98%", label: "Clientes Satisfeitos", icon: CheckCircle },
    { number: "300%+", label: "Aumento Médio", icon: Star }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-semibold">RESULTADOS COMPROVADOS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Mais de <span className="bg-gradient-primary bg-clip-text text-transparent">1000 Empresas</span>
            <br />Já Multiplicaram Suas Vendas
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Veja os resultados reais de quem confiou na New Holder para transformar seu negócio
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="text-center p-6 hover:shadow-elegant transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Animated Testimonials */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] lg:h-[300px] overflow-hidden rounded-2xl">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`absolute inset-0 transition-all duration-700 transform ${
                  index === currentTestimonial
                    ? "translate-x-0 opacity-100"
                    : index < currentTestimonial
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                }`}
              >
                <CardContent className="p-8 lg:p-12 h-full flex flex-col justify-center">
                  <div className="flex items-start gap-6">
                    <Quote className="w-12 h-12 text-primary/30 flex-shrink-0" />
                    <div className="flex-1">
                      <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-6">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                              {testimonial.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-semibold text-foreground">
                              {testimonial.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {testimonial.role}, {testimonial.company}
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-primary/10 rounded-lg px-4 py-2">
                          <span className="text-primary font-bold">
                            {testimonial.result}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Floating Success Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            { title: "Tempo Médio", value: "15 dias", subtitle: "Para ver resultados" },
            { title: "ROI Médio", value: "380%", subtitle: "No primeiro mês" },
            { title: "Satisfação", value: "98%", subtitle: "Clientes recomendam" }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300 animate-float"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="text-sm text-muted-foreground mb-2">{item.title}</div>
              <div className="text-3xl font-bold text-primary mb-2">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;