import { useState, useEffect } from 'react';
import { Calendar, Code, Users, Lightbulb, Zap, Trophy, Rocket, ChevronDown } from 'lucide-react';

export default function Hackghrce() {
  const [showScroll, setShowScroll] = useState(true);
  const [titleVisible, setTitleVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [titleSplit, setTitleSplit] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Trigger hero fade in
    setTimeout(() => setHeroVisible(true), 100);
    // Trigger title fade in after component mounts
    setTimeout(() => setTitleVisible(true), 100);

    // Set up scroll animation for title split
    const handleTitleScroll = () => {
      const scrollProgress = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
      document.documentElement.style.setProperty('--scroll', scrollProgress.toString());
      
      // Trigger split animation after scrolling a bit
      if (window.pageYOffset > 100) {
        setTitleSplit(true);
      } else {
        setTitleSplit(false);
      }
    };

    window.addEventListener('scroll', handleTitleScroll);

    // Set target date to 10 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 10);

    // Countdown timer
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Hide arrow when near bottom (within 100px)
      if (windowHeight + scrollTop >= documentHeight - 100) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleTitleScroll);
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#030712] via-black to-[#030712] text-white">
      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center justify-center px-4 overflow-hidden transition-all duration-1000 ${
        heroVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
          >
            <source src="YOUR_VIDEO_URL.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className={`mb-8 transition-all duration-700 ${
            titleSplit ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            <div className="inline-block px-6 py-2 bg-[#4284d2]/20 border border-[#4284d2]/50 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-[#4284d2] font-semibold">One Day. Two Events. Infinite Possibilities.</span>
            </div>
          </div>
          
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 transition-all duration-[1500ms] flex justify-center gap-4 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ letterSpacing: '0.1em' }}>
            <span 
              className={`text-white transition-all duration-700 ${
                titleSplit ? '-translate-x-16 md:-translate-x-32' : 'translate-x-0'
              }`}
              style={{
                filter: titleSplit 
                  ? 'drop-shadow(0 0.5em 0 rgba(255, 255, 255, 0.9)) drop-shadow(0 1em 0 rgba(255, 255, 255, 0.7)) drop-shadow(0 1.5em 0 rgba(255, 255, 255, 0.5)) drop-shadow(0 2em 0 rgba(255, 255, 255, 0.3)) drop-shadow(0 2.5em 0 rgba(255, 255, 255, 0.2)) drop-shadow(0 3em 0 rgba(255, 255, 255, 0.1))' 
                  : 'none'
              }}
            >
              HACK
            </span>
            <span 
              className={`text-white transition-all duration-700 ${
                titleSplit ? 'translate-x-16 md:translate-x-32' : 'translate-x-0'
              }`}
              style={{
                filter: titleSplit 
                  ? 'drop-shadow(0 0.5em 0 rgba(255, 255, 255, 0.9)) drop-shadow(0 1em 0 rgba(255, 255, 255, 0.7)) drop-shadow(0 1.5em 0 rgba(255, 255, 255, 0.5)) drop-shadow(0 2em 0 rgba(255, 255, 255, 0.3)) drop-shadow(0 2.5em 0 rgba(255, 255, 255, 0.2)) drop-shadow(0 3em 0 rgba(255, 255, 255, 0.1))' 
                  : 'none'
              }}
            >
              GHRCE
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
            titleSplit ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            Where Innovation Meets Execution. Build, Learn, and Transform Ideas into Reality.
          </p>
          
          <div className={`inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#4284d2] to-blue-600 rounded-full text-xl font-semibold shadow-2xl shadow-[#4284d2]/50 hover:shadow-[#4284d2]/70 transition-all transform hover:scale-105 cursor-pointer ${
            titleSplit ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            <Rocket className="w-6 h-6" />
            COMING SOON
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
          showScroll ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="animate-bounce">
            <ChevronDown className="w-10 h-10 text-[#4284d2]" strokeWidth={2} />
          </div>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="py-24 md:py-32 px-4 bg-black/80 border-y border-[#4284d2]/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-16 text-gray-300">
            Premieres In
          </h3>
          
          <div className="flex justify-center items-center gap-3 md:gap-6">
            {/* Days */}
            <div className="flex flex-col items-center">
              <div className="text-6xl md:text-8xl font-bold text-[#4284d2] tracking-wider" style={{ fontFamily: 'monospace', textShadow: '0 0 20px rgba(66, 132, 210, 0.5)' }}>
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-xs md:text-sm font-semibold mt-2 uppercase tracking-widest">
                Days
              </div>
            </div>

            {/* Separator */}
            <div className="text-5xl md:text-7xl font-bold text-[#4284d2] pb-6" style={{ fontFamily: 'monospace' }}>
              :
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="text-6xl md:text-8xl font-bold text-[#4284d2] tracking-wider" style={{ fontFamily: 'monospace', textShadow: '0 0 20px rgba(66, 132, 210, 0.5)' }}>
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-xs md:text-sm font-semibold mt-2 uppercase tracking-widest">
                Hours
              </div>
            </div>

            {/* Separator */}
            <div className="text-5xl md:text-7xl font-bold text-[#4284d2] pb-6" style={{ fontFamily: 'monospace' }}>
              :
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="text-6xl md:text-8xl font-bold text-[#4284d2] tracking-wider" style={{ fontFamily: 'monospace', textShadow: '0 0 20px rgba(66, 132, 210, 0.5)' }}>
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-xs md:text-sm font-semibold mt-2 uppercase tracking-widest">
                Minutes
              </div>
            </div>

            {/* Separator */}
            <div className="text-5xl md:text-7xl font-bold text-[#4284d2] pb-6" style={{ fontFamily: 'monospace' }}>
              :
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <div className="text-6xl md:text-8xl font-bold text-[#4284d2] tracking-wider" style={{ fontFamily: 'monospace', textShadow: '0 0 20px rgba(66, 132, 210, 0.5)' }}>
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-xs md:text-sm font-semibold mt-2 uppercase tracking-widest">
                Seconds
              </div>
            </div>
          </div>
          
          <div className="mt-20 max-w-2xl mx-auto px-6">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              An extraordinary day of innovation, competition, and endless possibilities.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#4284d2] to-blue-400">
              Featured Events
            </h2>
            <p className="text-xl text-gray-400">Three powerful experiences in one unforgettable day</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tech Talk Card */}
            <div className="group relative bg-gradient-to-br from-[#030712] to-black border border-[#4284d2]/30 rounded-3xl p-8 hover:border-[#4284d2] transition-all duration-300 hover:shadow-2xl hover:shadow-[#4284d2]/30 transform hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4284d2] rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#4284d2]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#4284d2]/30 transition-colors">
                  <Lightbulb className="w-8 h-8 text-[#4284d2]" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-white">Tech Talk</h3>
                
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  Engage with industry experts and thought leaders as they share insights on cutting-edge technologies, emerging trends, and real-world applications.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Users className="w-5 h-5 text-[#4284d2]" />
                    <span>Industry Expert Speakers</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Zap className="w-5 h-5 text-[#4284d2]" />
                    <span>Live Q&A Sessions</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Calendar className="w-5 h-5 text-[#4284d2]" />
                    <span>Networking Opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hackathon Card */}
            <div className="group relative bg-gradient-to-br from-[#030712] to-black border border-[#4284d2]/30 rounded-3xl p-8 hover:border-[#4284d2] transition-all duration-300 hover:shadow-2xl hover:shadow-[#4284d2]/30 transform hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4284d2] rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#4284d2]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#4284d2]/30 transition-colors">
                  <Code className="w-8 h-8 text-[#4284d2]" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-white">Hackathon</h3>
                
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  Transform your innovative ideas into working prototypes. Collaborate, code, and compete for exciting prizes in an adrenaline-fueled coding marathon.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Trophy className="w-5 h-5 text-[#4284d2]" />
                    <span>Amazing Prizes & Recognition</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Users className="w-5 h-5 text-[#4284d2]" />
                    <span>Team Collaboration</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Zap className="w-5 h-5 text-[#4284d2]" />
                    <span>Mentorship & Guidance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Quiz Card */}
            <div className="group relative bg-gradient-to-br from-[#030712] to-black border border-[#4284d2]/30 rounded-3xl p-8 hover:border-[#4284d2] transition-all duration-300 hover:shadow-2xl hover:shadow-[#4284d2]/30 transform hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4284d2] rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#4284d2]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#4284d2]/30 transition-colors">
                  <Zap className="w-8 h-8 text-[#4284d2]" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-white">Tech Quiz</h3>
                
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  Test your technical knowledge and quick thinking in an exciting quiz competition. Battle it out with fellow tech enthusiasts across various domains.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Lightbulb className="w-5 h-5 text-[#4284d2]" />
                    <span>Multiple Tech Domains</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Zap className="w-5 h-5 text-[#4284d2]" />
                    <span>Fast-Paced Rounds</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Trophy className="w-5 h-5 text-[#4284d2]" />
                    <span>Exciting Rewards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Partners Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-black/50 to-black/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#4284d2] to-blue-400">
              Community Partners
            </h2>
            <p className="text-xl text-gray-400">Join our growing network of tech communities and organizations</p>
          </div>

          {/* Single Large Box with All Partners */}
          <div className="bg-gradient-to-br from-[#030712] to-black border border-[#4284d2]/30 rounded-3xl p-12 hover:border-[#4284d2] transition-all duration-300">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {/* Partner 1 */}
              <div className="flex flex-col items-center group">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-[#4284d2]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#4284d2]/20 transition-all group-hover:scale-110 duration-300 border-2 border-[#4284d2]/30 group-hover:border-[#4284d2]">
                    <img 
                        src="/orangehacks.jpg" 
                        alt="orangehacks" 
                        className="w-16 h-16 md:w-20 md:h-20 object-contain"
                     />
                 </div>
                  <h4 className="text-sm md:text-base font-semibold text-white text-center">Orangehacks</h4>
                </div>
              {/* Partner 2 */}
              
            </div>

            {/* CTA to become a partner */}
            <div className="text-center mt-12">
              <button className="px-10 py-5 bg-gradient-to-r from-[#4284d2] to-blue-600 rounded-full text-xl font-semibold hover:shadow-lg hover:shadow-[#4284d2]/50 transition-all transform hover:scale-105">
                Become a Community Partner
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Sponsors Section */}
      <section className="py-24 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#4284d2] to-blue-400">
              Become a Sponsor
            </h2>
            <p className="text-xl text-gray-400">Partner with us to empower the next generation of innovators</p>
          </div>

          <div className="bg-gradient-to-br from-[#030712] to-black border border-[#4284d2]/30 rounded-3xl p-10 mb-8 hover:border-[#4284d2] transition-all">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#4284d2]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Trophy className="w-6 h-6 text-[#4284d2]" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">College Event Sponsor</h3>
                <p className="text-gray-400 text-lg">Support our campus-wide hackathon initiative</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#4284d2] rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Brand Visibility</h4>
                  <p className="text-gray-400">Logo placement on all event materials and digital platforms</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#4284d2] rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Talent Pipeline</h4>
                  <p className="text-gray-400">Direct access to top student developers and innovators</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#4284d2] rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Speaking Opportunity</h4>
                  <p className="text-gray-400">Showcase your company during tech talks and ceremonies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#4284d2] rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Social Media Promotion</h4>
                  <p className="text-gray-400">Featured across all our social media channels</p>
                </div>
              </div>
            </div>

            <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#4284d2] to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#4284d2]/50 transition-all transform hover:scale-105">
              Register as Sponsor
            </button>
          </div>

          {/* Community Partners */}
          <div className="bg-gradient-to-br from-[#030712] to-black border border-[#4284d2]/30 rounded-3xl p-10 hover:border-[#4284d2] transition-all">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#4284d2]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-[#4284d2]" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">Community Partner</h3>
                <p className="text-gray-400 text-lg">Collaborate to build a stronger tech ecosystem</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#4284d2] rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Cross-Promotion</h4>
                  <p className="text-gray-400">Mutual promotion across both communities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#4284d2] rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Resource Sharing</h4>
                  <p className="text-gray-400">Access to exclusive workshops and learning materials</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#4284d2] rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Networking Events</h4>
                  <p className="text-gray-400">Priority invites to future tech meetups and events</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#4284d2] rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Recognition</h4>
                  <p className="text-gray-400">Featured on our website and partner showcase</p>
                </div>
              </div>
            </div>

            <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#4284d2] to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#4284d2]/50 transition-all transform hover:scale-105">
              Become a Partner
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-[#4284d2]/20">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#4284d2] to-blue-400">
            HACKGHRCE
          </h3>
          <p className="text-gray-400 mb-4">Innovation. Collaboration. Excellence.</p>
          <p className="text-gray-500 text-sm">© 2024 Hackghrce. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}