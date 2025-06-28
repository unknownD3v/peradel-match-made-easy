
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Peradel | India's Value-for-Money Dating & Matrimony Platform</title>
        <meta name="description" content="Learn about Peradel's mission to provide affordable and authentic dating and matrimony services in India." />
        <meta name="keywords" content="about peradel, dating platform, matrimony, india, affordable, authentic" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-3xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
              About Peradel
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                  Our Mission
                </h2>
                <p className="font-inter text-slate-700 leading-relaxed mb-6">
                  At Peradel, we believe that finding love shouldn't break the bank. We're India's only value-for-money dating and matrimony platform, dedicated to making authentic connections accessible to everyone.
                </p>
                <p className="font-inter text-slate-700 leading-relaxed mb-6">
                  Our platform bridges the gap between casual dating and serious matrimony, offering a unique dual-purpose solution that understands the diverse relationship goals of modern Indians.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                  What Makes Us Different
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-slate-900 mb-3">Affordable Pricing</h3>
                    <p className="font-inter text-slate-700">50% more affordable than traditional platforms without compromising on quality.</p>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-slate-900 mb-3">Verified Profiles</h3>
                    <p className="font-inter text-slate-700">95% profile verification rate ensures authentic connections.</p>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-slate-900 mb-3">Dual Purpose</h3>
                    <p className="font-inter text-slate-700">Whether you're dating or seeking marriage, we've got you covered.</p>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-slate-900 mb-3">24/7 Support</h3>
                    <p className="font-inter text-slate-700">Round-the-clock customer support for all your queries.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                  Our Vision
                </h2>
                <p className="font-inter text-slate-700 leading-relaxed">
                  To become India's most trusted and affordable platform for meaningful relationships, whether they lead to dating or marriage. We envision a future where every Indian has access to quality matchmaking services without financial barriers.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
