
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-enterprise text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
            Welcome to Multiplierskraft
          </h1>
          <p className="text-lg md:text-xl text-mk-text-light mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Multiply your potential with our innovative solutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Link 
              to="/solutions/enterprise" 
              className="neumorphic-card hover:border-brand-primary animate-fade-in text-center"
              style={{ animationDelay: '300ms' }}
            >
              <h3 className="text-xl font-bold mb-3 text-white">Enterprise Solutions</h3>
              <p className="text-mk-text-light">Tailored solutions for businesses of all sizes</p>
            </Link>
            
            <div 
              className="neumorphic-card animate-fade-in text-center"
              style={{ animationDelay: '400ms' }}
            >
              <h3 className="text-xl font-bold mb-3 text-white">Academic Solutions</h3>
              <p className="text-mk-text-light">Empowering educational institutions</p>
            </div>
            
            <div 
              className="neumorphic-card animate-fade-in text-center"
              style={{ animationDelay: '500ms' }}
            >
              <h3 className="text-xl font-bold mb-3 text-white">Individual Solutions</h3>
              <p className="text-mk-text-light">Personal growth and development tools</p>
            </div>
          </div>
          
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Link to="/solutions/enterprise" className="btn-primary">
              Explore Enterprise Solutions
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
