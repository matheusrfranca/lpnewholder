import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Info, Shield } from "lucide-react";

const DisclaimerSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Info className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Informações Importantes
                </h3>
                <p className="text-muted-foreground">
                  Leia atentamente antes de prosseguir
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Legal Disclaimer */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-amber-500" />
                    <h4 className="text-lg font-semibold text-foreground">
                      Aviso Legal
                    </h4>
                  </div>
                  
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      <strong>Resultados:</strong> Os resultados apresentados são baseados em casos reais de clientes, 
                      mas podem variar conforme o nicho, produto e execução da estratégia de marketing.
                    </p>
                    <p>
                      <strong>Garantias:</strong> A garantia de reembolso está condicionada ao cumprimento 
                      das orientações fornecidas e implementação adequada das estratégias.
                    </p>
                    <p>
                      <strong>Prazos:</strong> Os prazos de entrega podem variar conforme a complexidade 
                      do projeto e disponibilidade de informações do cliente.
                    </p>
                  </div>
                </div>

                {/* Privacy & Security */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                    <h4 className="text-lg font-semibold text-foreground">
                      Privacidade & Segurança
                    </h4>
                  </div>
                  
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      <strong>Dados:</strong> Todas as informações fornecidas são tratadas com absoluta 
                      confidencialidade e utilizadas exclusivamente para o desenvolvimento do projeto.
                    </p>
                    <p>
                      <strong>LGPD:</strong> Estamos em total conformidade com a Lei Geral de Proteção 
                      de Dados e respeitamos todos os direitos dos titulares.
                    </p>
                    <p>
                      <strong>Segurança:</strong> Utilizamos protocolos de segurança avançados para 
                      proteger suas informações e dados comerciais.
                    </p>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="text-center space-y-4">
                  <h5 className="font-semibold text-foreground">
                    Termos de Serviço
                  </h5>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>
                      Ao solicitar nossa consultoria, você concorda com nossos 
                      <a href="#" className="text-primary hover:underline ml-1">Termos de Uso</a> e 
                      <a href="#" className="text-primary hover:underline ml-1">Política de Privacidade</a>.
                    </p>
                    <p>
                      New Holder Marketing Digital LTDA • CNPJ: 00.000.000/0001-00
                    </p>
                    <p className="text-xs">
                      Este site não faz parte do Facebook ou Facebook Inc. Além disso, este site não é 
                      endossado pelo Facebook de forma alguma. Facebook é uma marca registrada da Facebook Inc.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;