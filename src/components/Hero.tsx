import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!titleRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX - innerWidth / 2) / 50;
      const moveY = (clientY - innerHeight / 2) / 50;
      
      titleRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden px-4 md:px-6">
      <div className="absolute top-0 right-0 w-full h-full bg-secondary opacity-80 -z-10" />
      <div className="absolute top-0 right-0 w-full h-full -z-20">
        {/* Replace with your own image later */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-secondary/80 to-secondary" />
      </div>
      
      <div className="container mx-auto mt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-light text-primary mb-4">Hello, I'm</h2>
            <h1 
              ref={titleRef} 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-transform duration-200 ease-out"
            >
              <span className="text-white">J. Conrad</span> <span className="text-primary">Hulsey</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-md text-gray-200">
              A frontend developer passionate about creating beautiful, interactive digital experiences with attention to detail.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#work" 
                className="px-6 py-3 bg-primary text-secondary font-medium rounded-md hover:bg-opacity-90 transition-all"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-secondary transition-all"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            {/* You can add an illustration or image here */}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white flex flex-col items-center">
          <span className="mb-2 text-sm">Scroll Down</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </a>
      </div>
    </section>
  );
} 