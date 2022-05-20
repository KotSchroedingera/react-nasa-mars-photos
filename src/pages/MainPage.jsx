import { Container } from '@mui/material';
import React, { useEffect } from 'react'
import { RoversInfo } from '../components/RoversInfo';
import roverStore from '../store/store';

export const MainPage = () => {

  useEffect(() => {
    if (!roverStore.rovers.length) roverStore.fetchAllRovers();
  }, []); 

  return (
    <Container maxWidth='1024'>
      <RoversInfo />
    </Container>
  )
}
