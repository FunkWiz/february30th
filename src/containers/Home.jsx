import React from 'react'
import ComingSoon from '../components/ComingSoon';
import { MixpanelApi } from '../api/mixpanel-api';
import { GaApi } from '../api/ga-api';

export default () => {
  GaApi.reportPageView();
  MixpanelApi.reportPageView('Home');
  return (
    <div>
      <ComingSoon />
    </div>
  )
}
