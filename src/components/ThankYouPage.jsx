import React, { useEffect, useState } from "react";
import { Heart, ChevronRight, Sparkles } from "lucide-react";

function ThankYouPage() {
  const [heartBroken, setHeartBroken] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [showSparkles, setShowSparkles] = useState(false);
  const titleText = "Dil Se – Ek Thank You 💌";

  // Typewriter Effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < titleText.length) {
        setTypingText((prev) => prev + titleText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setShowSparkles(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Breakable Heart Logic
  const breakHeart = () => {
    setHeartBroken(!heartBroken);
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 animate-pulse"></div>
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(45deg, rgba(255,182,193,0.3) 0%, rgba(138,43,226,0.3) 50%, rgba(72,61,139,0.3) 100%)',
          animation: 'gradientShift 8s ease-in-out infinite'
        }}
      ></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating Doodles with Staggered Animation */}
      <div className="absolute top-10 left-5 text-4xl transform transition-all duration-1000 hover:scale-125" 
           style={{ animation: 'bounce 2s ease-in-out infinite' }}>❤️</div>
      <div className="absolute top-32 right-16 text-4xl transform transition-all duration-1000 hover:scale-125"
           style={{ animation: 'bounce 2s ease-in-out infinite 0.3s' }}>✨</div>
      <div className="absolute bottom-20 left-24 text-4xl transform transition-all duration-1000 hover:scale-125"
           style={{ animation: 'bounce 2s ease-in-out infinite 0.6s' }}>💫</div>
      <div className="absolute bottom-10 right-5 text-4xl transform transition-all duration-1000 hover:scale-125"
           style={{ animation: 'bounce 2s ease-in-out infinite 0.9s' }}>🫶</div>
      <div className="absolute top-60 left-44 text-4xl transform transition-all duration-1000 hover:scale-125"
           style={{ animation: 'bounce 2s ease-in-out infinite 1.2s' }}>💖</div>
      <div className="absolute top-80 right-32 text-4xl transform transition-all duration-1000 hover:scale-125"
           style={{ animation: 'bounce 2s ease-in-out infinite 1.5s' }}>🥳</div>

      {/* Main Content Card with Glassmorphism */}
      <div 
        className="relative z-10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/30 text-center max-w-2xl mx-4 transform transition-all duration-700 hover:scale-105"
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          boxShadow: '0 25px 45px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          animation: 'cardEntrance 1s ease-out'
        }}
      >
        {/* Title with Gradient Text */}
        <h1 
          className="text-5xl font-bold mb-8 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent relative"
          style={{ fontFamily: 'cursive' }}
        >
          {typingText}
          <span className="animate-pulse">|</span>
          {showSparkles && (
            <Sparkles className="inline-block ml-2 text-yellow-400 animate-spin" size={32} />
          )}
        </h1>

        {/* Message Block with Staggered Animation */}
        <div className="text-xl text-white mb-10 space-y-6 text-left">
          <div 
            className="relative pl-8 p-4 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 transform transition-all duration-500 hover:bg-white/20"
            style={{ animation: 'slideInLeft 1s ease-out 0.5s both' }}
          >
            <p className="font-medium">
              Zindagi mein tu uss page ki tarah hai
              <span className="absolute top-2 right-4 text-2xl animate-pulse">💫</span>
            </p>
          </div>
          
          <div 
            className="relative pl-8 p-4 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 transform transition-all duration-500 hover:bg-white/20"
            style={{ animation: 'slideInLeft 1s ease-out 0.8s both' }}
          >
            <p className="font-medium">
              jahan main baar baar laut ke aata hoon...
              <span className="absolute top-2 right-4 text-2xl animate-bounce">❤️</span>
            </p>
          </div>
          
          <div 
            className="relative pl-8 p-4 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 transform transition-all duration-500 hover:bg-white/20"
            style={{ animation: 'slideInLeft 1s ease-out 1.1s both' }}
          >
            <p className="font-medium">
              Thank you for being you.
              <span className="absolute top-2 right-4 text-2xl animate-spin">🫶</span>
            </p>
          </div>
        </div>

        {/* Interactive Heart with 3D Effect */}
        <div
          onClick={breakHeart}
          className="relative inline-block cursor-pointer transform transition-all duration-300 hover:scale-110 active:scale-95 mb-8"
          style={{ animation: 'heartbeat 1.5s ease-in-out infinite' }}
        >
          <div className="text-7xl select-none">
            {heartBroken ? "💔" : "💖"}
          </div>
          
          {heartBroken && (
            <div 
              className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-80 p-4 rounded-xl backdrop-blur-md bg-white/20 border border-white/30 text-white font-medium"
              style={{ animation: 'fadeInUp 0.5s ease-out' }}
            >
              Tu nahi hota toh main itna khud pe yakeen nahi kar paata...
            </div>
          )}
        </div>

        {/* Action Button with Enhanced Styling */}
        <button
          className="group relative inline-flex items-center justify-center px-10 py-4 mt-8 font-bold text-white rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-pink-300"
          style={{
            background: 'linear-gradient(135deg, #ff6b6b, #ffd93d, #6bcf7f, #4ecdc4, #45b7d1)',
            backgroundSize: '300% 300%',
            animation: 'gradientAnimation 3s ease infinite'
          }}
        //   onClick={() => alert('Quiz feature coming soon! 🎯')}
        >
          <a href="/quiz" className="relative z-10 flex items-center">
            Next → Challenge Quiz
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
          </a>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </button>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
          50% { transform: translateX(-50%) translateY(-50%) rotate(180deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes cardEntrance {
          0% { opacity: 0; transform: translateY(50px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
          100% { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}

export default ThankYouPage;