import { keyframes, styled, css } from 'styled-components'

const shine = keyframes`
    0%{background-position-x: 0px}
    100% {background-position-x: 200px}    
}
`
const animationCode = css`
    ${shine} 2.0s linear infinite;
`

export const SceletonContainer = styled.div`
    background: #313131;
    background: linear-gradient(110deg, #313131 8%, #7d7d7d 18%, #313131 33%);
    animation: ${animationCode};
`
