// import React from 'react';
// import { FaHeart, FaStar, FaRocket, FaRegImage } from 'react-icons/fa'; // Importing React Icons

// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-300 via-indigo-200 to-blue-200 flex flex-col justify-center items-center">
//       {/* Background Animation */}
//       <div className="fixed inset-0 z-[-1] overflow-hidden">
//         <div className="particle absolute top-1/5 left-1/4 w-12 h-12 bg-white opacity-60 rounded-full animate-particle"></div>
//         <div className="particle absolute top-1/2 left-3/5 w-8 h-8 bg-white opacity-60 rounded-full animate-particle delay-4"></div>
//         <div className="particle absolute bottom-1/10 left-4/5 w-10 h-10 bg-white opacity-60 rounded-full animate-particle delay-8"></div>
//         <div className="particle absolute top-4/5 left-2/5 w-14 h-14 bg-white opacity-60 rounded-full animate-particle delay-12"></div>
//       </div>

//       {/* Floating Emojis */}
//       <div className="floating-emoji absolute top-10 left-10 text-4xl text-opacity-90 animate-emoji"><FaHeart /></div>
//       <div className="floating-emoji absolute top-1/4 right-16 text-4xl text-opacity-90 animate-emoji delay-2"><FaStar /></div>
//       <div className="floating-emoji absolute bottom-1/4 left-20 text-4xl text-opacity-90 animate-emoji delay-4"><FaRocket /></div>
//       <div className="floating-emoji absolute bottom-10 right-24 text-4xl text-opacity-90 animate-emoji delay-6"><FaRegImage /></div>

//       {/* Main Container */}
//       <main className="max-w-5xl w-full px-6 py-16">
//         <section className="hero-section flex justify-center items-center min-h-screen">
//           <div className="card text-center bg-white bg-opacity-90 p-12 rounded-3xl backdrop-blur-lg shadow-xl transform scale-90 transition-all duration-500 hover:scale-105">
//             <h1 className="text-4xl font-serif text-red-600 mb-4 animate-fadeIn">To My Special One</h1>
//             <p className="text-xl text-gray-700 mb-8 opacity-0 animate-fadeIn delay-500">A Journey to all our Best Memories</p>

//             {/* Buttons */}
//             <div className="button-group flex justify-center gap-8">
//               <a href="/memories" className="btn bg-gradient-to-r from-pink-400 to-yellow-400 text-white py-3 px-8 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105">Enter The Journey 🚀</a>
//               <a href="/gallery" className="btn bg-gradient-to-r from-blue-400 to-indigo-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105">See The Gallery 🖼️</a>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
// export default App;





import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CrazyYaadein from './components/CrazyYaadein';
import FriendshipTrophy from './components/FriendshipTrophy';
import GalleryPage from './components/GalleryPage';
import Quiz from './components/Quiz';
import ThankYouPage from './components/ThankYouPage';
import Home from './components/Home'; // Home page component
import './App.css';

function App() {
  return (
    <Router>
      <div >
        
        {/* Background Animation (Particles, etc.) */}
        {/* You can use the Background Animation component if needed */}
        {/* <BackgroundAnimation /> */}

        {/* Main Routing Section */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crazy-yaadein" element={<CrazyYaadein />} />
          <Route path="/friendship-trophy" element={<FriendshipTrophy />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
