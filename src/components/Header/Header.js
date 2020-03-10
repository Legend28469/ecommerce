import React from "react"
import Search from "./Search"
import Brand from "./Brand"
import Cart from "./Cart"
import styled from "styled-components"

export default () => {
  return (
    <Container>
      <Brand />
      <Search />
      <Cart />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
