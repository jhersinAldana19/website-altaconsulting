/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#243a80',
        /** Títulos de sección: mismo matiz corporativo que primary, más oscuro. */
        heading: '#161d52',
        accent: '#169bd5',
        surface: '#ffffff',
        /** Celeste muy claro (ex-superficie): tarjetas, bloques que no sean blanco puro. */
        surfaceTint: '#f5f9fc',
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        heading: ['Marcellus', 'Georgia', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        soft: '0 8px 24px rgba(6, 62, 91, 0.08)',
        /** Borde inferior del header: sombra oscura, corta y poco extensa. */
        header: '0 3px 8px rgba(0, 0, 0, 0.14)',
      },
      maxWidth: {
        content: '1200px',
      },
      /** Títulos de sección (Marcellus vía capa base en h1–h6). */
      fontSize: {
        section: ['27px', { lineHeight: '32.4px' }],
      },
    },
  },
  plugins: [],
}

