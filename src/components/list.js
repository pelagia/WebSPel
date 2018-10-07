import React from "react"
import styled, { css } from "react-emotion"
import { Link } from "gatsby"

const ListContainer = styled('div')`
  margin: 20px;
  font-family: 'Courier New';
  overflow: hidden;
`

const Details = styled('details')`
  margin: 5px;
  outline: none;
`

const Summary = styled('summary')`
  margin: 5px;
  outline: none;
  cursor: pointer;
`

const DivList = styled('div')`
    margin: 5px;
    text-decoration: none;
`

const linkDecor = css`
  text-decoration: none;
  color: #336699;
  padding-left: 25px;
`

export default props => <ListContainer>
  <Details>
    <Summary>About</Summary>
    <DivList>
      <Link className={linkDecor} to='/about'>- About me</Link>
    </DivList>
  </Details>
  <Details>
    <Summary>What is dangerous?</Summary>
    <div>
      <Link className={linkDecor} to='/history'>- History of Philosophy</Link>
    </div>
    <div>
      <Link className={linkDecor} to='/philosophy'>- Philosophy</Link>
    </div>
  </Details>
  <Details>
    <Summary>Context</Summary>
    <div>
      <Link className={linkDecor} to='/plato'>- Plato writings</Link>
    </div>
  </Details>
</ListContainer>