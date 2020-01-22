import React from 'react'
import styled, { keyframes } from 'styled-components'
import { colors } from '../styles/variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const shakeAnimation = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
    color:${colors.white};
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`

const SocialIconLink = styled.a`
display:inline-block;
margin: 0 10px;
vertical-align:middle;
`
const SocialIcon = styled(FontAwesomeIcon)`
color:${colors.white};
font-size:44px;
animation-name: ${shakeAnimation};
animation-timing-function:cubic-bezier(.36,.07,.19,.97);
animation-duration:1.2s;
backface-visibility: hidden;
perspective: 1000px;
transform:translate3d(0, 0, 0) scale(.9);
transition: transform .2s;
&:hover {
    transform:translate3d(0, 0, 0) scale(1);
}
`

const DynamicSocialIcon = styled(SocialIcon)`
animation-delay: ${props => props.delay || 1}s;
`

export default ({ href, icon, reportMessage, animationDelay, color }) => {
    const _onClick = () => {
        MixpanelApi.reportClick(reportMessage);
    }

    return (
        <SocialIconLink target="_blank" href={href} >
            <DynamicSocialIcon
                icon={icon}
                onClick={_onClick}
                delay={animationDelay}
                style={{
                  color: color
                }}
            />
        </SocialIconLink>
    )
}