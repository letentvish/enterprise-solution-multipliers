
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { User, Crown, BookUser, Search, BarChart, Target, MoveRight, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const EnterpriseSolutions = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const container = document.getElementById('particles-container');
      if (!container) return;

      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('floating-particle');
        
        // Random size between 5px and 20px
        const size = Math.random() * 15 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 10}s`;
        
        // Random opacity
        particle.style.opacity = `${Math.random() * 0.3 + 0.1}`;
        
        container.appendChild(particle);
      }
    };

    // Setup intersection observer for animations
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    createParticles();

    return () => {
      if (observerRef.current) {
        animatedElements.forEach(el => {
          observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);

  // Offering data
  const offerings = [
    {
      title: "Capability & Talent Development Solutions",
      icon: <User className="w-10 h-10 text-func-info icon-bounce" />,
      description: "Explore tailored programs that blend experiential learning with strategic insights, led by global leaders with deep industry expertise to empower your teams and drive growth."
    },
    {
      title: "Leadership Development",
      icon: <Crown className="w-10 h-10 text-func-info icon-bounce" />,
      description: "Our core competence lies in nurturing and developing leadership potential across organizations, empowering leaders and teams to thrive in an ever-changing world."
    },
    {
      title: "AI-Powered LMS: MILE",
      icon: <BookUser className="w-10 h-10 text-func-info icon-bounce" />,
      description: "MILE is an AI-powered learning platform designed for skill acceleration via personalized learning journeys, driving smarter people growth for your enterprise."
    },
    {
      title: "Assessment: CARVE",
      icon: <Search className="w-10 h-10 text-func-info icon-bounce" />,
      description: "Unravel your team's potential and CARVE their niche through a personality assessment tool that provides insights into styles and strategies for deeper connections and success."
    },
    {
      title: "Data Analysis: DATANIX",
      icon: <BarChart className="w-10 h-10 text-func-info icon-bounce" />,
      description: "DataNix, powered by AWS, transforms massive data into clear, actionable insights with dynamic dashboards and automated workflows, driving fast, data-driven decisions for your enterprise."
    }
  ];

  // Industry data
  const industries = [
    "Engineering", "IT", "Product", "Automotive",
    "Services", "BFSI", "Manufacturing", "Pharma", 
    "ITES", "SaaS", "Retail", "Education", "Consulting"
  ];

  // Clients data
  const clients = [
    "Bosch", "Dr. Reddy's", "Endurance", 
    "Lambda Crunch Inc.", "Nallak", "Client 6",
    "Client 7", "Client 8", "Client 9"
  ];

  // Catalogue data
  const catalogueData = [
    {
      category: "Compliance & Regulatory Training",
      programs: ["Workplace Ethics & Code of Conduct", "POSH", "Data Privacy & Cybersecurity Awareness"]
    },
    {
      category: "Employee Well-being",
      programs: ["Mental Health & Stress Management", "Work-Life Balance & Resilience", "Inclusive Leadership"]
    },
    {
      category: "Leadership Development",
      programs: ["First-Time Manager Training", "Executive Leadership Programs", "Strategic Thinking & Decision-Making"]
    },
    {
      category: "Digital & Technology UpSkilling",
      programs: ["Cloud Computing", "Generative AI", "DevOps and CI/CD"]
    },
    {
      category: "Soft Skills & Behavioural Training",
      programs: ["Empathy in Communication", "Critical Thinking & Problem-Solving", "Building Psychological Safety in Teams"]
    },
    {
      category: "OD Interventions",
      programs: ["Cultural & Change Management", "Design Thinking", "Employee Engagement"]
    }
  ];

  // Advantages data
  const advantages = [
    {
      title: "Role-Centric Solutions",
      icon: <User className="w-10 h-10 text-func-info" />,
      description: "Our solutions are tailored to the specific roles and personas within your organization, ensuring relevance and effectiveness."
    },
    {
      title: "Impact-Driven Approach",
      icon: <Target className="w-10 h-10 text-func-info" />,
      description: "We visualize a future of growth and impact, inspiring our client engagements and day-to-day work."
    },
    {
      title: "Action-Oriented Progress",
      icon: <MoveRight className="w-10 h-10 text-func-info" />,
      description: "We focus on progress, not just movement, enabling the next steps to achieve your milestones."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-enterprise text-white">
      <div id="particles-container" className="fixed inset-0 pointer-events-none overflow-hidden"></div>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9IiM2MDYwQUUiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PGxpbmUgeDE9IjAiIHkxPSIyMCIgeDI9IjQwIiB5Mj0iMjAiIHN0cm9rZT0iIzYwNjBBRSIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48bGluZSB4MT0iMjAiIHkxPSIwIiB4Mj0iMjAiIHkyPSI0MCIgc3Ryb2tlPSIjNjA2MEFFIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-20 mix-blend-overlay z-0"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-glow animate-fade-in">
              Enterprise Solutions: Multiply Your Potential with Multiplierskraft
            </h1>
            <p className="text-lg md:text-xl text-mk-text-light mb-8 animate-slide-up opacity-0" style={{ animationDelay: '300ms' }}>
              From startups to enterprises, we craft tailored solutions to drive growth, enhance performance, and cultivate talent across industries.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
              Explore Enterprise Solutions
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-mk-dark to-transparent"></div>
      </section>

      {/* About Us Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title animate-on-scroll opacity-0">Who We Are</h2>
            <p className="section-description animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
              Our identity resides in our true purpose and passion to perform. With a global leadership background in HR, OD, learning, and technology, we are your end-to-end capability-building partner, helping enterprises navigate their strategic, operational, and transformational journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Key Offerings Section */}
      <section className="py-20 relative bg-mk-dark/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="section-title animate-on-scroll opacity-0">Key Offerings for Enterprises</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div 
                key={index} 
                className="neumorphic-card animate-on-scroll opacity-0 flex flex-col items-center text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 p-4 bg-mk-dark-purple/50 rounded-full">
                  {offering.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{offering.title}</h3>
                <p className="text-mk-text-light mb-4">{offering.description}</p>
                <Link 
                  to={`/solutions/enterprise/${offering.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="mt-auto btn-secondary !py-2 !px-4 text-sm"
                >
                  Explore
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="section-title animate-on-scroll opacity-0">Industries We Serve</h2>
            <p className="section-description animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
              We partner with enterprises across diverse industries, delivering tailored solutions to drive growth at every stage.
            </p>
          </div>

          <div className="flex overflow-x-auto pb-6 scrollbar-none">
            <div className="flex space-x-4">
              {industries.map((industry, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 bg-mk-dark-card px-6 py-4 rounded-full border border-mk-stroke/20 shadow-neumorphic
                             hover:bg-func-info/20 transition-colors duration-300 animate-on-scroll opacity-0 cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-white font-medium whitespace-nowrap">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Customers Section */}
      <section className="py-20 relative bg-mk-dark/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="section-title animate-on-scroll opacity-0">Our Enterprise Partners</h2>
            <p className="section-description animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
              We partner with leading organizations across India and internationally, spanning industries like pharmaceuticals, manufacturing, automotive, IT, and consulting, to drive growth, enhance performance, and cultivate talent.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="aspect-video bg-mk-dark-card rounded-xl flex items-center justify-center overflow-hidden
                           border border-mk-stroke/20 shadow-neumorphic hover:shadow-lg group relative
                           animate-on-scroll opacity-0 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl font-bold text-white/80 group-hover:scale-110 transition-transform duration-300">
                  {client}
                </div>
                <div className="absolute inset-0 bg-func-info opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold">{client}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue of Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="section-title animate-on-scroll opacity-0">Our Enterprise Catalogue</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {catalogueData.map((category, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="animate-on-scroll opacity-0 bg-mk-dark-card rounded-xl border border-mk-stroke/20 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-func-info/10 transition-colors">
                    <span className="text-lg font-semibold text-white">{category.category}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ul className="space-y-2 text-mk-text-light">
                      {category.programs.map((program, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-brand-primary mr-2"></div>
                          {program}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative bg-mk-dark/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="section-title animate-on-scroll opacity-0">Why Choose Multiplierskraft for Your Enterprise?</h2>
            <p className="section-description animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
              We are committed to multiplying potential, maximizing growth, and creating lasting impact for enterprises. Our solutions are deeply curated with the nuances of roles, personas, and influential instruments, ensuring measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="neumorphic-card animate-on-scroll opacity-0 flex flex-col items-center text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 p-4 bg-mk-dark-purple/50 rounded-full">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{advantage.title}</h3>
                <p className="text-mk-text-light">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative bg-gradient-to-r from-mk-dark-purple to-mk-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title animate-on-scroll opacity-0">Ready to Transform Your Enterprise?</h2>
            <p className="section-description animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
              Contact us to explore how Multiplierskraft can empower your organization with tailored capability solutions.
            </p>
            <div className="mb-8 text-mk-caption animate-on-scroll opacity-0" style={{ animationDelay: '400ms' }}>
              <p>Phone: +91-9611058522</p>
              <p>Email: info@multiplierskraft.com</p>
              <p>Address: Bangalore, India</p>
              <p>Website: www.multiplierskraft.com</p>
            </div>
            <Link to="/contact" className="btn-primary inline-flex items-center animate-on-scroll opacity-0" style={{ animationDelay: '600ms' }}>
              Get in Touch
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterpriseSolutions;
