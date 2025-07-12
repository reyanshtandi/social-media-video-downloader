/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
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
        border: "var(--color-border)", /* slate-200 / slate-700 */
        input: "var(--color-input)", /* white / slate-800 */
        ring: "var(--color-ring)", /* blue-600 / blue-500 */
        background: "var(--color-background)", /* white / slate-900 */
        foreground: "var(--color-foreground)", /* slate-900 / slate-100 */
        primary: {
          DEFAULT: "var(--color-primary)", /* blue-600 / blue-500 */
          foreground: "var(--color-primary-foreground)", /* white / slate-100 */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* slate-500 / slate-600 */
          foreground: "var(--color-secondary-foreground)", /* white / slate-100 */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-600 / red-500 */
          foreground: "var(--color-destructive-foreground)", /* white / slate-100 */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* slate-50 / slate-800 */
          foreground: "var(--color-muted-foreground)", /* slate-600 / slate-400 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* slate-50 / slate-800 */
          foreground: "var(--color-accent-foreground)", /* slate-900 / slate-100 */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white / slate-800 */
          foreground: "var(--color-popover-foreground)", /* slate-900 / slate-100 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* white / slate-800 */
          foreground: "var(--color-card-foreground)", /* slate-900 / slate-100 */
        },
        success: {
          DEFAULT: "var(--color-success)", /* emerald-500 */
          foreground: "var(--color-success-foreground)", /* white / slate-100 */
          deep: "var(--color-success-deep)", /* emerald-600 */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* amber-600 / amber-500 */
          foreground: "var(--color-warning-foreground)", /* white / slate-900 */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-600 / red-500 */
          foreground: "var(--color-error-foreground)", /* white / slate-100 */
        },
        surface: "var(--color-surface)", /* slate-50 / slate-800 */
        "text-primary": "var(--color-text-primary)", /* slate-900 / slate-100 */
        "text-secondary": "var(--color-text-secondary)", /* slate-600 / slate-400 */
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'elevated': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "shimmer": "shimmer 2s linear infinite",
        "slide-in": "slideIn 0.3s ease-out",
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
        "shimmer": {
          from: { backgroundPosition: "-200px 0" },
          to: { backgroundPosition: "calc(200px + 100%) 0" },
        },
        "slideIn": {
          from: { 
            transform: "translateY(-100%)",
            opacity: "0"
          },
          to: { 
            transform: "translateY(0)",
            opacity: "1"
          },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      minHeight: {
        'touch': '44px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
        '300': '300ms',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}