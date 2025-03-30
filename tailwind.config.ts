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
        primary: "#e0ff4f", // Your bright green/yellow color
        secondary: "#00272b", // Your dark teal color
      },
      backgroundColor: {
        'primary': "#e0ff4f",
        'secondary': "#00272b",
      },
      textColor: {
        'primary': "#e0ff4f",
        'secondary': "#00272b",
      },
    },
  },
  plugins: [],
};

export default config; 