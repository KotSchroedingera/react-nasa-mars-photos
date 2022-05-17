import React, { useEffect } from 'react'
import { RoversInfo } from '../components/RoversInfo';
import roverStore from '../store/store';


export const MainPage = () => {

  useEffect(() => {
    roverStore.fetchAllRovers();
  }, []);

  return (
    <>
      <RoversInfo />
    </>
  )
}
