import { Card, CardContent, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useState, useEffect } from 'react'
import styledComponents from 'styled-components';
import roverStore from '../store/store';
import ManifestTable from './ManifestTable';

const Wrapper = styledComponents.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  width: 100%;
  margin: 1rem 0;
`;

const CardStyled = styledComponents(Card)`
  height: fit-content;
`;

const Manifest = observer(({ rover }) => {
  const [manifest, setManifest] = useState(null);

  useEffect(() => {
    setManifest(roverStore.manifest(rover));
  }, [roverStore.manifest(rover)]);
  
  if (!manifest) return;
  
  return (
    <Wrapper>
      <CardStyled>
        <CardContent>
          <Typography variant="h5" component="div">
            {`${rover} info`}
          </Typography>
          <Typography variant="body2">
            Name: {manifest.name}
          </Typography>
          <Typography variant="body2">
            Status: {manifest.status}
          </Typography>
          <Typography variant="body2">
            Max sol: {manifest.max_sol}
          </Typography>
          <Typography variant="body2">
            Max date: {manifest.max_date}
          </Typography>
          <Typography variant="body2">
            Total photos: {manifest.total_photos}
          </Typography>
        </CardContent>
      </CardStyled>
      <ManifestTable
        photos={manifest.photos}
        rover={rover} />
    </Wrapper> 
  )
}); 

export default Manifest;

