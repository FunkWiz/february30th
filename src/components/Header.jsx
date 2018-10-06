import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/variables';

const Header = styled.header`
color: ${colors.beige};
background-color: ${colors.black};
padding: 40px;

img {
    width: 300px;
    margin:0 auto;
    display:block;
}
`

export default () => (
    <Header>
        Welcome to February 30th's Official Web Site.
    </Header>
)