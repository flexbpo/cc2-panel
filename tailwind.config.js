/** @type {import('tailwindcss').Config} */
const {createThemes} = require("tw-colors");
module.exports = {
	darkMode: 'class',
	content: [
		"./src/**/*.{js,jsx,mdx}"
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			transitionDuration: {
				DEFAULT: '300ms'
			},
			fontFamily: {
				circularStd: ['var(--font-circular-std)'],
				ccIcons: ['var(--font-cc-icons)']
			},
			gridTemplateRows: {
				'0': '0fr',
				'auto': '1fr',
			},
			animation: {
				"shake-horizontal": "shake-horizontal 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955)   both"
			},
			keyframes: {
				"shake-horizontal": {
					"0%,to": {transform: "translateX(0)"},
					"10%,30%,50%,70%": {transform: "translateX(-10px)"},
					"20%,40%,60%": {transform: "translateX(10px)"},
					"80%": {transform: "translateX(8px)"},
					"90%": {transform: "translateX(-8px)"}
				}
			},
			colors: {
				slate: {
					50: "#F5F7FB"
				},
				blue: {
					950: "var(--blue-950)"
				},
				primary: {
					400: "var(--primary-400)",
					450: "var(--primary-450)",
					500: "var(--primary-500)",
					550: "var(--primary-550)",
				},
				gray: {
					800: "#2A2E34"
				},
				secondary: {
					400: "var(--secondary-400)",
					700: "var(--secondary-700)",
					750: "var(--secondary-750)",
					800: "var(--secondary-800)"
				}
			}
		},
	},
	plugins: [
		createThemes(({light,dark}) =>({
			custom: light({}),
			'custom-dark': dark({})
		}))
	],
};
