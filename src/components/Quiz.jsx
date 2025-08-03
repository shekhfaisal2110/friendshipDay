import React, { useState, useEffect } from "react";
import { Heart, Star, Trophy, Award, Sparkles, CheckCircle, Brain, Gift } from "lucide-react";

const quizData = [
  {
    question: "Problem share karne ke baad tumhara reaction kya hota hai?",
    options: [
      "Tension hata ke comedy bana dete ho 😆",
      "Chup chaap sunte ho, advice bhi milti hai 🤫",
      "Sath baith ke plan banta hai 💡",
      "Seedha bolte ho, 'chill kar yaar!' 😎"
    ],
    correctAnswer: [
      "Tension hata ke comedy bana dete ho 😆",
      "Chup chaap sunte ho, advice bhi milti hai 🤫",
      "Sath baith ke plan banta hai 💡",
      "Seedha bolte ho, 'chill kar yaar!' 😎"
    ],
    icon: "😂",
    gradient: "from-pink-400 to-red-500"
  },
  {
    question: "Dosti mein sabse epic moment kaun sa tha?",
    options: [
      "Chhoti cheez bhi tere saath adventure ho jaati thi 🚀",
      "Roast & flirting ka combo milta tha bas tere saath 😏🔥",
      "Har musibat mein tu saath tha 🙌",
      "Late night chaand dekh kar future discuss karna 💫"
    ],
    correctAnswer: [
      "Chhoti cheez bhi tere saath adventure ho jaati thi 🚀",
      "Roast & flirting ka combo milta tha bas tere saath 😏🔥",
      "Har musibat mein tu saath tha 🙌",
      "Late night chaand dekh kar future discuss karna 💫"
    ],
    icon: "🎒",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    question: "True ya False: Apni har ek baat tujhe bina soche share kar dete ho?",
    options: [
      "Bilkul, sab chhupaana mana hai! 🤝💬",
      "True tha, ab bhi hai! ❤️",
      "Kabhi kabhi nahi, par mostly yes 😅",
      "False, main thoda mystery hoon 👀"
    ],
    correctAnswer: [
      "Bilkul, sab chhupaana mana hai! 🤝💬",
      "True tha, ab bhi hai! ❤️",
      "Kabhi kabhi nahi, par mostly yes 😅"
    ],
    icon: "🤝",
    gradient: "from-teal-400 to-cyan-500"
  },
  {
    question: "Friendship mein secret communication ka level?",
    options: [
      "Aankhon hi aankhon mein baatein samajh lete hain 👀✨",
      "Signal bhejna kaafi hai, sab samajh jaate hain 📡",
      "Bas ek emoji aur mood set ho jaata hai 😜",
      "Long explanation chahiye hota hai 🤔"
    ],
    correctAnswer: [
      "Aankhon hi aankhon mein baatein samajh lete hain 👀✨",
      "Signal bhejna kaafi hai, sab samajh jaate hain 📡",
      "Bas ek emoji aur mood set ho jaata hai 😜"
    ],
    icon: "👀",
    gradient: "from-purple-400 to-indigo-600"
  },
  {
    question: "Kaunsa classic dosti wala moment hai tumhare liye?",
    options: [
      "School mein sabse jyaada mar dost ke haath se khana 🤫",
      "Exam ke din notes share karna 📚",
      "Late night dreams discuss karna 🌙",
      "Sabse epic plan banana, jo kabhi pura nahi hua 😂"
    ],
    correctAnswer: [
      "School mein sabse jyaada mar dost ke haath se khana 🤫",
      "Exam ke din notes share karna 📚",
      "Late night dreams discuss karna 🌙",
      "Sabse epic plan banana, jo kabhi pura nahi hua 😂"
    ],
    icon: "🏫",
    gradient: "from-amber-400 to-red-500"
  }
];


const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

 const handleAnswerSelection = (selectedAnswer) => {
  setSelectedAnswer(selectedAnswer);
  setShowFeedback(true);

  // Mark every answer as correct
  setScore(score + 1); 

  // Store the answer as correct always
  setAnswers([...answers, { question: currentQuestionIndex, selected: selectedAnswer, correct: true }]);

  setTimeout(() => {
    if (currentQuestionIndex + 1 < quizData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setIsQuizOver(true);
    }
  }, 1500);
};


  const getResultMessage = () => {
    const percentage = (score / quizData.length) * 100;
    
    if (percentage === 100) {
      return { 
        heading: "You are the Ultimate Dosti Lover! 👑", 
        message: "Tumhari dosti sach mein anmol hai! 🏆",
        color: "from-yellow-400 to-orange-500",
        icon: Trophy
      };
    } else if (percentage >= 60) {
      return { 
        heading: "You are a Great Friend! ❤️", 
        message: "Tumhari dosti pakki hai!",
        color: "from-pink-400 to-red-500",
        icon: Heart
      };
    } else {
      return { 
        heading: "You are a Good Friend! 😊", 
        message: "Tumhara dil achha hai, par shayad kuch memories dhundhli ho gayi hain.",
        color: "from-blue-400 to-indigo-500",
        icon: Star
      };
    }
  };

  // Floating particles component
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute opacity-40"
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

  const currentQuestion = quizData[currentQuestionIndex];
  const result = getResultMessage();

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(180deg); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        
        @keyframes slideInUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes backgroundShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes pulse-success {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
        }
        
        @keyframes pulse-error {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
        }
        
        @keyframes celebration {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-5deg) scale(1.1); }
          75% { transform: rotate(5deg) scale(1.1); }
        }
        
        .floating-particle {
          animation: float 6s ease-in-out infinite alternate;
        }
        
        .sparkle-animation {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .scale-in {
          animation: scaleIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        .background-gradient {
          background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe);
          background-size: 400% 400%;
          animation: backgroundShift 15s ease infinite;
        }
        
        .pulse-success {
          animation: pulse-success 0.6s ease-in-out;
        }
        
        .pulse-error {
          animation: pulse-error 0.6s ease-in-out;
        }
        
        .celebration {
          animation: celebration 0.8s ease-in-out;
        }
        
        .glass-effect {
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .option-button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .option-button:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      <div className="min-h-screen background-gradient flex items-center justify-center p-6 relative overflow-hidden">
        <FloatingParticles />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-12 sparkle-animation" style={{ animationDelay: '0s' }}>
          <Heart className="text-red-400 opacity-70" size={40} />
        </div>
        <div className="absolute top-32 right-16 sparkle-animation" style={{ animationDelay: '1s' }}>
          <Star className="text-yellow-400 opacity-70" size={36} />
        </div>
        <div className="absolute bottom-32 left-16 sparkle-animation" style={{ animationDelay: '2s' }}>
          <Brain className="text-purple-400 opacity-70" size={38} />
        </div>
        <div className="absolute bottom-20 right-12 sparkle-animation" style={{ animationDelay: '3s' }}>
          <Trophy className="text-orange-400 opacity-70" size={34} />
        </div>

        <div className="max-w-2xl w-full">
          <div className={`glass-effect bg-white bg-opacity-10 rounded-3xl p-8 md:p-12 shadow-2xl ${isVisible ? 'scale-in' : 'opacity-0'}`}>
            
            {isQuizOver ? (
              // Results Screen
              <div className="text-center">
                <div className={`w-24 h-24 bg-gradient-to-r ${result.color} rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl celebration`}>
                  <result.icon className="text-white" size={48} />
                </div>
                
                <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${result.color} bg-clip-text text-transparent mb-6 leading-tight`}>
                  {result.heading}
                </h2>
                
                <p className="text-xl md:text-2xl text-white font-medium mb-8 leading-relaxed">
                  {result.message}
                </p>
                
                <div className="glass-effect bg-white bg-opacity-5 rounded-2xl p-6 mb-8">
                  <div className="flex justify-center items-center gap-4 mb-4">
                    <Trophy className="text-yellow-400" size={32} />
                    <span className="text-3xl font-bold text-white">{score} / {quizData.length}</span>
                    <Trophy className="text-yellow-400" size={32} />
                  </div>
                  <p className="text-white opacity-90">
                    Quiz Score: {Math.round((score / quizData.length) * 100)}%
                  </p>
                </div>
                
                <button className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white font-bold rounded-full text-xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <a href="/friendship-trophy" className="relative flex items-center gap-3">
                    <Award size={24} />
                    Claim Your Certificate
                    <Gift size={24} />
                  </a>
                </button>
              </div>
            ) : (
              // Quiz Screen
              <div>
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white font-medium">Question {currentQuestionIndex + 1} of {quizData.length}</span>
                    <div className="flex items-center gap-2">
                      <Heart className="text-pink-400" size={20} />
                      <span className="text-white font-medium">{score} / {quizData.length}</span>
                    </div>
                  </div>
                  <div className="w-full bg-white bg-opacity-20 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-pink-400 to-purple-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Question */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${currentQuestion.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <span className="text-2xl">{currentQuestion.icon}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-relaxed">
                    {currentQuestion.question}
                  </h2>
                </div>

                {/* Options */}
                <div className="space-y-4 mb-8">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = selectedAnswer === option;
                    const isCorrect = currentQuestion.correctAnswer.includes(selectedAnswer); 

                    
                    let buttonClass = "option-button glass-effect bg-white bg-opacity-10 text-white border-2 border-transparent";
                    
                    if (showFeedback) {
                      if (isSelected && isCorrect) {
                        buttonClass += " pulse-success bg-green-500 bg-opacity-80 border-green-400";
                      } else if (isSelected && !isCorrect) {
                        buttonClass += " pulse-error bg-red-500 bg-opacity-80 border-red-400";
                      } else if (isCorrect) {
                        buttonClass += " bg-green-500 bg-opacity-50 border-green-400";
                      }
                    } else {
                      buttonClass += " hover:bg-white hover:bg-opacity-20 hover:border-white hover:border-opacity-30";
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => !showFeedback && handleAnswerSelection(option)}
                        disabled={showFeedback}
                        className={`${buttonClass} w-full p-4 md:p-6 rounded-2xl text-left text-lg md:text-xl font-semibold shadow-lg disabled:cursor-not-allowed`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option}</span>
                          {showFeedback && isSelected && (
                            <CheckCircle className={isCorrect ? "text-green-300" : "text-red-300"} size={24} />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Feedback Message */}
                {showFeedback && (
                  <div className={`text-center p-4 rounded-2xl ${selectedAnswer === currentQuestion.correctAnswer ? 'bg-green-500 bg-opacity-20' : 'bg-red-500 bg-opacity-20'} slide-in-up`}>
                    <p className="text-white font-medium">
                      {selectedAnswer === currentQuestion.correctAnswer ? 
                        "🎉 Correct! Great job!" : 
                        "😅 Oops! The correct answer was highlighted above."
                      }
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;