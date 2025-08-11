import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  Zap, 
  Shield,
  Gift,
  Users,
  Phone,
  Globe,
  PenTool,
  Target,
  Award
} from "lucide-react";

const OfferSection = () => {
  const offerFeatures = [
    "Professional website with high conversion design",
    "Persuasive copywriting tailored to your audience", 
    "Mobile-responsive design for all devices",
    "SEO-optimized content and structure",
    "Integration with payment systems",
    "Contact forms and lead capture setup",
    "Social media integration",
    "Basic analytics setup included"
  ];

  const bonuses = [
    {
      icon: Gift,
      title: "Bonus #1: Free Website Audit",
      description: "Complete analysis of your current site + improvement recommendations",
      value: "$150"
    },
    {
      icon: Users,
      title: "Bonus #2: Social Media Copy Templates", 
      description: "5 high-converting social media post templates for promotion",
      value: "$100"
    },
    {
      icon: Target,
      title: "Bonus #3: Conversion Checklist",
      description: "Complete guide with 30 points to optimize any website",
      value: "$75"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-red-400/6 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-orange-400 mb-8">
            <Clock className="w-5 h-5" />
            <span className="font-medium text-sm uppercase tracking-wider">Limited Time Offer</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Ready to{" "}
            <span className="font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
              Transform
            </span>
            <br />Your Online Presence?
          </h2>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            Get a professional website with <strong className="text-white">persuasive copy</strong> that converts visitors into customers.
            <br />Investment starts at just <strong className="text-orange-400">$500</strong>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Offer */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden bg-gray-900/20 backdrop-blur-sm rounded-2xl border border-gray-800/30 animate-slide-up">
              {/* Highlight Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-bl-xl">
                <span className="font-semibold text-sm">MOST POPULAR</span>
              </div>
              
              <div className="p-8 lg:p-12">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="w-8 h-8 text-orange-400" />
                      <h3 className="text-2xl lg:text-3xl font-light text-white">
                        Professional Website +{" "}
                        <span className="font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
                          Persuasive Copy
                        </span>
                      </h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      Everything you need to start converting visitors into customers. 
                      No complications, no delays, just results that drive sales.
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {offerFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Pricing */}
                  <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
                    <div className="text-center">
                      <div className="text-sm text-gray-400 mb-2">Complete package value:</div>
                      <div className="text-2xl text-gray-400 line-through mb-2">$825</div>
                      <div className="text-4xl lg:text-5xl font-light text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text mb-2">$500</div>
                      <div className="text-sm text-gray-400">
                        One-time investment • No monthly fees
                      </div>
                    </div>
                  </div>
                  
                  {/* Process */}
                  <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-500/20">
                    <div className="flex items-start gap-4">
                      <PenTool className="w-8 h-8 text-orange-400 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-2">
                          Simple Process
                        </h4>
                        <p className="text-sm text-gray-300">
                          After payment, I'll contact you within 24 hours to discuss your project details 
                          and start creating your high-converting website.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Guarantee */}
                  <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-orange-400 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-2">
                          30-Day Money-Back Guarantee
                        </h4>
                        <p className="text-sm text-gray-300">
                          If you're not completely satisfied with your new website, 
                          I'll refund 100% of your investment within 30 days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bonuses & CTA */}
          <div className="space-y-6">
            {/* Bonuses */}
            <div className="bg-gray-900/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/30 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h4 className="font-semibold text-white mb-6 text-center">
                <span className="text-orange-400">Free Bonuses</span> ($325 value)
              </h4>
              
              <div className="space-y-4">
                {bonuses.map((bonus, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-lg border border-gray-700/30">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-orange-500/20">
                      <bonus.icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium text-white text-sm mb-1">
                        {bonus.title}
                      </h5>
                      <p className="text-xs text-gray-400 mb-2">
                        {bonus.description}
                      </p>
                      <span className="text-xs text-orange-400 font-medium">
                        Value: {bonus.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-center">
                <Award className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-4">
                  Get Your Website Today
                </h4>
                <p className="text-white/90 mb-6 text-sm">
                  Start converting visitors into customers with a professional website and persuasive copy
                </p>
                
                <button className="w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold py-4 px-6 rounded-xl mb-4 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <Calendar className="w-5 h-5 mr-2 inline" />
                  Order Now - $500
                </button>
                
                <div className="space-y-2 text-xs text-white/80">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>I'll contact you within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Delivery: 7-14 days</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust Elements */}
            <div className="bg-gradient-to-r from-gray-900/30 to-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-4 text-center animate-fade-in">
              <div className="text-orange-400 font-medium text-sm mb-2">
                ✓ Secure Payment • ✓ Fast Delivery • ✓ Professional Results
              </div>
              <div className="text-xs text-gray-400">
                Join 500+ satisfied clients who transformed their online presence
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }
          
          .animate-slide-up {
            animation: slideUp 0.8s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default OfferSection;