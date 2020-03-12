import React from "react"
import styled from "styled-components"
import MenuButton from "./MenuButton"

export default ({ setCategory }) => {
  return (
    <Container>
      <MenuButton setCategory={setCategory}>Home</MenuButton>
      <MenuButton setCategory={setCategory}>New In</MenuButton>
      <MenuButton setCategory={setCategory}>Coats</MenuButton>
      <MenuButton setCategory={setCategory}>Sweaters</MenuButton>
      <MenuButton setCategory={setCategory}>Pants</MenuButton>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
