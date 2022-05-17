import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { checkRoverName } from '../api/api.methods';
import { roversMb } from '../store/store';


export const RoverPage = () => {
  const { rover } = useParams();
  const [manifest, setManifest] = useState(null);

  // useEffect(() => {
  //   roversMb.fetchMainfest(rover);
  //   const result = roversMb.getManifest(rover);
  //   console.log(result);
  // }, [rover, roversMb.manifests]);

  if (!checkRoverName(rover)) return (
    <div>
      No such rover
    </div>
  ); 

  return (
    <>
      <h1>{`${rover} info`}</h1>
    </>
  )
}
