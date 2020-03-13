import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default () => {
  return (
    <Title>
      <HomeLink to="/">Store</HomeLink>
    </Title>
  )
}

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
`

const HomeLink = styled(Link)`
  text-decoration: none;
  color: #000;
`
