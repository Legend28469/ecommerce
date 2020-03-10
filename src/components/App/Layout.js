/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import GlobalStyle from "../../styles/Global"
import { Reset } from "styled-reset"
import styled from "styled-components"

import Header from "../Header/Header"

const Layout = ({ children }) => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
    </>
  )
}

export default Layout

const Container = styled.div`
  margin: 0 auto;
  padding: 50px 100px;
`
