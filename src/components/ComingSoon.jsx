import React from 'react'
import styled, { keyframes } from 'styled-components'
import { colors } from '../styles/variables'
import roundLogo from '../assets/round_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { MixpanelApi } from '../api/mixpanel-api';

const shakeAnimation = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
    color:${colors.beige};
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`

const Section = styled.section`
height:100vh;
user-select:none;
`
const Content = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
`
const Title = styled.h1`
font-size:50px;
font-weight:700;
color:${colors.beige};
margin: 15px 0;
`
const RoundLogoImg = styled.img`
max-width:300px;
-webkit-user-drag:none;
`
const SocialIconLink = styled.a`
display:inline-block;
margin: 0 10px;
vertical-align:middle;
`
const SocialIcon = styled(FontAwesomeIcon)`
color:${colors.turquoise};
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

const reportSocial = {
    facebook: () => {
        MixpanelApi.reportClick('Facebook Icon');
    },
    instagram: () => {
        MixpanelApi.reportClick('Instagram Icon');
    },
    youtube: () => {
        MixpanelApi.reportClick('Youtube Icon');
    }
}
export default () => {
    return (
        <Section>
            <Content>
                <div>
                    <RoundLogoImg src={roundLogo} />
                </div>
                <Title>
                    Coming Soon
                </Title>
                <div>
                    <SocialIconLink target="_blank" href="https://www.facebook.com/february30th.music/">
                        <DynamicSocialIcon
                            icon={faFacebookSquare}
                            onClick={reportSocial.facebook}
                            delay={3}
                        />
                    </SocialIconLink>
                    <SocialIconLink target="_blank" href="https://www.instagram.com/february30th.music/">
                        <DynamicSocialIcon
                            icon={faInstagram}
                            onClick={reportSocial.instagram}
                            delay={8}
                        />
                    </SocialIconLink>
                    <SocialIconLink target="_blank" href="https://www.youtube.com/channel/UCiSV97J5Zcz-_IybT59UJKw">
                        <DynamicSocialIcon
                            icon={faYoutube}
                            onClick={reportSocial.youtube}
                            delay={13}
                        />
                    </SocialIconLink>
                </div>
            </Content>
        </Section>
    )
}