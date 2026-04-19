/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* 🎨 COLORS */
      colors: {
        neonBlue: "#00f0ff",
        neonPink: "#ff00ff",
        neonGreen: "#39ff14",
        darkBg: "#0a0a0a",

        /* 💎 extra useful shades */
        glassWhite: "rgba(255,255,255,0.05)",
        glassBorder: "rgba(255,255,255,0.1)",
      },

      /* 🌈 GRADIENTS */
      backgroundImage: {
        neonGradient:
          "linear-gradient(90deg, #00f0ff, #ff00ff, #39ff14)",
      },

      /* 💡 SHADOWS */
      boxShadow: {
        neon: "0 0 10px #00f0ff, 0 0 20px #00f0ff",
        neonStrong: "0 0 20px #00f0ff, 0 0 40px #00f0ff",
      },

      /* 🧊 BACKDROP BLUR (glass effect) */
      backdropBlur: {
        xs: "2px",
      },

      /* ⚡ ANIMATIONS */
      keyframes: {
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 10px #00f0ff" },
          "50%": { boxShadow: "0 0 25px #00f0ff" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },

      animation: {
        glow: "glowPulse 2s infinite ease-in-out",
        float: "float 3s ease-in-out infinite",
      },

      /* 📏 CONTAINER */
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
};