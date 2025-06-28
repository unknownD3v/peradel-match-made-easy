
import { Helmet } from 'react-helmet-async';
import { Quote } from 'lucide-react';
import Navbar from '../components/Navbar';

const Founder = () => {
  return (
    <>
      <Helmet>
        <title>Meet Our Founder - Peradel | India's Value-for-Money Dating Platform</title>
        <meta name="description" content="Meet the visionary founder behind Peradel, India's most affordable dating and matrimony platform." />
        <meta name="keywords" content="peradel founder, dating platform founder, matrimony founder, startup founder india" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-50">
        <Navbar />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-3xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
              Meet Our Founder
            </h1>
            
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                {/* Founder Photo */}
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-slate-900 to-amber-400 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                  F
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    Founder Name
                  </h2>
                  <p className="font-inter text-lg text-slate-600 mb-6">
                    Founder & CEO, Peradel
                  </p>
                  <p className="font-inter text-slate-700 leading-relaxed">
                    A visionary entrepreneur passionate about making meaningful connections accessible to every Indian, regardless of their economic background.
                  </p>
                </div>
              </div>

              {/* Quote Section */}
              <div className="bg-slate-50 rounded-xl p-8 relative">
                <Quote className="w-12 h-12 text-amber-400 mb-4" />
                <blockquote className="font-playfair text-xl md:text-2xl text-slate-900 italic leading-relaxed mb-6">
                  "I am not the first to start a dating and matrimony website, but I will be the last."
                </blockquote>
                <div className="h-1 w-20 bg-gradient-to-r from-slate-900 to-amber-400 rounded"></div>
              </div>

              {/* Vision & Story */}
              <div className="mt-12 space-y-8">
                <div>
                  <h3 className="font-playfair text-xl md:text-2xl font-semibold text-slate-900 mb-4">
                    The Vision Behind Peradel
                  </h3>
                  <p className="font-inter text-slate-700 leading-relaxed">
                    Our founder recognized a fundamental gap in the Indian matchmaking industry - quality platforms were either too expensive or lacked authenticity. With Peradel, the vision was clear: create a platform that doesn't compromise on quality while remaining accessible to every Indian seeking meaningful relationships.
                  </p>
                </div>

                <div>
                  <h3 className="font-playfair text-xl md:text-2xl font-semibold text-slate-900 mb-4">
                    The Journey
                  </h3>
                  <p className="font-inter text-slate-700 leading-relaxed">
                    Starting with a simple belief that love shouldn't be a luxury, our founder built Peradel from the ground up. Every feature, every policy, and every decision reflects our commitment to making authentic connections affordable and accessible to all Indians.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Founder;
