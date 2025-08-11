import { useState, useEffect } from "react";
import { MessageCircle, Quote, Send } from "lucide-react";

const DialogSection = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    {
      text: "Did you know that 96% of people who visit a website never return?",
      delay: 1000
    },
    {
      text: "That's why your first impression needs to be PERFECT.",
      delay: 3000
    },
    {
      text: "A well-crafted website isn't just beautiful - it's a persuasion machine.",
      delay: 5000
    },
    {
      text: "Every word, every color, every button is strategically positioned to generate action.",
      delay: 7000
    },
    {
      text: "And the best part? It works 24 hours a day, even while you sleep.",
      delay: 9000
    }
  ];

  useEffect(() => {
    let timer;
    if (currentMessage < messages.length) {
      setIsTyping(true);
      timer = setTimeout(() => {
        setCurrentMessage(prev => prev + 1);
        setIsTyping(false);
      }, messages[currentMessage].delay);
    }
    return () => clearTimeout(timer);
  }, [currentMessage, messages]);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-red-400/6 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        
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
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-orange-400 mb-8">
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium text-sm uppercase tracking-wider">Direct Message</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-4">
              A Personal Message from{" "}
              <span className="font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
                New Holder
              </span>
            </h2>
          </div>

          {/* Chat Interface */}
          <div className="max-w-3xl mx-auto bg-gray-900/20 backdrop-blur-sm rounded-2xl border border-gray-800/30 overflow-hidden animate-slide-up">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-semibold backdrop-blur-sm">
                MF
              </div>
              <div>
                <div className="font-semibold">Matheus França</div>
                <div className="text-white/80 text-sm">Website & Copy Specialist</div>
              </div>
              <div className="ml-auto">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            {/* Chat Messages */}
            <div className="p-6 bg-gradient-to-b from-gray-900/10 to-gray-800/10 backdrop-blur-sm min-h-[400px]">
              <div className="space-y-6">
                {messages.slice(0, currentMessage).map((message, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 animate-message-in"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                      MF
                    </div>
                    
                    <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl rounded-tl-md p-4 border border-gray-700/30 max-w-[80%] relative transform transition-all duration-500 ease-out">
                      <Quote className="w-4 h-4 text-orange-400/30 absolute -top-1 -left-1" />
                      <p className="text-white leading-relaxed">
                        {message.text}
                      </p>
                      <div className="text-xs text-gray-400 mt-2">
                        Just now
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-start gap-3 animate-fade-in">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                      MF
                    </div>
                    
                    <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl rounded-tl-md p-4 border border-gray-700/30">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 bg-orange-400/70 rounded-full animate-typing" style={{ animationDelay: "0s" }}></div>
                        <div className="w-2.5 h-2.5 bg-orange-400/70 rounded-full animate-typing" style={{ animationDelay: "0.15s" }}></div>
                        <div className="w-2.5 h-2.5 bg-orange-400/70 rounded-full animate-typing" style={{ animationDelay: "0.3s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Chat Footer */}
            <div className="p-4 bg-gray-900/30 backdrop-blur-sm border-t border-gray-700/30">
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-800/40 backdrop-blur-sm rounded-full px-4 py-3 border border-gray-700/30">
                  <span className="text-gray-400">
                    Want to know more about how this works?
                  </span>
                </div>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Action CTA */}
          <div className="text-center mt-8 animate-fade-in">
            <p className="text-gray-400 mb-6 text-lg">
              Enjoyed our chat? Let's talk about your project!
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3">
                Get Your Website Today
              <MessageCircle className="w-5 h-5" />
            </button>
            
            {/* Trust Elements */}
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Available Now</span>
              </div>
              <div>•</div>
              <div>Fast Response</div>
              <div>•</div>
              <div>Free Consultation</div>
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

          @keyframes messageIn {
            0% { opacity: 0; transform: translateY(20px) scale(0.95); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }

          @keyframes typing {
            0% { transform: translateY(0); opacity: 0.7; }
            50% { transform: translateY(-4px); opacity: 1; }
            100% { transform: translateY(0); opacity: 0.7; }
          }

          @keyframes pulseSlow {
            0% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.05); opacity: 1; }
            100% { transform: scale(1); opacity: 0.8; }
          }

          .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }
          
          .animate-slide-up {
            animation: slideUp 0.8s ease-out forwards;
          }

          .animate-message-in {
            animation: messageIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .animate-typing {
            animation: typing 0.6s ease-in-out infinite;
          }

          .animate-pulse-slow {
            animation: pulseSlow 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default DialogSection;