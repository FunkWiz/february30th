import React from 'react'
import ReactDOM from 'react-dom'

// Your top level component
import App from './App'
import { MixpanelApi } from './api/mixpanel-api';
import { GaApi } from './api/ga-api';

//init services
MixpanelApi.init();
GaApi.init();

// Export your top level component as JSX (for static rendering)
export default App

MixpanelApi.init();

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  // Render!
  render(App)
}
