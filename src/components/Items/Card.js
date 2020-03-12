import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

export default ({ img, title, description }) => {
  return (
    <>
      <Container>
        <Image
          fluid={img.childImageSharp.fluid}
          imgStyle={{ objectFit: "cover" }}
          style={{ height: "100%" }}
          alt="Shop image"
        />
        <Information>
          <Title>{title}</Title>
          <SubTitle>{description}</SubTitle>
        </Information>
      </Container>
      <Container>
        <Image
          fluid={img.childImageSharp.fluid}
          imgStyle={{ objectFit: "cover" }}
          style={{ height: "100%" }}
          alt="Shop image"
        />
        <Information>
          <Title>{title}</Title>
          <SubTitle>{description}</SubTitle>
        </Information>
      </Container>
      <Container>
        <Image
          fluid={img.childImageSharp.fluid}
          imgStyle={{ objectFit: "cover" }}
          style={{ height: "100%" }}
          alt="Shop image"
        />
        <Information>
          <Title>{title}</Title>
          <SubTitle>{description}</SubTitle>
        </Information>
      </Container>
      <Container>
        <Image
          fluid={img.childImageSharp.fluid}
          imgStyle={{ objectFit: "cover" }}
          style={{ height: "100%" }}
          alt="Shop image"
        />
        <Information>
          <Title>{title}</Title>
          <SubTitle>{description}</SubTitle>
        </Information>
      </Container>
      <Container>
        <Image
          fluid={img.childImageSharp.fluid}
          imgStyle={{ objectFit: "cover" }}
          style={{ height: "100%" }}
          alt="Shop image"
        />
        <Information>
          <Title>{title}</Title>
          <SubTitle>{description}</SubTitle>
        </Information>
      </Container>
      <Container>
        <Image
          fluid={img.childImageSharp.fluid}
          imgStyle={{ objectFit: "cover" }}
          style={{ height: "100%" }}
          alt="Shop image"
        />
        <Information>
          <Title>{title}</Title>
          <SubTitle>{description}</SubTitle>
        </Information>
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

const SubTitle = styled.p`
  line-height: 1.2;
`
