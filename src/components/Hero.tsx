import { Button } from "@/components/ui/button";
import { Play, Volume2 } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Lights Effect */}
      <div className="absolute inset-0">
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-orange-500/20 via-orange-500/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Secondary lights */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-400/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-red-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen py-12 text-center">
          
          {/* Minimal Badge */}
          <div className="mb-12 animate-fade-in">
            <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">
              New Website Creation Model
            </span>
          </div>

          {/* Clean Heading */}
          <div className="mb-16 animate-slide-up">
            <h1 className="text-4xl lg:text-6xl font-light text-white leading-tight max-w-4xl mb-6">
              Create{" "}
              <span className="font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
                Unbeatable
              </span>
              <br />
              Websites That Sell
            </h1>
            
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional websites that convert visitors into customers
            </p>
          </div>

          {/* Minimal Video Player */}
          <div className="relative w-full max-w-3xl mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden">
              
              {/* Simple Controls */}
              <div className="flex items-center justify-between p-4 border-b border-gray-800/50">
                <button className="flex items-center gap-2 text-white/80 text-sm hover:text-white transition-colors">
                  <Volume2 className="w-4 h-4" />
                  Enable Sound
                </button>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Video Area */}
              <div className="aspect-video bg-gradient-to-br from-gray-900/30 to-black/50 relative group cursor-pointer">
                
                {/* Subtle Interface Elements */}
                <div className="absolute top-6 left-6">
                  <div className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                    Creating Website
                  </div>
                </div>
                
                {/* Clean Progress Indicator */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/80 text-sm">Progress</span>
                      <span className="text-orange-400 text-sm">85%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-1">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-1 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>
                
                {/* Central Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                    <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simple CTA */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 text-base font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25">
              Create My Website Now
            </Button>
            
            <p className="text-gray-500 text-sm mt-6">
              Instant access • No commitment
            </p>
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
          
          .bg-gradient-radial {
            background: radial-gradient(circle, var(--tw-gradient-stops));
          }
        `}
      </style>
    </section>
  );
};

export default Hero;