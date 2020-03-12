import React from "react"
import styled from "styled-components"

export default ({ children, setCategory }) => {
  return (
    <Container onClick={() => setCategory(children)}>
      <p>{children}</p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #1d282c;
  padding: 20px 40px;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 1rem;
  color: #fff;
  cursor: pointer;
`
