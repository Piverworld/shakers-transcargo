/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#000066',
				secondary: '#FF6F3D',
			},
			fontFamily: {
				'dm-sans': ['DM Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
