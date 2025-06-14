
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleWaitlistClick = () => {
    // Replace with your actual Google Form URL
    window.open('https://forms.gle/your-google-form-url', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Main headline */}
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            India's Only <br />
            <span className="text-accent">Value-for-Money</span> <br />
            Dating & Matrimony Platform
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl font-inter font-light mb-8 text-white/90 max-w-2xl mx-auto">
            Affordable. Authentic. For Love and Marriage.
          </p>
          
          {/* CTA Button */}
          <button
            onClick={handleWaitlistClick}
            className="group bg-accent text-dark-gray font-inter font-semibold px-8 py-4 rounded-full text-lg md:text-xl hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-3"
          >
            Join the Waitlist
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          {/* Hero illustration placeholder */}
          <div className="mt-16 relative">
            <div className="w-full max-w-2xl mx-auto h-64 md:h-80 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">💕</span>
                </div>
                <p className="text-white/80 font-inter">Beautiful couples illustration coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 fill-current text-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
