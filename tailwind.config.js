/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,tsx}",
    ],
    theme: {
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

