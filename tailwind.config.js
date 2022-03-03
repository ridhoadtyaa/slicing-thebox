module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		fontFamily: {
			sans: ['Work Sans', 'sans-serif'],
		},
		extend: {
			backgroundImage: {
				hero: "linear-gradient(90deg, rgba(255, 255, 255, 0.9) 16.58%, rgba(255, 255, 255, 0) 72.38%), url('/src/assets/img/hero.jpg')",
				kitchen: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/src/assets/img/kitchen.jpg")',
			},
		},
	},
	plugins: [],
};
