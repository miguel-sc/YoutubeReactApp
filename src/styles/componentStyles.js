import styled, { keyframes } from 'styled-components'

const reactLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const Loader = styled.img`
  animation: ${reactLogoSpin} infinite 2s linear;
  height: 80px;
`
