import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default ({ img, title, description, link }) => {
  return (
    <>
      <Container>
        <ProductLink to={link}>
          <Image
            fluid={img.childImageSharp.fluid}
            imgStyle={{ objectFit: "cover" }}
            style={{ height: "300px" }}
            alt="Shop image"
          />
          <Information>
            <Title>{title}</Title>
          </Information>
        </ProductLink>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Information = styled.div`
  padding-top: 1rem;
  background: #f6f4e0;
  text-align: center;
  padding-bottom: 1rem;
  border-radius: 0 0 10px 10px;
`

const Image = styled(Img)`
  border-radius: 10px 10px 0 0;
`

const Title = styled.h4`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`

const ProductLink = styled(Link)`
  text-decoration: none;
`
