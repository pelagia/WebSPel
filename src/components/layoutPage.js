import React from "react"
import styled, { css } from "react-emotion"

const root = css`
  margin: 20px;
  font-family: 'Courier New';
`

export default ({ children }) =>
  <div className={root}>{children}</div>
