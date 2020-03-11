import React from "react"
import styled from "styled-components"

export default ({ children, setVisible }) => {
  return (
    <Container onClick={() => setVisible(false)}>
      <Content>{children}</Content>
    </Container>
  )
}

const Container = styled.div`
  padding: 15px 40px;
  background-color: #000;
  border-radius: 20px;
  cursor: pointer;
`

const Content = styled.p`
  color: #fff;
`
