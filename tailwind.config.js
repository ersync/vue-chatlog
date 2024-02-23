/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                lightRight: '2px 2px 5px rgba(0, 0, 0, 0.1)',
                lightLeft: '-2px 2px 5px rgba(0, 0, 0, 0.1)',
            },
            fontFamily: {
                MadeTommyRegular: "MadeTommy-Medium",
                GothamrndMedium: "GothamRnd-Medium",
            }
        },
    },
    plugins: [],
}

