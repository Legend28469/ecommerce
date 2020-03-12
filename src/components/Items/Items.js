import React, { useState } from "react"
import styled from "styled-components"
import Menu from "../Menu/Menu"

export default () => {
  const [category, setCategory] = useState("Home")

  return (
    <Container>
      <Menu setCategory={setCategory} />
      <ItemContainer>
        <Title>{category}</Title>
        <SubTitle>View more</SubTitle>
      </ItemContainer>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  margin-top: 3rem;
  height: 20rem;
  grid-template-columns: 1fr 3fr;
  gap: 5rem;
`

const ItemContainer = styled.div``

const Title = styled.h3`
  font-size: 3rem;
`

const SubTitle = styled.p`
  margin-top: 1rem;
`
