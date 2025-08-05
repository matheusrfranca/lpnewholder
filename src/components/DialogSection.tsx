import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, Quote } from "lucide-react";

const DialogSection = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  
  const messages = [
    {
      text: "Você sabia que 96% das pessoas que visitam um site nunca voltam?",
      delay: 0
    },
    {
      text: "É por isso que sua primeira impressão precisa ser PERFEITA.",
      delay: 2000
    },
    {
      text: "Uma Landing Page bem feita não é apenas bonita - ela é uma máquina de persuasão.",
      delay: 4000
    },
    {
      text: "Cada palavra, cada cor, cada botão é estrategicamente posicionado para gerar uma ação.",
      delay: 6000
    },
    {
      text: "E o melhor? Funciona 24 horas por dia, mesmo enquanto você dorme.",
      delay: 8000
    }
  ];

  useEffect(() => {
    messages.forEach((message, index) => {
      setTimeout(() => {
        setCurrentMessage(index + 1);
      }, message.delay);
    });
  }, []);

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">CONVERSA DIRETA COM VOCÊ</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Uma Mensagem do <span className="bg-gradient-primary bg-clip-text text-transparent">Matheus</span>
            </h2>
          </div>

          {/* Chat Interface */}
          <Card className="max-w-3xl mx-auto shadow-elegant overflow-hidden">
            <CardContent className="p-0">
              {/* Chat Header */}
              <div className="bg-gradient-primary text-white p-4 flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-white/20 text-white font-semibold">
                    MF
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Matheus França</div>
                  <div className="text-white/80 text-sm">Especialista em Landing Pages</div>
                </div>
                <div className="ml-auto">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="p-6 bg-gray-50 min-h-[400px]">
                <div className="space-y-6">
                  {messages.slice(0, currentMessage).map((message, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 animate-slide-up"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <Avatar className="w-10 h-10 flex-shrink-0">
                        <AvatarFallback className="bg-gradient-primary text-white text-sm font-semibold">
                          MF
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm max-w-[80%] relative">
                        <Quote className="w-4 h-4 text-primary/30 absolute -top-1 -left-1" />
                        <p className="text-foreground leading-relaxed">
                          {message.text}
                        </p>
                        <div className="text-xs text-muted-foreground mt-2">
                          Agora mesmo
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {currentMessage < messages.length && (
                    <div className="flex items-start gap-3">
                      <Avatar className="w-10 h-10 flex-shrink-0">
                        <AvatarFallback className="bg-gradient-primary text-white text-sm font-semibold">
                          MF
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                          <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Chat Footer */}
              <div className="p-4 bg-white border-t">
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-100 rounded-full px-4 py-3">
                    <span className="text-muted-foreground">
                      Quer saber mais sobre como isso funciona?
                    </span>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-white px-6">
                    Responder
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Action CTA */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Gostou da conversa? Vamos falar sobre seu projeto!
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              Iniciar Conversa Real
              <MessageCircle className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DialogSection;