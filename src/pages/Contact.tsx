
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Mail, MapPin, Building, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Peradel | Get in Touch</title>
        <meta name="description" content="Contact Peradel for support, business inquiries, or any questions about our dating and matrimony platform." />
        <meta name="keywords" content="contact peradel, customer support, business inquiries, help" />
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
            <h1 className="font-playfair text-3xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
              Contact Us
            </h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="font-playfair text-2xl font-semibold text-slate-900 mb-6">
                    Get in Touch
                  </h2>
                  <p className="font-inter text-slate-700 mb-8">
                    We're here to help! Reach out to us for any questions, support, or business inquiries.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-inter font-semibold text-slate-900 mb-1">Email</h3>
                        <a href="mailto:support@peradel.com" className="font-inter text-slate-700 hover:text-amber-600 transition-colors">
                          support@peradel.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-inter font-semibold text-slate-900 mb-1">Location</h3>
                        <p className="font-inter text-slate-700">
                          Bangalore, Karnataka<br />
                          India - 560001
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Information */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="font-playfair text-2xl font-semibold text-slate-900 mb-6">
                    Business Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Building className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-inter font-semibold text-slate-900 mb-1">CIN Number</h3>
                        <p className="font-inter text-slate-700">U72900KA2024PTC123456</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <FileText className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-inter font-semibold text-slate-900 mb-1">GST Number</h3>
                        <p className="font-inter text-slate-700">29ABCDE1234F1Z5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="font-playfair text-2xl font-semibold text-slate-900 mb-6">
                  Send us a Message
                </h2>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-inter font-medium text-slate-900 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-inter font-medium text-slate-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-inter font-medium text-slate-900 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-inter font-medium text-slate-900 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all resize-vertical"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-slate-900 to-amber-400 text-white font-inter font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Contact;
