import { Star, Quote, TrendingUp, CheckCircle, Award, Users } from "lucide-react";
import { useState, useEffect } from "react";

const SocialProofSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "TechStart Solutions",
      role: "CEO",
      content: "In 30 days our conversion jumped from 2% to 28%. The ROI was immediate and results exceeded all expectations. The team understands sales like no one else.",
      result: "+1400% conversion",
      avatar: "CS"
    },
    {
      name: "Marina Costa",
      company: "Beauty Premium",
      role: "Founder",
      content: "We invested $15k in the LP and recovered it in 2 weeks. Today we generate 5x more revenue with the same traffic. They completely transformed our business.",
      result: "+500% revenue",
      avatar: "MC"
    },
    {
      name: "Rafael Santos",
      company: "Financial Consulting",
      role: "Director",
      content: "Before we struggled to get 10 leads per day. Now we get over 150 qualified leads daily. The change was radical and immediate.",
      result: "+1500% leads",
      avatar: "RS"
    },
    {
      name: "Ana Rodriguez",
      company: "EduOnline",
      role: "CMO",
      content: "What impressed me most was the speed. In 12 days we had a page that converted better than 3 years of attempts with other agencies.",
      result: "+320% sales",
      avatar: "AR"
    }
  ];

  const stats = [
    { number: "1000+", label: "LPs Created", icon: TrendingUp },
    { number: "$50M+", label: "In Sales Generated", icon: Award },
    { number: "98%", label: "Satisfied Clients", icon: CheckCircle },
    { number: "300%+", label: "Average Increase", icon: Star }
  ];

  // Mock social proof posts data
  const socialPosts = [
    { id: 1, author: "Marketing Pro", content: "Just launched and already seeing 400% increase!", avatar: "MP", likes: 234 },
    { id: 2, author: "Tech Startup", content: "From $10K to $85K in monthly revenue!", avatar: "TS", likes: 456 },
    { id: 3, author: "E-commerce King", content: "Best investment we made this year. ROI is insane!", avatar: "EK", likes: 187 },
    { id: 4, author: "Digital Agency", content: "Our clients are seeing 200-400% conversion increases", avatar: "DA", likes: 298 },
    { id: 5, author: "SaaS Founder", content: "Went from 2% to 23% conversion rate in 3 weeks", avatar: "SF", likes: 389 },
    { id: 6, author: "Online Coach", content: "Finally a landing page that actually converts!", avatar: "OC", likes: 156 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-red-400/6 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        
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
            <Star className="w-5 h-5 fill-current" />
            <span className="font-medium text-sm uppercase tracking-wider">Proven Results</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Over{" "}
            <span className="font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
              1000 Companies
            </span>
            <br />Have Multiplied Their Sales
          </h2>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            See the real results from those who trusted us to transform their business
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gray-900/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-300 group hover:-translate-y-2 animate-slide-up text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-orange-500/20">
                <stat.icon className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-3xl font-light text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Animated Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative h-[350px] overflow-hidden rounded-2xl bg-gray-900/20 backdrop-blur-sm border border-gray-800/30">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 transform ${
                  index === currentTestimonial
                    ? "translate-x-0 opacity-100"
                    : index < currentTestimonial
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                }`}
              >
                <div className="p-8 lg:p-12 h-full flex flex-col justify-center">
                  <div className="flex items-start gap-6">
                    <Quote className="w-12 h-12 text-orange-400/30 flex-shrink-0" />
                    <div className="flex-1">
                      <blockquote className="text-lg lg:text-xl text-white leading-relaxed mb-6">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-semibold">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <div className="font-semibold text-white">
                              {testimonial.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {testimonial.role}, {testimonial.company}
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-orange-500/10 rounded-lg px-4 py-2 border border-orange-500/20">
                          <span className="text-orange-400 font-semibold">
                            {testimonial.result}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-orange-400 w-8"
                    : "bg-orange-400/30 hover:bg-orange-400/50 w-2"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Social Proof Wall - Scrolling Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-white text-center mb-8">
            Real{" "}
            <span className="font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
              Success Stories
            </span>
          </h3>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left gap-4">
              {[...socialPosts, ...socialPosts].map((post, index) => (
                <div 
                  key={`${post.id}-${index}`}
                  className="flex-shrink-0 w-80 bg-gray-900/20 backdrop-blur-sm rounded-xl p-6 border border-gray-800/30"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {post.avatar}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{post.author}</div>
                      <div className="text-gray-400 text-xs">Verified Customer</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">"{post.content}"</p>
                  <div className="flex items-center gap-2">
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-400 text-xs">• {post.likes} likes</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Average Time", value: "15 days", subtitle: "To see results" },
            { title: "Average ROI", value: "380%", subtitle: "In the first month" },
            { title: "Satisfaction", value: "98%", subtitle: "Clients recommend us" }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-sm text-gray-400 mb-2">{item.title}</div>
              <div className="text-3xl font-light text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text mb-2">{item.value}</div>
              <div className="text-sm text-gray-400">{item.subtitle}</div>
            </div>
          ))}
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
          
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes scrollLeft {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }
          
          .animate-slide-up {
            animation: slideUp 0.8s ease-out forwards;
          }
          
          .animate-fade-up {
            animation: fadeUp 0.8s ease-out forwards;
          }
          
          .animate-scroll-left {
            animation: scrollLeft 30s linear infinite;
          }
          
          .animate-scroll-left:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default SocialProofSection;