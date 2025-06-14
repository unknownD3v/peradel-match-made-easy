
import { ArrowRight, Heart, Users, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const handleWaitlistClick = () => {
    // Replace with your actual Google Form URL
    window.open('https://forms.gle/your-google-form-url', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <Heart className="w-6 h-6 md:w-8 md:h-8 text-amber-400/40" />
      </div>
      <div className="absolute top-40 right-20 animate-pulse" style={{ animationDelay: '1s' }}>
        <Users className="w-5 h-5 md:w-6 md:h-6 text-amber-400/30" />
      </div>
      <div className="absolute bottom-32 left-20 animate-pulse" style={{ animationDelay: '2s' }}>
        <Shield className="w-6 h-6 md:w-7 md:h-7 text-amber-400/35" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 md:px-6 md:py-2 mb-6 md:mb-8">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            <span className="text-xs md:text-sm font-inter">Launching Soon in India</span>
          </div>

          {/* Main headline */}
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 md:mb-8 bg-gradient-to-r from-white via-white to-amber-400 bg-clip-text text-transparent">
            Find Your Perfect
            <br />
            <span className="text-amber-400 drop-shadow-lg">Match</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-2xl font-inter font-light mb-8 md:mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            India's most sophisticated dating and matrimony platform. 
            <br className="hidden md:block" />
            <span className="text-amber-400 font-medium">Authentic connections. Real relationships.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-12 md:mb-16">
            <button
              onClick={handleWaitlistClick}
              className="group bg-amber-400 text-slate-900 font-inter font-bold px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full text-base sm:text-lg md:text-xl hover:bg-amber-300 transition-all duration-300 shadow-2xl hover:shadow-amber-400/25 transform hover:-translate-y-2 hover:scale-105 inline-flex items-center gap-2 md:gap-3"
            >
              Join Waitlist Free
              <ArrowRight className="w-4 h-4 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            
            <Link 
              to="/learn-more"
              className="group bg-white/10 backdrop-blur-sm border border-white/30 text-white font-inter font-semibold px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-full text-base sm:text-lg hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-2 md:gap-3"
            >
              Learn More
              <Heart className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400 mb-1">1000+</div>
              <div className="text-xs sm:text-sm text-white/70">Early Users</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400 mb-1">100%</div>
              <div className="text-xs sm:text-sm text-white/70">Verified</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400 mb-1">50%</div>
              <div className="text-xs sm:text-sm text-white/70">More Affordable</div>
            </div>
          </div>
          
          {/* Hero illustration */}
          <div className="relative">
            <div className="w-full max-w-3xl mx-auto h-60 sm:h-80 md:h-96 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-3 h-3 md:w-4 md:h-4 bg-amber-400/30 rounded-full"></div>
              <div className="absolute top-4 right-4 w-2 h-2 md:w-3 md:h-3 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-4 left-6 w-2 h-2 bg-amber-400/40 rounded-full"></div>
              
              <div className="text-center z-10">
                <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center shadow-2xl">
                  <Heart className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-slate-900" />
                </div>
                <p className="text-white/80 font-inter text-sm sm:text-base md:text-lg">Beautiful love stories start here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
