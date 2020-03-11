import React, { useState } from "react"
import styled, { keyframes, css } from "styled-components"
import MonoButton from "../Buttons/MonoButton"

export default () => {
  const [visible, setVisible] = useState(true)

  return (
    <Container visible={visible}>
      <Heading>
        $20 off of orders $100 plus
        <br />
        Get free next day delivery
      </Heading>
      <SubHeading>With code: 28469</SubHeading>
      <MonoButton setVisible={setVisible}>OK</MonoButton>
    </Container>
  )
}

const slideOut = keyframes`
  0% {
    height: 20rem
  }

  90% {
    height: 0;
  }

  100% {
      height: 0;
      display: none;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #03b39f;
  margin-top: 3rem;
  height: 20rem;
  overflow: hidden;
  border-radius: 30px;
  flex-direction: column;
  animation: ${props =>
    props.visible
      ? ""
      : css`
          ${slideOut} 600ms linear forwards
        `};
`

const Heading = styled.h3`
  text-transform: uppercase;
  font-size: 2rem;
  padding-top: 4rem;
`

const SubHeading = styled.p`
  padding-top: 1rem;
  padding-bottom: 2rem;
`

const Button = styled(MonoButton)``
