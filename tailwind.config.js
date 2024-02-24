/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                lightRight: '2px 1px 4px rgba(0, 0, 0, 0.1)',
                lightLeft: '-2px 1px 4px rgba(0, 0, 0, 0.1)',
            },
            fontFamily: {
                MadeTommyRegular: "MadeTommy-Medium",
                GothamrndMedium: "GothamRnd-Medium",
                LonieLight: "Lonie-Light",
                LonieRegular: "Lonie-Regular",
                LonieBold: "Lonie-Bold",
            }
        },
    },
    plugins: [],
}

