import React from 'react'
import { Link } from 'react-router-dom'


const Manifest = ({ manifest, rover }) => {
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
        return (
          <div key={elem.sol}>
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
        )})}
    </> 
  )
}; 

export default Manifest;

