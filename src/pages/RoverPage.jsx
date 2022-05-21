import { observer } from 'mobx-react-lite';
import React, { lazy, Suspense, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ContainerStyled } from '../components/ContainerStyled';
import roverStore from '../store/store';

const ManifestLazy = lazy(() => import('../components/Manifest'))

export const RoverPage = () => {
  const { rover } = useParams();

  useEffect(() => {
    if (!roverStore.manifest(rover)) roverStore.fetchManifest(rover);
  }, [rover]);

  return (
    <ContainerStyled>
      <Suspense fallback='loading...'>
        <ManifestLazy rover={rover} />
      </Suspense>
    </ContainerStyled>
  )  
}
