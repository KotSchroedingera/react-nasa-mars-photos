import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { checkRoverName } from '../api/api.methods';
import roverStore from '../store/store';
import { Link } from 'react-router-dom'; 
import { LazyLoadComponent } from 'react-lazy-load-image-component';


export const RoverPage = observer(() => {
  const { rover } = useParams();
  const [manifest, setManifest] = useState(null);

  useEffect(() => {
    setManifest(roverStore.manifest(rover));
  }, [rover])

  if (!checkRoverName(rover)) return (
    <div>
      No such rover
    </div>
  );

  return (
    <>
      { manifest && <>
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
          return (<LazyLoadComponent  key={elem.sol}>
            <div>
              <p>
                <Link to={`/photos?name=${manifest.name}&sol=${elem.sol}` }>  
                  Sol: {elem.sol}
                </Link>
              </p>
              <p>earth_date {elem.earth_date}</p>
              <p>total_photos {elem.total_photos}</p>
              <p>cameras: {elem.cameras.map(elem => `${elem} `)}</p>
              <hr />
            </div>
          </LazyLoadComponent>)
        })}
        </> 
      }
    </>
  )
})
