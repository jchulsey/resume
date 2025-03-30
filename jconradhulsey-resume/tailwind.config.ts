import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        "on-primary": "var(--text-on-primary)",
        "on-secondary": "var(--text-on-secondary)",
        gray: {
          300: "#d4d4d8", // Brighter version of gray-300
          400: "#c1c1c5", // Brighter version of gray-400
          700: "#3f3f46", // Brighter version of gray-700
          800: "#27272a", // Brighter version of gray-800
        }
      },
      backgroundColor: {
        'primary': "#fe7f2d",
        'secondary': "#233d4d",
      },
      textColor: {
        'primary': "#fe7f2d",
        'secondary': "#233d4d",
      },
    },
  },
  plugins: [],
};

export default config; 