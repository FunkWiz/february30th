import React from 'react'
import { MixpanelApi } from '../api/mixpanel-api';
import { GaApi } from '../api/ga-api';
import Intro from '../components/Intro';

export default () => {
  GaApi.reportPageView();
  MixpanelApi.reportPageView('Home');
  return (
    <div>
      <Intro />
    </div>
  )
}
