import { ArrowRight, Sparkles, Gift, CheckCircle, DollarSign } from 'lucide-react';

const WaitlistCTA = () => {
  const handleWaitlistClick = () => {
    // Replace with your actual Google Form URL
    window.open('https://forms.gle/your-google-form-url', '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 animate-bounce">
        <Sparkles className="w-6 h-6 text-amber-400/50" />
      </div>
      <div className="absolute top-20 right-16 animate-pulse" style={{ animationDelay: '1s' }}>
        <Gift className="w-8 h-8 text-amber-400/40" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-400/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-medium">Exclusive Launch Offer</span>
          </div>

          <h2 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Ready to Find Your
            <br />
            <span className="text-amber-400 drop-shadow-lg">Soulmate?</span>
          </h2>
          
          <p className="font-inter text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of Indians who are already on the waitlist for India's most 
            <span className="text-amber-400 font-semibold"> sophisticated and authentic</span> dating platform.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
            <button
              onClick={handleWaitlistClick}
              className="group bg-amber-400 text-slate-900 font-inter font-bold px-12 py-6 rounded-full text-xl hover:bg-amber-300 transition-all duration-300 shadow-2xl hover:shadow-amber-400/25 transform hover:-translate-y-2 hover:scale-105 inline-flex items-center gap-4"
            >
              <Gift className="w-6 h-6" />
              Get Early Access Free
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            
            <div className="flex items-center gap-3 text-white/80 font-inter">
              <Sparkles className="w-6 h-6 text-amber-400" />
              <span className="text-lg">First 500 users get lifetime benefits!</span>
            </div>
          </div>
          
          {/* Enhanced benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">No Payment Required</h3>
              <p className="text-white/80 text-sm">Join the waitlist completely free</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Early Access</h3>
              <p className="text-white/80 text-sm">Be the first to use our platform</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Special Pricing</h3>
              <p className="text-white/80 text-sm">Exclusive launch discounts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistCTA;
