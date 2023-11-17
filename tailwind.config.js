/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["bumblebee"],
  },
  theme: {
    extend: {
      fontFamily: {
        cinzel: "'Cinzel', serif",
        raleway: "'Raleway', sans-serif",
        inter: "'Inter', sans-serif",
      },
      backgroundImage: {
        "home-about": "url('/home/chef-service.jpg')",
        "home-featured": "url('/home/featured.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
