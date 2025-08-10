import { AlertTriangle, TrendingDown, Users, DollarSign } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Low Conversion Rate",
      description: "Your current page converts only 1-2% of visitors into customers"
    },
    {
      icon: Users,
      title: "Visitors Who Don’t Buy",
      description: "90% of visitors leave without taking any action"
    },
    {
      icon: DollarSign,
      title: "Lost Revenue",
      description: "Every lost visitor is a sale that didn’t happen"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Lights Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-orange-400/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        
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
          <div className="inline-flex items-center gap-2 text-red-400 mb-8">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-medium text-sm uppercase tracking-wider">Critical Issue</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Your Business Is{" "}
            <span className="font-bold text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text">
              Losing Money
            </span>{" "}
            Every Day
          </h2>
          
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            As you read this, <strong className="text-white">dozens of potential customers</strong> are 
            visiting your site and leaving without buying. The reason? A page that doesn’t convert.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-gray-900/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-red-500/20">
                <problem.icon className="w-6 h-6 text-red-400" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">
                {problem.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-800/30">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-light text-white mb-4">
              The Numbers{" "}
              <span className="font-bold text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text">
                Don’t Lie
              </span>
            </h3>
            <p className="text-gray-400">
              See the real impact of a poorly optimized page:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-light text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text mb-3 group-hover:scale-105 transition-transform">
                $10k
              </div>
              <div className="text-gray-400 text-sm">
                Lost monthly due to low conversion
              </div>
            </div>
            
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-light text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text mb-3 group-hover:scale-105 transition-transform">
                85%
              </div>
              <div className="text-gray-400 text-sm">
                Of visitors leave in under 10 seconds
              </div>
            </div>
            
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-light text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text mb-3 group-hover:scale-105 transition-transform">
                300%
              </div>
              <div className="text-gray-400 text-sm">
                More sales you could be making
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

export default ProblemSection;