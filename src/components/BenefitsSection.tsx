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
      title: "Faster Launch",
      description: "Your landing page will be ready in up to 15 days, not months like other agencies",
      highlight: "15x faster delivery"
    },
    {
      icon: DollarSign,
      title: "Immediate ROI",
      description: "Recover your investment in the first month with increased conversion rates",
      highlight: "300-500% ROI"
    },
    {
      icon: Users,
      title: "More Qualified Leads",
      description: "Attract exactly the type of customer you want with targeted copywriting",
      highlight: "70% more leads"
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "A solid foundation that grows with your business without limitations",
      highlight: "Unlimited growth potential"
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Stop wasting time with pages that don't convert and focus on what matters",
      highlight: "40h/week saved"
    },
    {
      icon: Shield,
      title: "Total Guarantee",
      description: "Complete support and free adjustments for 6 months after delivery",
      highlight: "6-month warranty"
    },
    {
      icon: Zap,
      title: "Optimized Performance",
      description: "Pages that load in less than 2 seconds on any device",
      highlight: "Maximum speed"
    },
    {
      icon: Target,
      title: "Precise Conversion",
      description: "Tested methodology that converts 15-35% of visitors into customers",
      highlight: "Up to 35% conversion"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-400/6 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        
        {/* Subtle grid pattern */}
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
            <Shield className="w-5 h-5" />
            <span className="font-medium text-sm uppercase tracking-wider">Proven Benefits</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            The{" "}
            <span className="font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
              Benefits
            </span>{" "}
            of a Professional Landing Page
          </h2>
          
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Investing in a high-conversion LP isn't just about having a beautiful page. 
            It's about <strong className="text-white">completely transforming</strong> your business results.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-900/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-300 group hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-orange-500/20">
                <benefit.icon className="w-6 h-6 text-orange-400" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                {benefit.description}
              </p>
              
              <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                <span className="text-orange-400 font-medium text-sm">
                  ✓ {benefit.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-gradient-to-r from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-700/30 animate-fade-in">
          <h3 className="text-2xl lg:text-3xl font-light text-white text-center mb-12">
            Common LP vs{" "}
            <span className="font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
              Professional LP
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Common LP */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-red-400 mb-6 flex items-center gap-2">
                <span className="text-2xl">❌</span> Common Landing Page
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-400">1-2% conversion rate</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-400">Generic design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-400">Copy without persuasion</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-400">No optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-400">Mediocre results</span>
                </div>
              </div>
            </div>
            
            {/* Professional LP */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-orange-400 mb-6 flex items-center gap-2">
                <span className="text-2xl">✅</span> Professional Landing Page
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-400">15-35% conversion rate</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-400">Psychological design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-400">High-conversion copy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-400">Continuous optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-400">Extraordinary results</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30">
              <p className="text-lg text-white font-light">
                The difference? Up to{" "}
                <span className="font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
                  300% more sales
                </span>{" "}
                with the same amount of traffic
              </p>
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

export default BenefitsSection;