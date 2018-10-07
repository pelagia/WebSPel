import React from "react"
import styled, { css } from "react-emotion"
import { Link } from "gatsby"

const Root = styled('div')`
  display: grid;
  grid-template-columns: 350px 1fr;
`

const headerDecor = css`
  display: flex;
  background: #d9e6f2;
  padding: 20px;
`

const h1Decor = css`
  font-family: 'Courier New';
  color: #666699;
`

export default ({ children }) => (
 <div>
   <div className={headerDecor}>
     <h2 className={h1Decor}>Verba volant, scripta manent</h2>
   </div>
   <Root>
    {children}
  </Root>
 </div>
)