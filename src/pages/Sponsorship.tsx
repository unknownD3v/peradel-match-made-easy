
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Mail, TrendingUp, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Sponsorship = () => {
  return (
    <>
      <Helmet>
        <title>Sponsorship Opportunity - Peradel | Revolutionary Dating Platform</title>
        <meta name="description" content="Join Peradel's revolutionary sponsorship model. Be the first brand to fund love instead of exploiting it. Contact us for partnership opportunities." />
        <meta name="keywords" content="sponsorship, brand partnership, dating platform sponsor, matrimony sponsor, peradel partnership" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
                The Untapped Opportunity: Why Dating Sites Avoid Sponsorships
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                How Peradel is Changing the Game with Love Funded by Brands, Not Users
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* The Problem */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-amber-400" />
                The Hard Truth About Dating Biz Economics
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="font-inter text-xl font-semibold text-slate-900 mb-2">Subscriptions = Easy Money</h3>
                  <ul className="text-slate-700 space-y-2">
                    <li>• Users pay endlessly for basic features like messaging</li>
                    <li>• Platforms prioritize profits over accessibility</li>
                    <li>• 90%+ profit margins with minimal effort</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-400 pl-6">
                  <h3 className="font-inter text-xl font-semibold text-slate-900 mb-2">Sponsorships = Hard Work</h3>
                  <ul className="text-slate-700 space-y-2">
                    <li>• Brands demand measurable ROI (e.g., user engagement)</li>
                    <li>• Margins are slim, requiring scale to break even</li>
                    <li>• Only ~20% profit margins</li>
                  </ul>
                </div>

                <div className="border-l-4 border-slate-400 pl-6">
                  <h3 className="font-inter text-xl font-semibold text-slate-900 mb-2">Risk vs. Reward</h3>
                  <ul className="text-slate-700 space-y-2">
                    <li>• Why would Tinder risk its $1.7B revenue for an untested model?</li>
                    <li>• Startups lack the influence to attract big sponsors</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Our Solution */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Heart className="w-8 h-8 text-amber-400" />
                Peradel's Radical Experiment
              </h2>
              
              <p className="font-inter text-lg text-slate-700 mb-6 leading-relaxed">
                We're India's first dating/matrimony platform <strong>replacing subscriptions with sponsorships</strong>—keeping costs symbolic (₹99/year for verification only).
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-slate-900 mb-4">For Users:</h3>
                  <ul className="text-slate-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>No paywalls:</strong> Message, match, and marry without predatory pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>Trust:</strong> ₹99 verification reduces fake profiles</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-playfair text-xl font-semibold text-slate-900 mb-4">For Sponsors:</h3>
                  <ul className="text-slate-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span><strong>Goodwill:</strong> Align with a social mission (democratizing love)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span><strong>Hyper-Targeting:</strong> Reach millions of singles during emotional moments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Examples */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                A Plea to Visionary Brands
              </h2>
              
              <p className="font-inter text-lg text-slate-700 mb-6 leading-relaxed">
                <em>Imagine sponsoring a platform where your brand isn't an ad—it's a catalyst for relationships.</em>
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <strong className="text-slate-900">A jewelry brand</strong> funding "Verified Profiles" for serious daters
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <strong className="text-slate-900">A travel company</strong> sponsoring "Couple Goals" contests
                </div>
              </div>

              <p className="font-inter text-slate-700 mt-6 italic">
                We're not asking for charity—we're offering a first-mover advantage.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-slate-900 to-amber-400 rounded-2xl p-8 text-white text-center">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
                The Call to Action
              </h2>
              <p className="font-inter text-lg mb-6">
                To any brand reading this: <strong>Let's rebuild the dating and matrimony industry—together.</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:b2b@peradel.com"
                  className="bg-white text-slate-900 font-semibold px-8 py-4 rounded-full hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Contact: b2b@peradel.com
                </a>
                <span className="text-white/80">Be the first to prove love > profits</span>
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  );
};

export default Sponsorship;
