import { observer } from 'mobx-react-lite';
import React from 'react'
import roverStore from '../store/store';
import { RoverPreview } from './RoverPreview';


export const RoversInfo = observer(() => {

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      {roverStore.rovers.map(elem => <RoverPreview key={elem.id} {...elem} />)} 
    </div>
  )
});
