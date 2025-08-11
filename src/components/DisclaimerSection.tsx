import { AlertTriangle, Info, Shield, FileText } from "lucide-react";

const DisclaimerSection = () => {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/20 backdrop-blur-sm rounded-2xl border border-gray-800/30 animate-fade-in">
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/20">
                  <Info className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-2xl font-light text-white mb-2">
                  Important{" "}
                  <span className="font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
                    Information
                  </span>
                </h3>
                <p className="text-gray-400">
                  Please read carefully before proceeding
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Legal Disclaimer */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-amber-400" />
                    <h4 className="text-lg font-semibold text-white">
                      Legal Disclaimer
                    </h4>
                  </div>
                  
                  <div className="space-y-3 text-sm text-gray-400">
                    <p>
                      <strong className="text-white">Results:</strong> The results presented are based on real client cases, 
                      but may vary depending on niche, product, and execution of marketing strategy.
                    </p>
                    <p>
                      <strong className="text-white">Guarantees:</strong> The refund guarantee is conditional upon following 
                      the provided guidelines and proper implementation of strategies.
                    </p>
                    <p>
                      <strong className="text-white">Timelines:</strong> Delivery timelines may vary depending on project 
                      complexity and availability of client information.
                    </p>
                  </div>
                </div>

                {/* Privacy & Security */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-orange-400" />
                    <h4 className="text-lg font-semibold text-white">
                      Privacy & Security
                    </h4>
                  </div>
                  
                  <div className="space-y-3 text-sm text-gray-400">
                    <p>
                      <strong className="text-white">Data:</strong> All information provided is treated with absolute 
                      confidentiality and used exclusively for project development.
                    </p>
                    <p>
                      <strong className="text-white">Privacy:</strong> We are fully compliant with data protection 
                      regulations and respect all user rights.
                    </p>
                    <p>
                      <strong className="text-white">Security:</strong> We use advanced security protocols to 
                      protect your information and business data.
                    </p>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="mt-8 pt-6 border-t border-gray-800/50">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-orange-400" />
                    <h5 className="font-semibold text-white">
                      Terms of Service
                    </h5>
                  </div>
                  
                  <div className="text-sm text-gray-400 space-y-2">
                    <p>
                      By requesting our services, you agree to our
                      <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors ml-1 hover:underline">Terms of Use</a> and 
                      <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors ml-1 hover:underline">Privacy Policy</a>.
                    </p>
                    <p>
                      Professional Web Development Services • Independent Contractor
                    </p>
                    <p className="text-xs text-gray-500">
                      This website is not part of Facebook or Facebook Inc. Additionally, this site is not 
                      endorsed by Facebook in any way. Facebook is a registered trademark of Facebook Inc.
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Trust Elements */}
              <div className="mt-8 pt-6 border-t border-gray-800/50">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <Shield className="w-6 h-6 text-orange-400" />
                    <span className="text-sm text-gray-400">Secure Payment</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Info className="w-6 h-6 text-orange-400" />
                    <span className="text-sm text-gray-400">Transparent Process</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <FileText className="w-6 h-6 text-orange-400" />
                    <span className="text-sm text-gray-400">Clear Terms</span>
                  </div>
                </div>
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
          
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default DisclaimerSection;