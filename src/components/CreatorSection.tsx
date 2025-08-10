import { Badge, Award, Users, TrendingUp, CheckCircle, Target, Shield, Zap } from "lucide-react";

const CompanySection = () => {
  const achievements = [
    "1000+ Landing Pages created and validated",
    "98% client approval rate",
    "$10M+ in sales generated for clients",
    "Conversion Copywriting Specialists",
    "15+ years of combined experience",
    "Proven proprietary methodology"
  ];

  const teamMembers = [
    { icon: Target, role: "Strategy", description: "In-depth analysis of your market" },
    { icon: Zap, role: "Design", description: "Layouts that convert visitors" },
    { icon: TrendingUp, role: "Copy", description: "Copy that sells for you" },
    { icon: Shield, role: "Optimization", description: "Continuous performance testing" }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-red-400/6 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Company Visual */}
          <div className="relative animate-fade-in">
            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/30">
              <div className="aspect-[4/5] bg-gradient-to-br from-orange-500/10 to-red-500/5 rounded-xl relative overflow-hidden border border-orange-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5"></div>
                
                {/* Company Logo/Brand Area */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full mx-auto mb-6 flex items-center justify-center border border-orange-500/30">
                      <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">NH</div>
                    </div>
                    <div className="text-2xl font-bold mb-2">New Holder</div>
                    <div className="text-orange-400 font-medium">High-Conversion Landing Pages</div>
                  </div>
                </div>
                
                {/* Team Indicators */}
                <div className="absolute top-4 right-4">
                  <div className="bg-gray-900/80 backdrop-blur-sm text-orange-400 px-3 py-1 rounded-full text-sm border border-orange-500/20">
                    <Users className="w-4 h-4 mr-1 inline" />
                    Expert Team
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4">
                  <div className="bg-gray-900/80 backdrop-blur-sm text-orange-400 px-3 py-1 rounded-full text-sm border border-orange-500/20">
                    <TrendingUp className="w-4 h-4 mr-1 inline" />
                    1000+ Projects
                  </div>
                </div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 border border-orange-500/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">98%</div>
                  <div className="text-sm text-gray-400">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-orange-400 mb-4">
                <Award className="w-5 h-5" />
                <span className="font-medium text-sm uppercase tracking-wider">About New Holder</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                The Team that{" "}
                <span className="font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
                  Multiplies
                </span>{" "}
                Your Sales
              </h2>
              
              <p className="text-xl text-gray-400 leading-relaxed">
                At New Holder, we bring together the <strong className="text-white">best specialists</strong> in 
                each field to create pages that not only impress but{" "}
                <strong className="text-white">convert visitors into customers</strong>.
              </p>
            </div>

            {/* Team Specialties */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">
                Our Expert Team:
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-gray-900/20 backdrop-blur-sm rounded-xl p-4 border border-gray-800/30 hover:border-orange-500/30 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500/20">
                        <member.icon className="w-4 h-4 text-orange-400" />
                      </div>
                      <span className="text-white font-medium">{member.role}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{member.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">
                What Makes Us Unique:
              </h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
              <blockquote className="text-lg text-white leading-relaxed">
                "We don’t just create beautiful pages. We develop{" "}
                <strong className="text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
                  persuasion systems
                </strong>{" "}
                that turn visitors into customers passionate about your brand."
              </blockquote>
              <div className="mt-4 text-orange-400 font-semibold">
                — New Holder Team
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">
                Our Guarantee to You:
              </h4>
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/30">
                <p className="text-gray-400 mb-4">
                  If your new Landing Page doesn’t increase your conversions by at least{" "}
                  <strong className="text-orange-400">150% in the first 90 days</strong>, 
                  we’ll redesign it for free until you’re satisfied.
                </p>
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Why?</strong> Because our methodology is tested and approved by hundreds of clients.
                </p>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-2">
              I Want to Work with New Holder
              <span className="text-xl">→</span>
            </button>
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

export default CompanySection;