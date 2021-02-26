import React from 'react'
import { MixpanelApi } from '../api/mixpanel-api';
import { GaApi } from '../api/ga-api';
import Intro from '../components/Intro';
import styled from 'styled-components';

const Disclaimer = styled.h3`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  line-height: 1.2;
  margin-bottom: 20px;
`;

export default () => {
  GaApi.reportPageView();
  MixpanelApi.reportPageView('Home');
  return (
    <div>
      <Disclaimer>
        TODAY - OUT NOW! CHECK THE VIDEO BELOW
       </Disclaimer>
      <Intro />
    </div>
  )
}
