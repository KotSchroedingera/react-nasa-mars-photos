import React, { useEffect, useState } from 'react'
import { getRoverInfo } from '../api/api.methods'


export const RoversInfo = () => {
  const [roverInfo, setRoverInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRoverInfo('curiosity')
      .then(data => setRoverInfo(data))
      .catch(err => setError(err));
  }, [roverInfo]);

  if (error) return (
    <div>
      {error.message}
    </div>
  )
  if (!roverInfo) return;
  
  return (
    <div>
      {roverInfo.name} <br />
      {roverInfo.launch_date} <br />
      {roverInfo.landing_date} <br />
      {roverInfo.status} <br />
      {roverInfo.total_photos} <br />
    </div>
  )
}
