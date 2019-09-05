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
  bodyFontFamily: ['Source Sans Pro', 'Georgia', 'serif'],
  bodyWeight: 400,
  boldWeight: 700,
  bodyGray: 0.2,
  bodyGrayHue: 'warm',

  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
  }),
})

export default typography
