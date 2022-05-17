import { observer } from 'mobx-react-lite';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { checkRoverName } from '../api/api.methods';
import roverStore from '../store/store';


export const RoverPage = observer(() => {
  const { rover } = useParams();

  useEffect(() => {
    roverStore.fetchManifest(rover);
  }, [rover])

  if (!checkRoverName(rover)) return (
    <div>
      No such rover
    </div>
  );

  const manifest = roverStore.manifest(rover);
  if (!manifest) return;

  return (
    <>
      <hr />
      <h1>{`${rover} info`}</h1>
      <hr />
      <p>Name: {manifest.name}</p>
      <p>Status: {manifest.status}</p>
      <p>Max sol: {manifest.max_sol}</p>
      <p>Max date: {manifest.max_date}</p>
      <p>Total photos: {manifest.total_photos}</p>
      <hr />
      {manifest.photos.map(elem => {
        return <div key={elem.sol}>
          <p>Sol: {elem.sol}</p>
          <p>earth_date {elem.earth_date}</p>
          <p>total_photos {elem.total_photos}</p>
          <p>cameras: {elem.cameras.map(elem => `${elem} `)}</p>
          <hr />
        </div>
        
      })}
    </>
  )
})
