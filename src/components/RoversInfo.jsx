import { observer } from 'mobx-react-lite';
import React from 'react'
import roverStore from '../store/store';
import { RoverPreview } from './RoverPreview';
import { Grid } from '@mui/material';

export const RoversInfo = observer(() => {
  return (
    <Grid container spacing={4}>
      {roverStore.rovers.map(elem => 
        <Grid item md={4} sm={6} xs={12}>
          <RoverPreview key={elem.id} {...elem} />
        </Grid>)}
    </Grid>
  )
});
