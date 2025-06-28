
import { Helmet } from 'react-helmet-async';
import { TrendingDown, Heart, DollarSign, Users } from 'lucide-react';
import Navbar from '../components/Navbar';

const Industry = () => {
  return (
    <>
      <Helmet>
        <title>Why Dating Apps Are So Expensive in India - Peradel Analysis</title>
        <meta name="description" content="Discover why dating apps in India are overpriced and how Peradel's sponsorship model offers a better solution at just ₹99/year." />
        <meta name="keywords" content="dating apps expensive, indian dating market, sponsorship model, affordable dating, peradel pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-red-800 to-slate-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
                Why Are Dating Apps So Expensive in India?
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                The untold truth about India's dating market and how we're fixing it
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* The Problem */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                The Root Causes
              </h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-red-400 pl-6">
                  <h3 className="font-inter text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Users className="w-6 h-6 text-red-400" />
                    1. The Big 3 Have a Monopoly (And They Know It)
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Tinder, Bumble, and Hinge dominate the market. With no real competition, they keep hiking prices because—let's face it—where else are we gonna go?
                  </p>
                </div>

                <div className="border-l-4 border-orange-400 pl-6">
                  <h3 className="font-inter text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <TrendingDown className="w-6 h-6 text-orange-400" />
                    2. The "Freemium" Scam
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    These apps intentionally cripple free users—hiding likes, limiting swipes, and making matches nearly impossible unless you pay. It's psychological manipulation to force you into subscriptions.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-400 pl-6">
                  <h3 className="font-inter text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-yellow-400" />
                    3. Premium Features Don't Even Work
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Even after paying ₹3000/year, you're not guaranteed matches. Most users report zero improvement in their dating life—just a lighter bank account.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="font-inter text-xl font-semibold text-slate-900 mb-3">
                    4. Indians Are Getting Ripped Off
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Compared to Western markets, Indian users pay way more relative to income. ₹3000/year might not sound like much, but for the average Indian earning ₹25,000/month, that's <strong>12% of their salary</strong>—just to maybe get a date.
                  </p>
                </div>
              </div>
            </div>

            {/* Market Impact */}
            <div className="bg-red-50 rounded-2xl p-8 shadow-lg">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                How This Is Destroying the Dating Market
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-inter text-lg font-semibold text-slate-900 mb-2">Only the Rich Get Matches</h3>
                  <p className="text-slate-600 text-sm">Dating apps have become pay-to-win. If you can't afford Premium, you're invisible.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-inter text-lg font-semibold text-slate-900 mb-2">Fake Profiles Everywhere</h3>
                  <p className="text-slate-600 text-sm">Since real users can't afford subscriptions, bots and catfishers take over.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingDown className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-inter text-lg font-semibold text-slate-900 mb-2">Gen-Z is Quitting</h3>
                  <p className="text-slate-600 text-sm">65% of Gen-Z users in India deleted dating apps because they're too expensive and ineffective.</p>
                </div>
              </div>
            </div>

            {/* The Solution */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Heart className="w-8 h-8 text-green-500" />
                The Solution: Sponsorship-Based Dating (Only ₹99/Year!)
              </h2>
              
              <p className="font-inter text-lg text-slate-700 mb-6 leading-relaxed">
                What if there was a dating app where subscriptions cost just ₹99/year instead of ₹3000?
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-inter text-xl font-semibold text-slate-900 mb-3">How It Works:</h3>
                  <p className="text-slate-700">
                    Instead of squeezing users for cash, brands and advertisers cover most costs (like how YouTube or Instagram are free but ad-supported).
                  </p>
                </div>

                <div>
                  <h3 className="font-inter text-xl font-semibold text-slate-900 mb-3">Why This Model Makes Sense:</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-green-500 font-bold mb-2">✅ Affordable for Users</div>
                      <p className="text-sm text-slate-600">No more ₹3000/year scams</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-green-500 font-bold mb-2">✅ Better Experience</div>
                      <p className="text-sm text-slate-600">Fewer bots since real users can actually afford it</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-green-500 font-bold mb-2">✅ Win for Brands</div>
                      <p className="text-sm text-slate-600">Companies get to engage with young, active daters</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-inter text-xl font-semibold text-slate-900 mb-3">Why India Needs This Now:</h3>
                  <ul className="text-slate-700 space-y-2">
                    <li>• Most Indians can't justify spending thousands on dating apps</li>
                    <li>• Brands already spend billions on digital ads—why not use that to make dating affordable?</li>
                    <li>• A low-cost, high-quality dating app would explode in India's market</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  );
};

export default Industry;
