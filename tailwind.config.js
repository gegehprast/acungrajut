module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            dropShadow: {
                'main': '-1px 2px 2px rgba(240, 96, 149, 0.45)',
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
