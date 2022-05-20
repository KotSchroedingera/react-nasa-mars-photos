import React from 'react'
import { Link } from 'react-router-dom'; 
import { Card, CardMedia, CardContent, Typography, CardActions, Button, List, ListItemText, ListItem } from '@mui/material';
import styledComponents from 'styled-components';


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
  
  const ListEl = styledComponents(List)`
    padding: 0;
  `;

  const ListItemEl = styledComponents(ListItem)`
    padding: 0;
  `;

  const Cameras = styledComponents.div`
    margin-top: 1rem;
  `;

  const CardEl = styledComponents(Card)`
    height: 100%;
  `;

  return (
    <CardEl>
      <CardMedia
        component="img"
        height="300"
        image={imgSrc}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p><b>Status:</b> {status}</p>
          <div>
            <p><b>Launched:</b> {launch_date}</p>
            <p><b>Landed:</b> {landing_date}</p>
          </div>
          <div>
            <p><b>Martian days:</b> {max_sol}</p>
            <p><b>Last photo date:</b> {max_date}</p>
          </div>
          <div>
            <b>Photos:</b> {total_photos}
          </div>
          <Cameras>
            <b>Cameras:</b> 
            <ListEl dense>
              {cameras.map(elem => <ListItemEl key={elem.name}>
                <ListItemText>
                  {elem.name} ({elem.full_name})
                </ListItemText>
              </ListItemEl>)}
            </ListEl>
          </Cameras>
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          href={`/rover/${name}`}
          size="small">Manifest</Button>
      </CardActions>
    </CardEl>
  )
}
