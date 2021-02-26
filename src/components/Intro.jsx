import React from 'react'
import styled from 'styled-components'
import roundLogo from '../assets/binderlogo.jpg';
import { faFacebookSquare, faInstagram, faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons'
import SocialIcon from './SocialIcon';
import YouTubeEmbed from './YouTubeEmbed';

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
border-radius:50%;
-webkit-user-drag:none;
`

const CenteredContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    max-width: 600px;
    min-width: 300px;
    margin: 0 auto 35px;
`;

const SpotifyTitle = styled.h2`
font-size:26px;
margin-bottom:5px;
`

export default () => {
    return (
        <Section>
            <Content>
             <CenteredContainer>
                    <SocialIcon
                        href="https://open.spotify.com/artist/1coR5FdLQXwbu8dLM1yEBS"
                        icon={faSpotify}
                        animationDelay={3}
                        reportMessage="Spotify Icon"
                        color="#1DB954"
                    />
                    <SocialIcon
                        href="https://www.facebook.com/binderdundat.music/"
                        icon={faFacebookSquare}
                        animationDelay={8}
                        reportMessage="Facebook Icon"
                        color="#3b5998"
                    />
                    <SocialIcon
                        href="https://www.instagram.com/binder.dundat/"
                        icon={faInstagram}
                        animationDelay={13}
                        reportMessage="Instagram Icon"
                        color="#fbad50"
                    />
                    <SocialIcon
                        href="https://www.youtube.com/channel/UCiSV97J5Zcz-_IybT59UJKw"
                        icon={faYoutube}
                        animationDelay={18}
                        reportMessage="YouTube Icon"
                        color="#c4302b"
                    />
                </CenteredContainer>
                <div>
                    <YouTubeEmbed videoId="IE7podYmyIw" videoTitle="Today" />
                </div>
            </Content>
        </Section>
    )
}