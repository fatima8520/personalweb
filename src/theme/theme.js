import { createMuiTheme } from '@material-ui/core/styles'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import palette from './palette'
import { getDirection, getFont } from '../localization'

const breakpoints = createBreakpoints({})
const theme = createMuiTheme({
  palette,
  direction: getDirection(),
  spacing: 2.5,

  typography: {
    useNextVariants: true,
    fontFamily: getFont(),
    fontWeightRegular: 500,
    fontWeightMedium: 700,
    fontSize: 16,
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    fontWeight: 600,
    lineHeight: 1,
    h6: {
      fontSize: getDirection === 'rtl' ? 16 : 18,
      fontWeight: 600,
      lineHeight: '2.7rem',
      fontFamily: getFont(),
      color: '#fff',
      [breakpoints.down('xs')]: {
        fontSize: getDirection() === 'rtl' ? 14 : 16
      }
    },
    h5: {
      fontSize: getDirection === 'rtl' ? 21 : 23,
      fontWeight: 600,
      lineHeight: '2.14rem',
      fontFamily: getFont(),
      color: '#fff',
      [breakpoints.down('xs')]: {
        fontSize: getDirection() === 'rtl' ? 20 : 18
      }
    },
    h4: {
      fontSize: getDirection === 'rtl' ? 26 : 28,
      fontWeight: 600,
      color: '#fff',
      lineHeight: '2.43rem',
      fontFamily: getFont(),
      [breakpoints.down('xs')]: {
        fontSize: getDirection() === 'rtl' ? 22 : 24
      }
    },
    h3: {
      fontSize: getDirection === 'rtl' ? 30 : 32,
      fontWeight: 600,
      lineHeight: '1.857rem',
      textAlign: 'left',
      color: '#fff',
      fontFamily: getFont(),
      [breakpoints.down('xs')]: {
        fontSize: getDirection() === 'rtl' ? 28 : 30
      }
    },
    h2: {
      fontSize: getDirection === 'rtl' ? 38 : 40,
      fontWeight: 700,
      lineHeight: '3.2857rem',
      color: '#fff',
      fontFamily: getFont(),
      [breakpoints.down('xs')]: {
        fontSize: getDirection() === 'rtl' ? 32 : 34
      }
    },
    h1: {
      fontSize: getDirection === 'rtl' ? 50 : 52,
      fontWeight: 700,
      lineHeight: '4rem',
      fontFamily: getFont(),
      color: '#fff',
      [breakpoints.down('xs')]: {
        fontSize: getDirection() === 'rtl' ? 40 : 42
      }
    },
    body1: {
      fontSize: getDirection === 'rtl' ? 16 : 18,
      lineHeight: '1.8rem',
      fontWeight: 400,
      fontFamily: getFont(),
      textAlign: getDirection === 'rtl' ? 'justify' : 'left',
      [breakpoints.down('xs')]: {
        fontSize: getDirection() === 'rtl' ? 13 : 15
      }
    },
    body2: {
      fontSize: getDirection === 'rtl' ? 13 : 15,
      fontWeight: 600,
      color: '#a4acc4',
      letterSpacing: 1,
      textAlign: 'center',
      fontFamily: getFont(),
      [breakpoints.down('xs')]: {
        fontSize: getDirection() === 'rtl' ? 11 : 13
      }
    },
    subtitle1: {
      fontSize: getDirection === 'rtl' ? 18 : 20,
      lineHeight: '2rem',
      fontWeight: 400,
      marginTop: 15,
      fontFamily: getFont(),
      [breakpoints.down('xs')]: {
        fontSize: getDirection() === 'rtl' ? 15 : 17
      }
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: 600
    },
    button: {
      fontSize: getDirection === 'rtl' ? 12 : 14,
      fontWeight: 400,
      color: '#FFF',
      letterSpacing: 2,
      fontFamily: getFont(),
      [breakpoints.down('xs')]: {
        fontSize: getDirection() === 'rtl' ? 12 : 14
      }
    }
  }
})

export default theme
