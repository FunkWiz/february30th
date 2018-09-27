import React from 'react'
import { Router } from 'react-static'
import { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import resetCss from 'styled-reset'
//
import Routes from 'react-static-routes'
import { colors } from './styles/variables'

injectGlobal`
 ${resetCss}
  body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    background: ${colors.brown};  /* fallback for old browsers */
    background: linear-gradient(to right, ${colors.brown}, #221e1b);

  }
`
const App = () => (
  <Router>
    <div>
      <Routes />
    </div>
  </Router>
)

export default hot(module)(App)
