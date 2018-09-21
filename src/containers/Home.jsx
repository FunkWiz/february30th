import React from 'react'
import { withSiteData } from 'react-static'
import ComingSoon from '../components/ComingSoon';
import { MixpanelApi } from '../api/mixpanel-api';

export default withSiteData(() => {
  MixpanelApi.reportPageView('Home');
  return (
    <div>
      <ComingSoon />
    </div>
  )
})
