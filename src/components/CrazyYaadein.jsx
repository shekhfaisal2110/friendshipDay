import React, { useState, useEffect } from "react";
import { Heart, Camera, ArrowRight, Star, Sparkles, X } from "lucide-react";

const CrazyYaadein = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [randomMemory, setRandomMemory] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const randomMemories = [
    { text: "School ke din yaad hai? Tere saath har din ek adventure hota tha! 😂", emoji: "😆", color: "from-orange-400 to-red-500" },
    { text: "Yaad hai jab me school ke kisi girl ko paresan karta tha aur sab girl tuje bolti thi 😂", emoji: "🤪", color: "from-green-400 to-blue-500" },
    { text: "Ek baar main bimaar tha, aur tu hospital mein mere liye Biryani lekar aaya tha! 🥲", emoji: "🥹", color: "from-purple-400 to-pink-500" },
    { text: "वो तेरा 'last minute' ka plan, jo hamesha sabse best nikalta tha! 🤩", emoji: "🥳", color: "from-yellow-400 to-orange-500" },
    { text: "school me sab se jada mar mene terr hi hath se khaya hai 😉", emoji: "🤫", color: "from-indigo-400 to-purple-500" },
    { text: "Yaad hai wo raat jab humne chaand ko dekh kar future plans discuss kiye the! 🌃", emoji: "💫", color: "from-blue-400 to-indigo-600" },
  ];

  const memoryCards = [
    {
      text: "Care kam, roast jyada karti thi! Har baat pe 'pagal', 'kutta' bolke hi pyar jatati thi. Dosti level: savage! 😜🐕",
      icon: "😜",
      gradient: "from-purple-400 via-fuchsia-500 to-pink-500"
    },
    { 
      text: "school me sab se jada mar mene terr hi hath se khaya hai 😉 😂", 
      icon: "🏫",
      gradient: "from-amber-400 via-orange-500 to-red-500"
    },
    { 
      text: "School ke din yaad hai? Tere saath har din ek adventure hota tha! 😂", 
      icon: "💼",
      gradient: "from-amber-400 via-orange-500 to-red-500"
    },
    {
      text: "Tu toh apni sari baatein mujhse share karti thi, aur dusro ki chugli bhi top level ki hoti thi! Ultimate gossip partner! 🤫😂",
      icon: "🤫",
      gradient: "from-blue-400 via-sky-500 to-teal-400"
    },
    {
      text: "Tu hi thi jispe sabse zyada trust karti thi, aur sabse zyada care bhi tujhi ne ki hai! True support system! 🤗❤️",
      icon: "🤗",
      gradient: "from-green-400 via-emerald-500 to-lime-400"
    },
    { 
      text: "Yaad hai jab me school ke kisi girl ko paresan karta tha aur sab girl tuje bolti thi 😂", 
      icon: "🏫",
      gradient: "from-green-400 via-emerald-500 to-teal-600"
    },
    { 
      text: "Aankhon hi aankhon mein baatein samajh jaati thi tu! Silent communication ki asli misaal thi humari friendship! 👀✨", 
      icon: "👀",
      gradient: "from-purple-400 via-violet-500 to-indigo-600"
    },
    { 
      text: "Late night calls mein sapne share karti, aur subah unhe bhool jaanati! Classic dosti moments! 🌙", 
      icon: "🌙",
      gradient: "from-blue-400 via-cyan-500 to-teal-500"
    },
    { 
      text: "Exam ke din notes share karna, aur phir dono pass hona! Partnership goals! 📚😅", 
      icon: "📚",
      gradient: "from-yellow-400 via-amber-500 to-orange-500"
    }
  ];

  const showRandomMemory = () => {
    const randomIndex = Math.floor(Math.random() * randomMemories.length);
    setRandomMemory(randomMemories[randomIndex]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setRandomMemory(null), 300);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Floating particles component
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute opacity-60"
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
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        
        @keyframes slideInUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes backgroundShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes modalBounce {
          0% { transform: scale(0.3) rotate(-3deg); opacity: 0; }
          50% { transform: scale(1.05) rotate(1deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        .floating-particle {
          animation: float 6s ease-in-out infinite alternate;
        }
        
        .sparkle-animation {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
        }
        
        .background-gradient {
          background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe);
          background-size: 400% 400%;
          animation: backgroundShift 15s ease infinite;
        }
        
        .modal-bounce {
          animation: modalBounce 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        .glass-effect {
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .memory-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .memory-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      <div className="relative min-h-screen background-gradient overflow-hidden">
        <FloatingParticles />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 text-4xl sparkle-animation" style={{ animationDelay: '0s' }}>
          <Sparkles className="text-white opacity-80" size={32} />
        </div>
        <div className="absolute top-32 right-16 text-4xl sparkle-animation" style={{ animationDelay: '1s' }}>
          <Star className="text-yellow-300 opacity-80" size={28} />
        </div>
        <div className="absolute bottom-32 left-20 text-4xl sparkle-animation" style={{ animationDelay: '2s' }}>
          <Heart className="text-pink-300 opacity-80" size={26} />
        </div>
        <div className="absolute bottom-20 right-12 text-4xl sparkle-animation" style={{ animationDelay: '3s' }}>
          <Camera className="text-blue-300 opacity-80" size={30} />
        </div>

        <div className="container mx-auto px-6 py-12">
          {/* Main Title */}
          <div className={`text-center mb-16 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-yellow-200 to-pink-200 bg-clip-text text-transparent mb-4 leading-tight">
              Teri Har Nautanki
            </h1>
            <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-pink-200 via-white to-blue-200 bg-clip-text text-transparent">
              Yaad Hai Mujhe
            </h2>
            <div className="flex justify-center mt-6">
              <div className="text-6xl animate-bounce">😜</div>
            </div>
          </div>

          {/* Memory Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {memoryCards.map((memory, index) => (
              <div
                key={index}
                className={`memory-card glass-effect bg-white bg-opacity-10 rounded-3xl p-8 shadow-xl hover:shadow-2xl ${isVisible ? 'slide-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${memory.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto shadow-lg`}>
                  {memory.icon}
                </div>
                <p className="text-white text-lg leading-relaxed font-medium text-center">
                  {memory.text}
                </p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row justify-center items-center gap-6 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <button
              onClick={showRandomMemory}
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                <Sparkles size={20} />
                Tap for a Random Memory!
                <Sparkles size={20} />
              </span>
            </button>

            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <a href="/gallery" className="relative flex items-center gap-2">
                Continue Journey
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </button>
          </div>
        </div>

        {/* Enhanced Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className={`modal-bounce glass-effect bg-white bg-opacity-95 rounded-3xl p-8 max-w-lg mx-auto text-center shadow-2xl relative`}>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors duration-300 hover:scale-110 transform"
              >
                <X size={28} />
              </button>
              
              {randomMemory && (
                <>
                  <div className={`w-20 h-20 bg-gradient-to-r ${randomMemory.color} rounded-full flex items-center justify-center text-4xl mb-6 mx-auto shadow-lg animate-bounce`}>
                    {randomMemory.emoji}
                  </div>
                  <p className="text-gray-800 text-xl leading-relaxed font-medium">
                    {randomMemory.text}
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={closeModal}
                      className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
                    >
                      Close ❤️
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CrazyYaadein;