/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,tsx}",
    ],
    theme: {
        screens: {
            'xs': {'raw': '(min-width: 480px)'},
            'sm': {'raw': '(min-width: 640px)'},
            'md': {'raw': '(min-width: 768px)'},
            'lg': {'raw': '(min-width: 1024px)'},
            'fhd-xs': {'raw': '(min-height: 769px) and (min-width: 480px)'},
            'fhd-sm': {'raw': '(min-height: 769px) and (min-width: 640px)'},
            'fhd-md': {'raw': '(min-height: 769px) and (min-width: 768px)'},
            'fhd-lg': {'raw': '(min-height: 769px) and (min-width: 1024px)'},
            'fhd-xl': {'raw': '(min-height: 769px) and (min-width: 1280px)'},

        },
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    lg: "0.625rem"
                }
            },
            boxShadow: {
                lightRight: '2px 1px 4px rgba(0, 0, 0, 0.1)',
                lightLeft: '-2px 1px 4px rgba(0, 0, 0, 0.1)',
            },
            fontFamily: {
                MadeTommyRegular: "MadeTommy-Medium",
                GothamRndMedium: "GothamRnd-Medium",
                LonieLight: "Lonie-Light",
                LonieRegular: "Lonie-Regular",
                LonieBold: "Lonie-Bold",
                LunasimaRegular: "Lunasima-Regular",
            },
            scale: {
                '-100': '-1',
            }
        }
    },
    plugins: [],
}

