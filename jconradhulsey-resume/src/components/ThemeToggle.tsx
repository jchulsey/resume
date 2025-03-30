"use client";

import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isInverted, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle focus:outline-none"
      data-inverted={isInverted}
      aria-label={isInverted ? "Switch to default theme" : "Switch to inverted theme"}
      title={isInverted ? "Switch to default theme" : "Switch to inverted theme"}
    >
      <span className="theme-toggle-slider" />
    </button>
  );
} 