import React from 'react'
import { MixpanelApi } from '../api/mixpanel-api';
import { GaApi } from '../api/ga-api';
import YouTubeEmbed from '../components/YouTubeEmbed';

export default () => {
  GaApi.reportPageView();
  MixpanelApi.reportPageView('Videos');
  return (
    <div>
     <YouTubeEmbed videoId="0_aQnjeGj10" videoTitle="Places" />
    </div>
  )
}
