
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create Profile",
      description: "Sign up and create your detailed profile with photos and preferences.",
      icon: "👤"
    },
    {
      number: "02", 
      title: "Match with Intent",
      description: "Specify whether you're looking for dating or marriage to find like-minded matches.",
      icon: "💝"
    },
    {
      number: "03",
      title: "Start Meaningful Connections",
      description: "Connect with verified profiles and begin your journey to finding love.",
      icon: "💕"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-dark-gray mb-4">
            How It Works
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
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
                  <div className="hidden md:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-accent transform translate-x-1/2 z-0"></div>
                )}
                
                <div className="relative z-10 bg-white">
                  {/* Step number */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-6xl mb-6">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-playfair text-2xl font-semibold text-dark-gray mb-4">
                    {step.title}
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed px-4">
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
