import React from 'react'
import styled from 'styled-components'
import smallLogo from '../assets/binderlogo.jpg';
import { Link } from 'react-static';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MixpanelApi } from '../api/mixpanel-api';

const Header = styled.header`
margin-bottom: 20px;
`
const HeaderContent = styled.div`
background: linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, transparent 100%);
padding: 10px;
display:flex;
align-items:center;

@media (max-width: 500px)  {
    flex-direction: column;  
}
`;

const LogoImage = styled.img`
    width:90px;
    height:90px;
    border-radius: 50%;
`;

const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;

    @media (max-width: 500px)  {
        margin: 20px 0 0;
    }
`;

const NavLink = styled(Link)`
    margin-right: 35px;

    &, &:hover, &:visited {
        color: #fff;
        text-decoration: underline;
    }

    &.active {
        text-decoration: none;
        font-weight: 600;
        cursor: default;
    }
`;

const SpotifyLink = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &, &:hover, &:visited {
        text-decoration: none;
        color: #fff;
    }

    span {
        margin-left: 10px;
    }
    
    @media (max-width: 500px)  {
        span {
            font-size: 12px;
        }
    }
`;

export default () => (
    <Header>
        <HeaderContent>
            <Link to="/">
                <LogoImage src={smallLogo} />
            </Link>
            <LinksContainer>
                <NavLink exact={true} to="/">Home</NavLink>
                <NavLink exact={true} to="/videos">Videos</NavLink>
                <SpotifyLink href="https://open.spotify.com/artist/1coR5FdLQXwbu8dLM1yEBS" target="_blank" onClick={() => {
                     MixpanelApi.reportClick('spotify header link');
                }}>
                    <FontAwesomeIcon icon={faSpotify} color="#1DB954" />
                    <span>Listen On Spotify</span>
                </SpotifyLink>
            </LinksContainer>
        </HeaderContent>
    </Header>
)