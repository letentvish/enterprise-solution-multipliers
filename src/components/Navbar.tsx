
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-mk-dark/90 backdrop-blur-md py-2 shadow-lg' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-white font-bold text-xl md:text-2xl"
          >
            Multiplierskraft
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            
            {/* Solutions Dropdown */}
            <div className="relative">
              <button 
                className="nav-link flex items-center"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
              >
                Solutions
                {solutionsOpen ? 
                  <ChevronUp className="ml-1 h-4 w-4" /> : 
                  <ChevronDown className="ml-1 h-4 w-4" />
                }
              </button>
              
              {solutionsOpen && (
                <div 
                  className="absolute left-0 mt-2 w-60 bg-mk-dark-card/90 backdrop-blur-md rounded-md shadow-lg py-2 z-50 border border-mk-stroke/20 animate-fade-in-fast"
                >
                  <Link 
                    to="/solutions/enterprise" 
                    className="block px-4 py-2 text-mk-text-off-white hover:bg-func-info hover:text-white transition-colors duration-200"
                  >
                    Enterprise Solutions
                  </Link>
                  <Link 
                    to="/solutions/academic" 
                    className="block px-4 py-2 text-mk-text-off-white hover:bg-func-info hover:text-white transition-colors duration-200"
                  >
                    Academic Solutions
                  </Link>
                  <Link 
                    to="/solutions/individual" 
                    className="block px-4 py-2 text-mk-text-off-white hover:bg-func-info hover:text-white transition-colors duration-200"
                  >
                    Individual Solutions
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
            <Link to="/login" className="btn-primary !py-2 !px-4">Login</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-mk-text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-mk-dark-card/95 backdrop-blur-md mt-4 p-4 rounded-md border border-mk-stroke/20 shadow-lg animate-fade-in-fast">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              
              {/* Solutions Dropdown Mobile */}
              <button 
                className="nav-link text-left flex items-center justify-between"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
              >
                Solutions
                {solutionsOpen ? 
                  <ChevronUp className="ml-1 h-4 w-4" /> : 
                  <ChevronDown className="ml-1 h-4 w-4" />
                }
              </button>
              
              {solutionsOpen && (
                <div className="pl-4 flex flex-col space-y-2 border-l border-mk-stroke/20">
                  <Link 
                    to="/solutions/enterprise" 
                    className="nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    Enterprise Solutions
                  </Link>
                  <Link 
                    to="/solutions/academic" 
                    className="nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    Academic Solutions
                  </Link>
                  <Link 
                    to="/solutions/individual" 
                    className="nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    Individual Solutions
                  </Link>
                </div>
              )}
              
              <Link 
                to="/blog" 
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              <Link 
                to="/login" 
                className="btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
