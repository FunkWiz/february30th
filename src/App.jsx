import React from 'react'
import { Router } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
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
    color:${colors.beige};
  }
`

const MainContent = styled.div`
padding:15px;
`

const App = () => (
  <Router>
    <div>
      <MainContent>
        <Routes />
      </MainContent>
    </div>
  </Router>
)

export default hot(module)(App)
