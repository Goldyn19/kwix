import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Instrument Sans', 'sans-serif'],
      },
      colors: {
        'custom-black': '#333333',
        'light-black': '#737373',
        'dark-grey': '#D9D9D9',
        'light-grey': '#FAFAFA',
        'metallic-gold': '#DEB841',
        'hunyadi-yellow': '#DE9E36',
        'coyote':'#ECE5D5',

      },
      fontSize: {
        'heading-m': ['32px', {
          lineHeight: '48px', // 150% of 32px
          fontWeight: '700', // Bold
        }],
        'heading-s': ['16px', {
          lineHeight: '48px', // 150% of 32px
          fontWeight: '700', // Bold
        }],
        'body-m': ['16px', {
          lineHeight: '48px', // 150% of 32px
          fontWeight: '400', // Bold
        }],
        'body-s': ['12px', {
          lineHeight: '48px', // 150% of 32px
          fontWeight: '400', // Bold
        }],
      },
    },
  },
  plugins: [],
};
export default config;
