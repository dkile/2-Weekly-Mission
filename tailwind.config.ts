import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		gridTemplateColumns: {
			"fill-max-34": "repeat(auto-fit, minmax(10rem, 34rem))",
		},
		extend: {
			screens: {
				tablet: "768px",
				desktop: "1200px",
			},
			spacing: {},
			colors: {
				"u-primary": "#6d6afe",
				"u-purple-70": "#8F00FF",
				"u-red": "#ff5b56",
				"u-skyblue": "#f0f6ff",
				"u-black": "#111322",
				"u-white": "#ffffff",
				"u-gray-100": "#3e3e43",
				"u-gray-60": "#9fa6b2",
				"u-gray-20": "#ccd5e3",
				"u-gray-10": "#e7effb",
			},
			backgroundImage: {
				"gradient-purple-skyblue":
					"linear-gradient(135deg,#6d6afe 0%,#6ae3fe 100%)",
				"gradient-purple-orange":
					"linear-gradient(119deg, #6d6afe 0%, #ff9f9f 100%)",
				"gradient-orange-blue":
					"linear-gradient(117deg,#fe8a8a 2.29%,#a4ceff 100%)",
				"gradient-blue-yellow":
					"linear-gradient(304deg, #6fbaff 0%, #ffd88b 100%)",
				"gradient-blue-gray":
					"linear-gradient(133deg, #2945c7 0%, #dbe1f8 100%)",
				"gradient-red-blue":
					"linear-gradient(310deg, #fe578f 0%, #68e8f9 100%)",
			},
		},
	},
	plugins: [],
};
export default config;
