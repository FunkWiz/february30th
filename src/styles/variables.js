import { css } from 'styled-components'

export const colors = {
    black: '#000',
    white: '#fff',
    beige: '#d8ab75',
    turquoise: '#018f7d',
    brown: '#2d1b13'
}

export const media = {
    desktop: (...args) => css`
    @media (min-width: 980px) {
        ${ css(...args)}
    }`
}