/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                mont: ["var(--font-mont)", ...fontFamily.sans],
            },

            colors: {
                dark: "#254474",
                light: "#E2F9FE",
                primary: "#FC0200",
                primaryDark: "#FF9E50",
            },
            animation: {
                "spin-slow": "spin 10s linear infinite",
            },
            backgroundImage: {
                circularLight: "repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, #E2F9FE 5px, #E2F9FE 100px);",
                circularDark: "repeating-radial-gradient(rgba(255, 255, 255, 0.5) 2px, #254474 8px, #254474 100px);",
                circularLightLg: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#E2F9FE 5px,#E2F9FE 80px)",
                circularDarkLg: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#254474 8px,#254474 80px)",
                circularLightMd: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#E2F9FE 5px,#E2F9FE 60px)",
                circularDarkMd: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#254474 6px,#254474 60px)",
                circularLightSm: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#E2F9FE 5px,#E2F9FE 40px)",
                circularDarkSm: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#254474 4px,#254474 40px)",
            }
        },
        screens: {
            "2xl": {max: "1535px"},
            // => @media(max-width: 1535px)

            xl: {max: "1279px"},
            // => @media(max-width: 1279px)

            lg: {max: "1023px"},
            // => @media(max-width: 1023px)

            md: {max: "767px"},
            // => @media(max-width: 767px)

            sm: {max: "639px"},
            // => @media(max-width: 639px)

            xs: {max: "479px"},
            // => @media(max-width: 479)
        },
        
    },
    plugins: [],
};
