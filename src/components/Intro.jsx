import React from 'react'
import styled from 'styled-components'
import roundLogo from '../assets/round_logo.png'
import { faFacebookSquare, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import SocialIcon from './SocialIcon';
import YouTubeEmbed from './YouTubeEmbed';
import spotifyLogo from '../assets/spotify.png'
import { colors } from '../styles/variables';
import { MixpanelApi } from '../api/mixpanel-api';

const Section = styled.section`
height:100vh;
user-select:none;
`
const Content = styled.div`
text-align: center;
> div {
    margin-bottom:30px;
}
`
const RoundLogoImg = styled.img`
max-width:200px;
-webkit-user-drag:none;
`
const Title = styled.h1`
font-size:30px;
font-weight: 700;
`
const SpotifyLogoContainer = styled.a`
display: inline-block;
&, &:hover, &:visited, &:active {
    color:${colors.beige};
    text-decoration: none;
}
img {
    max-width:200px;
}
`
const SpotifyTitle = styled.h2`
font-size:26px;
margin-bottom:5px;
`
const _onSpotifyClick = () => {
    MixpanelApi.reportClick('Listen On Spotify Clicked');
}
export default () => {
    return (
        <Section>
            <Content>
                <div>
                    <RoundLogoImg src={roundLogo} />
                </div>
                <div>
                    <Title>PLACES - OUT NOW</Title>
                </div>
                <div>
                    <YouTubeEmbed videoId="0_aQnjeGj10" videoTitle="Places" />
                </div>
                <div>
                    <SocialIcon
                        href="https://www.facebook.com/february30th.music/"
                        icon={faFacebookSquare}
                        animationDelay={3}
                        reportMessage="Facebook Icon"
                    />
                    <SocialIcon
                        href="https://www.instagram.com/february30th.music/"
                        icon={faInstagram}
                        animationDelay={8}
                        reportMessage="Instagram Icon"
                    />
                    <SocialIcon
                        href="https://www.youtube.com/channel/UCiSV97J5Zcz-_IybT59UJKw"
                        icon={faYoutube}
                        animationDelay={13}
                        reportMessage="YouTube Icon"
                    />
                </div>
                <div>
                    <SpotifyLogoContainer
                        onClick={_onSpotifyClick}
                        target="_blank"
                        href="https://open.spotify.com/artist/3TZzWeRIJQEQsOuNzAEsN8">
                        <SpotifyTitle>LISTEN ON</SpotifyTitle>
                        <img src={spotifyLogo} />
                    </SpotifyLogoContainer>
                </div>
            </Content>
        </Section>
    )
}