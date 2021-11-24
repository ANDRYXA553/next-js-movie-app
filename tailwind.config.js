module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                "3xl": "2000px"
            },
            fontWeight:{
                "uber-bold": "1000"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('tailwind-scrollbar-hide')],
}
