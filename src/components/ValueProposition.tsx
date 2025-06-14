
import { CheckCircle, DollarSign, Heart, Lock, Star, Users } from 'lucide-react';

const ValueProposition = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Verified Profiles",
      description: "Every profile is manually verified for authenticity and genuine intent.",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: DollarSign,
      title: "Premium Affordability",
      description: "Sophisticated matchmaking at a fraction of the cost of traditional platforms.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Heart,
      title: "Dating + Matrimony",
      description: "Whether you're looking for love or marriage, we've got you covered.",
      color: "bg-rose-50 text-rose-600"
    },
    {
      icon: Lock,
      title: "Privacy Protected",
      description: "Your personal information is secure with our advanced privacy protection.",
      color: "bg-violet-50 text-violet-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-400/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-slate-900/10 rounded-full px-6 py-2 mb-6">
            <Star className="w-4 h-4 text-slate-900" />
            <span className="text-slate-900 font-medium text-sm">Why Choose Us</span>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Built for <span className="text-slate-700">Sophisticated</span> Love
          </h2>
          <p className="font-inter text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing how Indians find meaningful connections through our refined approach to matchmaking that combines tradition with elegance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-fade-in-up border border-slate-100 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="font-inter text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional trust section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto border border-slate-100">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Users className="w-8 h-8 text-slate-900" />
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-slate-900">
                Trusted by Thousands
              </h3>
            </div>
            <p className="font-inter text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join the growing community of Indians who have found love and meaningful relationships through our refined platform.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">95%</div>
                <div className="text-sm text-slate-500">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">24/7</div>
                <div className="text-sm text-slate-500">Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">Safe</div>
                <div className="text-sm text-slate-500">& Secure</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
