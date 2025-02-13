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
			textShadow: { custom: "0 0 20px #000" },
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "#93C740",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				"work-sans": ["var(--font-work-sans)"],
			},
		},
	},
	plugins: [
    require("tailwindcss-animate"), 
    require("tailwindcss-textshadow"), 
    require('@tailwindcss/typography')
],
} satisfies Config;

// import type { Config } from "tailwindcss";

// export default {
// 	darkMode: ["class"],
// 	content: [
// 		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
// 		"./components/**/*.{js,ts,jsx,tsx,mdx}",
// 		"./app/**/*.{js,ts,jsx,tsx,mdx}",
// 	],
// 	theme: {
// 		extend: {
// 			colors: {
// 				primary: "#93C740",
// 				secondary: "#E58824",
// 				accent: "#231F20",
// 				neutral: {
// 					100: "#F3F4F6",
// 					200: "#E5E7EB",
// 					300: "#D1D5DB",
// 					400: "#9CA3AF",
// 					500: "#6B7280",
// 					600: "#4B5563",
// 					700: "#374151",
// 					800: "#1F2937",
// 					900: "#111827",
// 				},
// 			},
// 			borderRadius: {
// 				lg: "var(--radius)",
// 				md: "calc(var(--radius) - 2px)",
// 				sm: "calc(var(--radius) - 4px)",
// 			},
// 		},
// 	},
// 	plugins: [require("tailwindcss-animate")],
// } satisfies Config;
