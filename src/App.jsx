import React from 'react'
import { Router } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import resetCss from 'styled-reset'
//
import Routes from 'react-static-routes'
import { colors } from './styles/variables'
import Header from './components/Header';

injectGlobal`
 ${resetCss}
  body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    background: ${colors.black};
    color:${colors.white};
  }
`

const MainContent = styled.div`
padding:15px;
`


const App = () => (
  <div>
    <Router>
      <div>
        <Header />
        <MainContent>
          <Routes />
        </MainContent>
      </div>
    </Router>
  </div>
)

export default hot(module)(App)
