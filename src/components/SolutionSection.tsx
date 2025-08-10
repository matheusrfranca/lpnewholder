import { Target, Zap, TrendingUp, Shield } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: Target,
      title: "Persuasive Copy",
      description: "Text that touches customer pain points and presents your solution as the only alternative",
      benefit: "Increases interest by 250%"
    },
    {
      icon: Zap,
      title: "Psychological Design",
      description: "Strategic layout that guides the visitor's eye directly to the purchase action",
      benefit: "Improves experience by 180%"
    },
    {
      icon: TrendingUp,
      title: "Conversion Funnels",
      description: "Perfect sequence that transforms curious visitors into convinced customers",
      benefit: "Multiplies sales by 3x"
    },
    {
      icon: Shield,
      title: "Continuous Optimization",
      description: "Constant A/B testing to maximize every element of your page",
      benefit: "Always growing performance"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Lights Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-red-400/6 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        
        {/* Subtle grid */}
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
            <Target className="w-5 h-5" />
            <span className="font-medium text-sm uppercase tracking-wider">Proven Solution</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            How We{" "}
            <span className="font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
              Double
            </span>{" "}
            Your Online Sales
          </h2>
          
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Our <strong className="text-white">exclusive methodology</strong> combines consumer psychology, 
            persuasive design and high-conversion copywriting to create pages that{" "}
            <strong className="text-white">sell for you</strong>.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-gray-900/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-300 group hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-orange-500/20">
                <solution.icon className="w-6 h-6 text-orange-400" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">
                {solution.title}
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                {solution.description}
              </p>
              
              <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                <span className="text-orange-400 font-medium text-sm">
                  ✓ {solution.benefit}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Results Preview */}
        <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 backdrop-blur-sm rounded-2xl p-8 lg:p-12 text-center animate-fade-in border border-orange-500/20">
          <h3 className="text-2xl lg:text-3xl font-light text-white mb-8">
            The Result? An{" "}
            <span className="font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
              Automatic Sales Machine
            </span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="group">
              <div className="text-4xl font-light text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text mb-3 group-hover:scale-105 transition-transform">
                15-35%
              </div>
              <div className="text-gray-400 text-sm">Conversion Rate</div>
            </div>
            <div className="group">
              <div className="text-4xl font-light text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text mb-3 group-hover:scale-105 transition-transform">
                300%+
              </div>
              <div className="text-gray-400 text-sm">Sales Increase</div>
            </div>
            <div className="group">
              <div className="text-4xl font-light text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text mb-3 group-hover:scale-105 transition-transform">
                24/7
              </div>
              <div className="text-gray-400 text-sm">Selling Automatically</div>
            </div>
          </div>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            While you sleep, your new landing page will be working, 
            converting visitors into customers and multiplying your revenue.
          </p>
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

export default SolutionSection;