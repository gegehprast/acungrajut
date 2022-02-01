module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            dropShadow: {
                'main-sm': '-1px 1px 1px rgba(240, 96, 149, 0.45)',
                'main': '-1px 2px 2px rgba(240, 96, 149, 0.45)',
                'main-md': '-1px 4px 3px rgba(240, 96, 149, 0.45)',
                'main-lg': '-1px 10px 8px rgba(240, 96, 149, 0.45)',
                'main-xl': '-1px 20px 13px rgba(240, 96, 149, 0.45)',
                'main-2xl': '-1px 25px 25px rgba(240, 96, 149, 0.45)',
            },

            colors: {
                main: '#F06095',
                secondary: '#FFB1CE',
            }
        },

        screens: {
            '411px': '411px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '1366px': '1366px',
            '2xl': '1536px',
        },

        fontFamily: {
            nav: [
                'Recursive',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                '"Noto Sans"',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
        }
    },
    plugins: [],
}
