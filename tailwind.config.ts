
import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"
import animatePlugin from "tailwindcss-animate"

const config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        
        // Custom Colors
        'mk-dark': '#1A1A2E',
        'mk-dark-purple': '#4A4063',
        'mk-text-light': '#B0B0C0',
        'mk-text-off-white': '#E0E0E0',
        'mk-dark-card': '#2E2E3D',
        'mk-bg1': '#1A1A2E',
        'mk-stroke': '#D2D2D2',
        'mk-caption': '#6060AE',
        'brand-primary': '#FFC107',
        'brand-primary-hover': '#FFD54F',
        'brand-secondary': '#FFB300',
        'brand-secondary-hover': '#FFCA28',
        'func-info': '#2196F3',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '0.3' },
        },
        floatParticle: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(50px, 50px)' },
          '50%': { transform: 'translate(0, 100px)' },
          '75%': { transform: 'translate(-50px, 50px)' },
          '100%': { transform: 'translate(0, 0)' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "fade-in-fast": "fadeIn 0.3s ease-out forwards",
        "pulse-subtle": "pulseSlow 3s infinite",
        "float-particle": "floatParticle 15s infinite linear",
      },
    },
  },
  plugins: [animatePlugin],
} satisfies Config

export default config
