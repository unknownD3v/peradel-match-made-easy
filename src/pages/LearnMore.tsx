
import { ArrowLeft, CheckCircle, Heart, Shield, Users, Star, DollarSign, Zap, Award, Clock, Globe, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const LearnMore = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "100% Verified Profiles",
      description: "Every profile goes through manual verification with ID proof, ensuring authentic connections.",
      color: "text-green-600"
    },
    {
      icon: DollarSign,
      title: "50% More Affordable",
      description: "Premium matchmaking services at half the cost of traditional platforms.",
      color: "text-blue-600"
    },
    {
      icon: Heart,
      title: "Dating + Matrimony",
      description: "Find casual dating partners or life partners - all in one platform.",
      color: "text-pink-600"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Advanced encryption and privacy controls to keep your data safe.",
      color: "text-purple-600"
    },
    {
      icon: Zap,
      title: "Smart Matching",
      description: "AI-powered compatibility matching based on interests, values, and goals.",
      color: "text-yellow-600"
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Built specifically for Indian culture, traditions, and relationship values.",
      color: "text-indigo-600"
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Premium Features",
      description: "Advanced search filters, unlimited matches, and priority support included"
    },
    {
      icon: Clock,
      title: "Quick Setup",
      description: "Create your profile in under 5 minutes and start connecting immediately"
    },
    {
      icon: Globe,
      title: "Pan-India Reach",
      description: "Connect with compatible matches across all states and cities in India"
    },
    {
      icon: MessageCircle,
      title: "Safe Communication",
      description: "In-app messaging with photo sharing and video call features"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-cream/50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-inter font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-accent" />
              <span className="font-playfair text-xl font-bold text-primary">Peradel</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-purple-900 to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <Star className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-sm font-inter">Learn About Peradel</span>
            </div>
            
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Revolutionizing
              <br />
              <span className="text-accent">Indian Matchmaking</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-inter font-light text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover how we're making authentic connections more accessible and affordable for millions of Indians seeking love and marriage.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-dark-gray mb-6">
              Why Peradel is Different
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              We've built a platform that addresses the real challenges Indians face in finding meaningful relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6 ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
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

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-dark-gray mb-6">
              Simple. Secure. Successful.
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes finding your perfect match easier than ever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-dark-gray mb-3">
                  {benefit.title}
                </h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-dark-gray mb-6">
              Affordable for Everyone
            </h2>
            <p className="font-inter text-xl text-gray-600 mb-12">
              Premium matchmaking shouldn't cost a fortune. That's why we're 50% more affordable than traditional platforms.
            </p>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">₹999</div>
                  <div className="text-sm text-gray-500">Traditional Platforms</div>
                </div>
                <div className="relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-dark-gray px-3 py-1 rounded-full text-xs font-semibold">BEST VALUE</span>
                  </div>
                  <div className="text-4xl font-bold text-accent mb-2">₹499</div>
                  <div className="text-sm text-gray-500">Peradel Premium</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">₹0</div>
                  <div className="text-sm text-gray-500">Early Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-purple-900 to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-inter text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of Indians who are already on the waitlist for early access.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-accent text-dark-gray font-inter font-bold px-10 py-5 rounded-full text-lg hover:bg-accent/90 transition-all duration-300 shadow-2xl hover:shadow-accent/25 transform hover:-translate-y-1"
          >
            <Heart className="w-6 h-6" />
            Join Waitlist Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;
