import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/App/Layout"
import styled from "styled-components"
import Img from "gatsby-image"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Container>
        <Side>
          <SideHeading>Almost there</SideHeading>
          <FreeShipping>Free Shipping Worldwide</FreeShipping>
          <ChooseColor>Choose Color</ChooseColor>
          <Button
            className="buy-button snipcart-add-item"
            data-item-id={post.frontmatter.title}
            data-item-price={post.frontmatter.price}
            data-item-url={post.fields.slug}
            data-item-description={post.frontmatter.description}
            data-item-image={post.frontmatter.image.relativePath}
            data-item-name={post.frontmatter.title}
          >
            Add To Cart
          </Button>
        </Side>

        <MainContainer>
          <Main>
            <Title>{post.frontmatter.title}</Title>
            <Description>{post.frontmatter.description}</Description>
            <Price>${post.frontmatter.price}</Price>
          </Main>
          <ImageContainer>
            <Image
              fluid={post.frontmatter.image.childImageSharp.fluid}
              imgStyle={{ objectFit: "cover" }}
              alt="Shop image"
            />
          </ImageContainer>
        </MainContainer>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: grid;
  height: 70vh;
  grid-template-columns: 1fr 3fr;
`

const Side = styled.div`
  padding-top: 3rem;
  border-right: 1px solid rgba(50, 25, 25, 0.1);
  height: calc(100vh - 98px);
  position: relative;
`

const SideHeading = styled.p`
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`

const FreeShipping = styled.p`
  color: #aaa;
  text-transform: uppercase;
  font-size: 0.9rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(50, 25, 25, 0.1);
`

const ChooseColor = styled.p`
  color: #aaa;
  text-transform: uppercase;
  font-size: 0.9rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
`

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Main = styled.div`
  padding: 80px 40px 0;
`

const Title = styled.h2`
  font-size: 2rem;
  line-height: 1.5;
`

const Description = styled.p`
  line-height: 1.5;
  margin-top: 1rem;
`

const Price = styled.p`
  font-size: 2rem;
  margin-top: 2rem;
`

const ImageContainer = styled.div`
  margin: 2rem 0;
`

const Image = styled(Img)`
  height: 90%;
  border-radius: 5px;
`

const Button = styled.button`
  outline: none;
  border: none;
  padding: 20px 40px;
  background: #22ff2d;
  font-family: "Playfair Display", sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  border-radius: 5px;
  position: absolute;
  left: 0;
  bottom: 50px;
`

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        price
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`
