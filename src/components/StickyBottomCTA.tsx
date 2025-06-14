
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const StickyBottomCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero section
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWaitlistClick = () => {
    // Replace with your actual Google Form URL
    window.open('https://forms.gle/your-google-form-url', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-fade-in">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 shadow-2xl border-t border-white/20">
        <button
          onClick={handleWaitlistClick}
          className="w-full bg-amber-400 text-slate-900 font-inter font-semibold py-3 px-6 rounded-full text-lg hover:bg-amber-300 transition-all duration-300 flex items-center justify-center gap-3"
        >
          Join Waitlist Now
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default StickyBottomCTA;
