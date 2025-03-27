
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-mk-bg1 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-2xl font-bold text-brand-primary">Ready to Multiply Your Potential?</h3>
            <p className="text-mk-text-light">Contact us to explore how our solutions can empower your journey.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-center">Get in Touch</Link>
              <Link to="/mile-intro" className="btn-secondary text-center">Watch MILE Intro</Link>
            </div>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-bold text-white">Company</h3>
            <p className="text-mk-caption">Bangalore, India | info@multiplierskraft.com</p>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-mk-caption hover:text-brand-primary transition-colors">About Us</Link></li>
                <li><Link to="/solutions" className="text-mk-caption hover:text-brand-primary transition-colors">Solutions</Link></li>
                <li><Link to="/blog" className="text-mk-caption hover:text-brand-primary transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="text-mk-caption hover:text-brand-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-bold text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <a 
                  key={index} 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="overflow-hidden rounded-md hover:scale-105 transition-transform"
                >
                  <div className="aspect-square bg-mk-dark-card flex items-center justify-center">
                    <div className="w-8 h-8 bg-func-info/30 rounded-full animate-pulse-subtle" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h3 className="text-xl font-bold text-white">Contact</h3>
            <ul className="space-y-3 text-mk-caption">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-brand-primary" />
                <span>+91-9611058522</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-brand-primary" />
                <span>info@multiplierskraft.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-brand-primary" />
                <a 
                  href="https://multiplierskraft.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-brand-primary transition-colors"
                >
                  multiplierskraft.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-mk-caption">
          <p>© 2025 Multiplierskraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
