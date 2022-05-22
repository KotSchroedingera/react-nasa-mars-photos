import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react'
import roverStore from '../store/store';
import { observer } from 'mobx-react-lite';


export const Filters = observer(() => {

  const [searchParams, setSearchParams] = useSearchParams();

  const [sol, setSol] = useState(searchParams.get('sol'));
  const [name, setName] = useState(searchParams.get('name'));

  useEffect(() => {
    setSearchParams({ ...searchParams, sol, name });
  }, [sol, name])

  useEffect(() => {
    roverStore.setFilter('name', searchParams.get('name'));
    roverStore.setFilter('sol', searchParams.get('sol'));
    roverStore.setFilter('earth_date', searchParams.get('earth_date'));
    roverStore.setFilter('cameras', searchParams.get('cameras'));
    roverStore.fetchFilteredPhotos()
  }, [searchParams]);

  return (
    <div>
      <div>
        <h4>Rover</h4>
        <ul>
          <li>All</li>
          <li>Curiosity</li>
          <li>Opportunity</li>
          <li>Spirit</li>
        </ul>
      </div>
      <div>
        <h4>Sol</h4>
        <input 
          value={sol}
          onChange={evt => {
            setSol(evt.target.value)
          }}
          type="number" />
      </div>
      <div>
        <h4>Earth Date</h4>
        <input type="text" />
      </div>
      <div>
        <h4>Camera</h4>
        {/* <ul>
          <li>All</li>
          <li>FHAZ</li>
          <li>RHAZ</li>
          <li>MAST</li>
          <li>CHEMCAM</li>
          <li>MAHLI</li>
          <li>MARDI</li>
          <li>NAVCAM</li>
          <li>PANCAM</li>
          <li>MINITES</li>
        </ul> */}
      </div>
    </div>
  )
}
)