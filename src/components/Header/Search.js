import React from "react"
import styled from "styled-components"
import { FaSearch } from "react-icons/fa"

export default () => {
  return (
    <SearchWrapper>
      <SearchBox
        placeholder="Search for items or brands"
        type="text"
      ></SearchBox>
      <Icon />
    </SearchWrapper>
  )
}

const SearchWrapper = styled.div`
  position: relative;
  flex: 1;
  margin: 0 3rem;
`

const SearchBox = styled.input`
  width: 100%;
  padding: 0 20px;
  outline: none;
  height: 3rem;
  background: #efefef;
  border: none;
  border-radius: 10px;

  ::placeholder {
    color: #aaa;
    opacity: 1;
  }
`

const Icon = styled(FaSearch)`
  position: absolute;
  right: 10px;
  top: calc(50% - 0.5em);
  cursor: pointer;
`
