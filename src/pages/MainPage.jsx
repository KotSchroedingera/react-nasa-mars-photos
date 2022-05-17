import React, { useEffect } from 'react'
import { RoversInfo } from '../components/RoversInfo';
import { roversMb } from '../store/store'

export const MainPage = () => {

  useEffect(() => {
    // roversMb.getRovers();
  }, []);

  return (
    <>
      <RoversInfo data={roversMb.rovers} />
    </>
  )
}
