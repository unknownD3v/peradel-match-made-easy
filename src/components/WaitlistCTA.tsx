
import { ArrowRight } from 'lucide-react';

const WaitlistCTA = () => {
  const handleWaitlistClick = () => {
    // Replace with your actual Google Form URL
    window.open('https://forms.gle/your-google-form-url', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary/95 to-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
            Be Among the First to Experience <br />
            <span className="text-accent">A Better Way to Match</span>
          </h2>
          
          <p className="font-inter text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join our exclusive waitlist and get early access to India's most affordable dating and matrimony platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={handleWaitlistClick}
              className="group bg-accent text-dark-gray font-inter font-semibold px-8 py-4 rounded-full text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-3"
            >
              Join the Waitlist Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <p className="font-inter text-white/80 text-sm">
              🎉 Limited spots available for early adopters
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-white/80 font-inter text-sm">
            <div className="flex items-center gap-2">
              <span className="text-accent">✓</span>
              No payment required
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">✓</span>
              Early access benefits
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">✓</span>
              Special launch pricing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistCTA;
