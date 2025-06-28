
import { Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and brand */}
          <div className="space-y-4">
            <div className="font-playfair text-2xl font-bold">
              <span className="text-accent">Peradel</span>.com
            </div>
            <p className="font-inter text-gray-300 leading-relaxed">
              India's only value-for-money dating and matrimony platform. 
              Affordable. Authentic. For Love and Marriage.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="font-inter text-gray-300 hover:text-accent transition-colors block">
                About Us
              </Link>
              <Link to="/founder" className="font-inter text-gray-300 hover:text-accent transition-colors block">
                Our Founder
              </Link>
              <Link to="/blog" className="font-inter text-gray-300 hover:text-accent transition-colors block">
                Blog
              </Link>
              <Link to="/contact" className="font-inter text-gray-300 hover:text-accent transition-colors block">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-2">
              <p className="font-inter text-gray-300">
                Email: <a href="mailto:support@peradel.com" className="text-accent hover:text-accent/80 transition-colors">support@peradel.com</a>
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Legal links */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="font-inter text-gray-300 hover:text-accent transition-colors block">
                Terms of Use
              </a>
              <a href="#" className="font-inter text-gray-300 hover:text-accent transition-colors block">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="font-inter text-gray-400">
            © 2024 Peradel.com. All rights reserved. Made with ❤️ in India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
