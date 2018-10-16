import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/variables';


const BurgerWrapper = styled.div`
width:25px;
cursor:pointer;
`

const Line = styled.div`
height:1px;
background-color:${colors.beige};

&:not(:last-child){
    margin-bottom:5px;
}
`

export default () => {
    return (
        <BurgerWrapper>
            <Line />
            <Line />
            <Line />
        </BurgerWrapper>
    )
}
