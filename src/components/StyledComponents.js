import styled, { keyframes } from 'styled-components'

const reactLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const Loader = styled.div`
  width:80px;
  margin-left: auto;
  margin-right: auto;
  img {
    animation: ${reactLogoSpin} infinite 1s linear;
    height: 80px;
  }
`
