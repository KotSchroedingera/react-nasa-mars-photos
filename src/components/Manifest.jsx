import { Pagination, Card, CardContent, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useState, useEffect } from 'react'
import styledComponents from 'styled-components';
import roverStore from '../store/store';
import { ManifestTable } from './ManifestTable';

const Wrapper = styledComponents.div`

`;

const Manifest = observer(({ rover }) => {
  const [manifest, setManifest] = useState(null);
  const [pageFrom, setPageFrom] = useState(0); 
  const [pageTo, setPageTo] = useState(100);

  useEffect(() => {
    setManifest(roverStore.manifest(rover));
  }, [roverStore.manifest(rover)]);
  
  if (!manifest) return;
  
  const PHOTOS_PER_PAGE = 100;
  const PHOTOS_PAGES = Math.ceil(manifest.photos.length / PHOTOS_PER_PAGE);
  const handleChangePage = evt => {
    setPageFrom(evt.target.outerText * PHOTOS_PER_PAGE - PHOTOS_PER_PAGE);
    setPageTo(evt.target.outerText * PHOTOS_PER_PAGE);
  };

  return (
    <Wrapper>
      <Pagination 
        count={PHOTOS_PAGES} 
        variant="outlined" 
        color="primary"
        onChange={handleChangePage} />
      <Card>
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
      </Card>
      <ManifestTable 
        photos={manifest.photos.slice(pageFrom, pageTo)}
        rover={rover}>
      </ManifestTable>
    </Wrapper> 
  )
}); 

export default Manifest;

