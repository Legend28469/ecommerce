import React from "react"
import styled from "styled-components"
import { FaShoppingCart } from "react-icons/fa"

export default () => {
  return (
    <Container className="snipcart-checkout">
      <Icon />
      <NumberOfItems className="snipcart-items-count"></NumberOfItems>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

const Icon = styled(FaShoppingCart)`
  color: #00ff00;
  font-size: 3rem;
  cursor: pointer;
`

const NumberOfItems = styled.span`
  position: absolute;
  bottom: 50%;
  left: 50%;
  font-size: 1.1rem;
  font-family: "Playfair Display", sans-serif;
  font-weight: 400;
`
