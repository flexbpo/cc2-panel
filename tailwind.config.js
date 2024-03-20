/** @type {import('tailwindcss').Config} */
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
			fontFamily: {
				circularStd: ['var(--font-circular-std)']
			},
			colors: {
				blue: {
					400: "#2dc3ff",
					500: "#008AD3"
				},
				gray: {
					800: "#2A2E34"
				}
			}
		},
	},
	plugins: [],
};
