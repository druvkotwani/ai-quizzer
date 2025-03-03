import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		animation: {
  			'wave-pulse': 'wave-pulse 4s ease-in-out infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			'wave-pulse': {
  				'0%, 100%': {
  					opacity: '0.4'
  				},
  				'50%': {
  					opacity: '0.7'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		colors: {
  			main: '#88aaee',
  			overlay: 'rgba(0,0,0,0.8)',
  			bg: '#dfe5f2',
  			text: '#000',
  			border: '#000',
  			darkBg: '#272933',
  			darkText: '#eeefe9',
  			darkBorder: '#000',
  			secondaryBlack: '#212121'
  		},
  		borderRadius: {
  			base: '5px'
  		},
  		boxShadow: {
  			light: '4px 4px 0px 0px #000',
  			dark: '4px 4px 0px 0px #000'
  		},
  		translate: {
  			boxShadowX: '4px',
  			boxShadowY: '4px',
  			reverseBoxShadowX: '-4px',
  			reverseBoxShadowY: '-4px'
  		},
  		fontWeight: {
  			base: '500',
  			heading: '700'
  		},
  		utilities: {
  			'.no-scrollbar': {
  				'&::-webkit-scrollbar': {
  					display: 'none'
  				},
  				'-ms-overflow-style': 'none',
  				'scrollbar-width': 'none'
  			}
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
