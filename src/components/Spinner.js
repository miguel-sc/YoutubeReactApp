import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import reactLogo from './../svg/reactLogo.svg'

class Spinner extends Component {

  render() {
    return (
      <SpinnerContainer>
        <img src = { reactLogo } alt = 'Spinner' />
      </SpinnerContainer>
    )
  }
}

export default Spinner

const reactLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const SpinnerContainer = styled.div`
  width: 113.3px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;

  img {
    animation: ${ reactLogoSpin } infinite 0.8s linear;
    height: 80px;
  }
`
