import React, { useState, useEffect } from 'react';
import { Heart, Star, Rocket, Image, Sparkles, ArrowRight, Camera, Gift } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    // Mouse tracking for interactive effects
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating particles component
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        >
          <div className="w-2 h-2 bg-white rounded-full animate-pulse floating-particle"></div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        
        @keyframes slideInUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slideInDown {
          from { transform: translateY(-100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes backgroundShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-10px) rotateX(2deg); }
        }
        
        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.5); }
          50% { text-shadow: 0 0 40px rgba(255, 255, 255, 0.8); }
        }
        
        @keyframes buttonPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
        }
        
        .floating-particle {
          animation: float 6s ease-in-out infinite alternate;
        }
        
        .sparkle-animation {
          animation: sparkle 2.5s ease-in-out infinite;
        }
        
        .slide-in-up {
          animation: slideInUp 1s ease-out forwards;
        }
        
        .slide-in-down {
          animation: slideInDown 1s ease-out forwards;
        }
        
        .scale-in {
          animation: scaleIn 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        .background-gradient {
          background: linear-gradient(-45deg, #ff9a9e, #fecfef, #fecfef, #a8edea, #fed6e3, #d299c2, #667eea, #764ba2);
          background-size: 400% 400%;
          animation: backgroundShift 20s ease infinite;
        }
        
        .card-float {
          animation: cardFloat 6s ease-in-out infinite;
        }
        
        .text-glow {
          animation: textGlow 3s ease-in-out infinite;
        }
        
        .button-pulse {
          animation: buttonPulse 2s ease-in-out infinite;
        }
        
        .glass-effect {
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
        
        .interactive-bg {
          background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.1) 0%, transparent 50%);
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-20px) scale(1.05);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
        }
      `}</style>

      <div 
        className="min-h-screen background-gradient overflow-hidden relative"
        style={{
          '--mouse-x': `${mousePosition.x}%`,
          '--mouse-y': `${mousePosition.y}%`
        }}
      >
        <FloatingParticles />
        
        {/* Interactive background overlay */}
        <div className="absolute inset-0 interactive-bg pointer-events-none"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-12 sparkle-animation" style={{ animationDelay: '0s' }}>
          <Heart className="text-red-400 opacity-80" size={50} />
        </div>
        <div className="absolute top-32 right-16 sparkle-animation" style={{ animationDelay: '1s' }}>
          <Star className="text-yellow-400 opacity-80" size={45} />
        </div>
        <div className="absolute bottom-32 left-16 sparkle-animation" style={{ animationDelay: '2s' }}>
          <Rocket className="text-purple-400 opacity-80" size={48} />
        </div>
        <div className="absolute bottom-20 right-12 sparkle-animation" style={{ animationDelay: '3s' }}>
          <Image className="text-blue-400 opacity-80" size={42} />
        </div>
        <div className="absolute top-1/2 left-8 sparkle-animation" style={{ animationDelay: '4s' }}>
          <Camera className="text-pink-400 opacity-80" size={40} />
        </div>
        <div className="absolute top-1/4 left-1/2 sparkle-animation" style={{ animationDelay: '5s' }}>
          <Gift className="text-green-400 opacity-80" size={38} />
        </div>

        {/* Main Content */}
        <div className="min-h-screen flex items-center justify-center px-6 py-12">
          <div className="max-w-4xl w-full text-center">
            
            {/* Main Hero Card */}
            <div className={`glass-effect bg-white bg-opacity-10 rounded-3xl p-12 md:p-16 hover-lift card-float ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              
              {/* Title Section */}
              <div className={`mb-8 ${isVisible ? 'slide-in-down' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400 bg-clip-text text-transparent mb-4 text-glow leading-tight">
                  To My
                </h1>
                <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 bg-clip-text text-transparent mb-6">
                  Special One
                </h2>
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <Sparkles className="text-yellow-400 animate-bounce" size={60} />
                    <div className="absolute inset-0 animate-ping">
                      <Sparkles className="text-yellow-300 opacity-75" size={60} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtitle */}
              <div className={`mb-12 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
                <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed max-w-2xl mx-auto">
                  A Journey to all our <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-bold">Best Memories</span>
                </p>
                <div className="flex justify-center gap-4 mt-6">
                  <Heart className="text-red-400 animate-pulse" size={28} />
                  <Star className="text-yellow-400 animate-pulse" size={28} />
                  <Sparkles className="text-purple-400 animate-pulse" size={28} />
                </div>
              </div>

              {/* Action Buttons */}
              <div className={`flex flex-col sm:flex-row justify-center items-center gap-6 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.6s' }}>
                <button className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white font-bold rounded-full text-xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-110 overflow-hidden min-w-[280px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <a href='/crazy-yaadein' className="relative flex items-center justify-center gap-3">
                    <Rocket size={24} className="group-hover:animate-bounce" />
                    Enter The Journey
                    <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                </button>

                <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white font-bold rounded-full text-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 overflow-hidden min-w-[280px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <a href='/gallery' className="relative flex items-center justify-center gap-3">
                    <Camera size={24} className="group-hover:animate-pulse" />
                    See The Gallery
                    <Image size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                </button>
              </div>

              {/* Additional Features Hint */}
              <div className={`mt-12 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '2s' }}>
                <div className="glass-effect bg-white bg-opacity-5 rounded-2xl p-6 max-w-2xl mx-auto">
                  <p className="text-white text-lg opacity-90 leading-relaxed">
                    ✨ Discover memories, generate certificates, and celebrate the beautiful moments we've shared together
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { icon: Heart, title: "Crazy Yaadein", desc: "Relive our funniest moments", color: "from-red-400 to-pink-500", delay: "2.2s" },
                { icon: Camera, title: "Memory Gallery", desc: "Beautiful photo collection", color: "from-blue-400 to-indigo-500", delay: "2.4s" },
                { icon: Gift, title: "Friendship Trophy", desc: "Create your certificate", color: "from-purple-400 to-pink-500", delay: "2.6s" }
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`glass-effect bg-white bg-opacity-10 rounded-2xl p-6 hover-lift ${isVisible ? 'slide-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: feature.delay }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                    <feature.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white opacity-80">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;