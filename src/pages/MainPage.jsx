import React, { useEffect } from 'react'
import { RoversInfo } from '../components/RoversInfo';
import roverStore from '../store/store';
import { ContainerStyled } from '../components/ContainerStyled'; 

export const MainPage = () => {

  useEffect(() => {
    if (!roverStore.rovers.length) roverStore.fetchAllRovers();
  }, []); 

  return (
    <ContainerStyled>
      <RoversInfo />
    </ContainerStyled>
  )
}
