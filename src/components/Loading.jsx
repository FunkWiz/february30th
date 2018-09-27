import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/variables';

const Container = styled.div`
background-color:red;
height:100vh;
`
export default () => {
    alert(123);
    return (
        <Container>
            Loading...
    </Container>
    )
}