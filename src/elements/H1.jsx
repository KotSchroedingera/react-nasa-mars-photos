import React from 'react'
import styledComponents from "styled-components";

const H1El = styledComponents.h1`
  font-size: 2.5rem;
  font-weight: 600;
`;

export const H1 = ({children, ...props}) => {
  return (
    <H1El {...props}>{children}</H1El>
  )
}
