import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React, { useState } from 'react'; 


export const PhotoPage = () => {
  const [rover, setRover] = useState('all');
  const [camera, setCamera] = useState('all');

  return (
    <>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Select rover</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={rover}
        onChange={evt => setRover(evt.target.value)}
      >
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="curiosity" control={<Radio />} label="Curiosity" />
        <FormControlLabel value="opportunity" control={<Radio />} label="Opportunity" />
        <FormControlLabel value="spirit" control={<Radio />} label="Spirit" />
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Select camera</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={camera}
        onChange={evt => setCamera(evt.target.value)}
      >
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="curiosity" control={<Radio />} label="Curiosity" />
        <FormControlLabel value="opportunity" control={<Radio />} label="Opportunity" />
        <FormControlLabel value="spirit" control={<Radio />} label="Spirit" />
      </RadioGroup>
    </FormControl>
    </>
  )
}
