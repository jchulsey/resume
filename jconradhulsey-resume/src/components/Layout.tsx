"use client";

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from '../context/ThemeContext';

const montserrat = Montserrat({ subsets: ['latin'] });

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      <div className={`${montserrat.className} min-h-screen bg-secondary text-white flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
} 