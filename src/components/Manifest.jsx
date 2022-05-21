import { TablePagination } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'; 
import styledComponents from 'styled-components';
import roverStore from '../store/store';

const Wrapper = styledComponents.div`

`;
const Rover = styledComponents.div``;
const Photos = styledComponents.div``;

const Manifest = observer(({ rover }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [manifest, setManifest] = useState(null);
  const [pageFrom, setPageFrom] = useState(0); 
  const [pageTo, setPageTo] = useState(25)

  useEffect(() => {
    setManifest(roverStore.manifest(rover));
  }, [roverStore.manifest(rover)]);

  const handleChangePage = evt => {
    setPage(evt.target.value);
  };
  
  const handleChangeRowsPerPage = evt => {
    setRowsPerPage(evt.target.value);
  }; 

  if (!manifest) return;

  return (
    <Wrapper>
    <Rover>
      <h1>{`${rover} info`}</h1>
      <p>Name: {manifest.name}</p>
      <p>Status: {manifest.status}</p>
      <p>Max sol: {manifest.max_sol}</p>
      <p>Max date: {manifest.max_date}</p>
      <p>Total photos: {manifest.total_photos}</p>
    </Rover>
    <Photos>
      {manifest.photos
        .filter(elem => elem.sol >= pageFrom && elem.sol < pageTo)
        .map(elem => {
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
    </Photos>
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
    </Wrapper> 
  )
}); 

export default Manifest;

