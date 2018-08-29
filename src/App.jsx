import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import resetCss from 'styled-reset'
//
import Routes from 'react-static-routes'

injectGlobal`
 ${resetCss}
  body {
    font-family: Arial, sans-serif;
    font-size: 16px;
  }
`

const AppContainer = styled.div`

`

const App = () => (
  <Router>
    <AppContainer>
      <Routes />
    </AppContainer>
  </Router>
)

export default hot(module)(App)
