import React from 'react'
import { Link } from 'react-router-dom'


export const RoverPreview = ({...props}) => {
 
  const { 
    name, 
    status, 
    launch_date, 
    landing_date, 
    max_sol, 
    max_date, 
    total_photos, 
    cameras, 
  } = props;

  const imgSrc = `../img/${name.toLowerCase()}.jpg`;

  return (
    <div>
      <div style={{
        maxHeight: 400, 
        overflow: 'hidden', 
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center'
      }}>
        <img 
          src={imgSrc} 
          alt={name}
          height='100%' />
      </div>
      <p>
        <Link to={`/rover/${name}`}>Roversname: {name}</Link>
      </p>
      <p>Status: {status}</p>
      <div>
        <p>Launched: {launch_date}</p>
        <p>Landed: {landing_date}</p>
      </div>
      <div>
        <p>Martian days: {max_sol}</p>
        <p>Last photo date: {max_date}</p>
      </div>
      <div>
        Photos: {total_photos}
      </div>
      <div>
        Cameras: 
        <ul>
          {cameras.map(elem => <li key={elem.name}>
            {elem.name} ({elem.full_name})
          </li>)}
        </ul>
      </div>
    </div>
  )
}
