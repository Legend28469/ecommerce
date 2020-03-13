import React from "react"
import styled from "styled-components"
import { FaShoppingCart } from "react-icons/fa"

export default () => {
  return (
    <div className="snipcart-checkout">
      <Icon />
    </div>
  )
}

const Icon = styled(FaShoppingCart)`
  color: #00ff00;
  font-size: 3rem;
  cursor: pointer;
`
