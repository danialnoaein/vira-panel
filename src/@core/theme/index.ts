// Next Imports
// import { Vazirmatn } from 'next/font/google'
import localFont from 'next/font/local'

// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'
import type { SystemMode, Skin } from '@core/types'

// Theme Options Imports
import overrides from './overrides'
import colorSchemes from './colorSchemes'
import spacing from './spacing'
import shadows from './shadows'
import customShadows from './customShadows'
import typography from './typography'

// const vazirmatn = Vazirmatn({ subsets: ['arabic'] })

const estedadLocal = localFont({
  src: [
    {
      path: '../../../public/fonts/Estedad-FD-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/Estedad-FD-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/Estedad-FD-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/Estedad-FD-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/Estedad-FD-ExtraBold.woff2',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/Estedad-FD-Black.woff2',
      weight: '900',
      style: 'normal'
    }
  ],
  display: 'swap'
})

const theme = (settings: Settings, mode: SystemMode, direction: Theme['direction']): Theme => {
  return {
    direction,
    components: overrides(settings.skin as Skin),
    colorSchemes: colorSchemes(settings.skin as Skin),
    ...spacing,
    shape: {
      borderRadius: 6,
      customBorderRadius: {
        xs: 2,
        sm: 4,
        md: 6,
        lg: 8,
        xl: 10
      }
    },
    shadows: shadows(mode),
    typography: typography(estedadLocal.style.fontFamily),
    customShadows: customShadows(mode),
    mainColorChannels: {
      light: '47 43 61',
      dark: '225 222 245',
      lightShadow: '47 43 61',
      darkShadow: '19 17 32'
    }
  } as Theme
}

export default theme
