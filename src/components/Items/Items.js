import React, { useState } from "react"
import styled from "styled-components"
import Menu from "../Menu/Menu"
import Card from "./Card"

export default ({ query }) => {
  const [category, setCategory] = useState("Home")

  return (
    <Container>
      <Menu setCategory={setCategory} />
      <ItemContainer>
        <Title>{category}</Title>
        <SubTitle>View more</SubTitle>
        <CardContainer>
          {query.allMarkdownRemark.edges.map(item => {
            return (
              <Card
                key={item.node.id}
                img={item.node.frontmatter.image}
                title={item.node.frontmatter.title}
                description={item.node.frontmatter.description}
                link={item.node.fields.slug}
              />
            )
          })}
        </CardContainer>
      </ItemContainer>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  margin-top: 3rem;
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

const CardContainer = styled.div`
  display: grid;
  margin-top: 3rem;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
`
