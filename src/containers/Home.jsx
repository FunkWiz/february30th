import React from 'react'
import { withSiteData } from 'react-static'
import { Head } from 'react-static'
import IntroSection from '../components/IntroSection';

export default withSiteData(() => (
  <div>
    <IntroSection />
  </div>
))
