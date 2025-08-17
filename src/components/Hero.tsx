import React from 'react';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const sentences = [
    'Accurate in solutions.',
    'Credible in partnerships.',
    'Efficient in services.'
  ];

  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex];
    
    if (isTyping) {
      if (currentText.length < currentSentence.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentSentence.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
        setIsTyping(true);
      }
    }
  }, [currentText, isTyping, currentSentenceIndex, sentences]);

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center">
      <div className="w-full h-full flex">
        {/* Left Content - 60% */}
        <div className="w-full lg:w-3/5 bg-navy-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 lg:pt-0">
          <div className="max-w-2xl mx-auto text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 lg:mb-8 animate-fade-in-up">
              Leading Financial
              <span className="text-gold-400 block">Excellence</span>
            </h1>
            
            {/* Typing Animation */}
            <div className="text-xl sm:text-2xl lg:text-4xl font-semibold text-white mb-6 lg:mb-8 h-16 lg:h-20 flex items-center justify-center lg:justify-start animate-fade-in-up animation-delay-200">
              <span>We are </span>
              <span className="text-gold-400 ml-2">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 lg:mb-8 animate-fade-in-up animation-delay-400">
              From managing day-to-day finances to navigating regulatory complexities, we deliver 
              end-to-end support that empowers businesses to thrive. Our solutions are designed to 
              simplify operations, strengthen compliance, and create a solid foundation for lasting growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 lg:mb-0 animate-fade-in-up animation-delay-600">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-navy-900 bg-gold-400 hover:bg-gold-500 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-navy-900 transition-all duration-200"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Right Image - 40% */}
        <div className="hidden lg:block lg:w-2/5 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg)'
            }}
          >
            <div className="absolute inset-0 bg-navy-900 bg-opacity-30"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;