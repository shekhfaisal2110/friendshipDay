import React, { useState, useEffect } from 'react';
import { Heart, Handshake, Gift, Crown, Sparkles, Download, Star, Award } from 'lucide-react';

const FriendshipTrophy = () => {
    const [name, setName] = useState('');
    const [showCertificate, setShowCertificate] = useState(false);
    const [placeholderText, setPlaceholderText] = useState('Enter your name, dost...');
    const [isDownloading, setIsDownloading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);

    const placeholders = [
        "Enter your name, dost...",
        "What's your legendary title?",
        "Write it like a signature 🖋️",
        "Your friendship legacy awaits...",
        "The trophy bearer's name..."
    ];

    useEffect(() => {
        setIsVisible(true);
        
        // Enhanced placeholder animation
        const animatePlaceholder = () => {
            const currentPlaceholder = placeholders[currentPlaceholderIndex];
            let displayText = '';
            let charIndex = 0;
            
            const typeInterval = setInterval(() => {
                displayText += currentPlaceholder[charIndex];
                setPlaceholderText(displayText);
                charIndex++;
                
                if (charIndex >= currentPlaceholder.length) {
                    clearInterval(typeInterval);
                    setTimeout(() => {
                        // Clear text
                        const clearInterval = setInterval(() => {
                            displayText = displayText.slice(0, -1);
                            setPlaceholderText(displayText);
                            if (displayText === '') {
                                clearInterval(clearInterval);
                                setCurrentPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
                            }
                        }, 30);
                    }, 2000);
                }
            }, 100);
        };

        const placeholderTimer = setTimeout(() => {
            animatePlaceholder();
        }, 1000);

        return () => clearTimeout(placeholderTimer);
    }, [currentPlaceholderIndex]);

    const generateCertificate = () => {
        if (name.trim()) {
            setShowCertificate(true);
        } else {
            // Create a subtle shake animation for the input
            const inputElement = document.querySelector('input');
            inputElement.classList.add('shake-animation');
            setTimeout(() => inputElement.classList.remove('shake-animation'), 600);
        }
    };

    const downloadCertificate = async () => {
        setIsDownloading(true);
        
        try {
            // Create canvas for certificate
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Set canvas dimensions
            canvas.width = 1200;
            canvas.height = 800;
            
            // Create gradient background
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#ff6b6b');
            gradient.addColorStop(0.2, '#4ecdc4');
            gradient.addColorStop(0.4, '#45b7d1');
            gradient.addColorStop(0.6, '#96ceb4');
            gradient.addColorStop(0.8, '#feca57');
            gradient.addColorStop(1, '#ff9ff3');
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Add decorative border
            ctx.strokeStyle = '#ffd700';
            ctx.lineWidth = 12;
            ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);
            
            // Inner border
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 4;
            ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);
            
            // Add certificate background
            ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
            ctx.fillRect(80, 80, canvas.width - 160, canvas.height - 160);
            
            // Title
            ctx.fillStyle = '#333';
            ctx.font = 'bold 48px Arial, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('🏆 FRIENDSHIP TROPHY 🏆', canvas.width / 2, 180);
            
            // Certificate text
            ctx.font = '28px Arial, sans-serif';
            ctx.fillText('This certifies that', canvas.width / 2, 250);
            
            // Name with decorative box
            ctx.strokeStyle = '#ffd700';
            ctx.lineWidth = 3;
            ctx.setLineDash([10, 5]);
            ctx.strokeRect(200, 280, canvas.width - 400, 100);
            ctx.setLineDash([]);
            
            // Name text
            ctx.fillStyle = '#e91e63';
            ctx.font = 'bold 56px Arial, sans-serif';
            ctx.fillText(name.toUpperCase(), canvas.width / 2, 340);
            
            // Award text
            ctx.fillStyle = '#333';
            ctx.font = '32px Arial, sans-serif';
            ctx.fillText('is officially the', canvas.width / 2, 420);
            
            ctx.fillStyle = '#e91e63';
            ctx.font = 'bold 40px Arial, sans-serif';
            ctx.fillText('MOST PRECIOUS FRIEND', canvas.width / 2, 470);
            ctx.fillText('of the Year!', canvas.width / 2, 520);
            
            // Decorative elements
            ctx.fillStyle = '#ffd700';
            ctx.font = '48px Arial, sans-serif';
            ctx.fillText('✨ ❤️ ⭐ 🎁 ✨', canvas.width / 2, 580);
            
            // Signature
            ctx.fillStyle = '#666';
            ctx.font = 'bold 24px Arial, sans-serif';
            ctx.fillText('Signed by: Shekh Faisal', canvas.width / 2, 640);
            
            ctx.font = 'italic 20px Arial, sans-serif';
            ctx.fillText('— The Creator of Feelings™', canvas.width / 2, 670);
            
            // Certificate number
            const certNumber = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
            ctx.font = '16px Arial, sans-serif';
            ctx.fillText(`Certificate No: #${certNumber}`, canvas.width / 2, 720);
            
            // Convert canvas to blob and download
            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `Friendship_Certificate_${name.replace(/\s+/g, '_')}_${certNumber}.png`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
                
                setIsDownloading(false);
                
                // Show success message
                const successMsg = document.createElement('div');
                successMsg.innerHTML = '🎉 Certificate downloaded successfully! 🏆';
                successMsg.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce';
                document.body.appendChild(successMsg);
                
                setTimeout(() => {
                    document.body.removeChild(successMsg);
                }, 4000);
                
            }, 'image/png');
            
        } catch (error) {
            console.error('Error generating certificate:', error);
            setIsDownloading(false);
            
            // Show error message
            const errorMsg = document.createElement('div');
            errorMsg.innerHTML = '❌ Error downloading certificate. Please try again!';
            errorMsg.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
            document.body.appendChild(errorMsg);
            
            setTimeout(() => {
                document.body.removeChild(errorMsg);
            }, 3000);
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
                
                @keyframes backgroundShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                @keyframes certificateAppear {
                    0% { transform: scale(0.3) rotateY(-90deg); opacity: 0; }
                    50% { transform: scale(1.1) rotateY(0deg); }
                    100% { transform: scale(1) rotateY(0deg); opacity: 1; }
                }
                
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                    20%, 40%, 60%, 80% { transform: translateX(5px); }
                }
                
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.5); }
                    50% { box-shadow: 0 0 40px rgba(255, 215, 0, 0.8); }
                }
                
                @keyframes downloadPulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
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
                
                .background-gradient {
                    background: linear-gradient(-45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3);
                    background-size: 400% 400%;
                    animation: backgroundShift 12s ease infinite;
                }
                
                .certificate-appear {
                    animation: certificateAppear 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
                }
                
                .shake-animation {
                    animation: shake 0.6s ease-in-out;
                }
                
                .pulse-glow {
                    animation: pulse-glow 2s ease-in-out infinite;
                }
                
                .download-pulse {
                    animation: downloadPulse 2s ease-in-out infinite;
                }
                
                .glass-effect {
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                
                .certificate-card {
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%);
                    border: 3px solid;
                    border-image: linear-gradient(45deg, #ffd700, #ffed4e, #ffd700) 1;
                }
            `}</style>

            <div className="relative min-h-screen background-gradient overflow-hidden flex items-center justify-center">
                <FloatingParticles />
                
                {/* Decorative Elements */}
                <div className="absolute top-16 left-12 sparkle-animation" style={{ animationDelay: '0s' }}>
                    <Heart className="text-red-400 opacity-80" size={40} />
                </div>
                <div className="absolute top-24 right-16 sparkle-animation" style={{ animationDelay: '1s' }}>
                    <Star className="text-yellow-400 opacity-80" size={36} />
                </div>
                <div className="absolute bottom-20 left-16 sparkle-animation" style={{ animationDelay: '2s' }}>
                    <Handshake className="text-green-400 opacity-80" size={38} />
                </div>
                <div className="absolute bottom-32 right-12 sparkle-animation" style={{ animationDelay: '3s' }}>
                    <Gift className="text-purple-400 opacity-80" size={34} />
                </div>
                <div className="absolute top-1/2 left-8 sparkle-animation" style={{ animationDelay: '4s' }}>
                    <Award className="text-orange-400 opacity-80" size={32} />
                </div>

                <div className="container mx-auto px-6 py-12 text-center">
                    {/* Main Title */}
                    <div className={`mb-12 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent mb-4 leading-tight">
                            Your Friendship
                        </h1>
                        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 bg-clip-text text-transparent mb-6">
                            Trophy
                        </h2>
                        <div className="flex justify-center mb-4">
                            <Crown className="text-yellow-400 animate-bounce" size={60} />
                        </div>
                        <p className="text-xl md:text-2xl text-white font-medium max-w-2xl mx-auto leading-relaxed">
                            Because some people aren't just friends… they're feelings you never want to lose.
                        </p>
                    </div>

                    {/* Input Section */}
                    {!showCertificate && (
                        <div className={`max-w-md mx-auto mb-8 ${isVisible ? 'slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                            <div className="glass-effect bg-white bg-opacity-10 rounded-3xl p-8 shadow-2xl">
                                <div className="flex justify-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg pulse-glow">
                                        <Crown className="text-white" size={32} />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6">Enter Your Name, Dost 👑</h3>
                                <input 
                                    type="text" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    className="w-full p-4 text-lg rounded-2xl border-2 border-white border-opacity-30 bg-white bg-opacity-90 shadow-lg focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50 mb-6 transition-all duration-300 focus:scale-105" 
                                    placeholder={placeholderText}
                                    onKeyPress={(e) => e.key === 'Enter' && generateCertificate()}
                                />
                                <button
                                    onClick={generateCertificate}
                                    className="w-full py-4 bg-gradient-to-r from-red-500 via-pink-500 to-yellow-400 text-white rounded-2xl text-xl font-bold shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 group overflow-hidden relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span className="relative flex items-center justify-center gap-2">
                                        <Sparkles size={20} />
                                        Generate My Certificate
                                        <Sparkles size={20} />
                                    </span>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Certificate Display */}
                    {showCertificate && (
                        <div className="max-w-3xl mx-auto">
                            <div className="certificate-appear certificate-card rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                                {/* Certificate Crown */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl pulse-glow">
                                    <Crown className="text-white" size={32} />
                                </div>
                                
                                {/* Certificate Content */}
                                <div className="text-center pt-8">
                                    <div className="mb-6">
                                        <Award className="mx-auto text-yellow-500 mb-4" size={48} />
                                        <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-2">This certifies that</h2>
                                    </div>
                                    
                                    <div className="mb-8">
                                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-4 px-8 py-4 border-4 border-dashed border-yellow-400 rounded-2xl inline-block">
                                            {name}
                                        </h1>
                                    </div>
                                    
                                    <div className="mb-8">
                                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                                            is officially the <span className="text-pink-500 font-bold">Most Precious Friend</span> of the Year!
                                        </p>
                                        <div className="flex justify-center gap-4 mt-4">
                                            <Heart className="text-red-500" size={24} />
                                            <Star className="text-yellow-500" size={24} />
                                            <Sparkles className="text-purple-500" size={24} />
                                        </div>
                                    </div>
                                    
                                    <div className="border-t-2 border-gray-300 pt-6">
                                        <p className="text-lg font-bold text-gray-700 mb-1">Signed by: Shekh Faisal</p>
                                        <p className="text-md italic text-gray-600">— The Creator of Feelings™</p>
                                        <div className="mt-4 text-sm text-gray-500">
                                            Certificate No: #{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Download Button */}
                            <div className="mt-8">
                                <button 
                                    onClick={downloadCertificate}
                                    disabled={isDownloading}
                                    className={`group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white font-bold rounded-2xl text-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden ${!isDownloading ? 'download-pulse' : ''}`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span className="relative flex items-center gap-2">
                                        {isDownloading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Generating Your Trophy...
                                            </>
                                        ) : (
                                            <>
                                                <Download size={20} />
                                                Download Your Trophy of Friendship
                                                <Gift size={20} />
                                            </>
                                        )}
                                    </span>
                                </button>
                                
                                {!isDownloading && (
                                    <p className="mt-4 text-white text-sm opacity-80">
                                        🎨 High-quality PNG certificate ready for download!
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default FriendshipTrophy;