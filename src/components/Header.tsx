import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-secondary/90 backdrop-blur-md' : 'py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="text-primary text-2xl font-bold hover:opacity-80 transition-opacity">
          J.Conrad
        </Link>
        
        <nav className="hidden md:flex gap-8">
          {['About', 'Work', 'Experience', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`/#${item.toLowerCase()}`}
              className="text-white hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
        
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
} 