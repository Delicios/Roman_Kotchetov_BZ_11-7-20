import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  primary: ['#0074D9', '#A8DAFF'],
  success: ['#71F79F'],
  white: ['#fff'],
  grayscale: [
    '#333',
    '#bdbdbd',
    '#eeeeee',
    '#ffffff',
  ],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  primary: 'Roboto, Helvetica Neue, Helvetica, sans-serif'
}

theme.sizes = {
  maxWidth: '1100px',
}

export default theme
