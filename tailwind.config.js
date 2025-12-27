/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                    950: '#172554',
                },
                slate: {
                    950: '#020617',
                }
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            },
            boxShadow: {
                'premium': '0 20px 40px -15px rgba(0, 0, 0, 0.1), 0 10px 10px -10px rgba(0, 0, 0, 0.05)',
                'glow': '0 0 20px rgba(37, 99, 235, 0.3)',
            }
        },
    },
    plugins: [],
}
