import React from 'react'

export const RoverPreview = ({...props}) => {
 
  const { name, status, launch_date } = props;

  return (
    <div>
      <p>Rovername: {name}</p>
      <p>Status: {status}</p>
      <p>Launched: {launch_date}</p>
    </div>
  )
}
