// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import '@fontsource/lato'
import '@fontsource/montserrat'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Lato', sans-serif`,
  },
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme