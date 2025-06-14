
import { Star } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "Finally, a platform that understands what young Indians actually want - both dating and serious relationships!",
      rating: 5
    },
    {
      name: "Arjun Patel", 
      location: "Bangalore",
      text: "The affordability factor is a game-changer. Quality matches without breaking the bank.",
      rating: 5
    },
    {
      name: "Sneha Reddy",
      location: "Hyderabad", 
      text: "Love how they verify every profile. No fake accounts or time-wasters here!",
      rating: 5
    }
  ];

  const stats = [
    { number: "1000+", label: "Interested Users" },
    { number: "95%", label: "Profile Verification" },
    { number: "50%", label: "More Affordable" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Trust stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-1 md:mb-2">
                {stat.number}
              </div>
              <div className="font-inter text-slate-600 text-xs sm:text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section title */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
            Why Users Love Us
          </h2>
          <p className="font-inter text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            We're on a mission to simplify Indian matchmaking affordably.
          </p>
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-amber-400 fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="font-inter text-sm sm:text-base text-slate-700 mb-4 md:mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              {/* Author info */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-slate-900 to-amber-400 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-inter font-semibold text-slate-900 text-sm md:text-base">
                    {testimonial.name}
                  </div>
                  <div className="font-inter text-xs md:text-sm text-slate-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
