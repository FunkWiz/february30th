import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/variables';
import smallLogo from '../assets/small_logo.png'
import Burger from './Burger';

const Header = styled.header`
z-index:100;
position:fixed;
top:0;
left:0;
right:0;
transform: translateZ(0);
backface-visibility:hidden;
will-change:transform;
`
const HeaderContent = styled.div`
background: linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, transparent 100%);
padding: 10px;
display:flex;
justify-content:space-between;
align-items:center;
`
const LogoImage = styled.img`
width:90px;
height:90px;
`
export default () => (
    <Header>
        <HeaderContent>
            <div>
                <Burger />
            </div>
            <div>
                <LogoImage src={smallLogo} />
            </div>
        </HeaderContent>
    </Header>
)