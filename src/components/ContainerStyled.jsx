import React from 'react'
import styledComponents from 'styled-components';

const Wrapper = styledComponents.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
  gap: 1rem;
  margin: auto;
  justify-content: center;
  padding: 0 1rem;
  height: 100%;
  width: 100%;
`;

export const ContainerStyled = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  )
}
