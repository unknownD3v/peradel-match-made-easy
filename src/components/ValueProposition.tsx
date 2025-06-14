
import { CheckCircle, DollarSign, Heart, Lock } from 'lucide-react';

const ValueProposition = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Verified Profiles",
      description: "Every profile is manually verified for authenticity and genuine intent."
    },
    {
      icon: DollarSign,
      title: "Affordable Subscription",
      description: "Premium matchmaking at a fraction of the cost of traditional platforms."
    },
    {
      icon: Heart,
      title: "Dating + Matrimony in One",
      description: "Whether you're looking for love or marriage, we've got you covered."
    },
    {
      icon: Lock,
      title: "100% Privacy First",
      description: "Your personal information is secure with our advanced privacy protection."
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-dark-gray mb-4">
            Why Choose Peradel?
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            We're revolutionizing how Indians find meaningful connections through our unique approach to matchmaking.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-dark-gray mb-3">
                {feature.title}
              </h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
