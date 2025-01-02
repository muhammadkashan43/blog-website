import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			white: '#FFFFFF',
  			gray: {
  				light: '#666666',
  				DEFAULT: '#999999',
  				dark: '#333333'
  			},
  			purple: '#7C4EE4',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			raleway: [
  				'Raleway',
  				'sans-serif'
  			],
  			roboto: [
  				'Roboto',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			'heading-64': [
  				'64px',
  				{
  					lineHeight: '1.2'
  				}
  			],
  			'heading-52': [
  				'52px',
  				{
  					lineHeight: '1.3'
  				}
  			],
  			'heading-48': [
  				'48px',
  				{
  					lineHeight: '1.4'
  				}
  			],
  			'heading-32': [
  				'32px',
  				{
  					lineHeight: '1.5'
  				}
  			],
  			'heading-26': [
  				'26px',
  				{
  					lineHeight: '1.6'
  				}
  			],
  			'heading-24': [
  				'24px',
  				{
  					lineHeight: '1.6'
  				}
  			],
  			'big-para': [
  				'18px',
  				{
  					lineHeight: '24px'
  				}
  			],
  			'short-para': [
  				'16px',
  				{
  					lineHeight: '24px'
  				}
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
} satisfies Config;
