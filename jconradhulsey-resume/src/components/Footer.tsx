"use client";

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 md:px-6 bg-secondary border-t border-gray-500">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white opacity-75">
              © {currentYear} J. Conrad Hulsey. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white opacity-75 hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-white opacity-75 hover:text-primary transition-colors">About</a>
            <a href="#work" className="text-white opacity-75 hover:text-primary transition-colors">Work</a>
            <a href="#contact" className="text-white opacity-75 hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 