import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react'
import { roversMb } from '../store/store';
import { RoverPreview } from './RoverPreview';


export const RoversInfo = observer(() => {

  const [rovers, setRovers] = useState([]);

  useEffect(() => {
    setRovers(roversMb.rovers);
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      {rovers.map(elem => <RoverPreview key={elem.id} {...elem} />)} 
    </div>
  )
})
