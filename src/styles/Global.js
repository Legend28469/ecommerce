import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    box-sizing: border-box;
    font-weight: normal;

    h1, h2, h3, h4, h5, h6 {
        font-family: "Playfair Display", sans-serif;
        font-weight: 400;
    }

    p {
      font-family: "Montserrat", sans-serif;
      font-weight: 300;
    }
  }
`

export default GlobalStyle
