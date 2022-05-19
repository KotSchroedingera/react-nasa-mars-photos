import React, { useEffect, useState } from 'react'
import { RoversInfo } from '../components/RoversInfo';
import roverStore from '../store/store';

export const MainPage = () => {

  useEffect(() => {
    if (!roverStore.rovers.length) roverStore.fetchAllRovers();
  }, []); 

  return (
    <>
      <RoversInfo />
    </>
  )
}
