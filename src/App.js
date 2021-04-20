import { BrowserRouter } from 'react-router-dom'
import {
  StylesProvider,
  ThemeProvider,
  jssPreset
} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { create } from 'jss'
import rtl from 'jss-rtl'
import theme from './theme/theme'
import { getDirection } from './localization'
import IndexScreen from './screens/index'

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

function App() {
  return getDirection === 'ltr' ? (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <CssBaseline />
        <BrowserRouter>
          <IndexScreen />
        </BrowserRouter>
      </StylesProvider>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
        <BrowserRouter>
          <IndexScreen />
        </BrowserRouter>
      </StylesProvider>
    </ThemeProvider>
  )
}

export default App
