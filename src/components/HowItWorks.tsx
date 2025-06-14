
import { User, Heart, Users } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create Profile",
      description: "Sign up and create your detailed profile with photos and preferences.",
      icon: User
    },
    {
      number: "02", 
      title: "Match with Intent",
      description: "Specify whether you're looking for dating or marriage to find like-minded matches.",
      icon: Heart
    },
    {
      number: "03",
      title: "Start Meaningful Connections",
      description: "Connect with verified profiles and begin your journey to finding love.",
      icon: Users
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
            How It Works
          </h2>
          <p className="font-inter text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Getting started is simple. Follow these three easy steps to begin your journey.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 md:top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-slate-900 to-amber-400 transform translate-x-1/2 z-0"></div>
                )}
                
                <div className="relative z-10 bg-white">
                  {/* Step number */}
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-slate-900 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-white font-bold text-lg md:text-xl">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-4 md:mb-6">
                    <step.icon className="w-12 h-12 md:w-16 md:h-16 text-slate-600" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-playfair text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 mb-3 md:mb-4">
                    {step.title}
                  </h3>
                  <p className="font-inter text-sm sm:text-base text-slate-600 leading-relaxed px-2 md:px-4">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
