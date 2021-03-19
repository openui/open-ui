import Typography from 'typography'

const scale = 1 / 2

const typography = new Typography({
  includeNormalize: true,
  googleFonts: [
    { name: 'Cabin', styles: ['500'] },
    { name: 'Source Sans Pro', styles: ['400', '700'] },
  ],

  // Base
  baseFontSize: '16px',
  baseLineHeight: 3 * scale,
  scaleRatio: 4 * scale,
  blockMarginBottom: 1.5 * scale,

  // Headers
  headerFontFamily: ['Cabin', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  headerWeight: 500,
  headerGray: 0.1,
  headerGrayHue: 'warm',

  // Body
  bodyFontFamily: [
    'Source Sans Pro',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyWeight: 400,
  boldWeight: 700,
  bodyGray: 0.2,
  bodyGrayHue: 'warm',

  overrideThemeStyles: ({ rhythm }, options, styles) => {
    return {
      a: {
        color: '#007a3d',
        textDecoration: 'none',
      },

      blockquote: {
        padding: '1em',
        margin: `0 0 ${rhythm()} 0`,
        color: '#555',
        background: '#f6f6f6',
        borderLeft: '4px solid #ccc',
      },

      li: {
        marginBottom: rhythm(0.25),
      },

      code: {
        background: 'rgba(0, 0, 0, 0.05)',
        padding: '0 0.25em',
        borderRadius: '3px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
      },

      h1: {
        paddingBottom: rhythm(0.25),
        marginBottom: rhythm(1.5),
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
      },

      h2: {
        marginTop: rhythm(1),
        marginBottom: rhythm(0.5),
      },
    }
  },
})

export default typography
