import { observer } from 'mobx-react-lite';
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import roverStore from '../store/store';
// import { Manifest } from '../components/Manifest';

const ManifestLazy = lazy(() => import('../components/Manifest'))


export const RoverPage = observer(() => {
  const { rover } = useParams();

  useEffect(() => {
    if (!roverStore.manifest(rover)) roverStore.fetchManifest(rover);
  }, [rover]);

  return (
    <Suspense fallback='loading...'>
      <ManifestLazy manifest={roverStore.manifest(rover)} rover={rover} />
    </Suspense>
  )  
})
