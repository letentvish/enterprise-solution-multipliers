
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import { ChevronDown, User, Target, ArrowRight, Crown, BookOpen, Search, BarChart3, Phone, Mail, Globe } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const EnterpriseSolutions = () => {
  return (
    <div className="min-h-screen bg-gradient-enterprise text-white">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-semibold mb-6 text-white text-glow animate-fade-in">
              Enterprise Solutions: Multiply Your Potential with Multiplierskraft
            </h1>
            <p className="text-base md:text-xl text-mk-text-light mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
              From startups to enterprises, we craft tailored solutions to drive growth, 
              enhance performance, and cultivate talent across industries.
            </p>
            <div className="mt-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Link to="/contact" className="btn-primary">
                Explore Enterprise Solutions
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background particles */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-func-info/20 animate-float-particle"></div>
        <div className="absolute top-3/4 left-3/4 w-4 h-4 rounded-full bg-func-info/30 animate-float-particle" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-8 h-8 rounded-full bg-func-info/10 animate-float-particle" style={{ animationDelay: '6s' }}></div>
      </section>
      
      {/* About Us Section */}
      <section className="py-16 px-4 bg-mk-dark-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title text-brand-secondary animate-fade-in">Who We Are</h2>
          <p className="section-description animate-fade-in" style={{ animationDelay: '200ms' }}>
            Our identity resides in our true purpose and passion to perform. With a global leadership 
            background in HR, OD, learning, and technology, we are your end-to-end capability-building 
            partner, helping enterprises navigate their strategic, operational, and transformational journeys.
          </p>
        </div>
      </section>
      
      {/* Key Offerings Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="section-title text-brand-secondary text-center animate-fade-in">
            Key Offerings for Enterprises
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Offering 1 */}
            <div className="neumorphic-card animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-func-info/20 rounded-full flex items-center justify-center mb-4 icon-bounce">
                  <User className="w-8 h-8 text-func-info" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Capability & Talent Development Solutions</h3>
                <p className="text-mk-text-light mb-6">
                  Explore tailored programs that blend experiential learning with strategic insights, 
                  led by global leaders with deep industry expertise to empower your teams and drive growth.
                </p>
                <Link to="/contact" className="px-4 py-2 bg-brand-secondary text-black font-bold rounded-lg 
                                             hover:bg-brand-secondary-hover transition-all duration-300 transform hover:scale-105">
                  Explore
                </Link>
              </div>
            </div>
            
            {/* Offering 2 */}
            <div className="neumorphic-card animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-func-info/20 rounded-full flex items-center justify-center mb-4 icon-bounce">
                  <Crown className="w-8 h-8 text-func-info" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Leadership Development</h3>
                <p className="text-mk-text-light mb-6">
                  Our core competence lies in nurturing and developing leadership potential across organizations, 
                  empowering leaders and teams to thrive in an ever-changing world.
                </p>
                <Link to="/contact" className="px-4 py-2 bg-brand-secondary text-black font-bold rounded-lg 
                                             hover:bg-brand-secondary-hover transition-all duration-300 transform hover:scale-105">
                  Explore
                </Link>
              </div>
            </div>
            
            {/* Offering 3 */}
            <div className="neumorphic-card animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-func-info/20 rounded-full flex items-center justify-center mb-4 icon-bounce">
                  <BookOpen className="w-8 h-8 text-func-info" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">AI-Powered LMS: MILE</h3>
                <p className="text-mk-text-light mb-6">
                  MILE is an AI-powered learning platform designed for skill acceleration 
                  via personalized learning journeys, driving smarter people growth for your enterprise.
                </p>
                <Link to="/contact" className="px-4 py-2 bg-brand-secondary text-black font-bold rounded-lg 
                                             hover:bg-brand-secondary-hover transition-all duration-300 transform hover:scale-105">
                  Explore
                </Link>
              </div>
            </div>
            
            {/* Offering 4 */}
            <div className="neumorphic-card animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-func-info/20 rounded-full flex items-center justify-center mb-4 icon-bounce">
                  <Search className="w-8 h-8 text-func-info" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Assessment: CARVE</h3>
                <p className="text-mk-text-light mb-6">
                  Unravel your team's potential and CARVE their niche through a personality assessment tool 
                  that provides insights into styles and strategies for deeper connections and success.
                </p>
                <Link to="/contact" className="px-4 py-2 bg-brand-secondary text-black font-bold rounded-lg 
                                             hover:bg-brand-secondary-hover transition-all duration-300 transform hover:scale-105">
                  Explore
                </Link>
              </div>
            </div>
            
            {/* Offering 5 */}
            <div className="neumorphic-card animate-fade-in" style={{ animationDelay: '500ms' }}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-func-info/20 rounded-full flex items-center justify-center mb-4 icon-bounce">
                  <BarChart3 className="w-8 h-8 text-func-info" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Data Analysis: DATANIX</h3>
                <p className="text-mk-text-light mb-6">
                  DataNix, powered by AWS, transforms massive data into clear, actionable insights 
                  with dynamic dashboards and automated workflows, driving fast, data-driven decisions for your enterprise.
                </p>
                <Link to="/contact" className="px-4 py-2 bg-brand-secondary text-black font-bold rounded-lg 
                                             hover:bg-brand-secondary-hover transition-all duration-300 transform hover:scale-105">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industry Focus */}
      <section className="py-16 px-4 bg-mk-dark-card/30">
        <div className="container mx-auto">
          <h2 className="section-title text-brand-secondary text-center animate-fade-in">Industries We Serve</h2>
          <p className="section-description text-center max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            We partner with enterprises across diverse industries, including Engineering, IT, Product, 
            Automotive, Services, BFSI, Manufacturing, Pharma, ITES, SaaS, Retail, Education, and Consulting, 
            delivering tailored solutions to drive growth at every stage.
          </p>
          
          <div className="mt-10 overflow-x-auto scrollbar-none">
            <div className="flex space-x-8 pb-4 min-w-max px-4">
              {['Engineering', 'IT', 'Automotive', 'Manufacturing', 'Pharma', 'BFSI', 'SaaS', 'Retail', 'Education', 'Consulting'].map((industry, index) => (
                <div 
                  key={industry} 
                  className="flex flex-col items-center animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="w-20 h-20 bg-mk-dark-card rounded-full flex items-center justify-center border border-mk-stroke/20 
                                 shadow-neumorphic hover:bg-func-info/20 transition-all duration-300">
                    <div className="w-10 h-10 bg-func-info/30 rounded-full"></div>
                  </div>
                  <span className="mt-3 text-sm text-mk-text-light">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Customers */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="section-title text-brand-secondary text-center animate-fade-in">Our Enterprise Partners</h2>
          <p className="section-description text-center max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            We partner with leading organizations across India and internationally, spanning industries 
            like pharmaceuticals, manufacturing, automotive, IT, and consulting, to drive growth, 
            enhance performance, and cultivate talent.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {['Bosch', 'Dr. Reddy\'s', 'Endurance', 'Lambda Crunch Inc.', 'Nallak', 'TechGlobal'].map((client, index) => (
              <div 
                key={client} 
                className="neumorphic-card h-32 flex items-center justify-center group animate-fade-in"
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <div className="text-xl font-bold text-white opacity-70 group-hover:opacity-0 transition-opacity duration-300">
                    {client}
                  </div>
                  <div className="absolute inset-0 bg-func-info flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-lg font-semibold">{client}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Catalogue of Services */}
      <section className="py-16 px-4 bg-mk-dark-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title text-brand-secondary text-center animate-fade-in">Our Enterprise Catalogue</h2>
          
          <div className="mt-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-mk-stroke/20 rounded-lg overflow-hidden bg-mk-dark-card">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-brand-primary">
                  Compliance & Regulatory Training
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-mk-text-light">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Workplace Ethics & Code of Conduct</li>
                    <li>POSH (Prevention of Sexual Harassment)</li>
                    <li>Data Privacy & Cybersecurity Awareness</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-mk-stroke/20 rounded-lg overflow-hidden bg-mk-dark-card">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-brand-primary">
                  Employee Well-being
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-mk-text-light">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Mental Health & Stress Management</li>
                    <li>Work-Life Balance & Resilience</li>
                    <li>Inclusive Leadership</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border border-mk-stroke/20 rounded-lg overflow-hidden bg-mk-dark-card">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-brand-primary">
                  Leadership Development
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-mk-text-light">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>First-Time Manager Training</li>
                    <li>Executive Leadership Programs</li>
                    <li>Strategic Thinking & Decision-Making</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border border-mk-stroke/20 rounded-lg overflow-hidden bg-mk-dark-card">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-brand-primary">
                  Digital & Technology UpSkilling
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-mk-text-light">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cloud Computing</li>
                    <li>Generative AI</li>
                    <li>DevOps and CI/CD</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border border-mk-stroke/20 rounded-lg overflow-hidden bg-mk-dark-card">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-brand-primary">
                  Soft Skills & Behavioural Training
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-mk-text-light">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Empathy in Communication</li>
                    <li>Critical Thinking & Problem-Solving</li>
                    <li>Building Psychological Safety in Teams</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border border-mk-stroke/20 rounded-lg overflow-hidden bg-mk-dark-card">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-brand-primary">
                  OD Interventions
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-mk-text-light">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cultural & Change Management</li>
                    <li>Design Thinking</li>
                    <li>Employee Engagement</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* Why Choose Multiplierskraft */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="section-title text-brand-secondary text-center animate-fade-in">
            Why Choose Multiplierskraft for Your Enterprise?
          </h2>
          <p className="section-description text-center max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            We are committed to multiplying potential, maximizing growth, and creating lasting 
            impact for enterprises. Our solutions are deeply curated with the nuances of roles, 
            personas, and influential instruments, ensuring measurable outcomes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {/* Point 1 */}
            <div className="neumorphic-card animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-func-info/20 rounded-full flex items-center justify-center mb-4 icon-bounce">
                  <User className="w-8 h-8 text-func-info" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Role-Centric Solutions</h3>
                <p className="text-mk-text-light">
                  Our solutions are tailored to the specific roles and personas within your 
                  organization, ensuring relevance and effectiveness.
                </p>
              </div>
            </div>
            
            {/* Point 2 */}
            <div className="neumorphic-card animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-func-info/20 rounded-full flex items-center justify-center mb-4 icon-bounce">
                  <Target className="w-8 h-8 text-func-info" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Impact-Driven Approach</h3>
                <p className="text-mk-text-light">
                  We visualize a future of growth and impact, inspiring our client engagements 
                  and day-to-day work.
                </p>
              </div>
            </div>
            
            {/* Point 3 */}
            <div className="neumorphic-card animate-fade-in" style={{ animationDelay: '500ms' }}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-func-info/20 rounded-full flex items-center justify-center mb-4 icon-bounce">
                  <ArrowRight className="w-8 h-8 text-func-info" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Action-Oriented Progress</h3>
                <p className="text-mk-text-light">
                  We focus on progress, not just movement, enabling the next steps to achieve 
                  your milestones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 px-4 bg-mk-dark-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="section-title text-brand-secondary animate-fade-in">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="section-description animate-fade-in" style={{ animationDelay: '200ms' }}>
              Contact us to explore how Multiplierskraft can empower your organization with 
              tailored capability solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '300ms' }}>
                <Phone className="w-10 h-10 text-brand-primary mb-3" />
                <p className="text-mk-caption">+91-9611058522</p>
              </div>
              
              <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '400ms' }}>
                <Mail className="w-10 h-10 text-brand-primary mb-3" />
                <p className="text-mk-caption">info@multiplierskraft.com</p>
              </div>
              
              <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '500ms' }}>
                <Globe className="w-10 h-10 text-brand-primary mb-3" />
                <p className="text-mk-caption">Bangalore, India</p>
              </div>
            </div>
            
            <div className="mt-10 animate-fade-in" style={{ animationDelay: '600ms' }}>
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default EnterpriseSolutions;
