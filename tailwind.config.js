const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    mode: "jit",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    safelist: [
        {pattern: /col-(start|end)-.+/},
        {pattern: /gradient-.+/},
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                trueGray: colors.neutral,
            },
            boxShadow: {
                'fade-in-black': '0 20px 20px 1px rgb(23 23 23 / var(--tw-bg-opacity));',
                'fade-in-white': '0 20px 20px 1px white',
            }
        },
        fontFamily: {
            sans: ["Inter", ...defaultTheme.fontFamily.sans],
            stock: [defaultTheme.fontFamily.sans],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        function ({addBase, theme}) {
            function extractColorVars(colorObj, colorGroup = '') {
                return Object.keys(colorObj).reduce((vars, colorKey) => {
                    const value = colorObj[colorKey];

                    const newVars =
                        typeof value === 'string'
                            ? {[`--color${colorGroup}-${colorKey}`]: value}
                            : extractColorVars(value, `-${colorKey}`);

                    return {...vars, ...newVars};
                }, {});
            }

            addBase({
                ':root': extractColorVars(theme('colors')),
            });
        },
    ],
};
