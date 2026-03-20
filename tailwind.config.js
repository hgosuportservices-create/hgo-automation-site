/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0A0A14",
        cyan: "#00D1FF",
        blue: "#0066FF",
        ghost: "#F0EFF4",
        graphite: "#18181B",
      },
      fontFamily: {
        sans: ["Sora", "sans-serif"],
        serif: ["Instrument Serif", "serif"],
        mono: ["Fira Code", "monospace"],
      },
      borderRadius: {
        'premium': '2.5rem',
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        marquee: "marquee var(--duration) linear infinite",
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
}
