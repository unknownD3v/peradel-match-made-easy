
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Building, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';

const Contact = () => {
  const handleGoogleContact = () => {
    window.open('https://forms.gle/your-google-form-id', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Contact Peradel - Get Support & Business Inquiries | India's Value Dating Platform</title>
        <meta name="description" content="Contact Peradel for customer support, partnership opportunities, and business inquiries. Reach out to India's most affordable dating and matrimony platform." />
        <meta name="keywords" content="contact peradel, customer support, business inquiries, dating app support, matrimony help, peradel contact, india dating support" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://peradel.com/contact" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Contact Peradel - Get Support & Business Inquiries" />
        <meta property="og:description" content="Contact Peradel for customer support, partnership opportunities, and business inquiries. Reach out to India's most affordable dating and matrimony platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peradel.com/contact" />
        <meta property="og:site_name" content="Peradel" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Peradel - Get Support & Business Inquiries" />
        <meta name="twitter:description" content="Contact Peradel for customer support, partnership opportunities, and business inquiries." />
        <meta name="twitter:site" content="@peradel" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Peradel",
            "url": "https://peradel.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "support@peradel.com",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bangalore",
              "addressRegion": "Karnataka",
              "postalCode": "560001",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://twitter.com/peradel",
              "https://instagram.com/peradel"
            ]
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-slate-50">
        <Navbar />

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

              {/* Google Contact Button */}
              <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col justify-center items-center text-center">
                <h2 className="font-playfair text-2xl font-semibold text-slate-900 mb-6">
                  Send us a Message
                </h2>
                
                <p className="font-inter text-slate-700 mb-8 leading-relaxed">
                  Click the button below to contact us through our secure Google form. We'll get back to you within 24 hours.
                </p>
                
                <Button
                  onClick={handleGoogleContact}
                  className="bg-gradient-to-r from-slate-900 to-amber-400 text-white font-inter font-semibold py-6 px-12 rounded-lg hover:shadow-lg transition-all duration-300 text-lg"
                  size="lg"
                >
                  Contact Us via Google Form
                </Button>
                
                <p className="font-inter text-sm text-slate-500 mt-4">
                  Secure • Fast Response • No Spam
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Contact;
