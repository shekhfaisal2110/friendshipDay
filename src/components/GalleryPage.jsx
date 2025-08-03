import React, { useState, useEffect } from 'react';
import { Heart, Star, Gift, Camera, Shuffle, ArrowRight, Sparkles, Image as ImageIcon } from 'lucide-react';

const GalleryPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const galleryItems = [
    {
      id: 1,
      src: "https://i.pinimg.com/236x/f8/ce/4c/f8ce4c98d6bcde062c1e11462a558583.jpg",
      alt: "Problem sharing and laughter",
      caption: "Problem share karne ke baad bhi tu mujhe hansa deta tha—tension ko bhi comedy bana deta! 😆",
      gradient: "from-pink-400 to-red-500",
      icon: "😂"
    },
    {
      id: 2,
      src: "https://i.pinimg.com/236x/d7/a5/e2/d7a5e2463e4edd15a3c7fab5a55a8a87.jpg",
      alt: "Roasting and flirting fun",
      caption: "Tere sath roast bhi full-on, aur flirting bhi non-stop! Baat hi kuch aur thi hamari dosti mein. 😏🔥",
      gradient: "from-indigo-500 to-purple-500",
      icon: "🔥"
    },
    {
      id: 3,
      src: "https://i.pinimg.com/236x/f8/ce/4c/f8ce4c98d6bcde062c1e11462a558583.jpg",
      alt: "Sharing all secrets",
      caption: "Apni har ek baat tujhe bina soche share kar di—dosti ka asli trust wahi tha. 🤝💬",
      gradient: "from-teal-400 to-cyan-500",
      icon: "🤝"
    },
   {
     id: 4,
     src: "https://i.pinimg.com/236x/d7/a5/e2/d7a5e2463e4edd15a3c7fab5a55a8a87.jpg",
     alt: "Friends walking on a beach",
     caption: "Har musibat mein tu rock-solid support tha—kabhi akela mehsoos hi nahi hone diya! 🙌❤️",
     gradient: "from-blue-400 to-indigo-500",
     icon: "🏖️"
   },
   {
     id: 5,
     src: "https://i.pinimg.com/236x/f8/ce/4c/f8ce4c98d6bcde062c1e11462a558583.jpg",
     alt: "Friends having a picnic",
     caption: "Tere saath chhoti se chhoti cheez bhi adventure lagti thi—yaari ka har pal epic tha! 🚀",
     gradient: "from-yellow-400 to-orange-500",
     icon: "🎒"
   },
   {
     id: 6,
     src: "https://i.pinimg.com/236x/d7/a5/e2/d7a5e2463e4edd15a3c7fab5a55a8a87.jpg",
     alt: "Another great memory",
     caption: "Wo moment yaad hai? Jab problem ko teamwork aur hasi-mein uda diya tha! Mastermind duo vibes! 💡🤝",
     gradient: "from-indigo-400 to-purple-500",
     icon: "💡"
   }
  ];

  const [shuffledItems, setShuffledItems] = useState(galleryItems);

  const shuffleCards = () => {
    setIsShuffling(true);
    
    setTimeout(() => {
      const newOrder = [...shuffledItems].sort(() => Math.random() - 0.5);
      setShuffledItems(newOrder);
      
      setTimeout(() => {
        setIsShuffling(false);
      }, 500);
    }, 400);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Floating particles component
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 4}s`
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
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes backgroundShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes cardShuffle {
          0% { transform: scale(1) rotateY(0deg); opacity: 1; }
          50% { transform: scale(0.8) rotateY(90deg); opacity: 0.5; }
          100% { transform: scale(1) rotateY(0deg); opacity: 1; }
        }
        
        @keyframes imageZoom {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }
        
        @keyframes captionSlide {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.3); }
          50% { box-shadow: 0 0 40px rgba(255, 255, 255, 0.6); }
        }
        
        .floating-particle {
          animation: float 6s ease-in-out infinite alternate;
        }
        
        .sparkle-animation {
          animation: sparkle 2.5s ease-in-out infinite;
        }
        
        .slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .background-gradient {
          background: linear-gradient(-45deg, #ff9a9e, #fecfef, #fecfef, #a8edea, #fed6e3, #d299c2);
          background-size: 400% 400%;
          animation: backgroundShift 15s ease infinite;
        }
        
        .shuffle-animation {
          animation: cardShuffle 0.8s ease-in-out;
        }
        
        .image-zoom {
          animation: imageZoom 0.6s ease-out;
        }
        
        .caption-slide {
          animation: captionSlide 0.5s ease-out forwards;
        }
        
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .glass-effect {
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .image-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .image-card:hover {
          transform: translateY(-15px) scale(1.03);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }
        
        .image-overlay {
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%);
        }
      `}</style>

      <div className="relative min-h-screen background-gradient overflow-hidden">
        <FloatingParticles />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-12 sparkle-animation" style={{ animationDelay: '0s' }}>
          <Heart className="text-red-400 opacity-70" size={40} />
        </div>
        <div className="absolute top-32 right-16 sparkle-animation" style={{ animationDelay: '1s' }}>
          <Star className="text-yellow-400 opacity-70" size={36} />
        </div>
        <div className="absolute bottom-32 left-16 sparkle-animation" style={{ animationDelay: '2s' }}>
          <Gift className="text-purple-400 opacity-70" size={38} />
        </div>
        <div className="absolute bottom-20 right-12 sparkle-animation" style={{ animationDelay: '3s' }}>
          <Camera className="text-blue-400 opacity-70" size={34} />
        </div>
        <div className="absolute top-1/2 left-8 sparkle-animation" style={{ animationDelay: '4s' }}>
          <Sparkles className="text-pink-400 opacity-70" size={32} />
        </div>

        <div className="container mx-auto px-6 py-12">
          {/* Main Title */}
          <div className={`text-center mb-12 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4 leading-tight">
              Gallery of
            </h1>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-6">
              Giggly Moments
            </h2>
            <div className="flex justify-center mb-4">
              <Camera className="text-white animate-bounce" size={60} />
            </div>
            <p className="text-xl md:text-2xl text-white font-medium max-w-2xl mx-auto leading-relaxed">
              Every picture tells a story of our unforgettable friendship
            </p>
          </div>

          {/* Shuffle Button */}
          <div className={`flex justify-center mb-12 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <button
              onClick={shuffleCards}
              disabled={isShuffling}
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white font-bold rounded-full text-xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                {isShuffling ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Shuffling...
                  </>
                ) : (
                  <>
                    <Shuffle size={20} />
                    Feeling Nostalgic? Shuffle!
                    <Sparkles size={20} />
                  </>
                )}
              </span>
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {shuffledItems.map((item, index) => (
              <div
                key={item.id}
                className={`image-card glass-effect bg-white bg-opacity-10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-white/10 ${isVisible ? 'slide-in-up' : 'opacity-0'} ${isShuffling ? 'shuffle-animation' : ''}`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                    onLoad={(e) => e.target.classList.add('image-zoom')}
                  />
                  <div className="absolute inset-0 image-overlay"></div>
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center text-xl shadow-lg ${hoveredCard === item.id ? 'pulse-glow' : ''}`}>
                    {item.icon}
                  </div>
                  
                  {/* Image number */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className={`flex items-center gap-2 mb-3 ${hoveredCard === item.id ? 'caption-slide' : ''}`}>
                    <ImageIcon size={20} className="text-white opacity-70" />
                    <span className="text-white opacity-70 text-sm font-medium">Memory #{item.id}</span>
                  </div>
                  <p className="text-white text-lg leading-relaxed font-medium">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Button */}
          <div className={`text-center ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white font-bold rounded-full text-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <a href='/thank-you' className="relative flex items-center gap-2">
                Continue Journey
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                💌
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;