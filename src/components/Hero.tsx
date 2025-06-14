
import { ArrowRight, Heart, Users, Shield } from 'lucide-react';

const Hero = () => {
  const handleWaitlistClick = () => {
    // Replace with your actual Google Form URL
    window.open('https://forms.gle/your-google-form-url', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-purple-900 to-primary/90 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <Heart className="w-8 h-8 text-accent/40" />
      </div>
      <div className="absolute top-40 right-20 animate-pulse" style={{ animationDelay: '1s' }}>
        <Users className="w-6 h-6 text-accent/30" />
      </div>
      <div className="absolute bottom-32 left-20 animate-pulse" style={{ animationDelay: '2s' }}>
        <Shield className="w-7 h-7 text-accent/35" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-sm font-inter">Launching Soon in India</span>
          </div>

          {/* Main headline */}
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">
            Find Your Perfect
            <br />
            <span className="text-accent drop-shadow-lg">Match</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl font-inter font-light mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            India's most affordable dating and matrimony platform. 
            <br className="hidden md:block" />
            <span className="text-accent font-medium">Authentic connections. Real relationships.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={handleWaitlistClick}
              className="group bg-accent text-dark-gray font-inter font-bold px-10 py-5 rounded-full text-lg md:text-xl hover:bg-accent/90 transition-all duration-300 shadow-2xl hover:shadow-accent/25 transform hover:-translate-y-2 hover:scale-105 inline-flex items-center gap-3"
            >
              Join Waitlist Free
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm border border-white/30 text-white font-inter font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-3">
              Learn More
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">1000+</div>
              <div className="text-sm text-white/70">Early Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-white/70">Verified</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">50%</div>
              <div className="text-sm text-white/70">More Affordable</div>
            </div>
          </div>
          
          {/* Hero illustration */}
          <div className="relative">
            <div className="w-full max-w-3xl mx-auto h-80 md:h-96 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-4 h-4 bg-accent/30 rounded-full"></div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-4 left-6 w-2 h-2 bg-accent/40 rounded-full"></div>
              
              <div className="text-center z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-accent to-accent/80 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                  <span className="text-6xl">💕</span>
                </div>
                <p className="text-white/80 font-inter text-lg">Beautiful love stories start here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced curved bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-16 fill-current text-cream">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".4"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".7"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
