import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin, 
  MessageCircle,
  ArrowUp,
  Globe,
  Code
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-light text-white">
                  <span className="font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
                    New Holder
                  </span>
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Specializing in creating high-converting websites that turn visitors into customers. 
                I transform your traffic into real sales with proven strategies and 
                psychologically optimized design.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-white">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="text-gray-300">Available via WhatsApp</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="text-gray-300">hello@webdeveloper.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="text-gray-300">Working Remotely Worldwide</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-semibold text-lg text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#problem" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  The Problem
                </a>
              </li>
              <li>
                <a href="#solution" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  Our Solution
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  About Me
                </a>
              </li>
              <li>
                <a href="#results" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  Results
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Call to Action */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h4 className="font-semibold text-lg text-white">Start Now</h4>
            <p className="text-gray-400 text-sm">
              Ready to multiply your sales? Get a professional website that converts.
            </p>
            
            <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Start Your Project
            </button>
            
            {/* Social Links */}
            <div className="space-y-4">
              <h5 className="font-medium text-white">Follow Me</h5>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-orange-500/20 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-orange-400" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-orange-500/20 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-orange-400" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-orange-500/20 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 text-gray-400 hover:text-orange-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Separator */}
      <div className="border-t border-gray-800/50 relative z-10"></div>
      
      {/* Bottom Footer */}
      <div className="container mx-auto px-6 py-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm flex items-center gap-2">
            © 2024 New Holder. Made With 🥃 por @matfrannca
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300">
              Terms of Use
            </a>
            
            <button
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white hover:bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 transition-all duration-300 flex items-center gap-1 text-sm border border-gray-700/50 hover:border-orange-500/30"
            >
              <ArrowUp className="w-4 h-4" />
              Top
            </button>
          </div>
        </div>
      </div>

      {/* Additional Trust Element */}
      <div className="container mx-auto px-6 pb-6 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-gray-500 text-xs">
            <Code className="w-4 h-4" />
          </div>
        </div>
      </div>
      
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;