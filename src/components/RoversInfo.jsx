import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react'
import { roversMb } from '../App';
import { RoverPreview } from './RoverPreview';


export const RoversInfo = observer(() => {

  const [rovers, setRovers] = useState([]);

  useEffect(() => {
    setRovers(roversMb.rovers);
  }, []);

  return (
    <div>
      {rovers.map(elem => <RoverPreview key={elem.id} {...elem} />)} 
    </div>
  )
})
