
import { Helmet } from 'react-helmet-async';
import { Heart, Mail, Building } from 'lucide-react';
import Navbar from '../components/Navbar';

const OpenLetters = () => {
  return (
    <>
      <Helmet>
        <title>Open Letters from CEO - Peradel | A Message to Brands & Companies</title>
        <meta name="description" content="Read heartfelt open letters from Peradel's CEO about revolutionizing the dating industry through sponsorship partnerships." />
        <meta name="keywords" content="CEO letter, brand partnership, sponsorship opportunity, peradel ceo, dating industry change" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
                Open Letters from Our CEO
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                A heartfelt message to visionary brands and companies
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Letter 1 - To Big Companies */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="border-b border-slate-200 pb-6 mb-6">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                  <Building className="w-8 h-8 text-blue-500" />
                  An Open Letter to Big Companies
                </h2>
                <p className="text-slate-600 italic">Let's Talk About Real Impact</p>
              </div>
              
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="font-inter text-lg">
                  <strong>Dear Visionary Leaders,</strong>
                </p>
                
                <p>
                  Let's be honest—throwing crores at cringe TV dramas or forgettable movie sponsorships isn't marketing. It's noise. What if I told you there's a way to <em>spend smarter, not harder</em>—while actually changing lives?
                </p>

                <p>
                  At <strong>Peradel.com</strong>, we're on a mission to <strong>redefine love and marriage in India</strong> by making it accessible, not expensive. For just <strong>₹99 a year</strong>, we verify users and keep the platform safe—no predatory pricing, no paywalls. But to scale this revolution, we need your help.
                </p>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-playfair text-xl font-semibold text-slate-900 mb-4">The Math of Meaningful Marketing</h3>
                  <p>
                    You already spend <strong>crores on ads people skip</strong>. What if just <strong>0.5% of that</strong> went toward something people thank you for? Sponsoring Peradel isn't charity—it's <em>smart branding with soul</em>.
                  </p>
                </div>

                <p>
                  Imagine your logo not on a forgettable TV show, but beside stories like:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>"We met on Peradel—sponsored by [Your Brand]."</li>
                  <li>"Finally, a dating site that doesn't treat love like a premium feature."</li>
                </ul>
                <p><em>That's legacy-building PR.</em></p>

                <div className="bg-amber-50 rounded-lg p-6">
                  <h3 className="font-playfair text-xl font-semibold text-slate-900 mb-4">Why This? Why Now?</h3>
                  <p>
                    India's youth are tired of dating apps that <strong>charge ₹300/month just to say 'Hi'</strong>. Matrimony sites <strong>extort families</strong> for basic contact details. We're breaking that cycle—but we can't do it alone.
                  </p>
                </div>

                <p>Your sponsorship would:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li><strong>Prove your brand cares</strong> about real human connections</li>
                  <li><strong>Engage millions</strong> of singles (and their families) who'll remember you for enabling love</li>
                  <li><strong>Create earned media</strong>—because "Brand X Made Dating Fair" is a headline worth chasing</li>
                </ol>

                <p>
                  A few crores to you is <em>a rounding error</em>. To us, it's the seed to eliminate financial barriers to love and build India's first ethical dating platform.
                </p>
              </div>
            </div>

            {/* Letter 2 - To CEOs */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="border-b border-slate-200 pb-6 mb-6">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-red-500" />
                  An Open Letter to CEOs
                </h2>
                <p className="text-slate-600 italic">Let's Make Love Affordable Together</p>
              </div>
              
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="font-inter text-lg">
                  <strong>Dear Change-Makers,</strong>
                </p>
                
                <p>
                  I want to ask you something personal: When was the last time your marketing budget actually changed lives?
                </p>

                <p>
                  At Peradel.com, we're doing something radical - we've slashed subscription prices to just ₹99/year when everyone else charges thousands. Why? Because we believe love shouldn't be a luxury.
                </p>

                <p>
                  But here's the hard truth - we can't fight this battle alone. While other dating sites enjoy 90% profit margins by exploiting lonely hearts, we're trying to build something better.
                </p>

                <div className="bg-green-50 rounded-lg p-6">
                  <p className="font-semibold text-slate-900 mb-3">Your sponsorship wouldn't just be another line item - it would:</p>
                  <ul className="space-y-2">
                    <li>• Give 10 million singles a fair chance at love</li>
                    <li>• Show India that your brand stands for more than profits</li>
                    <li>• Create heartwarming stories of connections made possible by you</li>
                  </ul>
                </div>

                <p>
                  Remember how Amul became iconic by sponsoring love stories in the 90s? This is your chance to create that same emotional connection, but for the digital generation.
                </p>

                <p>
                  We're not asking for much - just 2% of what you'd spend on another forgettable TV commercial. But this small amount could help us verify profiles, prevent scams, and keep love affordable for everyone.
                </p>

                <div className="text-center bg-slate-900 text-white rounded-lg p-6">
                  <p className="font-playfair text-xl font-semibold">
                    The question is simple: Do you want your brand to be remembered for sponsoring cringe TV... or for helping create millions of love stories?
                  </p>
                </div>

                <p className="text-center font-semibold">
                  Let's write this new chapter together.
                </p>
              </div>
            </div>

            {/* Letter 3 - Personal Letter */}
            <div className="bg-gradient-to-br from-slate-100 to-white rounded-2xl p-8 shadow-lg">
              <div className="border-b border-slate-200 pb-6 mb-6">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Why Has No One Tried a Sponsorship Model?
                </h2>
                <p className="text-slate-600 italic">A personal reflection from our founder</p>
              </div>
              
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p>
                  It's a question I've been asking myself a lot lately: why has no dating or matrimony platform in India—or even globally—ever seriously explored a sponsorship model?
                </p>

                <p>
                  The answer is simple but heartbreaking: <strong>because it's not a money-making machine.</strong>
                </p>

                <p>
                  Subscription models are built to squeeze the most out of users. They boast 90% gross margins. Every interaction, every message, every swipe can be monetized. It's efficient, it's scalable, and it's incredibly profitable.
                </p>

                <p>
                  Now contrast that with sponsorship. Brands may give you just enough to survive—barely 20% margins. It's not glamorous. It doesn't make headlines. And in the world of venture capital and billion-dollar valuations, that's not considered "disruptive enough."
                </p>

                <div className="bg-amber-50 rounded-lg p-6 text-center">
                  <p className="font-playfair text-xl font-semibold text-slate-900">
                    But maybe disruption doesn't need to be profitable. Maybe it just needs to be human.
                  </p>
                </div>

                <p>
                  At Peradel.com, we're daring to think differently. We're not here to exploit loneliness or lock love behind a paywall. We're here to make dating and matrimony honest, accessible, and safe for everyone in India. That's why we charge just ₹99 a year—only to verify users. That's it. No hidden fees. No endless subscriptions.
                </p>

                <p>
                  But for this dream to become reality, we need support.
                </p>

                <p>
                  No major brand has ever sponsored a dating or matrimony platform in India. Not one. Maybe because no one ever believed in the power of love without profit. Maybe because no one thought real connection could come without a price tag.
                </p>

                <p>
                  But we believe. And we're hoping someone else out there does too.
                </p>

                <div className="text-center">
                  <p className="font-inter text-lg mb-4">
                    If you're a company or a brand reading this—we need you. Help us change the way India connects.
                  </p>
                  <p className="font-semibold">
                    We're not asking for millions. We're just asking for a chance.
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-6 text-right">
                  <p className="font-semibold text-slate-900">— Satyajit Herma</p>
                  <p className="text-slate-600">CEO, Peradel.com</p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-slate-900 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
                Ready to Make History Together?
              </h2>
              <p className="font-inter text-lg mb-6">
                Let's build the future of love in India, one partnership at a time.
              </p>
              
              <a 
                href="mailto:b2b@peradel.com"
                className="bg-white text-slate-900 font-semibold px-8 py-4 rounded-full hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Us: b2b@peradel.com
              </a>
            </div>

          </div>
        </main>
      </div>
    </>
  );
};

export default OpenLetters;
