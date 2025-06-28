
import { ArrowRight, CheckCircle, DollarSign, Heart, Lock, Shield, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-6 py-2 mb-8">
              <Star className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 font-medium">Learn More</span>
            </div>
            
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-8">
              Revolutionizing <span className="text-amber-400">Love</span> in India
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed">
              Discover how we're creating the most sophisticated and authentic dating platform for modern Indians.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-playfair text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  We believe that finding love shouldn't be complicated or expensive. Our mission is to create 
                  the most authentic, affordable, and sophisticated dating platform specifically designed for Indians.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Whether you're looking for casual dating or serious matrimony, we provide a refined environment 
                  where genuine connections flourish.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-400/10 to-slate-900/5 rounded-3xl p-8 flex items-center justify-center">
                <Heart className="w-32 h-32 text-amber-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Why We're Different
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our platform combines the best of modern technology with traditional values to create meaningful connections.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Advanced Verification",
                description: "Multi-level profile verification including photo verification, phone verification, and background checks."
              },
              {
                icon: DollarSign,
                title: "Transparent Pricing",
                description: "No hidden fees. Premium features at 50% less cost than traditional matrimony sites."
              },
              {
                icon: Users,
                title: "Quality Community",
                description: "Curated community of serious individuals looking for genuine relationships."
              },
              {
                icon: Lock,
                title: "Privacy First",
                description: "Your data is encrypted and never shared. Complete control over your profile visibility."
              },
              {
                icon: Heart,
                title: "Smart Matching",
                description: "AI-powered compatibility matching based on values, interests, and relationship goals."
              },
              {
                icon: CheckCircle,
                title: "Success Support",
                description: "Dedicated relationship coaches and 24/7 customer support to guide your journey."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-amber-400/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">
              Trusted by Thousands
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">1000+</div>
                <div className="text-white/80">Early Users</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">95%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">50%</div>
                <div className="text-white/80">More Affordable</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">24/7</div>
                <div className="text-white/80">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join our exclusive waitlist and be among the first to experience the future of Indian dating.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-400 text-slate-900 font-semibold px-8 py-4 rounded-full text-lg hover:bg-amber-300 transition-colors duration-300 inline-flex items-center gap-3">
              <Users className="w-5 h-5" />
              Join Waitlist Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link 
              to="/"
              className="bg-white border-2 border-slate-200 text-slate-900 font-semibold px-8 py-4 rounded-full text-lg hover:bg-slate-50 transition-colors duration-300 inline-flex items-center gap-3"
            >
              Back to Home
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;
