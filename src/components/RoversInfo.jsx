import { observer } from 'mobx-react-lite';
import React from 'react'
import styledComponents from 'styled-components';
import roverStore from '../store/store';
import { RoverPreview } from './RoverPreview';

const Wrapper = styledComponents.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem 0;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const RoversInfo = observer(() => {
  return (
    <Wrapper>
      {roverStore.rovers.map(elem => 
        <div key={elem.id} >
          <RoverPreview {...elem} />
        </div>)}
    </Wrapper>
  )
});
